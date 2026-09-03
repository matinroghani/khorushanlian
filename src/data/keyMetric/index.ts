import { KeyMetricItemType } from "@/types/keyMetric";
import {
  Clock3,
  CalendarCheck,
  Users,
  Wrench,
} from "lucide-react";

export const keyMetricItems:KeyMetricItemType[] = [
  {
    id: 1,
    title: "24/7",
    description: "نگاه عملیاتی به تداوم سرویس",
    icon: Clock3,
  },
  {
    id: 2,
    title: "20+",
    description: "سال تجربه در مهندسی و تأمین توان",
    icon: CalendarCheck,
  },
  {
    id: 3,
    title: "100+",
    description: "پروژه و تجهیز تحویل‌شده",
    icon: Wrench,
  },
  {
    id: 4,
    title: "50+",
    description: "مشتری و مجموعه صنعتی همراه",
    icon: Users,
  },
];