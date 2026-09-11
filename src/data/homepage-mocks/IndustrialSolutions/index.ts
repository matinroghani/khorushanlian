import { IndustrialSolutionType } from "@/types/homepage-types/IndustrialSolution";
import { Cog, Factory, Ship, Zap, Wrench } from "lucide-react";

export const industrialSolutionItems: IndustrialSolutionType[] = [
  {
    id: 1,
    image: "/images/ui/homepage/solutions/emergency-power.jpg",
    icon: Zap,
    title: "سیستم‌های تولید برق اضطراری",
    description:
      "طراحی، تأمین و پشتیبانی سیستم‌های برق اضطراری برای تداوم عملکرد تجهیزات و زیرساخت‌های حیاتی.",
    href: "/services/emergency-power",
  },
  {
    id: 2,
    image: "/images/ui/homepage/solutions/emergency-power.jpg",
    icon: Factory,
    title: "نیروگاه‌های دیزل و گاز",
    description:
      "راهکارهای مهندسی و اجرایی برای نیروگاه‌های دیزل و گاز با تمرکز بر پایداری و بهره‌وری.",
    href: "/services/power-plants",
  },
  {
    id: 3,
    image: "/images/ui/homepage/solutions/emergency-power.jpg",
    icon: Ship,
    title: "مهندسی و تجهیزات دریایی",
    description:
      "خدمات فنی و مهندسی در حوزه تجهیزات دریایی، سامانه‌های قدرت و زیرساخت‌های فنی شناورها.",
    href: "/services/marine-engineering",
  },
  {
    id: 4,
    image: "/images/ui/homepage/solutions/emergency-power.jpg",
    icon: Wrench,
    title: "تعمیر و نگهداری تجهیزات",
    description:
      "سرویس، تعمیر و نگهداری تخصصی تجهیزات صنعتی و مولدهای برق برای افزایش قابلیت اطمینان.",
    href: "/services/maintenance",
  },
  {
    id: 5,
    image: "/images/ui/homepage/solutions/emergency-power.jpg",
    icon: Cog,
    title: "مشاوره و راهکارهای مهندسی",
    description:
      "ارائه مشاوره تخصصی و راهکارهای مهندسی متناسب با نیازهای فنی و عملیاتی پروژه‌ها.",
    href: "/services/engineering-consulting",
  },
];
