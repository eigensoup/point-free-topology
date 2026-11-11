#!/usr/bin/env bash
# Renders the credit cards in credits.html and joins them to the film:
#   ./render.sh <film.mp4> <out.mp4> [--preview]
# --preview writes only the opening and ending segments (fast) next to <out>.
# Each card is "id:hold-seconds"; it fades in and out over black.
set -euo pipefail

OPENING=("krv-presents:3" "chapman:2.5" "zala:2.5")
ENDING=("memoriam:4" "directed:3" "appearances:5" "thanks:4" "photos:6" "krv:3" "copyright:4")

FADE=1.2      # seconds each card takes to fade in, and to fade out
GAP=0.6       # black between cards
LEAD=1.0      # black before the first card of a segment
TAIL=1.5      # black after the last card of a segment

# A clip cut into the film: Bertrand Russell's shoes and socks, straight after
# Rick Ball says "It just is ... as if God spoke." That line comes in two bursts
# (5324.1-5325.4 and 5326.1-5327.45 in v20); the cut sits in the 0.2s of silence
# after "spoke", before "And therefore", on a frame boundary of the uncredited
# cut (v20). Leave INSERT_FILE empty to skip.
INSERT_AT="${INSERT_AT:-5327.589}"
INSERT_FILE="$HOME/Academics/axiom-of-choice/socks-and-shoes/socks-and-shoes.mp4"
DIP=0.5       # dip to black either side of the insert
# Under the insert, the film's own intro music (v20 0-22s), lengthened by
# looping: it repeats almost exactly every 16.7s (18.3s sounds like 1.6s), so
# these spans are joined with 0.5s crossfades and end on the intro's closing
# sting. Each span is start-end in seconds of the uncredited film.
MUSIC=(1.4-18.3 1.6-18.3 1.6-22.0)
XFADE=0.5

HERE="$(cd "$(dirname "$0")" && pwd)"
FILM="$1"; OUT="$2"; PREVIEW="${3:-}"
WORK="$(mktemp -d)"; trap 'rm -rf "$WORK"' EXIT
CHROME="${CHROME:-$(ls -d ~/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-mac-arm64/chrome-headless-shell | tail -1)}"
FPS=24000/1001

card_png() {  # id -> $WORK/id.png (transparent)
  "$CHROME" --headless --disable-gpu --hide-scrollbars --default-background-color=00000000 \
    --allow-file-access-from-files --virtual-time-budget=8000 --window-size=1920,1080 \
    --screenshot="$WORK/$1.png" "file://$HERE/credits.html#$1" >/dev/null 2>&1
  [[ -s "$WORK/$1.png" ]] || { echo "failed to render card $1" >&2; exit 1; }
}

segment() {  # out.mp4 card:hold ...
  local out="$1"; shift
  local inputs=() chain="" t="$LEAD" i=0 last=""
  for c in "$@"; do
    local id="${c%%:*}" hold="${c##*:}"
    card_png "$id"
    local len; len=$(echo "$FADE*2 + $hold" | bc -l)
    inputs+=(-loop 1 -framerate "$FPS" -t "$len" -i "$WORK/$id.png")
    local n=$((i + 1))
    chain+="[$n:v]format=rgba,fade=in:st=0:d=$FADE:alpha=1,fade=out:st=$(echo "$FADE + $hold" | bc -l):d=$FADE:alpha=1,setpts=PTS+$t/TB[c$i];"
    chain+="${last:-[0:v]}[c$i]overlay=eof_action=pass:format=auto[v$i];"
    last="[v$i]"
    t=$(echo "$t + $len + $GAP" | bc -l); i=$n
  done
  local dur; dur=$(python3 -c "print(round(($t - $GAP + $TAIL)*24000/1001)*1001/24000)")  # whole frames
  ffmpeg -v error -y -f lavfi -i "color=black:s=1920x1080:r=$FPS:d=$dur" "${inputs[@]}" \
    -f lavfi -t "$dur" -i anullsrc=r=48000:cl=stereo \
    -filter_complex "${chain}${last}format=yuv420p[v]" -map "[v]" -map "$((i + 1)):a" \
    -c:v libx264 -crf 16 -preset slow -c:a pcm_s16le -shortest "$out"
  echo "$out: ${dur}s"
}

# Intermediates keep PCM audio: AAC pads each segment's end, which would pull the sound ahead of the picture.
segment "$WORK/opening.mkv" "${OPENING[@]}"
segment "$WORK/ending.mkv" "${ENDING[@]}"

