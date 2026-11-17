import {
  CalendarDays,
  Check,
  CodeXml,
  ArrowUpRight,
  PanelsTopLeft,
  ShoppingCart,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  examples: string[];
};

const serviceIcons = [
  PanelsTopLeft,
  CodeXml,
  ShoppingCart,
  CalendarDays,
  PanelsTopLeft,
  CodeXml,
];

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="service-cards">
      {services.map(({ title, description, examples }, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];

        return (
          <a className="service-card" href="#contact" key={title}>
            <span className="service-card-top">
              <span className="service-card-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="service-card-number">0{index + 1} <span>/ WEBSITE</span></span>
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
              Diskusikan kebutuhan <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
