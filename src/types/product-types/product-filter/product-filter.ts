import type {
  ProductBrand,
  ProductCategory,
} from "@/types/product-types/product";

export interface ProductFilterOption {
  label: string;
  value: string;
}

export type ProductFilterGroupId =
  | "category"
  | "power"
  | "voltage"
  | "frequency"
  | "brand";

export interface ProductFilterGroup {
  id: ProductFilterGroupId;
  title: string;
  options: ProductFilterOption[];
}

export interface ProductFilters {
  categories: ProductCategory[];
  powerRanges: string[];
  voltages: string[];
  frequencies: string[];
  brands: ProductBrand[];
}

export const defaultProductFilters: ProductFilters = {
  categories: [],
  powerRanges: [],
  voltages: [],
  frequencies: [],
  brands: [],
};