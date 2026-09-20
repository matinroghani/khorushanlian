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
  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* ── Scroll spy با rAF ── */
  useEffect(() => {
    let ticking = false;

    const updateActiveTab = () => {
      const offset = 140;
      let currentTab: TabId = tabs[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top;
        const distance = Math.abs(top - offset);
        if (top <= offset + 20 && distance < closestDistance) {
          closestDistance = distance;
          currentTab = tab.id;
        }
      }

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / docHeight))
          : 0;

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

  /* ── تشخیص امکان اسکرول افقی (RTL/LTR safe) ── */
  const updateScrollHints = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    // در RTL مقدار scrollLeft منفی یا صفر است، پس قدرمطلق می‌گیریم.
    const pos = Math.min(Math.abs(scrollLeft), max);

    const isRTL = getComputedStyle(el).direction === "rtl";

    const hiddenAtStart = pos > 1;          // محتوا قبل از ویو پنهان است
    const hiddenAtEnd = pos < max - 1;      // محتوا بعد از ویو پنهان است

    // در RTL «شروع» سمت راست است و «پایان» سمت چپ.
    setCanScrollStart(hiddenAtStart);
    setCanScrollEnd(hiddenAtEnd);
    // برای استفاده در fadeها به شکل فیزیکی:
    void isRTL;
  }, []);

  useEffect(() => {
    updateScrollHints();
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollHints, { passive: true });
    window.addEventListener("resize", updateScrollHints);
    return () => {
      el.removeEventListener("scroll", updateScrollHints);
      window.removeEventListener("resize", updateScrollHints);
    };
  }, [updateScrollHints]);

  /* ── وسط‌چین کردن تب فعال (بدون پرش عمودی صفحه) ── */
  useEffect(() => {
    const container = containerRef.current;
    const button = tabRefs.current[activeTab];
    if (!container || !button) return;

    const cRect = container.getBoundingClientRect();
    const bRect = button.getBoundingClientRect();

    const outOfView =
      bRect.left < cRect.left || bRect.right > cRect.right;

    if (!outOfView) return;

    // از scrollIntoView استفاده نمی‌کنیم چون ممکن است صفحه را عمودی جابه‌جا کند.
    button.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeTab]);

  /* ── کلیک ── */
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
    <div className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md">
      {/* خط رنگی بالا */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--color-blue-500)/30 to-transparent" />

      <div className="relative">
        {/* fade سمت شروع (راست در RTL) */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 start-0 z-10 w-6 bg-gradient-to-l from-white via-white/80 to-transparent transition-opacity duration-200 sm:w-10 ${
            canScrollStart ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* fade سمت پایان (چپ در RTL) */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 end-0 z-10 w-6 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-200 sm:w-10 ${
            canScrollEnd ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* پوسته اسکرول افقی */}
        <div
          ref={containerRef}
          className="overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* داخلی: عرض برابر محتوا، حداقل به اندازه عرض والد
              → وقتی جا هست وسط‌چین می‌شود، وقتی سرریز می‌کند از ابتدا بریده نمی‌شود */}
          <div className="flex w-max min-w-full items-center justify-center gap-0.5 px-2 sm:gap-1 sm:px-4 lg:gap-2 lg:px-6">
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
                  className={`group relative flex shrink-0 items-center gap-1.5 whitespace-nowrap px-2.5 py-3.5 text-[11px] font-semibold transition-colors sm:gap-2 sm:px-4 sm:py-4 sm:text-sm lg:px-5 ${
                    isActive
                      ? "text-(--color-blue-500)"
                      : "text-(--color-text-muted) hover:text-(--color-text-primary)"
                  }`}
                >
                  {/* شماره تب */}
                  <span
                    className={`font-mono text-[8px] font-bold tracking-widest transition-colors sm:text-[9px] ${
                      isActive
                        ? "text-(--color-blue-500)/70"
                        : "text-(--color-text-muted)/50 group-hover:text-(--color-text-muted)"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{tab.label}</span>

                  {/* اندیکاتور تب فعال */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-1 bottom-0 h-0.5 bg-(--color-blue-500) transition-all duration-300 sm:inset-x-2 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`absolute bottom-0 start-1 h-1.5 w-px bg-(--color-blue-500) transition-opacity duration-300 sm:start-2 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`absolute bottom-0 end-1 h-1.5 w-px bg-(--color-blue-500) transition-opacity duration-300 sm:end-2 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* خط پایین */}
      <div className="h-px w-full bg-(--color-border-light)" />

      {/* نوار پیشرفت اسکرول صفحه */}
      <div
        className="absolute bottom-0 left-0 h-px bg-(--color-blue-500)/60 transition-[width] duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}