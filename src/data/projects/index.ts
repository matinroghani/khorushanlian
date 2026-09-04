import { ProjectType } from "@/types/projects/idnex";

export const projectItems: ProjectType[] = [
  {
    id: 1,
    title: "تأمین و راه‌اندازی نیروگاه اضطراری",
    category: "power-generation",
    description:
      "طراحی، تأمین و راه‌اندازی سیستم تولید برق اضطراری برای تأمین پایدار انرژی مجموعه صنعتی.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مجموعه صنعتی",
    location: "بوشهر",
    status: "completed",
    features: ["تولید برق اضطراری", "دیزل ژنراتور", "سیستم کنترل خودکار"],
    href: "/projects/emergency-power-plant",
  },

  {
    id: 2,
    title: "نصب سیستم دیزل ژنراتور صنعتی",
    category: "power-generation",
    description:
      "اجرای کامل سیستم دیزل ژنراتور صنعتی شامل نصب، راه‌اندازی، تست و تحویل تجهیزات.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "واحد صنعتی",
    location: "عسلویه",
    status: "completed",
    features: ["دیزل ژنراتور صنعتی", "نصب و راه‌اندازی", "تست تحت بار"],
    href: "/projects/industrial-generator",
  },

  {
    id: 3,
    title: "بازسازی و اورهال دیزل ژنراتور",
    category: "maintenance",
    description:
      "بازسازی اساسی و اورهال تخصصی دیزل ژنراتور با هدف افزایش قابلیت اطمینان و کاهش توقفات عملیاتی.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مجتمع تولیدی",
    location: "بندرعباس",
    status: "completed",
    features: ["اورهال کامل", "تست عملکرد", "تعمیر تخصصی موتور"],
    href: "/projects/generator-overhaul",
  },

  {
    id: 4,
    title: "تأمین تجهیزات برق دریایی",
    category: "marine",
    description:
      "تأمین و نصب تجهیزات برق و مولدهای مورد نیاز شناور با تمرکز بر عملکرد پایدار در شرایط دریایی.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مجموعه کشتیرانی",
    location: "بوشهر",
    status: "completed",
    features: ["تجهیزات برق دریایی", "ژنراتور دریایی", "نصب و تست"],
    href: "/projects/marine-power",
  },

  {
    id: 5,
    title: "اجرای سیستم کنترل و ATS",
    category: "industrial",
    description:
      "طراحی و اجرای سیستم کنترل و انتقال خودکار برق برای افزایش پایداری شبکه و کاهش زمان قطعی.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مجموعه صنعتی",
    location: "ماهشهر",
    status: "completed",
    features: ["تابلو ATS", "کنترل خودکار", "انتقال بار"],
    href: "/projects/ats-control",
  },

  {
    id: 6,
    title: "تأمین مولد برق برای مجموعه صنعتی",
    category: "power-generation",
    description:
      "تأمین و نصب مولد برق اضطراری متناسب با نیاز مصرفی و شرایط عملیاتی مجموعه.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "کارخانه صنعتی",
    location: "اصفهان",
    status: "ongoing",
    features: ["مولد اضطراری", "طراحی ظرفیت", "پشتیبانی فنی"],
    href: "/projects/power-generator",
  },

  {
    id: 7,
    title: "تعمیرات تخصصی تجهیزات نیروگاهی",
    category: "maintenance",
    description:
      "ارائه خدمات تعمیر، عیب‌یابی و نگهداری تجهیزات نیروگاهی با هدف افزایش طول عمر و آمادگی عملیاتی.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "نیروگاه صنعتی",
    location: "بوشهر",
    status: "ongoing",
    features: ["عیب‌یابی تخصصی", "تعمیرات نیروگاهی", "نگهداری پیشگیرانه"],
    href: "/projects/power-maintenance",
  },

  {
    id: 8,
    title: "بازسازی سیستم برق شناور",
    category: "marine",
    description:
      "بازسازی و بهینه‌سازی سیستم برق یک شناور با هدف افزایش ایمنی و پایداری تجهیزات.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مالک شناور",
    location: "بندر بوشهر",
    status: "completed",
    features: ["سیستم برق شناور", "تجهیزات دریایی", "تست و راه‌اندازی"],
    href: "/projects/vessel-electrical",
  },

  {
    id: 9,
    title: "مشاوره و بهینه‌سازی سیستم تولید برق",
    category: "consulting",
    description:
      "بررسی فنی سیستم تولید برق و ارائه راهکارهای مهندسی برای افزایش بهره‌وری و قابلیت اطمینان.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مجموعه صنعتی",
    location: "عسلویه",
    status: "completed",
    features: ["مطالعات فنی", "بهینه‌سازی سیستم", "مشاوره مهندسی"],
    href: "/projects/power-consulting",
  },

  {
    id: 10,
    title: "تأمین و نصب تجهیزات موتورخانه صنعتی",
    category: "industrial",
    description:
      "تأمین، نصب و راه‌اندازی تجهیزات مکانیکی و الکتریکی مورد نیاز مجموعه صنعتی.",
    image: "/images/ui/projects/diesel/diesel-project.jpg",
    client: "مجموعه صنعتی",
    location: "بوشهر",
    status: "ongoing",
    features: ["تجهیزات صنعتی", "نصب و اجرا", "پشتیبانی فنی"],
    href: "/projects/industrial-equipment",
  },
];
