"use client";

import { useSearchParams } from "next/navigation";

import { projectItems } from "@/data/projects-mocks/projects";
import ProjectCard from "@/components/shared/projects/ProjectCard/ProjectCard";
import ProjectCTA from "@/components/shared/Cta's/Project-Cta/ProjectCTA";

export default function ProjectGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProjects =
    !category || category === "all"
      ? projectItems
      : projectItems.filter((project) => project.category === category);

  return (
    <section>
      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          lg:gap-6
        "
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div
          className="
            flex
            min-h-60
            items-center
            justify-center
            rounded-(--radius-lg)
            border
            border-dashed
            border-(--color-border-light)
            bg-(--color-white)
            text-sm
            text-(--color-text-secondary)
          "
        >
          پروژه‌ای در این دسته‌بندی یافت نشد.
        </div>
      )}

      <ProjectCTA
        title="کاتالوگ کامل پروژه‌های دریای خروشان لیان"
        description="اطلاعات تکمیلی، مشخصات فنی و سوابق اجرایی پروژه‌های ما را دریافت کنید."
        buttonText="دریافت کاتالوگ پروژه‌ها"
      />
    </section>
  );
}