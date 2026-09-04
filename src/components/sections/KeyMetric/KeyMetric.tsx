import { keyMetricItems } from "@/data/keyMetric";
import React from "react";

export default function KeyMetric() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-around
        gap-0
        px-(--spacing-page-x)
        py-4
        bg-(--trust-bg)
        md:flex-row
        rounded-br-xl
        rounded-bl-xl
      "
    >

      {keyMetricItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <React.Fragment key={item.id}>
            <div
              className="
                flex
                w-full
                items-start
                gap-3
                py-4
                md:w-auto
                md:py-0
              "
            >
              <Icon
                size={24}
                className="
                  shrink-0
                  text-(--trust-accent)
                "
              />

              <div className="flex flex-col gap-0.5">
                <span
                  className="
                    text-lg
                    font-bold
                    leading-tight
                    text-(--color-text-primary)
                  "
                >
                  {item.title}
                </span>

                <p
                  className="
                    text-sm
                    leading-6
                    text-(--color-text-secondary)
                    font-semibold
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>

            {index < keyMetricItems.length - 1 && (
              <div
                className="
                  h-px
                  w-full
                  shrink-0
                  bg-(--trust-border)
                  md:h-10
                  md:w-[2px]
                "
              />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}