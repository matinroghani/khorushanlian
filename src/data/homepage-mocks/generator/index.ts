import { Zap, Gauge, Thermometer, Clock } from "lucide-react";

import type { GeneratorMetric } from "@/types/homepage-types/generator";

export const generatorMetricItems: GeneratorMetric[] = [
  {
    id: 1,
    label: "توان خروجی",
    key: "powerOutput",
    value: 72,
    unit: "%",
    icon: Zap,
  },
  {
    id: 2,
    label: "ولتاژ",
    key: "voltage",
    value: 400,
    unit: "V",
    icon: Zap,
  },
  {
    id: 3,
    label: "سرعت",
    key: "speed",
    value: 1500,
    unit: "RPM",
    icon: Gauge,
  },
  {
    id: 4,
    label: "دما",
    key: "temperature",
    value: 82,
    unit: "°C",
    icon: Thermometer,
  },
  {
    id: 5,
    label: "زمان کارکرد",
    key: "uptime",
    value: 16338,
    unit: "s",
    icon: Clock,
  },
];
