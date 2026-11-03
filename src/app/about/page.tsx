import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServiceHero, SERVICE_HERO_ID } from "@/components/services/ServiceHero";
import { Clients } from "@/components/home/Clients";
import { ContactCta } from "@/components/home/ContactCta";
import { PostCard } from "@/components/blog/PostCard";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ABOUT_HERO,
  FIELD_SHEET,
  INTRO_OPENER,
  PORTRAIT,
  STRENGTHS,
} from "@/data/about";
import { getPosts } from "@/lib/blog";
import { CONTACT } from "@/data/site";
import { breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Matt Stacy, Adventure Photographer in Peru",
  description:
    "Matt Stacy is an adventure photographer, filmmaker and climber based in the Sacred Valley, Cusco. Wilderness First Responder, Spanish speaker, working across Peru and worldwide.",
  path: "/about",
  ogImage: ABOUT_HERO.src,
});

export default async function AboutPage() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <SiteHeader overHeroId={SERVICE_HERO_ID} />
      <main>
        <ServiceHero photo={ABOUT_HERO} heading="Matt Stacy" />

        {/*
          The portrait and its two companions: the opener at the top of the
          frame, the facts a producer checks first along its bottom edge.
        */}
        <section className="px-gutter py-[clamp(64px,9vw,128px)]">
          <div className="mx-auto grid max-w-[1320px] gap-[clamp(32px,6vw,96px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <figure>
              <Image
                src={PORTRAIT.src}
                alt={PORTRAIT.alt}
                width={PORTRAIT.width}
                height={PORTRAIT.height}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_35%]"
              />
            </figure>
            <div className="flex flex-col justify-between gap-[clamp(40px,5vw,64px)]">
              <p className="font-display -mt-[0.18em] max-w-[20ch] text-[clamp(32px,4vw,56px)] leading-[1.15] tracking-[-0.015em] text-balance [font-variation-settings:'opsz'_96]">
                {INTRO_OPENER}
              </p>

              <dl className="grid border-t border-varnish sm:grid-cols-2">
                {FIELD_SHEET.map((fact) => (
                  <div
                    key={fact.term}
                    className="grid content-start gap-1.5 border-b border-bone py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                  >
                    <dt className="label opacity-70">{fact.term}</dt>
                    <dd className="text-[18px] leading-snug font-semibold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* A first way in, before the long story. Copy from the current About page. */}
        <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-x-10 gap-y-8 border-t border-varnish pt-[clamp(28px,4vw,44px)]">
            <div>
              <h2 className="font-display mb-3 text-[clamp(32px,4vw,56px)] leading-[1.05] text-balance">
                Tell me what you&apos;re planning.
              </h2>
              <p className="max-w-[52ch] text-[17px] opacity-80">{CONTACT.replyTime}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="label group inline-flex gap-3 bg-petroglyph px-6.5 py-4 text-white"
              >
                Work with me
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="label inline-flex border border-varnish px-6.5 py-4 transition-colors hover:bg-varnish hover:text-canvas"
              >
                See the portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* What a team gets, framed as the questions a producer asks before hiring. */}
        <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <div className="mx-auto max-w-[1320px]">
            <h2 className="mb-[clamp(28px,4vw,44px)] text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.02em]">
              Before you hire me
            </h2>
            <dl className="border-t border-varnish">
              {STRENGTHS.map((s) => (
                <div
                  key={s.question}
                  className="grid gap-x-[clamp(24px,5vw,80px)] gap-y-3 border-b border-bone py-[clamp(24px,3vw,36px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                >
                  <dt className="font-display text-[clamp(26px,2.6vw,34px)] leading-[1.1]">{s.question}</dt>
                  <dd>
                    <p className="max-w-[58ch] text-[17px]">{s.answer}</p>
                    <p className="mt-2.5 text-[14px] font-semibold opacity-70">{s.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Clients />

        {posts.length > 0 && (
          <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
            <div className="mx-auto max-w-[1320px]">
              <div className="mb-[clamp(28px,4vw,44px)] flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
                  Personal Blog
                </h2>
                <Link href="/blog" className="group inline-flex gap-2 text-[15px] font-semibold text-petroglyph">
                  All posts
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="grid gap-x-[clamp(20px,3vw,40px)] gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactCta
          heading="Tell me what you're planning"
          text="The objective, the team, the dates you're looking at."
        />
      </main>
      <SiteFooter />
    </>
  );
}
