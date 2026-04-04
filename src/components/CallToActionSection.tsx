import { memo } from "react";
import { EXTERNAL_URLS, IMAGE_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";
import ButtonLink from "./ui/ButtonLink";

const CallToActionSection = memo(() => {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-cover bg-center py-28 text-center md:py-36"
      style={{ backgroundImage: `url('${IMAGE_URLS.CTA_BACKGROUND}')` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-neutral-900/70 via-neutral-800/65 to-neutral-900/75" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{ backgroundImage: `url('${IMAGE_URLS.CUBES_PATTERN}')` }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:max-w-5xl lg:px-12">
        <p className="mb-5 inline-flex rounded-full border-2 border-brand-soft/80 bg-neutral-900/50 px-5 py-2 font-display text-sm font-extrabold text-brand-soft backdrop-blur-sm">
          {CONTENT.CTA.SUBTITLE}
        </p>
        <h2 className="mb-8 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(2.25rem,2.7vw,3.25rem)] md:leading-[1.08]">
          {CONTENT.CTA.TITLE}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-neutral-100 md:text-xl">
          {CONTENT.CTA.DESCRIPTION}
        </p>
        <ButtonLink
          href={EXTERNAL_URLS.TWITTER_DM}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full shadow-sticker ring-offset-4 ring-offset-[#1a1816] md:w-auto"
        >
          {CONTENT.CTA.BUTTON_TEXT}
        </ButtonLink>
      </div>
    </section>
  );
});
CallToActionSection.displayName = "CallToActionSection";

export default CallToActionSection;
