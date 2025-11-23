import { memo } from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { activities, iconComponents } from "../data/activities";
import type { Activity } from "../types";
import { EXTERNAL_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";

interface ActivityCardProps {
  activity: Activity;
  IconComponent?: LucideIcon;
}

const ActivityCard = memo(({ activity, IconComponent }: ActivityCardProps) => (
  <div className="bg-white p-4 shadow-sm border-l-4 border-stone-200 hover:border-emerald-500 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        {IconComponent && (
          <IconComponent className="text-stone-700 shrink-0" size={22} />
        )}
        <h3 className="font-syncopate font-bold text-base text-stone-900">
          {activity.title}
        </h3>
      </div>
      <span className="text-[10px] text-emerald-600 font-syncopate font-bold tracking-[0.15em] shrink-0">
        {activity.date}
      </span>
    </div>
    <p className="text-stone-500 text-sm leading-relaxed">
      {activity.description}
    </p>
  </div>
));
ActivityCard.displayName = "ActivityCard";

const SectionHeader = memo(() => (
  <div className="flex justify-between items-center mb-16">
    <div>
      <span className="text-stone-500 font-bold tracking-[0.2em] text-xs block mb-2 font-syncopate">
        {CONTENT.ACTIVITIES.LABEL}
      </span>
      <h2 className="text-4xl md:text-6xl font-syncopate font-bold text-stone-900 uppercase">
        {CONTENT.ACTIVITIES.TITLE}
      </h2>
    </div>
    <div className="hidden md:block w-1/3 h-px bg-stone-300"></div>
    <a
      href={EXTERNAL_URLS.TECH_BLOG}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] hover:text-emerald-600 transition-colors"
    >
      {CONTENT.ACTIVITIES.VIEW_ARTICLES}
      <ArrowRight size={14} />
    </a>
  </div>
));
SectionHeader.displayName = "SectionHeader";

const ViewArticlesLink = memo(() => (
  <div className="mt-8 text-center md:hidden">
    <a
      href={EXTERNAL_URLS.TECH_BLOG}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] border-b border-stone-900 pb-1"
    >
      {CONTENT.ACTIVITIES.VIEW_ARTICLES} <ArrowRight size={14} />
    </a>
  </div>
));
ViewArticlesLink.displayName = "ViewArticlesLink";

const ActivitySection = () => {
  return (
    <section id="activities" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-stone-200">
          {activities.map((activity) => {
            const IconComponent = iconComponents[activity.icon];
            return (
              <ActivityCard
                key={activity.id}
                activity={activity}
                IconComponent={IconComponent}
              />
            );
          })}
        </div>

        <ViewArticlesLink />
      </div>
    </section>
  );
};

export default ActivitySection;
