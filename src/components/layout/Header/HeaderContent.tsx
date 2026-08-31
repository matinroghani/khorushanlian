import Logo from "@/components/shared/Logo/Logo";
import HeaderItems from "./components/Header-Items";
import PrimaryCta from "@/components/shared/Cta/PrimaryCta";
import SecondaryCta from "@/components/shared/Cta/SecondaryCta";
import { Phone } from "lucide-react";

export default function HeaderContent() {
  return (
    <div
      className="
        flex
        flex-col
        gap-(--spacing-section-inner)

        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-10
      "
    >
      {/* Logo */}
      <div
        className="
          shrink-0

          lg:flex-1
        "
      >
        <Logo />
      </div>

      {/* Navigation */}
      <div
        className="
          flex
          justify-center

          lg:flex-1
        "
      >
        <HeaderItems />
      </div>

      {/* CTA */}
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          gap-3

          lg:flex-1
          lg:flex-row
          lg:items-center
          lg:justify-end
        "
      >
        <PrimaryCta title="درخواست مشاوره فنی" />
        <SecondaryCta title="تماس با ما" icon={Phone} />
      </div>
    </div>
  );
}
