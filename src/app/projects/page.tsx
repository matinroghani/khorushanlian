import { Suspense } from "react";

import ProjectsHero from "@/components/project-sections/Hero/Projects-Hero";
import ProjectGrid from "@/components/project-sections/Project-Grid/Project-Grid";

export default function Projects() {
  return (
    <main className="w-full">
      <Suspense fallback={null}>
        <ProjectsHero />
      </Suspense>

      <section
        className="
          w-full
          px-(--spacing-page-x)
          py-12
          lg:py-16
        "
      >
        <Suspense fallback={null}>
          <ProjectGrid />
        </Suspense>
      </section>
    </main>
  );
}
