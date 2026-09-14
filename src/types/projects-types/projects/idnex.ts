export type ProjectCategory =
  | "power-generation"
  | "industrial"
  | "marine"
  | "maintenance"
  | "consulting";

export type ProjectStatus = "completed" | "ongoing";

export type ProjectType = {
  id: number;

  title: string;
  slug: string;

  category: ProjectCategory;
  description: string;

  image: string;
  gallery?: string[];

  client: string;
  location: string;
  status: ProjectStatus;

  year: string;

  features: string[];

  overview: string;

  scope: string[];

  results: string[];

  technicalSpecs: {
    label: string;
    value: string;
  }[];

  href: string;
};