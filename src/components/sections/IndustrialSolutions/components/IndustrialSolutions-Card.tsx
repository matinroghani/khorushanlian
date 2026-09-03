import { IndustrialSolutionType } from "@/types/IndustrialSolution";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type IndustrialProps = {
  item: IndustrialSolutionType;
};

export default function IndustrialSolutionsCard({
  item,
}: IndustrialProps) {
  const Icon = item.icon;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-(--color-border-light)
        bg-(--color-white)
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-(--color-blue-500)
        hover:shadow-[0_16px_40px_rgba(7,27,52,0.09)]
      "
    >
      <div
        className="
          relative
          aspect-[16/9]
          w-full
          shrink-0
          overflow-hidden
          bg-(--color-navy-950)
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
            group-hover:scale-105
          "
          sizes="
            (min-width: 1024px) 20vw,
            (min-width: 768px) 50vw,
            100vw
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-(--color-navy-950)/35
            via-transparent
            to-transparent
          "
        />
      </div>

      <div
        className="
          flex
          h-full
          flex-col
          p-4
          sm:p-5
        "
      >
        {/* Icon */}
        <div
          className="
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              flex
              size-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-(--color-border-light)
              bg-(--color-surface)
              text-(--color-blue-500)
              transition-all
              duration-300
              group-hover:border-(--color-blue-500)
              group-hover:bg-(--color-blue-500)
              group-hover:text-(--color-white)
              sm:size-12
            "
          >
            <Icon
              size={21}
              strokeWidth={1.8}
            />
          </div>

          <span
            className="
              mt-4
              h-px
              w-full
              bg-(--color-border-light)
            "
          />
        </div>

        {/* Information */}
        <div
          className="
            mt-5
            flex
            flex-col
            gap-2
            text-center
          "
        >
          <h3
            className="
              text-base
              font-bold
              leading-7
              text-(--color-text-primary)
              sm:text-lg
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-sm
              font-normal
              leading-6
              text-(--color-text-secondary)
              sm:leading-7
            "
          >
            {item.description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            mt-auto
            pt-6
          "
        >
          <div
            className="
              border-t
              border-(--color-border-light)
              text-left
              pt-4
            "
          >
            <Link
              href={item.href}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-(--color-blue-500)
                transition-all
                duration-300
                group-hover:gap-3
              "
            >
              <span>مشاهده بیشتر</span>

              <ArrowLeft
                size={17}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}