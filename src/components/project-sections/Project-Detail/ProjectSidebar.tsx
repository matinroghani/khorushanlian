import { Download, Zap, Clock, MapPin, Calendar, Wrench, Building2 } from "lucide-react";

type ProjectSidebarProps = {
  specs: { label: string; value: string }[];
};

export default function ProjectSidebar({ specs }: ProjectSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit w-full">
      <div className="overflow-hidden rounded-xl border border-(--color-border-light)  shadow-md">
        {/* Header */}
        <div className="bg-(--color-navy-950) px-5 py-4">
          <h3 className="text-base font-bold text-white text-right">
            مشخصات پروژه
          </h3>
        </div>

        {/* List */}
        <div className="divide-y divide-(--color-border-light)">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 py-3.5 hover:bg-(--color-surface-muted) transition-colors"
            >
              <span className="text-xs text-(--color-text-muted)">
                {spec.label}
              </span>
              <span className="text-xs font-bold text-(--color-text-primary)">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="p-4 bg-(--color-surface)">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-(--color-blue-500) px-4 py-3 text-sm font-bold text-white transition-all hover:bg-(--color-navy-800) hover:shadow-lg">
            <Download size={16} />
            دانلود کاتالوگ پروژه
          </button>
          <p className="mt-2 text-center text-[10px] text-(--color-text-muted)">
            فرمت PDF - حجم ۱۲.۶ مگابایت
          </p>
        </div>
      </div>
    </aside>
  );
}