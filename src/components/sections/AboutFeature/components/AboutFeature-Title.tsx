import { aboutFeatureItems } from "@/data/aboutFeature";
import { Factory } from "lucide-react";

export default function AboutFeatureTitle() {
  return (
    <div className="flex min-w-0 flex-col gap-7">
      <div className="flex items-start gap-4">
        <div
          className="
            shrink-0
            rounded-lg
            bg-(--color-blue-500)
            p-3
            text-(--color-white)
          "
        >
          <Factory className="size-9" />
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              text-(--color-text-primary)
              lg:text-3xl
            "
          >
            مهندسی برای عملکرد مطمئن
          </h2>

          <p
            className="
              text-sm
              leading-7
              text-(--color-text-secondary)
              lg:text-base
              lg:leading-8
            "
          >
            شرکت خدمات فنی و مهندسی دریای خروشان لیان با تمرکز بر خدمات تعمیرات
            و مشاوره نیروگاهی و کشتی، در حوزه تجهیزات تولید برق اضطراری، دیزل
            ژنراتورها و خدمات فنی و مهندسی فعالیت می‌کند. رویکرد مجموعه بر ارائه
            خدمات تخصصی، نگهداری تجهیزات و پشتیبانی فنی از زیرساخت‌هایی است که
            پایداری و تداوم عملکرد در آن‌ها اهمیت بالایی دارد.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 border-t border-(--color-border-light) pt-6 sm:grid-cols-3">
        {aboutFeatureItems.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="
              flex
              items-start
              gap-3
              rounded-(--radius-lg)
              bg-(--color-surface)
              p-4
            "
          >
            <Icon
              className="
                mt-0.5
                size-5
                shrink-0
                text-(--color-blue-500)
              "
            />

            <div className="min-w-0">
              <h3
                className="
                  text-sm
                  font-semibold
                  text-(--color-text-primary)
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-6
                  text-(--color-text-secondary)
                "
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
