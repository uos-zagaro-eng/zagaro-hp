import React from 'react';

interface Props {
  en: string;
  jp: string;
  align?: 'left' | 'center' | 'right';
  color?: 'light' | 'dark';
}

const SectionHeading: React.FC<Props> = ({ en, jp, align = 'center', color = 'dark' }) => {
  const textColor = color === 'light' ? 'text-white' : 'text-stone-800';
  const subColor = color === 'light' ? 'text-white/60' : 'text-stone-500';

  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center' : align === 'right' ? 'items-end' : 'items-start'} mb-16`}>
      <span className={`text-xs font-bold tracking-[0.3em] uppercase ${subColor} mb-3 block`}>
        {en}
      </span>
      <h2 className={`text-3xl md:text-4xl font-serif-jp ${textColor} relative inline-block pb-4`}>
        {jp}
        <span className={`absolute bottom-0 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-12 h-[1px] bg-emerald-600`}></span>
      </h2>
    </div>
  );
};

export default SectionHeading;