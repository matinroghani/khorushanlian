import {
  Building2,
  CalendarDays,
  Factory,
  MapPin,
  Settings2,
} from "lucide-react";

import { ProjectType } from "@/types/homepage-types/projects/idnex";

type ProjectCatalogProps = {
  project: ProjectType;
};

const projectCategoryLabels: Record<
  ProjectType["category"],
  string
> = {
  "power-generation": "تولید و تأمین برق",
  industrial: "تجهیزات صنعتی",
  marine: "تجهیزات دریایی",
  maintenance: "تعمیر و نگهداری",
  consulting: "خدمات مشاوره مهندسی",
};

const projectStatusLabels: Record<
  ProjectType["status"],
  string
> = {
  completed: "تکمیل‌شده",
  ongoing: "در حال اجرا",
};

const projectCode = (id: number | string) =>
  `DKL-PRJ-${String(id).padStart(4, "0")}`;

export default function ProjectCatalog({
  project,
}: ProjectCatalogProps) {
  const gallery = project.gallery ?? [];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-(--color-text-primary) antialiased"
    >
      {/* =====================================================
          HEADER / HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-(--color-navy-950) text-white print:break-inside-avoid">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-(--color-navy-950)/90" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10">
          {/* Header */}
          <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logos/main-logo.png"
                alt="دریای خروشان لیان"
                className="h-9 w-auto object-contain brightness-0 invert"
              />

              <div className="border-r border-white/15 pr-3">
                <p className="font-mono text-[9px] tracking-[0.18em] text-(--color-blue-400)">
                  DARYA-YE KHORUSHAN LIAN
                </p>

                <p className="mt-1 text-[10px] text-white/45">
                  دریای خروشان لیان
                </p>
              </div>
            </div>

            <div className="text-left">
              <p className="font-mono text-[9px] tracking-[0.15em] text-white/35">
                PROJECT CATALOG
              </p>

              <p className="mt-1 font-mono text-[10px] text-white/60">
                {projectCode(project.id)}
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="max-w-4xl py-9 sm:py-12">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-(--color-blue-500)" />

              <span className="text-[10px] font-medium text-(--color-blue-400)">
                کاتالوگ پروژه
              </span>
            </div>

            <h1 className="text-3xl font-black leading-[1.45] tracking-tight sm:text-4xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
              {project.description}
            </p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:grid-cols-4">
            <CoverMeta
              label="کارفرما"
              value={project.client}
            />

            <CoverMeta
              label="موقعیت"
              value={project.location}
            />

            <CoverMeta
              label="نوع پروژه"
              value={projectCategoryLabels[project.category]}
            />

            <CoverMeta
              label="سال اجرا"
              value={project.year}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10">
        {/* OVERVIEW */}
        <CatalogSection
          index="01"
          title="معرفی پروژه"
          englishTitle="PROJECT OVERVIEW"
        >
          <div className="grid gap-7 lg:grid-cols-[1.45fr_0.85fr]">
            <div>
              <p className="text-[13px] leading-7 text-(--color-text-secondary)">
                {project.overview}
              </p>

              <div className="mt-6">
                <SectionLabel title="ویژگی‌های کلیدی" />

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-md border border-(--color-border-light) px-3 py-2.5"
                    >
                      <span className="font-mono text-[9px] font-bold text-(--color-blue-500)">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs text-(--color-text-primary)">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-md border border-(--color-border-light) bg-(--color-surface)">
              <div className="border-b border-(--color-border-light) px-4 py-3">
                <p className="font-mono text-[9px] tracking-[0.14em] text-(--color-text-muted)">
                  PROJECT DATA
                </p>
              </div>

              <div className="divide-y divide-(--color-border-light)">
                <InfoRow
                  icon={Building2}
                  label="کارفرما"
                  value={project.client}
                />

                <InfoRow
                  icon={MapPin}
                  label="موقعیت"
                  value={project.location}
                />

                <InfoRow
                  icon={CalendarDays}
                  label="سال اجرا"
                  value={project.year}
                />

                <InfoRow
                  icon={Factory}
                  label="نوع پروژه"
                  value={projectCategoryLabels[project.category]}
                />

                <InfoRow
                  icon={Settings2}
                  label="وضعیت"
                  value={projectStatusLabels[project.status]}
                />
              </div>
            </div>
          </div>
        </CatalogSection>

        {/* SPECS */}
        <CatalogSection
          index="02"
          title="مشخصات فنی"
          englishTitle="TECHNICAL SPECIFICATIONS"
        >
          <div className="overflow-hidden rounded-md border border-(--color-border-light)">
            <div className="grid grid-cols-[45px_1fr_1.35fr] bg-(--color-navy-950) text-[11px] font-bold text-white">
              <div className="border-l border-white/10 px-2 py-2.5 text-center text-white/45">
                #
              </div>

              <div className="border-l border-white/10 px-4 py-2.5">
                عنوان
              </div>

              <div className="px-4 py-2.5">
                مشخصات
              </div>
            </div>

            {project.technicalSpecs.map((spec, index) => (
              <div
                key={spec.label}
                className={`grid grid-cols-[45px_1fr_1.35fr] border-t border-(--color-border-light) text-xs ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-(--color-surface)"
                }`}
              >
                <div className="border-l border-(--color-border-light) px-2 py-2.5 text-center font-mono text-[9px] text-(--color-text-muted)">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="border-l border-(--color-border-light) px-4 py-2.5 font-semibold text-(--color-text-primary)">
                  {spec.label}
                </div>

                <div className="px-4 py-2.5 text-(--color-text-secondary)">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </CatalogSection>

        {/* SCOPE + RESULTS */}
        <div className="grid gap-8 lg:grid-cols-2">
          <CatalogSection
            index="03"
            title="دامنه اجرای پروژه"
            englishTitle="PROJECT SCOPE"
          >
            <div className="space-y-2">
              {project.scope.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-(--color-border-light) pb-2.5 last:border-0"
                >
                  <span className="shrink-0 font-mono text-[10px] font-bold text-(--color-blue-500)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-xs leading-6 text-(--color-text-secondary)">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </CatalogSection>

          <CatalogSection
            index="04"
            title="نتایج و دستاوردها"
            englishTitle="PROJECT RESULTS"
          >
            <div className="space-y-2">
              {project.results.map((result, index) => (
                <div
                  key={result}
                  className="flex items-start gap-3 border-b border-(--color-border-light) pb-2.5 last:border-0"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-blue-500)" />

                  <p className="text-xs leading-6 text-(--color-text-secondary)">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </CatalogSection>
        </div>

        {/* GALLERY */}
        {gallery.length > 0 && (
          <CatalogSection
            index="05"
            title="گالری تصاویر"
            englishTitle="PROJECT GALLERY"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-md border border-(--color-border-light) bg-(--color-surface)"
                >
                  <img
                    src={image}
                    alt={`${project.title} - تصویر ${index + 1}`}
                    className="aspect-[16/10] w-full object-cover"
                  />

                  <figcaption className="border-t border-(--color-border-light) px-3 py-2">
                    <span className="font-mono text-[9px] tracking-[0.14em] text-(--color-text-muted)">
                      IMG_{String(index + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </CatalogSection>
        )}

        {/* FOOTER */}
        <footer className="mt-8 border-t border-(--color-border-light) pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold text-(--color-text-primary)">
                دریای خروشان لیان
              </p>

              <p className="mt-1 text-[10px] text-(--color-text-muted)">
                راهکارهای مهندسی برای سیستم‌های حیاتی
              </p>
            </div>

            <div className="text-right sm:text-left">
              <p className="text-[10px] text-(--color-text-muted)">
                khorushanlian.ir
              </p>

              <p className="mt-1 font-mono text-[9px] text-(--color-text-muted)">
                {projectCode(project.id)}
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* PRINT */}
      <style>{`
        @page {
          size: A4;
          margin: 10mm;
        }

        @media print {
          html,
          body {
            margin: 0;
            padding: 0;
            background: #fff;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          section,
          figure,
          .print-avoid-break {
            break-inside: avoid;
          }

          img {
            break-inside: avoid;
          }

          footer {
            break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   SECTION
========================================================= */

function CatalogSection({
  index,
  title,
  englishTitle,
  children,
}: {
  index: string;
  title: string;
  englishTitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 print:mb-6">
      <div className="mb-4 flex items-end justify-between gap-4 border-b border-(--color-border-light) pb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-(--color-blue-500)">
            {index}
          </span>

          <div>
            <p className="font-mono text-[8px] tracking-[0.16em] text-(--color-text-muted)">
              {englishTitle}
            </p>

            <h2 className="mt-0.5 text-base font-black text-(--color-text-primary)">
              {title}
            </h2>
          </div>
        </div>

        <span className="hidden font-mono text-[8px] tracking-[0.14em] text-(--color-text-muted) sm:block">
          DKL / CATALOG
        </span>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-5 bg-(--color-blue-500)" />

      <span className="text-xs font-bold text-(--color-text-primary)">
        {title}
      </span>
    </div>
  );
}

/* =========================================================
   INFO ROW
========================================================= */

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-(--color-border-light) bg-white text-(--color-blue-500)">
        <Icon size={14} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] text-(--color-text-muted)">
          {label}
        </p>

        <p className="mt-0.5 truncate text-xs font-bold text-(--color-text-primary)">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   COVER META
========================================================= */

function CoverMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[8px] text-white/35">
        {label}
      </p>

      <p className="mt-1 truncate text-[11px] font-medium text-white/80">
        {value}
      </p>
    </div>
  );
}
