type ProjectTabsProps = {
  activeTab: string;
};

const tabs = [
  { id: "overview", label: "معرفی پروژه" },
  { id: "specs", label: "مشخصات فنی" },
  { id: "gallery", label: "گالری تصاویر" },
  { id: "equipment", label: "تجهیزات استفاده شده" },
];

export default function ProjectTabs({ activeTab }: ProjectTabsProps) {
  return (
    <section className="w-full border-b border-(--color-border-light)">

      <div className="w-full px-(--spacing-page-x)">

        <div className="flex items-center justify-start gap-8 overflow-x-auto pt-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap border-b-2 pb-3 pt-4 text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-(--color-blue-500) font-bold text-(--color-blue-500)"
                  : "border-transparent font-medium text-(--color-text-muted) hover:text-(--color-text-primary)"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}