import type {
  ProductType,
} from "@/types/product-types/product";

export const productItems: ProductType[] = [
  {
    id: 1,
    title: "دیزل ژنراتور صنعتی",
    model: "DG-1375",
    category: "power-generation",

    description:
      "دیزل ژنراتور صنعتی با توان ۱۳۷۵ کیلوولت آمپر، مناسب برای تأمین برق اضطراری و دائم در پروژه‌های صنعتی، بیمارستان‌ها، مراکز تجاری و زیرساخت‌های حیاتی.",

    longDescription:
      "دیزل ژنراتور مدل DG-1375 با بهره‌گیری از موتورهای قدرتمند و سیستم کنترل پیشرفته، انتخاب ایده‌آل برای تأمین برق پایدار در شرایط سخت و محیط‌های صنعتی است. این دستگاه با راندمان بالا، مصرف بهینه سوخت و قابلیت اتصال به تابلوهای انتقال خودکار، عملکردی پایدار و مطمئن را در اختیار شما قرار می‌دهد.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      powerKva: 1375,
      voltage: 400,
      frequency: 50,
      brand: "perkins",
    },

    gallery: [
      {
        id: 1,
        image:
          "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",
        alt: "دیزل ژنراتور DG-1375 - تصویر 1",
      },
      {
        id: 2,
        image:
          "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",
        alt: "دیزل ژنراتور DG-1375 - تصویر 2",
      },
      {
        id: 3,
        image:
          "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",
        alt: "دیزل ژنراتور DG-1375 - تصویر 3",
      },
      {
        id: 4,
        image:
          "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",
        alt: "دیزل ژنراتور DG-1375 - تصویر 4",
      },
      {
        id: 5,
        image:
          "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",
        alt: "دیزل ژنراتور DG-1375 - تصویر 5",
      },
    ],

    badges: [
      {
        label: "توان",
        value: "1375",
        unit: "kVA",
      },
      {
        label: "ولتاژ",
        value: "400",
        unit: "V",
      },
      {
        label: "فرکانس",
        value: "50",
        unit: "Hz",
      },
    ],

    features: [
      "مناسب برای استفاده در صنایع سنگین، بیمارستان‌ها و مراکز حساس",
      "قابلیت کارکرد هوشمند، مداوم و بدون وقفه",
      "دارای سیستم خنک‌کننده پیشرفته و کنترل هوشمند",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "خدمات پس از فروش",
        description:
          "پشتیبانی و خدمات پس از فروش در تمامی پروژه‌ها",
        icon: "wrench",
      },
      {
        id: 2,
        title: "قدرت بالا",
        description:
          "توان بالا برای مصارف صنعتی سنگین",
        icon: "battery",
      },
      {
        id: 3,
        title: "مصرف سوخت بهینه",
        description:
          "بهینه‌سازی مصرف سوخت و کاهش هزینه‌ها",
        icon: "fuel",
      },
      {
        id: 4,
        title: "سیستم کنترل هوشمند",
        description:
          "کنترل دقیق و مانیتورینگ عملکرد",
        icon: "gear",
      },
      {
        id: 5,
        title: "قابلیت اطمینان بالا",
        description:
          "عملکرد پایدار در شرایط سخت و محیط‌های صنعتی",
        icon: "shield",
      },
    ],

    technicalSpecs: [
      {
        label: "توان خروجی",
        value: "1375 kVA",
      },
      {
        label: "فرکانس",
        value: "50 Hz",
      },
      {
        label: "ولتاژ",
        value: "400 V",
      },
      {
        label: "تعداد فاز",
        value: "3",
      },
      {
        label: "مصرف سوخت در بار کامل",
        value: "220 L/h",
      },
      {
        label: "ابعاد (طول × عرض × ارتفاع)",
        value: "5800 × 2200 × 2500 mm",
      },
      {
        label: "وزن",
        value: "12500 kg",
      },
    ],

    sidebarSpecs: [
      {
        label: "توان (kVA)",
        value: 1375,
      },
      {
        label: "توان (kW)",
        value: 1100,
      },
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "تعداد فاز",
        value: 3,
      },
      {
        label: "مصرف سوخت (L/h)",
        value: 220,
      },
      {
        label: "ابعاد (L×W×H)",
        value: "5800×2200×2500 mm",
      },
      {
        label: "وزن (kg)",
        value: 12500,
      },
    ],

    availability: {
      status: "in-stock",
      label: "موجود در انبار",
    },

    href:
      "/products/industrial-diesel-generators/dg-1375",

    catalogUrl: "/catalogs/dg-1375.pdf",

    consultationUrl:
      "/contact?product=dg-1375",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "دیزل ژنراتورهای صنعتی",
        href:
          "/products/industrial-diesel-generators",
      },
      {
        label: "دیزل ژنراتور",
      },
    ],

    relatedProducts: [],
  },

  {
    id: 2,
    title: "دیزل ژنراتور اضطراری",
    model: "EG-500",
    category: "power-generation",

    description:
      "سیستم‌های تأمین برق اضطراری برای حفظ تداوم عملکرد تجهیزات و زیرساخت‌های حیاتی.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      powerKva: 500,
      voltage: 400,
      frequency: 50,
      brand: "cummins",
    },

    features: [
      "راه‌اندازی سریع",
      "تأمین برق اضطراری",
      "مناسب زیرساخت‌های حیاتی",
    ],

    href:
      "/products/emergency-diesel-generators",
  },

  {
    id: 3,
    title: "نیروگاه اضطراری دیزلی",
    model: "EP-1000",
    category: "power-generation",

    description:
      "راهکارهای یکپارچه تولید برق اضطراری برای پروژه‌های صنعتی و زیرساختی.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      powerKva: 1000,
      voltage: 400,
      frequency: 50,
      brand: "perkins",
    },

    features: [
      "سیستم یکپارچه",
      "ظرفیت قابل توسعه",
      "طراحی متناسب با پروژه",
    ],

    href:
      "/products/emergency-power-plants",
  },

  {
    id: 4,
    title: "موتور دیزل صنعتی",
    model: "DE-750",
    category: "power-generation",

    description:
      "موتورهای دیزلی مناسب برای تجهیزات تولید توان و کاربردهای صنعتی سنگین.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      powerKva: 750,
      voltage: 400,
      frequency: 50,
      brand: "volvo",
    },

    features: [
      "توان بالا",
      "کارکرد مداوم",
      "مناسب کاربردهای صنعتی",
    ],

    href:
      "/products/industrial-diesel-engines",
  },

  {
    id: 5,
    title: "ژنراتور دریایی",
    model: "MG-500",
    category: "marine-equipment",

    description:
      "سیستم‌های تولید برق طراحی‌شده برای استفاده در شناورها و کاربردهای دریایی.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      powerKva: 500,
      voltage: 690,
      frequency: 60,
      brand: "mitsubishi",
    },

    features: [
      "مناسب محیط دریایی",
      "طراحی مقاوم",
      "تأمین برق شناورها",
    ],

    href:
      "/products/marine-generators",
  },

  {
    id: 6,
    title: "تابلو کنترل ژنراتور",
    model: "CP-400",
    category: "control-systems",

    description:
      "سیستم‌های کنترل و مدیریت عملکرد ژنراتورها با قابلیت پایش و حفاظت تجهیزات.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      voltage: 400,
      frequency: 50,
      brand: "other",
    },

    features: [
      "کنترل هوشمند",
      "حفاظت سیستم",
      "مانیتورینگ عملکرد",
    ],

    href:
      "/products/generator-control-panels",
  },

  {
    id: 7,
    title: "تابلو ATS",
    model: "ATS-400",
    category: "control-systems",

    description:
      "سیستم انتقال خودکار منبع برق برای جابه‌جایی سریع و ایمن میان منابع تغذیه.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      voltage: 400,
      frequency: 50,
      brand: "other",
    },

    features: [
      "انتقال خودکار",
      "پاسخ سریع",
      "مناسب سیستم‌های اضطراری",
    ],

    href:
      "/products/ats-panels",
  },

  {
    id: 8,
    title: "تجهیزات برق دریایی",
    model: "ME-690",
    category: "marine-equipment",

    description:
      "تجهیزات تخصصی برق و انرژی مورد استفاده در شناورها و سامانه‌های دریایی.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      voltage: 690,
      frequency: 60,
      brand: "other",
    },

    features: [
      "کاربرد دریایی",
      "تجهیزات تخصصی",
      "مقاومت در شرایط سخت",
    ],

    href:
      "/products/marine-electrical-equipment",
  },

  {
    id: 9,
    title: "قطعات یدکی دیزل ژنراتور",
    model: "SP-CUM",
    category: "spare-parts",

    description:
      "تأمین قطعات تخصصی مورد نیاز برای سرویس، تعمیر و نگهداری سیستم‌های تولید برق.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      brand: "cummins",
    },

    features: [
      "قطعات تخصصی",
      "تأمین قطعات مصرفی",
      "پشتیبانی فنی",
    ],

    href:
      "/products/diesel-generator-spare-parts",
  },

  {
    id: 10,
    title: "تجهیزات تعمیر و نگهداری",
    model: "MT-400",
    category: "industrial-equipment",

    description:
      "تجهیزات و ملزومات تخصصی برای سرویس، تعمیر و نگهداری سیستم‌های صنعتی و نیروگاهی.",

    image:
      "/images/ui/homepage/products/diesel-generator/diesel-1.jpg",

    specifications: {
      voltage: 400,
      frequency: 50,
      brand: "other",
    },

    features: [
      "تجهیزات تخصصی",
      "مناسب تعمیرات صنعتی",
      "افزایش قابلیت اطمینان",
    ],

    href:
      "/products/maintenance-equipment",
  },
];