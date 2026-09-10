import { FooterSection } from "@/types/layout-types/footer";
import Link from "next/link";

type FooterLinkSectionProps = {
  data: FooterSection;
};

export default function FooterLinkSection({ data }: FooterLinkSectionProps) {
  return (
    <section>
      <h3
        className="
          mb-3
          text-sm
          font-semibold
          text-white
        "
      >
        {data.title}
      </h3>

      <ul className="flex flex-col gap-2">
        {data.links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  leading-5
                  text-(--color-surface)/55
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                {Icon && (
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="
                      shrink-0
                      text-(--color-surface)/40
                      transition-colors
                      duration-200
                      group-hover:text-(--color-blue-400)
                    "
                  />
                )}

                <span>{link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
