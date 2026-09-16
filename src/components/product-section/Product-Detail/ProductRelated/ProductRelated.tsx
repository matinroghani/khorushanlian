import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { ProductType } from "@/types/product-types/product";
import { productItems } from "@/data/products-mocks/products";

export default function ProductRelated({
  product,
}: {
  product: ProductType;
}) {
  const relatedProducts = productItems
    .filter((item) => {
      if (item.id === product.id) return false;

      return item.category === product.category;
    })
    .slice(0, 4);

  if (!relatedProducts.length) return null;

  return (
    // 👈 اضافه شدن id="related"
    <section
      id="related"
      className="w-full bg-(--color-surface) px-(--spacing-page-x) py-10 sm:py-12 lg:py-14"
    >
      <div className="w-full">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-(--color-text-primary)">
            محصولات مرتبط
          </h2>

          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-(--color-text-secondary) transition-colors hover:text-(--color-blue-500)"
          >
            همه محصولات
            <ArrowLeft size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group min-w-0 overflow-hidden rounded-xl border border-(--color-border-light) bg-white transition-all hover:-translate-y-1 hover:border-(--color-blue-500)/30 hover:shadow-[var(--shadow-md)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-(--color-surface-muted)">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="line-clamp-1 text-xs font-bold text-(--color-text-primary) sm:text-sm">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-(--color-text-muted)">
                  <span>{item.model}</span>

                  <ArrowLeft
                    size={13}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}