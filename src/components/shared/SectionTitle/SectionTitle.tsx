import { Settings2 } from "lucide-react";

type SectionTitleProps = {
  title: string;
  description?: string;
};

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div
      className="
        mx-auto
        flex
        flex-col
        items-center
        gap-2.5
        px-(--spacing-page-x)
        text-center
        sm:gap-3
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-2.5
          md:gap-3
        "
      >
        <Settings2
          className="
            size-4
            shrink-0
            text-(--color-blue-500)
            sm:size-[17px]
            md:size-[18px]
          "
          strokeWidth={1.8}
        />

        <h2
          className="
            text-xl
            font-bold
            leading-snug
            tracking-tight
            text-(--color-text-primary)
            sm:text-2xl
            md:text-3xl
            lg:text-[2.125rem]
          "
        >
          {title}
        </h2>

        <Settings2
          className="
            size-4
            shrink-0
            text-(--color-blue-500)
            sm:size-[17px]
            md:size-[18px]
          "
          strokeWidth={1.8}
        />
      </div>

      {description && (
        <p
          className="
            px-3
            lg:px-0
            max-w-xl
            text-sm
            font-normal
            leading-6
            text-(--color-text-secondary)
            sm:max-w-2xl
            sm:leading-7
            md:text-base
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
