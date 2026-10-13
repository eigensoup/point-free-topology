import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Grain } from "@/components/decor";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pointfreetopology.com"),
  title: {
    default: "Pointfree Topology — topology without points",
    template: "%s · Pointfree Topology",
  },
  description:
    "A small gallery for frames, locales and the people who built them — beginning with Bernhard Banaschewski (1926–2022).",
  keywords: [
    "pointfree topology",
    "pointless topology",
    "frames and locales",
    "Bernhard Banaschewski",
    "Stone duality",
    "sublocale",
    "category theory",
  ],
  openGraph: {
    type: "website",
    url: "https://pointfreetopology.com",
    siteName: "Pointfree Topology",
    title: "Pointfree Topology — topology without points",
    description:
      "Frames, locales, and the people who built them. Featuring Bernhard Banaschewski.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pointfree Topology — topology without points",
    description:
      "Frames, locales, and the people who built them. Featuring Bernhard Banaschewski.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="min-h-screen antialiased">
        <Grain />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-mint-wash"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
