"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const tabs = [
  { id: "overview", label: "معرفی محصول" },
  { id: "gallery", label: "گالری تصاویر" },
  { id: "features", label: "ویژگی‌ها" },
  { id: "specs", label: "مشخصات فنی" },
  { id: "related", label: "محصولات مرتبط" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* ── Optimized scroll spy with rAF throttle ── */
  useEffect(() => {
    let ticking = false;

    const updateActiveTab = () => {
      const offset = 140;

      let currentTab: TabId = tabs[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      // Cache rects once (avoid multiple getBoundingClientRect calls)
      const rects = tabs.map((tab) => {
        const section = document.getElementById(tab.id);
        return section
          ? { id: tab.id, top: section.getBoundingClientRect().top }
          : null;
      });

      for (const rect of rects) {
        if (!rect) continue;

        const distance = Math.abs(rect.top - offset);

        if (rect.top <= offset + 20 && distance < closestDistance) {
          closestDistance = distance;
          currentTab = rect.id;
        }
      }

      // Scroll progress
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;

      setActiveTab(currentTab);
      setScrollProgress(progress);

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveTab);
    };

    updateActiveTab();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ── Auto-scroll active tab into view (mobile horizontal) ── */
  useEffect(() => {
    const button = tabRefs.current[activeTab];
    const container = containerRef.current;
    if (!button || !container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // If active tab is out of visible range, scroll it into center
    if (
      buttonRect.left < containerRect.left ||
      buttonRect.right > containerRect.right
    ) {
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeTab]);

  /* ── Click handler ── */
  const handleClick = useCallback((id: TabId) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveTab(id);

    const offset = 90;
    const top =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md ">
      {/* ── Top accent line ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/30 to-transparent" />

      <div className="relative">
        {/* ── Left fade (mobile scroll hint) ── */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:hidden" />
        {/* ── Right fade ── */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white via-white/80 to-transparent sm:hidden" />

        {/* ── Scrollable tabs container ── */}
        <div
          ref={containerRef}
          className="flex min-w-max items-center justify-center gap-0 overflow-x-auto scroll-smooth px-4 sm:gap-1 lg:gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                onClick={() => handleClick(tab.id)}
                aria-current={isActive ? "true" : undefined}
                className={`group relative flex shrink-0 items-center gap-2 whitespace-nowrap px-4 py-4 text-xs font-semibold transition-colors sm:text-sm ${
                  isActive
                    ? "text-(--color-blue-500)"
                    : "text-(--color-text-muted) hover:text-(--color-text-primary)"
                }`}
              >
                {/* Tab number */}
                <span
                  className={`font-mono text-[9px] font-bold tracking-widest transition-colors ${
                    isActive
                      ? "text-(--color-blue-500)/70"
                      : "text-(--color-text-muted)/50 group-hover:text-(--color-text-muted)"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Tab label */}
                <span>{tab.label}</span>

                {/* Active indicator — industrial bracket style */}
                <span
                  aria-hidden
                  className={`absolute inset-x-2 bottom-0 h-0.5 bg-(--color-blue-500) transition-all duration-300 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />

                {/* Corner accents (only active) */}
                <span
                  aria-hidden
                  className={`absolute bottom-0 left-2 h-1.5 w-px bg-(--color-blue-500) transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  aria-hidden
                  className={`absolute bottom-0 right-2 h-1.5 w-px bg-(--color-blue-500) transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Bottom border ── */}
      <div className="h-px w-full bg-(--color-border-light)" />

      {/* ── Scroll progress bar ── */}
      <div
        className="absolute bottom-0 left-0 h-px bg-(--color-blue-500)/60 transition-[width] duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}