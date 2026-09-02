import type { FooterSection } from "@/types/footer";
import { MapPin, Mail, Phone } from "lucide-react";

export const footerItems: FooterSection[] = [
  {
    id: 1,
    title: "خدمات",
    links: [
      {
        id: 1,
        title: "تولید برق اضطراری",
        href: "#",
      },
      {
        id: 2,
        title: "نیروگاه‌های اضطراری دیزلی و گازی",
        href: "#",
      },
      {
        id: 3,
        title: "تعمیر و نگهداری دیزل ژنراتور",
        href: "#",
      },
      {
        id: 4,
        title: "تجهیزات برق صنعتی",
        href: "#",
      },
      {
        id: 5,
        title: "نگهداری و مشاوره نیروگاه",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    title: "دسترسی سریع",
    links: [
      {
        id: 1,
        title: "درباره ما",
        href: "#",
      },
      {
        id: 2,
        title: "پروژه‌ها",
        href: "#",
      },
      {
        id: 3,
        title: "محصولات و تجهیزات",
        href: "#",
      },
      {
        id: 4,
        title: "خدمات",
        href: "#",
      },
      {
        id: 5,
        title: "تماس با ما",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    title: "ارتباط با ما",
    links: [
      {
        id: 1,
        title: "بوشهر، ایران",
        href: "#",
        icon: MapPin,
      },
      {
        id: 2,
        title: "info@khoroushanlian.ir",
        href: "mailto:info@khoroushanlian.ir",
        icon: Mail,
      },
      {
        id: 3,
        title: "۰۷۷-۱۲۳۴۵۶۷۸",
        href: "tel:+987712345678",
        icon: Phone,
      },
    ],
  },
];
