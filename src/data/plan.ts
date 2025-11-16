export interface PlanItem {
  id: number;
  title: string;
  frequency: string;
  description: string;
}

export const plan: PlanItem[] = [
  {
    id: 1,
    title: 'LT会',
    frequency: '月1',
    description: '技術的な学びや経験を共有するライトニングトーク会',
  },
  {
    id: 2,
    title: 'もくもく会',
    frequency: '週1',
    description: '各自が集中して作業・学習する時間を共有',
  },
  {
    id: 3,
    title: '初心者向けAI/Web講座',
    frequency: '通年',
    description: '内外の講座で基礎から学べる',
  },
  {
    id: 4,
    title: '資格支援',
    frequency: '通年',
    description: 'IT資格取得をサポートする勉強会・情報共有',
  },
  {
    id: 5,
    title: 'キャリア相談',
    frequency: '随時',
    description: 'エンジニアとしてのキャリアについて相談できる場',
  },
  {
    id: 6,
    title: '学会・カンファレンス参加',
    frequency: '不定期',
    description: '技術カンファレンスへの参加・情報共有',
  },
  {
    id: 7,
    title: 'オンライン活動',
    frequency: '常時',
    description: 'Discord等でのオンラインコミュニティ運営',
  },
  {
    id: 8,
    title: '合同イベント',
    frequency: '構想中',
    description: '他大学・企業との合同イベント企画',
  },
];
