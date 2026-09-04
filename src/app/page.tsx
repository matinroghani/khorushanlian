import Hero from "@/components/sections/Hero/Hero";
import IndustrialSolutions from "@/components/sections/IndustrialSolutions/IndustrialSolutions";
import KeyMetric from "@/components/sections/KeyMetric/KeyMetric";
import WhyUs from "@/components/sections/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-10">
        <KeyMetric />
        <IndustrialSolutions />
        <WhyUs />
      </div>
    </>
  );
}
