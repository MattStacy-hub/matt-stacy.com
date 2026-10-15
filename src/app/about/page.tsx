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
  INTRO_BODY,
  INTRO_OPENER,
  MILESTONES,
  PORTRAIT,
  PULL_QUOTE,
  STRENGTHS,
} from "@/data/about";
import { getPosts } from "@/lib/blog";
import { breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Matt Stacy, Adventure Photographer in Peru",
  description:
    "Matt Stacy is an adventure photographer, filmmaker and climber based in the Sacred Valley, Cusco. Wilderness First Responder, fluent in Spanish, working across Peru and worldwide.",
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

        {/* The story beside the portrait, with the facts a producer checks first under it. */}
        <section className="px-gutter py-[clamp(64px,9vw,128px)]">
          <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(32px,6vw,96px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <figure className="md:sticky md:top-28">
              <Image
                src={PORTRAIT.src}
                alt={PORTRAIT.alt}
                width={PORTRAIT.width}
                height={PORTRAIT.height}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_35%]"
              />
            </figure>
            <div>
              <p className="font-display mb-8 text-[clamp(26px,2.8vw,36px)] leading-[1.3] tracking-[-0.01em] text-balance [font-variation-settings:'opsz'_72]">
                {INTRO_OPENER}
              </p>
              <div className="grid max-w-[62ch] gap-5 text-[17px]">
                {INTRO_BODY.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-[clamp(40px,5vw,64px)] grid border-t border-varnish sm:grid-cols-2">
                {FIELD_SHEET.map((fact) => (
                  <div
                    key={fact.term}
                    className="grid gap-1 border-b border-bone py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                  >
                    <dt className="label opacity-70">{fact.term}</dt>
                    <dd className="text-[17px] leading-snug font-semibold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* How I got here: a rope line down the page, a year at each anchor. */}
        <section className="bg-bone/45 px-gutter py-[clamp(64px,9vw,128px)]">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="mb-[clamp(32px,5vw,56px)] text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.02em]">
              How I got here
            </h2>
            <ol className="relative border-l-2 border-varnish">
              {MILESTONES.map((m) => (
                <li
                  key={m.year}
                  className="relative grid gap-x-[clamp(24px,4vw,64px)] gap-y-2 pb-[clamp(32px,4vw,48px)] pl-[clamp(24px,4vw,48px)] last:pb-0 md:grid-cols-[120px_minmax(0,1fr)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.55em] -left-[7px] size-3 rounded-full bg-petroglyph"
                  />
                  <p className="font-display text-[clamp(30px,3.2vw,44px)] leading-none tabular-nums">{m.year}</p>
                  <div>
                    <h3 className="mb-2 text-[20px] leading-tight font-semibold">{m.title}</h3>
                    <p className="max-w-[58ch] text-[15.5px] leading-[1.7]">{m.text}</p>
                    {m.href && (
                      <Link
                        href={m.href}
                        className="group mt-2.5 inline-flex gap-2 text-[14px] font-semibold text-petroglyph"
                      >
                        Read the story
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-gutter py-[clamp(64px,9vw,128px)]">
          <figure className="mx-auto max-w-[900px] text-center">
            <blockquote className="font-display text-[clamp(28px,3.6vw,48px)] leading-[1.25] tracking-[-0.01em] text-balance [font-variation-settings:'opsz'_96]">
              “{PULL_QUOTE.quote}”
            </blockquote>
            <figcaption className="mt-6 text-[15px] opacity-70">
              <Link href={PULL_QUOTE.href} className="underline-offset-4 hover:underline">
                {PULL_QUOTE.credit}
              </Link>
            </figcaption>
          </figure>
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
