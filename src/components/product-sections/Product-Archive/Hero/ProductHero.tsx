import { productHeroFeatures } from "@/data/products-mocks/product-page/product-page";

export default function ProductsHero() {
  return (
    <section className="relative flex min-h-105 w-full items-center justify-center overflow-hidden border-b border-(--navbar-border) px-(--spacing-page-x) py-16 lg:min-h-120 lg:py-20">
      {/* ── Background image ── */}
      <div className="absolute inset-0 -z-20 scale-105 bg-[url('/images/ui/products/product-Hero/product-hero-bg.jpg')] bg-cover bg-center bg-no-repeat max-sm:bg-[position:60%_center]" />

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/85 via-black/65 to-black/90" />

      {/* ── Diagonal blue tint ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-bl from-(--color-blue-500)/10 via-transparent to-transparent" />

      {/* ── Technical grid pattern ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── Blueprint corner accents ── */}
      <span className="absolute right-6 top-6 hidden h-8 w-8 border-r-2 border-t-2 border-(--color-blue-500)/40 sm:block" />
      <span className="absolute bottom-6 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-(--color-blue-500)/40 sm:block" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 border border-(--color-blue-500)/40 bg-(--color-blue-500)/10 px-3 py-1.5 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-blue-400) opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-(--color-blue-400)" />
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-blue-400)">
              Product Catalog
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            آرشیو محصولات
          </h1>

          {/* Decorative line under title */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-l from-(--color-blue-500)/60 to-transparent" />
            <span className="h-1 w-1 rotate-45 bg-(--color-blue-500)" />
            <span className="h-px w-12 bg-gradient-to-r from-(--color-blue-500)/60 to-transparent" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            مشاهده و مقایسه تجهیزات و محصولات تخصصی برای زیرساخت‌های صنعتی،
            تولید برق و سیستم‌های حیاتی
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {productHeroFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative flex items-center gap-3.5 border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-md transition-all hover:border-(--color-blue-500)/40 hover:bg-white/[0.07]"
              >
                {/* Corner accent on hover */}
                <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-(--color-blue-500)/0 transition-colors group-hover:border-(--color-blue-500)/80" />

                {/* Row number */}
                <span className="absolute left-3 top-2 font-mono text-[9px] font-bold tracking-widest text-white/20 transition-colors group-hover:text-(--color-blue-400)">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon block — industrial bracket */}
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center border border-(--color-blue-500)/30 bg-(--color-blue-500)/5 text-(--color-blue-400) transition-all group-hover:border-(--color-blue-500)/70 group-hover:bg-(--color-blue-500)/15">
                  <Icon size={18} strokeWidth={1.75} />

                  {/* Tiny corner ticks */}
                  <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 border-b border-l border-(--color-blue-500)/0 transition-colors group-hover:border-(--color-blue-500)" />
                </div>

                {/* Text block */}
                <div className="min-w-0 text-right">
                  <p className="text-sm font-bold leading-tight text-white">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/55">
                    {feature.subtitle}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-transparent via-(--color-blue-500) to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        {/* ── Footer tech strip ── */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-4 border-t border-white/5 pt-5 font-mono text-[10px] uppercase tracking-widest text-white/30 sm:gap-6">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-(--color-blue-400)" />
            Engineering Grade
          </span>
          <span className="hidden text-white/15 sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-(--color-blue-400)" />
            Industrial Certified
          </span>
          <span className="hidden text-white/15 sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-(--color-blue-400)" />
            Field Tested
          </span>
        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/40 to-transparent" />
    </section>
  );
}