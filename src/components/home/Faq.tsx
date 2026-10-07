import { FAQ } from "@/data/home";

/**
 * Plain <details> elements: open and close without JavaScript, and the
 * answers stay in the page's HTML where search engines read them.
 */
export function Faq() {
  return (
    <section id="faq" className="px-gutter pb-[clamp(64px,9vw,128px)]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[clamp(28px,4vw,44px)] grid items-end gap-[clamp(20px,6vw,96px)] md:grid-cols-[5fr_7fr]">
          <div>
            <p className="label text-clay">Questions</p>
            <h2 className="mt-3.5 text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em] text-balance">
              Working with a photographer in Peru
            </h2>
          </div>
          <p className="max-w-[56ch] text-[15px]">
            What brands and athletes usually ask before a shoot in the Andes.
          </p>
        </div>
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
              <p className="mb-6 max-w-[66ch]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
