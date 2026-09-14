"use client";

import { useMemo, useState } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import ProductCTA from "@/components/shared/Cta's/Product-Cta/ProductCta";
import ProductCard from "@/components/shared/products/ProductCard/Product-Card";

import { filterProducts } from "@/lib/products/filter-products";

import type {
  ProductBrand,
  ProductCategory,
} from "@/types/product-types/product";

import type {
  ProductFilters,
} from "@/types/product-types/product-filter/product-filter";

import {
  defaultProductFilters,
} from "@/types/product-types/product-filter/product-filter";

import ProductSidebar from "./Product-Sidebar";
import ProductToolbar from "../Product-Toolbar/ProductToolbar";
import { ProductSort, ProductViewMode } from "@/types/product-types/product-toolbar/product-toolbar";
import { productItems } from "@/data/products-mocks/products";

const ITEMS_PER_PAGE = 8;

/* ------------------------------------------------------------------ */
/* HELPERS: تبدیل بین URL و ProductFilters                            */
/* ------------------------------------------------------------------ */

function parseList(value: string | null): string[] {
  if (!value) return [];
  return value.split(",").filter(Boolean);
}

function getFiltersFromSearchParams(
  searchParams: URLSearchParams,
): ProductFilters {
  return {
    categories: parseList(
      searchParams.get("category"),
    ) as ProductCategory[],

    powerRanges: parseList(searchParams.get("power")),

    voltages: parseList(searchParams.get("voltage")),

    frequencies: parseList(searchParams.get("frequency")),

    brands: parseList(
      searchParams.get("brand"),
    ) as ProductBrand[],
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

/* ------------------------------------------------------------------ */

export default function ProductGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /*
   * FILTERS (DERIVED FROM URL)
   */
  const filters = useMemo(
    () =>
      getFiltersFromSearchParams(
        new URLSearchParams(searchParams.toString()),
      ),
    [searchParams],
  );

  /*
   * SORT / VIEW
   */
  const [sort, setSort] = useState<ProductSort>("newest");
  const [viewMode, setViewMode] = useState<ProductViewMode>("grid");

  /*
   * PAGINATION
   */
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * MOBILE FILTER
   */
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  /*
   * FILTER PRODUCTS
   */
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

  /*
   * PAGINATION
   */
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
  );

  const visibleProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  /*
   * FILTER CHANGE
   */
  const handleFiltersChange = (nextFilters: ProductFilters) => {
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams.toString());
    applyFiltersToParams(params, nextFilters);

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  /*
   * RESET
   */
  const handleResetFilters = () => {
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams.toString());

    params.delete("category");
    params.delete("power");
    params.delete("voltage");
    params.delete("frequency");
    params.delete("brand");

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  /*
   * PAGE CHANGE
   */
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ------------------------------------------------------------------ */
  /* RENDER (دقیقاً مثل قبل — دست نزن)                                  */
  /* ------------------------------------------------------------------ */

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        <div className="order-2 min-w-0 flex-1 lg:order-1">
          <ProductToolbar
            productCount={filteredProducts.length}
            sort={sort}
            viewMode={viewMode}
            onSortChange={(value) => {
              setSort(value);
              setCurrentPage(1);
            }}
            onViewModeChange={setViewMode}
            onOpenFilters={() => setMobileFiltersOpen(true)}
          />

          {visibleProducts.length > 0 ? (
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
          ) : (
            <div className="flex min-h-60 items-center justify-center rounded-xl border border-dashed border-(--color-border-light) bg-(--color-white) px-6 text-center text-sm text-(--color-text-secondary)">
              محصولی با این مشخصات پیدا نشد.
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-1.5">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--color-border-light) bg-(--color-white) text-(--color-text-muted) transition-colors hover:border-(--color-blue-500)/40 hover:text-(--color-blue-500) disabled:cursor-not-allowed disabled:opacity-40"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                      page === currentPage
                        ? "bg-(--color-blue-500) text-white"
                        : "border border-(--color-border-light) bg-(--color-white) text-(--color-text-secondary) hover:border-(--color-blue-500)/40 hover:text-(--color-blue-500)"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--color-border-light) bg-(--color-white) text-(--color-text-muted) transition-colors hover:border-(--color-blue-500)/40 hover:text-(--color-blue-500) disabled:cursor-not-allowed disabled:opacity-40"
              >
                ›
              </button>
            </div>
          )}
        </div>

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