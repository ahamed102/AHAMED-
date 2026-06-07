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
      return <IconComponent className="text-rose-550 stroke-[1.5]" size={24} />;
    }
    return <LucideIcons.BookOpen className="text-rose-550 stroke-[1.5]" size={24} />;
  };

  const getLabel = (enVal: string, bnVal: string) => {
    if (language === 'en') return enVal;
    if (language === 'bn') return bnVal;
    return `${enVal} / ${bnVal}`;
  };

  return (
    <motion.div
      onClick={onClick}
      id={`topic-card-${topic.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-rose-100 bg-white p-6 transition-all hover:bg-rose-50/10 hover:border-rose-400/40 hover:shadow-[0_12px_24px_rgba(244,63,94,0.06)] flex flex-col justify-between"
    >
      {/* Decorative top red glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Decorative side pink/red gradient accent */}
      <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-rose-450/60 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black tracking-[0.14em] uppercase text-rose-700 bg-rose-500/5 px-2.5 py-1 rounded-md border border-rose-200/50">
              {topic.category}
            </span>
            <div className="rounded-xl bg-rose-50/50 p-2.5 ring-1 ring-rose-100 group-hover:bg-rose-50 group-hover:ring-rose-300 transition-all shadow-2xs">
              {getIcon(topic.iconName)}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-black text-neutral-900 tracking-tight leading-snug group-hover:text-rose-600 transition-colors">
            {language === 'en' && topic.titleEn}
            {language === 'bn' && topic.titleBn}
            {language === 'bilingual' && (
              <>
                <span className="block text-neutral-900 group-hover:text-rose-700 transition-colors font-bold text-base md:text-lg">{topic.titleEn}</span>
                <span className="block text-rose-650 font-black text-xs md:text-sm mt-1.5 pt-1.5 border-t border-rose-100/50">{topic.titleBn}</span>
              </>
            )}
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs md:text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
            {language === 'en' && topic.shortDescriptionEn}
            {language === 'bn' && topic.shortDescriptionBn}
            {language === 'bilingual' && (
              <>
                <span className="block text-neutral-600 font-medium group-hover:text-neutral-800 transition-colors">{topic.shortDescriptionEn}</span>
                <span className="block text-rose-700 text-[11px] md:text-xs italic font-bold mt-1.5 pl-2 border-l border-rose-300 leading-relaxed bg-rose-50/20 py-0.5 rounded-r">{topic.shortDescriptionBn}</span>
              </>
            )}
          </p>
        </div>

        {/* Footer info Indicator */}
        <div className="mt-6 flex items-center gap-1.5 text-xs text-neutral-500 font-bold group-hover:text-rose-600 transition-colors self-start">
          <span>{getLabel('Study Manual', 'ম্যানুয়াল অধ্যায়ন করুন')}</span>
          <LucideIcons.ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
