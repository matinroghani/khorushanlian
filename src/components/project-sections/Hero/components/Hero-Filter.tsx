"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { projectFilterItems } from "@/data/projects-mocks/project-filter";

export default function HeroFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilter =
    searchParams.get("category") ?? projectFilterItems[0].value;

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === projectFilterItems[0].value) {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    const queryString = params.toString();

    router.push(queryString ? `?${queryString}` : "?");
  };

  return (
    <div
      className="
        mt-8
        flex
        justify-center
        sm:mt-10
      "
    >
      <div
        className="
          grid
          w-full
          grid-cols-2
          gap-2
          rounded-md
          border
          border-white/10
          bg-(--color-navy-950)/70
          p-2
          backdrop-blur-sm
          sm:grid-cols-4
          sm:gap-1
        "
      >
        {projectFilterItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeFilter === item.value;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleFilterChange(item.value)}
              aria-pressed={isActive}
              className={`
                flex
                items-center
                justify-center
                gap-2
                rounded-md
                px-4
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                sm:text-base

                ${
                  isActive
                    ? `
                      bg-(--color-blue-500)
                      text-white
                      shadow-lg
                      shadow-(--color-blue-500)/20
                    `
                    : `
                      text-white/60
                      hover:bg-white/5
                      hover:text-white
                    `
                }

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-(--color-blue-400)
              `}
            >
              <Icon size={19} strokeWidth={1.8} className="shrink-0" />

              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
