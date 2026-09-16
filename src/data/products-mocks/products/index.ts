import type {
  ProductType,
} from "@/types/product-types/product";

const productImage =
  "/images/ui/homepage/products/diesel-generator/diesel-1.jpg";

const gallery = (title: string) => [
  {
    id: 1,
    image: productImage,
    alt: `${title} - تصویر 1`,
  },
  {
    id: 2,
    image: productImage,
    alt: `${title} - تصویر 2`,
  },
  {
    id: 3,
    image: productImage,
    alt: `${title} - تصویر 3`,
  },
  {
    id: 4,
    image: productImage,
    alt: `${title} - تصویر 4`,
  },
  {
    id: 5,
    image: productImage,
    alt: `${title} - تصویر 5`,
  },
];

const relatedProducts = (
  products: {
    id: number;
    title: string;
    model: string;
    href: string;
    power?: string;
    voltage?: string;
    frequency?: string;
  }[],
) =>
  products.map((product) => ({
    ...product,
    image: productImage,
  }));

export const productItems: ProductType[] = [
  {
    id: 1,
    title: "دیزل ژنراتور صنعتی",
    model: "DG-1375",
    category: "power-generation",

    description:
      "دیزل ژنراتور صنعتی با توان ۱۳۷۵ کیلوولت آمپر، مناسب برای تأمین برق اضطراری و دائم در پروژه‌های صنعتی، بیمارستان‌ها، مراکز تجاری و زیرساخت‌های حیاتی.",

    longDescription:
      "دیزل ژنراتور مدل DG-1375 با بهره‌گیری از موتورهای قدرتمند و سیستم کنترل پیشرفته، انتخابی مناسب برای تأمین برق پایدار در شرایط سخت و محیط‌های صنعتی است. این دستگاه با راندمان بالا، مصرف بهینه سوخت و قابلیت اتصال به تابلوهای انتقال خودکار، عملکردی پایدار و مطمئن را در اختیار شما قرار می‌دهد.",

    image: productImage,

    specifications: {
      powerKva: 1375,
      voltage: 400,
      frequency: 50,
      brand: "perkins",
    },

    gallery: gallery("دیزل ژنراتور DG-1375"),

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
        label: "ابعاد",
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
        label: "ابعاد",
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

    href: "/products/industrial-diesel-generators/dg-1375",

    catalogUrl: "/catalogs/dg-1375.pdf",

    consultationUrl: "/contact?product=dg-1375",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "دیزل ژنراتورهای صنعتی",
        href: "/products/industrial-diesel-generators",
      },
      {
        label: "دیزل ژنراتور",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 2,
        title: "دیزل ژنراتور اضطراری",
        model: "EG-500",
        power: "500 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-diesel-generators",
      },
      {
        id: 3,
        title: "نیروگاه اضطراری دیزلی",
        model: "EP-1000",
        power: "1000 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-power-plants",
      },
      {
        id: 4,
        title: "موتور دیزل صنعتی",
        model: "DE-750",
        power: "750 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-engines",
      },
      {
        id: 5,
        title: "ژنراتور دریایی",
        model: "MG-500",
        power: "500 kVA",
        voltage: "690 V",
        frequency: "60 Hz",
        href: "/products/marine-generators",
      },
    ]),
  },

  {
    id: 2,
    title: "دیزل ژنراتور اضطراری",
    model: "EG-500",
    category: "power-generation",

    description:
      "سیستم تأمین برق اضطراری برای حفظ تداوم عملکرد تجهیزات و زیرساخت‌های حیاتی.",

    longDescription:
      "دیزل ژنراتور اضطراری EG-500 برای تأمین سریع برق در زمان قطع شبکه طراحی شده و برای مراکز حساس، ساختمان‌های تجاری و پروژه‌های صنعتی قابل استفاده است.",

    image: productImage,

    specifications: {
      powerKva: 500,
      voltage: 400,
      frequency: 50,
      brand: "cummins",
    },

    gallery: gallery("دیزل ژنراتور اضطراری EG-500"),

    badges: [
      {
        label: "توان",
        value: "500",
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
      "راه‌اندازی سریع",
      "تأمین برق اضطراری",
      "مناسب زیرساخت‌های حیاتی",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "راه‌اندازی سریع",
        description:
          "آمادگی سریع برای تأمین برق در زمان قطع شبکه",
        icon: "zap" as never,
      },
      {
        id: 2,
        title: "قابلیت اطمینان",
        description:
          "طراحی‌شده برای کاربردهای حساس",
        icon: "shield",
      },
      {
        id: 3,
        title: "کنترل هوشمند",
        description:
          "پایش و کنترل مستمر عملکرد دستگاه",
        icon: "gear",
      },
      {
        id: 4,
        title: "مصرف بهینه",
        description:
          "استفاده بهینه از سوخت در شرایط کاری",
        icon: "fuel",
      },
      {
        id: 5,
        title: "پشتیبانی فنی",
        description:
          "خدمات فنی و نگهداری پروژه",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "توان خروجی",
        value: "500 kVA",
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
        label: "برند موتور",
        value: "Cummins",
      },
    ],

    sidebarSpecs: [
      {
        label: "توان (kVA)",
        value: 500,
      },
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "فرکانس (Hz)",
        value: 50,
      },
      {
        label: "برند",
        value: "Cummins",
      },
    ],

    availability: {
      status: "in-stock",
      label: "موجود در انبار",
    },

    href: "/products/emergency-diesel-generators",

    consultationUrl:
      "/contact?product=eg-500",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "دیزل ژنراتورها",
        href: "/products?category=power-generation",
      },
      {
        label: "دیزل ژنراتور اضطراری",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
      {
        id: 3,
        title: "نیروگاه اضطراری دیزلی",
        model: "EP-1000",
        power: "1000 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-power-plants",
      },
      {
        id: 4,
        title: "موتور دیزل صنعتی",
        model: "DE-750",
        power: "750 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-engines",
      },
    ]),
  },

  {
    id: 3,
    title: "نیروگاه اضطراری دیزلی",
    model: "EP-1000",
    category: "power-generation",

    description:
      "راهکار یکپارچه تولید برق اضطراری برای پروژه‌های صنعتی و زیرساختی.",

    longDescription:
      "نیروگاه اضطراری EP-1000 برای پروژه‌هایی طراحی شده که نیاز به تأمین برق پایدار، قابل توسعه و کنترل‌شده دارند و می‌تواند در کنار سیستم‌های انتقال خودکار مورد استفاده قرار گیرد.",

    image: productImage,

    specifications: {
      powerKva: 1000,
      voltage: 400,
      frequency: 50,
      brand: "perkins",
    },

    gallery: gallery("نیروگاه اضطراری دیزلی EP-1000"),

    badges: [
      {
        label: "توان",
        value: "1000",
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
      "سیستم یکپارچه",
      "ظرفیت قابل توسعه",
      "طراحی متناسب با پروژه",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "سیستم یکپارچه",
        description:
          "یکپارچه‌سازی تجهیزات تولید و کنترل انرژی",
        icon: "gear",
      },
      {
        id: 2,
        title: "ظرفیت قابل توسعه",
        description:
          "امکان طراحی متناسب با نیاز پروژه",
        icon: "battery",
      },
      {
        id: 3,
        title: "پایداری بالا",
        description:
          "طراحی برای کارکرد مداوم در شرایط صنعتی",
        icon: "shield",
      },
      {
        id: 4,
        title: "کنترل هوشمند",
        description:
          "پایش دقیق پارامترهای عملکرد",
        icon: "gear",
      },
      {
        id: 5,
        title: "پشتیبانی فنی",
        description:
          "خدمات مهندسی و نگهداری پروژه",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "توان خروجی",
        value: "1000 kVA",
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
        label: "برند",
        value: "Perkins",
      },
    ],

    sidebarSpecs: [
      {
        label: "توان (kVA)",
        value: 1000,
      },
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "فرکانس (Hz)",
        value: 50,
      },
      {
        label: "برند",
        value: "Perkins",
      },
    ],

    availability: {
      status: "in-stock",
      label: "موجود در انبار",
    },

    href: "/products/emergency-power-plants",

    consultationUrl:
      "/contact?product=ep-1000",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "راهکارهای تولید توان",
        href: "/products?category=power-generation",
      },
      {
        label: "نیروگاه اضطراری دیزلی",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
      {
        id: 2,
        title: "دیزل ژنراتور اضطراری",
        model: "EG-500",
        power: "500 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-diesel-generators",
      },
      {
        id: 4,
        title: "موتور دیزل صنعتی",
        model: "DE-750",
        power: "750 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-engines",
      },
    ]),
  },

  {
    id: 4,
    title: "موتور دیزل صنعتی",
    model: "DE-750",
    category: "power-generation",

    description:
      "موتور دیزلی مناسب برای تجهیزات تولید توان و کاربردهای صنعتی سنگین.",

    longDescription:
      "موتور دیزل صنعتی DE-750 برای کاربردهای سنگین و سیستم‌های تولید توان طراحی شده و قابلیت استفاده در تجهیزات نیروگاهی و صنعتی را دارد.",

    image: productImage,

    specifications: {
      powerKva: 750,
      voltage: 400,
      frequency: 50,
      brand: "volvo",
    },

    gallery: gallery("موتور دیزل صنعتی DE-750"),

    badges: [
      {
        label: "توان",
        value: "750",
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
      "توان بالا",
      "کارکرد مداوم",
      "مناسب کاربردهای صنعتی",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "توان بالا",
        description:
          "مناسب برای کاربردهای صنعتی سنگین",
        icon: "battery",
      },
      {
        id: 2,
        title: "کارکرد مداوم",
        description:
          "طراحی‌شده برای بهره‌برداری مستمر",
        icon: "shield",
      },
      {
        id: 3,
        title: "کنترل دقیق",
        description:
          "کنترل عملکرد موتور و تجهیزات",
        icon: "gear",
      },
      {
        id: 4,
        title: "مصرف بهینه",
        description:
          "استفاده بهینه از سوخت",
        icon: "fuel",
      },
      {
        id: 5,
        title: "نگهداری فنی",
        description:
          "دسترسی مناسب برای سرویس و تعمیرات",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "توان",
        value: "750 kVA",
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
        label: "برند",
        value: "Volvo",
      },
    ],

    sidebarSpecs: [
      {
        label: "توان (kVA)",
        value: 750,
      },
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "فرکانس (Hz)",
        value: 50,
      },
      {
        label: "برند",
        value: "Volvo",
      },
    ],

    availability: {
      status: "in-stock",
      label: "موجود در انبار",
    },

    href: "/products/industrial-diesel-engines",

    consultationUrl:
      "/contact?product=de-750",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "راهکارهای تولید توان",
        href: "/products?category=power-generation",
      },
      {
        label: "موتور دیزل صنعتی",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
      {
        id: 2,
        title: "دیزل ژنراتور اضطراری",
        model: "EG-500",
        power: "500 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-diesel-generators",
      },
      {
        id: 3,
        title: "نیروگاه اضطراری دیزلی",
        model: "EP-1000",
        power: "1000 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-power-plants",
      },
    ]),
  },

  {
    id: 5,
    title: "ژنراتور دریایی",
    model: "MG-500",
    category: "marine-equipment",

    description:
      "سیستم تولید برق طراحی‌شده برای استفاده در شناورها و کاربردهای دریایی.",

    longDescription:
      "ژنراتور دریایی MG-500 برای محیط‌های دریایی و شناورها طراحی شده و با توان ۵۰۰ کیلوولت آمپر، امکان تأمین برق پایدار برای تجهیزات الکتریکی شناور را فراهم می‌کند.",

    image: productImage,

    specifications: {
      powerKva: 500,
      voltage: 690,
      frequency: 60,
      brand: "mitsubishi",
    },

    gallery: gallery("ژنراتور دریایی MG-500"),

    badges: [
      {
        label: "توان",
        value: "500",
        unit: "kVA",
      },
      {
        label: "ولتاژ",
        value: "690",
        unit: "V",
      },
      {
        label: "فرکانس",
        value: "60",
        unit: "Hz",
      },
    ],

    features: [
      "مناسب محیط دریایی",
      "طراحی مقاوم",
      "تأمین برق شناورها",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "طراحی دریایی",
        description:
          "مناسب استفاده در محیط‌های دریایی",
        icon: "shield",
      },
      {
        id: 2,
        title: "مقاومت بالا",
        description:
          "طراحی مناسب شرایط سخت محیطی",
        icon: "shield",
      },
      {
        id: 3,
        title: "تأمین برق پایدار",
        description:
          "تأمین برق تجهیزات الکتریکی شناورها",
        icon: "battery",
      },
      {
        id: 4,
        title: "کنترل هوشمند",
        description:
          "پایش پارامترهای عملکرد سیستم",
        icon: "gear",
      },
      {
        id: 5,
        title: "پشتیبانی فنی",
        description:
          "خدمات مهندسی تجهیزات دریایی",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "توان",
        value: "500 kVA",
      },
      {
        label: "فرکانس",
        value: "60 Hz",
      },
      {
        label: "ولتاژ",
        value: "690 V",
      },
      {
        label: "برند",
        value: "Mitsubishi",
      },
      {
        label: "کاربرد",
        value: "Marine",
      },
    ],

    sidebarSpecs: [
      {
        label: "توان (kVA)",
        value: 500,
      },
      {
        label: "ولتاژ (V)",
        value: 690,
      },
      {
        label: "فرکانس (Hz)",
        value: 60,
      },
      {
        label: "برند",
        value: "Mitsubishi",
      },
    ],

    availability: {
      status: "in-stock",
      label: "قابل تأمین",
    },

    href: "/products/marine-generators",

    consultationUrl:
      "/contact?product=mg-500",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "تجهیزات دریایی",
        href: "/products?category=marine-equipment",
      },
      {
        label: "ژنراتور دریایی",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 8,
        title: "تجهیزات برق دریایی",
        model: "ME-690",
        voltage: "690 V",
        frequency: "60 Hz",
        href: "/products/marine-electrical-equipment",
      },
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
      {
        id: 2,
        title: "دیزل ژنراتور اضطراری",
        model: "EG-500",
        power: "500 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-diesel-generators",
      },
    ]),
  },

  {
    id: 6,
    title: "تابلو کنترل ژنراتور",
    model: "CP-400",
    category: "control-systems",

    description:
      "سیستم کنترل و مدیریت عملکرد ژنراتورها با قابلیت پایش و حفاظت تجهیزات.",

    longDescription:
      "تابلو کنترل ژنراتور CP-400 برای مدیریت، پایش و حفاظت سیستم تولید برق طراحی شده و امکان کنترل پارامترهای اصلی تجهیزات را فراهم می‌کند.",

    image: productImage,

    specifications: {
      voltage: 400,
      frequency: 50,
      brand: "other",
    },

    gallery: gallery("تابلو کنترل ژنراتور CP-400"),

    badges: [
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
      "کنترل هوشمند",
      "حفاظت سیستم",
      "مانیتورینگ عملکرد",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "کنترل هوشمند",
        description:
          "مدیریت پارامترهای اصلی سیستم",
        icon: "gear",
      },
      {
        id: 2,
        title: "حفاظت سیستم",
        description:
          "محافظت از تجهیزات در شرایط غیرعادی",
        icon: "shield",
      },
      {
        id: 3,
        title: "مانیتورینگ",
        description:
          "پایش مستمر عملکرد سیستم",
        icon: "battery",
      },
      {
        id: 4,
        title: "پشتیبانی فنی",
        description:
          "قابل استفاده در پروژه‌های صنعتی",
        icon: "wrench",
      },
      {
        id: 5,
        title: "طراحی سفارشی",
        description:
          "امکان تطبیق تابلو با پروژه",
        icon: "gear",
      },
    ],

    technicalSpecs: [
      {
        label: "ولتاژ",
        value: "400 V",
      },
      {
        label: "فرکانس",
        value: "50 Hz",
      },
      {
        label: "نوع سیستم",
        value: "Generator Control",
      },
      {
        label: "کاربرد",
        value: "Industrial",
      },
    ],

    sidebarSpecs: [
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "فرکانس (Hz)",
        value: 50,
      },
      {
        label: "برند",
        value: "Other",
      },
    ],

    availability: {
      status: "in-stock",
      label: "قابل تأمین",
    },

    href: "/products/generator-control-panels",

    consultationUrl:
      "/contact?product=cp-400",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "سیستم‌های کنترل",
        href: "/products?category=control-systems",
      },
      {
        label: "تابلو کنترل ژنراتور",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 7,
        title: "تابلو ATS",
        model: "ATS-400",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/ats-panels",
      },
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
    ]),
  },

  {
    id: 7,
    title: "تابلو ATS",
    model: "ATS-400",
    category: "control-systems",

    description:
      "سیستم انتقال خودکار منبع برق برای جابه‌جایی سریع و ایمن میان منابع تغذیه.",

    longDescription:
      "تابلو ATS-400 برای انتقال خودکار بار بین منبع اصلی و ژنراتور طراحی شده و در سیستم‌های برق اضطراری برای کاهش زمان قطعی برق مورد استفاده قرار می‌گیرد.",

    image: productImage,

    specifications: {
      voltage: 400,
      frequency: 50,
      brand: "other",
    },

    gallery: gallery("تابلو ATS-400"),

    badges: [
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
      "انتقال خودکار",
      "پاسخ سریع",
      "مناسب سیستم‌های اضطراری",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "انتقال خودکار",
        description:
          "تعویض خودکار منبع تغذیه",
        icon: "gear",
      },
      {
        id: 2,
        title: "پاسخ سریع",
        description:
          "کاهش زمان اختلال در تأمین برق",
        icon: "battery",
      },
      {
        id: 3,
        title: "حفاظت سیستم",
        description:
          "حفاظت از تجهیزات در فرآیند انتقال",
        icon: "shield",
      },
      {
        id: 4,
        title: "کنترل هوشمند",
        description:
          "پایش وضعیت منابع تغذیه",
        icon: "gear",
      },
      {
        id: 5,
        title: "کاربرد اضطراری",
        description:
          "مناسب برای زیرساخت‌های حساس",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "ولتاژ",
        value: "400 V",
      },
      {
        label: "فرکانس",
        value: "50 Hz",
      },
      {
        label: "نوع سیستم",
        value: "Automatic Transfer Switch",
      },
      {
        label: "کاربرد",
        value: "Emergency Power",
      },
    ],

    sidebarSpecs: [
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "فرکانس (Hz)",
        value: 50,
      },
      {
        label: "برند",
        value: "Other",
      },
    ],

    availability: {
      status: "in-stock",
      label: "قابل تأمین",
    },

    href: "/products/ats-panels",

    consultationUrl:
      "/contact?product=ats-400",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "سیستم‌های کنترل",
        href: "/products?category=control-systems",
      },
      {
        label: "تابلو ATS",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 6,
        title: "تابلو کنترل ژنراتور",
        model: "CP-400",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/generator-control-panels",
      },
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
    ]),
  },

  {
    id: 8,
    title: "تجهیزات برق دریایی",
    model: "ME-690",
    category: "marine-equipment",

    description:
      "تجهیزات تخصصی برق و انرژی مورد استفاده در شناورها و سامانه‌های دریایی.",

    longDescription:
      "تجهیزات برق دریایی ME-690 برای کاربردهای تخصصی شناورها و سامانه‌های دریایی طراحی شده و با تمرکز بر پایداری عملکرد و مقاومت در شرایط سخت مورد استفاده قرار می‌گیرد.",

    image: productImage,

    specifications: {
      voltage: 690,
      frequency: 60,
      brand: "other",
    },

    gallery: gallery("تجهیزات برق دریایی ME-690"),

    badges: [
      {
        label: "ولتاژ",
        value: "690",
        unit: "V",
      },
      {
        label: "فرکانس",
        value: "60",
        unit: "Hz",
      },
    ],

    features: [
      "کاربرد دریایی",
      "تجهیزات تخصصی",
      "مقاومت در شرایط سخت",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "کاربرد دریایی",
        description:
          "مناسب برای سامانه‌های برق شناورها",
        icon: "shield",
      },
      {
        id: 2,
        title: "مقاومت بالا",
        description:
          "طراحی مناسب محیط‌های سخت",
        icon: "shield",
      },
      {
        id: 3,
        title: "تجهیزات تخصصی",
        description:
          "برای کاربردهای تخصصی دریایی",
        icon: "gear",
      },
      {
        id: 4,
        title: "کنترل دقیق",
        description:
          "پایش وضعیت تجهیزات",
        icon: "battery",
      },
      {
        id: 5,
        title: "خدمات فنی",
        description:
          "پشتیبانی مهندسی تجهیزات دریایی",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "ولتاژ",
        value: "690 V",
      },
      {
        label: "فرکانس",
        value: "60 Hz",
      },
      {
        label: "نوع تجهیز",
        value: "Marine Electrical Equipment",
      },
      {
        label: "کاربرد",
        value: "Marine",
      },
    ],

    sidebarSpecs: [
      {
        label: "ولتاژ (V)",
        value: 690,
      },
      {
        label: "فرکانس (Hz)",
        value: 60,
      },
      {
        label: "برند",
        value: "Other",
      },
    ],

    availability: {
      status: "in-stock",
      label: "قابل تأمین",
    },

    href: "/products/marine-electrical-equipment",

    consultationUrl:
      "/contact?product=me-690",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "تجهیزات دریایی",
        href: "/products?category=marine-equipment",
      },
      {
        label: "تجهیزات برق دریایی",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 5,
        title: "ژنراتور دریایی",
        model: "MG-500",
        power: "500 kVA",
        voltage: "690 V",
        frequency: "60 Hz",
        href: "/products/marine-generators",
      },
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
    ]),
  },

  {
    id: 9,
    title: "قطعات یدکی دیزل ژنراتور",
    model: "SP-CUM",
    category: "spare-parts",

    description:
      "تأمین قطعات تخصصی مورد نیاز برای سرویس، تعمیر و نگهداری سیستم‌های تولید برق.",

    longDescription:
      "قطعات یدکی SP-CUM برای سرویس، تعمیر و نگهداری سیستم‌های تولید برق و دیزل ژنراتورها تأمین می‌شوند و شامل مجموعه‌ای از قطعات تخصصی و مصرفی مورد نیاز پروژه‌ها هستند.",

    image: productImage,

    specifications: {
      brand: "cummins",
    },

    gallery: gallery("قطعات یدکی دیزل ژنراتور SP-CUM"),

    badges: [
      {
        label: "نوع",
        value: "Spare",
        unit: "Parts",
      },
      {
        label: "برند",
        value: "Cummins",
      },
    ],

    features: [
      "قطعات تخصصی",
      "تأمین قطعات مصرفی",
      "پشتیبانی فنی",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "قطعات تخصصی",
        description:
          "تأمین قطعات مورد نیاز تجهیزات تولید برق",
        icon: "gear",
      },
      {
        id: 2,
        title: "قطعات مصرفی",
        description:
          "تأمین اقلام مصرفی مورد نیاز سرویس",
        icon: "wrench",
      },
      {
        id: 3,
        title: "پشتیبانی فنی",
        description:
          "راهنمایی برای انتخاب قطعات مناسب",
        icon: "shield",
      },
      {
        id: 4,
        title: "تأمین پروژه",
        description:
          "تأمین قطعات مورد نیاز پروژه‌های صنعتی",
        icon: "battery",
      },
      {
        id: 5,
        title: "سرویس و نگهداری",
        description:
          "مناسب عملیات تعمیر و نگهداری",
        icon: "wrench",
      },
    ],

    technicalSpecs: [
      {
        label: "نوع محصول",
        value: "Spare Parts",
      },
      {
        label: "برند",
        value: "Cummins",
      },
      {
        label: "کاربرد",
        value: "Diesel Generator",
      },
      {
        label: "خدمات",
        value: "Supply & Technical Support",
      },
    ],

    sidebarSpecs: [
      {
        label: "نوع",
        value: "قطعات یدکی",
      },
      {
        label: "برند",
        value: "Cummins",
      },
      {
        label: "کاربرد",
        value: "Diesel Generator",
      },
    ],

    availability: {
      status: "in-stock",
      label: "قابل تأمین",
    },

    href: "/products/diesel-generator-spare-parts",

    consultationUrl:
      "/contact?product=sp-cum",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "قطعات یدکی",
        href: "/products?category=spare-parts",
      },
      {
        label: "قطعات یدکی دیزل ژنراتور",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 4,
        title: "موتور دیزل صنعتی",
        model: "DE-750",
        power: "750 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-engines",
      },
      {
        id: 2,
        title: "دیزل ژنراتور اضطراری",
        model: "EG-500",
        power: "500 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/emergency-diesel-generators",
      },
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
    ]),
  },

  {
    id: 10,
    title: "تجهیزات تعمیر و نگهداری",
    model: "MT-400",
    category: "industrial-equipment",

    description:
      "تجهیزات و ملزومات تخصصی برای سرویس، تعمیر و نگهداری سیستم‌های صنعتی و نیروگاهی.",

    longDescription:
      "تجهیزات تعمیر و نگهداری MT-400 برای عملیات سرویس، تعمیر و نگهداری تجهیزات صنعتی و نیروگاهی طراحی شده و با هدف افزایش قابلیت اطمینان و کاهش زمان توقف تجهیزات مورد استفاده قرار می‌گیرد.",

    image: productImage,

    specifications: {
      voltage: 400,
      frequency: 50,
      brand: "other",
    },

    gallery: gallery("تجهیزات تعمیر و نگهداری MT-400"),

    badges: [
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
      "تجهیزات تخصصی",
      "مناسب تعمیرات صنعتی",
      "افزایش قابلیت اطمینان",
    ],

    keyFeatures: [
      {
        id: 1,
        title: "تجهیزات تخصصی",
        description:
          "مناسب عملیات فنی و تعمیرات صنعتی",
        icon: "wrench",
      },
      {
        id: 2,
        title: "تعمیرات صنعتی",
        description:
          "قابل استفاده در محیط‌های صنعتی",
        icon: "gear",
      },
      {
        id: 3,
        title: "قابلیت اطمینان",
        description:
          "کمک به افزایش پایداری تجهیزات",
        icon: "shield",
      },
      {
        id: 4,
        title: "سرویس دوره‌ای",
        description:
          "مناسب برنامه‌های نگهداری پیشگیرانه",
        icon: "wrench",
      },
      {
        id: 5,
        title: "پشتیبانی فنی",
        description:
          "خدمات فنی مرتبط با تجهیزات",
        icon: "battery",
      },
    ],

    technicalSpecs: [
      {
        label: "ولتاژ",
        value: "400 V",
      },
      {
        label: "فرکانس",
        value: "50 Hz",
      },
      {
        label: "نوع تجهیز",
        value: "Maintenance Equipment",
      },
      {
        label: "کاربرد",
        value: "Industrial",
      },
    ],

    sidebarSpecs: [
      {
        label: "ولتاژ (V)",
        value: 400,
      },
      {
        label: "فرکانس (Hz)",
        value: 50,
      },
      {
        label: "برند",
        value: "Other",
      },
    ],

    availability: {
      status: "in-stock",
      label: "قابل تأمین",
    },

    href: "/products/maintenance-equipment",

    consultationUrl:
      "/contact?product=mt-400",

    breadcrumbs: [
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "تجهیزات صنعتی",
        href: "/products?category=industrial-equipment",
      },
      {
        label: "تجهیزات تعمیر و نگهداری",
      },
    ],

    relatedProducts: relatedProducts([
      {
        id: 9,
        title: "قطعات یدکی دیزل ژنراتور",
        model: "SP-CUM",
        href: "/products/diesel-generator-spare-parts",
      },
      {
        id: 4,
        title: "موتور دیزل صنعتی",
        model: "DE-750",
        power: "750 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-engines",
      },
      {
        id: 1,
        title: "دیزل ژنراتور صنعتی",
        model: "DG-1375",
        power: "1375 kVA",
        voltage: "400 V",
        frequency: "50 Hz",
        href: "/products/industrial-diesel-generators/dg-1375",
      },
    ]),
  },
];