import { CONTACT } from "@/data/site";

interface ContactCtaProps {
  heading?: string;
  /** Lead-in before the reply-time promise. */
  text?: string;
}

export function ContactCta({
  heading = "Start a project",
  text = "Tell me what you're making, where, and roughly when.",
}: ContactCtaProps) {
  return (
    <section id="contact" className="bg-varnish px-gutter py-[clamp(64px,9vw,128px)] text-canvas">
      <div className="mx-auto grid max-w-[1320px] items-end gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
        <div>
          <h2 className="font-display mb-5.5 text-[clamp(40px,6vw,84px)] leading-none">
            {heading}
          </h2>
          <p className="max-w-[44ch] text-bone">
            {text} {CONTACT.replyTime}
          </p>
          {/* Opens an email until the /contact page and its form are built. */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="label group mt-8 inline-flex gap-3 bg-petroglyph px-6.5 py-4 text-white"
          >
            Send an inquiry
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-7 gap-y-3.5 border-t border-bone/25 pt-6">
          <dt className="text-[15px] text-bone/70">Email</dt>
          <dd className="text-[17px] break-words">
            <a href={`mailto:${CONTACT.email}`} className="hover:underline">
              {CONTACT.email}
            </a>
          </dd>
          <dt className="text-[15px] text-bone/70">Instagram</dt>
          <dd className="text-[17px]">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{CONTACT.instagram}
            </a>
          </dd>
          <dt className="text-[15px] text-bone/70">Based</dt>
          <dd className="text-[17px]">
            {CONTACT.base} · {CONTACT.timezone}
          </dd>
        </dl>
      </div>
    </section>
  );
}
