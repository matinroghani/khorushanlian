"use client";

import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Loader2,
} from "lucide-react";
import { useCallback, useState } from "react";

type DownloadStatus = "idle" | "loading" | "success" | "error";

type ProductCTAProps = {
  slug?: string;
  catalogUrl?: string;

  title: string;
  description: string;
  buttonText?: string;

  eyebrow?: string;
  reference?: string;
};

export default function ProductCTA({
  slug,
  catalogUrl,
  title,
  description,
  buttonText = "دانلود کاتالوگ PDF",
  eyebrow = "Technical Datasheet",
  reference,
}: ProductCTAProps) {
  const [status, setStatus] = useState<DownloadStatus>("idle");

  const handleDownload = useCallback(async () => {
    if (status === "loading") return;

    // اگر PDF آماده داریم، مستقیم بازش کن
    if (catalogUrl) {
      window.open(catalogUrl, "_blank", "noopener,noreferrer");
      return;
    }

    setStatus("loading");

    try {
      const endpoint = slug
        ? `/api/products/${slug}/catalog`
        : `/api/products/catalog`;

      const url = `${endpoint}?t=${Date.now()}`;

      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("خطا در ساخت کاتالوگ");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = slug
        ? `${slug}-catalog.pdf`
        : "products-catalog.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 2000);

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("CATALOG_DOWNLOAD_ERROR:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  }, [catalogUrl, slug, status]);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const displayReference =
    reference ??
    (slug ? `REF · ${slug}` : "ISO 9001 · CE Certified");

  return (
    <section className="w-full">
      <div className="group relative overflow-hidden bg-(--color-navy-950)">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('/images/ui/homepage/Hero/Hero-bg.png')] bg-cover bg-center" />
        </div>

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Diagonal tint */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-(--color-blue-500)/10 via-transparent to-(--color-navy-950)/60" />

        {/* Blueprint corners */}
        <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-(--color-blue-500)/60" />

        <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-(--color-blue-500)/60" />

        {/* Content */}
        <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          {/* Text */}
          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
            {/* Document icon */}
            <div className="relative hidden h-14 w-14 shrink-0 items-center justify-center border border-(--color-blue-500)/40 bg-(--color-blue-500)/10 backdrop-blur-md sm:flex">
              <FileText
                size={22}
                className="text-(--color-blue-400)"
                strokeWidth={1.75}
              />

              <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-(--color-blue-400)" />

              <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-(--color-blue-400)" />
            </div>

            {/* Text block */}
            <div className="min-w-0 max-w-2xl">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-6 bg-(--color-blue-500)" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-blue-400)">
                  {eyebrow}
                </span>
              </div>

              <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/55 sm:text-sm">
                {description}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={isLoading}
            aria-busy={isLoading}
            aria-live="polite"
            className={`group/btn relative inline-flex min-h-12 shrink-0 items-center justify-center gap-2 overflow-hidden border px-6 text-xs font-bold text-white shadow-lg transition-all sm:text-sm ${
              isSuccess
                ? "border-green-500/60 bg-green-500 shadow-green-500/20"
                : isError
                  ? "border-red-500/60 bg-red-500 shadow-red-500/20"
                  : "border-(--color-blue-500)/40 bg-(--color-blue-500) shadow-(--color-blue-500)/20 hover:border-(--color-blue-400) hover:bg-(--color-blue-400) hover:shadow-xl hover:shadow-(--color-blue-500)/30"
            } disabled:cursor-not-allowed disabled:opacity-80`}
          >
            {/* Shine */}
            {!isLoading && !isSuccess && !isError && (
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            )}

            {/* Button content */}
            {isLoading ? (
              <>
                <Loader2
                  size={16}
                  className="relative animate-spin"
                />

                <span className="relative">
                  در حال ساخت کاتالوگ...
                </span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 size={16} className="relative" />

                <span className="relative">
                  دانلود با موفقیت انجام شد
                </span>
              </>
            ) : isError ? (
              <>
                <AlertCircle size={16} className="relative" />

                <span className="relative">
                  خطا در دانلود، دوباره تلاش کنید
                </span>
              </>
            ) : (
              <>
                <span className="relative">{buttonText}</span>

                <Download
                  size={16}
                  className="relative transition-transform group-hover/btn:translate-y-0.5"
                />
              </>
            )}

            {/* Bottom hover line */}
            {!isLoading && !isSuccess && !isError && (
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity group-hover/btn:opacity-100" />
            )}
          </button>
        </div>

        {/* Bottom tech bar */}
        <div className="relative flex items-center justify-between border-t border-white/[0.06] bg-black/30 px-6 py-2 font-mono text-[9px] uppercase tracking-widest text-white/30 md:px-8">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-(--color-blue-400)" />
            PDF Format
          </span>

          <span className="hidden sm:inline">
            {displayReference}
          </span>
        </div>

        {/* Bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/40 to-transparent" />
      </div>
    </section>
  );
}
