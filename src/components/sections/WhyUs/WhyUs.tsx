import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { whyUsItems } from "@/data/whyUs";
import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <section className="rounded-xl px-(--spacing-page-x) py-12 bg-(--trust-bg) flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 w-full">
        <SectionTitle
          title="پایداری، بدون توقف"
          description="راهکارهایی برای صنایعی که تداوم عملکرد، یک ضرورت است."
        />
        <div className="flex flex-col gap-8 mt-8">
          <div
            className="
              grid
              w-full
              grid-cols-2
              gap-3
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
            "
          >
            {whyUsItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-(--color-border-light)
                    bg-(--color-white)
                    px-4
                    py-5
                    text-center
                    shadow-[var(--shadow-sm)]
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1.5
                    hover:border-(--color-blue-500)
                    hover:shadow-[var(--shadow-lg)]
                    hover:bg-gradient-to-b
                    hover:from-(--color-blue-50)
                    hover:to-(--color-white)
                  "
                >
                  <div
                    className="
                      absolute
                      -top-0.5
                      left-1/2
                      h-1
                      w-12
                      -translate-x-1/2
                      rounded-full
                      bg-(--color-blue-500)
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      group-hover:w-16
                    "
                  />

                  <Icon
                    size={36}
                    strokeWidth={1.5}
                    className="
                      text-(--color-blue-500)
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-[-3deg]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-(--color-text-primary)
                      transition-colors
                      duration-300
                      group-hover:text-(--color-blue-600)
                    "
                  >
                    {item.title}
                  </span>

                  <p
                    className="
                      text-xs
                      leading-relaxed
                      text-(--color-text-secondary)
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="shrink-0 order-first lg:order-none">
        <Image
          src="/images/ui/whyUs/whyUs-image.jpg"
          alt="چرا ما؟ - تصویر صنایع حیاتی"
          width={800}
          height={800}
          className="
            w-auto
            h-auto
            max-w-[400px]
            md:max-w-[500px]
            lg:max-w-[600px]
            xl:max-w-[700px]
            rounded-2xl
            shadow-[var(--shadow-md)]
            object-contain
          "
          priority
        />
      </div>
    </section>
  );
}