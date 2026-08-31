import { CtaProps } from "@/types/cta";

export default function PrimaryCta({ title }: CtaProps) {
  return (
    <button
      type="button"
      className="
        group
        relative
        inline-flex
        w-full
        max-w-xs
        items-center
        justify-center
        overflow-hidden
        whitespace-nowrap
        rounded-sm
        bg-(--color-blue-500)
        px-4
        py-2.5
        text-xs
        font-semibold
        text-(--color-white)
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-(--color-blue-400)
        hover:shadow-lg
        hover:shadow-(--color-blue-500)/20
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
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-white/10
          transition-transform
          duration-500
          group-hover:translate-x-full
        "
      />

      <span className="relative">{title}</span>
    </button>
  );
}