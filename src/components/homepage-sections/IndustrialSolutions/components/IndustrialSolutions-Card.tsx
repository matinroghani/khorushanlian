import { IndustrialSolutionType } from "@/types/homepage-types/IndustrialSolution";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type IndustrialProps = {
  item: IndustrialSolutionType;
};

export default function IndustrialSolutionsCard({ item }: IndustrialProps) {
  const Icon = item.icon;

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-(--color-border-light)
        bg-(--color-surface)
        shadow-[var(--shadow-sm)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1.5
        hover:border-(--color-blue-500)
        hover:shadow-[var(--shadow-lg)]
        hover:bg-gradient-to-b
        hover:from-(--color-blue-50)/20
        hover:to-(--color-white)
      "
    >
      {/* Decorative top line - appears on hover */}
      <div
        className="
          absolute
          -top-0.5
          left-1/2
          h-1
          w-12
          -translate-x-1/2
          rounded-full
          bg-(--color-blue-500)
          opacity-0
          transition-all
          duration-300
          ease-out
          group-hover:opacity-100
          group-hover:w-20
          z-10
        "
      />

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
            duration-700
            ease-out
            group-hover:scale-110
          "
          sizes="
            (min-width: 1536px) 18vw,
            (min-width: 1280px) 30vw,
            (min-width: 768px) 45vw,
            100vw
          "
        />

        {/* Gradient overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-(--color-navy-950)/50
            via-transparent
            to-transparent
            transition-opacity
            duration-300
            group-hover:opacity-80
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
          lg:p-6
        "
      >
        {/* Icon & separator */}
        <div className="flex flex-col items-center">
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
              ease-out
              group-hover:border-(--color-blue-500)
              group-hover:bg-(--color-blue-500)
              group-hover:text-(--color-white)
              group-hover:scale-110
              group-hover:shadow-[var(--shadow-sm)]
              sm:size-12
            "
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>

          <span
            className="
              mt-3.5
              h-px
              w-full
              bg-(--color-border-light)
              transition-colors
              duration-300
              group-hover:bg-(--color-blue-200)
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            mt-4
            flex
            flex-col
            gap-2
            text-center
          "
        >
          <h3
            className="
              text-sm
              font-bold
              leading-6
              text-(--color-text-primary)
              transition-colors
              duration-300
              group-hover:text-(--color-blue-600)
              sm:text-base
            "
          >
            <Link href={item.href}>{item.title}</Link>
          </h3>

          <p
            className="
              text-xs
              font-normal
              leading-relaxed
              text-(--color-text-secondary)
              sm:text-sm
              sm:leading-6
            "
          >
            {item.description}
          </p>
        </div>

        {/* Footer link */}
        <div className="mt-auto pt-5">
          <div
            className="
              border-t
              border-(--color-border-light)
              pt-4
              text-left
              transition-colors
              duration-300
              group-hover:border-(--color-blue-200)
            "
          >
            <Link
              href={item.href}
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-(--color-blue-500)
                transition-all
                duration-300
                ease-out
                hover:text-(--color-navy-800)
                group-hover:gap-3.5
                sm:text-sm
              "
            >
              <span>مشاهده بیشتر</span>
              <ArrowLeft
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
