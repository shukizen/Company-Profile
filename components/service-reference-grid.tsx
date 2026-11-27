import { ExternalLink, Globe } from "lucide-react";
import type { ServiceReference } from "@/lib/services";

export function ServiceReferenceGrid({
  references,
  badgePrefix = "Website Referensi",
}: {
  references: readonly ServiceReference[];
  serviceTitle?: string;
  badgePrefix?: string;
}) {
  return (
    <div className="service-reference-grid">
      {references.map(({ name, category, note, href, previewImage, highlights }) => (
        <div className="service-reference-slot" key={href}>
          <a
            className="service-reference-card"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Kunjungi situs ${name}`}
          >
            <div className="service-reference-preview" aria-hidden="true">
              {previewImage ? <img src={previewImage} alt="" width={1470} height={712} loading="lazy" /> : null}
              <span className="service-reference-preview-label">{badgePrefix} · {name}</span>
            </div>
            <div className="service-reference-info">
              <div className="service-reference-meta">
                <span className="service-reference-category">{category}</span>
                <span className="service-reference-ext" aria-hidden="true">
                  <ExternalLink size={16} />
                </span>
              </div>
              <h3>{name}</h3>
              <p>{note}</p>
              {highlights?.length ? (
                <ul className="service-reference-highlights" aria-label="Sorotan situs">
                  {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              ) : null}
              <span className="service-reference-cta">
                Kunjungi website <Globe size={15} aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
