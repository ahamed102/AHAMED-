import { Topic } from '../types';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface TopicCardProps {
  key?: string;
  topic: Topic;
  onClick: () => void;
  index: number;
  language: 'en' | 'bn' | 'bilingual';
}

export default function TopicCard({ topic, onClick, index, language }: TopicCardProps) {
  // Safe dynamic lucide-react icon rendering
  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className="text-cyan-600 stroke-[1.8]" size={24} />;
    }
    return <LucideIcons.BookOpen className="text-cyan-600 stroke-[1.8]" size={24} />;
  };

  const getLabel = (enVal: string, _bnVal?: string) => {
    return enVal;
  };

  return (
    <motion.div
      onClick={onClick}
      id={`topic-card-${topic.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.015 }}
      style={{ contentVisibility: 'auto' }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-blue-500/15 bg-white p-6 transition-all hover:border-cyan-400 hover:shadow-[0_8px_30px_rgba(6,182,212,0.3)] flex flex-col justify-between"
    >
      {/* Decorative top cyan/blue glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Decorative side cyan/indigo animated pulse */}
      <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black tracking-[0.14em] uppercase text-cyan-700 bg-cyan-50/70 px-2.5 py-1 rounded-md border border-cyan-200">
              {topic.category}
            </span>
            <div className="rounded-xl bg-blue-50 p-2.5 ring-1 ring-blue-100 group-hover:bg-cyan-50 group-hover:ring-cyan-350 transition-all shadow-2xs">
              {getIcon(topic.iconName)}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg tracking-tight leading-snug transition-colors">
            <span className="block text-slate-900 group-hover:text-blue-700 font-extrabold">{topic.titleEn}</span>
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs md:text-sm leading-relaxed transition-colors">
            <span className="block text-neutral-800 group-hover:text-neutral-950 font-medium">{topic.shortDescriptionEn}</span>
          </p>
        </div>

        {/* Footer info Indicator */}
        <div className="mt-6 flex items-center gap-1.5 text-xs text-blue-700 font-bold group-hover:text-cyan-700 transition-colors self-start">
          <span>{getLabel('Study Manual', 'ম্যানুয়াল অধ্যায়ন করুন')}</span>
          <LucideIcons.ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
