import { ArrowRight, Route, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { activities, iconComponents } from "../data/activities";
import type { Activity } from "../types";
import { EXTERNAL_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";
import SectionHeader from "./ui/SectionHeader";
import SoftCard from "./ui/SoftCard";
import ButtonLink from "./ui/ButtonLink";

interface ActivityCardProps {
  activity: Activity;
  IconComponent?: LucideIcon;
}

const ActivityCard = ({ activity, IconComponent }: ActivityCardProps) => (
  <SoftCard hoverable className="rounded-[1.5rem] md:rounded-[1.75rem]">
    <div className="mb-4 flex items-start justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        {IconComponent && (
          <div className="shrink-0 rounded-2xl border-2 border-line bg-brand-muted p-3">
            <IconComponent className="text-brand-hover" size={20} aria-hidden />
          </div>
        )}
        <h3 className="text-lg font-bold leading-snug text-ink md:text-xl">
          {activity.title}
        </h3>
      </div>
      <span className="shrink-0 rounded-full bg-chip px-3 py-1.5 text-xs font-bold text-chip-ink ring-1 ring-chip-ring/40">
        {activity.date}
      </span>
    </div>
    <p className="text-base leading-relaxed text-ink-secondary">
      {activity.description}
    </p>
  </SoftCard>
);

const scheduleMonths = [
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
] as const;

type ScheduleRow = {
  event: string;
  months: readonly string[];
};

const scheduleRows: ScheduleRow[] = [
  { event: "新歓ガイダンス", months: ["4月", "5月"] },
  { event: "基礎講習", months: ["5月", "6月", "7月", "8月", "9月"] },
  { event: "夏合宿", months: ["9月"] },
  { event: "中間発表会", months: ["10月"] },
  { event: "期末発表会", months: ["2月"] },
  { event: "勉強会", months: ["5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月"] },
  { event: "輪読会(随時)", months: ["4月","5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月"] },
  { event: "LT会", months: ["4月", "5月", "6月", "7月", "11月", "12月", "1月"] },
  { event: "技育祭", months: ["9月", "3月"] },
];

