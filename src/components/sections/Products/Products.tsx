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
            focus-visible:ring-offset-(--color-surface)
            sm:w-auto
          "
        >
          <span>مشاهده همه محصولات</span>

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

      {/* Products */}
      <ProductsCarousel />
    </section>
  );
}
