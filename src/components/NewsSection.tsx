import { ArrowUpRight } from "lucide-react";
import { newsItems } from "../data/news";
import { CONTENT } from "../constants/content";
import { EXTERNAL_URLS } from "../constants/urls";
import SectionHeader from "./ui/SectionHeader";
import SoftCard from "./ui/SoftCard";
import ButtonLink from "./ui/ButtonLink";

const NewsSection = () => {
  return (
    <section id="news" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader
          label={CONTENT.NEWS.LABEL}
          title={CONTENT.NEWS.TITLE}
        />

        <div className="space-y-5">
          {newsItems.map((item) => {
            const badge = (
              <span className="mb-3 inline-flex rounded-full border-2 border-brand/35 bg-brand-soft px-3 py-1 text-xs font-extrabold text-brand-active">
                NEW
              </span>
            );
            const cardContent = (
              <>
                {badge}
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm font-bold text-brand-hover md:text-base">
                    {item.date}
                  </p>
                  <p className="text-sm font-medium text-ink-muted md:text-base">
                    {item.location}
                  </p>
                </div>
                <p className="mt-3 text-lg font-bold leading-relaxed text-ink md:text-xl">
                  {item.title}
                </p>
              </>
            );

            if (!item.link) {
              return (
                <div key={item.id}>
                  <SoftCard className="rounded-[1.5rem] md:rounded-[2rem]">
                    {cardContent}
                  </SoftCard>
                </div>
              );
            }

            return (
              <div key={item.id}>
                <SoftCard
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  hoverable
                  className="rounded-[1.5rem] hover:bg-brand-muted/50 md:rounded-[2rem]"
                >
                  {cardContent}
                </SoftCard>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center md:hidden">
          <ButtonLink
            href={EXTERNAL_URLS.NEWS_ARCHIVE}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            {CONTENT.NEWS.VIEW_ALL}
            <ArrowUpRight size={16} className="ml-0.5" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
