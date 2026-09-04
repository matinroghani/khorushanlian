import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectsCarousel from "./components/Projects-Carousel";

export default function Projects() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-(--radius-xl)
        border
        border-(--color-border-light)
        bg-(--color-white)
        px-(--spacing-page-x)
        py-(--spacing-section-inner)
      "
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
      />

      {/* Accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-(--color-blue-500)/6
          blur-3xl
        "
      />

      {/* Header */}
      <header
        className="
          relative
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        <div className="max-w-2xl">
          <SectionTitle
            title="پروژه‌های اجرا شده"
            description="نمونه‌ای از پروژه‌های مهندسی و صنعتی خروشان لیان"
          />
        </div>

        <Link
          href="/projects"
          className="
            group
            inline-flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-(--radius-sm)
            border
            border-(--color-border)
            bg-(--color-white)
            px-5
            py-3
            text-sm
            font-semibold
            text-(--color-text-primary)
            shadow-[var(--shadow-sm)]
            transition-all
            duration-300
            ease-out
            hover:-translate-y-0.5
            hover:border-(--color-blue-500)
            hover:text-(--color-blue-500)
            hover:shadow-[var(--shadow-md)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--color-blue-500)
            focus-visible:ring-offset-2
            sm:w-auto
          "
        >
          <span>مشاهده همه پروژه‌ها</span>

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-(--color-surface-muted)
              transition-all
              duration-300
              group-hover:bg-(--color-blue-500)
              group-hover:text-white
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
              "
            />
          </span>
        </Link>
      </header>

      <ProjectsCarousel />
    </section>
  );
}
