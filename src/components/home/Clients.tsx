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

/** A mark set above a typed name gets half the area, so the pair fits the cell. */
function logoBox(width: number, height: number, withName = false) {
  const ratio = width / height;
  const area = withName ? LOGO_AREA / 2 : LOGO_AREA;
  let h = Math.min(MAX_HEIGHT, Math.sqrt(area / ratio));
  if (h * ratio > MAX_WIDTH) h = MAX_WIDTH / ratio;
  return { width: Math.round(h * ratio), height: Math.round(h) };
}

export function Clients() {
  const hasLogos = CLIENTS.length > 0;
  return (
    <section className="px-gutter pt-[clamp(64px,9vw,128px)]">
      {/* bg-canvas: the reveal animation isolates this block, so the logos multiply against this fill instead of the page. */}
      <div className="reveal-up mx-auto max-w-[1320px] bg-canvas">
        <h2 className="mb-[clamp(28px,4vw,44px)] text-center heading-section md:text-left">
          Brands I&apos;ve worked with
        </h2>

        <ul
          aria-label="Client logos"
          className={`grid grid-cols-2 border-t border-l border-bone ${
            // Three or four across, whichever fills the last row.
            hasLogos && CLIENTS.length % 4 !== 0 ? "md:grid-cols-3" : "md:grid-cols-4"
          }`}
        >
          {hasLogos
            ? CLIENTS.map((client) => (
                <li
                  key={client.name}
                  className="group grid min-h-[clamp(96px,10vw,136px)] place-items-center border-r border-b border-bone p-5"
                >
                  {/*
                    Grayscale, multiplied onto the Canvas ground: a logo's white
                    background disappears and its marks go near-black, so logos
                    supplied on white work without cutting them out. The fade
                    sits on the image, not the cell: opacity on the cell would
                    isolate it and the white would show. Hover brings back the
                    logo's own colors.
                  */}
                  <span className="grid justify-items-center gap-1.5">
                    <Image
                      src={client.logo}
                      alt={client.wordmark ? "" : client.name}
                      width={client.width}
                      height={client.height}
                      sizes={`${logoBox(client.width, client.height, client.wordmark).width}px`}
                      style={logoBox(client.width, client.height, client.wordmark)}
                      className={`max-w-full object-contain opacity-60 mix-blend-multiply transition-[opacity,filter] duration-300 group-hover:opacity-100 ${
                        client.solid
                          ? "brightness-0 group-hover:brightness-100"
                          : "contrast-[1.6] grayscale group-hover:contrast-100 group-hover:grayscale-0"
                      }`}
                    />
                    {client.wordmark && (
                      <span className="label text-[10.5px] tracking-[0.24em] whitespace-nowrap opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                        {client.name}
                      </span>
                    )}
                  </span>
                </li>
              ))
            : Array.from({ length: CLIENT_PLACEHOLDER_COUNT }, (_, i) => (
                <li
                  key={i}
                  className="grid min-h-[clamp(96px,10vw,136px)] place-items-center border-r border-b border-bone p-5"
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
