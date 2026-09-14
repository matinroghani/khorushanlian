export type ProductCategory =
  | "power-generation"
  | "industrial-equipment"
  | "marine-equipment"
  | "control-systems"
  | "spare-parts";

export type ProductAvailabilityStatus =
  | "in-stock"
  | "out-of-stock"
  | "pre-order";

export type ProductBrand =
  | "perkins"
  | "cummins"
  | "mitsubishi"
  | "volvo"
  | "doosan"
  | "other";

export interface ProductFilterSpecs {
  powerKva?: number;
  voltage?: number;
  frequency?: number;
  brand?: ProductBrand;
}

export interface ProductBadge {
  label: string;
  value: string;
  unit?: string;
}

export interface ProductSidebarSpec {
  label: string;
  value: string | number;
  unit?: string;
}

export interface ProductKeyFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProductTechnicalSpec {
  label: string;
  value: string;
}

export interface ProductGalleryItem {
  id: number;
  image: string;
  alt: string;
}

export interface ProductRelatedItem {
  id: number;
  title: string;
  model: string;
  image: string;
  power: string;
  voltage: string;
  frequency: string;
  href: string;
}

export interface ProductBreadcrumb {
  label: string;
  href?: string;
}

export interface ProductType {
  id: number;
  title: string;
  category: ProductCategory;
  description: string;
  image: string;
  features: string[];
  href: string;

  specifications?: ProductFilterSpecs;

  model?: string;
  longDescription?: string;
  gallery?: ProductGalleryItem[];
  badges?: ProductBadge[];
  keyFeatures?: ProductKeyFeature[];
  technicalSpecs?: ProductTechnicalSpec[];
  sidebarSpecs?: ProductSidebarSpec[];

  availability?: {
    status: ProductAvailabilityStatus;
    label: string;
  };

  catalogUrl?: string;
  consultationUrl?: string;
  breadcrumbs?: ProductBreadcrumb[];
  relatedProducts?: ProductRelatedItem[];
}
