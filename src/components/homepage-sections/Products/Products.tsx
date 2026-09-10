import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductsCarousel from "./components/Products-Carousel";

export default function Products() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-(--radius-xl)
        border
        border-(--color-border-light)
        bg-(--color-surface)
        px-(--spacing-page-x)
        py-(--spacing-section-inner)
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-24
          left-0
          h-64
          w-64
          rounded-full
          bg-(--color-blue-500)/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-20
          right-0
          h-56
          w-56
          rounded-full
          bg-(--color-steel-500)/5
          blur-3xl
        "
      />

      {/* Header */}
      <header
        className="
          relative
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        <div className="max-w-2xl">
          <SectionTitle
            title="محصولات و تجهیزات"
            description="تأمین تجهیزات صنعتی، نیروگاهی و دریایی با استانداردهای بین‌المللی"
          />
        </div>

        <Link
          href="/products"
          className=" group inline-flex w-full items-center justify-center gap-2.5 rounded-(--radius-sm) border border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-sm font-medium text-(--color-text-primary) shadow-(--shadow-sm) transition-colors duration-200 hover:border-(--color-blue-500) hover:text-(--color-blue-500) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-blue-500) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface) sm:w-auto"
        >
          <span>مشاهده تجهیزات</span>

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

      {/* Products */}
      <ProductsCarousel />
    </section>
  );
}
