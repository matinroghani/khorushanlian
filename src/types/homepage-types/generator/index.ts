import type { LucideIcon } from "lucide-react";

export type GeneratorMetric = {
  id: number;
  label: string;
  key: string;
  value: number;
  unit: string;
  icon: LucideIcon;
};