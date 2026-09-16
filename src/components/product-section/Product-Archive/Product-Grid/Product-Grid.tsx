"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Filter, PackageX } from "lucide-react";

import ProductCTA from "@/components/shared/Cta's/Product-Cta/ProductCta";
import ProductCard from "@/components/shared/products/ProductCard/Product-Card";

import { filterProducts } from "@/lib/products/filter-products";

import type {
  ProductBrand,
  ProductCategory,
} from "@/types/product-types/product";

import type { ProductFilters } from "@/types/product-types/product-filter/product-filter";
import type {
  ProductSort,
  ProductViewMode,
} from "@/types/product-types/product-toolbar/product-toolbar";

import ProductSidebar from "./Product-Sidebar";
import ProductToolbar from "../Product-Toolbar/ProductToolbar";
import { productItems } from "@/data/products-mocks/products";

const ITEMS_PER_PAGE = 8;

/* ─── URL param helpers ─── */
function parseList(value: string | null): string[] {
  if (!value) return [];
  return value.split(",").filter(Boolean);
}

function getFiltersFromSearchParams(
  searchParams: URLSearchParams,
): ProductFilters {
  return {
    categories: parseList(searchParams.get("category")) as ProductCategory[],
    powerRanges: parseList(searchParams.get("power")),
    voltages: parseList(searchParams.get("voltage")),
    frequencies: parseList(searchParams.get("frequency")),
    brands: parseList(searchParams.get("brand")) as ProductBrand[],
  };
}

function applyFiltersToParams(
  params: URLSearchParams,
  filters: ProductFilters,
) {
  const setOrDelete = (key: string, values: string[]) => {
    if (values.length > 0) {
      params.set(key, values.join(","));
    } else {
      params.delete(key);
    }
  };

  setOrDelete("category", filters.categories);
  setOrDelete("power", filters.powerRanges);
  setOrDelete("voltage", filters.voltages);
  setOrDelete("frequency", filters.frequencies);
  setOrDelete("brand", filters.brands);

  return params;
}

/* ─── Compact pagination numbers (1 2 … 5 6 7 … 20) ─── */
function getPaginationRange(
  current: number,
  total: number,
  siblings = 1,
): (number | "…")[] {
  const totalNumbers = siblings * 2 + 5;
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblings, 1);
  const rightSibling = Math.min(current + siblings, total);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from({ length: 3 + siblings * 2 }, (_, i) => i + 1);
    return [...leftRange, "…", total];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblings * 2 },
      (_, i) => total - (3 + siblings * 2) + i + 1,
    );
    return [1, "…", ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i,
  );

  return [1, "…", ...middleRange, "…", total];
}

