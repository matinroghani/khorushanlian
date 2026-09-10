import PrimaryCta from "@/components/shared/Cta/PrimaryCta";
import SecondaryCta from "@/components/shared/Cta/SecondaryCta";
import { ArrowLeft, Phone, ShieldCheck, Wrench } from "lucide-react";

export default function Cta() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        rounded-(--radius-xl)
        border
        border-(--color-blue-500)/20
        bg-(--color-navy-950)
        px-(--spacing-page-x)
        py-6
        lg:py-7
      "
    >
      {/* Industrial grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-40
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Main glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          -z-10
          size-72
          rounded-full
          bg-(--color-blue-500)/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -left-20
          -z-10
          size-64
          rounded-full
          bg-(--color-blue-400)/5
          blur-3xl
        "
      />

      {/* Content */}
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Text */}
        <div className="min-w-0">
          <div className="mb-2.5 flex items-center gap-2">
            <div
              className="
                flex
                size-7
                shrink-0
                items-center
                justify-center
                rounded-md
                border
                border-(--color-blue-400)/30
                bg-(--color-blue-500)/10
                text-(--color-blue-400)
              "
            >
              <Wrench className="size-3.5" />
            </div>

            <span className="text-xs font-medium text-(--color-blue-400) lg:text-sm">
              خدمات فنی و مهندسی
            </span>
          </div>

          <h2
            className="
              max-w-4xl
              text-xl
              font-bold
              leading-8
              text-(--color-white)
              lg:text-2xl
              lg:leading-9
          "
          >
            زیرساخت حیاتی شما،
            <span className="text-(--color-blue-400)">
              {" "}
              باید همیشه آماده باشد.
            </span>
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-xs
              leading-6
              text-(--color-steel-300)
              lg:text-sm
              lg:leading-7
            "
          >
            برای تعمیرات، نگهداری، تأمین توان اضطراری و مشاوره فنی،
            راهکار متناسب با نیاز پروژه خود را با تیم دریای خروشان لیان بررسی
            کنید.
          </p>

          {/* Indicators */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-1.5 text-xs text-(--color-steel-300)">
              <ShieldCheck className="size-3.5 text-(--color-blue-400)" />
              پشتیبانی تخصصی
            </div>

            <div className="flex items-center gap-1.5 text-xs text-(--color-steel-300)">
              <Wrench className="size-3.5 text-(--color-blue-400)" />
              تعمیر و نگهداری
            </div>

            <div className="flex items-center gap-1.5 text-xs text-(--color-steel-300)">
              <Phone className="size-3.5 text-(--color-blue-400)" />
              مشاوره فنی
            </div>
          </div>
        </div>

        {/* Actions */}
        <div
          className="
            flex
            w-full
            shrink-0
            flex-col
            gap-2
            sm:w-auto
            sm:flex-row
          "
        >
          <PrimaryCta title="تماس با ما" />

          <SecondaryCta
            title="درخواست مشاوره فنی"
            icon={ArrowLeft}
          />
        </div>
      </div>

      {/* Technical accent line */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-1/3
          bg-linear-to-r
          from-transparent
          via-(--color-blue-500)
          to-transparent
          opacity-60
        "
      />
    </section>
  );
}