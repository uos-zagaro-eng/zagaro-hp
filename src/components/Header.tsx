import { useState, useEffect } from "react";
import Nav from "./Nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={handleLogoClick}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            ZAGARO
          </a>
          <Nav />
        </div>
      </div>
    </header>
  );
}
