import {
  Blocks,
  Building2,
  CalendarDays,
  Check,
  ArrowRight,
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

        return (
          <Link className="service-card" href={`/layanan/${slug}`} key={slug}>
            <span className="service-card-top">
              <span className="service-card-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="service-card-number">
                {String(index + 1).padStart(2, "0")}
                <span>/ {String(services.length).padStart(2, "0")} JENIS</span>
              </span>
            </span>
            <h3>{title}</h3>
            <p className="service-card-description">{description}</p>
            <ul className="service-card-list" aria-label="Cakupan layanan">
              {examples.map((example) => (
                <li key={example}>
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
            <span className="service-card-cta">
              <span>Lihat detail layanan</span>
              <svg className="service-card-hover-wave" viewBox="0 0 100 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path className="service-card-hover-wave-blue" d="M0 80 C28 80 48 75 66 64 C82 54 92 35 100 23 V140 H0 Z" />
                <path className="service-card-hover-wave-yellow" d="M66 64 C82 53 92 27 100 0 L100 23 C92 37 82 55 66 64 Z" />
              </svg>
              <ArrowRight className="service-card-cta-icon" size={16} aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
