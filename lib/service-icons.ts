import {
  Blocks,
  Building2,
  CalendarDays,
  Images,
  Megaphone,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const serviceIconMap: Record<string, LucideIcon> = {
  "website-company-profile": Building2,
  "landing-page-promosi": Megaphone,
  "toko-online": ShoppingCart,
  "booking-reservasi": CalendarDays,
  "website-portofolio": Images,
  "website-custom": Blocks,
};

export function getServiceIcon(slug: string): LucideIcon {
  return serviceIconMap[slug] ?? Building2;
}
