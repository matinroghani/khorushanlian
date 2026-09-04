import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import IndustrialSolutionsCarousel from "./components/IndustrialSolutions-Carousel";

export default function IndustrialSolutions() {
  return (
    <section
      className="
        flex
        flex-col
        gap-10
        px-(--spacing-page-x)
        py-10
        bg-(--trust-bg)
        lg:gap-12
        rounded-xl
      "
    >
      <SectionTitle
        title="مهندسی برای سیستم‌های حیاتی"
        description="راهکارهای تخصصی برای تجهیزات صنعتی، دریایی و زیرساخت‌های حیاتی"
      />

      <IndustrialSolutionsCarousel />
    </section>
  );
}