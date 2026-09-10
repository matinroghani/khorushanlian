import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectEquipmentProps = {
  equipmentList: { title: string; image: string }[];
};

export default function ProjectEquipment({ equipmentList }: ProjectEquipmentProps) {
  if (!equipmentList || equipmentList.length === 0) return null;

  return (
    <section className="w-full border-y border-(--color-border-light) py-10">

      <div className="w-full px-(--spacing-page-x)">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-(--color-blue-500)" />
            <h2 className="text-lg font-bold text-(--color-text-primary)">
              تجهیزات استفاده شده
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-white text-(--color-text-secondary) hover:bg-(--color-surface-muted)">
              <ChevronRight size={16} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-white text-(--color-text-secondary) hover:bg-(--color-surface-muted)">
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>

        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
          {equipmentList.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] flex-1 rounded-xl border border-(--color-border-light) bg-(--color-white) p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <h3 className="text-center text-xs font-bold text-(--color-text-primary)">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}