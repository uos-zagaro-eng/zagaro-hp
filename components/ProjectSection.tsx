import React from 'react';
import SectionHeading from './SectionHeading';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Shibuya Urban Tech',
    category: 'Urban Development',
    description: '渋谷から世界へ。テクノロジーと文化が融合する次世代オフィスタワー。',
    image: 'https://picsum.photos/seed/shibuya/800/600',
  },
  {
    id: '2',
    title: 'Niseko Eco Resort',
    category: 'Wellness & Resort',
    description: '自然と共生する。サステナビリティを極めた、世界水準のマウンテンリゾート。',
    image: 'https://picsum.photos/seed/resort/800/600',
  },
  {
    id: '3',
    title: 'Smart Logistics Kanto',
    category: 'Infrastructure',
    description: '物流の未来をデザインする。AI・ロボティクス対応の次世代インフラ拠点。',
    image: 'https://picsum.photos/seed/logistics/800/600',
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading en="Our Projects" jp="プロジェクト紹介" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 ${index === 1 ? 'md:mt-12' : ''}`} // Staggered look
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500"></div>
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase text-stone-800">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 relative bg-white">
                <h3 className="text-xl font-serif-jp font-medium mb-3 group-hover:text-emerald-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
                
                <div className="flex items-center text-emerald-800 text-xs tracking-widest font-bold group/btn">
                  VIEW MORE
                  <span className="ml-2 w-8 h-[1px] bg-emerald-800 group-hover/btn:w-12 transition-all"></span>
                </div>
              </div>
              
              {/* Bottom Line Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <button className="inline-flex items-center justify-center px-10 py-4 border border-stone-400 text-stone-600 hover:border-emerald-800 hover:text-white hover:bg-emerald-800 transition-all duration-300 tracking-widest text-sm uppercase">
                All Projects
             </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;