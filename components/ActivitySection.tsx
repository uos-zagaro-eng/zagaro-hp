import React from 'react';
import { Activity } from '../types';
import { ArrowRight, Code, Laptop, Coffee } from 'lucide-react';

const activities: Activity[] = [
  {
    id: '1',
    title: 'HACKATHON',
    date: 'QUARTERLY',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3852ad0?q=80&w=1887&auto=format&fit=crop',
    description: '2日間でプロダクトを作り切る。睡眠不足とRedBullと達成感。'
  },
  {
    id: '2',
    title: 'LT NIGHT',
    date: 'MONTHLY',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop',
    description: '自分の「推し技術」を語るライトニングトーク会。ピザ片手に交流。'
  },
  {
    id: '3',
    title: 'GAME JAM',
    date: 'SUMMER/WINTER',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
    description: 'Unity/UE5勢が集結。テーマに沿ってゲームを共同開発。'
  },
  {
    id: '4',
    title: 'STUDY CAMP',
    date: 'SEP. 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    description: 'Wi-Fi完備のコテージで開発合宿。温泉とコーディングの無限ループ。'
  },
  {
    id: '5',
    title: 'KAGGLE TEAM',
    date: 'ONGOING',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'データ分析コンペに参加。チームで金メダルを目指すガチ勢の集い。'
  },
  {
    id: '6',
    title: 'WORKSHOP',
    date: 'IRREGULAR',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    description: '初心者向けReact講座や、AWSハンズオンなど随時開催。'
  },
];

const ActivitySection: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
            <div>
                 <span className="text-stone-500 font-bold tracking-[0.2em] text-xs block mb-2 font-syncopate">WHAT WE DO</span>
                <h2 className="text-4xl md:text-6xl font-syncopate font-bold text-stone-900 uppercase">
                    Outputs
                </h2>
            </div>
            <div className="hidden md:block w-1/3 h-[1px] bg-stone-300"></div>
            <a href="#" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] hover:text-emerald-600 transition-colors">
                VIEW ALL LOGS <ArrowRight size={14}/>
            </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="group relative aspect-[3/4] bg-stone-900 overflow-hidden cursor-pointer"
            >
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              
              {/* Tech Scan Line Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.8)] translate-y-[-100%] group-hover:animate-[scan_2s_linear_infinite]"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80 transition-colors duration-300 flex flex-col justify-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[9px] text-emerald-400 font-syncopate block mb-1 border-l-2 border-emerald-500 pl-2">{activity.date}</span>
                    <h3 className="text-xs font-bold text-white font-syncopate leading-tight mb-2">{activity.title}</h3>
                    <p className="text-[10px] text-stone-300 line-clamp-2 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] border-b border-stone-900 pb-1">
                VIEW ALL LOGS <ArrowRight size={14}/>
            </a>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
};

export default ActivitySection;