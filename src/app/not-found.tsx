import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="px-gutter pt-40 pb-32">
        <p className="label text-clay">404</p>
        <h1 className="heading-page mt-4">
          This page isn&apos;t built yet
        </h1>
        <p className="mt-6 max-w-[48ch]">
          It may be on its way. The homepage has the work, the services and how
          to get in touch.
        </p>
        <Link href="/" className="label mt-8 inline-block border-b border-current pb-1.5">
          Back to the homepage
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
