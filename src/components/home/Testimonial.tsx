import { Mark } from "@/components/brand/Lockup";
import { TESTIMONIAL } from "@/data/home";

export function Testimonial() {
  return (
    <section className="px-gutter py-[clamp(64px,9vw,128px)]">
      <figure className="reveal-up mx-auto grid max-w-[1000px] justify-items-center text-center">
        <Mark className="mb-[clamp(20px,3vw,32px)] h-16 text-petroglyph" />
        <blockquote className="font-display text-[clamp(22px,2.4vw,32px)] leading-[1.4] tracking-[-0.01em] text-pretty [font-variation-settings:'opsz'_72]">
          “{TESTIMONIAL.quote}”
        </blockquote>
        <figcaption className="mt-8 grid gap-1">
          <span className="text-[15px] font-semibold">{TESTIMONIAL.name}</span>
          <span className="text-[14px] opacity-70">{TESTIMONIAL.role}</span>
        </figcaption>
      </figure>
    </section>
  );
}
