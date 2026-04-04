import { ArrowDownRight } from "lucide-react";
import { CONTENT } from "../constants/content";
import { useScroll } from "../hooks/useScroll";
import { SCALE_FACTOR } from "../constants/animations";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { sectionHref } from "../utils/sectionHref";
import ButtonLink from "./ui/ButtonLink";

const Hero = () => {
  const { scrollY } = useScroll(0);
  const reducedMotion = usePrefersReducedMotion();
  const scale = reducedMotion ? 1 : 1 + scrollY * SCALE_FACTOR;

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-pattern-dots"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={
          reducedMotion
            ? undefined
            : { transform: `scale(${scale})`, transformOrigin: "50% 35%" }
        }
      >
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-brand-soft/55 blur-3xl" />
        <div className="absolute -right-10 bottom-24 h-96 w-96 rounded-full bg-pop-ring/35 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-muted blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-14 px-5 pt-28 pb-20 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
        <div className="relative w-full max-w-xl shrink-0 lg:max-w-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[6%] z-0 w-[min(132%,26rem)] origin-center -translate-x-1/2 rotate-3 sm:top-[8%] sm:w-[min(130%,30rem)] lg:hidden"
          >
            <img
              src="./b_logo_transparent.png"
              alt=""
              className="block h-auto w-full object-contain object-center opacity-[0.28]"
            />
          </div>
          <div className="relative z-10 max-w-xl">
            <p className="font-display inline-flex -rotate-2 rounded-2xl border-2 border-chip-ring bg-chip px-5 py-2 text-sm font-extrabold text-chip-ink shadow-sticker">
              {CONTENT.HERO.LABEL}
            </p>
            <h1 className="font-display mt-8 whitespace-pre-line text-[2.1rem] font-extrabold leading-[1.2] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {CONTENT.HERO.TITLE}
            </h1>
            <p className="mt-6 text-xl font-bold leading-snug text-brand-hover md:text-2xl">
              {CONTENT.HERO.SUBTEXT.MAIN}
            </p>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-secondary md:text-xl">
              {CONTENT.HERO.SUBTEXT.DESCRIPTION.join(" ")}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={sectionHref("#activities")}
                variant="primary"
                className="gap-1.5"
              >
                {CONTENT.HERO.CTA_PRIMARY}
                <ArrowDownRight size={18} aria-hidden />
              </ButtonLink>
              <ButtonLink href={sectionHref("#join")} variant="secondary">
                {CONTENT.HERO.CTA_SECONDARY}
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex lg:justify-end">
          <div className="w-full max-w-md origin-center rotate-3 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-brand-soft/80 bg-linear-to-br from-white via-white to-neutral-50 p-0 shadow-soft">
              <img
                src="./b_logo_transparent.png"
                alt="ZAGARO logo art"
                className="block h-auto w-full object-contain object-center drop-shadow-[0_20px_50px_rgb(13_148_136/0.22)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