const ActivitySection = () => {
  return (
    <section id="activities" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader
          label={CONTENT.ACTIVITIES.LABEL}
          title={CONTENT.ACTIVITIES.TITLE}
          description={CONTENT.ACTIVITIES.DESCRIPTION}
          aside={
            <ButtonLink
              href={EXTERNAL_URLS.TECH_BLOG}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              {CONTENT.ACTIVITIES.VIEW_ARTICLES}
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {activities.map((activity) => {
            const IconComponent = iconComponents[activity.icon];
            return (
              <div key={activity.id}>
                <ActivityCard activity={activity} IconComponent={IconComponent} />
              </div>
            );
          })}
        </div>

        <div className="mt-6 w-full">
          <SoftCard
            hoverable
            className="flex min-h-[260px] w-full flex-col rounded-[1.5rem] md:min-h-[280px] md:rounded-[1.75rem]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="shrink-0 rounded-2xl border-2 border-line bg-brand-muted p-3">
                  <Route
                    className="text-brand-hover"
                    size={20}
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg font-bold leading-snug text-ink md:text-xl">
                  {CONTENT.NEW_MEMBER_CURRICULUM.TITLE}
                </h3>
              </div>
              <span className="shrink-0 rounded-full bg-chip px-3 py-1.5 text-xs font-bold text-chip-ink ring-1 ring-chip-ring/40">
                {CONTENT.NEW_MEMBER_CURRICULUM.BADGE}
              </span>
            </div>
            <p className="flex-1 text-base leading-relaxed text-ink-secondary">
              {CONTENT.NEW_MEMBER_CURRICULUM.DESCRIPTION}
            </p>
            <Link
              to="/curriculum"
              className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-2xl border-2 border-line-faint bg-card px-5 py-3 text-sm font-bold text-ink-secondary transition-interactive hover:border-line hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {CONTENT.NEW_MEMBER_CURRICULUM.LINK}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </SoftCard>
        </div>

        <div className="mt-12 text-center md:hidden">
          <ButtonLink
            href={EXTERNAL_URLS.TECH_BLOG}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            {CONTENT.ACTIVITIES.VIEW_ARTICLES}{" "}
            <ArrowRight size={16} className="ml-0.5" aria-hidden />
          </ButtonLink>
        </div>
      </div>

      <div className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-6 md:mt-28 md:px-8 lg:px-12">
        <SectionHeader
          label={CONTENT.SCHEDULE.LABEL}
          title={CONTENT.SCHEDULE.TITLE}
          description={CONTENT.SCHEDULE.DESCRIPTION}
          introClassName="max-w-3xl"
        />

        <SoftCard padded={false} className="overflow-hidden">
          {/* Desktop: 行=イベント / 列=月 */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse text-base">
              <thead>
                <tr className="bg-chip/50">
                  <th className="sticky left-0 z-10 border-b-2 border-line bg-card px-4 py-4 text-left text-sm font-extrabold text-ink">
                    イベント
                  </th>
                  {scheduleMonths.map((month) => (
                    <th
                      key={month}
                      className="border-b-2 border-line px-2 py-4 text-center text-xs font-bold text-ink-secondary sm:px-3 sm:text-sm"
                    >
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr
                    key={row.event}
                    className="odd:bg-card even:bg-subtle/70"
                  >
                    <th className="sticky left-0 z-10 border-r-2 border-line-faint bg-card px-4 py-3.5 text-left text-sm font-bold text-ink">
                      {row.event}
                    </th>
                    {scheduleMonths.map((month, index) => {
                      const active = row.months.includes(month);
                      const prevActive =
                        index > 0
                          ? row.months.includes(scheduleMonths[index - 1])
                          : false;
                      const nextActive =
                        index < scheduleMonths.length - 1
                          ? row.months.includes(scheduleMonths[index + 1])
                          : false;
                      const isStart = active && !prevActive;
                      const isEnd = active && !nextActive;

                      return (
                        <td
                          key={`${row.event}-${month}`}
                          className="px-0 py-3.5 text-center align-middle"
                        >
                          {active ? (
                            <div
                              className={`mx-0.5 h-4 bg-brand ${
                                isStart ? "rounded-l-full" : ""
                              } ${isEnd ? "rounded-r-full" : ""}`}
                            />
                          ) : (
                            <div className="mx-2 h-1.5 rounded-full bg-line-faint" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: 行=月 / 列=イベント（横スクロール） */}
          <div className="overflow-x-auto md:hidden">
            <table className="w-full min-w-[720px] border-collapse text-base">
              <thead>
                <tr className="bg-chip/50">
                  <th className="sticky left-0 z-10 border-b-2 border-line bg-chip/50 px-3 py-3 text-left text-xs font-extrabold text-ink">
                    月
                  </th>
                  {scheduleRows.map((row) => (
                    <th
                      key={row.event}
                      className="max-w-22 border-b-2 border-line px-1.5 py-3 text-center text-[10px] font-bold leading-tight text-ink-secondary sm:max-w-26 sm:px-2 sm:text-xs"
                    >
                      <span className="line-clamp-3">{row.event}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleMonths.map((month, monthIndex) => (
                  <tr
                    key={month}
                    className="odd:bg-card even:bg-subtle/70"
                  >
                    <th
                      className={`sticky left-0 z-10 h-7 border-r-2 border-line-faint px-3 align-middle text-left text-xs font-bold text-ink ${
                        monthIndex % 2 === 0 ? "bg-card" : "bg-subtle/70"
                      }`}
                    >
                      {month}
                    </th>
                    {scheduleRows.map((row) => {
                      const active = row.months.includes(month);
                      const prevActive =
                        monthIndex > 0
                          ? row.months.includes(
                              scheduleMonths[monthIndex - 1],
                            )
                          : false;
                      const nextActive =
                        monthIndex < scheduleMonths.length - 1
                          ? row.months.includes(
                              scheduleMonths[monthIndex + 1],
                            )
                          : false;
                      const isStart = active && !prevActive;
                      const isEnd = active && !nextActive;

                      return (
                        <td
                          key={`${month}-${row.event}`}
                          className="h-7 p-0 align-middle"
                        >
                          {active ? (
                            <div
                              className={`mx-auto h-7 w-4 shrink-0 bg-brand ${
                                isStart ? "rounded-t-full" : ""
                              } ${isEnd ? "rounded-b-full" : ""}`}
                            />
                          ) : (
                            <div className="flex h-7 items-center justify-center">
                              <span
                                className="block h-1 w-1 rounded-full bg-line-faint"
                                aria-hidden
                              />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SoftCard>
      </div>
    </section>
  );
};

export default ActivitySection;
