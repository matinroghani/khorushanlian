import PrimaryCta from "@/components/shared/Cta/PrimaryCta";
import SecondaryCta from "@/components/shared/Cta/SecondaryCta";
import { ArrowLeft } from "lucide-react";

export default function Tagline() {
  return (
    <div className="flex max-w-2xl flex-col gap-4 text-center lg:text-right">
      <span className="text-sm font-medium text-(--color-surface)/50">
        خدمات فنی و مهندسی | نیروگاه و تجهیزات دریایی
      </span>

      <h1
        className="
          text-3xl
          font-bold
          leading-[1.4]
          text-(--color-surface)
          max-sm:text-(--color-surface)/80

          sm:text-4xl
          lg:text-5xl
          xl:text-6xl
        "
      >
        قدرت، پایداری و مهندسی برای زیرساخت‌های حیاتی
      </h1>

      <p
        className="
          max-w-lg
          mx-auto
          lg:mx-0
          text-sm
          leading-7
          text-(--color-surface)/50
          max-sm:text-(--color-surface)/80
          sm:text-base
          sm:leading-8
        "
      >
        راهکارهای تخصصی در تأمین، نگهداری و راهبری سیستم‌های تولید برق اضطراری و
        تجهیزات نیروگاهی و دریایی
      </p>

      <div className="flex flex-col gap-3 pt-2 items-center md:flex-row md:justify-center lg:justify-start">
        <PrimaryCta title="درخواست مشاوره فنی" />
        <SecondaryCta title="تماس با ما" icon={ArrowLeft} />
      </div>
    </div>
  );
}
