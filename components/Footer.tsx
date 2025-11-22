import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-stone-950 text-white pt-24 pb-12 border-t border-stone-800">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-stone-800 pb-20">
          
          {/* Brand */}
          <div className="mb-12 md:mb-0">
            <h2 className="font-syncopate text-4xl font-bold tracking-tighter mb-4 text-emerald-500">ZAGARO</h2>
            <p className="text-xs tracking-[0.2em] opacity-60 max-w-xs leading-loose font-mono">
              University IT Circle.<br/>
              Empowering Students through Technology.<br/>
              Based in Tokyo.
            </p>
          </div>

          {/* Links Area */}
          <div className="flex gap-12 md:gap-24 text-xs font-bold tracking-[0.2em]">
             <div className="flex flex-col gap-6">
                <a href="#about" className="hover:text-emerald-400 transition-colors">PHILOSOPHY</a>
                <a href="#members" className="hover:text-emerald-400 transition-colors">DEVELOPERS</a>
                <a href="#activities" className="hover:text-emerald-400 transition-colors">OUTPUTS</a>
             </div>
             <div className="flex flex-col gap-6">
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><Twitter size={14}/> TWITTER</a>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><Github size={14}/> GITHUB</a>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><MessageCircle size={14}/> DISCORD</a>
             </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-30 tracking-widest uppercase font-syncopate">
          <p>&copy; 2024 ZAGARO. CODE BY STUDENTS.</p>
          <p>POWERED BY GEMINI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;