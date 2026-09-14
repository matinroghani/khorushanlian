import { Suspense } from "react";

import ProductHero from "@/components/product-section/Hero/ProductHero";
import ProductGrid from "@/components/product-section/Product-Grid/Product-Grid";

export default function ProductsPage() {
  return (
    <main className="w-full">
      <ProductHero />

      <section
        className="
          w-full
          px-(--spacing-page-x)
          py-10
          sm:py-12
          lg:py-16
        "
      >
        <Suspense
          fallback={
            <div
              className="
                min-h-96
                w-full
                animate-pulse
                rounded-xl
                bg-(--color-surface)
              "
            />
          }
        >
          <ProductGrid />
        </Suspense>
      </section>
    </main>
  );
}