import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative size-12 shrink-0">
        <Image
          src="/images/logos/main-logo.png"
          alt="لوگوی دریای خروشان لیان"
          fill
          priority
          className="object-contain"
          sizes="60px"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-base font-bold leading-tight text-(--color-surface) sm:text-lg">
          دریای خروشان لیان
        </span>

        <span className="text-xs font-medium leading-tight text-(--color-text-secondary) sm:text-sm">
          خدمات فنی و مهندسی
        </span>
      </div>
    </div>
  );
}
