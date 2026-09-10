import HeroFilter from "./components/Hero-Filter";

export default function ProjectsHero() {
  return (
    <section
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        border-b
        border-(--navbar-border)
        px-(--spacing-page-x)
        py-16
        lg:py-24
      "
    >
      {/* HERO BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[url('/images/ui/projects/project-Hero/project-hero-bg-image.jpg')]
          bg-cover
          bg-no-repeat
          bg-center
          lg:bg-fixed
          max-sm:bg-[position:60%_center]
          scale-105
        "
      />

      {/* GRADIENT OVERLAY */}
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

      {/* SUBTLE TOP ACCENT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* SMALL EYEBROW */}
          <span
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/5
              px-4
              py-1
              text-[11px]
              font-medium
              tracking-[0.2em]
              text-white/70
              uppercase
              backdrop-blur-sm
              sm:text-xs
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            پروژه‌ها
          </span>

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
            آرشیو پروژه‌ها
          </h1>

          {/* DIVIDER */}
          <div
            className="
              mt-5
              h-px
              w-16
              bg-gradient-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-white/75
              sm:text-base
              sm:leading-8
            "
          >
            مشاهده مجموعه پروژه‌های انجام شده در حوزه‌های نیروگاهی، صنعتی و
            تأسیساتی
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <HeroFilter />
        </div>
      </div>
    </section>
  );
}
