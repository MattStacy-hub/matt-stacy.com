import Image from "next/image";
import { CLIENTS, CLIENT_PLACEHOLDER_COUNT } from "@/data/home";

const SHAPES = ["rounded-full", "rounded-[3px]", "rotate-45 scale-80"];

/**
 * Logos are sized to the same area rather than the same height, so a long
 * wordmark and a square badge carry similar weight. Capped both ways so
 * neither extreme runs away.
 */
const LOGO_AREA = 7500;
const MAX_HEIGHT = 64;
const MAX_WIDTH = 200;

function logoBox(width: number, height: number) {
  const ratio = width / height;
  let h = Math.min(MAX_HEIGHT, Math.sqrt(LOGO_AREA / ratio));
  if (h * ratio > MAX_WIDTH) h = MAX_WIDTH / ratio;
  return { width: Math.round(h * ratio), height: Math.round(h) };
}

export function Clients() {
  const hasLogos = CLIENTS.length > 0;
  return (
    <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="mb-[clamp(28px,4vw,44px)] text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
          Brands I&apos;ve worked with
        </h2>

        <ul
          aria-label="Client logos"
          className={`grid grid-cols-2 border-t border-l border-bone ${
            hasLogos ? "md:grid-cols-3" : "md:grid-cols-4"
          }`}
        >
          {hasLogos
            ? CLIENTS.map((client) => (
                <li
                  key={client.name}
                  className="group grid h-[clamp(96px,10vw,136px)] place-items-center border-r border-b border-bone p-5"
                >
                  {/*
                    Grayscale, multiplied onto the Canvas ground: a logo's white
                    background disappears and its marks go near-black, so logos
                    supplied on white work without cutting them out. The fade
                    sits on the image, not the cell: opacity on the cell would
                    isolate it and the white would show. Hover brings back the
                    logo's own colors.
                  */}
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    sizes={`${logoBox(client.width, client.height).width}px`}
                    style={logoBox(client.width, client.height)}
                    className="max-w-full object-contain opacity-60 mix-blend-multiply contrast-[1.6] grayscale transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:contrast-100 group-hover:grayscale-0"
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
