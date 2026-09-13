import { ProjectType } from "@/types/homepage-types/projects/idnex";

type ProjectCatalogProps = {
  project: ProjectType;
};

const projectCategoryLabels: Record<ProjectType["category"], string> = {
  "power-generation": "تولید و تأمین برق",
  industrial: "تجهیزات صنعتی",
  marine: "تجهیزات دریایی",
  maintenance: "تعمیر و نگهداری",
  consulting: "خدمات مشاوره مهندسی",
};

const projectStatusLabels: Record<ProjectType["status"], string> = {
  completed: "تکمیل‌شده",
  ongoing: "در حال اجرا",
};

const projectCode = (id: number | string) =>
  `DKL-PRJ-${String(id).padStart(4, "0")}`;

export default function ProjectCatalog({ project }: ProjectCatalogProps) {
  const gallery = project.gallery ?? [];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-(--color-text-primary) antialiased"
    >
      {/* ================= HEADER ================= */}
      <header className="border-b border-(--color-border-light)">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logos/main-logo.png"
              alt="دریای خروشان لیان"
              className="h-6 w-auto object-contain"
            />
            <span className="text-xs font-bold">دریای خروشان لیان</span>
          </div>

          <span className="font-mono text-[10px] tracking-wider text-(--color-text-muted)">
            {projectCode(project.id)}
          </span>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-(--color-navy-950) text-white">
        <div className="mx-auto max-w-5xl px-5 py-8 sm:py-10">
          <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-(--color-blue-400)">
            PROJECT CATALOG
          </p>

          <h1 className="max-w-3xl text-2xl font-black leading-[1.5] sm:text-3xl">
            {project.title}
          </h1>

          <p className="mt-3 max-w-2xl text-[13px] leading-7 text-white/60">
            {project.description}
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-5 sm:grid-cols-4">
            <Meta label="کارفرما" value={project.client} />
            <Meta label="موقعیت" value={project.location} />
            <Meta
              label="نوع پروژه"
              value={projectCategoryLabels[project.category]}
            />
            <Meta label="سال اجرا" value={project.year} />
          </dl>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-5xl space-y-7 px-5 py-8">
        {/* --- Overview --- */}
        <Section title="معرفی پروژه">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-[13px] leading-7 text-(--color-text-secondary)">
                {project.overview}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-(--color-border-light) bg-(--color-surface) px-3 py-1 text-[11px] text-(--color-text-secondary)"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="divide-y divide-(--color-border-light) overflow-hidden rounded-md border border-(--color-border-light)">
              <DataRow label="کارفرما" value={project.client} />
              <DataRow label="موقعیت" value={project.location} />
              <DataRow label="سال اجرا" value={project.year} />
              <DataRow
                label="نوع پروژه"
                value={projectCategoryLabels[project.category]}
              />
              <DataRow
                label="وضعیت"
                value={projectStatusLabels[project.status]}
              />
            </dl>
          </div>
        </Section>

        {/* --- Specs --- */}
        <Section title="مشخصات فنی">
          <div className="overflow-hidden rounded-md border border-(--color-border-light)">
            <div className="grid grid-cols-[40px_1fr_1.4fr] bg-(--color-surface) text-[10px] font-medium text-(--color-text-muted)">
              <div className="px-3 py-2 text-center">#</div>
              <div className="px-3 py-2">عنوان</div>
              <div className="px-3 py-2">مشخصات</div>
            </div>

            {project.technicalSpecs.map((spec, index) => (
              <div
                key={spec.label}
                className="grid grid-cols-[40px_1fr_1.4fr] border-t border-(--color-border-light) text-xs"
              >
                <div className="px-3 py-2.5 text-center font-mono text-[10px] text-(--color-text-muted)">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-3 py-2.5 font-semibold">
                  {spec.label}
                </div>
                <div className="px-3 py-2.5 text-(--color-text-secondary)">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* --- Scope + Results --- */}
        <div className="grid gap-7 md:grid-cols-2">
          <Section title="دامنه اجرا">
            <ol className="space-y-2.5">
              {project.scope.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-[10px] font-bold leading-6 text-(--color-blue-500)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs leading-6 text-(--color-text-secondary)">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="نتایج و دستاوردها">
            <ul className="space-y-2.5">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-(--color-blue-500)" />
                  <span className="text-xs leading-6 text-(--color-text-secondary)">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* --- Gallery --- */}
        {gallery.length > 0 && (
          <Section title="گالری تصاویر">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {gallery.map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-md border border-(--color-border-light)"
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </Section>
        )}

        {/* --- Footer --- */}
        <footer className="flex flex-col gap-2 border-t border-(--color-border-light) pt-4 text-[10px] text-(--color-text-muted) sm:flex-row sm:items-center sm:justify-between">
          <span>
            دریای خروشان لیان — راهکارهای مهندسی برای سیستم‌های حیاتی
          </span>
          <span className="font-mono">
            khorushanlian.ir · {projectCode(project.id)}
          </span>
        </footer>
      </div>

      {/* ================= PRINT ================= */}
      <style>{`
        @page { size: A4; margin: 10mm; }

        @media print {
          html, body { margin: 0; padding: 0; background: #fff; }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          section, figure, footer, table { break-inside: avoid; }
          img { break-inside: avoid; }
        }
      `}</style>
    </main>
  );
}

/* ====================== SECTION ====================== */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3.5 flex items-center gap-2 text-sm font-black">
        <span className="h-3 w-0.5 rounded-full bg-(--color-blue-500)" />
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ====================== DATA ROW ===================== */

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-3.5 py-2.5">
      <dt className="text-[10px] text-(--color-text-muted)">{label}</dt>
      <dd className="truncate text-xs font-semibold">{value}</dd>
    </div>
  );
}

/* ====================== HERO META ==================== */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[9px] text-white/35">{label}</dt>
      <dd className="mt-1 truncate text-[11px] font-medium text-white/85">
        {value}
      </dd>
    </div>
  );
}