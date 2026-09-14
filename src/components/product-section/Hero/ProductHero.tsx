import { productHeroFeatures } from "@/data/products-mocks/product-page/product-page";

export default function ProductsHero() {
  return (
    <section
      className="
        relative
        flex
        min-h-105
        w-full
        items-center
        justify-center
        overflow-hidden
        border-b
        border-(--navbar-border)
        px-(--spacing-page-x)
        py-16
        lg:min-h-120
        lg:py-20
      "
    >
      <div
        className="
          absolute
          inset-0
          -z-20
          scale-105
          bg-[url('/images/ui/products/product-Hero/product-hero-bg.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
          lg:bg-fixed
          max-sm:bg-[position:60%_center]
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-black/80
          via-black/60
          to-black/85
        "
      />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="
              text-2xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]
              sm:text-3xl
              lg:text-4xl
              xl:text-5xl
            "
          >
            آرشیو محصولات
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/75
              sm:text-base
              sm:leading-8
            "
          >
            مشاهده و مقایسه تجهیزات و محصولات تخصصی برای زیرساخت‌های صنعتی،
            تولید برق و سیستم‌های حیاتی
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-3
            sm:mt-12
            sm:grid-cols-3
            sm:gap-4
          "
        >
          {productHeroFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3.5
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-(--color-blue-400)/40
                    bg-(--color-blue-500)/15
                    text-(--color-blue-400)
                  "
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <div className="text-right">
                  <p className="text-sm font-bold text-white">
                    {feature.title}
                  </p>

                  <p className="mt-0.5 text-xs text-white/60">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}