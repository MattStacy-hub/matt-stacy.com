import Image from "next/image";
import { CLIENTS, CLIENT_PLACEHOLDER_COUNT } from "@/data/home";

const SHAPES = ["rounded-full", "rounded-[3px]", "rotate-45 scale-80"];

export function Clients() {
  const hasLogos = CLIENTS.length > 0;
  return (
    <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[clamp(28px,4vw,44px)] grid items-end gap-[clamp(20px,6vw,96px)] md:grid-cols-[5fr_7fr]">
          <div>
            <p className="label text-clay">Clients</p>
            <h2 className="mt-3.5 text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
              Brands I&apos;ve worked with
            </h2>
          </div>
          <p className="max-w-[56ch] text-[15px]">
            Outdoor, travel and tourism brands shooting in Peru, plus the athletes
            and production companies who needed someone who already knows the
            terrain.
          </p>
        </div>

        <ul
          aria-label="Client logos"
          className="grid grid-cols-2 border-t border-l border-bone md:grid-cols-4"
        >
          {hasLogos
            ? CLIENTS.map((client) => (
                <li
                  key={client.name}
                  className="grid h-[clamp(96px,10vw,136px)] place-items-center border-r border-b border-bone p-5 opacity-55 transition-opacity hover:opacity-100"
                >
                  {/* Logos are drawn in Desert Varnish via the brightness filter, so any source color works. */}
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={56}
                    className="max-h-14 w-auto brightness-0"
                  />
                </li>
              ))
            : Array.from({ length: CLIENT_PLACEHOLDER_COUNT }, (_, i) => (
                <li
                  key={i}
                  className="grid h-[clamp(96px,10vw,136px)] place-items-center border-r border-b border-bone p-5"
                >
                  <span className="label flex items-center gap-2.5 text-[10.5px] tracking-[0.28em] text-clay">
                    <span
                      aria-hidden="true"
                      className={`size-6.5 border-[1.5px] border-current ${SHAPES[i % SHAPES.length]}`}
                    />
                    Client logo
                  </span>
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}
