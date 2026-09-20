import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Battery,
  Factory,
  Fuel,
  Gauge,
  Settings,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { ProductType } from "@/types/product-types/product";
import { productCategoryLabels } from "@/data/products-mocks/product-page/product-categories";

type ProductHeroProps = {
  product: ProductType;
};

function getIconForLabel(label: string): LucideIcon {
  if (label.includes("توان (kW)")) return Battery;
  if (label.includes("توان")) return Zap;
  if (label.includes("ولتاژ")) return Gauge;
  if (label.includes("فرکانس")) return Activity;
  if (label.includes("فاز")) return Settings;
  if (label.includes("مصرف") || label.includes("سوخت")) return Fuel;
  if (label.includes("ابعاد") || label.includes("وزن")) return Factory;

  return Settings;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const categoryLabel =
    productCategoryLabels[product.category] ?? "محصولات صنعتی";

  const specsSource = product.sidebarSpecs?.length
    ? product.sidebarSpecs
    : product.technicalSpecs ?? [];

  const heroSpecs = specsSource.slice(0, 6).map((spec) => {
    const Icon = getIconForLabel(spec.label);
    const valueParts = String(spec.value).split(" ");
    const value = valueParts[0];
    const unit = valueParts.slice(1).join(" ");

    return { label: spec.label, value, unit, Icon };
  });

  return (
    <section className="relative overflow-hidden bg-(--color-navy-950)">
      {/* Background layers */}
      <div className="absolute inset-0">
        <Image
          src="/images/ui/homepage/Hero/Hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-(--color-navy-950)/80" />

        {/* Technical grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Diagonal light sweep */}
        <div className="absolute inset-0 bg-gradient-to-bl from-(--color-blue-500)/10 via-transparent to-(--color-navy-950)/90" />
      </div>

      <div className="relative w-full px-(--spacing-page-x) py-8 sm:py-10 lg:py-14">
        {/* Breadcrumb — industrial style with tech separator */}
        <nav
          aria-label="مسیر صفحه"
          className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-wide text-white/50"
        >
          <Link
            href="/"
            className="transition-colors hover:text-(--color-blue-400)"
          >
            خانه
          </Link>
          <span className="text-white/20">/</span>
          <Link
            href="/products"
            className="transition-colors hover:text-(--color-blue-400)"
          >
            محصولات
          </Link>
          <span className="text-white/20">/</span>
          <span className="truncate text-white/90">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:items-center lg:gap-10 xl:gap-14">
          {/* Left column */}
          <div className="min-w-0">
            {/* Category badge — industrial chip */}
            <div className="mb-5 inline-flex items-center gap-2 border border-(--color-blue-500)/40 bg-(--color-blue-500)/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-(--color-blue-400) backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-blue-400) opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-(--color-blue-400)" />
              </span>
              {categoryLabel}
            </div>

            {/* Title with industrial left accent */}
            <div className="relative border-r-2 border-(--color-blue-500)/60 pr-4">
              <h1 className="max-w-3xl text-3xl font-bold leading-[1.25] text-white sm:text-4xl lg:text-[40px] xl:text-[44px]">
                {product.title}
              </h1>

              {product.model && (
                <div className="mt-3 inline-flex items-baseline gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                    مدل
                  </span>
                  <span className="font-mono text-lg font-bold text-(--color-blue-400) sm:text-xl">
                    {product.model}
                  </span>
                </div>
              )}
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
              {product.longDescription ?? product.description}
            </p>

            {/* Specs grid — industrial panel */}
            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-3">
              {heroSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="group relative min-w-0 bg-(--color-navy-950)/60 p-3.5 transition-colors hover:bg-(--color-navy-950)/30"
                >
                  {/* Corner accent */}
                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-(--color-blue-500)/0 transition-colors group-hover:border-(--color-blue-500)/80" />

                  <div className="flex min-w-0 items-center gap-2 text-white/50">
                    <spec.Icon
                      size={13}
                      className="shrink-0 text-(--color-blue-400)/70"
                    />
                    <span className="truncate text-[10px] font-medium uppercase tracking-wider">
                      {spec.label}
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline gap-1 font-mono">
                    <span className="text-lg font-bold leading-none text-white">
                      {spec.value}
                    </span>
                    {spec.unit && (
                      <span className="text-[10px] font-normal text-white/40">
                        {spec.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={
                  product.consultationUrl ?? `/contact?product=${product.model}`
                }
                className="group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden bg-(--color-blue-500) px-6 text-sm font-bold text-white shadow-lg shadow-(--color-blue-500)/20 transition-all hover:bg-(--color-blue-400) hover:shadow-xl hover:shadow-(--color-blue-500)/30"
              >
                {/* Diagonal shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">درخواست مشاوره فنی</span>
                <ArrowLeft
                  size={16}
                  className="relative transition-transform group-hover:-translate-x-1"
                />
              </Link>

              {product.catalogUrl && (
                <Link
                  href={product.catalogUrl}
                  target="_blank"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 bg-white/[0.03] px-6 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-(--color-blue-500)/50 hover:bg-white/[0.08]"
                >
                  دریافت کاتالوگ محصول
                  <span className="h-1.5 w-1.5 rounded-full bg-(--color-blue-400)/40 transition-all group-hover:bg-(--color-blue-400)" />
                </Link>
              )}
            </div>
          </div>

          {/* Right column — product image with industrial frame */}
          <div className="relative">
            {/* Frame corners */}
            <span className="absolute -right-1 -top-1 z-10 h-5 w-5 border-r-2 border-t-2 border-(--color-blue-500)/70" />
            <span className="absolute -left-1 -top-1 z-10 h-5 w-5 border-l-2 border-t-2 border-(--color-blue-500)/70" />
            <span className="absolute -bottom-1 -right-1 z-10 h-5 w-5 border-b-2 border-r-2 border-(--color-blue-500)/70" />
            <span className="absolute -bottom-1 -left-1 z-10 h-5 w-5 border-b-2 border-l-2 border-(--color-blue-500)/70" />

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/30">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />

              {/* Image gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-(--color-navy-950)/60 via-transparent to-transparent" />

              {/* Status bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-(--color-navy-950)/80 px-4 py-2 backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-(--color-blue-400)">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  موجود
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/40 to-transparent" />
    </section>
  );
}