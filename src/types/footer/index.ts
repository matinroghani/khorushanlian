import type { LucideIcon } from "lucide-react";

export type FooterLink = {
  id:number
  title: string;
  href: string;
  icon?: LucideIcon;
};

export type FooterSection = {
    id:number
  title: string;
  links: FooterLink[];
};