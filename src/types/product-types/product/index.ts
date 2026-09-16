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

export type ProductKeyFeatureIcon =
  | "wrench"
  | "battery"
  | "fuel"
  | "gear"
  | "shield";

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
  icon: ProductKeyFeatureIcon;
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
  power?: string;
  voltage?: string;
  frequency?: string;
  href: string;
}

export interface ProductBreadcrumb {
  label: string;
  href?: string;
}

export interface ProductAvailability {
  status: ProductAvailabilityStatus;
  label: string;
}

export interface ProductType {
  id: number;
  title: string;
  model: string;
  category: ProductCategory;

  description: string;
  longDescription: string;

  image: string;

  specifications: ProductFilterSpecs;

  gallery: ProductGalleryItem[];

  badges: ProductBadge[];

  features: string[];

  keyFeatures: ProductKeyFeature[];

  technicalSpecs: ProductTechnicalSpec[];

  sidebarSpecs: ProductSidebarSpec[];

  availability: ProductAvailability;

  href: string;

  catalogUrl?: string;

  consultationUrl: string;

  breadcrumbs: ProductBreadcrumb[];

  relatedProducts: ProductRelatedItem[];
}