import { FeaturedFigure, Hero, Opening, TourIndex } from "@/components/sections";
import { Pagination } from "@/components/site/Pagination";

export default function Home() {
  return (
    <>
      <Hero />
      <Opening />
      <FeaturedFigure />
      <TourIndex />
      <Pagination href="/" />
    </>
  );
}
