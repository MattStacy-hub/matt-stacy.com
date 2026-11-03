import { SERVICES } from "./services";

export interface NavLink {
  label: string;
  href: string;
  /** Page not built yet: shown in menus, but not as a link. */
  comingSoon?: boolean;
  /** Set as a bordered button in the desktop header, not a plain link. */
  button?: boolean;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

/** The services dropdown: one page per service. */
const SERVICE_LINKS: NavLink[] = SERVICES.map((service) => ({
  label: service.navLabel,
  href: `/services/${service.slug}`,
  comingSoon: service.comingSoon,
}));

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: SERVICE_LINKS },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Start a project", href: "/contact", button: true },
];
