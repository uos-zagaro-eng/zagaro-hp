import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { CONTENT } from "../constants/content";
import SectionHeader from "../components/ui/SectionHeader";
import SoftCard from "../components/ui/SoftCard";

const CurriculumPage = () => {
  return (
    <main className="grow pt-28 pb-24 md:pt-32 md:pb-32">
      <Seo
        title={CONTENT.CURRICULUM_PAGE.TITLE}
        description={CONTENT.CURRICULUM_PAGE.DESCRIPTION}
        path="curriculum"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-2xl border-2 border-line-faint bg-card px-5 py-3 text-sm font-bold text-ink-secondary transition-interactive hover:border-line hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ArrowLeft size={16} aria-hidden />
          {CONTENT.CURRICULUM_PAGE.BACK}
        </Link>

        <SectionHeader
          label={CONTENT.NEW_MEMBER_CURRICULUM.LABEL}
          title={CONTENT.CURRICULUM_PAGE.TITLE}
          description={CONTENT.CURRICULUM_PAGE.DESCRIPTION}
          introClassName="max-w-3xl"
        />

        <SoftCard className="rounded-[1.5rem] md:rounded-[1.75rem]">
          <p className="text-base leading-relaxed text-ink-secondary">
            詳細なステップや資料は、このページに追記予定です。
          </p>
        </SoftCard>
      </div>
    </main>
  );
};

export default CurriculumPage;
