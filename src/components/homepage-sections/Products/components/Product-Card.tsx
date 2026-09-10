import { ProductType } from "@/types/homepage-types/product";
import { ArrowLeft, ArrowUpLeft, Check, Layers3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  item: ProductType;
};

const categoryLabels: Record<ProductType["category"], string> = {
  "power-generation": "تولید برق",
  "industrial-equipment": "تجهیزات صنعتی",
  "marine-equipment": "تجهیزات دریایی",
  "control-systems": "سیستم‌های کنترلی",
  "spare-parts": "قطعات یدکی",
};

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-(--radius-lg)
        border
        border-(--color-border-light)
        bg-(--color-white)
        shadow-[var(--shadow-sm)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-(--color-blue-500)/30
        hover:shadow-[var(--shadow-md)]
      "
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
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
            duration-700
            ease-out
            group-hover:scale-105
          "
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            25vw
          "
        />

        {/* Image gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-(--color-navy-950)/75
            via-(--color-navy-950)/10
            to-transparent
          "
        />

        {/* Category */}
        <div
          className="
            absolute
            top-4
            right-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-(--color-navy-950)/65
            px-3
            py-1.5
            text-xs
            font-medium
            text-white
            backdrop-blur-md
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-(--color-blue-400)
            "
          />

          {categoryLabels[item.category]}
        </div>

        {/* Product title on image */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-4
            sm:p-5
          "
        >
          <span
            className="
              mb-2
              block
              text-[11px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-(--color-steel-300)
            "
          >
            Khorushan Lian
          </span>

          <h2
            className="
              max-w-[90%]
              text-lg
              font-bold
              leading-7
              text-white
              sm:text-xl
            "
          >
            {item.title}
          </h2>
        </div>

        {/* Hover action */}
        <div
          className="
            pointer-events-none
            absolute
            left-4
            top-4
            flex
            h-10
            w-10
            -translate-x-2
            -translate-y-2
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpLeft size={17} strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div
        className="
          flex
          flex-1
          flex-col
          p-4
          sm:p-5
        "
      >
        {/* Description */}
        <p
          className="
            line-clamp-2
            text-sm
            leading-6
            text-(--color-text-secondary)
          "
        >
          {item.description}
        </p>

        {/* Features */}
        {item.features.length > 0 && (
          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >
            {item.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  border
                  border-(--color-border-light)
                  bg-(--color-surface)
                  px-2.5
                  py-1.5
                  text-[11px]
                  font-medium
                  text-(--color-text-secondary)
                "
              >
                <Check
                  size={12}
                  strokeWidth={2}
                  className="text-(--color-blue-500)"
                />

                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-4
            pt-5
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-medium
              text-(--color-text-muted)
            "
          >
            <Layers3 size={15} strokeWidth={1.8} />

            <span>تجهیزات صنعتی</span>
          </div>

          <Link
            href={item.href}
            className="
              group/link
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-(--color-text-primary)
              transition-colors
              duration-200
              hover:text-(--color-blue-500)
            "
          >
            <span>مشاهده محصول</span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-(--color-border)
                transition-all
                duration-200
                group-hover/link:border-(--color-blue-500)
                group-hover/link:bg-(--color-blue-500)
                group-hover/link:text-white
              "
            >
              <ArrowLeft
                size={15}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-200
                  group-hover/link:-translate-x-0.5
                "
              />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
