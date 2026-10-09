import { LOCATIONS } from "@/data/home";

export function Locations() {
  return (
    <section id="locations" className="px-gutter py-[clamp(64px,9vw,128px)]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[clamp(28px,4vw,44px)] grid gap-4.5">
          <h2 className="text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em] text-balance">
            Filming and photography locations in Peru
          </h2>
          {/* Serif lead-in: the one section note on the page. */}
          <p className="font-display max-w-[46ch] text-[clamp(19px,1.7vw,23px)] leading-[1.45] tracking-normal [font-variation-settings:'opsz'_36]">
            I live in the Sacred Valley and work across the Peruvian Andes.
            Scouting, permits, transport and acclimatization are planned into the
            schedule, not left to the week of the shoot.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[clamp(20px,3vw,40px)] lg:grid-cols-4">
          {LOCATIONS.map((location) => (
            <article key={location.name} className="min-w-0 border-t border-varnish pt-4.5">
              <p className="label mb-2.5 text-clay">{location.region}</p>
              <h3 className="mb-2 text-[19px] leading-tight font-semibold">{location.name}</h3>
              <p className="text-[14.5px] leading-[1.65]">{location.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
