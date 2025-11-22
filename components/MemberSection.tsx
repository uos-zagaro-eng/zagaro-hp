import React from 'react';
import { Member } from '../types';

const members: Member[] = [
  {
    id: '1',
    name: 'KENJI S.',
    role: 'FULL STACK DEV',
    roleJp: '代表 / Web技術統括',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop',
    description: 'ハッカソン優勝経験多数。フロントからインフラまでこなすZAGAROの心臓。「技術で殴る」がモットー。'
  },
  {
    id: '2',
    name: 'ALICE M.',
    role: 'AI RESEARCHER',
    roleJp: '副代表 / データサイエンス',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    description: 'Kaggle Masterを目指し日々モデル構築に励む。論文読み会主催。数学とPythonをこよなく愛する。'
  },
  {
    id: '3',
    name: 'RYO T.',
    role: 'GAME CREATOR',
    roleJp: 'Unityエンジニア',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
    description: 'インディーゲーム開発に没頭するクリエイター。VR/AR分野にも精通し、サークルの「遊び心」を体現する。'
  }
];

const MemberSection: React.FC = () => {
  return (
    <section id="members" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
                <span className="text-emerald-500 font-bold tracking-[0.2em] text-xs block mb-2 font-syncopate">CORE TEAM</span>
                <h2 className="text-5xl md:text-7xl font-syncopate font-bold uppercase">Developers</h2>
            </div>
            <p className="text-stone-400 max-w-sm text-sm mt-8 md:mt-0 leading-relaxed text-right md:text-left font-mono">
                ZAGAROを牽引する技術オタクたち。<br/>
                コードで語り、背中で見せる。
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div 
                key={member.id} 
                className={`group relative h-[600px] overflow-hidden bg-stone-800 cursor-pointer border border-stone-800 hover:border-emerald-500/50 transition-all duration-500 ${index === 1 ? 'md:translate-y-12' : ''}`}
            >
              {/* Image */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="overflow-hidden mb-2">
                    <p className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-1 font-syncopate transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {member.role}
                    </p>
                </div>
                <h3 className="text-3xl font-syncopate font-bold mb-2">{member.name}</h3>
                <p className="text-xs text-stone-300 mb-4 font-bold tracking-wider">{member.roleJp}</p>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-sm text-stone-400 leading-relaxed border-t border-stone-700 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                        {member.description}
                    </p>
                </div>
              </div>

              {/* Tech Decoration */}
              <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-mono text-emerald-500/50">ID_0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;