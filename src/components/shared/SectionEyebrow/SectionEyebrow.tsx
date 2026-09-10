import React from "react";

type SectionEyebrowProps = {
  children: React.ReactNode;
};

export default function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-(--color-blue-500)">
      <span className="h-px w-6 bg-(--color-blue-500)" />
      {children}
    </div>
  );
}