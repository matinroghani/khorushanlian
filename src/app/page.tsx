import AboutFeature from "@/components/homepage-sections/AboutFeature/AboutFeature";
import Cta from "@/components/homepage-sections/CallToAction/Cta";
import Hero from "@/components/homepage-sections/Hero/Hero";
import IndustrialSolutions from "@/components/homepage-sections/IndustrialSolutions/IndustrialSolutions";
import KeyMetric from "@/components/homepage-sections/KeyMetric/KeyMetric";
import Products from "@/components/homepage-sections/Products/Products";
import Projects from "@/components/homepage-sections/Projects/Projects";
import WhyUs from "@/components/homepage-sections/WhyUs/WhyUs";
import Reveal from "@/components/shared/Motion/Reveal";

export default function Home() {
  return (
    <>
      <Reveal y={0} duration={0.9}>
        <Hero />
      </Reveal>

      <div className="flex flex-col gap-10">
        <Reveal>
          <KeyMetric />
        </Reveal>

        <Reveal delay={0.05}>
          <IndustrialSolutions />
        </Reveal>

        <Reveal delay={0.05}>
          <WhyUs />
        </Reveal>

        <Reveal delay={0.05}>
          <Products />
        </Reveal>

        <Reveal delay={0.05}>
          <Projects />
        </Reveal>

        <Reveal delay={0.05}>
          <AboutFeature />
        </Reveal>

        <Reveal delay={0.05}>
          <Cta />
        </Reveal>
      </div>
    </>
  );
}