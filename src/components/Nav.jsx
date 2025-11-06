import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Plan', href: '#plan' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Members', href: '#members' },
    { label: 'Join', href: '#join' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* モバイルメニュー */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-700 hover:text-primary transition-colors duration-200 p-2"
          aria-label="メニュー"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
            <nav className="flex flex-col py-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="px-6 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

