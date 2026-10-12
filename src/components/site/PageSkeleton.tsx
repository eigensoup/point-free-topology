import { Container } from "@/components/ui";
import { LatticeMark } from "@/components/decor";

/** Shown while a route's content streams in. Dynamic routes read `params`,
 *  which `cacheComponents` requires to sit under a Suspense boundary so the
 *  shell can still be prerendered. */
export function PageSkeleton() {
  return (
    <div className="bg-ink py-28 text-mint-wash">
      <Container>
        <div className="flex items-center gap-3 opacity-60">
          <LatticeMark className="h-7 w-7 animate-pulse" />
          <span className="font-display text-lg italic">Loading…</span>
        </div>
      </Container>
    </div>
  );
}
