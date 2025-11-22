import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about', enLabel: 'Philosophy' },
  { label: 'MEMBERS', href: '#members', enLabel: 'Core Team' },
  { label: 'ACTIVITIES', href: '#activities', enLabel: 'Outputs' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-stone-100' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo Area */}
          <a href="#top" className="group flex items-center gap-3 z-50 relative">
            <div className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${scrolled || isOpen ? 'border-stone-900 bg-stone-900 text-white' : 'border-white bg-white/10 text-white'}`}>
                <span className="font-syncopate font-bold text-xl">Z</span>
            </div>
            <div className="flex flex-col">
                <span className={`font-syncopate font-bold text-xl leading-none tracking-widest transition-colors ${scrolled || isOpen ? 'text-stone-900' : 'text-white'}`}>
                ZAGARO
                </span>
                <span className={`text-[9px] tracking-[0.3em] uppercase transition-colors ${scrolled || isOpen ? 'text-stone-500' : 'text-white/60'}`}>
                Est. 2024 / IT CIRCLE
                </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative flex flex-col items-center text-xs font-bold transition-colors duration-300 ${
                  scrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                <span className="font-syncopate tracking-widest">{item.label}</span>
                <span className={`absolute -bottom-2 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-stone-900' : 'bg-white'}`}></span>
              </a>
            ))}
            <a
              href="#join"
              className={`ml-8 px-6 py-3 text-xs font-bold tracking-[0.2em] transition-all duration-300 flex items-center gap-2 font-syncopate ${
                scrolled
                  ? 'bg-stone-900 text-white hover:bg-emerald-700'
                  : 'bg-white text-stone-900 hover:bg-stone-200'
              }`}
            >
              <Terminal size={14} />
              JOIN_DEV
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 focus:outline-none mix-blend-difference"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-white" size={32} />
            ) : (
              <Menu className="text-white" size={32} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-stone-900 z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex flex-col items-center group"
            >
              <span className="text-4xl font-syncopate font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {item.label}
              </span>
              <span className="text-sm font-light tracking-[0.3em] text-stone-500 uppercase">
                {item.enLabel}
              </span>
            </a>
          ))}
          <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-12 py-4 border border-emerald-500 text-emerald-400 text-sm font-bold tracking-[0.2em] hover:bg-emerald-500 hover:text-stone-900 transition-all font-syncopate"
            >
              JOIN_DEV
            </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;