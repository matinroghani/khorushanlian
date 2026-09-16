import { Suspense } from "react";

import ProductsHero from "@/components/product-section/Product-Archive/Hero/ProductHero";
import ProductGrid from "@/components/product-section/Product-Archive/Product-Grid/Product-Grid";

/* ─── Industrial loading fallback ─── */
function ProductGridFallback() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="در حال بارگذاری محصولات"
      className="relative w-full"
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/30 to-transparent" />

      {/* Toolbar skeleton */}
      <div className="relative mb-6 border-b border-(--color-border-light) pb-5 pt-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-5 bg-(--color-blue-500)/40" />
              <span className="h-3 w-16 animate-pulse bg-(--color-border-light)" />
            </div>
            <div className="flex items-end gap-3">
              <span className="h-5 w-32 animate-pulse bg-(--color-border-light)" />
              <span className="h-6 w-20 animate-pulse border border-(--color-border-light) bg-(--color-surface)" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-9 w-24 animate-pulse border border-(--color-border-light) bg-(--color-surface)" />
            <span className="h-9 w-32 animate-pulse border border-(--color-border-light) bg-(--color-surface)" />
            <span className="hidden h-9 w-20 animate-pulse border border-(--color-border-light) bg-(--color-surface) sm:block" />
          </div>
        </div>
      </div>

      {/* Product grid skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden border border-(--color-border-light) bg-white"
          >
            {/* Image skeleton */}
            <div className="relative aspect-[16/10] overflow-hidden bg-(--color-surface-muted)">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Grid pattern overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            {/* Content skeleton */}
            <div className="space-y-3 p-4">
              <span className="block h-3 w-3/4 animate-pulse bg-(--color-border-light)" />
              <span className="block h-3 w-1/2 animate-pulse bg-(--color-border-light)/70" />
              <div className="flex items-center justify-between pt-2">
                <span className="h-3 w-12 animate-pulse bg-(--color-border-light)/60" />
                <span className="h-3 w-16 animate-pulse bg-(--color-border-light)/60" />
              </div>
            </div>

            {/* Corner accents */}
            <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-(--color-blue-500)/30" />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-(--color-blue-500)/30" />
          </div>
        ))}
      </div>

      {/* Footer info strip */}
      <div className="mt-8 flex items-center justify-center gap-3 border-t border-(--color-border-light) pt-5">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-(--color-text-muted)/60">
          <span className="h-1 w-1 animate-pulse rounded-full bg-(--color-blue-500)" />
          Loading Catalog
        </span>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">در حال بارگذاری محصولات...</span>
    </div>
  );
}

/* ─── Page ─── */
export default function ProductsPage() {
  return (
    <main className="w-full">
      <ProductsHero />

      <section className="relative w-full px-(--spacing-page-x) py-10 sm:py-12 lg:py-16">
        {/* Subtle top separator */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-border-light) to-transparent" />

        <Suspense fallback={<ProductGridFallback />}>
          <ProductGrid />
        </Suspense>
      </section>
    </main>
  );
}
