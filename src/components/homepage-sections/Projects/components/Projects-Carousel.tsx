"use client";

import ProjectCard from "@/components/shared/projects/ProjectCard/ProjectCard";
import { projectItems } from "@/data/projects-mocks/projects";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function ProjectsCarousel() {
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
    <div className="relative mt-8 flex flex-col gap-6">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-mr-2 flex touch-pan-y">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="
                min-w-0
                shrink-0
                grow-0
                basis-full
                pl-4
                sm:basis-1/2
                lg:basis-1/3
              "
            >
              <ProjectCard item={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {scrollSnaps.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`رفتن به پروژه‌های صفحه ${index + 1}`}
              aria-current={selectedIndex === index}
              onClick={() => scrollTo(index)}
              className="
                flex
                h-2
                items-center
                justify-center
                rounded-full
              "
            >
              <span
                className={`
                  block
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    selectedIndex === index
                      ? "w-8 bg-(--color-blue-500)"
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
