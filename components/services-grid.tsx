import {
  ArrowRight,
  Blocks,
  Building2,
  CalendarDays,
  Check,
  Images,
  Megaphone,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import type { ServicePageData } from "@/lib/services";

const serviceIcons = [
  Building2,
  Megaphone,
  ShoppingCart,
  CalendarDays,
  Images,
  Blocks,
];

export function ServicesGrid({ services }: { services: readonly ServicePageData[] }) {
  return (
    <div className="service-cards">
      {services.map(({ slug, title, description, examples }, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        const isFeatured = slug === "website-custom";

        return (
          <Link
            className={`service-card${isFeatured ? " is-featured" : ""}`}
            href={`/layanan/${slug}`}
            key={slug}
          >
            <span className="service-card-top">
              <span className="service-card-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="service-card-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
            <h3>{title}</h3>
            <p className="service-card-description">{description}</p>
            <ul className="service-card-list" aria-label="Cakupan layanan">
              {examples.map((example) => (
                <li key={example}>
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
            <span className="service-card-cta">
              <span>Lihat detail layanan</span>
              <ArrowRight className="service-card-cta-icon" size={16} aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
