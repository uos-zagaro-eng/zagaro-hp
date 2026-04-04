/**
 * OGP・canonical 用の本番URL（GitHub Pages）。
 * vite.config の production `base`（/zagaro-hp/）とパスを一致させること。
 */
export const SITE_ORIGIN = "https://uos-zagaro-eng.github.io";
export const SITE_PATH_SEGMENT = "zagaro-hp";

export const SEO = {
  DEFAULT_TITLE: "ZAGARO - 静岡県立大学エンジニアサークル",
  DEFAULT_DESCRIPTION:
    "静岡県立大学のITサークル。AI・Web・ゲーム開発・競プロなど、興味のある分野を仲間と学べるコミュニティです。",
  OG_IMAGE_ALT: "ZAGARO ロゴ",
  TWITTER_SITE: "@zagaro_eng",
} as const;

export function absolutePublicUrl(path = ""): string {
  const p = path.replace(/^\/+/, "");
  const root = `${SITE_ORIGIN}/${SITE_PATH_SEGMENT}`;
  return p ? `${root}/${p}` : `${root}/`;
}
