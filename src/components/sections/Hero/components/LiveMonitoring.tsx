import { generatorMetricItems } from "@/data/generator";

export default function LiveMonitoring() {
  return (
    <div
      className="
        w-full
        max-w-full
        lg:min-w-[320px]
        flex
        flex-col
        gap-4
        sm:gap-5
        lg:gap-6
        rounded-2xl
        border
        border-(--color-surface)/10
        bg-(--color-navy-950)/70
        p-4
        sm:p-5
        lg:p-6
        text-(--color-surface)
        shadow-xl
        backdrop-blur-lg
      "
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-medium text-(--color-surface)/70 sm:text-sm">
          وضعیت عملیاتی
        </span>

        <div className="flex shrink-0 items-center gap-2 text-xs font-medium sm:text-sm">
          <span
            className="
              size-2.5
              shrink-0
              animate-pulse
              rounded-full
              bg-(--color-success)
              shadow-[0_0_12px_var(--color-success)]
              sm:size-3
            "
          />

          <span className="text-(--color-surface)/90">
            آنلاین
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        {generatorMetricItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
                flex
                items-center
                justify-between
                gap-3
                border-b
                border-(--color-surface)/5
                py-2.5
                last:border-b-0
                sm:py-3
              "
            >
              <span
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                  text-xs
                  text-(--color-surface)/70
                  sm:gap-3
                  sm:text-sm
                "
              >
                <Icon
                  size={17}
                  className="shrink-0 text-(--color-surface)/50"
                />

                <span className="truncate">
                  {item.label}
                </span>
              </span>

              <span
                className="
                  shrink-0
                  text-sm
                  font-semibold
                  text-(--color-surface)/90
                  sm:text-base
                "
              >
                {item.value}

                {item.unit && (
                  <span className="ml-0.5 font-normal text-(--color-surface)/50">
                    {item.unit}
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}