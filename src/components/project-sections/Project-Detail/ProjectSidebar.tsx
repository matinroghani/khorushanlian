import Link from "next/link";
import {
  Building2,
  CalendarDays,
  Download,
  MapPin,
  Settings2,
} from "lucide-react";

import type { ProjectType } from "@/types/projects-types/projects/idnex";

type ProjectSidebarProps = {
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

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  const projectSpecs = [
    {
      label: "کارفرما",
      value: project.client,
      icon: Building2,
    },
    {
      label: "موقعیت",
      value: project.location,
      icon: MapPin,
    },
    {
      label: "سال اجرا",
      value: project.year,
      icon: CalendarDays,
    },
    {
      label: "نوع پروژه",
      value: projectCategoryLabels[project.category],
      icon: Building2,
    },
    {
      label: "وضعیت",
      value: projectStatusLabels[project.status],
      icon: Settings2,
    },
  ];

  return (
    <aside className="w-full lg:sticky lg:top-24 lg:h-fit">
      <div className="overflow-hidden rounded-xl border border-(--color-border-light) bg-white shadow-sm">
        {/* Header */}
        <div className="bg-(--color-navy-950) px-5 py-4">
          <p className="mb-1 text-[10px] font-medium tracking-[0.14em] text-white/40">
            PROJECT DATA
          </p>

          <h3 className="text-base font-bold text-white">مشخصات پروژه</h3>
        </div>

        {/* Project specs */}
        <div className="divide-y divide-(--color-border-light)">
          {projectSpecs.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-(--color-surface-muted)"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--color-surface-blue) text-(--color-blue-500)">
                <Icon size={15} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-(--color-text-muted)">{label}</p>

                <p className="mt-0.5 truncate text-xs font-bold text-(--color-text-primary)">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog CTA */}
        <div className="border-t border-(--color-border-light) bg-(--color-surface) p-4">
          <Link
            href={`/api/projects/${encodeURIComponent(project.slug)}/catalog`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-(--color-blue-500) px-4 py-3 text-sm font-bold text-white transition-all hover:bg-(--color-navy-800) hover:shadow-lg hover:shadow-blue-500/15"
          >
            <Download size={16} />
            دانلود کاتالوگ پروژه
          </Link>

          <p className="mt-2 text-center text-[10px] leading-5 text-(--color-text-muted)">
            کاتالوگ فنی پروژه شامل معرفی، مشخصات، دامنه اجرا و تصاویر
          </p>
        </div>
      </div>
    </aside>
  );
}
