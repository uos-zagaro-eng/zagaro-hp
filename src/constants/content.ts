/**
 * コンテンツの定数定義
 */
export const CONTENT = {
  BRAND: {
    NAME: "ZAGARO",
    SUBTITLE: "UoS - Engineering Circle",
    FULL_SUBTITLE: "University of Shizuoka IT Circle.",
  },
  NAV: {
    ABOUT: { label: "About", href: "#about", enLabel: "ZAGAROとは" },
    GALLERY: {
      label: "Gallery",
      href: "#gallery",
      enLabel: "フォトギャラリー",
    },
    ACTIVITIES: {
      label: "Activities",
      href: "#activities",
      enLabel: "活動内容",
    },
    NEWS: {
      label: "News",
      href: "#news",
      enLabel: "お知らせ",
    },
    MEMBERS: {
      label: "Members",
      href: "#members",
      enLabel: "メンバー",
    },
    SPONSORS: {
      label: "Sponsors",
      href: "#sponsors",
      enLabel: "サポーター",
    },
    FAQ: {
      label: "FAQ",
      href: "#faq",
      enLabel: "よくある質問",
    },
  },
  HERO: {
    LABEL: "静岡県立大学 ITサークル",
    SUBTEXT: {
      MAIN: "好きな技術を、気軽に、楽しく。",
      DESCRIPTION: [
        "ZAGAROは、AI・Web・ゲーム開発・競プロまで",
        "興味のある分野を仲間と学べるコミュニティです。",
        "未経験でも経験者でも、自分のペースでOK。",
      ],
    },
    TITLE: "みんなで学べば、\nより楽しい",
    CTA_PRIMARY: "活動を見る",
    CTA_SECONDARY: "参加してみる",
  },
  ABOUT: {
    LABEL: "ZAGAROとは",
    TITLE: "コミュニティ紹介",
    HEADING: {
      LINE1: "「好き」から始めて、",
      LINE2: "仲間と一緒に成長する。",
    },
    DESCRIPTION: {
      INTRO:
        "ZAGAROは、レベルも目的も違う学生が気軽に混ざり合い、それぞれのペースで技術を楽しめるコミュニティです。",
      FLEXIBILITY:
        "ちょっと手を動かしてみるだけの日も、本気で作り込む日もOK。",
      VALUES:
        "ここでは、興味を共有し、気づきを交換しながら、お互いに成長していくことを大切にしています。",
    },
    KEY_INFO: {
      SCHEDULE_LABEL: "活動日",
      SCHEDULE: "毎週水曜日 18:00～20:00",
      LOCATION_LABEL: "場所",
      LOCATION: "静岡県立大学一般棟",
    },
  },
  GALLERY: {
    LABEL: "フォトギャラリー",
    TITLE: "活動の雰囲気",
    DESCRIPTION:
      "活動の空気感が伝わる写真をピックアップ。勉強会からイベントまで、みんなで楽しみながら技術に触れています。",
  },
  ACTIVITIES: {
    LABEL: "活動内容",
    TITLE: "こんな活動をしています",
    VIEW_ARTICLES: "ブログを見る",
    DESCRIPTION:
      "月1回のLT会(発表会)に加えて、勉強会・輪読会・イベントなど、気軽に参加できる活動を用意しています。",
  },
  NEWS: {
    LABEL: "最新情報",
    TITLE: "ニュース",
    VIEW_ALL: "一覧を見る",
  },
  MEMBERS: {
    LABEL: "運営メンバー",
    TITLE: "コミュニティを支える3人",
    DESCRIPTION:
      "相談しやすい雰囲気づくりを大切にしながら、サークル運営を担当しているメンバーです。",
  },
  FAQ: {
    LABEL: "FAQ",
    TITLE: "よくある質問",
    DESCRIPTION: "参加前によくいただく質問をまとめました。",
  },
  SPONSORS: {
    LABEL: "サポーター",
    TITLE: "公式パートナー",
    DESCRIPTION:
      "ZAGAROは、活動の継続や機会の提供など、外部のパートナーの皆さまのご協力に支えられています。このページでは「公式パートナー」として関係を結んでいる団体を掲載します。",
    FOOTNOTE:
      "協賛・連携に関するお問い合わせは、XのDMなどからご連絡ください。",
    PARTNER_CARD: {
      NAME: "サポーターズ",
      ROLE: "公式パートナー",
      PARAGRAPHS: [
        "株式会社サポーターズ様とは公式パートナーとして協力関係にあり、当サークルの活動運営やメンバーが学び・交流する機会づくりにご支援いただいています。",
      ],
      LINK_LABEL: "サポーターズ公式サイト",
    },
  },
  SCHEDULE: {
    LABEL: "年間スケジュール",
    TITLE: "1年を通してこんな活動があります",
    DESCRIPTION:
      "1年を通して勉強会・LT会・交流イベントを開催しています。",
  },
  NEW_MEMBER_CURRICULUM: {
    LABEL: "新入部員向け",
    TITLE: "新入部員向けカリキュラム",
    BADGE: "ガイド",
    DESCRIPTION:
      "入部直後の新歓・基礎講習に続き、開発環境の整え方からチームでの進め方まで、段階的に学べる流れを用意しています。自分のペースで追いつきやすいよう、メンバーがサポートします。",
    LINK: "カリキュラムの詳細を見る",
  },
  CURRICULUM_PAGE: {
    TITLE: "新入部員向けカリキュラム",
    DESCRIPTION:
      "ここに、環境構築・学習の進め方・おすすめの関わり方など、詳しい内容を順次まとめていきます。",
    BACK: "トップに戻る",
  },
  CTA: {
    SUBTITLE: "Join us",
    TITLE: "まずは気軽に話してみませんか？",
    DESCRIPTION:
      "見学だけでも大歓迎です。興味のある分野ややってみたいことを、XのDMで気軽に教えてください。",
    BUTTON_TEXT: "XのDMで問い合わせる",
  },
  FOOTER: {
    COPYRIGHT: "© ZAGARO — BORN 31 OCT 2025",
    LINKS: {
      TOP: "Top",
      JOIN: "Join",
    },
  },
} as const;

