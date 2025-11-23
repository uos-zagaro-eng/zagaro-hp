/**
 * コンテンツの定数定義
 */
export const CONTENT = {
  BRAND: {
    NAME: "ZAGARO",
    SUBTITLE: "UoS - IT Circle",
    FULL_SUBTITLE: "University of Shizuoka IT Circle.",
  },
  NAV: {
    ABOUT: { label: "ABOUT", href: "#about", enLabel: "ZAGAROとは" },
    ACTIVITIES: {
      label: "ACTIVITIES",
      href: "#activities",
      enLabel: "活動内容",
    },
  },
  HERO: {
    SUBTEXT: {
      MAIN: "共に進む仲間が、ここにはいる。",
      DESCRIPTION: [
        "ZAGAROは、ITに関することなら何でもあり。",
        "AI、Web、Game、競プロ...。",
        "好きな技術で、好きなものを、好きなだけ。",
      ],
    },
    TITLE: {
      CODE: "CODE",
      CREATE: "CREATE",
      CONNECT: "CONNECT",
    },
    SCROLL_INDICATOR: "SCROLL_DOWN();",
  },
  ABOUT: {
    LABEL: "ZAGAROとは",
    TITLE: "About",
    HEADING: {
      LINE1: "「好き」を起点に広がる世界",
      LINE2: "「技術」で遊び、未来をつくる。",
    },
    DESCRIPTION: {
      INTRO:
        "ZAGAROは、レベルも目的も違う学生が気軽に混ざり合い、それぞれのペースで技術を楽しめるコミュニティです。",
      FLEXIBILITY:
        "ちょっと手を動かしてみるだけの日も、本気で作り込む日もOK。",
      VALUES:
        "ここでは、興味を共有し、気づきを交換しながら、お互いに成長していくことを大切にしています。",
    },
    BACKGROUND_TEXT: "HELLO WORLD",
  },
  ACTIVITIES: {
    LABEL: "活動内容",
    TITLE: "ACTIVITIES",
    VIEW_ARTICLES: "View Our Articles",
  },
  CTA: {
    SUBTITLE: "Are you ready?",
    TITLE: "JOIN OUR COMMUNITY",
    BUTTON_TEXT: "お問合せはXのDMへ",
  },
  FOOTER: {
    COPYRIGHT: "© ZAGARO — BORN 31 OCT 2025",
    LINKS: {
      TOP: "Top",
      ABOUT: "About",
      ACTIVITIES: "Activities",
      JOIN: "Join",
    },
  },
} as const;

