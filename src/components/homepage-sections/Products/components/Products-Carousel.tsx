"use client";

import { productItems } from "@/data/homepage-mocks/products";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "./Product-Card";

export default function ProductsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: "auto",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  return (
    <div className="mt-8 flex flex-col gap-6">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-mr-2 flex touch-pan-y">
          {productItems.map((item) => (
            <div
              key={item.id}
              className="
                min-w-0
                shrink-0
                grow-0
                basis-full
                pl-4
                sm:basis-1/2
                lg:basis-1/4
                lg:pl-5
              "
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {scrollSnaps.length > 1 && (
        <div
          className="
            flex
            items-center
            justify-center
            gap-2
          "
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`رفتن به صفحه ${index + 1}`}
              aria-current={selectedIndex === index}
              onClick={() => scrollTo(index)}
              className="
                h-2
                rounded-full
                transition-all
                duration-300
                ease-out
              "
              data-active={selectedIndex === index}
            >
              <span
                className={`
                  block
                  h-full
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    selectedIndex === index
                      ? "w-7 bg-(--color-blue-500)"
                      : "w-2 bg-(--color-steel-300) hover:bg-(--color-steel-500)"
                  }
                `}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
