import HeaderContent from "./HeaderContent";


export default function Header() {
  return (
    <header
      className="
        flex items-center justify-between
        gap-4
        px-(--spacing-page-x)
        py-3 sm:py-4
        bg-(--color-navy-950)
        text-(--color-surface)
      "
    >
        <HeaderContent />
    </header>
  );
}
