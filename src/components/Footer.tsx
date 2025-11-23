import { memo } from "react";
import { Github } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { EXTERNAL_URLS, IMAGE_URLS } from "../constants/urls";
import { CONTENT } from "../constants/content";

const Footer = memo(() => {
  return (
    <footer
      id="footer"
      className="bg-stone-950 text-white pt-12 md:pt-16 pb-12 border-t border-stone-800"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-row items-center justify-between border-b border-stone-800 pb-8 gap-8">
          <div className="flex items-center gap-4">
            <img
              src={IMAGE_URLS.LOGO}
              alt={CONTENT.BRAND.NAME}
              className="h-10 w-10"
            />
            <div>
              <h2 className="font-syncopate text-2xl font-bold tracking-tighter text-emerald-500">
                {CONTENT.BRAND.NAME}
              </h2>
              <p className="text-[10px] tracking-[0.15em] opacity-60 font-mono whitespace-nowrap">
                {CONTENT.BRAND.FULL_SUBTITLE}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-xs font-bold tracking-[0.2em]">
            <a href="#top" className="hover:text-emerald-400 transition-colors">
              {CONTENT.FOOTER.LINKS.TOP}
            </a>
            <a
              href="#about"
              className="hover:text-emerald-400 transition-colors"
            >
              {CONTENT.FOOTER.LINKS.ABOUT}
            </a>
            <a
              href="#activities"
              className="hover:text-emerald-400 transition-colors"
            >
              {CONTENT.FOOTER.LINKS.ACTIVITIES}
            </a>
            <a
              href="#join"
              className="hover:text-emerald-400 transition-colors"
            >
              {CONTENT.FOOTER.LINKS.JOIN}
            </a>
            <p>|</p>
            <a
              href={EXTERNAL_URLS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <FaXTwitter size={14} /> X
            </a>
            <a
              href={EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <Github size={14} /> GITHUB
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-30 tracking-widest uppercase font-syncopate">
          <p>{CONTENT.FOOTER.COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
