import { useState, memo } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { NavItem } from "../types";
import { useScroll } from "../hooks/useScroll";
import { CONTENT } from "../constants/content";
import { IMAGE_URLS } from "../constants/urls";

const navItems: NavItem[] = [CONTENT.NAV.ABOUT, CONTENT.NAV.ACTIVITIES];

interface LogoProps {
  scrolled: boolean;
  isOpen: boolean;
}

const Logo = memo(({ scrolled, isOpen }: LogoProps) => (
  <a href="#top" className="group flex items-center gap-3 z-50 relative">
    <div
      className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 overflow-hidden ${
        scrolled || isOpen ? "bg-white" : "bg-white/10"
      }`}
    >
      <img
        src={IMAGE_URLS.LOGO}
        alt={CONTENT.BRAND.NAME}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col">
      <span
        className={`font-syncopate font-bold text-xl leading-none tracking-widest transition-colors ${
          scrolled || isOpen ? "text-stone-900" : "text-white"
        }`}
      >
        {CONTENT.BRAND.NAME}
      </span>
      <span
        className={`text-[9px] tracking-[0.3em] uppercase transition-colors ${
          scrolled || isOpen ? "text-stone-500" : "text-white/60"
        }`}
      >
        {CONTENT.BRAND.SUBTITLE}
      </span>
    </div>
  </a>
));
Logo.displayName = "Logo";

interface DesktopNavLinkProps {
  item: NavItem;
  scrolled: boolean;
}

const DesktopNavLink = memo(({ item, scrolled }: DesktopNavLinkProps) => (
  <a
    href={item.href}
    className={`group relative flex flex-col items-center text-xs font-bold transition-colors duration-300 ${
      scrolled ? "text-stone-900" : "text-white"
    }`}
  >
    <span className="font-syncopate tracking-widest">{item.label}</span>
    <span
      className={`absolute -bottom-2 w-0 h-px transition-all duration-300 group-hover:w-full ${
        scrolled ? "bg-stone-900" : "bg-white"
      }`}
    />
  </a>
));
DesktopNavLink.displayName = "DesktopNavLink";

interface JoinButtonProps {
  scrolled: boolean;
}

const JoinButton = memo(({ scrolled }: JoinButtonProps) => (
  <a
    href="#join"
    className={`ml-8 px-6 py-3 text-xs font-bold tracking-[0.2em] transition-all duration-300 flex items-center gap-2 font-syncopate relative overflow-hidden group/btn ${
      scrolled ? "bg-stone-900 text-white" : "bg-white text-stone-900"
    }`}
  >
    <span
      className={`absolute inset-0 transition-transform duration-500 origin-right scale-x-0 group-hover/btn:scale-x-100 group-hover/btn:origin-left ${
        scrolled ? "bg-emerald-700" : "bg-stone-200"
      }`}
    />
    <Terminal size={14} className="relative z-10" />
    <span className="relative z-10">JOIN_US</span>
  </a>
));
JoinButton.displayName = "JoinButton";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuToggle = memo(({ isOpen, onClick }: MobileMenuToggleProps) => (
  <button
    className="md:hidden z-50 focus:outline-none mix-blend-difference"
    onClick={onClick}
    aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
  >
    {isOpen ? (
      <X className="text-white" size={32} />
    ) : (
      <Menu className="text-white" size={32} />
    )}
  </button>
));
MobileMenuToggle.displayName = "MobileMenuToggle";

interface MobileNavLinkProps {
  item: NavItem;
  onClose: () => void;
}

const MobileNavLink = memo(({ item, onClose }: MobileNavLinkProps) => (
  <a
    href={item.href}
    onClick={onClose}
    className="flex flex-col items-center group"
  >
    <span className="text-4xl font-syncopate font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
      {item.label}
    </span>
    <span className="text-sm font-light tracking-[0.3em] text-stone-500 uppercase">
      {item.enLabel}
    </span>
  </a>
));
MobileNavLink.displayName = "MobileNavLink";

interface MobileJoinButtonProps {
  onClose: () => void;
}

const MobileJoinButton = memo(({ onClose }: MobileJoinButtonProps) => (
  <a
    href="#join"
    onClick={onClose}
    className="mt-8 px-12 py-4 border border-emerald-500 text-emerald-400 text-sm font-bold tracking-[0.2em] transition-colors font-syncopate relative overflow-hidden group/btn"
  >
    <span className="absolute inset-0 bg-emerald-500 transition-transform duration-500 origin-right scale-x-0 group-hover/btn:scale-x-100 group-hover/btn:origin-left" />
    <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-stone-900">
      JOIN_US
    </span>
  </a>
));
MobileJoinButton.displayName = "MobileJoinButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = memo(({ isOpen, onClose }: MobileMenuProps) => (
  <div
    className={`fixed inset-0 bg-stone-900 z-40 transform transition-transform duration-500 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      {navItems.map((item) => (
        <MobileNavLink key={item.label} item={item} onClose={onClose} />
      ))}
      <MobileJoinButton onClose={onClose} />
    </div>
  </div>
));
MobileMenu.displayName = "MobileMenu";

const Navbar = () => {
  const { scrolled } = useScroll(50);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-stone-100"
      : "bg-transparent py-6"
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <Logo scrolled={scrolled} isOpen={isOpen} />

          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <DesktopNavLink
                key={item.label}
                item={item}
                scrolled={scrolled}
              />
            ))}
            <JoinButton scrolled={scrolled} />
          </nav>

          <MobileMenuToggle isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
