import { ProjectType } from "@/types/projects-types/projects/idnex";
import { ArrowLeft, Check, MapPin, MoveUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  item: ProjectType;
};

const categoryLabels: Record<ProjectType["category"], string> = {
  "power-generation": "نیروگاهی",
  industrial: "صنعتی",
  marine: "دریایی",
  maintenance: "تعمیر و نگهداری",
  consulting: "مشاوره مهندسی",
};

const statusLabels: Record<ProjectType["status"], string> = {
  completed: "تکمیل شده",
  ongoing: "در حال اجرا",
};

export default function ProjectCard({ item }: ProjectCardProps) {
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
        duration-500
        ease-out
        hover:-translate-y-1
        hover:border-(--color-blue-500)/30
        hover:shadow-[var(--shadow-lg)]
      "
    >
      <Link
        href={item.href}
        aria-label={`مشاهده جزئیات پروژه ${item.title}`}
        className="
          absolute
          inset-0
          z-20
          rounded-(--radius-lg)
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-(--color-blue-500)
          focus-visible:ring-offset-2
        "
      />

      {/* Visual */}
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          bg-(--color-navy-900)
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
            33vw
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-(--color-navy-950)/90
            via-(--color-navy-950)/20
            to-transparent
          "
        />

        {/* Top metadata */}
        <div
          className="
            absolute
            inset-x-4
            top-4
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {/* Project number */}
          <span
            className="
              font-mono
              text-xs
              font-medium
              tracking-[0.18em]
              text-white/70
              tabular-nums
            "
          >
            {String(item.id).padStart(2, "0")}
          </span>

          {/* Status */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-(--color-navy-950)/55
              px-3
              py-1.5
              text-[11px]
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${
                  item.status === "ongoing"
                    ? "bg-(--color-warning)"
                    : "bg-(--color-success)"
                }
              `}
            />
            {statusLabels[item.status]}
          </span>
        </div>

        {/* Project title */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div
            className="
              mb-2
              flex
              items-center
              gap-2
              text-[11px]
              font-medium
              tracking-wide
              text-(--color-blue-400)
            "
          >
            <span className="h-px w-5 bg-(--color-blue-400)" />
            {categoryLabels[item.category]}
          </div>

          {/* ✅ دیگر داخل <Link> نیست - فقط h2 */}
          <h2
            className="
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

        {/* Hover icon */}
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
          <MoveUpLeft size={17} strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
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

        {/* Project information */}
        <div
          className="
            mt-5
            grid
            grid-cols-2
            divide-x
            divide-x-reverse
            divide-(--color-border-light)
            border-y
            border-(--color-border-light)
            py-4
          "
        >
          <div className="flex flex-col gap-1.5 pl-4">
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-wider
                text-(--color-text-muted)
              "
            >
              کارفرما
            </span>
            <span
              className="
                line-clamp-1
                text-xs
                font-semibold
                text-(--color-text-primary)
              "
            >
              {item.client}
            </span>
          </div>

          <div className="flex flex-col gap-1.5 pr-4">
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-wider
                text-(--color-text-muted)
              "
            >
              موقعیت
            </span>
            <div
              className="
                flex
                min-w-0
                items-center
                gap-1.5
                text-xs
                font-semibold
                text-(--color-text-primary)
              "
            >
              <MapPin
                size={13}
                strokeWidth={1.8}
                className="shrink-0 text-(--color-blue-500)"
              />
              <span className="truncate">{item.location}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        {item.features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  bg-(--color-surface)
                  px-2.5
                  py-1.5
                  text-[11px]
                  font-medium
                  text-(--color-text-secondary)
                "
              >
                <Check
                  size={11}
                  strokeWidth={2}
                  className="text-(--color-blue-500)"
                />
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* 
          ✅ CTA فقط بصری است (لینک نیست) چون کل کارت لینک است.
          hover با group کار می‌کند.
        */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-(--color-border-light)
            pt-4
            text-sm
            font-semibold
            text-(--color-text-primary)
            transition-colors
            duration-200
            group-hover:text-(--color-blue-500)
          "
        >
          <span>مشاهده جزئیات پروژه</span>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-(--color-border)
              transition-all
              duration-300
              group-hover:border-(--color-blue-500)
              group-hover:bg-(--color-blue-500)
              group-hover:text-white
            "
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
              "
            />
          </span>
        </div>
      </div>
    </article>
  );
}
