import FooterLinkSection from "./components/Footer-LinkSection";
import { footerItems } from "@/data/layout-mocks/footer";
import Logo from "@/components/shared/Logo/Logo";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-(--navbar-border)
        bg-(--color-navy-950)
        text-(--color-surface)
        mt-10
      "
    >
      <div
        className="
        flex
        w-full
        flex-col-reverse
        gap-6
        px-(--spacing-page-x)
        py-6
        md:flex-row
        md:items-start
        md:justify-between
        md:gap-8
        md:py-7
      "
      >
        {footerItems.map((item) => (
          <FooterLinkSection key={item.id} data={item} />
        ))}
        <div className="mx-auto md:mx-0">
          <Logo size={72} />
        </div>
      </div>

      <div className="border-t border-(--navbar-border)/20 pt-3">
        <p className="text-center text-[10px] tracking-wider text-(--color-surface)/40">
          © ۱۴۰۵ دریای خروشان لیان — تمامی حقوق محفوظ است.{" "}
        </p>
      </div>
    </footer>
  );
}
