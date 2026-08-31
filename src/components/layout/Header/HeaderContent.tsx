import Logo from "@/components/shared/Logo/Logo";
import HeaderItems from "./components/Header-Items";
import PrimaryCta from "@/components/shared/Cta/PrimaryCta";
import SecondaryCta from "@/components/shared/Cta/SecondaryCta";
import { Phone } from "lucide-react";

export default function HeaderContent() {
  return (
    <>
      <div className="shrink-0">
        <Logo />
      </div>

      <div className="flex flex-1 justify-center lg:flex">
        <HeaderItems />
      </div>

      <div
        className="
        flex
        w-full
        flex-col
        items-center
        gap-3
        lg:w-fit
        lg:flex-row
        lg:items-center
      ">
        <PrimaryCta title="درخواست مشاوره فنی" />
        <SecondaryCta title="تماس با ما" icon={Phone} />
      </div>
    </>
  );
}
