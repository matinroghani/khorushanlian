import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { industrialSolutionItems } from "@/data/IndustrialSolutions";
import IndustrialSolutionsCard from "./components/IndustrialSolutions-Card";

export default function IndustrialSolutions() {
  return (
    <section
      className="
        flex
        flex-col
        gap-6
        px-(--spacing-page-x)
        pb-(--spacing-section)
        pt-12
        sm:pt-14
        lg:gap-8
        lg:pt-16
      "
    >
      <SectionTitle
        title="راهکار های مهندسی برای سیستم های حیاتی"
        description="ما با تکیه بر دانش فنی و تجربه عملی، خدماتی جامع در حوزه سیستم های صنعتی، دریایی و تجهیزات پیشرفته ارائه میدهیم."
      />

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          sm:gap-6
          xl:grid-cols-3
          2xl:grid-cols-5
        "
      >
        {industrialSolutionItems.map((item) => (
          <IndustrialSolutionsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}