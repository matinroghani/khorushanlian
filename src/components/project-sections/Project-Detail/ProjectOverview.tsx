import SectionEyebrow from "@/components/shared/SectionEyebrow/SectionEyebrow";
import { Check } from "lucide-react";

type ProjectOverviewProps = {
  overview: string;
  goals: string[];
};

export default function ProjectOverview({ overview, goals }: ProjectOverviewProps) {
  return (
    <div className="min-w-0 text-right">
      <SectionEyebrow>معرفی پروژه</SectionEyebrow>
      <h2 className="mt-3 text-2xl font-bold text-(--color-text-primary) sm:text-3xl">
        اجرای مهندسی با تمرکز بر عملکرد پایدار
      </h2>
      <p className="mt-4 text-sm leading-8 text-(--color-text-secondary) sm:text-base">
        {overview}
      </p>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-(--color-text-primary)">
          اهداف پروژه
        </h3>
        <ul className="mt-4 space-y-3">
          {goals.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--color-surface-blue) text-(--color-blue-500)">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-sm leading-7 text-(--color-text-secondary)">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}