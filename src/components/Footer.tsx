import { memo, useMemo } from "react";
import { Github } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import type { NavItem } from "../types";
import { EXTERNAL_URLS, IMAGE_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";
import { sectionHref } from "../utils/sectionHref";

type FooterLink = Pick<NavItem, "href" | "label">;

const Footer = memo(() => {
  const links = useMemo<FooterLink[]>(
    () => [
      { href: "#top", label: CONTENT.FOOTER.LINKS.TOP },
      CONTENT.NAV.ABOUT,
      CONTENT.NAV.GALLERY,
      CONTENT.NAV.ACTIVITIES,
      CONTENT.NAV.NEWS,
      CONTENT.NAV.MEMBERS,
      CONTENT.NAV.SPONSORS,
      CONTENT.NAV.FAQ,
      { href: "#join", label: CONTENT.FOOTER.LINKS.JOIN },
    ],
    []
  );

  return (
    <footer
      id="footer"
      className="border-t-2 border-line bg-subtle py-14 text-ink-secondary"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-12 border-b-2 border-line-faint pb-12 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={IMAGE_URLS.LOGO}
              alt={CONTENT.BRAND.NAME}
              className="h-12 w-12 rounded-2xl border-2 border-line object-cover shadow-soft"
            />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                {CONTENT.BRAND.NAME}
              </h2>
              <p className="mt-1 whitespace-nowrap text-sm font-medium text-ink-muted">
                {CONTENT.BRAND.FULL_SUBTITLE}
              </p>
            </div>
          </div>

          <nav
            className="flex max-w-full flex-wrap items-center gap-x-1 gap-y-2 text-base font-bold text-ink-secondary"
            aria-label="フッター"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={
                  link.href.startsWith("#")
                    ? sectionHref(link.href)
                    : link.href
                }
                className="rounded-full px-3 py-2 transition-interactive hover:bg-card hover:text-brand-hover"
              >
                {link.label}
              </a>
            ))}
            <a
              href={EXTERNAL_URLS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-3 py-2 transition-interactive hover:bg-card hover:text-brand-hover"
            >
              <FaXTwitter size={16} aria-hidden />
            </a>
            <a
              href={EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-3 py-2 transition-interactive hover:bg-card hover:text-brand-hover"
            >
              <Github size={16} aria-hidden /> GitHub
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-10 text-sm font-medium text-ink-muted md:flex-row">
          <p>{CONTENT.FOOTER.COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
