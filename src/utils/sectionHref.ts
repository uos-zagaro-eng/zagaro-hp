/**
 * トップのセクションへ飛ぶリンク（GitHub Pages の base 付き、別ルートからも有効）
 */
export function sectionHref(hash: string): string {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  return `${import.meta.env.BASE_URL}#${id}`;
}
