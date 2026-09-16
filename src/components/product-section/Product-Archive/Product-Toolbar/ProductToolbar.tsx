"use client";

import {
  ArrowUpDown,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";

import {
  ProductSort,
  ProductViewMode,
} from "@/types/product-types/product-toolbar/product-toolbar";

type ProductToolbarProps = {
  productCount: number;
  sort: ProductSort;
  viewMode: ProductViewMode;
  onSortChange: (value: ProductSort) => void;
  onViewModeChange: (value: ProductViewMode) => void;
  onOpenFilters: () => void;
  activeFilterCount?: number;
};

const sortOptions: { value: ProductSort; label: string }[] = [
  { value: "newest", label: "جدیدترین" },
  { value: "name-asc", label: "نام: الف تا ی" },
  { value: "name-desc", label: "نام: ی تا الف" },
];

export default function ProductToolbar({
  productCount,
  sort,
  viewMode,
  onSortChange,
  onViewModeChange,
  onOpenFilters,
  activeFilterCount = 0,
}: ProductToolbarProps) {
  return (
    <div className="relative mb-6 border-b border-(--color-border-light) pb-5">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/30 to-transparent" />

      <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">
        {/* ─── LEFT: Title + Count ─── */}
        <div className="min-w-0">
          {/* Eyebrow */}
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-5 bg-(--color-blue-500)" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-(--color-blue-500)">
              Catalog
            </span>
          </div>

          <div className="flex items-end gap-3">
            <h2 className="text-lg font-extrabold leading-none text-(--color-text-primary) sm:text-xl">
              محصولات ما
            </h2>

            {/* Count badge */}
            <span className="flex items-center gap-1.5 border border-(--color-border-light) bg-(--color-surface) px-2 py-1 font-mono text-[10px] font-bold text-(--color-text-secondary)">
              <span className="h-1 w-1 rounded-full bg-(--color-blue-500)" />
              {String(productCount).padStart(2, "0")}
              <span className="text-(--color-text-muted)">Items</span>
            </span>
          </div>
        </div>

        {/* ─── RIGHT: Controls ─── */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mobile filter button */}
          <button
            type="button"
            onClick={onOpenFilters}
            className="group relative flex items-center gap-2 border border-(--color-border-light) bg-white px-3 py-2 text-xs font-medium text-(--color-text-secondary) transition-all hover:border-(--color-blue-500)/50 hover:text-(--color-blue-500) lg:hidden"
          >
            <Filter size={14} />

            <span>فیلترها</span>

            {activeFilterCount > 0 && (
              <span className="flex h-4 min-w-4 items-center justify-center border border-(--color-blue-500) bg-(--color-blue-500) px-1 font-mono text-[9px] font-bold text-white">
                {String(activeFilterCount).padStart(2, "0")}
              </span>
            )}
          </button>

          {/* Sort dropdown — custom industrial */}
          <div className="group relative">
            {/* Icon block on the right */}
            <div className="pointer-events-none absolute right-0 top-0 flex h-full w-9 items-center justify-center border-l border-(--color-border-light) text-(--color-text-muted) transition-colors group-focus-within:border-(--color-blue-500)/40 group-focus-within:text-(--color-blue-500)">
              <ArrowUpDown size={13} />
            </div>

            {/* Custom chevron on the left (RTL) */}
            <div className="pointer-events-none absolute left-0 top-0 flex h-full w-7 items-center justify-center text-(--color-text-muted) transition-colors group-focus-within:text-(--color-blue-500)">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            <select
              value={sort}
              onChange={(event) =>
                onSortChange(event.target.value as ProductSort)
              }
              aria-label="مرتب‌سازی محصولات"
              className="h-9 cursor-pointer appearance-none border border-(--color-border-light) bg-white pl-7 pr-10 font-mono text-[11px] font-medium text-(--color-text-primary) outline-none transition-colors hover:border-(--color-blue-500)/50 focus:border-(--color-blue-500)"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* View mode toggle — industrial */}
          <div className="hidden items-center border border-(--color-border-light) bg-white sm:flex">
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              aria-label="نمایش لیستی"
              aria-pressed={viewMode === "list"}
              className={`relative flex h-9 w-9 items-center justify-center border-l border-(--color-border-light) transition-all first:border-l-0 ${
                viewMode === "list"
                  ? "bg-(--color-navy-950) text-white"
                  : "text-(--color-text-muted) hover:bg-(--color-surface) hover:text-(--color-blue-500)"
              }`}
            >
              <List size={14} strokeWidth={viewMode === "list" ? 2.5 : 2} />

              {/* Active dot */}
              {viewMode === "list" && (
                <span className="absolute bottom-1 right-1 h-1 w-1 rounded-full bg-(--color-blue-400)" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              aria-label="نمایش شبکه‌ای"
              aria-pressed={viewMode === "grid"}
              className={`relative flex h-9 w-9 items-center justify-center border-l border-(--color-border-light) transition-all ${
                viewMode === "grid"
                  ? "bg-(--color-navy-950) text-white"
                  : "text-(--color-text-muted) hover:bg-(--color-surface) hover:text-(--color-blue-500)"
              }`}
            >
              <Grid3X3 size={14} strokeWidth={viewMode === "grid" ? 2.5 : 2} />

              {/* Active dot */}
              {viewMode === "grid" && (
                <span className="absolute bottom-1 right-1 h-1 w-1 rounded-full bg-(--color-blue-400)" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}