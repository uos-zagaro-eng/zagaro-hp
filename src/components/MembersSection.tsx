import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { members } from "../data/members";
import { CONTENT } from "../constants/content";
import SectionHeader from "./ui/SectionHeader";
import SoftCard from "./ui/SoftCard";

const MembersSection = () => {
  return (
    <section id="members" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader
          label={CONTENT.MEMBERS.LABEL}
          title={CONTENT.MEMBERS.TITLE}
          description={CONTENT.MEMBERS.DESCRIPTION}
          introClassName="max-w-3xl"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-stretch">
          <SoftCard
            as="figure"
            padded={false}
            className="overflow-hidden lg:col-span-2 lg:flex lg:h-full lg:min-h-0 lg:flex-col"
          >
            <div className="lg:min-h-0 lg:flex-1 lg:overflow-hidden">
              <img
                src="./member_pic.JPG"
                alt="ZAGARO運営メンバーの集合写真"
                className="h-auto w-full object-cover lg:h-full lg:min-h-0"
              />
            </div>
            <figcaption className="border-t-2 border-line-faint bg-subtle px-5 py-4 text-base font-medium leading-relaxed text-ink-secondary lg:shrink-0">
              活動の運営を担当するメンバーです。企画・広報・運営をチームで進めています。
            </figcaption>
          </SoftCard>

          <div className="grid min-h-0 grid-cols-1 gap-6 lg:col-span-3">
            {members.map((member) => (
              <div key={member.id}>
                <SoftCard hoverable className="rounded-[1.5rem] md:rounded-[2rem]">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-extrabold text-brand-hover">
                        運営メンバー
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="text-xl font-bold text-ink md:text-2xl">
                          {member.name}
                        </h3>
                        {(member.socialLinks?.x ||
                          member.socialLinks?.instagram) && (
                          <div className="flex items-center gap-2">
                            {member.socialLinks?.x && (
                              <a
                                href={member.socialLinks.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-line bg-card text-ink-secondary transition-interactive hover:scale-105 hover:border-brand hover:bg-brand-soft hover:text-brand-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                aria-label={`${member.name} X`}
                              >
                                <FaXTwitter size={16} />
                              </a>
                            )}
                            {member.socialLinks?.instagram && (
                              <a
                                href={member.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-line bg-card text-ink-secondary transition-interactive hover:scale-105 hover:border-brand hover:bg-brand-soft hover:text-brand-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                aria-label={`${member.name} Instagram`}
                              >
                                <FaInstagram size={16} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-base font-medium text-ink-muted">
                        {member.grade}
                      </p>
                    </div>
                    <span className="rounded-full border border-chip-ring/50 bg-chip px-3 py-1.5 text-xs font-extrabold text-chip-ink">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-ink-secondary">
                    {member.description}
                  </p>
                </SoftCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
