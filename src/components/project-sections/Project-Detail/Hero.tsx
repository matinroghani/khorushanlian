import Image from "next/image";
import { MessageSquare, Clock, CalendarDays } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb/Breadcrumb";

type HeroProps = {
  project: {
    title: string;
    description: string;
    image: string;
    category: string;
  };
  categoryLabel: string;
};

export default function Hero({ project, categoryLabel }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-(--color-navy-950)">
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-(--color-navy-950) via-(--color-navy-950)/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-(--spacing-page-x) py-12 lg:py-16">
        <Breadcrumb
          items={[
            { label: "پروژه‌ها", href: "/projects" },
            { label: project.title },
          ]}
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 flex flex-col items-start text-right lg:order-1">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wide text-(--color-blue-400)">
              <span className="h-px w-8 bg-(--color-blue-400)" />
              {categoryLabel}
            </div>

            <h1 className="text-3xl font-bold leading-[1.4] text-white sm:text-4xl lg:text-[42px]">
              {project.title}
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                <MessageSquare size={14} className="text-(--color-blue-400)" />
                مشاوره
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                <Clock size={14} className="text-(--color-blue-400)" />
                مدت اجرا: ۱۸ ماه
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                <CalendarDays size={14} className="text-(--color-blue-400)" />
                سابقه: ۱۰ سال
              </span>
            </div>
          </div>

          <div className="relative order-1 hidden h-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:order-2 lg:block">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}