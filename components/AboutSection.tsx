import React from 'react';
import { Terminal, Cpu, Gamepad2, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-stone-50 relative overflow-hidden">
        {/* Background typographic noise */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.05]">
            <div className="whitespace-nowrap font-syncopate font-bold text-[15vw] leading-none text-stone-900 -rotate-12 transform origin-center translate-y-20 scale-150">
                HELLO WORLD
            </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
                {/* Left: Heading */}
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-emerald-600 font-bold tracking-[0.2em] text-xs mb-4 block font-syncopate">PHILOSOPHY</span>
                    <h2 className="text-4xl md:text-6xl font-bodoni font-bold text-stone-900 leading-tight">
                        No Limits.<br/>
                        Just Code.
                    </h2>
                    <div className="w-20 h-1 bg-emerald-600 mt-8"></div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3 space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold font-serif-jp leading-relaxed text-stone-900">
                            「好き」を技術に変える。<br/>
                            「技術」で遊び尽くす。
                        </h3>
                        <p className="text-stone-600 text-lg leading-loose font-medium">
                            ZAGAROに、「これはやっちゃダメ」という技術はありません。<br/>
                            最新のWebフレームワークを追うもよし、
                            深夜までゲームエンジンのバグと戦うもよし、
                            Kaggleで世界と競うもよし。
                        </p>
                        <p className="text-stone-600 text-lg leading-loose font-medium">
                            ここは、ITに興味がある学生が繋がり、
                            互いの知見を共有し（Share）、
                            共に成長する（Grow）ためのプラットフォームです。
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-stone-200">
                        <div className="bg-white p-6 shadow-sm border-l-4 border-stone-200 hover:border-emerald-500 transition-colors">
                            <Globe className="text-stone-800 mb-4" size={32} />
                            <h3 className="font-syncopate font-bold text-lg mb-2 text-stone-900">WEB / MOBILE</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                React, Next.js, Flutter... モダンな環境でアプリ開発。
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-sm border-l-4 border-stone-200 hover:border-emerald-500 transition-colors">
                            <Cpu className="text-stone-800 mb-4" size={32} />
                            <h3 className="font-syncopate font-bold text-lg mb-2 text-stone-900">AI / DATA</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                機械学習、データ分析、LLM活用。最先端を実装する。
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-sm border-l-4 border-stone-200 hover:border-emerald-500 transition-colors">
                            <Gamepad2 className="text-stone-800 mb-4" size={32} />
                            <h3 className="font-syncopate font-bold text-lg mb-2 text-stone-900">GAME DEV</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                Unity, UE5。2DからVRまで、世界を創造する楽しみ。
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-sm border-l-4 border-stone-200 hover:border-emerald-500 transition-colors">
                            <Terminal className="text-stone-800 mb-4" size={32} />
                            <h3 className="font-syncopate font-bold text-lg mb-2 text-stone-900">ALGO / SEC</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                競技プログラミング、CTF。論理とアルゴリズムの極致へ。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;