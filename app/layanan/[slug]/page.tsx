import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowRight, Check, ChevronRight } from "lucide-react";
import { ScrollTransitions } from "@/components/scroll-transitions";
import { ServiceReferenceGrid } from "@/components/service-reference-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { WhatsAppMark } from "@/components/whatsapp-mark";
import { getServiceIcon } from "@/lib/service-icons";
import { getServiceBySlug, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: `${service.title} | JCPWebSolutions`,
    description: service.pageDescription,
    alternates: { canonical: `/layanan/${service.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const serviceNumber = String(Math.max(0, serviceIndex) + 1).padStart(2, "0");
  const ServiceIcon = getServiceIcon(service.slug);
  const titlePrefix = service.title.startsWith("Landing Page ") ? "Landing Page" : "Website";
  const titleAccent = service.title.slice(titlePrefix.length).trim();
  const isCustom = service.slug === "website-custom";

  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <SiteNav homePage={false} />
      <ScrollTransitions />
      <main className="service-detail-main" id="main">
        <section className="service-detail-intro" aria-labelledby="service-title">
          <div className="wrap">
            <nav className="service-breadcrumb" aria-label="Jejak navigasi">
              <a href="/">Beranda</a>
              <ChevronRight size={14} aria-hidden="true" />
              <a href="/#services">Semua layanan</a>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className="service-detail-header">
              <div className="service-detail-hero-copy">
                <p className="service-badge service-badge-dark">
                  <span aria-hidden="true" />
                  LAYANAN {serviceNumber} · JCPWEBSOLUTIONS
                </p>
                <h1 id="service-title">
                  <span>{titlePrefix}</span>{" "}
                  <span className="service-detail-title-accent">{titleAccent}</span>
                </h1>
                <p className="service-detail-lead">{service.description}</p>
                <div className="service-detail-actions">
                  <a
                    className="service-btn-primary"
                    href="https://wa.me/6285600604388"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppMark className="whatsapp-mark" />
                    <span>Konsultasi via WhatsApp</span>
                  </a>
                  <a className="service-btn-secondary" href="#service-references">
                    <span>{isCustom ? "Lihat 6 proyek" : "Lihat 6 referensi"}</span>
                    <ArrowDown size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <aside className="service-hero-card" aria-label="Ringkasan komponen layanan">
                <span className="service-hero-watermark" aria-hidden="true">
                  <ServiceIcon size={132} strokeWidth={1.25} />
                </span>
                <div className="service-hero-card-head">
                  <span className="service-hero-card-label">FOKUS UTAMA LAYANAN</span>
                  <span className="service-hero-card-index" aria-hidden="true">
                    {serviceNumber}
                  </span>
                </div>
                <ul className="service-hero-examples">
                  {service.examples.map((example) => (
                    <li key={example}>
                      <span className="service-hero-example-check" aria-hidden="true">
                        <Check size={13} strokeWidth={2.75} />
                      </span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-hero-card-foot">
                  <span>{service.scopeItems.length} cakupan inti</span>
                  <span aria-hidden="true">/</span>
                  <span>{service.preparationSteps.length} persiapan awal</span>
                  <span aria-hidden="true">/</span>
                  <span>
                    {service.references.length} {isCustom ? "proyek" : "referensi"}
                  </span>
                </div>
              </aside>
            </div>
          </div>

          <svg
            className="service-detail-wave-cap"
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path fill="#FFE30F" d="M0 4 Q720 104 1440 4 L1440 10 Q720 110 0 10 Z" />
            <path fill="#0047BD" d="M0 10 Q720 110 1440 10 L1440 16 Q720 116 0 16 Z" />
            <path fill="#ffffff" d="M0 16 Q720 116 1440 16 V72 H0 Z" />
          </svg>
        </section>

        <section className="service-about-section" aria-labelledby="service-about-title">
          <div className="wrap">
            <div className="service-detail-panel">
              <div className="service-detail-about">
                <p className="service-badge service-badge-light">
                  <span aria-hidden="true" />
                  TENTANG LAYANAN
                </p>
                <h2 className="service-detail-question" id="service-about-title">
                  <span>Apa itu {titlePrefix}</span>{" "}
                  <span className="service-detail-question-accent">{titleAccent}?</span>
                </h2>
                <span className="service-about-rule" aria-hidden="true" />
              </div>
              <div className="service-detail-description">
                {service.detailParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="service-guide-section" aria-labelledby="service-scope-title">
          <div className="wrap service-guide-grid">
            <aside className="service-scope-card">
              <span className="service-scope-watermark" aria-hidden="true">
                <ServiceIcon size={136} strokeWidth={1.25} />
              </span>
              <p className="service-badge service-badge-dark">
                <span aria-hidden="true" />
                CAKUPAN LAYANAN
              </p>
              <h2 id="service-scope-title">Yang disiapkan untuk {service.title.toLowerCase()}</h2>
              <ul className="service-scope-list">
                {service.scopeItems.map((item) => (
                  <li key={item}>
                    <span className="service-scope-check" aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="service-prep" aria-labelledby="service-prep-title">
              <div className="service-prep-head">
                <p className="service-badge service-badge-light">
                  <span aria-hidden="true" />
                  PERSIAPAN AWAL
                </p>
                <h2 id="service-prep-title">
                  Tiga hal yang bisa disiapkan <span>sebelum mulai.</span>
                </h2>
              </div>
              <ol className="service-prep-grid">
                {service.preparationSteps.map((step, index) => (
                  <li className="service-prep-card" key={step.title}>
                    <span className="service-prep-num" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <div className="service-prep-body">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="service-reference-section"
          id="service-references"
          aria-labelledby="service-references-title"
        >
          <div className="service-reference-surface">
            <div className="wrap">
              <div className="service-reference-heading">
                {isCustom ? (
                  <>
                    <div>
                      <p className="service-badge service-badge-dark">
                        <span aria-hidden="true" />
                        PORTOFOLIO PROYEK JCPWEBSOLUTIONS
                      </p>
                      <h2 id="service-references-title">
                        Enam proyek
                        <br />
                        <span>untuk {service.title.toLowerCase()}.</span>
                      </h2>
                    </div>
                    <p>
                      Contoh website custom yang telah dirancang dan dikembangkan langsung oleh tim JCPWebSolutions sesuai kebutuhan masing-masing klien.
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="service-badge service-badge-dark">
                        <span aria-hidden="true" />
                        INSPIRASI DARI SITUS PUBLIK
                      </p>
                      <h2 id="service-references-title">
                        Enam referensi
                        <br />
                        <span>untuk {service.title.toLowerCase()}.</span>
                      </h2>
                    </div>
                    <p>
                      Contoh berikut menunjukkan pendekatan yang bisa dipelajari dan disesuaikan. Situs-situs ini bukan proyek JCPWebSolutions.
                    </p>
                  </>
                )}
              </div>

              <ServiceReferenceGrid
                references={service.references}
                serviceTitle={service.title}
                badgePrefix={isCustom ? "Proyek JCPWebSolutions" : "Website Referensi"}
              />

              <div className="service-switcher">
                <div className="service-switcher-head">
                  <div>
                    <p className="service-badge service-badge-dark">
                      <span aria-hidden="true" />
                      JELAJAHI LAYANAN LAIN
                    </p>
                    <h2>Lihat jenis website lainnya</h2>
                  </div>
                  <a
                    className="service-switcher-cta"
                    href="https://wa.me/6285600604388"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppMark className="whatsapp-mark" />
                    <span>Diskusikan kebutuhan Anda</span>
                  </a>
                </div>
                <nav className="service-switcher-grid" aria-label="Daftar layanan website">
                  {services.map((item, index) => {
                    const isCurrent = item.slug === service.slug;
                    const ItemIcon = getServiceIcon(item.slug);
                    return (
                      <a
                        className={`service-switcher-item${isCurrent ? " is-current" : ""}`}
                        href={`/layanan/${item.slug}`}
                        aria-current={isCurrent ? "page" : undefined}
                        key={item.slug}
                      >
                        <span className="service-switcher-icon" aria-hidden="true">
                          <ItemIcon size={16} strokeWidth={2} />
                        </span>
                        <span className="service-switcher-copy">
                          <span className="service-switcher-num">0{index + 1}</span>
                          <span className="service-switcher-title">{item.title}</span>
                        </span>
                        {isCurrent ? (
                          <span className="service-switcher-current">Aktif</span>
                        ) : (
                          <ArrowRight size={15} aria-hidden="true" />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter homePage={false} />
    </>
  );
}
