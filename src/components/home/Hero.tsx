import Image from "next/image";
import { HERO_PHOTO } from "@/data/home";

export const HERO_ID = "hero";

export function Hero() {
  return (
    <section
      id={HERO_ID}
      className="relative isolate flex min-h-[min(86vh,880px)] flex-col justify-end overflow-hidden pt-28 text-white"
    >
      <Image
        src={HERO_PHOTO.src}
        alt={HERO_PHOTO.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: HERO_PHOTO.focus }}
      />
      {/* Darkens the top for the nav and the lower left for the heading. The photo's snow sits right behind the text. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,33,28,.5) 0%, rgba(42,33,28,0) 20%, rgba(42,33,28,0) 42%, rgba(42,33,28,.6) 68%, rgba(42,33,28,.9) 100%), linear-gradient(90deg, rgba(42,33,28,.45) 0%, rgba(42,33,28,0) 60%)",
        }}
      />
      <div className="px-gutter pb-[clamp(28px,5vw,56px)]">
        <h1 className="font-display max-w-[13ch] text-[clamp(40px,7vw,96px)] leading-none text-balance">
          Adventure Photographer in Cusco, Peru
        </h1>
      </div>
    </section>
  );
}
