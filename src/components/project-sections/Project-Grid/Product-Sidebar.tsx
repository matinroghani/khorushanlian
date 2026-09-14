"use client";

import { Filter, RotateCcw } from "lucide-react";

const filterGroups = [
  {
    title: "نوع محصول",
    options: [
      { label: "دیزل ژنراتور", value: "diesel-generator", checked: true },
      { label: "ژنراتور گازسوز", value: "gas-generator", checked: false },
      { label: "موتور و قطعات", value: "engine-parts", checked: false },
      { label: "تجهیزات جانبی", value: "accessories", checked: false },
    ],
  },
  {
    title: "توان خروجی (kVA)",
    options: [
      { label: "250 و کمتر", value: "p-250", checked: false },
      { label: "250 - 500", value: "p-500", checked: false },
      { label: "500 - 1000", value: "p-1000", checked: false },
      { label: "1000 - 2000", value: "p-2000", checked: false },
      { label: "بیش از 2000", value: "p-2000-plus", checked: false },
    ],
  },
  {
    title: "ولتاژ",
    options: [
      { label: "400 V", value: "v-400", checked: true },
      { label: "690 V", value: "v-690", checked: false },
      { label: "800 V", value: "v-800", checked: false },
      { label: "سایر", value: "v-other", checked: false },
    ],
  },
  {
    title: "فرکانس",
    options: [
      { label: "50 Hz", value: "f-50", checked: true },
      { label: "60 Hz", value: "f-60", checked: false },
    ],
  },
  {
    title: "برند",
    options: [
      { label: "Perkins", value: "perkins", checked: false },
      { label: "Cummins", value: "cummins", checked: false },
      { label: "Mitsubishi", value: "mitsubishi", checked: false },
      { label: "Volvo", value: "volvo", checked: false },
      { label: "Doosan", value: "doosan", checked: false },
      { label: "سایر", value: "other", checked: false },
    ],
  },
];

export default function ProductSidebar() {
  return (
    <aside
      className="
    w-full
    rounded-xl
    border
    border-(--color-border-light)
    bg-(--color-white)
    p-4
    lg:sticky
    lg:top-24
    lg:self-start
  "
    >
      <h2
        className="
          border-b
          border-(--color-border-light)
          pb-3
          text-sm
          font-bold
          text-(--color-text-primary)
        "
      >
        فیلترها
      </h2>

      <div className="mt-2 divide-y divide-(--color-border-light)">
        {filterGroups.map((group) => (
          <div key={group.title} className="py-4">
            <p
              className="
                mb-3
                text-xs
                font-bold
                text-(--color-text-primary)
              "
            >
              {group.title}
            </p>

            <div className="space-y-2.5">
              {group.options.map((option) => (
                <label
                  key={option.value}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-xs
                    text-(--color-text-secondary)
                    transition-colors
                    hover:text-(--color-text-primary)
                  "
                >
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="
                      h-4
                      w-4
                      shrink-0
                      cursor-pointer
                      rounded
                      border-(--color-border)
                      text-(--color-blue-500)
                      focus:ring-(--color-blue-500)/40
                    "
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <button
          type="button"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-(--color-blue-500)
            py-2.5
            text-xs
            font-bold
            text-white
            transition-colors
            hover:bg-(--color-navy-800)
          "
        >
          <Filter size={14} />
          اعمال فیلترها
        </button>

        <button
          type="button"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-(--color-border-light)
            py-2.5
            text-xs
            font-medium
            text-(--color-text-secondary)
            transition-colors
            hover:bg-(--color-surface)
          "
        >
          <RotateCcw size={14} />
          پاک کردن فیلترها
        </button>
      </div>
    </aside>
  );
}
