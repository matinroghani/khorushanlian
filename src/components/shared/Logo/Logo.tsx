import Image from "next/image";

type LogoProps = {
  size?: number; 
};

export default function Logo({ size = 60 }: LogoProps) {
  const containerSize = `${size}px`;

  return (
    <div className="flex items-center gap-3">
      <div
        className="relative shrink-0"
        style={{ width: containerSize, height: containerSize }}
      >
        <Image
          src="/images/logos/main-logo.png"
          alt="لوگوی دریای خروشان لیان"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-base font-bold leading-tight text-(--color-surface) sm:text-lg">
          دریای خروشان لیان
        </span>

        <span className="text-xs font-medium leading-tight text-(--color-surface)/55 sm:text-sm">
          خدمات فنی و مهندسی
        </span>
      </div>
    </div>
  );
}