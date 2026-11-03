"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Lockup } from "@/components/brand/Lockup";
import { MAIN_NAV, type NavLink } from "@/data/navigation";

interface SiteHeaderProps {
  /**
   * Id of a full-bleed hero the header floats over. While any of it is on
   * screen the header is transparent; once it scrolls away the header turns
   * solid. Pages without a hero leave this out and get a solid header.
   */
  overHeroId?: string;
}

/** Delay before a hover-opened dropdown closes, so a diagonal move to it doesn't drop it. */
const HOVER_CLOSE_MS = 150;

export function SiteHeader({ overHeroId }: SiteHeaderProps) {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(Boolean(overHeroId));
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // An observer, not a scroll listener: state changes twice per page, not on
  // every scroll event (the same fix the AAV navbar needed).
  useEffect(() => {
    if (!overHeroId) return;
    const hero = document.getElementById(overHeroId);
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-88px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [overHeroId]);

  // Escape closes whatever is open; a click elsewhere closes the dropdown.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setServicesOpen(false);
      setMenuOpen((open) => {
        if (open) menuButtonRef.current?.focus();
        return false;
      });
    }
    function onPointer(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  // The page behind the mobile menu shouldn't scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Navigating closes both menus. Done during render rather than in an
  // effect, so the closed state lands in the same paint as the new page.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setServicesOpen(false);
    setMenuOpen(false);
  }

  function openOnHover() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }
  function closeOnLeave() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), HOVER_CLOSE_MS);
  }

  const solid = !overHero;
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-gutter text-white transition-[background-color,padding] duration-300 ${
          solid
            ? "bg-varnish/95 py-3.5 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
        style={{ paddingTop: `calc(${solid ? "14px" : "24px"} + env(safe-area-inset-top, 0px))` }}
      >
        <Lockup markClassName={solid ? "text-petroglyph" : "text-white"} />

        <nav aria-label="Main" className="hidden min-[901px]:block">
          <ul className="flex items-center gap-[clamp(18px,2.6vw,36px)]">
            {MAIN_NAV.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={openOnHover}
                  onMouseLeave={closeOnLeave}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((open) => !open)}
                    className={`label inline-flex items-center gap-2 border-b py-2.5 tracking-[0.26em] ${
                      isCurrent(item.href) ? "border-current" : "border-transparent hover:border-current"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`size-[7px] border-r-[1.5px] border-b-[1.5px] border-current transition-transform duration-200 ${
                        servicesOpen ? "translate-y-px -rotate-[135deg]" : "-translate-y-0.5 rotate-45"
                      }`}
                    />
                  </button>
                  <ul
                    id="services-menu"
                    className={`absolute top-[calc(100%+14px)] -left-6 min-w-[320px] border border-bone/15 bg-varnish py-2.5 shadow-[0_24px_50px_rgba(20,15,12,0.35)] transition duration-200 before:absolute before:inset-x-0 before:-top-4 before:h-4 ${
                      servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1.5 opacity-0"
                    }`}
                  >
                    {item.children.map((child, i) => (
                      <li key={child.href} className={i > 0 ? "border-t border-bone/10" : ""}>
                        <DropdownLink link={child} />
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className={
                      item.button
                        ? "label inline-block bg-petroglyph px-4 py-2.5 tracking-[0.26em] text-white transition-colors hover:bg-[#a9311a]"
                        : `label inline-block border-b py-2.5 tracking-[0.26em] transition-colors ${
                            isCurrent(item.href) ? "border-current" : "border-transparent hover:border-current"
                          }`
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="label border border-white/50 px-3.5 py-2.5 tracking-[0.26em] min-[901px]:hidden"
        >
          Menu
        </button>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-[60] overflow-y-auto bg-varnish px-gutter pb-10 text-canvas"
        style={{ paddingTop: "calc(24px + env(safe-area-inset-top, 0px))" }}
      >
        <div className="flex items-center justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }}
            className="label border border-bone/40 px-3.5 py-2.5 tracking-[0.26em]"
          >
            Close ✕
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-7">
          <ul className="menu-stagger">
            {MAIN_NAV.map((item, i) => (
              <li
                key={item.label}
                className="border-b border-bone/15"
                style={{ "--i": i } as React.CSSProperties}
              >
                {item.children ? (
                  <>
                    <span className="block py-4 text-[26px] font-semibold tracking-[-0.01em]">
                      {item.label}
                    </span>
                    <ul className="mb-4 pb-3.5">
                      {item.children.map((child) => (
                        <li key={child.href} className="flex items-center gap-3">
                          <span aria-hidden="true" className="h-0.5 w-3.5 shrink-0 bg-petroglyph" />
                          {child.comingSoon ? (
                            <span className="flex items-baseline gap-3 py-1.5 text-bone/60">
                              {child.label}
                              <SoonTag />
                            </span>
                          ) : (
                            <Link
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="block py-1.5 text-bone"
                            >
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block py-4 text-[26px] font-semibold tracking-[-0.01em]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

function SoonTag() {
  return (
    <span className="text-[9px] font-semibold tracking-[0.24em] uppercase opacity-60">
      Soon
    </span>
  );
}

/**
 * A row in the Services dropdown. A service whose page isn't built yet is
 * listed but not linked, so nobody lands on a 404.
 */
function DropdownLink({ link }: { link: NavLink }) {
  const rowClass =
    "flex w-full items-center justify-between gap-6 border-l-2 px-6 py-3 text-sm whitespace-nowrap";
  if (link.comingSoon) {
    return (
      <span className={`${rowClass} cursor-default border-transparent text-bone/55`}>
        {link.label}
        <SoonTag />
      </span>
    );
  }
  return (
    <Link
      href={link.href}
      className={`${rowClass} border-transparent text-bone hover:border-petroglyph hover:bg-bone/5 hover:text-white focus-visible:border-petroglyph`}
    >
      {link.label}
    </Link>
  );
}
