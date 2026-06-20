import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  ROW_1_TOPICS,
  ROW_2_TOPICS,
  ROW_3_TOPICS,
  ROW_4_TOPICS,
  ROW_5_TOPICS,
  ROW_6_TOPICS,
  ALL_TOPICS 
} from './data/topicsData';
import { Topic } from './types';
import TopicCard from './components/TopicCard';
import ExpandedTopicModal from './components/ExpandedTopicModal';

// Custom educational tab components
import AcademyTab from './components/AcademyTab';
import NewsTab from './components/NewsTab';
import MarketTab from './components/MarketTab';
import SecurityTab from './components/SecurityTab';
import CommunityTab from './components/CommunityTab';

import { 
  Search, 
  HelpCircle, 
  Compass, 
  Heart,
  FileText,
  BadgeAlert,
  Globe,
  ExternalLink,
  Calendar,
  Clock,
  Languages,
  BookOpen,
  Newspaper,
  TrendingUp,
  ShieldAlert,
  Users,
  Home
} from 'lucide-react';

export default function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'academy' | 'news' | 'market' | 'security' | 'community'>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState<'en' | 'bn' | 'bilingual'>('bilingual');
  const [currentUtcTime, setCurrentUtcTime] = useState('2026-06-07 11:48:00');
  const [bottomUsername, setBottomUsername] = useState('@BitcoinCom');

  // Real-time ticking UTC clock for visual aesthetic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatTime = now.toUTCString().replace('GMT', 'UTC');
      setCurrentUtcTime(formatTime);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter topics based on bilingual title & descriptions and category
  const filteredSearchTopics = ALL_TOPICS.filter(t => 
    t.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.shortDescriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.shortDescriptionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic text helper depending on the active language mode
  const getHelperText = (enVal: string, bnVal: string) => {
    if (language === 'en') return enVal;
    if (language === 'bn') return bnVal;
    return `${enVal} / ${bnVal}`;
  };

  // Safe redirect URL builder helper
  const getRedirectLink = (input: string) => {
    const clean = input.trim();
    if (!clean) return 'https://x.com/BitcoinCom';
    if (clean.startsWith('http://') || clean.startsWith('https://')) {
      return clean;
    }
    // Remove leading @ if present
    const rawUser = clean.startsWith('@') ? clean.slice(1) : clean;
    return `https://x.com/${rawUser}`;
  };

  const handleGetStarted = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setHasStarted(true);
      setIsTransitioning(false);
    }, 1800);
  };

  if (isTransitioning) {
    return (
      <div className="min-h-screen w-full bg-[#030616] flex flex-col justify-center items-center relative overflow-hidden font-sans select-none">
        {/* Ambient subtle blur layer */}
        <div className="absolute inset-0 bg-[#020512] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-550/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-550/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center space-y-10 text-center px-6">
          
          {/* Logo container inside loading phase */}
          <div className="relative p-1 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(34,211,238,0.35)] shrink-0 transform scale-110 animate-bounce">
            <img 
              src="https://i.ibb.co.com/yc1X5cSZ/file-00000000d04c720688326604b1677a03.png" 
              alt="Bangladesh Crypto Currency Portal Logo" 
              className="h-14 w-14 object-contain rounded-lg bg-slate-900 p-1.5 border-0" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Dynamic 5-Color rotating circular segmented spinner */}
          <div className="relative w-28 h-28 flex items-center justify-center select-none pointer-events-none">
            {/* Color 1: Cyan outer wheel segment */}
            <div className="absolute inset-0 rounded-full border-[3.5px] border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '0.8s' }} />
            {/* Color 2: Emerald second ring */}
            <div className="absolute inset-2 rounded-full border-[3.5px] border-t-transparent border-r-emerald-400 border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '1.2s', animationDirection: 'reverse' }} />
            {/* Color 3: Purple third ring */}
            <div className="absolute inset-4 rounded-full border-[3.5px] border-t-transparent border-r-transparent border-b-indigo-500 border-l-transparent animate-spin" style={{ animationDuration: '0.6s' }} />
            {/* Color 4: Amber fourth ring */}
            <div className="absolute inset-6 rounded-full border-[3.5px] border-t-transparent border-r-transparent border-b-transparent border-l-amber-500 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
            {/* Color 5: Rose central core pulse */}
            <div className="absolute inset-8 rounded-full border-[2.5px] border-rose-450 bg-rose-500/20 animate-pulse" />
          </div>

          {/* Web service identity display */}
          <div className="space-y-4 max-w-lg">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase text-white leading-tight drop-shadow-[0_2px_15px_rgba(255,255,255,0.05)]">
              Bangladesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">Crypto</span> Currency
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            <p className="text-[10px] md:text-xs font-bold font-mono text-cyan-400 uppercase tracking-[0.25em] animate-pulse">
              Synchronizing Portal Gateway...
            </p>
          </div>

        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen w-full bg-[#04081c] flex flex-col justify-center items-center relative overflow-hidden font-sans select-none selection:bg-cyan-500 selection:text-white">
        {/* Subtle grid background to make it high tech & premium */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Top-left corner logo */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 z-10">
          <div className="relative p-1 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] shrink-0">
            <img 
              src="https://i.ibb.co.com/yc1X5cSZ/file-00000000d04c720688326604b1677a03.png" 
              alt="Bangladesh Crypto Currency Portal Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg bg-slate-900 p-1 border-0" 
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="hidden sm:inline text-xs font-black uppercase text-cyan-450 tracking-wider font-mono">
            Portal Gateway
          </span>
        </div>

        {/* Central Landing Hero */}
        <div className="relative z-10 text-center max-w-4xl px-6 py-12 flex flex-col items-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-none">
              Bangladesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]">Crypto</span> Currency
            </h1>
          </div>

          {/* Simple informative summary in the center */}
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto bg-[#0b112c]/40 p-5 rounded-2xl border border-blue-500/10">
            A non-profit academic sanctuary. We build active knowledge layers to empower freelancers, investigate scams, and establish peer-to-peer security workflows across structural landscapes.
          </p>

          {/* Centered Spaced Get Started Button */}
          <div className="pt-2">
            <button
              onClick={handleGetStarted}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-2xl shadow-[0_4px_24px_rgba(34,211,238,0.45)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.6)] transform hover:scale-[1.04] active:scale-95 transition-all cursor-pointer border border-cyan-300/30"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Footer Credit of landing Page */}
        <div className="absolute bottom-6 text-center text-[10px] text-slate-500 tracking-wider">
          Proudly Supported by Verse Community
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060a1d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Main Luxury Header Navigation */}
      <header className="border-b border-blue-500/15 bg-[#0b112c]/90 backdrop-blur-md sticky top-0 z-45 px-4 md:px-8 py-4 shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Top Row: Logo, Language Switch & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div 
              className="flex items-center gap-3.5 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => {
                setActiveTab('home');
                setSearchQuery('');
              }}
            >
              {/* Beautiful shiny custom glowing logo container */}
              <div className="relative p-1 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-505 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.55)] animate-pulse shrink-0">
                <img 
                  src="https://i.ibb.co.com/T5Vz7JT/file-0000000099f071fd85bdf42c0cb05613.png" 
                  alt="Bangladesh Crypto Currency Portal Logo" 
                  className="h-11 w-11 object-contain rounded-lg bg-slate-900 p-1 border-0" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-black italic tracking-tighter uppercase text-white leading-none">
                  Bangladesh Crypto Currency
                </h1>
                <p className="text-[10px] md:text-xs tracking-[0.18em] font-bold text-cyan-400 uppercase mt-1">
                  {getHelperText('The Decentralized Knowledge Mainframe', 'বিকেন্দ্রেকৃত জ্ঞান ভাণ্ডার')}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
              {/* Bilingual Mode Toggle Control Panel */}
              <div className="flex bg-[#11193a] p-1 rounded-xl border border-blue-500/20 gap-1 w-full md:w-auto">
                {(['bilingual', 'en', 'bn'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`flex-1 md:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      language === lang
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 text-white shadow-[0_4px_14px_rgba(6,182,212,0.35)]'
                        : 'text-blue-200 hover:text-white hover:bg-blue-900/30'
                    }`}
                  >
                    {lang === 'bilingual' && (
                      <>
                        <Languages size={13} />
                        <span>Bilingual / দ্বিভাষিক</span>
                      </>
                    )}
                    {lang === 'en' && 'English'}
                    {lang === 'bn' && 'বাংলা'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Horizontal Responsive Navigation Tabs */}
          <div className="border-t border-blue-500/10 pt-3 flex items-center overflow-x-auto scrollbar-none no-scrollbar scroll-smooth">
            <nav className="flex gap-2 min-w-max pb-1">
              {[
                { id: 'home', labelEn: 'Home', labelBn: 'হোম', icon: Globe },
                { id: 'academy', labelEn: 'Academy', labelBn: 'ক্রিপ্টো শিক্ষা', icon: BookOpen },
                { id: 'news', labelEn: 'News & History', labelBn: 'সংবাদ ও ইতিহাস', icon: Newspaper },
                { id: 'market', labelEn: 'Market & Trading', labelBn: 'মার্কেট ও ট্রেডিং', icon: TrendingUp },
                { id: 'security', labelEn: 'Security & Tools', labelBn: 'নিরাপত্তা ও টুলস', icon: ShieldAlert },
                { id: 'community', labelEn: 'Community', labelBn: 'বাংলাদেশ কম্যুনিটি', icon: Users },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setSearchQuery(''); // Switch tabs cleanly clearing existing query
                      setSelectedTopic(null); // Return to standard page grids on tab change
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer transition-all border ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 border-cyan-400 text-white shadow-[0_4px_14px_rgba(34,211,238,0.30)]'
                        : 'bg-[#121a3e]/65 border-blue-500/5 text-blue-200 hover:text-white hover:border-blue-500/15'
                    }`}
                  >
                    <TabIcon size={14} className={isActive ? 'text-white' : 'text-cyan-400'} />
                    <span>{getHelperText(tab.labelEn, tab.labelBn)}</span>
                  </button>
                );
              })}
            </nav>
          </div>

        </div>
      </header>

      {/* Hero Presentation Section */}
      {!selectedTopic && activeTab === 'home' && (
        <section className="relative px-4 md:px-8 py-12 overflow-hidden border-b border-blue-500/15 bg-gradient-to-b from-[#111a42] via-transparent to-transparent">
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/70 border border-cyan-500/30 rounded-full text-cyan-350 font-bold tracking-widest text-[9px] uppercase shadow-md shadow-cyan-950/20">
                <BadgeAlert size={12} className="text-cyan-400" />
                {getHelperText('Educational Shield & Awareness Initiative', 'পাবলিক এডুকেশন শিল্ড এবং সচেতনতা ফোরাম')}
              </div>
              
              <h2 className="text-2xl md:text-5xl font-black tracking-tight text-white uppercase italic leading-[1.1]">
                {language === 'en' && (
                  <>Empowering Bangladesh with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]">Cryptographic Literacy</span></>
                )}
                {language === 'bn' && (
                  <>ক্রিপ্টোগ্রাফিক শিক্ষার মাধ্যমে <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]">বাংলাদেশকে সচেতন করা</span></>
                )}
                {language === 'bilingual' && (
                  <>
                    <span className="block text-2xl md:text-4xl text-white">Empowering Bangladesh with Cryptographic Literacy</span>
                    <span className="block text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 mt-2 font-black normal-case">ক্রিপ্টোগ্রাফিক শিক্ষার মাধ্যমে সাধারণ মানুষদের সচেতন করা</span>
                  </>
                )}
              </h2>

              <div className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl bg-[#0e1633]/50 p-5 rounded-2xl border border-blue-500/20 shadow-lg">
                {language === 'en' && (
                  <p>
                    Welcome to the premier digital curriculum centered around <strong className="text-cyan-400">Bangladesh Cryptocurrency</strong>. Our mission is to dismantle dangerous pyramid scams, highlight global Web3 ecosystems, and provide youth with non-custodial custody awareness.
                  </p>
                )}
                {language === 'bn' && (
                  <p className="text-blue-100 font-medium">
                    বাংলাদেশ ক্রিপ্টোকারেন্সি নিয়ে তৈরি করা প্রথম আধুনিক ডিজিটাল জ্ঞান ভাণ্ডারে আপনাকে স্বাগতম। আমাদের মূল লক্ষ্য হলো বিপজ্জনক পঞ্জি বা এমএলএম ফাঁদ উন্মোচন করা, বৈশ্বিক ওয়েব৩ ইকোসিস্টেমের শক্তি তুলে ধরা এবং তরুণ ফ্রিল্যান্সারদের সুরক্ষার জন্য ওয়ালেট নিরাপত্তা জাগ্রত করা।
                  </p>
                )}
                {language === 'bilingual' && (
                  <div className="space-y-3">
                    <p className="text-slate-250 font-normal">
                      Welcome to the premier digital curriculum centered around <strong className="text-cyan-400">Bangladesh Cryptocurrency</strong>. Our mission is to dismantle dangerous pyramid scams, highlight global Web3 ecosystems, and provide youth with non-custodial custody awareness.
                    </p>
                    <p className="text-cyan-300 text-sm italic font-semibold border-l-2 border-cyan-400 pl-4 bg-cyan-455/5 py-1.5 rounded-r-lg">
                      বাংলাদেশ ক্রিপ্টোকারেন্সি নিয়ে তৈরি করা প্রথম আধুনিক ডিজিটাল জ্ঞান ভাণ্ডারে আপনাকে স্বাগতম। আমাদের মূল লক্ষ্য হলো বিপজ্জনক পঞ্জি বা এমএলএম ফাঁদ উন্মোচন করা, বৈশ্বিক ওয়েব৩ ইকোসিস্টেমের শক্তি তুলে ধরা এবং তরুণ ফ্রিল্যান্সারদের সুরক্ষার জন্য ওয়ালেট নিরাপত্তা জাগ্রত করা।
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#12214a] border border-blue-500/25 rounded-xl text-xs font-bold text-slate-100 shadow-md">
                  <FileText size={14} className="text-cyan-400" />
                  <span>18 {getHelperText('Secret Curriculum Modules', 'শিক্ষামূলক মডিউল এবং তথ্য')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#12214a] border border-blue-500/25 rounded-xl text-xs font-bold text-slate-100 shadow-md">
                  <Globe size={14} className="text-cyan-400" />
                  <span>{getHelperText('Verse Community Achievements', 'ভার্স কমিউনিটি সচেতনতা ড্রাইভ')}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0e173d] border border-blue-500/30 p-6 rounded-2xl relative shadow-xl shadow-black/20">
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.85)]" />
              <h3 className="text-sm font-black uppercase text-white tracking-widest mb-2 flex items-center gap-2">
                <Compass size={16} className="text-cyan-400" />
                {getHelperText('How to Navigate', 'কীভাবে ব্যবহার করবেন')}
              </h3>
              <p className="text-blue-200 text-xs leading-relaxed mb-4">
                {getHelperText(
                  'Explore the carefully curated grid rows below which break down foundational cryptography, scam-detection evaluations, safety transaction checklists, and progressive community mechanics. Click any card to read and practice with interactive tools.',
                  'নিচে সাজানো ৬টি রো বা কলামে ক্রিপ্টোকারেন্সির ইতিহাস, স্ক্যাম চেনার ক্যালকুলেটর, এবং ওয়ালেট ব্যাকআপের নিয়ম সুন্দরভাবে উপস্থাপন করা হয়েছে। যেকোনো কার্ডের ওপর ক্লিক করে বিস্তারিত পড়াশোনা এবং অডিট প্র্যাকটিস করুন।'
                )}
              </p>
              <div className="space-y-2 border-t border-blue-500/15 pt-4">
                <a 
                  href="https://t.me/GetVerse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[11px] font-bold text-cyan-300 hover:text-white transition-colors group p-1 bg-cyan-500/5 hover:bg-cyan-500/20 rounded-lg px-3 py-2.5 border border-cyan-500/15 shadow-xs"
                >
                  <span>💬 {getHelperText('Join official telegram forum', 'ভার্স টেলিগ্রাম গ্রুপে যুক্ত হোন')}</span>
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Educational Curriculums */}
      <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-12 space-y-16 flex-1">
        
        {selectedTopic ? (
          /* Render Immersive Topic Details Reading Page Inline */
          <div className="space-y-4">
            <ExpandedTopicModal 
              topic={selectedTopic} 
              onClose={() => setSelectedTopic(null)} 
              language={language}
              inlineMode={true}
            />
          </div>
        ) : searchQuery ? (
          /* Search Results View */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-blue-500/25 pb-4">
              <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#a5b4fc]">
                {getHelperText(
                  `Found ${filteredSearchTopics.length} Topics matching "${searchQuery}"`,
                  `"${searchQuery}" এর জন্য ${filteredSearchTopics.length}টি মডিউল পাওয়া গেছে`
                )}
              </h3>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-cyan-400 hover:underline font-bold"
              >
                {getHelperText('Reset Search', 'অনুসন্ধান মুছুন')}
              </button>
            </div>

            {filteredSearchTopics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSearchTopics.map((topic, index) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={index} 
                    language={language}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#0e173d] border border-blue-500/25 rounded-2xl shadow-md">
                <HelpCircle size={40} className="mx-auto text-blue-300 mb-3" />
                <h4 className="text-base font-bold text-white">{getHelperText('No modules matched your search query', 'কোনো মডিউল তথ্য খুঁজে পাওয়া যায়নি')}</h4>
                <p className="text-sm text-blue-200 mt-1">{getHelperText('Try searching for keywords like "MLM", "P2P", "Verse", or "Bitcoin".', 'অনুগ্রহ করে "MLM", "P2P", "Verse", বা "Bitcoin" লিখে পুনরায় অনুসন্ধান করুন।')}</p>
              </div>
            )}
          </div>
        ) : (
          /* Tab Specific Content Renderers */
          <div className="space-y-16">
            {activeTab === 'academy' && <AcademyTab language={language} />}
            {activeTab === 'news' && <NewsTab language={language} />}
            {activeTab === 'market' && <MarketTab language={language} />}
            {activeTab === 'security' && <SecurityTab language={language} />}
            {activeTab === 'community' && <CommunityTab language={language} />}

            {activeTab === 'home' && (
              /* Traditional Specific Rows Layout */
              <div className="space-y-16 animate-fade-in">
                
                {/* ROW 1: 4 TOPICS */}
                <div className="space-y-6" id="row-1-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-black text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-cyan-500/40 shadow-sm shadow-cyan-500/10">Row 01</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                    {getHelperText('Foundations & Cryptography Basics', 'ক্রিপ্টোগ্রাফির সূচনা এবং কোর ডিরেক্টরি')}
                  </h3>
                </div>
                <span className="text-[10px] text-blue-350 font-bold uppercase tracking-widest mt-1 md:mt-0">
                  4 {getHelperText('High-Impact Modules', 'টি মডিউল')}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ROW_1_TOPICS.map((topic, idx) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={idx} 
                    language={language}
                  />
                ))}
              </div>
            </div>

            {/* ROW 2: 3 TOPICS */}
            <div className="space-y-6" id="row-2-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-black text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-cyan-500/40 shadow-sm shadow-cyan-500/10">Row 02</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                    {getHelperText('Bangladesh Regulations & Anti-Scam Shield', 'বাংলাদেশ আইনি বাধা এবং এমএলএম ও পঞ্জি প্রতিরোধ ঢাল')}
                  </h3>
                </div>
                <span className="text-[10px] text-blue-350 font-bold uppercase tracking-widest mt-1 md:mt-0">
                  3 {getHelperText('In-depth Modules', 'টি গভীর মডিউল')}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ROW_2_TOPICS.map((topic, idx) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={idx} 
                    language={language}
                  />
                ))}
              </div>
            </div>

            {/* ROW 3: 2 TOPICS */}
            <div className="space-y-6" id="row-3-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-black text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-cyan-500/40 shadow-sm shadow-cyan-500/10">Row 03</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                    {getHelperText('Future Perspectives & Legalization timelines', 'আইনি রূপান্তর সম্ভাবনা এবং রোডম্যাপ মডিউল')}
                  </h3>
                </div>
                <span className="text-[10px] text-blue-350 font-bold uppercase tracking-widest mt-1 md:mt-0">
                  2 {getHelperText('Strategic Blueprints', 'টি স্ট্র্যাটেজিক মডিউল')}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ROW_3_TOPICS.map((topic, idx) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={idx} 
                    language={language}
                  />
                ))}
              </div>
            </div>

            {/* ROW 4: 4 TOPICS */}
            <div className="space-y-6" id="row-4-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-black text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-cyan-500/40 shadow-sm shadow-cyan-500/10">Row 04</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                    {getHelperText('Safe Handling Guide & Seed-phrase Vaults', 'নিরাপদ লেনদেন পদ্ধতি এবং পি২পি সুরক্ষা নির্দেশক')}
                  </h3>
                </div>
                <span className="text-[10px] text-blue-350 font-bold uppercase tracking-widest mt-1 md:mt-0">
                  4 {getHelperText('Safety Modules', 'টি ব্যবহারিক নির্দেশিকা')}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ROW_4_TOPICS.map((topic, idx) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={idx} 
                    language={language}
                  />
                ))}
              </div>
            </div>

            {/* ROW 5: 3 TOPICS */}
            <div className="space-y-6" id="row-5-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-black text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-cyan-500/40 shadow-sm shadow-cyan-500/10">Row 05</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                    {getHelperText('The Verse Case-Study & Collaborative Power', 'আদর্শ সামাজিক আন্দোলন: ভার্স সুশাসন কেস স্টাডি')}
                  </h3>
                </div>
                <span className="text-[10px] text-blue-350 font-bold uppercase tracking-widest mt-1 md:mt-0">
                  3 {getHelperText('Community Modules', 'টি সামাজিক মডিউল')}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ROW_5_TOPICS.map((topic, idx) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={idx} 
                    language={language}
                  />
                ))}
              </div>
            </div>

            {/* ROW 6: 2 TOPICS */}
            <div className="space-y-6" id="row-6-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-black text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-cyan-500/40 shadow-sm shadow-cyan-500/10">Row 06</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                    {getHelperText('Future Web3 paradigms & Comparative Analysis', 'নতুন যুগের ওয়েব৩ এবং বাংলাদেশ কেন পিছিয়ে আছে')}
                  </h3>
                </div>
                <span className="text-[10px] text-blue-350 font-bold uppercase tracking-widest mt-1 md:mt-0">
                  2 {getHelperText('Sovereignty Modules', 'টি সাধারণ জ্ঞান মডিউল')}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ROW_6_TOPICS.map((topic, idx) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)} 
                    index={idx} 
                    language={language}
                  />
                ))}
              </div>
            </div>
            </div>
            )}
          </div>
        )}

      </main>

      {/* Bottom Interactive Promotion and Action Banner Section */}
      {!selectedTopic && activeTab === 'home' && (
        <section className="max-w-7xl w-full mx-auto px-4 md:px-8 pb-16">
          <div className="bg-[#0e173d] border border-blue-500/30 p-6 md:p-8 rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Input Control Box */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-300 font-bold tracking-widest text-[9px] uppercase border border-cyan-500/20 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                {getHelperText('Interactive Referral Node', 'ইন্টারেক্টিভ রেফারেল সংযোগ')}
              </div>
              
              <h3 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tight leading-none">
                {getHelperText('Connect to X (Twitter) Gateway', 'X (টুইটার) গেটওয়ের সাথে যুক্ত হন')}
              </h3>
              <p className="text-xs md:text-sm text-blue-200 leading-relaxed">
                {getHelperText(
                  'Input your preferred X (Twitter) or social username below. The banner on the right dynamically inherits this input, turning into an instant portal leading to your specified handle.',
                  'নিচের বক্সে আপনার ব্যবহৃত X (টুইটার) বা সোশ্যাল ইউজারনেম লিখুন। ডানপাশের ইমেজ ব্যানারটি স্বয়ংক্রিয়ভাবে একটি ক্লিক-লিংক তৈরি করবে, যা ভিজিটরদের সরাসরি আপনার পেজে নিয়ে যাবে।'
                )}
              </p>

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-cyan-400 font-mono">
                  {getHelperText('Target Username / লিংক ইউজারনেম', 'ইউজারনেম অথবা লিংক সেট করতে লিখুন')}
                </label>
                <div className="relative max-w-sm">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 font-black text-xs font-mono">
                    @
                  </span>
                  <input 
                    type="text" 
                    value={bottomUsername}
                    onChange={(e) => setBottomUsername(e.target.value)}
                    placeholder="BitcoinCom"
                    className="w-full bg-[#12214a] border-2 border-blue-500/30 rounded-xl px-4 py-3 pl-8 text-xs font-bold text-white placeholder:text-blue-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-455 transition-all font-mono shadow-xs"
                  />
                </div>
                <p className="text-[10px] font-mono text-cyan-400 font-bold mt-1.5">
                  {getHelperText('Dynamic Destination Link:', 'সরাসরি গন্তব্য লিংক:')}{' '}
                  <a 
                    href={getRedirectLink(bottomUsername)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-cyan-300 text-white"
                  >
                    {getRedirectLink(bottomUsername)}
                  </a>
                </p>
              </div>
            </div>

            {/* Dynamic Clickable Banner Visual */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="text-center">
                <span className="text-[10px] font-black uppercase text-cyan-400/85 tracking-widest block mb-1">
                  {getHelperText('🎯 Click Banner to visit profile', '🎯 প্রোফাইল পরিদর্শনে ব্যানারে ক্লিক করুন')}
                </span>
              </div>

              <a 
                href={getRedirectLink(bottomUsername)}
                target="_blank" 
                rel="noopener noreferrer"
                className="block group relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-md hover:shadow-cyan-400/40 hover:border-cyan-400 transition-all duration-300 scale-95 hover:scale-100 max-w-full"
              >
                {/* Visual Hover Glowing Layers */}
                <div className="absolute inset-0 bg-[#04081c]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-300 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-cyan-400">
                    <span>{getHelperText('Visit Profile', 'প্রোফাইলে যান')}</span>
                    <span className="font-mono text-cyan-100 font-bold">({bottomUsername})</span>
                  </span>
                </div>

                <img 
                  src="https://i.ibb.co.com/JjMK5jGw/IMG-20260603-145948.png" 
                  alt="X Referral Banner" 
                  className="w-full max-h-[220px] object-cover rounded-xl transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

          </div>
        </section>
      )}

      {/* Modern High-End Footer */}
      <footer className="border-t border-blue-500/20 bg-[#04081c] py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              {getHelperText('Bangladesh Cryptocurrency Directory Portal', 'বাংলাদেশ ক্রিপ্টোকারেন্সি নির্দেশিকা পোর্টাল')}
            </span>
            <span className="text-[10px] text-blue-300 block uppercase tracking-widest">
              {getHelperText('Built with absolute transparency as an educational shield', 'সম্পূর্ণ অনানুষ্ঠানিক ও বিনামূল্যে সচেতনতা ডিপি তৈরিতে সংরক্ষিত')}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-blue-200">
            <span>{getHelperText('Proudly aligned under', 'গৌরবের সাথে')}</span>
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
            <span>{getHelperText('the support of the', 'সমর্থন ও দিকনির্দেশনায়')}</span>
            <a 
              href="https://t.me/GetVerse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-cyan-400 hover:underline hover:text-cyan-300 transition"
            >
              Verse Community
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
