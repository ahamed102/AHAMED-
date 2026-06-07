export interface Paragraph {
  en: string;
  bn: string;
}

export interface Topic {
  id: string;
  titleEn: string;
  titleBn: string;
  shortDescriptionEn: string;
  shortDescriptionBn: string;
  category: string;
  iconName: string;
  paragraphs: Paragraph[];
  interactiveType?: 'calculator' | 'tokens' | 'checklist' | 'p2p-safety' | 'verse-guide' | 'web-compare';
}

export interface CoinInfo {
  rank: number;
  name: string;
  symbol: string;
  type: string;
  useCaseEn: string;
  useCaseBn: string;
}
