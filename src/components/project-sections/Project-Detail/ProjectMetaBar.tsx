import { Building2, MapPin, CalendarDays, Wrench } from "lucide-react";

type ProjectMetaBarProps = {
  client: string;
  location: string;
  year: string;
  categoryLabel: string;
};

export default function ProjectMetaBar({
  client,
  location,
  year,
  categoryLabel,
}: ProjectMetaBarProps) {
  return (
    <section className="mb-5 w-full rounded-b-xl border-b border-(--color-border-light) bg-(--color-white) shadow-sm">
      <div className="grid w-full grid-cols-2 sm:grid-cols-4">
        <ProjectMeta
          icon={Building2}
          label="کارفرما"
          value={client}
          className="border-l border-b border-(--color-border-light) sm:border-b-0"
        />

        <ProjectMeta
          icon={MapPin}
          label="محل اجرا"
          value={location}
          className="border-b border-(--color-border-light) sm:border-b-0 sm:border-l"
        />

        <ProjectMeta
          icon={CalendarDays}
          label="سال اجرا"
          value={year}
          className="border-l border-(--color-border-light)"
        />

        <ProjectMeta
          icon={Wrench}
          label="حوزه پروژه"
          value={categoryLabel}
        />
      </div>
    </section>
  );
}

function ProjectMeta({
  icon: Icon,
  label,
  value,
  className = "",
}: {
  icon: typeof Building2;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`
        flex min-w-0 items-center gap-3
        px-4 py-4
        sm:px-6
        lg:px-8
        ${className}
      `}
    >
      <Icon
        size={18}
        strokeWidth={1.7}
        className="shrink-0 text-(--color-blue-500)"
      />

      <div className="min-w-0 text-right">
        <span className="block text-[10px] text-(--color-text-muted)">
          {label}
        </span>

        <span className="mt-0.5 block truncate text-xs font-bold text-(--color-text-primary)">
          {value}
        </span>
      </div>
    </div>
  );
}