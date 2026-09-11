import { notFound } from "next/navigation";

import { projectItems } from "@/data/projects-mocks/projects";
import ProjectCatalog from "@/components/shared/ProjectCatalog/ProjectCatalog";

type CatalogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CatalogPage({
  params,
}: CatalogPageProps) {
  const { slug } = await params;

  const project = projectItems.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return <ProjectCatalog project={project} />;
}