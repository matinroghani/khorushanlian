import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full px-(--spacing-page-x) py-10">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-(--color-blue-500)" />
          <h2 className="text-lg font-bold text-(--color-text-primary)">
            گالری تصاویر
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-white text-(--color-text-secondary) hover:bg-(--color-surface-muted)">
            <ChevronRight size={16} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-white text-(--color-text-secondary) hover:bg-(--color-surface-muted)">
            <ChevronLeft size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.8fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-(--color-border-light) shadow-sm md:aspect-auto md:h-[420px]">
          <Image
            src={images[0]}
            alt="گالری اصلی"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl border border-(--color-border-light) shadow-sm"
            >
              <Image
                src={img}
                alt={`گالری ${i + 2}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              {i === 3 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <span className="text-lg font-bold text-white">
                    +{images.length - 5}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}