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
          href="/products"
          className=" group inline-flex w-full items-center justify-center gap-2.5 rounded-(--radius-sm) border border-(--color-border) bg-(--color-white) px-4 py-2.5 text-sm font-medium text-(--color-text-primary) shadow-(--shadow-sm) transition-colors duration-200 hover:border-(--color-blue-500) hover:text-(--color-blue-500) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-blue-500) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface) sm:w-auto">
          <span>مشاهده پروژه ها</span>

          <ArrowLeft
            size={16}
            strokeWidth={2}
            className="
      transition-transform
      duration-200
      group-hover:-translate-x-1
    "
          />
        </Link>
      </header>

      <ProjectsCarousel />
    </section>
  );
}
