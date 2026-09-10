export type ProductCategory =
  | "power-generation"
  | "industrial-equipment"
  | "marine-equipment"
  | "control-systems"
  | "spare-parts";

export interface ProductType {
  id: number;
  title: string;
  category: ProductCategory;
  description: string;
  image: string;
  features: string[];
  href: string;
}