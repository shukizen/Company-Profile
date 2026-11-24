const marqueeServices = [
  { label: "Company Profile", slug: "website-company-profile" },
  { label: "Landing Page Promosi", slug: "landing-page-promosi" },
  { label: "Toko Online", slug: "toko-online" },
  { label: "Booking & Reservasi", slug: "booking-reservasi" },
  { label: "Website Portofolio", slug: "website-portofolio" },
  { label: "Website Custom", slug: "website-custom" },
] as const;

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="service-marquee-group" aria-hidden={hidden || undefined}>
      {marqueeServices.map(({ label, slug }) => (
        <li className="service-marquee-item" key={slug}>
          <a href={`/layanan/${slug}`} tabIndex={hidden ? -1 : undefined}>
            <span>{label}</span>
          </a>
          <span className="service-marquee-dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function ServiceMarquee() {
  return (
    <section className="service-marquee" aria-label="Jenis layanan website">
      <div className="service-marquee-viewport">
        <div className="service-marquee-track">
          <div className="service-marquee-half">
            <MarqueeGroup />
            <MarqueeGroup hidden />
          </div>
          <div className="service-marquee-half service-marquee-half-clone" aria-hidden="true">
            <MarqueeGroup hidden />
            <MarqueeGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
