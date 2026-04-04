import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faq";
import { CONTENT } from "../constants/content";
import SectionHeader from "./ui/SectionHeader";

const FaqSection = () => {
  return (
    <section id="faq" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader
          label={CONTENT.FAQ.LABEL}
          title={CONTENT.FAQ.TITLE}
          description={CONTENT.FAQ.DESCRIPTION}
          introClassName="max-w-3xl"
        />

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group rounded-[1.5rem] border-2 border-line bg-card p-5 shadow-soft transition-interactive open:border-brand open:bg-brand-muted/50 open:shadow-soft-hover md:rounded-[2rem] md:p-6"
            >
              <summary className="relative cursor-pointer list-none pr-14 text-lg font-bold leading-snug text-ink md:text-xl [&::-webkit-details-marker]:hidden">
                <span className="block pr-2">Q. {item.question}</span>
                <span className="absolute right-0 top-0 flex size-11 items-center justify-center rounded-2xl border-2 border-line bg-chip text-brand-hover transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="size-6 shrink-0" aria-hidden />
                </span>
              </summary>
              <p className="mt-5 border-t-2 border-dashed border-line-faint pt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
                <span className="font-bold text-brand-hover">A. </span>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
