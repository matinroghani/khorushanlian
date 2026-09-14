import { ProjectType } from "@/types/projects-types/projects/idnex";

export const projectItems: ProjectType[] = [
  {
    id: 1,
    title: "تأمین و راه‌اندازی نیروگاه اضطراری",
    slug: "emergency-power-plant",

    category: "power-generation",

    description:
      "طراحی، تأمین و راه‌اندازی سیستم تولید برق اضطراری برای تأمین پایدار انرژی مجموعه صنعتی.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    gallery: [
      "/images/ui/homepage/projects/diesel/diesel-project.jpg",
      "/images/ui/homepage/projects/diesel/diesel-project.jpg",
      "/images/ui/homepage/projects/diesel/diesel-project.jpg",
    ],

    client: "مجموعه صنعتی",
    location: "بوشهر",
    status: "completed",

    year: "۱۴۰۴",

    features: ["تولید برق اضطراری", "دیزل ژنراتور", "سیستم کنترل خودکار"],

    overview:
      "این پروژه با هدف ایجاد یک منبع برق پشتیبان قابل‌اعتماد برای مجموعه صنعتی اجرا شد. فرآیند پروژه از بررسی نیاز مصرفی و انتخاب تجهیزات آغاز شده و تا نصب، راه‌اندازی، تست و تحویل نهایی سیستم ادامه پیدا کرد.",

    scope: [
      "بررسی نیاز مصرفی مجموعه",
      "انتخاب و تأمین دیزل ژنراتور",
      "اجرای زیرساخت و نصب تجهیزات",
      "راه‌اندازی و تنظیم سیستم کنترل",
      "تست عملکرد و تست تحت بار",
      "تحویل نهایی و پشتیبانی فنی",
    ],

    results: [
      "افزایش پایداری تأمین برق",
      "کاهش ریسک توقف تجهیزات حیاتی",
      "راه‌اندازی خودکار سیستم در زمان قطعی برق",
      "افزایش آمادگی عملیاتی مجموعه",
    ],

    technicalSpecs: [
      {
        label: "نوع پروژه",
        value: "نیروگاه اضطراری",
      },
      {
        label: "نوع تجهیز",
        value: "دیزل ژنراتور",
      },
      {
        label: "سیستم کنترل",
        value: "کنترل خودکار",
      },
      {
        label: "محل اجرا",
        value: "بوشهر",
      },
    ],

    href: "/projects/emergency-power-plant",
  },

  {
    id: 2,
    title: "نصب سیستم دیزل ژنراتور صنعتی",
    slug: "industrial-generator",

    category: "power-generation",

    description:
      "اجرای کامل سیستم دیزل ژنراتور صنعتی شامل نصب، راه‌اندازی، تست و تحویل تجهیزات.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "واحد صنعتی",
    location: "عسلویه",
    status: "completed",

    year: "۱۴۰۴",

    features: ["دیزل ژنراتور صنعتی", "نصب و راه‌اندازی", "تست تحت بار"],

    overview:
      "این پروژه با تمرکز بر تأمین برق پشتیبان و افزایش قابلیت اطمینان سیستم انرژی مجموعه صنعتی اجرا شد.",

    scope: [
      "بررسی محل نصب",
      "تأمین تجهیزات",
      "نصب دیزل ژنراتور",
      "اتصالات الکتریکی",
      "راه‌اندازی سیستم",
      "تست تحت بار",
    ],

    results: [
      "افزایش قابلیت اطمینان برق",
      "کاهش زمان قطعی",
      "آمادگی مناسب سیستم اضطراری",
    ],

    technicalSpecs: [
      {
        label: "نوع پروژه",
        value: "تولید برق",
      },
      {
        label: "محل اجرا",
        value: "عسلویه",
      },
      {
        label: "وضعیت",
        value: "تکمیل شده",
      },
    ],

    href: "/projects/industrial-generator",
  },

  {
    id: 3,
    title: "بازسازی و اورهال دیزل ژنراتور",
    slug: "generator-overhaul",

    category: "maintenance",

    description:
      "بازسازی اساسی و اورهال تخصصی دیزل ژنراتور با هدف افزایش قابلیت اطمینان و کاهش توقفات عملیاتی.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "مجتمع تولیدی",
    location: "بندرعباس",
    status: "completed",

    year: "۱۴۰۴",

    features: ["اورهال کامل", "تست عملکرد", "تعمیر تخصصی موتور"],

    overview:
      "در این پروژه عملیات بازسازی و اورهال کامل دیزل ژنراتور با هدف بازگرداندن تجهیز به شرایط مناسب عملیاتی انجام شد.",

    scope: [
      "بازرسی اولیه تجهیز",
      "عیب‌یابی تخصصی",
      "بازسازی قطعات",
      "سرویس سیستم‌های اصلی",
      "تست عملکرد",
      "تحویل تجهیز",
    ],

    results: [
      "افزایش قابلیت اطمینان تجهیز",
      "کاهش احتمال خرابی",
      "بهبود آمادگی عملیاتی",
    ],

    technicalSpecs: [
      {
        label: "نوع پروژه",
        value: "اورهال",
      },
      {
        label: "نوع تجهیز",
        value: "دیزل ژنراتور",
      },
      {
        label: "محل اجرا",
        value: "بندرعباس",
      },
    ],

    href: "/projects/generator-overhaul",
  },

  {
    id: 4,
    title: "تأمین تجهیزات برق دریایی",
    slug: "marine-power",

    category: "marine",

    description:
      "تأمین و نصب تجهیزات برق و مولدهای مورد نیاز شناور با تمرکز بر عملکرد پایدار در شرایط دریایی.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "مجموعه کشتیرانی",
    location: "بوشهر",
    status: "completed",

    year: "۱۴۰۴",

    features: ["تجهیزات برق دریایی", "ژنراتور دریایی", "نصب و تست"],

    overview:
      "این پروژه با هدف تأمین تجهیزات مورد نیاز سیستم برق شناور و افزایش پایداری عملکرد تجهیزات در شرایط دریایی انجام شد.",

    scope: [
      "بررسی سیستم برق شناور",
      "انتخاب تجهیزات",
      "تأمین تجهیزات دریایی",
      "نصب و اتصال",
      "راه‌اندازی",
      "تست نهایی",
    ],

    results: [
      "افزایش پایداری سیستم برق",
      "بهبود آمادگی تجهیزات",
      "کاهش ریسک توقف عملیاتی",
    ],

    technicalSpecs: [
      {
        label: "حوزه",
        value: "تجهیزات دریایی",
      },
      {
        label: "محل اجرا",
        value: "بوشهر",
      },
      {
        label: "وضعیت",
        value: "تکمیل شده",
      },
    ],

    href: "/projects/marine-power",
  },

  {
    id: 5,
    title: "اجرای سیستم کنترل و ATS",
    slug: "ats-control",

    category: "industrial",

    description:
      "طراحی و اجرای سیستم کنترل و انتقال خودکار برق برای افزایش پایداری شبکه و کاهش زمان قطعی.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "مجموعه صنعتی",
    location: "ماهشهر",
    status: "completed",

    year: "۱۴۰۴",

    features: ["تابلو ATS", "کنترل خودکار", "انتقال بار"],

    overview:
      "در این پروژه سیستم انتقال خودکار برق برای مدیریت سریع و مطمئن منابع برق مجموعه صنعتی طراحی و اجرا شد.",

    scope: [
      "بررسی سیستم برق",
      "طراحی مدار کنترل",
      "تأمین تابلو ATS",
      "نصب تجهیزات",
      "تنظیم سیستم",
      "تست انتقال بار",
    ],

    results: [
      "کاهش زمان انتقال برق",
      "افزایش پایداری شبکه",
      "مدیریت خودکار منابع برق",
    ],

    technicalSpecs: [
      {
        label: "سیستم",
        value: "ATS",
      },
      {
        label: "نوع پروژه",
        value: "کنترل صنعتی",
      },
      {
        label: "محل اجرا",
        value: "ماهشهر",
      },
    ],

    href: "/projects/ats-control",
  },

  {
    id: 6,
    title: "تأمین مولد برق برای مجموعه صنعتی",
    slug: "power-generator",

    category: "power-generation",

    description:
      "تأمین و نصب مولد برق اضطراری متناسب با نیاز مصرفی و شرایط عملیاتی مجموعه.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "کارخانه صنعتی",
    location: "اصفهان",
    status: "ongoing",

    year: "۱۴۰۵",

    features: ["مولد اضطراری", "طراحی ظرفیت", "پشتیبانی فنی"],

    overview:
      "این پروژه با هدف تأمین یک منبع برق پشتیبان متناسب با نیاز مصرفی مجموعه در حال اجرا است.",

    scope: [
      "مطالعات مصرف",
      "انتخاب ظرفیت",
      "تأمین مولد",
      "نصب تجهیزات",
      "راه‌اندازی",
    ],

    results: [
      "افزایش ظرفیت برق پشتیبان",
      "کاهش ریسک توقف تولید",
      "افزایش آمادگی عملیاتی",
    ],

    technicalSpecs: [
      {
        label: "وضعیت پروژه",
        value: "در حال اجرا",
      },
      {
        label: "نوع تجهیز",
        value: "مولد اضطراری",
      },
      {
        label: "محل اجرا",
        value: "اصفهان",
      },
    ],

    href: "/projects/power-generator",
  },

  {
    id: 7,
    title: "تعمیرات تخصصی تجهیزات نیروگاهی",
    slug: "power-maintenance",

    category: "maintenance",

    description:
      "ارائه خدمات تعمیر، عیب‌یابی و نگهداری تجهیزات نیروگاهی با هدف افزایش طول عمر و آمادگی عملیاتی.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "نیروگاه صنعتی",
    location: "بوشهر",
    status: "ongoing",

    year: "۱۴۰۵",

    features: ["عیب‌یابی تخصصی", "تعمیرات نیروگاهی", "نگهداری پیشگیرانه"],

    overview:
      "این پروژه با هدف افزایش آمادگی عملیاتی تجهیزات و کاهش خرابی‌های پیش‌بینی‌نشده در حال اجرا است.",

    scope: [
      "بازرسی تجهیزات",
      "عیب‌یابی",
      "تعمیرات تخصصی",
      "سرویس دوره‌ای",
      "تست عملکرد",
    ],

    results: [
      "افزایش آمادگی تجهیزات",
      "کاهش توقفات ناخواسته",
      "بهبود قابلیت اطمینان",
    ],

    technicalSpecs: [
      {
        label: "نوع خدمات",
        value: "تعمیر و نگهداری",
      },
      {
        label: "حوزه",
        value: "نیروگاهی",
      },
      {
        label: "محل اجرا",
        value: "بوشهر",
      },
    ],

    href: "/projects/power-maintenance",
  },

  {
    id: 8,
    title: "بازسازی سیستم برق شناور",
    slug: "vessel-electrical",

    category: "marine",

    description:
      "بازسازی و بهینه‌سازی سیستم برق یک شناور با هدف افزایش ایمنی و پایداری تجهیزات.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "مالک شناور",
    location: "بندر بوشهر",
    status: "completed",

    year: "۱۴۰۴",

    features: ["سیستم برق شناور", "تجهیزات دریایی", "تست و راه‌اندازی"],

    overview:
      "در این پروژه سیستم برق شناور مورد بازبینی، بازسازی و بهینه‌سازی قرار گرفت تا عملکرد پایدارتر و ایمن‌تری حاصل شود.",

    scope: [
      "بررسی سیستم برق",
      "شناسایی نواقص",
      "بازسازی تجهیزات",
      "بهینه‌سازی اتصالات",
      "تست و راه‌اندازی",
    ],

    results: ["افزایش ایمنی سیستم", "بهبود پایداری برق", "کاهش احتمال خرابی"],

    technicalSpecs: [
      {
        label: "حوزه",
        value: "دریایی",
      },
      {
        label: "نوع پروژه",
        value: "بازسازی",
      },
      {
        label: "محل اجرا",
        value: "بندر بوشهر",
      },
    ],

    href: "/projects/vessel-electrical",
  },

  {
    id: 9,
    title: "مشاوره و بهینه‌سازی سیستم تولید برق",
    slug: "power-consulting",

    category: "consulting",

    description:
      "بررسی فنی سیستم تولید برق و ارائه راهکارهای مهندسی برای افزایش بهره‌وری و قابلیت اطمینان.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "مجموعه صنعتی",
    location: "عسلویه",
    status: "completed",

    year: "۱۴۰۴",

    features: ["مطالعات فنی", "بهینه‌سازی سیستم", "مشاوره مهندسی"],

    overview:
      "در این پروژه عملکرد سیستم تولید برق مجموعه مورد بررسی قرار گرفت و راهکارهای مهندسی برای بهبود بهره‌وری و قابلیت اطمینان ارائه شد.",

    scope: [
      "جمع‌آوری اطلاعات",
      "بررسی وضعیت موجود",
      "تحلیل عملکرد",
      "شناسایی نقاط ضعف",
      "ارائه راهکار",
    ],

    results: [
      "شناسایی نقاط قابل بهبود",
      "بهبود تصمیم‌گیری فنی",
      "افزایش قابلیت اطمینان سیستم",
    ],

    technicalSpecs: [
      {
        label: "نوع پروژه",
        value: "مشاوره مهندسی",
      },
      {
        label: "حوزه",
        value: "تولید برق",
      },
      {
        label: "محل اجرا",
        value: "عسلویه",
      },
    ],

    href: "/projects/power-consulting",
  },

  {
    id: 10,
    title: "تأمین و نصب تجهیزات موتورخانه صنعتی",
    slug: "industrial-equipment",

    category: "industrial",

    description:
      "تأمین، نصب و راه‌اندازی تجهیزات مکانیکی و الکتریکی مورد نیاز مجموعه صنعتی.",

    image: "/images/ui/homepage/projects/diesel/diesel-project.jpg",

    client: "مجموعه صنعتی",
    location: "بوشهر",
    status: "ongoing",

    year: "۱۴۰۵",

    features: ["تجهیزات صنعتی", "نصب و اجرا", "پشتیبانی فنی"],

    overview:
      "این پروژه با هدف تأمین و راه‌اندازی تجهیزات مورد نیاز زیرساخت صنعتی مجموعه در حال اجرا است.",

    scope: [
      "بررسی نیازهای مجموعه",
      "تأمین تجهیزات",
      "نصب",
      "راه‌اندازی",
      "پشتیبانی فنی",
    ],

    results: [
      "تکمیل زیرساخت تجهیزات",
      "افزایش آمادگی عملیاتی",
      "بهبود عملکرد مجموعه",
    ],

    technicalSpecs: [
      {
        label: "نوع پروژه",
        value: "تجهیزات صنعتی",
      },
      {
        label: "وضعیت",
        value: "در حال اجرا",
      },
      {
        label: "محل اجرا",
        value: "بوشهر",
      },
    ],

    href: "/projects/industrial-equipment",
  },
];
