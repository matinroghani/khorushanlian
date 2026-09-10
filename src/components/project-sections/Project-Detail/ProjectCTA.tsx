import { Download } from "lucide-react";

type ProjectCTAProps = {
  title: string;
  description: string;
  buttonText: string;
};

export default function ProjectCTA({ title, description, buttonText }: ProjectCTAProps) {
  return (
    <section className="w-full px-(--spacing-page-x) py-10">
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-(--color-navy-950) p-6 shadow-lg md:flex-row md:p-8">
        <div className="text-right">
          <h3 className="text-base font-bold text-white sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-xs text-white/60 sm:text-sm">
            {description}
          </p>
        </div>
        <button className="flex shrink-0 items-center gap-2 rounded-lg bg-(--color-blue-500) px-6 py-3 text-sm font-bold text-white transition-all hover:bg-(--color-navy-800) hover:shadow-lg hover:shadow-blue-500/20">
          <Download size={18} />
          {buttonText}
        </button>
      </div>
    </section>
  );
}