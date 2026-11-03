import Link from "next/link";
import { FAQ, type FaqItem } from "@/data/home";

/**
 * Plain <details> elements: open and close without JavaScript, and the
 * answers stay in the page's HTML where search engines read them.
 */
export function Faq() {
  return (
    <section id="faq" className="px-gutter pb-[clamp(64px,9vw,128px)]">
      <div className="reveal-up mx-auto max-w-[1320px]">
        <h2 className="mb-[clamp(16px,2vw,24px)] heading-section text-balance">
          Working with Matt in Peru
        </h2>
        <div className="border-t border-varnish">
          {FAQ.map((item, i) => (
            <details key={item.question} open={i === 0} className="group border-b border-bone">
              <summary className="flex cursor-pointer list-none justify-between gap-6 py-5.5 text-[clamp(17px,1.6vw,20px)] leading-snug font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none font-normal text-petroglyph transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mb-6 max-w-[66ch]">
                <Answer item={item} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The answer text, with its link words (if any) turned into a link. */
function Answer({ item }: { item: FaqItem }) {
  const at = item.link ? item.answer.indexOf(item.link.text) : -1;
  if (!item.link || at < 0) return item.answer;
  return (
    <>
      {item.answer.slice(0, at)}
      <Link href={item.link.href} className="underline underline-offset-3 hover:text-petroglyph">
        {item.link.text}
      </Link>
      {item.answer.slice(at + item.link.text.length)}
    </>
  );
}
