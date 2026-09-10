"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { industrialSolutionItems } from "@/data/homepage-mocks/IndustrialSolutions";
import IndustrialSolutionsCard from "./IndustrialSolutions-Card";

export default function IndustrialSolutionsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      direction: "rtl",
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <div ref={emblaRef} className="overflow-hidden -mx-2 sm:-mx-3 lg:-mx-4">
      <div className="flex">
        {industrialSolutionItems.map((item) => (
          <div
            key={item.id}
            className="
              min-w-0
              shrink-0
              grow-0
              basis-full
              px-2
              sm:basis-1/2
              sm:px-3
              xl:basis-1/3
              lg:px-4
              2xl:basis-1/4
            "
          >
            <IndustrialSolutionsCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
