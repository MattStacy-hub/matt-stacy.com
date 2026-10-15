import Image from "next/image";
import type { Photo } from "@/data/home";

export const SERVICE_HERO_ID = "service-hero";

interface ServiceHeroProps {
  photo: Photo;
  heading: string;
  lead?: string;
}

/** Full-bleed photo opening each service page. Shorter than the homepage hero. */
export function ServiceHero({ photo, heading, lead }: ServiceHeroProps) {
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
        className="-z-20 object-cover"
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
      <div className="grid items-end gap-6 px-gutter pb-[clamp(28px,5vw,56px)] md:grid-cols-[1fr_auto]">
        <div>
          <h1 className={`font-display max-w-[14ch] text-[clamp(40px,6.4vw,88px)] leading-none text-balance ${lead ? "mb-5" : ""}`}>
            {heading}
          </h1>
          {lead && <p className="max-w-[48ch] text-[clamp(16px,1.4vw,19px)] text-bone">{lead}</p>}
        </div>
        {/* Where the photo was taken, set like the captions in Selected work. */}
        <p className="hidden border-l-2 border-petroglyph pl-3 md:block">
          <span className="block text-[15px] leading-tight font-semibold">{photo.title}</span>
          <span className="label text-[10px] tracking-[0.28em] opacity-80">{photo.place}</span>
        </p>
      </div>
    </section>
  );
}
