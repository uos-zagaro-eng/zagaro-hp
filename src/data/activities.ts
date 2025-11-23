import { Activity, IconName } from "../types";
import {
  Mic,
  Coffee,
  GraduationCap,
  BookOpen,
  UserRound,
  CalendarRange,
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
  Coffee,
  GraduationCap,
  BookOpen,
  UserRound,
  CalendarRange,
  Globe,
  Users,
  Tent,
} as const;

export const activities: Activity[] = [
  {
    id: "1",
    title: "LT会",
    date: "月1",
    icon: "Mic",
    description:
      "技術的な学びや経験をライトニングトーク形式で共有する会。気軽に発表＆聴講OK。",
  },
  {
    id: "2",
    title: "もくもく会",
    date: "週1",
    icon: "Coffee",
    description:
      "各自が集中して作業・学習する時間。静かに手を動かしたい人にぴったり。",
  },
  {
    id: "3",
    title: "初心者向けAI/Web講座",
    date: "通年",
    icon: "GraduationCap",
    description:
      "AI・Webの基礎を学べる講座。外部の講座や内部講習でゼロからスキルアップ。",
  },
  {
    id: "4",
    title: "資格支援",
    date: "通年",
    icon: "BookOpen",
    description:
      "IT資格取得をサポートする勉強会や情報共有会。応用情報・セキスペなども対象。",
  },
  {
    id: "5",
    title: "キャリア相談",
    date: "随時",
    icon: "UserRound",
    description:
      "インターン・就活・キャリアについて気軽に相談できる場。経験者からのアドバイスも。",
  },
  {
    id: "6",
    title: "学会・カンファレンス参加",
    date: "不定期",
    icon: "CalendarRange",
    description:
      "学会・技術カンファレンスへの参加や情報共有。興味があるテーマを深めるチャンス。",
  },
  {
    id: "7",
    title: "オンライン活動",
    date: "常時",
    icon: "Globe",
    description:
      "Discord中心のオンラインコミュニティ運営。雑談・技術質問・成果報告など幅広く交流。",
  },
  {
    id: "8",
    title: "合同イベント",
    date: "構想中",
    icon: "Users",
    description:
      "他大学や企業との合同イベントを企画予定。コラボLTやワークショップなどを構想中。",
  },
  {
    id: "9",
    title: "勉強合宿",
    date: "年1回",
    icon: "Tent",
    description:
      "集中して学習や開発に取り組む合宿イベント。仲間と共に過ごし、技術力を高める貴重な機会。",
  },
];
