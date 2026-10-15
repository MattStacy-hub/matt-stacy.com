import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero, HERO_ID } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Clients } from "@/components/home/Clients";
import { SelectedWork } from "@/components/home/SelectedWork";
import { BlogQuote } from "@/components/home/BlogQuote";
import { Faq } from "@/components/home/Faq";
import { ContactCta } from "@/components/home/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/data/home";
import {
  faqSchema,
  pageMetadata,
  personSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd data={professionalServiceSchema()} />
      <JsonLd data={faqSchema(FAQ)} />

      <SiteHeader overHeroId={HERO_ID} />
      <main>
        <Hero />
        <Services />
        <Clients />
        <SelectedWork />
        <BlogQuote />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