if [[ "$PREVIEW" == "--preview" ]]; then
  cp "$WORK/opening.mkv" "${OUT%.mp4}-opening.mkv"; cp "$WORK/ending.mkv" "${OUT%.mp4}-ending.mkv"
  cp "$WORK"/*.png "$(dirname "$OUT")/"
  exit 0
fi

# Re-encode the whole film once: the segments' H.264 headers differ from the
# film's, so a stream-copy join would not play reliably in browsers.
# Low priority and capped threads so the machine stays usable (THREADS=0 for all cores).
T="${THREADS:-4}"
if [[ -n "$INSERT_FILE" ]]; then
  # Conform the clip to the film (23.976 fps, silent stereo), dipping to black at each end.
  n=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$INSERT_FILE")
  d=$(python3 -c "print(round($n*24000/1001)*1001/24000)")
  k=${#MUSIC[@]}; m="[1:a]asplit=$k"
  for ((j = 0; j < k; j++)); do m+="[s$j]"; done; m+=";"
  for ((j = 0; j < k; j++)); do span="${MUSIC[$j]}"; m+="[s$j]atrim=${span%-*}:${span#*-},asetpts=PTS-STARTPTS[m$j];"; done
  chain="[m0]"; for ((j = 1; j < k; j++)); do m+="${chain}[m$j]acrossfade=d=$XFADE:c1=qsin:c2=qsin[x$j];"; chain="[x$j]"; done
  m+="${chain}apad,atrim=duration=$d,afade=in:d=$DIP,afade=out:st=$(echo "$d - 0.4" | bc -l):d=0.4[a]"
  ffmpeg -v error -y -i "$INSERT_FILE" -t 30 -i "$FILM" -filter_complex \
    "[0:v]fps=$FPS,scale=1920:1080,format=yuv420p,trim=duration=$d,fade=in:d=$DIP,fade=out:st=$(echo "$d - $DIP" | bc -l):d=$DIP[v];$m" \
    -map "[v]" -map "[a]" -c:v libx264 -crf 16 -preset slow -c:a pcm_s16le -ac 2 -ar 48000 "$WORK/insert.mkv"
  cp "$WORK/insert.mkv" "${OUT%.mp4}-insert.mkv"  # for checking the music bed on its own
  # The film is opened twice, cut at INSERT_AT, so nothing has to be buffered across the insert.
  # Audio fades are short: the gap after "spoke" is only 0.2s.
  af=$(echo "$INSERT_AT - 0.08" | bc -l); vf=$(echo "$INSERT_AT - $DIP" | bc -l)
  nice -n 19 ffmpeg -v error -stats -y -threads "$T" -i "$WORK/opening.mkv" -t "$INSERT_AT" -i "$FILM" -i "$WORK/insert.mkv" \
    -ss "$INSERT_AT" -i "$FILM" -i "$WORK/ending.mkv" -filter_complex \
    "[1:v]fade=out:st=$vf:d=$DIP[f1v];[1:a]afade=out:st=$af:d=0.08[f1a];[3:v]fade=in:d=$DIP[f2v];[3:a]afade=in:d=0.05[f2a];
     [0:v]setsar=1[v0];[f1v]setsar=1[v1];[2:v]setsar=1[v2];[f2v]setsar=1[v3];[4:v]setsar=1[v4];
     [v0][0:a][v1][f1a][v2][2:a][v3][f2a][v4][4:a]concat=n=5:v=1:a=1[v][a]" \
    -map "[v]" -map "[a]" -c:v libx264 -threads "$T" -crf 19 -preset medium -profile:v high -pix_fmt yuv420p \
    -c:a aac -b:a 192k -movflags +faststart "$OUT"
  echo "insert: ${d}s at ${INSERT_AT}s of the film"
else
  nice -n 19 ffmpeg -v error -stats -y -threads "$T" -i "$WORK/opening.mkv" -i "$FILM" -i "$WORK/ending.mkv" -filter_complex \
    "[0:v]setsar=1[v0];[1:v]setsar=1[v1];[2:v]setsar=1[v2];[v0][0:a][v1][1:a][v2][2:a]concat=n=3:v=1:a=1[v][a]" \
    -map "[v]" -map "[a]" -c:v libx264 -threads "$T" -crf 19 -preset medium -profile:v high -pix_fmt yuv420p \
    -c:a aac -b:a 192k -movflags +faststart "$OUT"
fi
