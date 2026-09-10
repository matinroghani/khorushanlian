import Image from "next/image";
import React from "react";
import AboutFeatureTitle from "./components/AboutFeature-Title";

export default function AboutFeature() {
  return (
    <section
      className="
        overflow-hidden
        rounded-(--radius-xl)
        border
        border-(--color-border-light)
        bg-(--color-surface)
        px-(--spacing-page-x)
        py-(--spacing-section-inner)
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-8
          lg:flex-row
          lg:items-center
          lg:gap-12
        "
      >
        {" "}
        <div className="w-full min-w-0 lg:flex-1">
          <AboutFeatureTitle />
        </div>
        <div
          className="
            w-full
            min-w-0
            lg:flex-1
          "
        >
          <Image
            src="/images/ui/whyUs/whyUs-image.jpg"
            alt="چرا ما؟ - تصویر صنایع حیاتی"
            width={800}
            height={800}
            priority
            className="
              block
              h-auto
              w-full
              rounded-(--radius-lg)
              object-cover
              shadow-(--shadow-md)
            "
          />
        </div>
      </div>
    </section>
  );
}
