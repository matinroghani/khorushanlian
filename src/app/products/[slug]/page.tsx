import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { productItems } from "@/data/products-mocks/products";
import ProductHero from "@/components/product-sections/Product-Detail/Hero/Product-Hero";
import ProductTabs from "@/components/product-sections/Product-Detail/Tabs/Product-Tabs";
import ProductOverview from "@/components/product-sections/Product-Detail/Overview/Product-Overview";
import ProductKeyFeatures from "@/components/product-sections/Product-Detail/Key-Features/Product-Key-Features";
import ProductTechnicalSpecs from "@/components/product-sections/Product-Detail/Technical-Specs/Product-Technical-Specs";
import ProductRelated from "@/components/product-sections/Product-Detail/ProductRelated/ProductRelated";
import ProductCTA from "@/components/shared/Cta's/Product-Cta/ProductCta";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProductBySlug(slug: string) {
  return productItems.find((product) => {
    const productSlug = product.href.split("/").filter(Boolean).pop();

    return productSlug === slug;
  });
}

export async function generateStaticParams() {
  return productItems.map((product) => ({
    slug: product.href.split("/").filter(Boolean).pop() ?? "",
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "محصول پیدا نشد",
    };
  }

  return {
    title: `${product.title} | ${product.model} | دریای خروشان لیان`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full">
      <ProductHero product={product} />

      <ProductTabs />

      <div className="flex w-full flex-col gap-10">
        {/* Overview */}
        <section
          id="overview"
          className="w-full rounded-xl bg-(--color-surface) px-(--spacing-page-x) py-10 sm:py-12 lg:py-14"
        >
          <ProductOverview product={product} />
        </section>

        {/* Key Features */}
        <section
          id="features"
          className="w-full rounded-xl bg-(--color-surface)"
        >
          <ProductKeyFeatures product={product} />
        </section>

        {/* Technical Specs */}
        <section
          id="specs"
          className="w-full rounded-xl bg-(--color-surface) px-(--spacing-page-x) py-10 sm:py-12 lg:py-14"
        >
          <ProductTechnicalSpecs product={product} />
        </section>

        {/* Related Products */}
        <section
          id="related"
          className="w-full rounded-xl bg-(--color-surface)"
        >
          <ProductRelated product={product} />
        </section>

        {/* CTA */}
        <section className="w-full ">
          <ProductCTA
            catalogUrl={product.catalogUrl}
            title="دریافت کاتالوگ کامل محصولات"
            description="برای مشاهده مشخصات کامل محصولات و اطلاعات فنی، کاتالوگ محصول را دریافت کنید."
            buttonText="دانلود کاتالوگ PDF"
          />
        </section>
      </div>
    </main>
  );
}
