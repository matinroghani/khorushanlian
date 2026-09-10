import { ProjectFilterItemsType } from "@/types/projects-types/project-sort";
import {
  LayoutGrid,
  Zap,
  Factory,
  Ship,
  Wrench,
  Users,
} from "lucide-react";

export const projectFilterItems: ProjectFilterItemsType[] = [
  {
    id: 1,
    label: "همه پروژه‌ها",
    value: "all",
    icon: LayoutGrid,
  },
  {
    id: 2,
    label: "نیروگاه و تولید برق",
    value: "power-generation",
    icon: Zap,
  },
  {
    id: 3,
    label: "تجهیزات صنعتی",
    value: "industrial",
    icon: Factory,
  },
  {
    id: 4,
    label: "مهندسی دریایی",
    value: "marine",
    icon: Ship,
  },
  {
    id: 5,
    label: "تعمیر و نگهداری",
    value: "maintenance",
    icon: Wrench,
  },
  {
    id: 6,
    label: "مشاوره مهندسی",
    value: "consulting",
    icon: Users,
  },
];