/* ─── Component ─── */
export default function ProductGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () =>
      getFiltersFromSearchParams(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  const [sort, setSort] = useState<ProductSort>("newest");
  const [viewMode, setViewMode] = useState<ProductViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  /* ── Filtered + sorted products ── */
  const filteredProducts = useMemo(() => {
    const result = filterProducts(productItems, filters);

    return [...result].sort((a, b) => {
      switch (sort) {
        case "name-asc":
          return a.title.localeCompare(b.title, "fa");
        case "name-desc":
          return b.title.localeCompare(a.title, "fa");
        case "newest":
        default:
          return b.id - a.id;
      }
    });
  }, [filters, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
  );

  const visibleProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const paginationRange = useMemo(
    () => getPaginationRange(currentPage, totalPages),
    [currentPage, totalPages],
  );

  /* ── Scroll lock when mobile drawer is open ── */
  useEffect(() => {
    if (!mobileFiltersOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileFiltersOpen]);

  /* ── Close mobile drawer on escape ── */
  useEffect(() => {
    if (!mobileFiltersOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileFiltersOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [mobileFiltersOpen]);

  /* ── Handlers ── */
  const handleFiltersChange = useCallback(
    (nextFilters: ProductFilters) => {
      setCurrentPage(1);

      const params = new URLSearchParams(searchParams.toString());
      applyFiltersToParams(params, nextFilters);

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  const handleResetFilters = useCallback(() => {
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams.toString());
    ["category", "power", "voltage", "frequency", "brand"].forEach((key) =>
      params.delete(key),
    );

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }, [pathname, router, searchParams]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;

      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [totalPages],
  );

  const handleSortChange = useCallback((value: ProductSort) => {
    setSort(value);
    setCurrentPage(1);
  }, []);

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.powerRanges.length > 0 ||
    filters.voltages.length > 0 ||
    filters.frequencies.length > 0 ||
    filters.brands.length > 0;

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* ── Main content ── */}
        <div className="order-2 min-w-0 flex-1 lg:order-1">
          <ProductToolbar
            productCount={filteredProducts.length}
            sort={sort}
            viewMode={viewMode}
            onSortChange={handleSortChange}
            onViewModeChange={setViewMode}
            onOpenFilters={() => setMobileFiltersOpen(true)}
          />

          {visibleProducts.length > 0 ? (
            <>
              {/* ── Grid / List ── */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid grid-cols-1 gap-4"
                }
              >
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} item={product} />
                ))}
              </div>

              {/* ── Info strip + Pagination ── */}
              {totalPages > 1 && (
                <div className="mt-8 border-t border-(--color-border-light) pt-6">
                  {/* Range info */}
                  <div className="mb-4 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-widest text-(--color-text-muted) sm:justify-between">
                    <span className="hidden sm:inline">
                      Showing{" "}
                      <span className="font-bold text-(--color-text-primary)">
                        {String(
                          (currentPage - 1) * ITEMS_PER_PAGE + 1,
                        ).padStart(2, "0")}
                        –
                        {String(
                          Math.min(
                            currentPage * ITEMS_PER_PAGE,
                            filteredProducts.length,
                          ),
                        ).padStart(2, "0")}
                      </span>{" "}
                      of{" "}
                      <span className="font-bold text-(--color-text-primary)">
                        {String(filteredProducts.length).padStart(2, "0")}
                      </span>
                    </span>

                    <span className="sm:hidden">
                      Page{" "}
                      <span className="font-bold text-(--color-text-primary)">
                        {String(currentPage).padStart(2, "0")}
                      </span>{" "}
                      / {String(totalPages).padStart(2, "0")}
                    </span>

                    <span className="hidden font-mono text-[10px] tracking-widest text-(--color-text-muted) sm:inline">
                      Page {String(currentPage).padStart(2, "0")} /{" "}
                      {String(totalPages).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Pagination buttons */}
                  <div className="flex items-center justify-center gap-1">
                    {/* Previous */}
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      aria-label="صفحه قبلی"
                      className="group flex h-9 w-9 items-center justify-center border border-(--color-border-light) bg-white text-(--color-text-muted) transition-all hover:border-(--color-blue-500) hover:bg-(--color-blue-500) hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-(--color-border-light) disabled:hover:bg-white disabled:hover:text-(--color-text-muted)"
                    >
                      <ChevronRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-disabled:group-hover:translate-x-0"
                      />
                    </button>

                    {/* Numbers */}
                    {paginationRange.map((page, index) =>
                      page === "…" ? (
                        <span
                          key={`dots-${index}`}
                          className="flex h-9 w-9 items-center justify-center font-mono text-xs text-(--color-text-muted)"
                        >
                          …
                        </span>
                      ) : (
                        <button
                          key={page}
                          type="button"
                          onClick={() => handlePageChange(page)}
                          aria-current={page === currentPage ? "page" : undefined}
                          className={`relative flex h-9 min-w-9 items-center justify-center px-2 font-mono text-xs font-bold transition-all ${
                            page === currentPage
                              ? "border border-(--color-blue-500) bg-(--color-blue-500) text-white"
                              : "border border-(--color-border-light) bg-white text-(--color-text-secondary) hover:border-(--color-blue-500) hover:text-(--color-blue-500)"
                          }`}
                        >
                          {String(page).padStart(2, "0")}

                          {/* Corner accents on active */}
                          {page === currentPage && (
                            <>
                              <span className="absolute -right-px -top-px h-1.5 w-1.5 border-r border-t border-white/60" />
                              <span className="absolute -bottom-px -left-px h-1.5 w-1.5 border-b border-l border-white/60" />
                            </>
                          )}
                        </button>
                      ),
                    )}

                    {/* Next */}
                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      aria-label="صفحه بعدی"
                      className="group flex h-9 w-9 items-center justify-center border border-(--color-border-light) bg-white text-(--color-text-muted) transition-all hover:border-(--color-blue-500) hover:bg-(--color-blue-500) hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-(--color-border-light) disabled:hover:bg-white disabled:hover:text-(--color-text-muted)"
                    >
                      <ChevronLeft
                        size={15}
                        className="transition-transform group-hover:-translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* ── Empty state ── */
            <div className="relative flex min-h-72 flex-col items-center justify-center border border-dashed border-(--color-border-light) bg-(--color-surface-muted)/40 px-6 py-12 text-center">
              {/* Corner accents */}
              <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-(--color-blue-500)/30" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-(--color-blue-500)/30" />

              {/* Icon block */}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center border border-(--color-blue-500)/30 bg-(--color-blue-500)/5 text-(--color-blue-500)">
                <PackageX size={22} strokeWidth={1.75} />
                <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-(--color-blue-500)" />
              </div>

              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-text-muted)">
                No Results
              </span>

              <h3 className="mt-2 text-base font-bold text-(--color-text-primary) sm:text-lg">
                محصولی با این مشخصات پیدا نشد
              </h3>

              <p className="mt-2 max-w-md text-xs leading-6 text-(--color-text-secondary) sm:text-sm">
                فیلترهای انتخابی را تغییر دهید یا همه فیلترها را پاک کنید تا
                همه محصولات نمایش داده شوند.
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="group mt-5 inline-flex min-h-10 items-center gap-2 border border-(--color-blue-500) bg-(--color-blue-500) px-5 text-xs font-bold text-white transition-all hover:bg-(--color-blue-400)"
                >
                  <Filter size={14} />
                  پاک کردن فیلترها
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className="order-1 w-full shrink-0 lg:order-2 lg:w-72">
          <div className="hidden lg:block">
            <ProductSidebar
              filters={filters}
              onChange={handleFiltersChange}
              onReset={handleResetFilters}
            />
          </div>

          {mobileFiltersOpen && (
            <div className="lg:hidden">
              <ProductSidebar
                filters={filters}
                onChange={handleFiltersChange}
                onReset={handleResetFilters}
                onClose={() => setMobileFiltersOpen(false)}
              />
            </div>
          )}
        </aside>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="mt-10">
        <ProductCTA
          title="دریافت کاتالوگ کامل محصولات"
          description="برای مشاهده مشخصات کامل محصولات و دریافت کاتالوگ، فرم زیر را تکمیل کنید."
          buttonText="دانلود کاتالوگ PDF"
        />
      </div>
    </section>
  );
}