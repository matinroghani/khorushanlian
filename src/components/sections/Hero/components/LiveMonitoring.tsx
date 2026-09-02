import { generatorMetricItems } from "@/data/fenerator";

export default function LiveMonitoring() {
  return (
    <div
      className="
        flex
        flex-col
        gap-6
        rounded-2xl
        border
        border-(--color-surface)/10
        bg-(--color-navy-950)/70
        p-6
        text-(--color-surface)
        shadow-xl
        backdrop-blur-lg
        min-w-[320px]
      "
    >
      <div className="flex items-center justify-between gap-8">
        <span className="text-sm font-medium text-(--color-surface)/70">
          وضعیت عملیاتی
        </span>

        <div className="flex items-center gap-2.5 text-sm font-medium">
          <span
            className="
              size-3
              rounded-full
              bg-(--color-success)
              shadow-[0_0_12px_var(--color-success)]
              animate-pulse
            "
          />
          <span className="text-(--color-surface)/90">آنلاین</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {generatorMetricItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="
                flex
                items-center
                justify-between
                py-2
                border-b
                border-(--color-surface)/5
                last:border-b-0
              "
            >
              <span className="flex items-center gap-3 text-sm text-(--color-surface)/70">
                <Icon size={18} className="text-(--color-surface)/50" />
                {item.label}
              </span>

              <span className=" font-semibold text-(--color-surface)/90">
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