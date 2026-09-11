"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type ProjectEquipmentProps = {
  equipmentList: { title: string; image: string }[];
};

export default function ProjectEquipment({
  equipmentList,
}: ProjectEquipmentProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!equipmentList || equipmentList.length === 0) return null;

  const scroll = (direction: "next" | "prev") => {
    const container = scrollRef.current;

    if (!container) return;

    const amount = container.clientWidth * 0.75;

    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full border-y border-(--color-border-light) bg-(--color-surface) py-12">
      <div className="w-full px-(--spacing-page-x)">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-(--color-blue-500)" />

            <div>
              <h2 className="text-lg font-bold text-(--color-text-primary) sm:text-xl">
                تجهیزات استفاده شده
              </h2>

              <p className="mt-1 text-xs leading-5 text-(--color-text-muted)">
                تجهیزات و ماشین‌آلات به‌کاررفته در اجرای پروژه
              </p>
            </div>
          </div>

          {/* Navigation */}
          {equipmentList.length > 1 && (
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("next")}
                aria-label="تجهیزات بعدی"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-(--color-border)
                  bg-(--color-white)
                  text-(--color-text-secondary)
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-200
                  hover:border-(--color-blue-500)/40
                  hover:bg-(--color-surface-blue)
                  hover:text-(--color-blue-500)
                  active:scale-95
                "
              >
                <ChevronRight size={17} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                onClick={() => scroll("prev")}
                aria-label="تجهیزات قبلی"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-(--color-border)
                  bg-(--color-white)
                  text-(--color-text-secondary)
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-200
                  hover:border-(--color-blue-500)/40
                  hover:bg-(--color-surface-blue)
                  hover:text-(--color-blue-500)
                  active:scale-95
                "
              >
                <ChevronLeft size={17} strokeWidth={1.8} />
              </button>
            </div>
          )}
        </div>

        {/* Equipment list */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
            scroll-smooth
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {equipmentList.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="
                group
                w-[170px]
                shrink-0
                snap-start
                rounded-(--radius-lg)
                border
                border-(--color-border-light)
                bg-(--color-white)
                p-3
                shadow-[var(--shadow-sm)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-(--color-blue-500)/30
                hover:shadow-[var(--shadow-md)]
                sm:w-[190px]
                lg:w-[210px]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-lg
                  bg-(--color-surface-muted)
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                  sizes="
                    (max-width: 640px) 170px,
                    (max-width: 1024px) 190px,
                    210px
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-(--color-navy-950)/20
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Content */}
              <div className="px-1 pb-1 pt-3">
                <h3
                  className="
                    line-clamp-2
                    text-center
                    text-xs
                    font-bold
                    leading-5
                    text-(--color-text-primary)
                    transition-colors
                    duration-200
                    group-hover:text-(--color-blue-500)
                  "
                >
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile hint */}
        {equipmentList.length > 2 && (
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-(--color-text-muted) sm:hidden">
            <span className="h-px w-4 bg-(--color-border)" />
            <span>برای مشاهده تجهیزات بیشتر اسکرول کنید</span>
            <span className="h-px w-4 bg-(--color-border)" />
          </div>
        )}
      </div>
    </section>
  );
}