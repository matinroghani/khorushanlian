import type {
  ProductBrand,
  ProductType,
} from "@/types/product-types/product";

import type { ProductFilters } from "@/types/product-types/product-filter/product-filter";

function matchesPowerRange(
  powerKva: number | undefined,
  selectedRanges: string[],
) {
  if (selectedRanges.length === 0) {
    return true;
  }

  if (powerKva === undefined) {
    return false;
  }

  return selectedRanges.some((range) => {
    switch (range) {
      case "p-250":
        return powerKva <= 250;

      case "p-500":
        return powerKva > 250 && powerKva <= 500;

      case "p-1000":
        return powerKva > 500 && powerKva <= 1000;

      case "p-2000":
        return powerKva > 1000 && powerKva <= 2000;

      case "p-2000-plus":
        return powerKva > 2000;

      default:
        return false;
    }
  });
}

function matchesVoltage(
  voltage: number | undefined,
  selectedVoltages: string[],
) {
  if (selectedVoltages.length === 0) {
    return true;
  }

  if (voltage === undefined) {
    return false;
  }

  return selectedVoltages.some((selected) => {
    switch (selected) {
      case "v-400":
        return voltage === 400;

      case "v-690":
        return voltage === 690;

      case "v-800":
        return voltage === 800;

      case "v-other":
        return ![400, 690, 800].includes(voltage);

      default:
        return false;
    }
  });
}

function matchesFrequency(
  frequency: number | undefined,
  selectedFrequencies: string[],
) {
  if (selectedFrequencies.length === 0) {
    return true;
  }

  if (frequency === undefined) {
    return false;
  }

  return selectedFrequencies.some((selected) => {
    switch (selected) {
      case "f-50":
        return frequency === 50;

      case "f-60":
        return frequency === 60;

      default:
        return false;
    }
  });
}

function matchesBrand(
  brand: ProductBrand | undefined,
  selectedBrands: ProductBrand[],
) {
  if (selectedBrands.length === 0) {
    return true;
  }

  if (brand === undefined) {
    return false;
  }

  return selectedBrands.includes(brand);
}

export function filterProducts(
  products: ProductType[],
  filters: ProductFilters,
) {
  return products.filter((product) => {
    /*
     * دسته‌بندی
     */
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    /*
     * توان
     */
    if (
      !matchesPowerRange(
        product.specifications?.powerKva,
        filters.powerRanges,
      )
    ) {
      return false;
    }

    /*
     * ولتاژ
     */
    if (
      !matchesVoltage(
        product.specifications?.voltage,
        filters.voltages,
      )
    ) {
      return false;
    }

    /*
     * فرکانس
     */
    if (
      !matchesFrequency(
        product.specifications?.frequency,
        filters.frequencies,
      )
    ) {
      return false;
    }

    /*
     * برند
     */
    if (
      !matchesBrand(
        product.specifications?.brand,
        filters.brands,
      )
    ) {
      return false;
    }

    return true;
  });
}