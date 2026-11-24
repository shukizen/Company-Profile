import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ServiceReferenceGrid } from "@/components/service-reference-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { WhatsAppMark } from "@/components/whatsapp-mark";
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

  const titlePrefix = service.title.startsWith("Landing Page ") ? "Landing Page" : "Website";
  const titleAccent = service.title.slice(titlePrefix.length).trim();

  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <SiteNav homePage={false} />
      <main className="service-detail-main" id="main">
        <section className="service-detail-intro wrap" aria-labelledby="service-title">
          <nav className="service-breadcrumb" aria-label="Jejak navigasi">
            <a href="/">Beranda</a><span aria-hidden="true">/</span><a href="/#services">Semua layanan</a><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span>
          </nav>
          <div className="service-detail-title">
            <p className="eyebrow">LAYANAN JCPWEBSOLUTIONS</p>
            <h1 id="service-title">
              <span>{titlePrefix}</span>{" "}<span className="service-detail-title-accent">{titleAccent}</span>
            </h1>
          </div>
          <div className="service-detail-layout">
            <div className="service-detail-copy">
              <div className="service-detail-panel">
                <div className="service-detail-about">
                  <p className="service-detail-eyebrow"><span aria-hidden="true" />TENTANG LAYANAN</p>
                  <h2 className="service-detail-question">
                    <span>Apa itu {titlePrefix}</span>
                    <span className="service-detail-question-accent">{titleAccent}?</span>
                  </h2>
                </div>
                <div className="service-detail-description">
                  {service.detailParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <a className="button service-detail-cta" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">
                    <WhatsAppMark className="whatsapp-mark" /> Diskusikan kebutuhan Anda <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-reference-section" aria-labelledby="service-references-title">
          <div className="wrap">
            <div className="service-reference-heading">
              {service.slug === "website-custom" ? (
                <>
                  <div><p className="eyebrow">PORTOFOLIO PROYEK JCPWEBSOLUTIONS</p><h2 id="service-references-title">Enam proyek<br /><span>untuk {service.title.toLowerCase()}.</span></h2></div>
                  <p>Contoh website custom yang telah dirancang dan dikembangkan langsung oleh tim JCPWebSolutions sesuai kebutuhan masing-masing klien.</p>
                </>
              ) : (
                <>
                  <div><p className="eyebrow">INSPIRASI DARI SITUS PUBLIK</p><h2 id="service-references-title">Enam referensi<br /><span>untuk {service.title.toLowerCase()}.</span></h2></div>
                  <p>Contoh berikut menunjukkan pendekatan yang bisa dipelajari dan disesuaikan. Situs-situs ini bukan proyek JCPWebSolutions.</p>
                </>
              )}
            </div>
            <ServiceReferenceGrid
              references={service.references}
              serviceTitle={service.title}
              badgePrefix={service.slug === "website-custom" ? "Proyek JCPWebSolutions" : "Website Referensi"}
            />
          </div>
        </section>
      </main>
      <SiteFooter homePage={false} />
    </>
  );
}
