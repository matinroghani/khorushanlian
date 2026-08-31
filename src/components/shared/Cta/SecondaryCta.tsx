import { CtaProps } from "@/types/cta";

export default function SecondaryCta({
  title,
  icon: Icon,
}: CtaProps) {
  return (
    <button
      type="button"
      className="
        group
        inline-flex
        w-full
        max-w-xs
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        rounded-sm
        border
        border-(--color-border-dark)
        bg-transparent
        px-4
        py-2.5
        text-xs
        font-medium
        text-(--color-white)
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-(--color-blue-400)
        hover:bg-(--color-blue-500)/10
        hover:text-(--color-blue-400)
        hover:shadow-md
        active:translate-y-0
        active:scale-[0.98]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-(--color-blue-400)
        focus-visible:ring-offset-2
        focus-visible:ring-offset-(--color-navy-950)
        sm:text-sm
        lg:w-auto
        lg:max-w-none
      "
    >
      {Icon && (
        <Icon
          size={17}
          strokeWidth={1.8}
          className="
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />
      )}

      <span>{title}</span>
    </button>
  );
}