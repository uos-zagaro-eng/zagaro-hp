import { memo } from "react";
import { useScroll } from "../hooks/useScroll";
import { IMAGE_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";
import { ANIMATION_DELAYS, SCALE_FACTOR } from "../constants/animations";

interface HeroBackgroundProps {
  scrollOffset: number;
}

const HeroBackground = memo(({ scrollOffset }: HeroBackgroundProps) => (
  <div
    className="absolute inset-0 w-full h-full"
    style={{ transform: `scale(${1 + scrollOffset * SCALE_FACTOR})` }}
  >
    <div className="absolute inset-0 bg-black/60 z-10" />
    <img
      src={IMAGE_URLS.HERO_BACKGROUND}
      alt="Cyber Security Technology"
      className="w-full h-full object-cover opacity-60"
    />
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{ backgroundImage: `url('${IMAGE_URLS.GRAIN_PATTERN}')` }}
    />
    <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(rgba(0,255,100,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.1)_1px,transparent_1px)] bg-size-[40px_40px]" />
  </div>
));
HeroBackground.displayName = "HeroBackground";

const HeroSubtext = memo(() => (
  <div
    className="hidden md:block max-w-sm animate-fade-in-up -mt-8"
    style={{ animationDelay: ANIMATION_DELAYS.SUBTEXT }}
  >
    <p className="text-white text-lg font-bold tracking-widest leading-relaxed border-l-4 border-emerald-500 pl-6 mb-2">
      {CONTENT.HERO.SUBTEXT.MAIN}
    </p>
    <p className="text-stone-300 text-base font-light tracking-wide leading-relaxed pl-6">
      {CONTENT.HERO.SUBTEXT.DESCRIPTION.map((line, index) => (
        <span key={index}>
          {line}
          {index < CONTENT.HERO.SUBTEXT.DESCRIPTION.length - 1 && <br />}
        </span>
      ))}
    </p>
  </div>
));
HeroSubtext.displayName = "HeroSubtext";

interface TitleWordProps {
  text: string;
  delay: string;
  variant?: "solid" | "outline" | "emerald";
}

const TitleWord = memo(({ text, delay, variant = "solid" }: TitleWordProps) => {
  const variantStyles = {
    solid: "",
    outline: "text-transparent",
    emerald: "text-emerald-500 shadow-emerald-500/50 drop-shadow-2xl",
  };

  const inlineStyles =
    variant === "outline"
      ? { WebkitTextStroke: "2px white", animationDelay: delay }
      : { animationDelay: delay };

  return (
    <div className="overflow-visible pb-1">
      <h1
        className={`text-[18vw] md:text-[8rem] animate-fade-in-up ${variantStyles[variant]}`}
        style={inlineStyles}
      >
        {text}
      </h1>
    </div>
  );
});
TitleWord.displayName = "TitleWord";

const HeroTitle = memo(() => (
  <div className="flex flex-col text-white font-syncopate font-bold leading-[0.85] tracking-tighter md:text-right md:-mt-12 shrink-0 md:ml-auto md:mr-4 w-full md:w-auto gap-4 md:gap-0">
    <TitleWord
      text={CONTENT.HERO.TITLE.CODE}
      delay={ANIMATION_DELAYS.TITLE_1}
    />
    <TitleWord
      text={CONTENT.HERO.TITLE.CREATE}
      delay={ANIMATION_DELAYS.TITLE_2}
      variant="outline"
    />
    <TitleWord
      text={CONTENT.HERO.TITLE.CONNECT}
      delay={ANIMATION_DELAYS.TITLE_3}
      variant="emerald"
    />
  </div>
));
HeroTitle.displayName = "HeroTitle";

const ScrollIndicator = memo(() => (
  <div className="hidden md:flex absolute bottom-10 left-10 z-20 flex-col items-start">
    <div className="text-white text-left mb-4">
      <p className="text-[10px] font-syncopate tracking-[0.3em] opacity-50">
        {CONTENT.HERO.SCROLL_INDICATOR}
      </p>
    </div>
    <div className="w-px h-24 bg-linear-to-b from-emerald-500 to-transparent" />
  </div>
));
ScrollIndicator.displayName = "ScrollIndicator";

const Hero = () => {
  const { scrollY } = useScroll(0);

  return (
    <div
      id="top"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      <HeroBackground scrollOffset={scrollY} />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-start justify-center h-full pt-20">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 w-full">
          <HeroSubtext />
          <HeroTitle />
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default Hero;
