import React from 'react';
import SectionHeading from './SectionHeading';

const MessageSection: React.FC = () => {
  return (
    <section id="message" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Background decorative letter */}
      <span className="absolute top-20 left-[-5%] text-[20rem] font-serif text-stone-200/40 pointer-events-none select-none z-0">
        M
      </span>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading en="Top Message" jp="代表メッセージ" align="left" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-serif-jp leading-relaxed mb-8 text-stone-800">
              「環境」と「感動」を<br />
              次世代へ繋ぐ。<br />
              <span className="text-emerald-800">その情熱が、街を変える。</span>
            </h3>
            <div className="space-y-6 text-stone-600 leading-loose font-light text-justify">
              <p>
                私たちは今、大きな変革の時代に生きています。都市のあり方、働き方、そして生活者の価値観は多様化し続けています。しかし、どのような時代にあっても変わらないものがあります。それは「人が輝く舞台」を創り出すという使命です。
              </p>
              <p>
                単に建物を建てるのではなく、そこに集う人々の息吹を感じ、未来の物語を紡ぎ出す。それが私たちのデベロップメントです。困難な課題に直面したときこそ、真価が問われます。
              </p>
              <p>
                恐れずに挑戦してください。あなたの情熱が、次の時代のランドマークとなるのですから。
              </p>
            </div>
            <div className="mt-10">
              <p className="text-right font-serif-jp text-lg text-stone-800">
                代表取締役社長<br />
                <span className="text-2xl mt-2 inline-block">東急 太郎</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden relative shadow-2xl">
               <img 
                src="https://picsum.photos/seed/executive/800/1200" 
                alt="CEO" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 border-[1px] border-white/20 m-4"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-900/10 -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;