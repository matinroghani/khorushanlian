"use client";

import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

type ProductCTAProps = {
  slug?: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function ProductCTA({
  slug,
  title,
  description,
  buttonText,
}: ProductCTAProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const endpoint = slug
        ? `/api/products/${slug}/catalog`
        : `/api/products/catalog`;

      // timestamp برای شکستن هر نوع کش (مرورگر، CDN، Vercel edge)
      const url = `${endpoint}?t=${Date.now()}`;

      const response = await fetch(url, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
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

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("CATALOG_DOWNLOAD_ERROR:", error);
      alert("خطا در دانلود کاتالوگ. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full px-(--spacing-page-x) py-10">
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-6
          rounded-xl
          bg-(--color-navy-950)
          p-6
          shadow-lg
          md:flex-row
          md:p-8
        "
      >
        <div className="text-right">
          <h3 className="text-base font-bold text-white sm:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs text-white/60 sm:text-sm">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isLoading}
          className="
            flex
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-(--color-blue-500)
            px-6
            py-3
            text-sm
            font-bold
            text-white
            transition-all
            hover:bg-(--color-navy-800)
            hover:shadow-lg
            hover:shadow-blue-500/20
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              در حال ساخت کاتالوگ...
            </>
          ) : (
            <>
              <Download size={18} />
              {buttonText}
            </>
          )}
        </button>
      </div>
    </section>
  );
}