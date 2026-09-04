export type ProjectCategory =
  | "power-generation"
  | "industrial"
  | "marine"
  | "maintenance"
  | "consulting";

export type ProjectStatus =
  | "completed"
  | "ongoing";

export interface ProjectType {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  client: string;
  location: string;
  status: ProjectStatus;
  features: string[];
  href: string;
}