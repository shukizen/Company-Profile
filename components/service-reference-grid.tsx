import { ExternalLink, Globe } from "lucide-react";
import type { ServiceReference } from "@/lib/services";

export function ServiceReferenceGrid({
  references,
  serviceTitle,
  badgePrefix = "Website Referensi",
}: {
  references: readonly ServiceReference[];
  serviceTitle: string;
  badgePrefix?: string;
}) {
  return (
    <div className="service-reference-grid">
      {references.map(({ name, category, note, href, previewImage, highlights }) => (
        <a className="service-reference-card project-card" href={href} target="_blank" rel="noreferrer" key={href}>
          <div className="service-reference-preview project-art" aria-hidden="true">
            {previewImage ? <img src={previewImage} alt="" width={1470} height={712} loading="lazy" /> : null}
            <span className="service-reference-preview-label">{badgePrefix} · {name}</span>
          </div>
          <div className="service-reference-info project-info">
            <div className="service-reference-meta">
              <span>{category} <span aria-hidden="true">·</span> {serviceTitle}</span>
              <ExternalLink size={19} aria-hidden="true" />
            </div>
            <h3>{name} <span>— {serviceTitle}</span></h3>
            <p>{note}</p>
            {highlights?.length ? (
              <ul className="service-reference-highlights" aria-label="Sorotan situs">
                {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            ) : null}
            <span className="text-link">Lihat situs <Globe size={16} aria-hidden="true" /></span>
          </div>
        </a>
      ))}
    </div>
  );
}
