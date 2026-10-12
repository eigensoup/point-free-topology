import {
  ConferenceBanner,
  FeaturedFigure,
  Hero,
  Opening,
  TourIndex,
} from "@/components/sections";
import { Pagination } from "@/components/site/Pagination";

export default function Home() {
  return (
    <>
      <Hero />
      <ConferenceBanner />
      <Opening />
      <FeaturedFigure />
      <TourIndex />
      <Pagination href="/" />
    </>
  );
}
