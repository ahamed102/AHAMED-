import { useState } from 'react';
import { Topic, CoinInfo } from '../types';
import { POPULAR_COINS } from '../data/topicsData';
import { motion } from 'motion/react';
import { 
  X, 
  Search, 
  HelpCircle, 
  Calculator, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  ShieldAlert, 
  DollarSign, 
  Flame, 
  Info, 
  Check, 
  ArrowRight,
  Shield,
  FileCheck
} from 'lucide-react';

interface ExpandedTopicModalProps {
  topic: Topic;
  onClose: () => void;
  language: 'en' | 'bn' | 'bilingual';
  inlineMode?: boolean;
}

export default function ExpandedTopicModal({ topic, onClose, language, inlineMode = false }: ExpandedTopicModalProps) {
  const [activeTab, setActiveTab] = useState<'read' | 'interact'>('read');
  
  // Interactive 1: Tokens Search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCoin, setSelectedCoin] = useState<CoinInfo | null>(null);

  const filteredCoins = POPULAR_COINS.filter(coin => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Interactive 2: CAGR Compound Wealth Calculator
  const [principal, setPrincipal] = useState(1000); // USD
  const [rate, setRate] = useState(12); // % Annual
  const [years, setYears] = useState(5);
  const [showCalculationDetails, setShowCalculationDetails] = useState(true);

  const calculateCompoundWealth = () => {
    let list = [];
    let current = principal;
    for (let i = 1; i <= years; i++) {
      const interest = current * (rate / 100);
      const next = current + interest;
      list.push({
        year: i,
        startPrincipal: Math.round(current),
        interestEarned: Math.round(interest),
        endBalance: Math.round(next)
      });
      current = next;
    }
    const finalBalance = Math.round(current);
    const simpleInterestTotal = Math.round(principal + (principal * (rate / 100) * years));
    const compoundingBonus = finalBalance - simpleInterestTotal;
    return { list, finalBalance, simpleInterestTotal, compoundingBonus };
  };

  const { list: yearRecords, finalBalance, simpleInterestTotal, compoundingBonus } = calculateCompoundWealth();

  // Interactive 3: Anti-Scam Evaluation Engine
  const SCAM_QUESTIONS_BILINGUAL = [
    {
      id: 'q1',
      en: 'Does the program promise guaranteed positive daily, weekly, or monthly percentage returns?',
      bn: 'প্রোগ্রামটি কি নিশ্চিত দৈনিক, साप्ताहिक বা মাসিক সুনির্দিষ্ট পার্সেন্টেজ মুনাফার প্রতিশ্রুতি দেয়?',
      weight: 25
    },
    {
      id: 'q2',
      en: 'Does the platform require recruiting new subordinate sign-ups to unlock higher commissions, levels, or VIP yields?',
      bn: 'উচ্চ কমিশন, লেভেল বা ভিআইপি মুনাফা আনলক করতে প্ল্যাটফর্মটিতে কি নতুন রেফারেল বা ডাউনলাইন সদস্য যোগ দেওয়ার শর্ত রয়েছে?',
      weight: 25
    },
    {
      id: 'q3',
      en: 'Are the founders completely anonymous or represented by fake stock photos with no verifiable professional history?',
      bn: 'প্রজেক্টের উদ্যোক্তারা কি সম্পূর্ণ বেনামী বা ভুয়া স্টক ফটো ব্যবহার করে কাজ করছে যাদের কোনো পেশাদার ইতিহাস খুঁজে পাওয়া যায় না?',
      weight: 15
    },
    {
      id: 'q4',
      en: 'Does the project force you to send cash via local mobile financial services (MFS like bKash/Nagad) to an unofficial personal/agent number?',
      bn: 'প্রজেক্টটি কি আপনাকে অপ্রাতিষ্ঠানিক ব্যক্তিগত বিকাশ বা নগদ নাম্বারে টাকা বা ডিপোজিট পাঠাতে বাধ্য করে?',
      weight: 15
    },
    {
      id: 'q5',
      en: 'Is there an absence of verified open-source smart contracts or audited public source code repositories?',
      bn: 'সেখানে কি কোনো যাচাইকৃত ওপেন সোর্স স্মার্ট চুক্তি বা অডিট করা পাবলিক সোর্স কোড রিপোজিটরির অভাব রয়েছে?',
      weight: 10
    },
    {
      id: 'q6',
      en: 'Does it compel users to download an obscure side-loaded file application (.apk file) from unofficial websites rather than standard app stores?',
      bn: 'প্লে স্টোর বা অ্যাপ স্টোরে না থেকে এটি কি ব্যবহারকারীকে কোনো সন্দেহজনক লিংক থেকে .apk ফাইল সেটআপ করতে বাধ্য করে?',
      weight: 10
    }
  ];

  const [scamAnswers, setScamAnswers] = useState<Record<string, boolean>>({
    q1: false, q2: false, q3: false, q4: false, q5: false, q6: false
  });

  const calculateScamRisk = () => {
    let score = 0;
    SCAM_QUESTIONS_BILINGUAL.forEach(q => {
      if (scamAnswers[q.id]) {
        score += q.weight;
      }
    });
    return score;
  };

  const riskScore = calculateScamRisk();
  const getRiskDetails = (score: number) => {
    if (score >= 60) {
      return { 
        titleEn: 'EXTREME HIGH RISK PONZI ALERT', 
        titleBn: 'চরম উচ্চ ঝুঁকিপূর্ণ পঞ্জি সতর্কবার্তা',
        color: 'text-red-750 bg-red-50 border-red-200/90 shadow-2xs', 
        icon: Flame, 
        descEn: 'This is a mathematical layout of a classic MLM Scam block! Run immediately and save your funds. These projects collapse within weeks once incoming liquidity halts.',
        descBn: 'এটি নিশ্চিতভাবেই একটি পঞ্জি বা এমএলএম ফাঁদ! নিজের টাকা বাঁচাতে দ্রুত ওই প্ল্যাটফর্ম ত্যাগ করুন। এই ধরণের সাইটগুলো নতুন টাকা আসা থমকে গেলেই বন্ধ হয়ে যায়।'
      };
    }
    if (score >= 30) {
      return { 
        titleEn: 'MEDIUM SUSPICIOUS RED FLAG', 
        titleBn: 'মধ্যम মানের সন্দেহজনক লাল সংকেত',
        color: 'text-amber-800 bg-amber-50 border-amber-205 shadow-2xs', 
        icon: AlertTriangle, 
        descEn: 'Exercise heavy skepticism. Central platforms that mandate direct monetary locking without verifiable decentralized code blocks present exit scam opportunities.',
        descBn: 'অত্যন্ত সতর্ক থাকুন। যেসব কেন্দ্রীয় প্ল্যাটফর্ম কোনো উন্মুক্ত স্মার্ট কন্ট্রাক্ট ছাড়া সরাসরি সাধারণ ডিপি লক করায়, সেগুলো যেকোনো সময় টাকা নিয়ে পালিয়ে যেতে পারে।'
      };
    }
    return { 
      titleEn: 'LOW STRUCTURAL WARNING RISK', 
      titleBn: 'কম কাঠামোগত সুরক্ষার ঝুঁকি',
      color: 'text-rose-700 bg-rose-50 border-rose-200/60 shadow-2xs', 
      icon: CheckCircle, 
      descEn: 'Verify actual code and transaction history. Remember that even genuine protocols carry general system security vulnerabilities.',
      descBn: 'তবুও মূল সোর্স কোড ও ট্রানজেকশন ভালো করে নিজে melodies নিন। মনে রাখবেন সব ক্রিপ্টোকারেনসিতেই কিছু না কিছু বাজারগত ঝুঁকি জড়িয়ে থাকে।'
    };
  };

  const riskResult = getRiskDetails(riskScore);

  // Interactive 4: P2P Safety Auditor
  const [p2pStepAnswers, setP2pStepAnswers] = useState<Record<string, boolean>>({
    step1: false, step2: false, step3: false, step4: false, step5: false
  });

  const p2pStepsBilingual = [
    {
      id: 'step1',
      titleEn: 'Verify Bank Sender Name Matching',
      titleBn: 'ব্যাংক প্রেরকের নামের মিল যাচাই করুন',
      textEn: 'Check if the sending bank account or cash balance sender name matches the buyer\'s verified NID profile on the exchange exactly. Never accept 3rd party deposits.',
      textBn: 'টাকা পাঠানো ব্যাংক অ্যাকাউন্ট বা বিকাশ বিকাশকারীর নামটি এক্সচেঞ্জের ক্রেতার ভেরিফাইড এনআইডি (NID) নামের সাথে হুবহু মিলছে কিনা দেখুন। ৩য় পক্ষের ডিপোজিট কখনোই গ্রহণ করবেন না।'
    },
    {
      id: 'step2',
      titleEn: 'Escrow Lock Verification',
      titleBn: 'এসক্রো লক ভ্যালিডেশন',
      textEn: 'Ensure the crypto asset is securely locked inside the platform\'s public escrow. Never release tokens based on SMS alerts alone; check actual physical banking logs.',
      textBn: 'ক্রিপ্টো সম্পদটি প্ল্যাটফর্মের সর্বজনীন এসক্রোতে সুরক্ষিতভাবে লক রয়েছে কিনা নিশ্চিত হন। শুধুমাত্র এসএমএস দেখে ডলার রিলিজ দেবেন না; আপনার ব্যাংকের মূল লগ নিজে চেক করুন।'
    },
    {
      id: 'step3',
      titleEn: 'Strict Private Key Shield',
      titleBn: 'কঠোর প্রাইভেট কী সুরক্ষা',
      textEn: 'Never release, input, or share your secret 12-to-24 seed phrase word backings on any chat support, form link, or scanning QR code.',
      textBn: 'আপনার ওয়ালেটের ১২ বা ২৪ শব্দের বার কোড ফ্রেম বা ব্যাকআপ পুনরুদ্ধার বাক্যাংশ অন্য কারো সাথে চ্যাটে বা লিংকে শেয়ার করবেন না।'
    },
    {
      id: 'step4',
      titleEn: 'Avoid Cash Handouts / Side Transactions',
      titleBn: 'নগদ গ্রহণ বা সাইড ট্রানজেকশন এড়ানো',
      textEn: 'Perform all settlements strictly within platform-monitored gateways to avoid extortion or fraudulent chargebacks.',
      textBn: 'আইনি ঝামেলা বা প্রতারণামূলক চার্জব্যাক এড়াতে সর্বদা প্ল্যাটফর্মের নিরাপত্তা গেটওয়ের ভেতরই সব লেনদেন সমাধান করুন।'
    },
    {
      id: 'step5',
      titleEn: 'Suspicious Bank Account Remarks',
      titleBn: 'ব্যাংক অ্যাকাউন্টের সন্দেহজনক রিমার্ক সতর্কবার্তা',
      textEn: 'Refuse payments coming with bizarre remarks (like "crypto", "BTC", or platform transaction IDs) which trigger sudden automated anti-laundering bank freezes.',
      textBn: 'রেফারেন্সে "ক্রিপ্টো", "বিটিসি", বা এক্সচেঞ্জের নাম লেখা পেমেন্ট নেওয়া বন্ধ করুন, কারণ এগুলো ব্যাংকের অটোমেটেড সিকিউরিটি অ্যালার্ম এবং পুলিশের ফ্রিজিং লক ট্রিগার করে।'
    }
  ];

  const p2pCompletedCount = Object.values(p2pStepAnswers).filter(Boolean).length;
  const isP2pSafe = p2pCompletedCount === p2pStepsBilingual.length;

  // Interactive 5: Verse Community Blueprint Grid
  const versePillarsBilingual = [
    {
      titleEn: 'Honesty Over Fake Hype',
      titleBn: 'মিথ্যা প্রচারণার বদলে সত্যবাদিতা',
      descriptionEn: 'Unlike false MLM circles, Vertex-driven community networks refuse to promise fixed wealth. Honest risk parameters protect and empower actual, dedicated developers.',
      descriptionBn: 'ভুয়া এমএলএম চক্রের মতো ভার্স-চালিত কমিউনিটি নেটওয়ার্ক কখনই ফিক্সড আয়ের ভূয়া প্রতিশ্রুতি দেয় না। প্রকৃত ঝুঁকিগুলো পরিষ্কারভাবে তুলে ধরাই হলো শিক্ষার আদর্শ।'
    },
    {
      titleEn: 'Cooperative Governance',
      titleBn: 'যৌথ বা সমবায় উন্নয়ন',
      descriptionEn: 'Community growth is propelled collectively. No individual holds absolute centralized execution limits; every member shares unshakeable accountability.',
      descriptionBn: 'কমিউনিটির বৃদ্ধি ঘটে যৌথভাবে। কোনো একজন ব্যক্তির হাতে সম্পূর্ণ নিয়ন্ত্রণ থাকে না; প্রতিটি সদস্য সমান দায়িত্ব ও স্বচ্ছতা মেনে চলে।'
    },
    {
      titleEn: 'Peer-to-Peer Educational Rails',
      titleBn: 'পিয়ার-টু-پیয়ার শিক্ষামূলক গাইড',
      descriptionEn: 'Empowering young designers and builders in Bangladesh with genuine, verified information to dodge systemic internet scams.',
      descriptionBn: 'বাংলাদেশে তরুণ ডিজাইনার এবং ডেভেলপারদের সঠিক ও পরীক্ষিত তথ্য দিয়ে সাহায্য করা যাতে তারা বৈশ্বিক প্রযুক্তি স্ক্যামগুলো সহজে এড়াতে পারে।'
    }
  ];

  // Interactive 6: Web2 vs Web3 Direct Breakdown
  const comparisonDataBilingual = [
    {
      aspectEn: 'Governance structure',
      aspectBn: 'পরিচালন কাঠামো',
      web2En: 'Entirely centralized (board of directors, systemic platform owners)',
      web2Bn: 'সম্পূর্ণরূপে केंद्रीय নিয়ন্ত্রিত (বোর্ড অফ ডিরেক্টর এবং প্ল্যাটফর্মের একক মালিক)',
      web3En: 'Decentralized nodes, open validators, community DAOs',
      web3Bn: 'বিকেন্দ্রীকৃত নোড, উন্মুক্ত ভ্যালিডেটর এবং কমিউনিটি চালিত ডিএও (DAO)'
    },
    {
      aspectEn: 'Data and identity privacy',
      aspectBn: 'তথ্য ও পরিচয় নিরাপত্তা',
      web2En: 'Monetized & sold to advertisement corporations without permission',
      web2Bn: 'ব্যবহারকারীর সম্মতি ছাড়াই ব্যক্তিগত ডেটা বিক্রি ও বিজ্ঞাপন সংস্থাকে লিজ দেওয়া',
      web3En: 'Secured via asymmetric public-private key cryptography',
      web3Bn: 'অ্যাসিমেটট্রিক পাবলিক-প্রাইভেট কী ক্রিপ্টোগ্রাফি দিয়ে সম্পূর্ণ সুরক্ষিত'
    },
    {
      aspectEn: 'Transaction settlements',
      aspectBn: 'অর্থ নিষ্পত্তি ও ফি সুবিধা',
      web2En: 'High platform fees, complex clearance, banking middlemen bottlenecks',
      web2Bn: 'উচ্চ চার্জ ফি, দীর্ঘ জটিল প্রসেস এবং ব্যাংকিং গেটওয়ের দীর্ঘসূত্রিতা',
      web3En: 'Direct peer-to-peer trustless cryptography settlements in minutes',
      web3Bn: 'কোনো মধ্যস্থতাকারী ছাড়াই সরাসরি ব্লকচেইনে কয়েক মিনিটে নিরাপদ নিষ্পত্তি'
    },
    {
      aspectEn: 'User role',
      aspectBn: 'ব্যবহারকারীর নিজস্ব ভূমিকা',
      web2En: 'Passive product / source of metadata',
      web2Bn: 'নিষ্ক্রিয় একজন পণ্য বা অন্য কোম্পানির মুনাফা সংগ্রহের উৎস মাত্র',
      web3En: 'Active stakeholder, partner, and network owner',
      web3Bn: 'সক্রিয় অংশীদার, নেটওয়ার্কের সহ-মালিক এবং স্বাধীন স্বত্বাধিকারী'
    }
  ];

  // Dynamic label helpers based on selected language
  const getLabel = (enVal: string, bnVal: string) => {
    if (language === 'en') return enVal;
    if (language === 'bn') return bnVal;
    return `${enVal} / ${bnVal}`;
  };

  const contentBody = (
    <div 
      className={`relative w-full max-w-4xl bg-white border border-rose-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col ${inlineMode ? '' : 'max-h-[90vh]'}`}
    >
      {/* Header Block */}
      <div className="flex items-center justify-between p-6 border-b border-rose-100 bg-rose-50/40">
          <div className="flex flex-col gap-1.5 max-w-[85%]">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-rose-750 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-450/30 self-start">
              {topic.category}
            </span>
            <h2 className="text-lg md:text-2xl font-black text-neutral-900 tracking-tight leading-snug">
              {language === 'en' && topic.titleEn}
              {language === 'bn' && topic.titleBn}
              {language === 'bilingual' && (
                <>
                  <span className="block text-neutral-900 text-base md:text-xl font-black">{topic.titleEn}</span>
                  <span className="block text-rose-650 text-xs md:text-sm font-bold mt-1.5">{topic.titleBn}</span>
                </>
              )}
            </h2>
          </div>
          <button 
            id="close-modal-button"
            onClick={onClose}
            className="rounded-xl bg-rose-100 text-rose-700 hover:text-rose-950 hover:bg-rose-200/80 p-2.5 transition-colors self-start shadow-2xs"
          >
            <X size={18} />
          </button>
        </div>

        {/* Dynamic Tabs Selector */}
        {topic.interactiveType && (
          <div className="flex border-b border-rose-100 bg-neutral-50 px-6 py-2 gap-4 shadow-2xs">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-4 py-2 text-xs uppercase font-black tracking-widest transition-colors relative ${activeTab === 'read' ? 'text-rose-600' : 'text-neutral-500 hover:text-neutral-800'}`}
            >
              {getLabel('Manual Study', 'ম্যানুয়াল স্টাডি')}
              {activeTab === 'read' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('interact')}
              className={`px-4 py-2 text-xs uppercase font-black tracking-widest transition-colors relative flex items-center gap-1.5 ${activeTab === 'interact' ? 'text-rose-700' : 'text-neutral-500 hover:text-neutral-800'}`}
            >
              {getLabel('Interactive Utility Tool', 'ইন্টারেক্টিভ ইউটিলিটি')}
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
              {activeTab === 'interact' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600" />
              )}
            </button>
          </div>
        )}

        {/* Main Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-neutral-700 leading-relaxed text-sm md:text-base bg-white">
          {activeTab === 'read' ? (
            <div className="space-y-6">
              {topic.paragraphs.map((p, idx) => (
                <div key={idx} className="border-b border-rose-100/60 pb-5 last:border-b-0 last:pb-0">
                  {language === 'en' && (
                    <p className="text-neutral-700 font-normal leading-relaxed">{p.en}</p>
                  )}
                  {language === 'bn' && (
                    <p className="text-neutral-700 font-normal leading-relaxed">{p.bn}</p>
                  )}
                  {language === 'bilingual' && (
                    <div className="space-y-2">
                      <p className="text-neutral-850 font-normal leading-relaxed">{p.en}</p>
                      <p className="text-rose-800 text-sm italic font-semibold leading-relaxed border-l-2 border-rose-350 pl-4 bg-rose-500/5 py-2.5 rounded-r">
                        {p.bn}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Extra default note */}
              <div className="mt-8 pt-6 border-t border-rose-100 flex items-start gap-3 bg-neutral-50 p-4 rounded-xl">
                <Info size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-550 space-y-1">
                  <span className="font-bold text-neutral-900 block">
                    {getLabel('Bangladeshi Educational Shield Directive:', 'বাংলাদেশী শিক্ষামূলক ঢাল নির্দেশনা:')}
                  </span>
                  <span>
                    {getLabel(
                      'This comprehensive reading material is built to encourage logical understanding and mitigate risks of digital asset scams. Always handle local capital within regulatory limits.',
                      'এই শিক্ষামূলক নির্দেশিকাটি মূলত যৌক্তিক বুদ্ধিমত্তা বাড়াতে এবং আইটি স্ক্যামগুলো এড়াতে তৈরি করা হয়েছে। দেশের আইনকে সর্বদা সর্বোচ্চ শ্রদ্ধা করুন।'
                    )}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* INTERACTIVE 1: TOKENS LIST */}
              {topic.interactiveType === 'tokens' && (
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-50 p-4 rounded-xl border border-rose-105">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-neutral-900">
                        {getLabel('Top 40 Token Directory Explorer', 'টপ ৪০ টোকেন ডিরেক্টরি')}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        {getLabel('Direct reference guide listing structural use cases for popular cryptographic protocols.', 'জনপ্রিয় ক্রিপ্টোগ্রাফিক প্রোটোকল সমূহের কাজের ক্ষেত্র সহজে জানার নির্দেশিকা।')}
                      </p>
                    </div>
                    <div className="relative">
                      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input 
                        type="text"
                        placeholder={getLabel('Search key tokens (e.g., BTC, SOL)', 'টোকেন খুঁজুন (যেমন BTC, SOL)')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white border border-neutral-200 rounded-lg px-4 py-2 pl-9 text-xs focus:outline-none focus:border-rose-500 w-full md:w-64 text-neutral-850"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2">
                    {filteredCoins.map((coin) => (
                      <div 
                        key={coin.rank}
                        onClick={() => setSelectedCoin(coin)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedCoin?.symbol === coin.symbol ? 'bg-rose-500/5 border-rose-450' : 'bg-white border-neutral-200/80 hover:border-rose-300 hover:bg-rose-50/15'}`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[10px] font-mono text-neutral-500 font-bold">#{coin.rank}</span>
                            <div>
                              <span className="font-bold text-neutral-900 block">{coin.name}</span>
                              <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">{coin.symbol}</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-20 py-0.5 rounded border border-rose-200/60 font-mono">
                            {coin.type.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedCoin && (
                    <div 
                      className="bg-rose-500/5 border border-rose-200 p-5 rounded-xl space-y-2 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-rose-700 tracking-wider">
                          {getLabel('Asset Properties', 'সম্পদ বৈশিষ্ট্য')}
                        </span>
                        <button onClick={() => setSelectedCoin(null)} className="text-xs text-neutral-500 hover:text-rose-700 font-bold underline">
                          {getLabel('Clear selection', 'নির্বাচন মুছুন')}
                        </button>
                      </div>
                      <h4 className="text-lg font-black text-neutral-950">{selectedCoin.name} ({selectedCoin.symbol})</h4>
                      <p className="text-xs text-neutral-600">
                        <strong className="text-rose-705 font-bold">{getLabel('Structural Category:', 'শ্রেণিবিভাগ:')} </strong>
                        {selectedCoin.type}
                      </p>
                      <div className="text-sm text-neutral-750 bg-white p-3.5 rounded-lg border border-rose-100 mt-2 space-y-1.5 shadow-2xs">
                        <strong className="text-rose-700 text-xs block mb-1 uppercase font-black tracking-wider">
                          {getLabel('Detailed Utility / কাজের ক্ষেত্র:', 'বিস্তারিত কাজের ক্ষেত্র:')}
                        </strong>
                        {language === 'en' && <p>{selectedCoin.useCaseEn}</p>}
                        {language === 'bn' && <p>{selectedCoin.useCaseBn}</p>}
                        {language === 'bilingual' && (
                          <div className="space-y-1">
                            <p className="text-neutral-800 text-xs">{selectedCoin.useCaseEn}</p>
                            <p className="text-rose-700 text-xs italic font-semibold border-l border-rose-300 pl-2 mt-1">{selectedCoin.useCaseBn}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* INTERACTIVE 2: COMPOUND INTEREST CAGR CALCULATOR */}
              {topic.interactiveType === 'calculator' && (
                <div className="space-y-6">
                  <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-150 text-center md:text-left">
                    <h4 className="text-sm font-black uppercase tracking-wider text-rose-900">
                      {getLabel('CAGR Multi-Year Compound Yield Simulator', 'চক্রবৃদ্ধি মুনাফা সিমুলেটর')}
                    </h4>
                    <p className="text-xs text-neutral-550 mt-1">
                      {getLabel('Examine how exponential returns yield wealth over compounding cycles compared to simple interest.', 'খতিয়ে দেখুন কীভাবে সময়ের সাথে চক্রবৃদ্ধি সুদ সাধারণ সুদের তুলনায় অর্থ বহুগুণ বৃদ্ধি করে।')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Inputs */}
                    <div className="space-y-4 bg-neutral-50 p-5 rounded-xl border border-rose-100/60 shadow-2xs">
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-wider text-neutral-600 font-mono">
                          {getLabel('Principal (USD)', 'বিনিয়োগ (USD)')}
                        </label>
                        <input 
                          type="number"
                          value={principal}
                          onChange={(e) => setPrincipal(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:border-rose-500 font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-wider text-neutral-600 font-mono">
                          {getLabel('Annual APY (%)', 'বার্ষিক লাভ (%)')}
                        </label>
                        <input 
                          type="number"
                          value={rate}
                          onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:border-rose-500 font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-wider text-neutral-600 font-mono">
                          {getLabel('Holding Period (Years)', 'সময়কাল (বছর)')}
                        </label>
                        <select 
                          value={years}
                          onChange={(e) => setYears(Number(e.target.value))}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:border-rose-500"
                        >
                          {[1, 2, 3, 4, 5, 10, 15, 20].map(y => (
                            <option key={y} value={y}>{y} {getLabel('Years', 'বছর')}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Result Stats */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-150 space-y-1">
                          <span className="text-[10px] uppercase font-black text-rose-700 tracking-widest block font-mono">
                            {getLabel('Compounded Final Wealth', 'চক্রবৃদ্ধিসহ মোট সম্পদ')}
                          </span>
                          <span className="text-3xl font-black font-mono text-rose-600 block">${finalBalance.toLocaleString()}</span>
                          <span className="text-xs text-neutral-500 block">
                            {getLabel('Aggregated with annual cycles', 'বাৎসরিক চক্রবৃদ্ধি সুদের হিসাব')}
                          </span>
                        </div>
                        <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-1 shadow-2xs">
                          <span className="text-[10px] uppercase font-black text-neutral-500 tracking-widest block font-mono">
                            {getLabel('Simple Return Total', 'সাধারণ সুদে মোট লাভ')}
                          </span>
                          <span className="text-xl font-black font-mono text-neutral-700 block">${simpleInterestTotal.toLocaleString()}</span>
                          <span className="text-xs text-neutral-500 block">
                            {getLabel('Compounding Bonus:', 'চক্রবৃদ্ধির অতিরিক্ত বোনাস:')} <strong className="text-rose-650 font-black font-mono">+{compoundingBonus.toLocaleString()}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="flex border-t border-rose-100 pt-4">
                        <button 
                          onClick={() => setShowCalculationDetails(!showCalculationDetails)}
                          className="text-xs text-rose-600 group flex items-center gap-1.5 hover:underline font-bold"
                        >
                          {showCalculationDetails ? getLabel('Hide detailed math', 'বিস্তারিত হিসাব লুকান') : getLabel('Show year-by-year calculations', 'বছরভিত্তিক বিস্তারিত হিসাব দেখুন')} 
                          <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform text-rose-550" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {showCalculationDetails && (
                    <div 
                      className="bg-neutral-50 border border-rose-150 rounded-xl overflow-hidden shadow-2xs"
                    >
                      <table className="w-full text-xs text-left">
                        <thead className="bg-rose-50 uppercase text-rose-800 font-bold border-b border-rose-150">
                          <tr>
                            <th className="p-3">{getLabel('Year', 'বছর')}</th>
                            <th className="p-3">{getLabel('Initial Principal', 'শুরুর মূলধন')}</th>
                            <th className="p-3">{getLabel('Annual Yield', 'বার্ষিক লাভ')}</th>
                            <th className="p-3 text-right">{getLabel('Concluding Sum', 'বছরের শেষ ব্যালেন্স')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-rose-100 font-mono">
                          {yearRecords.map((rec) => (
                            <tr key={rec.year} className="hover:bg-rose-500/5">
                              <td className="p-3 text-neutral-500 font-bold">{getLabel(`Year ${rec.year}`, `${rec.year} তম বছর`)}</td>
                              <td className="p-3 text-neutral-600">${rec.startPrincipal.toLocaleString()}</td>
                              <td className="p-3 text-rose-600 font-bold">+{rec.interestEarned.toLocaleString()}</td>
                              <td className="p-3 text-neutral-900 text-right font-black">${rec.endBalance.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* INTERACTIVE 3: ANTI-SCAM EVALUATION ENGINE */}
              {topic.interactiveType === 'checklist' && (
                <div className="space-y-6">
                  <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-155">
                    <h4 className="text-sm font-black uppercase tracking-wider text-rose-900">
                      {getLabel('Public Protection Audit Engine', 'জনসাধারণের সুরক্ষা অডিট স্ক্যানার')}
                    </h4>
                    <p className="text-xs text-neutral-550 mt-1">
                      {getLabel('Check critical warning signs of MLM and pyramid schemes targeting Bangladeshi citizens.', 'বাংলাদেশী নাগরিকদের প্রতারিত করতে এমএলএম বা পঞ্জি স্কিমসমূহের ব্যবহৃত ফাঁদ বা সতর্কবার্তা মেলান।')}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {SCAM_QUESTIONS_BILINGUAL.map((q) => (
                      <div 
                        key={q.id}
                        onClick={() => setScamAnswers(p => ({ ...p, [q.id]: !p[q.id] }))}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-4 ${scamAnswers[q.id] ? 'bg-red-500/5 border-red-300 shadow-2xs' : 'bg-white border-neutral-200 hover:border-rose-350 hover:bg-rose-50/10'}`}
                      >
                        <div className={`mt-0.5 h-4.5 w-4.5 rounded border border-neutral-450 flex items-center justify-center shrink-0 ${scamAnswers[q.id] ? 'bg-red-500 border-red-500 text-white' : ''}`}>
                          {scamAnswers[q.id] && <Check size={12} className="stroke-[3]" />}
                        </div>
                        <div className="select-none text-xs md:text-sm font-semibold">
                          {language === 'en' && <p className="text-neutral-800">{q.en}</p>}
                          {language === 'bn' && <p className="text-neutral-800">{q.bn}</p>}
                          {language === 'bilingual' && (
                            <>
                              <p className="text-neutral-850 font-bold">{q.en}</p>
                              <p className="text-rose-750 text-xs italic font-semibold border-t border-rose-100 pt-1.5 mt-1.5">{q.bn}</p>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Anti-Scam Audit Risk Score meter */}
                  <div className={`p-5 rounded-2xl border ${riskResult.color} flex flex-col md:flex-row items-start gap-4 transition-all duration-300`}>
                    <riskResult.icon className="shrink-0 mt-1" size={28} />
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xl font-black">{riskScore}%</span>
                        <h5 className="font-black text-sm uppercase tracking-wide">{getLabel(riskResult.titleEn, riskResult.titleBn)}</h5>
                      </div>
                      <p className="text-xs md:text-sm font-medium leading-relaxed">
                        {getLabel(riskResult.descEn, riskResult.descBn)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* INTERACTIVE 4: P2P SAFETY AUDITOR */}
              {topic.interactiveType === 'p2p-safety' && (
                <div className="space-y-6">
                  <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-150">
                    <h4 className="text-sm font-black uppercase tracking-wider text-rose-900">
                      {getLabel('P2P Bank Account Guardian Audit', 'পি২পি ব্যাংক অ্যাকাউন্ট গার্ডিয়ান অডিট')}
                    </h4>
                    <p className="text-xs text-neutral-550 mt-1">
                      {getLabel('Perform a mock verification routine on safety vectors before confirming digital asset exchange settlements inside Bangladesh.', 'বাংলাদেশে ক্রিপ্টোকারেন্সি লেনদেনের আইনি ও ব্যাংক ফ্রিজিং হাত থেকে বাঁচতে এই ৫টি নিরাপত্তা নীতি সর্বদা অডিট করুন।')}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {p2pStepsBilingual.map((step) => (
                      <div 
                        key={step.id}
                        onClick={() => setP2pStepAnswers(p => ({ ...p, [step.id]: !p[step.id] }))}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-4 ${p2pStepAnswers[step.id] ? 'bg-rose-550/5 border-rose-450 shadow-2xs' : 'bg-white border-neutral-200 hover:border-rose-300 hover:bg-rose-50/10'}`}
                      >
                        <div className={`mt-0.5 h-4.5 w-4.5 rounded-full border border-neutral-450 flex items-center justify-center shrink-0 ${p2pStepAnswers[step.id] ? 'bg-rose-600 border-rose-600 text-white' : ''}`}>
                          {p2pStepAnswers[step.id] && <Check size={11} className="stroke-[3]" />}
                        </div>
                        <div className="select-none text-xs md:text-sm font-semibold space-y-1">
                          <h5 className="font-extrabold text-neutral-900">{getLabel(step.titleEn, step.titleBn)}</h5>
                          <p className="text-neutral-550 text-xs md:text-sm font-medium">
                            {language === 'en' && step.textEn}
                            {language === 'bn' && step.textBn}
                            {language === 'bilingual' && (
                              <>
                                <span className="block text-neutral-600 font-medium">{step.textEn}</span>
                                <span className="block text-rose-700 italic border-t border-rose-100/50 pt-1 mt-1 font-semibold">{step.textBn}</span>
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* P2P Safety score feedback box */}
                  <div className={`p-4 rounded-xl border ${isP2pSafe ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-amber-50 border-amber-250 text-amber-850'} flex items-start gap-3`}>
                    <Shield className="shrink-0 mt-0.5 text-inherit" size={18} />
                    <div className="text-xs space-y-1 text-inherit font-semibold">
                      <span className="font-black uppercase tracking-wider block">
                        {isP2pSafe 
                          ? getLabel('P2P SAFETY AUDIT PERFECTLY PASSED', 'পি২পি সুরক্ষা অডিটে সম্পূর্ণ নিরাপদ') 
                          : getLabel(`P2P SHIELD UNSIGNED (${p2pCompletedCount}/${p2pStepsBilingual.length} Checked)`, `পি২পি স্ক্রিন আনসাইনড (${p2pCompletedCount}/${p2pStepsBilingual.length} ভেরিফাইড)`)
                        }
                      </span>
                      <span className="font-medium">
                        {isP2pSafe 
                          ? getLabel('Excellent. You have checked all primary security vectors. Always remember that holding key files physically and cross-referencing sender accounts protects your local savings.', 'অসাধারণ! আপনি লেনদেনের মূল নিরাপত্তা বাটনগুলো মেলাতে পেরেছেন। সবসময় মনে রাখবেন ৩য় পক্ষ থেকে বিকাশ বা ব্যাংকিং পেমেন্ট গ্রহণ না করাই সেরা সুরক্ষা।')
                          : getLabel('Please carefully review and confirm all safety vectors before authorizing local P2P exchanges to avoid funds recovery disputes or banking blocks.', 'লেনদেন সফল করার আগে অনুগ্রহ করে বাটনগুলোতে ক্লিক করে সকল নিরাপত্তা নীতিগুলো পুনরায় নিশ্চিত করে নিন।')
                        }
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* INTERACTIVE 5: VERSE COMMUNITY GUIDELINES */}
              {topic.interactiveType === 'verse-guide' && (
                <div className="space-y-6">
                  <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-150 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Users className="text-rose-600 shrink-0" size={24} />
                      <div>
                        <h4 className="font-black text-sm uppercase tracking-wider text-rose-900 font-mono">
                          {getLabel('The Verse Community Design Standard', 'ভার্স কমিউনিটির মূল ভিত্তি')}
                        </h4>
                        <p className="text-xs text-neutral-600 font-bold">
                          {getLabel('An organic network built on mutual honesty and zero promotion promises.', 'পারস্পরিক সততা এবং জিরো-প্রমোশন নীতির ওপরে গড়ে ওঠা একটি সামাজিক নিরাপদ আশ্রয়স্থল।')}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium">
                      {getLabel(
                        'While general groups focus on trading signals and financial promises, Verse set an outstanding local benchmark: growing organically through rigorous safety training, shared administrative responsibility, and absolute transparent parameters.',
                        'ফোরামের সাধারণ সাইটগুলো যখন ক্যাসিনো বা সিগন্যাল রিফারেলে ব্যস্ত থাকে, তখন ভার্স স্থানীয়ভাবে এক অসাধারণ দৃষ্টান্ত স্থাপন করেছে: সততা, প্রফেশনাল ট্রেনিং এবং সম্পূর্ণ বিনামূল্যে সচেতনতা গাইড বিতরণের মাধ্যমে।'
                      )}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {versePillarsBilingual.map((p, idx) => (
                      <div key={idx} className="bg-white border border-rose-100 p-4 rounded-xl space-y-2 shadow-2xs">
                        <span className="text-[10px] font-mono font-black text-rose-600 tracking-widest uppercase">
                          {getLabel(`Pillar ${idx + 1}`, `${idx + 1} তম স্তম্ভ`)}
                        </span>
                        <h5 className="font-extrabold text-neutral-900 text-sm">
                          {getLabel(p.titleEn, p.titleBn)}
                        </h5>
                        <p className="text-[11px] text-neutral-600 leading-relaxed font-medium">
                          {language === 'en' && p.descriptionEn}
                          {language === 'bn' && p.descriptionBn}
                          {language === 'bilingual' && (
                            <>
                              <span className="block text-neutral-800 mb-1 font-normal">{p.descriptionEn}</span>
                              <span className="block text-rose-700 font-bold italic border-t border-rose-100/60 pt-1 mt-1">{p.descriptionBn}</span>
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERACTIVE 6: WEB2 vs WEB3 COMPARISON */}
              {topic.interactiveType === 'web-compare' && (
                <div className="space-y-6">
                  <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-100 shadow-2xs">
                    <h4 className="text-sm font-black uppercase tracking-wider text-neutral-900 font-mono">
                      {getLabel('Comparative Paradigm Matrix', 'তুলনামূলক বৈশিষ্ট্য ম্যাট্রিক্স')}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      {getLabel('Explore structural limits and ownership differences between traditional Web2 databases and decentralized Web3 ledgers.', 'প্রচলন সামাজিক ডেটাবেসের সাথে ভবিষ্যতের বিকেন্দ্রীকৃত মালিকানার মূল পার্থক্যগুলো দেখুন।')}
                    </p>
                  </div>

                  <div className="border border-rose-150 rounded-xl overflow-hidden bg-white overflow-x-auto shadow-2xs">
                    <table className="w-full text-xs text-left min-w-[500px]">
                      <thead className="bg-rose-50 text-rose-800 uppercase font-black tracking-wider border-b border-rose-150 font-mono">
                        <tr>
                          <th className="p-3.5">{getLabel('Structural Aspect', 'তুলনামূলক ক্ষেত্র')}</th>
                          <th className="p-3.5">{getLabel('Centralized Web2', 'প্রচলিত ওয়েব২')}</th>
                          <th className="p-3.5 text-rose-700 font-extrabold">{getLabel('Decentralized Web3 / Verse', 'বিকেন্দ্রীকৃত ওয়েব৩')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rose-100 leading-relaxed text-neutral-750 font-semibold">
                        {comparisonDataBilingual.map((row, i) => (
                           <tr key={i} className="hover:bg-rose-500/5 transition-colors">
                             <td className="p-3.5 font-black text-neutral-900 uppercase tracking-tighter">
                                {getLabel(row.aspectEn, row.aspectBn)}
                             </td>
                             <td className="p-3.5 text-neutral-500 font-normal">
                               {getLabel(row.web2En, row.web2Bn)}
                             </td>
                             <td className="p-3.5 text-rose-800 font-bold font-normal">
                               {getLabel(row.web3En, row.web3Bn)}
                             </td>
                           </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info container */}
        <div className="p-6 border-t border-rose-100 bg-rose-50/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-xs text-neutral-500 font-bold">
            {getLabel('Topic Focus:', 'মডিউল ক্যাটাগরি:')}{' '}
            <span className="text-rose-700 font-black uppercase tracking-[0.1em]">{topic.category}</span>
          </div>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-rose-600 text-white text-xs font-black rounded-lg hover:bg-rose-500 hover:shadow-md transition-all uppercase tracking-widest self-end sm:self-auto cursor-pointer"
          >
            {getLabel('Acknowledge & Close', 'বুঝেছি এবং বন্ধ করুন')}
          </button>
        </div>
      </div>
  );

  if (inlineMode) {
    return (
      <div className="w-full max-w-4xl mx-auto flex flex-col animate-fade-in" id="topic-detail-inline-container">
        {contentBody}
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/70 backdrop-blur-sm overflow-y-auto"
    >
      {contentBody}
    </motion.div>
  );
}
