export interface NavItem {
  label: string;
  href: string;
  enLabel: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  grade: string;
  image?: string;
  description: string;
  socialLinks?: {
    x?: string;
    instagram?: string;
  };
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  icon: IconName;
  description: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  location: string;
  link?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * アイコン名の型定義
 */
export type IconName =
  | "Mic"
  | "GraduationCap"
  | "BookOpen"
  | "Globe"
  | "Users"
  | "Tent";