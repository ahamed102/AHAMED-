import { useState } from 'react';
import { History, Calendar, Newspaper, ArrowRight, ShieldCheck, TrendingUp, AlertTriangle, Lock } from 'lucide-react';

interface NewsTabProps {
  language: 'en' | 'bn' | 'bilingual';
}

export default function NewsTab({ language }: NewsTabProps) {
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<string>('genesis');
  const [activeCycle, setActiveCycle] = useState<'bull2017' | 'bear2018' | 'bull2021' | 'bear2022' | 'bull2024'>('bull2024');

  const getTxt = (en: string, _bn?: string) => en;

  const timelineEvents = [
    {
      id: 'genesis',
      year: '2008 - 2009',
      titleEn: 'Birth of Bitcoin & The Genesis Block',
      titleBn: 'বিটকয়েনের জন্ম ও প্রথম ব্লক',
      icon: History,
      detailsEn: 'Following the global financial mortgage crisis of 2008, Satoshi Nakamoto published the Bitcoin whitepaper. On January 3, 2009, Satoshi mined the "Genesis Block" embedding the headline: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" directly into the blockchain, establishing an inflation-resistant digital savings ledger.',
      detailsBn: '২০০৮ সালের বৈশ্বিক অর্থনৈতিক মন্দার পরেই ছদ্মনাম Satoshi Nakamoto বিটকয়েন হোয়াইট পেপার প্রকাশ করেন। ৩ জানুয়ারী ২০০৯ সালে প্রথম রেকর্ড "জেনেসিস ব্লক" মাইনিং করা হয়। এই ব্লকের হেডিংয়ে সরাসরি ব্রিটিশ সংবাদপত্রের কুখ্যাত ব্যাংক বেইল-আউট খবরের হেডিং গেঁথে দেওয়া হয়, যা মুদ্রাস্ফীতিমুক্ত স্বাধীন বৈশ্বিক ফান্ডের সূচনা করে।',
      impactEn: 'Introduced decentralized digital scarcity for the first time globally.',
      impactBn: 'বিশ্বে প্রথমবারের মতো বিকেন্দ্রীকৃত ডিজিটাল দুষ্প্রাপ্যতার জন্ম দেয়।',
    },
    {
      id: 'mtgox',
      year: '2013 - 2014',
      titleEn: 'The Mt. Gox Exchange Collapse',
      titleBn: 'মাউন্ট গক্স বিস্ফোরণ ও প্রথম ধস',
      icon: AlertTriangle,
      detailsEn: 'Based in Tokyo, Mt. Gox processed over 70% of global Bitcoin transactions. In early 2014, it announced a massive loss of 850,050 BTC in a series of security exploit lapses. It filed for bankruptcy, temporarily sending Bitcoin prices plunging by over 75% and triggering the earliest bear market winter.',
      detailsBn: 'টোকিওভিত্তিক মাউন্ট গক্স তৎকালীন বিশ্বের ৭০% বিটকয়েন ট্রেডিং পরিচালনা করত। ২০১৪ সালের শুরুতে প্রোটোকল লিক ও হ্যাকের মাধ্যমে সাড়ে ৮ লক্ষ বিটকয়েন হারিয়ে দেউলিয়া ঘোষণা করে প্রতিষ্ঠানটি। এটি ক্রিপ্টোর ইতিহাসে প্রথম বড় ধাক্কা যা বিটকয়েনের মূল্য তাৎক্ষণিক ৭৫% হ্রাস করে দেয়।',
      impactEn: 'Highlighted the critical risks of centralized custody and weak security audits.',
      impactBn: 'সেন্ট্রাল এক্সচেঞ্জে ক্রিপ্টো জমা রাখার দুর্বলতা উম্মোচিত করে।',
    },
    {
      id: 'ethereum',
      year: '2015',
      titleEn: 'Smart Contracts programmable revolution',
      titleBn: 'ইথারিয়াম ও স্মার্ট চুক্তির বৈপ্লবিক সূচনা',
      icon: ShieldCheck,
      detailsEn: 'Vitalik Buterin authored Ethereum, introducing a fully programmable blockchain. Instead of simple P2P transfer, developers can write logic contracts for decentralized programs (dApps). Ethereum spawned the ICO boom, automated borrow/lend protocols, and expanded Web3 horizons.',
      detailsBn: 'ভিটালিক বুটেরিনের হাত ধরে জন্ম নেয় ইথারিয়াম। এর চমৎকার স্মার্ট কন্ট্রাক্ট প্রোগ্রামিং ভাষা ইন্টারনেটের যেকোনো লজিককে ব্লকচেইনে স্থাপন করতে বাধ্য করে। এর ফলেই পরবর্তীতে dApps, ডেক্স এবং জটিল ওয়েব৩ সফটওয়্যার নির্মাণ সম্ভব হয়ে ওঠে।',
      impactEn: 'Transitioned blockchain from a ledger into an active global computer application platform.',
      impactBn: 'ব্লকচেইনকে সাধারণ খাতা থেকে একটি সক্রিয় বৈশ্বিক প্রোগ্রামিং প্ল্যাটফর্মে রূপান্তরিত করে।',
    },
    {
      id: 'bull2017',
      year: '2017 - 2018',
      titleEn: 'ICO Boom & The $20K Milestone',
      titleBn: 'আইসিও জোয়ার এবং প্রথম বিশ হাজার ডলার মাইলফলক',
      icon: TrendingUp,
      detailsEn: 'In 2017, thousands of startups successfully raised funds using Ethereum tokens in the ICO boom. Bitcoin hit its historic high of $20,000 in December and public retail enthusiasm spiked. However, many projects lacked actual code, leading to the brutal "Crypto Winter" of 2018 where prices crashed 85%.',
      detailsBn: '২০১৭ সালে হাজার হাজার নতুন ক্রিপ্টোকারেন্সি কোম্পানি আইসিও (ICO)-র মাধ্যমে লাখ লাখ ডলার ফান্ডিং সংগ্রহ করে। প্রথমবার বিটকয়েন ছুঁয়ে ফেলে ২০,০০০ ইউএস ডলার। তবে প্রচুর ভুয়া প্রজেক্টের কারণে ২০১৮ সালে ধস নেমে আসে এবং অধিকাংশ টোকেন ৯০% এর বেশি দাম হারায়।',
      impactEn: 'Weeded out speculative shell projects, forcing real builders to focus on DeFi.',
      impactBn: 'অসার ও ফালতু প্রজেক্ট সরিয়ে প্রকৃত ডেভেলপারদের বাস্তব ইউজেবল কন্ট্রাক্ট তৈরিতে বাধ্য করে।',
    },
    {
      id: 'ftxcollapse',
      year: '2022',
      titleEn: 'The Terra Luna Collapse & FTX Liquidation',
      titleBn: 'টেরা লুনা ধস এবং এফটিএক্স জালিয়াতির সমাপ্তি',
      icon: AlertTriangle,
      detailsEn: 'The $40 Billion algorithmic stablecoin Terra USD (UST) lost its dollar peg, triggering a contagion that crashed multiple hedge funds. Months later, FTX—the worlds premier exchange led by Sam Bankman-Fried—was exposed for diverting customer deposits to cover trading losses. FTX folded, sending SBF to prison for fraud.',
      detailsBn: 'বিশাল ৪০ বিলিয়ন ডলারের টেরা লুনা প্রজেক্ট সয়ংক্রিয় এলগরিদম ব্যর্থতায় রাতারাতি শূন্যে নেমে আসে। এর কয়েকমাস পর বিশ্বের তৎকালীন সেরা ক্রিপ্টো এক্সচেঞ্জ এফটিএক্স-এর সিইও স্যাম ব্যাংকসম্যান-ফ্রিডের বড় জালিয়াতি ধরা পড়ে। গ্রাহকের ডলার সরিয়ে অন্য ফান্ডে ট্রেড করে হেরে যাওয়ায় এফটিএক্স দেউলিয়া হয় এবং স্যামের ২৫ বছরের জেল হয়।',
      impactEn: 'Forced transparent proof-of-reserves audits across all exchange channels.',
      impactBn: 'বড় বড় এক্সচেঞ্জগুলোকে তাদের কাস্টডি প্রমাণে রিজার্ভ ডাটা লাইভ দেখাতে বাধ্য করে।',
    },
    {
      id: 'etf2024',
      year: '2024 - 2026',
      titleEn: 'ETF Institutional Era & Core Halving',
      titleBn: 'ইটিএফ প্রাতিষ্ঠানিক অনুমোদন এবং ২০২৪ হালভিং',
      icon: ShieldCheck,
      detailsEn: 'In January 2024, the US SEC officially approved Spot Bitcoin ETFs, allowing Wall Street giants (BlackRock, Fidelity) to purchase billions of actual Bitcoins directly for institutional legacy clients. Coupled with the April 2024 Bitcoin block reward Halving, prices broke above $73,500 setting massive record highs.',
      detailsBn: '২০২৪ সালের জানুয়ারিতে মার্কিন নিয়ন্ত্রক সংস্থা আনুষ্ঠানিকভাবে বিটকয়েন ইটিএফ অনুমোদন দেয়। এর ফলে ওয়াল স্ট্রিটের বিশ্বের বৃহত্তম ফান্ড ব্ল্যাকরক ও ফিডেলিটির মাধ্যমে সাধারণ মানুষের সাধারণ শেয়ার মার্কেটের অ্যাকাউন্ট থেকেই বৈধভাবে বিটকয়েন কেনা সহজ হয়। বিটকয়েনের ব্লক রিওয়ার্ড কমে যাওয়ার ফলে এর দাম আকাশচুম্বী মাত্রা লাভ করে।',
      impactEn: 'Legitimize cryptos as a mature, multi-billion financial capital class worldwide.',
      impactBn: 'ক্রিপ্টোকে একটি পরিপক্ক এবং প্রাতিষ্ঠানিকভাবে স্বীকৃত আন্তর্জাতিক সম্পদ শ্রেণী হিসেবে স্থান দেয়।',
    },
  ];

  // Cycles context
  const cycleData = {
    bull2017: {
      type: 'Bull Market',
      typeBn: 'তেজী বাজার',
      duration: '2016 - 2017',
      btcChange: '+$1,000 to $20,000',
      descEn: 'Driven primarily by individual retail speculative buyers registering on early exchanges, and the Ethereum ICO boom allowing easy tokens launch with high hype.',
      descBn: 'প্রথমবারের মতো ইন্টারনেটের সাধারণ খুচরা বিনিয়োগকারীরা বাইন্যান্সের মতো বড় বড় এক্সচেঞ্জ ব্যবহার করে ক্রিপ্টোর প্রতি ঝুঁকেছিলেন এবং লাখ লাখ ডলারের আইসিও ফান্ডিং শুরু হয়েছিল।',
    },
    bear2018: {
      type: 'Bear Market (Crypto Winter)',
      typeBn: 'মন্দা বাজার (ক্রিপ্টো উইন্টার)',
      duration: '2018',
      btcChange: '$20,000 down to $3,100',
      descEn: 'Severe regulatory crackdown across Asia, ban on advertising token listings by Google/Facebook, and collapse of initial scam shell ICO investments.',
      descBn: 'এশীয় দেশগুলোতে ক্রিপ্টো কেনাবেচায় কড়া নিষেধাজ্ঞা জারি হয়, গুগল ও ফেসবুক ক্রিপ্টো বিজ্ঞাপন ব্লক করে এবং কোনো ভালো প্রযুক্তি ছাড়া শুধু হাইপ তোলা প্রজেক্টগুলোর পতন ঘটে।',
    },
    bull2021: {
      type: 'Bull Market',
      typeBn: 'তেজী বাজার',
      duration: '2020 - 2021',
      btcChange: '$9,000 to $69,000',
      descEn: 'Fueled by massive institutional treasury buys (MicroStrategy, Tesla), low global interest rates during Covid, and the DeFi and NFT creation craze globally.',
      descBn: 'করোনাকালীন সময়ে বিশ্বজুড়ে অতিরিক্ত ডলার মুদ্রণ, টেসলা ও মাইক্রোস্ট্র্যাটেজির বিলিয়ন ডলারের বিটকয়েন কেনা এবং এনএফটি ও ডিফাই প্ল্যাটফর্মের ব্যাপক চাহিদায় বাজার অতি তেজী রুপ ধারণ করে।',
    },
    bear2022: {
      type: 'Bear Market',
      typeBn: 'মন্দা বাজার (উইন্টার)',
      duration: '2022 - 2023',
      btcChange: '$69,000 down to $15,500',
      descEn: 'Federal Reserve interest hikes to reduce inflation, combined with absolute fraud explosions by major crypto groups like FTX, Terra Luna, and Celsius.',
      descBn: 'মার্কিন ফেডারেল ব্যাংক সুদের হার বৃদ্ধি করায় মার্কেট থেকে পুঁজি চলে যায়। পাশপাশি টেরা লুনা ধস এবং এফটিএক্স-এর মতো ট্রিলিয়ন চেইনের ভয়াবহ প্রতারণা আমানতকারীদের মনে আস্থার সংকট তৈরি করে।',
    },
    bull2024: {
      type: 'Bull Market (Institutional Peak)',
      typeBn: 'তেজী বাজার (প্রাতিষ্ঠানিক যুগ)',
      duration: '2024 - 2026',
      btcChange: '$25,000 to $100,000+',
      descEn: 'Institutional Wall Street ETF integration. Traditional retirement funds index Bitcoin portfolios directly. Real usability protocols on Layer-2 ecosystems rise.',
      descBn: 'ওয়ালস্ট্রিটে ব্ল্যাকরক ফান্ডের মাধ্যমে কোটিপতি ঐতিহ্যবাহী পেনশনার ও প্রতিষ্ঠানের সরাসরি আগমন ঘটে। এই যুগটি শুধুমাত্র জল্পনা-কল্পনার নয় বরং বড় বড় কোম্পানির দীর্ঘমেয়াদী বিনিয়োগের যুগ।',
    },
  };

  const selectedEvent = timelineEvents.find(e => e.id === selectedTimelineEvent) || timelineEvents[0];

  return (
    <div className="space-y-12 animate-fade-in" id="news-history-view">
      
      {/* Top Section */}
      <div className="bg-[#0e1633] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 rounded-full text-violet-300 font-bold uppercase tracking-widest text-[9.5px] border border-violet-500/20 shadow-sm">
            <Newspaper size={13} className="text-violet-400" />
            <span>{getTxt('Chronological Archives', 'ক্রিপ্টো ইতিহাস ও বৈশ্বিক ডায়েরি')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tight">
            📰 {getTxt('News, Cycles & Timeline', 'ক্রিপ্টোকারেন্সির ইতিহাস ও বাজার চক্র')}
          </h2>
          <p className="text-xs md:text-sm text-blue-250 max-w-3xl leading-relaxed">
            {getTxt(
              'Trace the macroevolution of Bitcoin since Satoshi’s original academic whitepaper. Understand the recurring 4-year halving cycle mechanics and critical regulatory milestones in Bangladesh.',
              '২০০৮ সালে সাতোশি নাকামোতোর হোয়াইট পেপার রিলিজ থেকে শুরু করে বর্তমান সময় পর্যন্ত ব্লকচেইনের বিবর্তন ও ক্রিপ্টো মার্কেটের অলিগলি। বিভিন্ন সাইকেল ও বাংলাদেশ ব্যাংকের নিয়মনীতি বুঝুন।'
            )}
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-[#0a112a] border border-blue-500/15 p-6 md:p-8 rounded-3xl shadow-xl space-y-8">
        <div>
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight italic flex items-center gap-2">
            <Calendar size={18} className="text-cyan-400" />
            {getTxt('Milestone Historical Roadmap', 'ঐতিহাসিক মহাকাব্য ফ্রন্টলাইনস')}
          </h3>
          <p className="text-xs text-blue-300">
            {getTxt('Click any historical epoch to reveal technical deep-dives explaining the outcome.', 'যেকোনো সালে ক্লিক করে জানুন সেসময়ে ক্রিপ্টো জগতে কী ঘটেছিল এবং তার গভীর প্রভাবসমূহ।')}
          </p>
        </div>

        {/* Chronological Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 border-b border-blue-500/10 pb-4">
          {timelineEvents.map((evt) => (
            <button
              key={evt.id}
              onClick={() => setSelectedTimelineEvent(evt.id)}
              className={`px-4 py-2 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                selectedTimelineEvent === evt.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-500 border-indigo-400 text-white shadow-md'
                  : 'bg-[#10193e] border-blue-500/10 text-blue-200 hover:text-white hover:border-blue-500/20'
              }`}
            >
              <span className="font-mono">{evt.year}</span>
            </button>
          ))}
        </div>

        {/* Selected Timeline Card Body */}
        <div className="bg-[#121c43]/85 border-2 border-indigo-500/20 p-6 rounded-2xl relative shadow-md">
          <div className="absolute right-4 top-4 font-mono font-black text-blue-500/20 text-5xl md:text-7xl select-none">
            {selectedEvent.year}
          </div>
          <div className="space-y-4 max-w-4xl relative z-10">
            <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-[10px] font-black uppercase text-indigo-300">
              {getTxt('Historical Fact Sheet', 'ঐতিহাসিক সত্যতা যাচাইপত্র')}
            </div>
            <h4 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight">
              {selectedEvent.titleEn}
            </h4>
            
            <div className="text-xs md:text-sm text-blue-100 leading-relaxed space-y-2">
              <p>{selectedEvent.detailsEn}</p>
            </div>

            <div className="border-t border-blue-500/15 pt-4 flex flex-col md:flex-row md:items-center gap-3">
              <span className="text-[10px] uppercase font-black tracking-widest text-cyan-400">
                {getTxt('Macro Impact Outcome:', 'প্রধান বৈশ্বিক প্রভাব ও অবসান:')}{' '}
              </span>
              <p className="text-xs text-white font-bold bg-blue-950/70 p-2 rounded-lg border border-blue-500/10 flex-1">
                {selectedEvent.impactEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cycle Estimator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Cycle selectors */}
        <div className="lg:col-span-4 bg-[#0a112a] border border-blue-500/15 p-6 rounded-3xl flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp size={16} className="text-emerald-400" />
              {getTxt('Macro Cycles Index', 'বাজারের উত্থান-পতন চক্র সূচক')}
            </h3>
            <p className="text-xs text-blue-350 leading-relaxed">
              {getTxt('Understand market psychology, sentiment, and Bitcoin block reward cycles.', 'ক্রিপ্টো মার্কেট কেন নিয়মিত ৪ বছরের সাইকেল দিয়ে ওঠানামা করে তা বিশ্লেষণ করুন।')}
            </p>
          </div>

          <div className="space-y-2">
            {(Object.keys(cycleData) as Array<keyof typeof cycleData>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCycle(key)}
                className={`w-full text-left p-3 rounded-xl transition-all border text-xs font-black uppercase flex items-center justify-between cursor-pointer ${
                  activeCycle === key
                    ? 'bg-[#101b3e] border-[#10b981]/50 text-emerald-400 shadow-sm'
                    : 'bg-blue-950/40 border-blue-500/5 text-blue-200 hover:text-white'
                }`}
              >
                <span>{cycleData[key].type} ({cycleData[key].duration})</span>
                <ArrowRight size={13} className="text-blue-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Cycle display */}
        <div className="lg:col-span-8 bg-[#0b122f] border-2 border-[#10b981]/15 p-6 md:p-8 rounded-3xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-blue-500/15 pb-4">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#a5b4fc] block">Active Market Phase</span>
                <h4 className="text-lg md:text-xl font-bold uppercase text-white mt-0.5">
                  {getTxt(cycleData[activeCycle].type, cycleData[activeCycle].typeBn)}
                </h4>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono rounded-lg">
                Estimated: {cycleData[activeCycle].duration}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0f1737] p-4.5 rounded-xl border border-blue-500/5">
                <span className="text-[9px] uppercase font-black text-cyan-400 tracking-wider block">Price Volatility Zone (BTC)</span>
                <span className="text-base font-black text-white block mt-1 font-mono">{cycleData[activeCycle].btcChange}</span>
              </div>
              <div className="bg-[#0f1737] p-4.5 rounded-xl border border-blue-500/5">
                <span className="text-[9px] uppercase font-black text-cyan-400 tracking-wider block">Primary Drivers</span>
                <span className="text-[11px] text-blue-200 block mt-1 font-bold">{getTxt('Retail, Liquidity & Hype', 'গ্রাহক ফান্ডিং ও প্রাতিষ্ঠানিক লিকুইডিটি')}</span>
              </div>
            </div>

            <div className="text-xs md:text-sm text-blue-100 leading-relaxed border-l-3 border-[#10b981] pl-4">
              <p>{cycleData[activeCycle].descEn}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-500/5 rounded-xl border border-yellow-500/10 text-xs text-yellow-250 flex items-start gap-2.5">
            <AlertTriangle size={15} className="shrink-0 text-yellow-400 mt-0.5" />
            <div>
              <span className="font-bold block uppercase tracking-wider text-[10px]">{getTxt('Bangladesh Perspective Warning', 'বাংলাদেশ ব্যাংক ও মুদ্রা পাচার সর্তকতা')}</span>
              <p className="text-[11px]">
                {getTxt(
                  'Under Bangladesh foreign exchange regulations, trading crypto with credit cards or out-of-line networks carrying sovereign funds is considered cash flight/money laundering. Use for educational study only.',
                  'বাংলাদেশ ব্যাংকের নিয়ম অনুযায়ী ক্রেডিট কার্ড ব্যবহার করে ক্রিপ্টো ক্রয় করা বা আন্তর্জাতিক হুন্ডির সাথে ক্রিপ্টো জড়িত করা মানি লন্ডারিং অপরাধ হিসেবে গণ্য। তাই যেকোনো ঝুঁকি এড়াতে পড়াশোনার হাতিয়ার হিসেবে দেখুন।'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW FEATURE: INTERACTIVE BITCOIN HALVING SIMULATOR */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-yellow-400 font-mono font-black text-sm">
            ₿
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
              ⚡ {getTxt('Bitcoin Halving & Supply Scarcity Simulator', 'বিটকয়েন হালভিং ও সাপ্লাই হ্রাস ক্যালকুলেটর')}
            </h3>
            <p className="text-xs text-blue-200">
              {getTxt('Simulate how the 4-year halving protocols control deflation rates and block reward miners.', 'প্রতি ৪ বছর পর পর বিটকয়েনের উৎপাদন অর্ধেক হয়ে কীভাবে দুষ্প্রাপ্যতা বৃদ্ধি করে তা নিজের চোখে হিসেব করুন।')}
            </p>
          </div>
        </div>

        {/* Simulator Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { epoch: '1st', year: 2012, reward: '25 BTC', inflation: '12.5%', peakPrice: '$1,100', active: 'Past' },
            { epoch: '2nd', year: 2016, reward: '12.5 BTC', inflation: '4.1%', peakPrice: '$19,800', active: 'Past' },
            { epoch: '3rd', year: 2020, reward: '6.25 BTC', inflation: '1.8%', peakPrice: '$69,000', active: 'Past' },
            { epoch: '4th', year: 2024, reward: '3.125 BTC', inflation: '0.8%', peakPrice: '$73,800', active: 'Current' },
            { epoch: '5th', year: 2028, reward: '1.5625 BTC', inflation: '0.4%', peakPrice: '$150,000+', active: 'Future' },
          ].map((item, index) => {
            const isSelected = selectedTimelineEvent === `halving-${item.year}` || (selectedTimelineEvent === 'genesis' && index === 3);
            return (
              <button
                key={item.year}
                onClick={() => setSelectedTimelineEvent(`halving-${item.year}`)}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-gradient-to-br from-yellow-600/80 to-amber-700/80 border-yellow-400 text-white shadow'
                    : 'bg-[#10193e] border-blue-500/10 text-blue-200 hover:text-white'
                }`}
              >
                <span className="text-[9px] font-mono font-extrabold uppercase bg-black/35 px-1.5 py-0.5 rounded text-yellow-300 block w-fit">
                  {item.epoch} Halving
                </span>
                <span className="text-sm font-black font-mono block mt-1.5">{item.year}</span>
                <span className="text-[10px] text-slate-300 block">Reward: {item.reward}</span>
                <span className="text-[9px] text-cyan-405 block mt-1 font-bold">Inflation: {item.inflation}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Halving Simulator Context View */}
        <div className="bg-[#0a112a] border border-blue-500/15 p-5 rounded-2xl">
          {(() => {
            const currentHalvingYearStr = selectedTimelineEvent.startsWith('halving-') ? selectedTimelineEvent.split('-')[1] : '2024';
            const dataMap: Record<string, { en: string, bn: string, effectEn: string, effectBn: string }> = {
              '2012': {
                en: 'The first halving event occurred at block height 210,000. It sliced the initial mining block rewards from 50 BTC per block down to 25 BTC, initiating the first major retail speculative wave.',
                bn: 'প্রথম বিটকয়েন হালভিং ঘটে ২০১২ সালের নভেম্বরে ২,১০,০০০ ব্লক উচ্চতায়। মাইনারদের উপহার বা ব্লক রিওয়ার্ড ৫০ বিটকয়েন থেকে হ্রাস পেয়ে ২৫ বিটকয়েন হয়।',
                effectEn: 'Bitcoin broke above $1,000 for the first time within a single calendar year.',
                effectBn: 'বিটকয়েন এর ইতিহাসে প্রথমবারের মতো ১,০০০ ইউএস ডলারের ঐতিহাসিক মাইলফলক টপকে যায়।'
              },
              '2016': {
                en: 'At block height 420,000, the mining emission fell from 25 BTC to 12.5 BTC. This catalyzed the viral retail ICO boom and established the first $20,000 market capital peak.',
                bn: '৪,২০,০০০ ব্লক উচ্চতায় দ্বিতীয় হালভিং ঘটে। ব্লক রিওয়ার্ড ২৫ বিটকয়েন থেকে কমে ১২.৫ বিটকয়েন হয়। এটি ২০১৭ সালের আইসিও এবং বিশ হাজার ডলারের তেজী বাজারের ভিত্তি ছিল।',
                effectEn: 'Global institutional eyes began tracking Bitcoin pricing.',
                effectBn: 'বিশ্বব্যাপী বড় বড় প্রফেশনাল ইনভেস্টরদের নজর কাড়তে শুরু করে এই ক্রিপ্টো।'
              },
              '2020': {
                en: 'At block height 630,000, emission fell from 12.5 BTC to 6.25 BTC. This scarcity combined with corporate treasury adoption (Tesla, MicroStrategy) launched Bitcoin to $69,000.',
                bn: '৬,৩০,০০০ ব্লক উচ্চতায় ২০২০ সালের মে মাসে ব্লক রিওয়ার্ড নেমে আসে ৬.২৫ বিটকয়েনে। করোনাকালীন অতিরিক্ত ডলার মুদ্রণ ও বড় কোম্পানিগুলোর দীর্ঘমেয়াদী বাইং-এ দাম ৬৯,০০০ ডলারে পৌঁছায়।',
                effectEn: 'DeFi protocols and NFTs entered prime-time multi-billion dollar markets.',
                effectBn: 'ডিফাই ব্যাংকিং এবং এনএফটি আর্ট বিলিয়ন বিলিয়ন ডলারের বাজারে পরিণত হয়।'
              },
              '2024': {
                en: 'The historic fourth halving in April 2024 at block 840,000 dropped rewards from 6.25 to 3.125 BTC per block. Real on-chain daily production plummeted from 900 BTC daily to only 450 BTC.',
                bn: '২০২৪ সালের এপ্রিলে চতুর্থ হালভিংয়ে ব্লক রিওয়ার্ড ৩.১২৫ বিটকয়েনে নেমে আসে। প্রতিদিনের নতুন বিটকয়েন উৎপাদন ৯০০ টি থেকে এক লাফে কমে মাত্র ৪৫০ টি তে পতিত হয়, যা ভয়াবহ বৈস্ময়িক সংকট ত্বরান্বিত করে।',
                effectEn: 'Institutional Wall Street BlackRock Spot ETFs absorb massive available supplies.',
                effectBn: 'ব্ল্যাকরক ও ফিডেলিটির মতো দৈত্যাকার ফান্ডের অনবরত কেনাকাটায় খোলা বাজারের লিকুইডিটি শুকিয়ে যায়।'
              },
              '2028': {
                en: 'Looking ahead to block 1,050,000, rewards will fall to 1.5625 BTC. The annual inflation of BTC will fall below 0.4%, solidifying its status as the rarest monetary asset on Earth.',
                bn: '২০২৮ সালের প্রজেক্টেড পঞ্চম হালভিংয়ে ব্লক রিওয়ার্ড হবে মাত্র ১.৫৬২৫ বিটকয়েন। বার্ষিক বিটকয়েনের মুদ্রাস্ফীতির হার কমে ০.৪%-এর নিচে নামবে, যা একে সোনার চেয়েও বিরল জিনিসে পরিণত করবে।',
                effectEn: 'Miners will rely predominantly on transaction secondary Gas fees rather than coin subsidy injections.',
                effectBn: 'মাইনাররা নতুন কয়েন পাওয়ার চেয়ে নেটওয়ার্কের লেনদেনের গ্যাস ফি-এর ওপর বেশি নির্ভরশীল হবেন।'
              }
            };
            const currentData = dataMap[currentHalvingYearStr] || dataMap['2024'];
            return (
              <div className="space-y-3 font-sans">
                <div className="flex justify-between items-center border-b border-blue-500/10 pb-2">
                  <span className="text-xs uppercase font-extrabold text-yellow-500 font-mono">Epoch Analysis ({currentHalvingYearStr})</span>
                  <span className="text-[10px] bg-blue-950 font-bold px-2 py-0.5 rounded text-blue-300">Deflationary Protocol Active</span>
                </div>
                <div className="text-xs leading-relaxed text-slate-100">
                  {getTxt(currentData.en, currentData.bn)}
                </div>
                <div className="bg-blue-950/40 p-3 rounded-lg border border-blue-500/10 flex items-start gap-2.5 text-[11px] text-blue-200">
                  <span className="font-extrabold text-[#818cf8] uppercase tracking-wide">Macro Scarcity Effect:</span>
                  <span>{getTxt(currentData.effectEn, currentData.effectBn)}</span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* NEW SECTION: INTERNATIONAL REGULATIONS & BANGLADESH LAW CODES */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2">
            <Lock size={18} className="text-indigo-400" />
            {getTxt('Crypto Legal Policy & Bangladesh Rules', 'ক্রিপ্টো আইনি কাঠামো ও বাংলাদেশের অবস্থান')}
          </h3>
          <p className="text-xs text-blue-200">
            {getTxt('Understand historical policy limits, international guidelines, and local warnings.', 'আন্তর্জাতিক নিয়মনীতি (MiCA, SEC), বাংলাদেশ ব্যাংকের দৃষ্টিভঙ্গি ও আইনি বিধিনিষেধসমূহ জেনে সুরক্ষায় থাকুন।')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-3 shadow">
            <span className="px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 rounded text-[9px] font-black uppercase text-rose-300 tracking-wider">
              BD Foreign Exchange Control
            </span>
            <h4 className="text-xs font-black uppercase text-white font-mono">{getTxt('The 1947 Exchange Act', '১৯৪৭ ফরেন এক্সচেঞ্জ অ্যাক্ট')}</h4>
            <p className="text-[11px] leading-relaxed text-blue-150">
              {getTxt(
                'Trading crypto assets involving sovereign BDT fiat flight violates local bank protocols. Individuals engaged in laundering or multi-level hawala operations are prosecuted under strict anti-money laundering codes.',
                'বৈধ ব্যাংকিং চ্যানেলের বাইরে সাধারণ টাকা ক্রিপ্টোতে রূপান্তরিত করে আন্তর্জাতিকভাবে পাচার করা ১৯৪৭ সালের বৈদেশিক মুদ্রা নিয়ন্ত্রণ আইন ও মানি লন্ডারিং প্রতিরোধ আইনে দণ্ডনীয় অপরাধ।'
              )}
            </p>
          </div>

          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-3 shadow">
            <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] font-black uppercase text-cyan-300 tracking-wider">
              MiCA & European Framework
            </span>
            <h4 className="text-xs font-black uppercase text-white font-mono">{getTxt('MiCA Regulations', 'ইউরোপীয় মি we (MiCA) ফ্রেমওয়ার্ক')}</h4>
            <p className="text-[11px] leading-relaxed text-blue-150">
              {getTxt(
                'Europe introduced the "Markets in Crypto-Assets" (MiCA) bill, forcing stablecoin operators to maintain 1:1 real-world liquid reserves. This prevents collapse contagion and validates clear consumer rights.',
                'ইউরোপে সদ্য পাশ হওয়া MiCA বিলটি বিশ্বজুড়ে একটি যুগান্তকারী নিয়ামক। এটি স্টেবলকয়েন প্রস্তুতকারী কোম্পানিগুলোকে ১:১ ইউএস ডলারের ক্যাশ রিজার্ভ অডিট লাইভ দেখাতে বাধ্য করে।'
              )}
            </p>
          </div>

          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-3 shadow">
            <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[9px] font-black uppercase text-[#818cf8] tracking-wider">
              SEC Securities Testing
            </span>
            <h4 className="text-xs font-black uppercase text-white font-mono">{getTxt('Howey Test Securities', 'মার্কিন হাউই টেস্ট ও রেগুলেশন')}</h4>
            <p className="text-[11px] leading-relaxed text-blue-150">
              {getTxt(
                'The US SEC applies the Howey Test to find whether coins represent investment contracts (securities). Bitcoin is categorized purely as an open commodity, while centralized tokens containing pre-mines face strict scrutiny.',
                'আমেরিকান SEC সিক্রেট প্রজেক্ট টোকেন ও ক্রিপ্টো এক্সচেঞ্জগুলোকে কঠোর জরিমানায় আবদ্ধ করতে হাউই পরীক্ষা ব্যবহার করে। বিটকয়েনকে এখানে মুক্ত পণ্য হিসেবে মানা হলেও বাকিদের কঠোর সিকিউরিটি ল মেনে চলতে হয়।'
              )}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
