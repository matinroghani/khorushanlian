"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeaderContent from "./HeaderContent";
import Logo from "@/components/shared/Logo/Logo";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          border-(--navbar-border)
          bg-(--navbar-bg)
          px-(--spacing-header-x)
          py-(--spacing-header-y)
          text-(--navbar-text)
          lg:hidden
        "
      >
        <Logo />

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="باز کردن منو"
          aria-expanded={isOpen}
          className="
            inline-flex
            items-center
            justify-center
            rounded-(--radius-sm)
            p-2
            text-(--navbar-text)
            transition-colors
            duration-200
            hover:bg-(--color-navy-800)
            hover:text-(--color-blue-400)
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--color-blue-400)
          "
        >
          <Menu size={24} strokeWidth={1.8} />
        </button>
      </header>

      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!isOpen}
        className={`
          fixed
          inset-y-0
          right-0
          z-50
          flex
          w-full
          max-w-sm
          flex-col
          overflow-y-auto
          overscroll-contain
          scrollbar-none
          border-l
          border-(--navbar-border)
          bg-(--navbar-bg)
          px-(--spacing-sidebar-x)
          py-(--spacing-sidebar-y)
          text-(--navbar-text)
          shadow-[-16px_0_40px_rgba(0,0,0,0.18)]
          transition-transform
          duration-300
          ease-out
          ${isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div
          className="
            flex
            items-center
            justify-end
            pb-(--spacing-component)
          "
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="بستن منو"
            className="
              inline-flex
              items-center
              justify-center
              rounded-(--radius-sm)
              p-2
              text-(--navbar-text-muted)
              transition-colors
              duration-200
              hover:bg-(--color-navy-800)
              hover:text-(--color-blue-400)
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-(--color-blue-400)
            "
          >
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        {/* Navigation & CTA */}
        <div className="flex flex-1 flex-col gap-(--spacing-section-inner)">
          <HeaderContent />
        </div>
      </aside>
    </>
  );
}
