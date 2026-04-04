import { Activity, IconName } from "../types";
import {
  Mic,
  GraduationCap,
  BookOpen,
  Globe,
  Users,
  Tent,
  LucideIcon,
} from "lucide-react";

/**
 * アイコン名とLucideアイコンコンポーネントのマッピング
 */
export const iconComponents: Record<IconName, LucideIcon> = {
  Mic,
  GraduationCap,
  BookOpen,
  Globe,
  Users,
  Tent,
} as const;

export const activities: Activity[] = [
  {
    id: "1",
    title: "LT会(発表会)",
    date: "月1",
    icon: "Mic",
    description:
      "技術的な学びや経験をライトニングトーク形式で共有する会。気軽に発表＆聴講OK。",
  },
  {
    id: "2",
    title: "勉強会",
    date: "月2~3",
    icon: "GraduationCap",
    description:
      "特定のテーマに沿って、メンバー同士で知識やスキルを深める会。初心者向けから上級者向けまで幅広く開催。",
  },
  {
    id: "3",
    title: "輪読会",
    date: "随時",
    icon: "BookOpen",
    description:
      "技術書をみんなで読み進める会。内容を理解しながら、質問や意見を交換していきます。",
  },
  {
    id: "4",
    title: "夏合宿",
    date: "9月上旬",
    icon: "Tent",
    description:
      "BBQなどのイベントを通じてメンバー同士の交流を深める合宿。技術的なワークショップも開催予定！",
  },
  {
    id: "5",
    title: "中間/期末発表会",
    date: "10月上旬/2月下旬",
    icon: "Users",
    description:
      "半年に一度、メンバーが取り組んでいるプロジェクトや学びを発表する会。ケータリングも用意。",
  },
  {
    id: "6",
    title: "技育祭",
    date: "9月/3月",
    icon: "Globe",
    description:
      "技術イベント「技育祭」に参加。展示やLTで、他大学の学生と交流しながら技術を学ぶ。",
  },
];
