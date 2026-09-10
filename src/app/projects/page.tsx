import ProjectsHero from "@/components/project-sections/Hero/Projects-Hero";
import ProjectGrid from "@/components/project-sections/Project-Grid/Project-Grid";

export default function Projects() {
  return (
    <main className="w-full">
      <ProjectsHero />

      <section
        className="
          w-full
          px-(--spacing-page-x)
          py-12
          lg:py-16
        "
      >
        <ProjectGrid />
      </section>
    </main>
  );
}