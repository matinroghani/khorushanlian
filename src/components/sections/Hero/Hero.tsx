import Tagline from "./components/Tagline";
import LiveMonitoring from "./components/LiveMonitoring";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        flex-col
        lg:flex-row-reverse
        items-center
        justify-between
        gap-8
        w-full
        overflow-hidden

        bg-[url('/images/ui/Hero/Hero-bg.png')]
        bg-cover
        bg-center
        bg-no-repeat

        px-(--spacing-page-x)
        py-(--spacing-hero-y)
      "
    >
      <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
        <Tagline />
      </div>
      
      <div className="flex justify-center w-full lg:w-auto">
        <LiveMonitoring />
      </div>
    </section>
  );
}