import { WhyUsItemType } from "@/types/whyUs";
import {
  Ship,
  Factory,
  Zap,
  Building2,
  Flame,
  FlaskConical, // یا می‌تونی از Droplets یا Chemical استفاده کنی
} from "lucide-react";

export const whyUsItems: WhyUsItemType[] = [
  {
    id: 1,
    icon: Ship,
    title: "تجهیزات دریایی",
    description: "راهکارهای تخصصی برای تجهیزات و سامانه‌های دریایی.",
  },
  {
    id: 2,
    icon: Factory,
    title: "صنایع و تأسیسات",
    description: "تأمین و پشتیبانی تجهیزات حیاتی زیرساخت‌های صنعتی.",
  },
  {
    id: 3,
    icon: Zap,
    title: "نیروگاه‌ها",
    description: "راهکارهای پایدار برای تولید و تأمین برق مطمئن.",
  },
  {
    id: 4,
    icon: Building2,
    title: "کارخانه‌ها",
    description: "حفظ تداوم عملکرد و پایداری تجهیزات صنعتی.",
  },
  {
    id: 5,
    icon: Flame,
    title: "پالایشگاه‌ها",
    description: "راهکارهای مهندسی برای زیرساخت‌های حساس و حیاتی.",
  },
  {
    id: 6,
    icon: FlaskConical,
    title: "پتروشیمی",
    description: "تأمین تجهیزات و راهکارهای تخصصی برای صنایع پتروشیمی.",
  },
];