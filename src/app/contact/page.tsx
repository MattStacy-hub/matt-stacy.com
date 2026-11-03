import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONTACT_PAGE } from "@/data/contact";
import { CONTACT } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Matt Stacy: Photography and Film in Peru",
  description:
    "Plan an expedition, brand campaign, drone shoot or adventure photography session in Peru. Send an inquiry to Matt Stacy, based in Cusco, Peru.",
  path: "/contact",
});

/** A quiet frame to close on: one figure, small against the valley. */
const CLOSING_PHOTO = {
  src: "/images/portfolio/lake-reflection-green-valley.webp",
  width: 2560,
  height: 1707,
  alt: "A green valley and low cloud mirrored in a still lake, a lone figure on the far shore, Peru",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <SiteHeader />
      <main>
        <section className="px-gutter pt-[clamp(120px,13vw,176px)] pb-[clamp(64px,9vw,128px)]">
          <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(48px,7vw,112px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div>
              <h1 className="heading-page mb-6">
                {CONTACT_PAGE.heading}
              </h1>
              <p className="mb-6 max-w-[34ch] text-[17px]">{CONTACT_PAGE.lead}</p>
              <p className="mb-[clamp(36px,5vw,56px)] flex items-center gap-2.5 text-[15px] font-semibold">
                <span aria-hidden="true" className="size-2 rounded-full bg-petroglyph" />
                {CONTACT.booking}
              </p>

              {/* Direct details, ruled like the About page's fact sheet. */}
              <dl className="border-t border-varnish">
                <div className="grid gap-1 border-b border-bone py-4">
                  <dt className="label opacity-70">Email</dt>
                  <dd className="text-[17px] font-semibold break-words">
                    <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 border-b border-bone py-4">
                  <dt className="label opacity-70">Phone</dt>
                  <dd className="grid gap-0.5 text-[17px] font-semibold">
                    {CONTACT.phones.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:underline">
                        {phone.display}
                        <span className="ml-2 text-[14px] font-normal opacity-70">{phone.region}</span>
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="grid gap-1 border-b border-bone py-4">
                  <dt className="label opacity-70">Instagram</dt>
                  <dd className="text-[17px] font-semibold">
                    <a
                      href={CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @{CONTACT.instagram}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 border-b border-bone py-4">
                  <dt className="label opacity-70">Based</dt>
                  <dd className="text-[17px] font-semibold">
                    {CONTACT.base}
                    <span className="ml-2 text-[14px] font-normal opacity-70">{CONTACT.timezone}</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="md:pt-3">
              <ContactForm />
            </div>
          </div>
        </section>

        <div className="relative aspect-[16/9] w-full sm:aspect-[21/8]">
          <Image
            src={CLOSING_PHOTO.src}
            alt={CLOSING_PHOTO.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
