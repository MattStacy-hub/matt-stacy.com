import { SERVICES } from "./services";

/** Copy for the contact page, from the current site. */
export const CONTACT_PAGE = {
  heading: "Let's collaborate.",
  lead: "Expeditions, brand campaigns, athlete documentation. Tell me what you're planning.",
  messageLabel: "Tell me about it",
  messageHint: "Location, dates, what are you hoping to capture…",
  sentHeading: "Thanks, it's on its way.",
};

/**
 * The project types in the form's dropdown: the four services, in menu order,
 * then two that aren't services. The value doubles as the ?service= a service
 * page links with, so arriving from one preselects it.
 */
export const PROJECT_TYPES = [
  ...SERVICES.map((service) => ({ value: service.slug, label: service.navLabel })),
  { value: "licensing-prints", label: "Image Licensing or Prints" },
  { value: "other", label: "Something Else" },
];

export function projectTypeLabel(value: string | undefined): string | undefined {
  return PROJECT_TYPES.find((type) => type.value === value)?.label;
}

/**
 * Upper bounds for each field, in characters. The form sets the same values as
 * maxLength, but anything can post to the route, so it checks them again.
 * 254 is the longest valid email address.
 */
export const FIELD_LIMITS = { name: 100, email: 254, message: 5000 } as const;
