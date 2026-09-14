import { ProjectType } from "@/types/projects-types/projects/idnex";
import {
  ProjectDetailEquipment,
  ProjectDetailGalleryImage,
  ProjectDetailGoal,
  ProjectDetailSpec,
} from "@/types/projects-types/project-detail";

export const getProjectGalleryImages = (
  projectImage: string,
): ProjectDetailGalleryImage[] => [
  projectImage,
  projectImage,
  projectImage,
  projectImage,
  projectImage,
];

export const getProjectEquipment = (
  projectImage: string,
): ProjectDetailEquipment[] => [
  {
    id: 1,
    title: "توربین گاز",
    image: projectImage,
  },
  {
    id: 2,
    title: "زیرسازه",
    image: projectImage,
  },
  {
    id: 3,
    title: "سیستم کنترل",
    image: projectImage,
  },
  {
    id: 4,
    title: "ترانسفورماتور",
    image: projectImage,
  },
];

export const projectGoals: ProjectDetailGoal[] = [
  "تأمین پایدار برق صنایع جنوب کشور",
  "افزایش راندمان واحدهای تولیدی",
  "رعایت استانداردهای زیست‌محیطی و ایمنی",
];

export const getProjectSpecs = (
  project: ProjectType,
  categoryLabel: string,
): ProjectDetailSpec[] => [
  {
    id: 1,
    label: "فرآیند",
    value: "EPC",
  },
  {
    id: 2,
    label: "مدت اجرا",
    value: "۱۸ ماه",
  },
  {
    id: 3,
    label: "موقعیت",
    value: project.location || "بندرعباس",
  },
  {
    id: 4,
    label: "سال اجرا",
    value: project.year || "۱۴۰۲",
  },
  {
    id: 5,
    label: "حوزه",
    value: categoryLabel,
  },
  {
    id: 6,
    label: "کارفرما",
    value: project.client || "شرکت پتروشیمی",
  },
];
