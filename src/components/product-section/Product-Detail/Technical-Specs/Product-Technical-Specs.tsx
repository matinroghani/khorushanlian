import Image from "next/image";

import type { ProductType } from "@/types/product-types/product";

export default function ProductTechnicalSpecs({
  product,
}: {
  product: ProductType;
}) {
  const specs = product.specifications;

  const technicalSpecs =
    product.technicalSpecs && product.technicalSpecs.length > 0
      ? product.technicalSpecs
      : [
          specs?.powerKva !== undefined
            ? {
                label: "توان",
                value: `${specs.powerKva} kVA`,
              }
            : null,

          specs?.voltage !== undefined
            ? {
                label: "ولتاژ",
                value: `${specs.voltage} V`,
              }
            : null,

          specs?.frequency !== undefined
            ? {
                label: "فرکانس",
                value: `${specs.frequency} Hz`,
              }
            : null,

          specs?.brand
            ? {
                label: "برند",
                value: specs.brand,
              }
            : null,
        ].filter(
          (
            item,
          ): item is {
            label: string;
            value: string;
          } => item !== null,
        );

  if (technicalSpecs.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-12">
      <div className="min-w-0">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-7 w-1 rounded-full bg-(--color-blue-500)" />

          <h2 className="text-xl font-bold text-(--color-text-primary)">
            مشخصات فنی
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-(--color-border-light) bg-white">
          {technicalSpecs.map((spec, index) => (
            <div
              key={`${spec.label}-${index}`}
              className="grid grid-cols-2 border-b border-(--color-border-light) last:border-b-0"
            >
              <span className="bg-(--color-surface-blue)/45 px-4 py-3 text-xs text-(--color-text-secondary) sm:text-sm">
                {spec.label}
              </span>

              <span className="px-4 py-3 text-left text-xs font-semibold text-(--color-text-primary) sm:text-sm">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-64 overflow-hidden rounded-xl bg-(--color-navy-950) lg:min-h-72">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover opacity-75"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-(--color-navy-950) via-(--color-navy-950)/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-lg font-bold text-white">
            {product.title}
          </p>

          {product.model && (
            <p className="mt-1 text-sm text-white/60">
              مدل {product.model}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}