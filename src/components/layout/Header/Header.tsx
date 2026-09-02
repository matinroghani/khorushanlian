import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <header
      className="
        border-b
        border-(--navbar-border)
        bg-(--color-navy-950)
        px-(--spacing-page-x)
        py-3
        text-(--color-surface)
        sm:py-4
      "
    >
      <HeaderContent />
    </header>
  );
}