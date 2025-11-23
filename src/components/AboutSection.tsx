import { memo } from "react";
import { CONTENT } from "../constants/content";

const BackgroundDecoration = memo(() => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.05]">
    <div className="whitespace-nowrap font-syncopate font-bold text-[15vw] leading-none text-stone-900 -rotate-20 transform origin-center translate-y-[50vh] scale-150">
      {CONTENT.ABOUT.BACKGROUND_TEXT}
    </div>
  </div>
));
BackgroundDecoration.displayName = "BackgroundDecoration";

const SectionHeader = memo(() => (
  <div className="md:w-1/3 sticky top-32 mb-28 md:mb-0">
    <span className="text-emerald-600 font-bold tracking-[0.2em] text-xs mb-4 block font-syncopate">
      {CONTENT.ABOUT.LABEL}
    </span>
    <h2 className="text-4xl md:text-6xl font-bodoni font-bold text-stone-900 leading-tight">
      {CONTENT.ABOUT.TITLE}
    </h2>
    <div className="w-20 h-1 bg-emerald-600 mt-8"></div>
  </div>
));
SectionHeader.displayName = "SectionHeader";

const SectionContent = memo(() => (
  <div className="md:w-2/3 space-y-12">
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold font-serif-jp leading-relaxed text-stone-900">
        {CONTENT.ABOUT.HEADING.LINE1}
        <br />
        {CONTENT.ABOUT.HEADING.LINE2}
      </h3>

      <div className="text-stone-600 text-lg leading-loose font-medium space-y-4">
        <p>
          {CONTENT.ABOUT.DESCRIPTION.INTRO}
          <br className="md:hidden" />
          <span className="md:inline block">
            {CONTENT.ABOUT.DESCRIPTION.FLEXIBILITY}
          </span>
        </p>

        <p>{CONTENT.ABOUT.DESCRIPTION.VALUES}</p>
      </div>
    </div>
  </div>
));
SectionContent.displayName = "SectionContent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="-mt-16 pt-0 pb-12 md:mt-0 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 bg-stone-50 relative overflow-hidden"
    >
      <BackgroundDecoration />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
          <SectionHeader />
          <SectionContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
