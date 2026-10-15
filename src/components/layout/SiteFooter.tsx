import Link from "next/link";
import { MAIN_NAV } from "@/data/navigation";
import { CONTACT } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="label flex flex-wrap justify-between gap-4 border-t border-bone/15 bg-varnish px-gutter pt-7 pb-10 text-[10.5px] text-bone">
      <span>
        © {year} Matt Stacy · Adventure photographer &amp; filmmaker · {CONTACT.base}
      </span>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-5">
          {MAIN_NAV.filter((item) => item.href !== "/").map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
