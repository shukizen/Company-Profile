import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { getServiceIcon } from "@/lib/service-icons";
import type { ServicePageData } from "@/lib/services";

export function ServicesGrid({ services }: { services: readonly ServicePageData[] }) {
  return (
    <div className="service-cards">
      {services.map(({ slug, title, description, examples }, index) => {
        const Icon = getServiceIcon(slug);
        const isFeatured = slug === "website-custom";

        return (
          <Link
            className={`service-card${isFeatured ? " is-featured" : ""}`}
            href={`/layanan/${slug}`}
            scroll={false}
            key={slug}
          >
            <span className="service-card-watermark" aria-hidden="true">
              <Icon size={148} strokeWidth={1.25} />
            </span>
            <span className="service-card-top">
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
