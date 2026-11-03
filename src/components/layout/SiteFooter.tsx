export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="label border-t border-bone/15 bg-varnish px-gutter pt-7 pb-10 text-[10.5px] text-bone">
      © {year} Matt Stacy
    </footer>
  );
}
