import {
  Battery,
  Fuel,
  Settings,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { ProductType } from "@/types/product-types/product";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  wrench: Wrench,
  battery: Battery,
  fuel: Fuel,
  gear: Settings,
};

export default function ProductKeyFeatures({
  product,
}: {
  product: ProductType;
}) {
  const detailedFeatures =
    product.keyFeatures && product.keyFeatures.length > 0
      ? product.keyFeatures
      : product.features?.map((feature, index) => ({
          id: index + 1,
          title: feature,
          description: "",
          icon: "shield",
        })) ?? [];

  if (detailedFeatures.length === 0) return null;

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-(--color-navy-950) px-(--spacing-page-x) py-12 sm:py-14 lg:py-16"
    >
      {/* Technical grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-(--color-blue-500)/10 blur-3xl" />

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/40 to-transparent" />

      <div className="relative w-full">
        {/* ── Header ── */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-(--color-blue-500)" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-blue-400)">
                Core Capabilities
              </span>
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              ویژگی‌های کلیدی
            </h2>

            <div className="mt-3 h-px w-32 bg-gradient-to-l from-(--color-blue-500)/60 to-transparent" />
          </div>

          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-white/40">
            {String(detailedFeatures.length).padStart(2, "0")} Features
          </span>
        </div>

        {/* ── Feature cards grid ── */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {detailedFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? ShieldCheck;

            return (
              <div
                key={feature.id}
                className="group relative flex min-h-44 flex-col bg-(--color-navy-950) p-5 transition-colors hover:bg-(--color-navy-800)/60"
              >
                {/* Top row: number + icon */}
                <div className="mb-4 flex items-start justify-between">
                  {/* Row number */}
                  <span className="font-mono text-[10px] font-bold tracking-widest text-white/25 transition-colors group-hover:text-(--color-blue-400)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon block — industrial */}
                  <div className="relative flex h-10 w-10 items-center justify-center border border-(--color-blue-500)/30 bg-(--color-blue-500)/5 text-(--color-blue-400) transition-all group-hover:border-(--color-blue-500)/70 group-hover:bg-(--color-blue-500)/15">
                    <Icon size={18} strokeWidth={1.75} />

                    {/* Corner marks */}
                    <span className="absolute -right-1 -top-1 h-1.5 w-1.5 border-r border-t border-(--color-blue-500)/0 transition-colors group-hover:border-(--color-blue-500)" />
                    <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 border-b border-l border-(--color-blue-500)/0 transition-colors group-hover:border-(--color-blue-500)" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold leading-6 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                {feature.description && (
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {feature.description}
                  </p>
                )}

                {/* Bottom accent line on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-transparent via-(--color-blue-500) to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        {/* ── Footer tech bar ── */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-white/30">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-(--color-blue-400)" />
              Engineering Grade
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Field Tested</span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            REF · {product.model ?? "N/A"}
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/30 to-transparent" />
    </section>
  );
}