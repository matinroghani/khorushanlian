import { navItems } from "@/data/navigation";
import Link from "next/link";

export default function HeaderItems() {
  return (
    <nav aria-label="main navigation" className="w-full">
      <ul
        className="
          mt-4
          lg:mt-0
          flex
          flex-col
          items-center
          gap-0
          lg:flex-row
          lg:items-center
          lg:gap-1
        "
      >
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`
              w-full
              text-center
              lg:w-auto
              ${
                index !== navItems.length - 1
                  ? "border-b border-(--navbar-border) lg:border-b-0"
                  : ""
              }
            `}
          >
            <Link
              href={item.href}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-0
                lg:rounded-lg
                px-3
                py-3
                text-sm
                text-(--navbar-text)
                transition-colors
                duration-200
                hover:text-(--color-blue-400)
                lg:w-auto
                lg:px-3
                lg:py-2
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
