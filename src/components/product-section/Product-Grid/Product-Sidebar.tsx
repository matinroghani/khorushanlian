"use client";

import {
  Filter,
  RotateCcw,
  X,
} from "lucide-react";

import {
  productFilterGroups,
} from "@/data/products-mocks/product-page/product-page";

import type {
  ProductCategory,
  ProductBrand,
} from "@/types/product-types/product";

import type {
  ProductFilters,
} from "@/types/product-types/product-filter/product-filter";

type ProductSidebarProps = {
  filters: ProductFilters;
  onChange: (
    filters: ProductFilters,
  ) => void;
  onReset: () => void;
  onClose?: () => void;
};

export default function ProductSidebar({
  filters,
  onChange,
  onReset,
  onClose,
}: ProductSidebarProps) {
  const isChecked = (
    groupId: string,
    value: string,
  ) => {
    switch (groupId) {
      case "category":
        return filters.categories.includes(
          value as ProductCategory,
        );

      case "power":
        return filters.powerRanges.includes(
          value,
        );

      case "voltage":
        return filters.voltages.includes(
          value,
        );

      case "frequency":
        return filters.frequencies.includes(
          value,
        );

      case "brand":
        return filters.brands.includes(
          value as ProductBrand,
        );

      default:
        return false;
    }
  };

  const toggleOption = (
    groupId: string,
    value: string,
  ) => {
    const next = {
      ...filters,
    };

    switch (groupId) {
      case "category": {
        const current =
          filters.categories;

        const exists =
          current.includes(
            value as ProductCategory,
          );

        next.categories = exists
          ? current.filter(
              (item) => item !== value,
            )
          : [
              ...current,
              value as ProductCategory,
            ];

        break;
      }

      case "power": {
        const current =
          filters.powerRanges;

        next.powerRanges =
          current.includes(value)
            ? current.filter(
                (item) => item !== value,
              )
            : [...current, value];

        break;
      }

      case "voltage": {
        const current =
          filters.voltages;

        next.voltages =
          current.includes(value)
            ? current.filter(
                (item) => item !== value,
              )
            : [...current, value];

        break;
      }

      case "frequency": {
        const current =
          filters.frequencies;

        next.frequencies =
          current.includes(value)
            ? current.filter(
                (item) => item !== value,
              )
            : [...current, value];

        break;
      }

      case "brand": {
        const current =
          filters.brands;

        next.brands =
          current.includes(
            value as ProductBrand,
          )
            ? current.filter(
                (item) => item !== value,
              )
            : [
                ...current,
                value as ProductBrand,
              ];

        break;
      }
    }

    onChange(next);
  };

  const activeFilterCount =
    filters.categories.length +
    filters.powerRanges.length +
    filters.voltages.length +
    filters.frequencies.length +
    filters.brands.length;

  return (
    <aside
      className="
        w-full
        rounded-xl
        border
        border-(--color-border-light)
        bg-(--color-white)
        shadow-[var(--shadow-sm)]
        lg:sticky
        lg:top-24
        lg:self-start
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-(--color-border-light)
          px-4
          py-4
        "
      >
        <div className="flex items-center gap-2">
          <Filter
            size={16}
            className="text-(--color-blue-500)"
          />

          <h2
            className="
              text-sm
              font-bold
              text-(--color-text-primary)
            "
          >
            فیلتر محصولات
          </h2>

          {activeFilterCount > 0 && (
            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-(--color-blue-500)
                px-1.5
                text-[10px]
                font-bold
                text-white
              "
            >
              {activeFilterCount}
            </span>
          )}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-(--color-text-muted)
              transition-colors
              hover:bg-(--color-surface)
              hover:text-(--color-text-primary)
            "
            aria-label="بستن فیلترها"
          >
            <X size={17} />
          </button>
        )}
      </div>

      {/* FILTER GROUPS */}
      <div className="divide-y divide-(--color-border-light)">
        {productFilterGroups.map(
          (group) => (
            <div
              key={group.id}
              className="px-4 py-4"
            >
              <h3
                className="
                  mb-3
                  text-xs
                  font-bold
                  text-(--color-text-primary)
                "
              >
                {group.title}
              </h3>

              <div className="space-y-2.5">
                {group.options.map(
                  (option) => {
                    const checked =
                      isChecked(
                        group.id,
                        option.value,
                      );

                    return (
                      <label
                        key={option.value}
                        className="
                          flex
                          cursor-pointer
                          items-center
                          gap-2.5
                          text-xs
                          text-(--color-text-secondary)
                          transition-colors
                          hover:text-(--color-text-primary)
                        "
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            toggleOption(
                              group.id,
                              option.value,
                            )
                          }
                          className="
                            h-4
                            w-4
                            shrink-0
                            cursor-pointer
                            rounded
                            border-(--color-border)
                            text-(--color-blue-500)
                            accent-(--color-blue-500)
                            focus:ring-(--color-blue-500)/30
                          "
                        />

                        <span>
                          {option.label}
                        </span>
                      </label>
                    );
                  },
                )}
              </div>
            </div>
          ),
        )}
      </div>

      {/* ACTIONS */}
      <div className="space-y-2 p-4">
        <button
          type="button"
          onClick={() => onChange(filters)}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-(--color-blue-500)
            px-4
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
          onClick={onReset}
          disabled={activeFilterCount === 0}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-(--color-border-light)
            bg-(--color-white)
            px-4
            py-2.5
            text-xs
            font-medium
            text-(--color-text-secondary)
            transition-colors
            hover:bg-(--color-surface)
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <RotateCcw size={14} />
          پاک کردن فیلترها
        </button>
      </div>
    </aside>
  );
}