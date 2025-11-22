import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `scale(${1 + offset * 0.0005})`, 
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop" 
          alt="Cyber Security Technology" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Grain & Grid overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(rgba(0,255,100,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-[1400px] px-6 flex flex-col items-start justify-center h-full pt-20">
        
        {/* Top Tag */}
        <div className="overflow-hidden mb-6">
            <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-1 border border-emerald-500/50 bg-emerald-900/20 rounded-sm text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 backdrop-blur-sm font-syncopate">
                :: SYSTEM READY ::
                </span>
            </div>
        </div>

        {/* Main Title */}
        <div className="flex flex-col text-white font-syncopate font-bold leading-[0.85] tracking-tighter">
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              CODE
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] text-transparent stroke-white stroke-2 md:stroke-[3px] animate-fade-in-up" style={{ WebkitTextStroke: '2px white', animationDelay: '0.2s' }}>
              CREATE
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] text-emerald-500 animate-fade-in-up shadow-emerald-500/50 drop-shadow-2xl" style={{animationDelay: '0.3s'}}>
              CONNECT
            </h1>
          </div>
        </div>

        {/* Subtext */}
        <div className="mt-12 max-w-xl animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p className="text-white text-base md:text-lg font-bold tracking-widest leading-relaxed border-l-4 border-emerald-500 pl-6 mb-2">
            実装せよ、君の正解を。
          </p>
          <p className="text-stone-400 text-sm md:text-base font-light tracking-wide leading-relaxed pl-6">
            ZAGAROは、ITに関することなら何でもあり。<br/>
            AI、Web、Game、競プロ...。<br/>
            好きな技術で、好きなものを、好きなだけ。<br/>
            共にコードを書き、共に未来を創る仲間がここにいる。
          </p>
        </div>

      </div>
      
      {/* Decorative Floating Elements */}
      <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end">
         <div className="text-white text-right mb-4">
            <p className="text-[10px] font-syncopate tracking-[0.3em] opacity-50">SCROLL_DOWN();</p>
         </div>
         <div className="w-[1px] h-24 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </div>

      <div className="absolute top-1/2 right-[-6rem] transform rotate-90 hidden md:block z-10">
        <span className="text-[6rem] font-syncopate font-bold text-white/5 whitespace-nowrap">ZAGARO_SYSTEM_V1.0</span>
      </div>
    </div>
  );
};

export default Hero;