"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  Filter,
  RotateCcw,
  Sliders,
  X,
} from "lucide-react";

import { productFilterGroups } from "@/data/products-mocks/product-page/product-page";

import type {
  ProductBrand,
  ProductCategory,
} from "@/types/product-types/product";

import type { ProductFilters } from "@/types/product-types/product-filter/product-filter";

type ProductSidebarProps = {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  onReset: () => void;
  onClose?: () => void;
};

/* ─── Map groupId → field in filters object ─── */
type FilterField = keyof ProductFilters;

const GROUP_TO_FIELD: Record<string, FilterField> = {
  category: "categories",
  power: "powerRanges",
  voltage: "voltages",
  frequency: "frequencies",
  brand: "brands",
};

export default function ProductSidebar({
  filters,
  onChange,
  onReset,
  onClose,
}: ProductSidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    () => Object.fromEntries(productFilterGroups.map((g) => [g.id, true])),
  );

  const isChecked = (groupId: string, value: string): boolean => {
    const field = GROUP_TO_FIELD[groupId];
    if (!field) return false;

    const list = filters[field] as readonly string[];
    return list.includes(value);
  };

  const toggleOption = (groupId: string, value: string) => {
    const field = GROUP_TO_FIELD[groupId];
    if (!field) return;

    const current = filters[field] as readonly string[];
    const exists = current.includes(value);

    const nextList = exists
      ? current.filter((item) => item !== value)
      : [...current, value];

    onChange({
      ...filters,
      [field]: nextList,
    } as ProductFilters);
  };

  const activeFilterCount = useMemo(
    () =>
      filters.categories.length +
      filters.powerRanges.length +
      filters.voltages.length +
      filters.frequencies.length +
      filters.brands.length,
    [filters],
  );

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="flex h-full max-h-[calc(100dvh-2rem)] w-full flex-col border border-(--color-border-light) bg-(--color-white) lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:self-start">
      {/* ─── HEADER ─── */}
      <div className="relative shrink-0 border-b border-(--color-border-light) bg-(--color-surface)">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/40 to-transparent" />

        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2.5">
            {/* Icon block */}
            <div className="relative flex h-8 w-8 items-center justify-center border border-(--color-blue-500)/30 bg-(--color-blue-500)/5 text-(--color-blue-500)">
              <Sliders size={14} strokeWidth={2} />
              <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 border-b border-l border-(--color-blue-500)" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-(--color-text-muted)">
                  Filters
                </span>

                {activeFilterCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center border border-(--color-blue-500) bg-(--color-blue-500) px-1 font-mono text-[9px] font-bold text-white">
                    {String(activeFilterCount).padStart(2, "0")}
                  </span>
                )}
              </div>

              <h2 className="mt-0.5 text-sm font-bold leading-tight text-(--color-text-primary)">
                فیلتر محصولات
              </h2>
            </div>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center border border-(--color-border-light) bg-white text-(--color-text-muted) transition-all hover:border-(--color-blue-500) hover:bg-(--color-blue-500) hover:text-white"
              aria-label="بستن فیلترها"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* ─── FILTER GROUPS (scrollable) ─── */}
      <div className="flex-1 divide-y divide-(--color-border-light) overflow-y-auto">
        {productFilterGroups.map((group, groupIndex) => {
          const isOpen = openGroups[group.id];
          const field = GROUP_TO_FIELD[group.id];
          const selectedCount = field
            ? (filters[field] as readonly string[]).length
            : 0;

          return (
            <div key={group.id}>
              {/* Group header */}
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between px-4 py-3 text-right transition-colors hover:bg-(--color-surface-blue)/30"
              >
                <div className="flex items-center gap-2.5">
                  {/* Group number */}
                  <span className="font-mono text-[9px] font-bold tracking-widest text-(--color-text-muted)/60 group-hover:text-(--color-blue-500)">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xs font-bold text-(--color-text-primary)">
                    {group.title}
                  </h3>

                  {selectedCount > 0 && (
                    <span className="border border-(--color-blue-500)/40 bg-(--color-blue-500)/10 px-1.5 font-mono text-[9px] font-bold text-(--color-blue-500)">
                      {selectedCount}
                    </span>
                  )}
                </div>

                <ChevronDown
                  size={14}
                  className={`shrink-0 text-(--color-text-muted) transition-transform duration-300 group-hover:text-(--color-blue-500) ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Group options */}
              {isOpen && (
                <div className="px-4 pb-4">
                  <div className="space-y-1">
                    {group.options.map((option) => {
                      const checked = isChecked(group.id, option.value);

                      return (
                        <label
                          key={option.value}
                          className={`group/opt relative flex cursor-pointer items-center gap-2.5 px-2 py-1.5 text-xs transition-colors ${
                            checked
                              ? "text-(--color-text-primary)"
                              : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                          }`}
                        >
                          {/* Custom checkbox — industrial */}
                          <span className="relative flex h-4 w-4 shrink-0 items-center justify-center border border-(--color-border) bg-white transition-all group-hover/opt:border-(--color-blue-500)/60">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                toggleOption(group.id, option.value)
                              }
                              className="peer absolute inset-0 cursor-pointer opacity-0"
                            />

                            {/* Check mark */}
                            <span
                              className={`h-2 w-2 bg-(--color-blue-500) transition-transform ${
                                checked ? "scale-100" : "scale-0"
                              }`}
                            />

                            {/* Corner ticks when checked */}
                            {checked && (
                              <>
                                <span className="pointer-events-none absolute -right-px -top-px h-1 w-1 border-r border-t border-(--color-blue-500)" />
                                <span className="pointer-events-none absolute -bottom-px -left-px h-1 w-1 border-b border-l border-(--color-blue-500)" />
                              </>
                            )}
                          </span>

                          <span className="flex-1 truncate">
                            {option.label}
                          </span>

                          {/* Active bar on left */}
                          <span
                            className={`absolute inset-y-1 right-0 w-0.5 bg-(--color-blue-500) transition-opacity ${
                              checked ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ─── FOOTER: Reset ─── */}
      <div className="relative shrink-0 border-t border-(--color-border-light) bg-(--color-surface) p-3">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-border-light) to-transparent" />

        <button
          type="button"
          onClick={onReset}
          disabled={activeFilterCount === 0}
          className="group flex w-full items-center justify-center gap-2 border border-(--color-border-light) bg-white px-4 py-2.5 text-xs font-medium text-(--color-text-secondary) transition-all hover:border-(--color-blue-500)/40 hover:text-(--color-blue-500) disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-(--color-border-light) disabled:hover:text-(--color-text-secondary)"
        >
          <RotateCcw
            size={14}
            className="transition-transform group-hover:-rotate-90 group-disabled:group-hover:rotate-0"
          />
          پاک کردن فیلترها
        </button>

        {/* Bottom info strip */}
        <div className="mt-2 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-widest text-(--color-text-muted)/50">
          <span className="h-1 w-1 rounded-full bg-(--color-blue-400)/40" />
          {activeFilterCount > 0 ? (
            <span>
              {String(activeFilterCount).padStart(2, "0")} Active
            </span>
          ) : (
            <span>No Filters</span>
          )}
        </div>
      </div>
    </aside>
  );
}