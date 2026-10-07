import { Mark } from "@/components/brand/Lockup";
import { FIELD_NOTE } from "@/data/home";

export function FieldNote() {
  return (
    <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
      <figure className="mx-auto grid max-w-[1100px] items-start gap-[clamp(20px,4vw,56px)] md:grid-cols-[auto_1fr]">
        <Mark className="mt-2.5 h-16 text-petroglyph" />
        <div>
          <blockquote className="font-display text-[clamp(28px,3.6vw,48px)] leading-[1.25] tracking-[-0.01em] text-balance [font-variation-settings:'opsz'_96]">
            “{FIELD_NOTE.quote}”
          </blockquote>
          <figcaption className="label mt-7 opacity-70">{FIELD_NOTE.credit}</figcaption>
        </div>
      </figure>
    </section>
  );
}
