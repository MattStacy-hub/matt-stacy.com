import Image from "next/image";
import type { Photo } from "@/data/home";

export const SERVICE_HERO_ID = "service-hero";

interface ServiceHeroProps {
  photo: Photo;
  heading: string;
}

/** Full-bleed photo opening each service page. Shorter than the homepage hero. */
export function ServiceHero({ photo, heading }: ServiceHeroProps) {
  return (
    <section
      id={SERVICE_HERO_ID}
      className="relative isolate flex min-h-[min(78vh,780px)] flex-col justify-end overflow-hidden pt-28 text-white"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="hero-drift -z-20 object-cover"
        style={{ objectPosition: photo.focus }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,33,28,.5) 0%, rgba(42,33,28,0) 22%, rgba(42,33,28,0) 45%, rgba(42,33,28,.65) 75%, rgba(42,33,28,.9) 100%), linear-gradient(90deg, rgba(42,33,28,.4) 0%, rgba(42,33,28,0) 60%)",
        }}
      />
      <div className="px-gutter pb-[clamp(28px,5vw,56px)]">
        <h1 className="hero-rise heading-page max-w-[14ch]">
          {heading}
        </h1>
      </div>
    </section>
  );
}
