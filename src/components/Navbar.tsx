import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import type { NavItem } from "../types";
import { useScroll } from "../hooks/useScroll";
import { CONTENT } from "../constants/content";
import { IMAGE_URLS } from "../constants/urls";
import { sectionHref } from "../utils/sectionHref";
import ButtonLink from "./ui/ButtonLink";

const Navbar = () => {
  const { scrolled } = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      CONTENT.NAV.ABOUT,
      CONTENT.NAV.GALLERY,
      CONTENT.NAV.ACTIVITIES,
      CONTENT.NAV.NEWS,
      CONTENT.NAV.MEMBERS,
      CONTENT.NAV.SPONSORS,
      CONTENT.NAV.FAQ,
    ],
    []
  );

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 80rem)");
    const onChange = () => {
      if (mq.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTop = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const barClass = scrolled
    ? "border-line bg-card/98 shadow-soft-hover"
    : "border-line-faint bg-card/92 shadow-soft";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={`mx-auto box-border flex h-16 min-h-16 max-h-16 max-w-6xl shrink-0 items-center rounded-2xl border-2 px-4 backdrop-blur-md transition-interactive md:rounded-3xl md:px-6 ${barClass}`}
        >
          <div className="flex h-full min-h-0 w-full min-w-0 flex-nowrap items-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link
              to="/"
              onClick={goTop}
              className="flex h-full min-h-0 shrink-0 cursor-pointer items-center gap-2.5 rounded-xl text-left outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand sm:gap-3"
            >
              <img
                src={IMAGE_URLS.LOGO}
                alt=""
                className="size-10 shrink-0 rounded-2xl border-2 border-line object-cover shadow-soft"
                width={40}
                height={40}
              />
              <div className="min-w-0 py-0.5">
                <p className="truncate font-display text-lg font-extrabold leading-none text-ink">
                  {CONTENT.BRAND.NAME}
                </p>
                <p className="mt-0.5 truncate text-sm font-medium leading-tight text-ink-muted">
                  {CONTENT.BRAND.SUBTITLE}
                </p>
              </div>
            </Link>

            <div
              className="min-h-0 min-w-2 shrink flex-1"
              aria-hidden="true"
            />

            <nav
              className="hidden shrink-0 flex-nowrap items-center gap-x-0.5 xl:flex"
              aria-label="メイン"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={sectionHref(item.href)}
                  className="inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-xl px-3 text-sm font-semibold text-ink-secondary transition-interactive hover:bg-brand-muted hover:text-brand-hover xl:px-3.5 xl:text-base"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                href={sectionHref("#join")}
                variant="primary"
                className="ml-1 inline-flex h-10 shrink-0 items-center py-0! px-5 text-sm whitespace-nowrap xl:ml-2 xl:px-6"
              >
                参加する
              </ButtonLink>
            </nav>

            <div className="flex h-10 shrink-0 items-center gap-2 xl:hidden">
              <button
                type="button"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-ink transition-interactive hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
              >
                {isOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-4 top-[calc(1rem+4rem+0.375rem)] z-40 rounded-2xl border-2 border-line bg-card/98 p-4 shadow-soft-hover backdrop-blur-md transition-interactive xl:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href)}
              onClick={closeMenu}
              className="rounded-xl border border-line-faint bg-page px-3 py-3 text-center text-base font-bold text-ink transition-interactive hover:bg-chip/60"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ButtonLink
          href={sectionHref("#join")}
          variant="primary"
          onClick={closeMenu}
          className="mt-3 inline-flex h-11 w-full items-center justify-center py-0! text-base font-bold"
        >
          参加する
        </ButtonLink>
      </div>
    </>
  );
};

export default Navbar;
