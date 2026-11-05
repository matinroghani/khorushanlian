import Image from "next/image";

import { projectItems } from "@/data/projects-mocks/projects";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const statusLabels: Record<string, string> = {
  completed: "تکمیل‌شده",
  ongoing: "در حال اجرا",
  "in-progress": "در حال اجرا",
  pending: "در انتظار",
};

const completedCount = projectItems.filter(
  (project) => project.status === "completed",
).length;

export default function ProjectsCatalogPage() {
  return (
    <main
      dir="rtl"
      className="
        catalog-page
        bg-white
        text-(--color-text-primary)
        antialiased
      "
    >
      {/* ================= HEADER ================= */}
      <header className="catalog-header border-b border-(--color-border-light)">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
            px-8
            py-3
          "
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/logos/main-logo.png"
              alt="دریای خروشان لیان"
              width={90}
              height={24}
              className="h-5 w-auto object-contain"
            />

            <span className="text-[10px] font-bold">دریای خروشان لیان</span>
          </div>

          <span
            className="
              font-mono
              text-[8px]
              tracking-wider
              text-(--color-text-muted)
            "
          >
            PROJECTS CATALOG · {String(projectItems.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="catalog-hero bg-(--color-navy-950) text-white">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
            gap-8
            px-8
            py-6
          "
        >
          <div>
            <p
              className="
                mb-1
                font-mono
                text-[8px]
                tracking-[0.2em]
                text-(--color-blue-400)
              "
            >
              DARYA-YE KHORUSHAN LIAN
            </p>

            <h1 className="text-2xl font-black leading-8">کاتالوگ پروژه‌ها</h1>

            <p className="mt-1 text-[10px] text-white/55">
              مروری بر پروژه‌ها، توانمندی‌ها و سوابق اجرایی
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-6 text-[9px] text-white/50">
            <div className="text-center">
              <div className="font-mono text-lg leading-none text-white">
                {String(projectItems.length).padStart(2, "0")}
              </div>

              <span>پروژه</span>
            </div>

            <div className="text-center">
              <div className="font-mono text-lg leading-none text-white">
                {String(completedCount).padStart(2, "0")}
              </div>

              <span>تکمیل‌شده</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-8
          py-6
        "
      >
        <div
          className="
            grid
            grid-cols-3
            gap-3
          "
        >
          {projectItems.map((project, index) => {
            const statusLabel =
              statusLabels[project.status as string] ?? project.status;

            return (
              <article
                key={project.id}
                className="
                  catalog-card
                  overflow-hidden
                  rounded-md
                  border
                  border-(--color-border-light)
                  bg-white
                "
              >
                {/* Image */}
                <div
                  className="
                    relative
                    aspect-[16/8]
                    w-full
                    overflow-hidden
                    bg-(--color-surface)
                  "
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        text-[9px]
                        text-(--color-text-muted)
                      "
                    >
                      بدون تصویر
                    </div>
                  )}

                  <span
                    className="
                      absolute
                      right-2
                      top-2
                      rounded-sm
                      bg-black/60
                      px-1.5
                      py-0.5
                      font-mono
                      text-[8px]
                      text-white
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <span
                      className="
                        text-[8px]
                        font-medium
                        text-(--color-blue-500)
                      "
                    >
                      {project.category}
                    </span>

                    <span
                      className="
                        rounded-sm
                        bg-(--color-surface-muted)
                        px-1.5
                        py-0.5
                        text-[7px]
                        text-(--color-text-secondary)
                      "
                    >
                      {statusLabel}
                    </span>
                  </div>

                  <h2
                    className="
                      line-clamp-2
                      text-[11px]
                      font-black
                      leading-4
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-[8px]
                      leading-4
                      text-(--color-text-secondary)
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      justify-between
                      border-t
                      border-(--color-border-light)
                      pt-1.5
                      text-[7px]
                      text-(--color-text-muted)
                    "
                  >
                    <span className="font-mono">
                      DKL-PRJ-{String(project.id).padStart(4, "0")}
                    </span>

                    <span>دریای خروشان لیان</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="catalog-footer border-t border-(--color-border-light)">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
            px-8
            py-2.5
            text-[7px]
            text-(--color-text-muted)
          "
        >
          <span>دریای خروشان لیان — راهکارهای مهندسی</span>

          <span className="font-mono">khorushanlian.ir</span>
        </div>
      </footer>

      {/* ================= PDF PRINT ================= */}
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }

        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: #fff;
        }

        @media print {
          html,
          body {
            width: 210mm;
            background: #fff;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .catalog-page {
            width: 210mm;
            background: #fff;
          }

          .catalog-header,
          .catalog-hero,
          .catalog-footer {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .catalog-card {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .catalog-card img {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
