export interface NavItem {
  label: string;
  href: string;
  enLabel: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  roleJp: string;
  image: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  icon: IconName;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

/**
 * アイコン名の型定義
 */
export type IconName =
  | "Mic"
  | "Coffee"
  | "GraduationCap"
  | "BookOpen"
  | "UserRound"
  | "CalendarRange"
  | "Globe"
  | "Users"
  | "Tent";