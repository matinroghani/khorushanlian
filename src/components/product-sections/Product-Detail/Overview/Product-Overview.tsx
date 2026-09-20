"use client";

import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";

import type { ProductType } from "@/types/product-types/product";

export default function ProductOverview({ product }: { product: ProductType }) {
  const images =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [
          {
            id: 1,
            image: product.image,
            alt: product.title,
          },
        ];

  const [selectedImage, setSelectedImage] = useState(0);
  const currentImage = images[selectedImage] ?? images[0];
  const totalImages = images.length;

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % totalImages);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12 ">
      {/* ── Left: Description + Features ── */}
      <div className="order-2 min-w-0 lg:order-1">
        {/* Header with eyebrow */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-6 bg-(--color-blue-500)" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-blue-500)">
              Overview
            </span>
          </div>

          <h2 className="text-xl font-bold text-(--color-text-primary) sm:text-2xl">
            معرفی محصول
          </h2>

          <div className="mt-3 h-px w-full bg-gradient-to-l from-(--color-blue-500)/40 via-(--color-border-light) to-transparent" />
        </div>

        <p className="max-w-3xl text-sm leading-8 text-(--color-text-secondary)">
          {product.longDescription ?? product.description}
        </p>

        {/* Features list — industrial checklist */}
        {product.features && product.features.length > 0 && (
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-(--color-text-muted)">
                Highlights
              </span>
              <span className="h-px flex-1 bg-(--color-border-light)" />
              <span className="font-mono text-[10px] font-bold text-(--color-text-muted)">
                {String(product.features.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-(--color-border-light) bg-(--color-border-light) sm:grid-cols-2">
              {product.features.map((feature, index) => (
                <div
                  key={feature}
                  className="group relative flex items-start gap-3 bg-white p-4 transition-colors hover:bg-(--color-surface-blue)/30"
                >
                  {/* Number + Check block */}
                  <div className="relative flex h-7 w-7 shrink-0 items-center justify-center border border-(--color-blue-500)/30 bg-(--color-blue-500)/5 text-(--color-blue-500) transition-all group-hover:border-(--color-blue-500) group-hover:bg-(--color-blue-500)/15">
                    <Check size={13} strokeWidth={3} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-(--color-text-muted)">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-0.5 text-sm leading-6 text-(--color-text-secondary)">
                      {feature}
                    </p>
                  </div>

                  {/* Left accent on hover */}
                  <span className="absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-(--color-blue-500) transition-transform duration-300 group-hover:scale-y-100" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Right: Gallery viewer ── */}
      <div
        id="gallery"
        className="order-1 min-w-0 lg:order-2 lg:max-w-[560px] lg:justify-self-end lg:w-full"
      >
        {/* Main viewer with industrial frame */}
        <div className="relative">
          {/* Blueprint corner marks */}
          <span className="absolute -right-1 -top-1 z-20 h-5 w-5 border-r-2 border-t-2 border-(--color-blue-500)/70" />
          <span className="absolute -bottom-1 -left-1 z-20 h-5 w-5 border-b-2 border-l-2 border-(--color-blue-500)/70" />

          <div className="relative aspect-[16/10] w-full overflow-hidden border border-(--color-border-light) ">
            {/* Technical grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-10 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Product image */}
            <Image
              src={currentImage.image}
              alt={currentImage.alt}
              fill
              className="object-contain p-4 transition-transform duration-500 sm:p-6"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />

            {/* Top-left: image counter */}
            <div className="absolute right-3 top-3 z-20 flex items-center gap-1 border border-(--color-border-light) bg-white/90 px-2 py-1 font-mono text-[10px] font-bold text-(--color-text-primary) backdrop-blur-md">
              <span className="text-(--color-blue-500)">
                {String(selectedImage + 1).padStart(2, "0")}
              </span>
              <span className="text-(--color-text-muted)">/</span>
              <span className="text-(--color-text-muted)">
                {String(totalImages).padStart(2, "0")}
              </span>
            </div>

            {/* Top-right: expand label */}
            <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 border border-(--color-border-light) bg-white/90 px-2 py-1 backdrop-blur-md">
              <Maximize2 size={10} className="text-(--color-text-muted)" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-(--color-text-muted)">
                Preview
              </span>
            </div>

            {/* Bottom-left: model label */}
            {product.model && (
              <div className="absolute bottom-3 right-3 z-20 border border-(--color-border-light) bg-white/90 px-2 py-1 font-mono text-[10px] font-bold text-(--color-text-primary) backdrop-blur-md">
                {product.model}
              </div>
            )}

            {/* Navigation arrows (only if multiple images) */}
            {totalImages > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="تصویر قبلی"
                  className="group absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-(--color-border-light) bg-white/90 text-(--color-text-primary) backdrop-blur-md transition-all hover:border-(--color-blue-500) hover:bg-(--color-blue-500) hover:text-white"
                >
                  <ChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="تصویر بعدی"
                  className="group absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-(--color-border-light) bg-white/90 text-(--color-text-primary) backdrop-blur-md transition-all hover:border-(--color-blue-500) hover:bg-(--color-blue-500) hover:text-white"
                >
                  <ChevronLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-0.5"
                  />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Thumbnails strip */}
        {totalImages > 1 && (
          <div className="mt-3">
            {/* Header strip */}
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-(--color-text-muted)">
                Gallery
              </span>
              <span className="h-px flex-1 bg-(--color-border-light)" />
            </div>

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {images.map((item, index) => {
                const isActive = selectedImage === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`نمایش ${item.alt}`}
                    aria-pressed={isActive}
                    className={`group relative aspect-[4/3] overflow-hidden border bg-(--color-surface-muted) transition-all ${
                      isActive
                        ? "border-(--color-blue-500)"
                        : "border-(--color-border-light) hover:border-(--color-blue-500)/50"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="120px"
                    />

                    {/* Active overlay */}
                    {isActive && (
                      <span className="absolute inset-0 bg-(--color-blue-500)/10" />
                    )}

                    {/* Number badge */}
                    <span
                      className={`absolute bottom-1 right-1 flex h-4 min-w-4 items-center justify-center border px-1 font-mono text-[8px] font-bold backdrop-blur-md transition-colors ${
                        isActive
                          ? "border-(--color-blue-500) bg-(--color-blue-500) text-white"
                          : "border-(--color-border-light) bg-white/90 text-(--color-text-muted)"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Active corner accent */}
                    {isActive && (
                      <>
                        <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-(--color-blue-500)" />
                        <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-(--color-blue-500)" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}