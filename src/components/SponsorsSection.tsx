import { CONTENT } from "../constants/content";
import { EXTERNAL_URLS } from "../constants/urls";
import SectionHeader from "./ui/SectionHeader";

const { SPONSORS } = CONTENT;
const card = SPONSORS.PARTNER_CARD;

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader
          label={SPONSORS.LABEL}
          title={SPONSORS.TITLE}
          description={SPONSORS.DESCRIPTION}
          introClassName="max-w-3xl"
        />
        <div className="mx-auto mt-14 flex max-w-2xl justify-center lg:mt-16 lg:max-w-4xl">
          <div className="w-full rounded-4xl border border-line-faint bg-card/95 p-10 shadow-soft backdrop-blur-sm md:rounded-[2.25rem] md:p-14 lg:p-16">
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <div className="rounded-3xl bg-page/90 px-3 py-3 shadow-soft ring-1 ring-line-faint/90 sm:px-5 sm:py-4 md:px-7 md:py-5 lg:px-8 lg:py-5">
                <img
                  src="./s_logo.png"
                  alt="サポーターズ"
                  className="mx-auto h-20 w-auto max-w-[min(100%,min(92vw,560px))] object-contain sm:h-24 md:h-28 lg:h-36"
                  width={560}
                  height={112}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-full text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted md:text-base">
                  {card.ROLE}
                </p>
                <p className="font-display mt-2 text-2xl font-bold text-ink md:text-3xl lg:text-4xl">
                  {card.NAME}
                </p>
                <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-base leading-relaxed text-ink-secondary md:text-center md:text-lg">
                  {card.PARAGRAPHS.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <a
                  href={EXTERNAL_URLS.SUPPORTERS_TECH_IKU}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl py-2.5 pl-3 pr-2 text-base font-semibold text-brand outline-none transition-colors hover:text-brand-hover focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page md:mt-10 md:text-lg"
                >
                  {card.LINK_LABEL}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 md:h-6 md:w-6"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-muted md:mt-12 md:text-base">
          {SPONSORS.FOOTNOTE}
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
