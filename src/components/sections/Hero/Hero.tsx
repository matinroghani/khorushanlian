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
        gap-6
        w-full
        overflow-hidden
        border-b
        border-(--navbar-border)

        bg-[url('/images/ui/Hero/Hero-bg.png')]
        bg-cover
        bg-no-repeat
        bg-fixed
        bg-center
        max-sm:bg-[position:65%_center]

        px-(--spacing-page-x)
        py-12
        lg:py-16
      "
    >
      <div className="flex w-full flex-col items-center lg:w-auto lg:items-start">
        <Tagline />
      </div>

      <div className="flex w-full justify-center lg:w-auto">
        <LiveMonitoring />
      </div>
    </section>
  );
}
