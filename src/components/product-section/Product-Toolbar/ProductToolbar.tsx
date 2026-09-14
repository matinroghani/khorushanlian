"use client";

import { ProductSort, ProductViewMode } from "@/types/product-types/product-toolbar/product-toolbar";
import {
  Filter,
  Grid3X3,
  List,
} from "lucide-react";


type ProductToolbarProps = {
  productCount: number;

  sort: ProductSort;

  viewMode: ProductViewMode;

  onSortChange: (
    value: ProductSort,
  ) => void;

  onViewModeChange: (
    value: ProductViewMode,
  ) => void;

  onOpenFilters: () => void;
};

export default function ProductToolbar({
  productCount,
  sort,
  viewMode,
  onSortChange,
  onViewModeChange,
  onOpenFilters,
}: ProductToolbarProps) {
  return (
    <div
      className="
        mb-5
        flex
        flex-col
        gap-4
        border-b
        border-(--color-border-light)
        pb-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* RESULT */}
      <div>
        <h2
          className="
            text-lg
            font-extrabold
            text-(--color-text-primary)
            sm:text-xl
          "
        >
          محصولات ما
        </h2>

        <p
          className="
            mt-1
            text-xs
            text-(--color-text-muted)
          "
        >
          {productCount} محصول
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-2">
        {/* MOBILE FILTER */}
        <button
          type="button"
          onClick={onOpenFilters}
          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-(--color-border-light)
            bg-(--color-white)
            px-3
            py-2
            text-xs
            font-medium
            text-(--color-text-secondary)
            transition-colors
            hover:border-(--color-blue-500)/40
            hover:text-(--color-blue-500)
            lg:hidden
          "
        >
          <Filter size={14} />
          فیلترها
        </button>

        {/* SORT */}
        <select
          value={sort}
          onChange={(event) =>
            onSortChange(
              event.target.value as ProductSort,
            )
          }
          className="
            rounded-lg
            border
            border-(--color-border-light)
            bg-(--color-white)
            px-3
            py-2
            text-xs
            text-(--color-text-secondary)
            outline-none
            focus:border-(--color-blue-500)
          "
        >
          <option value="newest">
            جدیدترین
          </option>

          <option value="name-asc">
            نام: الف تا ی
          </option>

          <option value="name-desc">
            نام: ی تا الف
          </option>
        </select>

        {/* VIEW MODE */}
        <div
          className="
            hidden
            items-center
            gap-1
            rounded-lg
            border
            border-(--color-border-light)
            bg-(--color-white)
            p-1
            sm:flex
          "
        >
          <button
            type="button"
            onClick={() =>
              onViewModeChange("list")
            }
            aria-label="نمایش لیستی"
            className={`
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded
              transition-colors
              ${
                viewMode === "list"
                  ? "bg-(--color-blue-500) text-white"
                  : "text-(--color-text-muted) hover:bg-(--color-surface)"
              }
            `}
          >
            <List size={15} />
          </button>

          <button
            type="button"
            onClick={() =>
              onViewModeChange("grid")
            }
            aria-label="نمایش شبکه‌ای"
            className={`
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded
              transition-colors
              ${
                viewMode === "grid"
                  ? "bg-(--color-blue-500) text-white"
                  : "text-(--color-text-muted) hover:bg-(--color-surface)"
              }
            `}
          >
            <Grid3X3 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}