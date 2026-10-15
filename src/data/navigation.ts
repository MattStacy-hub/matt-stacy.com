import { SERVICES } from "./services";

export interface NavLink {
  label: string;
  href: string;
  /** Page not built yet: shown in menus, but not as a link. */
  comingSoon?: boolean;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

/** The services dropdown: an overview page, then one page per service. */
const SERVICE_LINKS: NavLink[] = [
  { label: "Overview", href: "/services" },
  ...SERVICES.map((service) => ({
    label: service.navLabel,
    href: `/services/${service.slug}`,
    comingSoon: service.comingSoon,
  })),
];

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services", children: SERVICE_LINKS },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
