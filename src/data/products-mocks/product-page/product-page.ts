import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Headset,
  Truck,
} from "lucide-react";

import type { ProductFilterGroup } from "@/types/product-types/product-filter/product-filter";

export interface ProductHeroFeature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const productHeroFeatures: ProductHeroFeature[] = [
  {
    icon: Truck,
    title: "ارسال سریع",
    subtitle: "به سراسر کشور",
  },
  {
    icon: Headset,
    title: "مشاوره تخصصی",
    subtitle: "انتخاب مناسب با شما",
  },
  {
    icon: BadgeCheck,
    title: "کیفیت تضمین‌شده",
    subtitle: "با گارانتی معتبر",
  },
];

export const productFilterGroups: ProductFilterGroup[] = [
  {
    id: "category",
    title: "دسته‌بندی محصول",
    options: [
      {
        label: "تولید برق",
        value: "power-generation",
      },
      {
        label: "تجهیزات صنعتی",
        value: "industrial-equipment",
      },
      {
        label: "تجهیزات دریایی",
        value: "marine-equipment",
      },
      {
        label: "سیستم‌های کنترلی",
        value: "control-systems",
      },
      {
        label: "قطعات یدکی",
        value: "spare-parts",
      },
    ],
  },

  {
    id: "power",
    title: "توان خروجی (kVA)",
    options: [
      {
        label: "250 و کمتر",
        value: "p-250",
      },
      {
        label: "250 - 500",
        value: "p-500",
      },
      {
        label: "500 - 1000",
        value: "p-1000",
      },
      {
        label: "1000 - 2000",
        value: "p-2000",
      },
      {
        label: "بیش از 2000",
        value: "p-2000-plus",
      },
    ],
  },

  {
    id: "voltage",
    title: "ولتاژ",
    options: [
      {
        label: "400 V",
        value: "v-400",
      },
      {
        label: "690 V",
        value: "v-690",
      },
      {
        label: "800 V",
        value: "v-800",
      },
      {
        label: "سایر",
        value: "v-other",
      },
    ],
  },

  {
    id: "frequency",
    title: "فرکانس",
    options: [
      {
        label: "50 Hz",
        value: "f-50",
      },
      {
        label: "60 Hz",
        value: "f-60",
      },
    ],
  },

  {
    id: "brand",
    title: "برند",
    options: [
      {
        label: "Perkins",
        value: "perkins",
      },
      {
        label: "Cummins",
        value: "cummins",
      },
      {
        label: "Mitsubishi",
        value: "mitsubishi",
      },
      {
        label: "Volvo",
        value: "volvo",
      },
      {
        label: "Doosan",
        value: "doosan",
      },
      {
        label: "سایر",
        value: "other",
      },
    ],
  },
];