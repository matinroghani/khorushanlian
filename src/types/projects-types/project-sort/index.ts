import { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "all"
  | "power-generation"
  | "industrial"
  | "marine"
  | "maintenance"
  | "consulting";

export type ProjectFilterItemsType = {
  id: number;
  label: string;
  value: ProjectCategory;
  icon: LucideIcon;
};