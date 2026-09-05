import AboutFeature from "@/components/sections/AboutFeature/AboutFeature";
import Cta from "@/components/sections/CallToAction/Cta";
import Hero from "@/components/sections/Hero/Hero";
import IndustrialSolutions from "@/components/sections/IndustrialSolutions/IndustrialSolutions";
import KeyMetric from "@/components/sections/KeyMetric/KeyMetric";
import Products from "@/components/sections/Products/Products";
import Projects from "@/components/sections/projects/Projects";
import WhyUs from "@/components/sections/WhyUs/WhyUs";
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
