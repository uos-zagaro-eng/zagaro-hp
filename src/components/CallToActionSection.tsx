import { memo } from "react";
import { EXTERNAL_URLS, IMAGE_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";

const CallToActionSection = memo(() => {
  return (
    <section
      id="join"
      className="py-20 md:py-32 lg:py-40 bg-cover bg-center text-stone-900 text-center relative overflow-hidden"
      style={{ backgroundImage: `url('${IMAGE_URLS.CTA_BACKGROUND}')` }}
    >
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply backdrop-blur-[1px]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url('${IMAGE_URLS.CUBES_PATTERN}')` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <p className="font-syncopate font-bold text-sm tracking-[0.5em] mb-6 uppercase text-emerald-200">
          {CONTENT.CTA.SUBTITLE}
        </p>
        <h2 className="font-bodoni text-5xl md:text-8xl mb-12 text-white">
          {CONTENT.CTA.TITLE}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href={EXTERNAL_URLS.TWITTER_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-5 text-sm font-bold tracking-[0.2em] bg-stone-900 text-white font-syncopate relative overflow-hidden group/btn transition-all duration-300"
          >
            <span className="absolute inset-0 bg-emerald-700 transition-transform duration-500 origin-right scale-x-0 group-hover/btn:scale-x-100 group-hover/btn:origin-left" />
            <span className="relative z-10">{CONTENT.CTA.BUTTON_TEXT}</span>
          </a>
        </div>
      </div>
    </section>
  );
});
CallToActionSection.displayName = "CallToActionSection";

export default CallToActionSection;
