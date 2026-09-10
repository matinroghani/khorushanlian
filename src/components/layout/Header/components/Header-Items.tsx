"use client";

import { navItems } from "@/data/layout-mocks/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderItems() {
  const pathname = usePathname();

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
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
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
                className={`
                  flex
                  w-full
                  items-center
                  justify-center
                  border-b-2
                  px-3
                  py-3
                  text-sm
                  lg:w-auto
                  lg:px-3
                  lg:py-2
                  ${
                    isActive
                      ? "border-[var(--color-blue-400)] text-[var(--color-blue-400)]"
                      : "border-transparent text-[var(--navbar-text)]"
                  }
                  transition-[color,border-color]
                  duration-300
                  ease-out
                  hover:border-[var(--color-blue-400)]
                  hover:text-[var(--color-blue-400)]
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}