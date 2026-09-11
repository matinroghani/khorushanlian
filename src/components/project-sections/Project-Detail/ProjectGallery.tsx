"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const visibleImages = images.slice(1, 5);

  return (
    <section className="w-full px-(--spacing-page-x) py-12">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-(--color-blue-500)" />

          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-(--color-text-primary) sm:text-xl">
              گالری تصاویر
            </h2>

            <span className="text-xs font-medium text-(--color-text-muted)">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToNext}
            aria-label="تصویر بعدی"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-(--color-border)
              bg-white
              text-(--color-text-secondary)
              transition-all
              duration-200
              hover:border-(--color-blue-500)/40
              hover:bg-(--color-surface)
              hover:text-(--color-blue-500)
              active:scale-95
            "
          >
            <ChevronRight size={17} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="تصویر قبلی"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-(--color-border)
              bg-white
              text-(--color-text-secondary)
              transition-all
              duration-200
              hover:border-(--color-blue-500)/40
              hover:bg-(--color-surface)
              hover:text-(--color-blue-500)
              active:scale-95
            "
          >
            <ChevronLeft size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.8fr_1fr]">
        {/* Main Image */}
        <button
          type="button"
          onClick={() => setActiveIndex(activeIndex)}
          className="
            group
            relative
            min-h-[280px]
            overflow-hidden
            rounded-(--radius-lg)
            border
            border-(--color-border-light)
            bg-(--color-navy-900)
            text-right
            shadow-[var(--shadow-sm)]
            md:h-[420px]
          "
        >
          <Image
            src={images[activeIndex]}
            alt={`تصویر پروژه ${activeIndex + 1}`}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.025]
            "
            sizes="(max-width: 768px) 100vw, 65vw"
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/35
              via-transparent
              to-transparent
              opacity-100
            "
          />

          {/* Counter */}
          <div
            className="
              absolute
              bottom-4
              left-4
              rounded-full
              border
              border-white/15
              bg-black/45
              px-3
              py-1.5
              text-xs
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            {activeIndex + 1} / {images.length}
          </div>
        </button>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {visibleImages.map((image, index) => {
            const imageIndex = index + 1;
            const isActive = activeIndex === imageIndex;
            const remainingCount = images.length - 5;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                aria-label={`نمایش تصویر ${imageIndex + 1}`}
                className={`
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-(--radius-lg)
                  border
                  bg-(--color-navy-900)
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-(--color-blue-500) ring-2 ring-(--color-blue-500)/15"
                      : "border-(--color-border-light) hover:border-(--color-blue-500)/40"
                  }
                `}
              >
                <Image
                  src={image}
                  alt={`تصویر پروژه ${imageIndex + 1}`}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 50vw, 22vw"
                />

                {/* Hover overlay */}
                <div
                  className={`
                    absolute
                    inset-0
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "bg-(--color-blue-500)/10"
                        : "bg-black/0 group-hover:bg-black/10"
                    }
                  `}
                />

                {/* More images */}
                {index === 3 && remainingCount > 0 && (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/45
                      backdrop-blur-[2px]
                    "
                  >
                    <span className="text-lg font-bold text-white">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={`${image}-thumb-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`تصویر ${index + 1}`}
              className={`
                relative
                h-14
                w-20
                shrink-0
                overflow-hidden
                rounded-lg
                border
                bg-(--color-navy-900)
                transition-all
                duration-200
                ${
                  activeIndex === index
                    ? "border-(--color-blue-500) ring-2 ring-(--color-blue-500)/15"
                    : "border-(--color-border-light) opacity-70 hover:opacity-100"
                }
              `}
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}