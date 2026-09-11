import { notFound } from "next/navigation";

import { projectItems } from "@/data/projects-mocks/projects";
import {
  getProjectEquipment,
  getProjectGalleryImages,
  getProjectSpecs,
  projectGoals,
} from "@/data/projects-mocks/project-detail";

import Hero from "@/components/project-sections/Project-Detail/Hero";
import ProjectMetaBar from "@/components/project-sections/Project-Detail/ProjectMetaBar";
import ProjectTabs from "@/components/project-sections/Project-Detail/ProjectTabs";
import ProjectOverview from "@/components/project-sections/Project-Detail/ProjectOverview";
import ProjectSidebar from "@/components/project-sections/Project-Detail/ProjectSidebar";
import ProjectGallery from "@/components/project-sections/Project-Detail/ProjectGallery";
import ProjectEquipment from "@/components/project-sections/Project-Detail/ProjectEquipment";
import ProjectCTA from "@/components/project-sections/Project-Detail/ProjectCTA";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryLabels = {
  "power-generation": "نیروگاهی",
  industrial: "صنعتی",
  marine: "دریایی",
  maintenance: "تعمیر و نگهداری",
  consulting: "مشاوره مهندسی",
} as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projectItems.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const categoryLabel = categoryLabels[project.category];

  const galleryImages = getProjectGalleryImages(project.image);

  const equipmentList = getProjectEquipment(project.image);

  const specs = getProjectSpecs(project, categoryLabel);

  return (
    <main className="w-full">
      <Hero project={project} categoryLabel={categoryLabel} />

      <ProjectMetaBar
        client={project.client}
        location={project.location}
        year={project.year}
        categoryLabel={categoryLabel}
      />

      <div className="rounded-xl bg-(--color-surface)">
        <ProjectTabs activeTab="overview" />

        <section
          id="overview"
          className=" grid w-full grid-cols-1 gap-8 px-(--spacing-page-x) py-10 lg:grid-cols-[1fr_300px] lg:gap-12"
        >
          <ProjectOverview overview={project.overview} goals={projectGoals} />

          <ProjectSidebar project={project} />
        </section>
      </div>

      <div id="gallery" className="my-5 rounded-xl bg-(--color-surface)">
        <ProjectGallery images={galleryImages} />
      </div>

      <div id="equipment" className="rounded-xl bg-(--color-surface)">
        <ProjectEquipment equipmentList={equipmentList} />
      </div>

      <ProjectCTA
        slug={project.slug}
        title="جهت دریافت کاتالوگ کامل این پروژه"
        description="اطلاعات تکمیلی، مشخصات فنی و تصاویر پروژه را دریافت کنید."
        buttonText="دریافت کاتالوگ"
      />
    </main>
  );
}
