import { CONTENT } from "../constants/content";
import SoftCard from "./ui/SoftCard";

const AboutSection = () => {
  return (
    <section id="about" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:items-start md:gap-14 md:px-8 lg:px-12">
        <div className="md:col-span-5 lg:col-span-4">
          <section>
            <p className="inline-flex rounded-full bg-chip px-4 py-1.5 font-display text-sm font-extrabold text-chip-ink ring-2 ring-chip-ring/50">
              {CONTENT.ABOUT.LABEL}
            </p>
            <h2 className="font-display mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-5xl md:leading-tight">
              {CONTENT.ABOUT.TITLE}
            </h2>
            <section className="mt-6 max-w-md border-t border-line-faint/90 pt-6">
              <dl className="space-y-5">
                <div>
                  <dt className="font-display text-sm font-semibold text-ink-muted">
                    {CONTENT.ABOUT.KEY_INFO.SCHEDULE_LABEL}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-bold leading-snug text-ink md:text-xl">
                    {CONTENT.ABOUT.KEY_INFO.SCHEDULE}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-sm font-semibold text-ink-muted">
                    {CONTENT.ABOUT.KEY_INFO.LOCATION_LABEL}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-bold leading-snug text-ink md:text-xl">
                    {CONTENT.ABOUT.KEY_INFO.LOCATION}
                  </dd>
                </div>
              </dl>
            </section>
          </section>
        </div>

        <SoftCard
          className="border-brand/25 md:col-span-7 lg:col-span-8 md:rounded-[2rem]"
          padded
        >
          <h3 className="text-2xl font-bold leading-snug text-ink md:text-3xl md:leading-tight">
            {CONTENT.ABOUT.HEADING.LINE1}
            <br />
            {CONTENT.ABOUT.HEADING.LINE2}
          </h3>
          <div className="mt-8 space-y-6 text-lg leading-loose text-ink-secondary">
            <p>
              {CONTENT.ABOUT.DESCRIPTION.INTRO}
              <span className="mt-2 block font-medium text-ink">
                {CONTENT.ABOUT.DESCRIPTION.FLEXIBILITY}
              </span>
            </p>
            <p className="font-medium">{CONTENT.ABOUT.DESCRIPTION.VALUES}</p>
          </div>
        </SoftCard>
      </div>
    </section>
  );
};

export default AboutSection;
