import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { industrialSolutionItems } from "@/data/IndustrialSolutions";
import IndustrialSolutionsCard from "./components/IndustrialSolutions-Card";

export default function IndustrialSolutions() {
  return (
    <section
      className="
        flex
        flex-col
        gap-8
        px-(--spacing-page-x)
        py-8
      "
    >
      <SectionTitle
        title="راهکار های مهندسی برای سیستم های حیاتی"
        description="ما با تکیه بر دانش فنی و تجربه عملی، خدماتی جامع در حوزه سیستم های صنعتی، دریایی و تجهیزات پیشرفته ارائه میدهیم."
      />

      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:gap-4
          lg:grid-cols-3
          lg:gap-5
          2xl:grid-cols-5
          2xl:gap-6
        "
      >
        {industrialSolutionItems.map((item) => (
          <IndustrialSolutionsCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}