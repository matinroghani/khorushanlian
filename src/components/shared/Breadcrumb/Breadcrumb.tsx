import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="mb-8 flex items-center gap-2 text-xs text-white/60">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-white font-medium" : ""}>
                {item.label}
              </span>
            )}
            {!isLast && <ArrowLeft size={12} className="text-white/40" />}
          </div>
        );
      })}
    </div>
  );
}