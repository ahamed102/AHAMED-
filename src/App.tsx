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
  Languages
} from 'lucide-react';

export default function App() {
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

  return (
    <div className="min-h-screen bg-neutral-50/30 text-neutral-800 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      
      {/* Top Professional Ticker */}
      <div className="bg-rose-50 border-b border-rose-100 text-[10px] md:text-xs text-rose-700 py-2.5 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-2.5 font-mono shadow-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
          <span className="font-bold tracking-wider uppercase">
            {getHelperText('Bangladesh Cryptographic Intelligence Portal', 'বাংলাদেশ ক্রিপ্টোগ্রাফিক ইন্টেলিজেন্স পোর্টাল')}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-all">
            <Calendar size={13} className="text-rose-550" />
            <span>2026-06-07</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-all justify-center">
            <Clock size={13} className="text-rose-550" />
            <span className="font-bold">{currentUtcTime}</span>
          </div>
        </div>
      </div>

      {/* Main Luxury Header Navigation */}
      <header className="border-b border-rose-150/40 bg-white/95 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 py-5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            {/* New Requested Logo */}
            <img 
              src="https://i.ibb.co.com/T5Vz7JT/file-0000000099f071fd85bdf42c0cb05613.png" 
              alt="Bangladesh Crypto Currency Portal Logo" 
              className="h-11 w-11 object-contain shrink-0 rounded-xl bg-orange-50/50 p-1 border border-rose-200/55 shadow-xs" 
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-black italic tracking-tighter uppercase text-neutral-900 leading-none">
                Bangladesh Crypto Currency
              </h1>
              <p className="text-[10px] md:text-xs tracking-[0.18em] font-bold text-rose-600/90 uppercase mt-1">
                {getHelperText('The Decentralized Knowledge Mainframe', 'বিকেন্দ্রেকৃত জ্ঞান ভাণ্ডার')}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Bilingual Mode Toggle Control Panel */}
            <div className="flex bg-neutral-100 p-1 rounded-xl border border-neutral-300/30 gap-1 w-full md:w-auto">
              {(['bilingual', 'en', 'bn'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 md:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    language === lang
                      ? 'bg-rose-600 text-white shadow-[0_4px_12px_rgba(225,29,72,0.25)]'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
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

            {/* Structured Search Box */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 font-semibold" />
              <input 
                type="text" 
                placeholder={getHelperText('Search all 18 secret modules...', '১৮টি মডিউলে অনুসন্ধান করুন...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 pl-10 text-xs text-neutral-800 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 w-full transition-colors font-medium shadow-sm placeholder:text-neutral-400"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Presentation Section */}
      <section className="relative px-4 md:px-8 py-12 overflow-hidden border-b border-rose-100 bg-gradient-to-b from-rose-50/40 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200 rounded-full text-rose-600 font-bold tracking-widest text-[9px] uppercase shadow-xs">
              <BadgeAlert size={12} className="text-rose-500" />
              {getHelperText('Educational Shield & Awareness Initiative', 'পাবলিক এডুকেশন শিল্ড এবং সচেতনতা ফোরাম')}
            </div>
            
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-neutral-900 uppercase italic leading-[1.1]">
              {language === 'en' && (
                <>Empowering Bangladesh with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-650">Cryptographic Literacy</span></>
              )}
              {language === 'bn' && (
                <>ক্রিপ্টোগ্রাফিক শিক্ষার মাধ্যমে <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-650">বাংলাদেশকে সচেতন করা</span></>
              )}
              {language === 'bilingual' && (
                <>
                  <span className="block text-2xl md:text-4xl text-neutral-900">Empowering Bangladesh with Cryptographic Literacy</span>
                  <span className="block text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-650 mt-2 font-black normal-case">ক্রিপ্টোগ্রাফিক শিক্ষার মাধ্যমে সাধারণ মানুষদের সচেতন করা</span>
                </>
              )}
            </h2>

            <div className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl">
              {language === 'en' && (
                <p>
                  Welcome to the premier digital curriculum centered around <strong>Bangladesh Cryptocurrency</strong>. Our mission is to dismantle dangerous pyramid scams, highlight global Web3 ecosystems, and provide youth with non-custodial custody awareness.
                </p>
              )}
              {language === 'bn' && (
                <p>
                  বাংলাদেশ ক্রিপ্টোকারেন্সি নিয়ে তৈরি করা প্রথম আধুনিক ডিজিটাল জ্ঞান ভাণ্ডারে আপনাকে স্বাগতম। আমাদের মূল লক্ষ্য হলো বিপজ্জনক পঞ্জি বা এমএলএম ফাঁদ উন্মোচন করা, বৈশ্বিক ওয়েব৩ ইকোসিস্টেমের শক্তি তুলে ধরা এবং তরুণ ফ্রিল্যান্সারদের সুরক্ষার জন্য ওয়ালেট নিরাপত্তা জাগ্রত করা।
                </p>
              )}
              {language === 'bilingual' && (
                <div className="space-y-3">
                  <p className="text-neutral-600 font-normal">
                    Welcome to the premier digital curriculum centered around <strong>Bangladesh Cryptocurrency</strong>. Our mission is to dismantle dangerous pyramid scams, highlight global Web3 ecosystems, and provide youth with non-custodial custody awareness.
                  </p>
                  <p className="text-rose-750 text-sm italic font-semibold border-l-2 border-rose-450 pl-4 bg-rose-500/5 py-1.5 rounded-r-lg">
                    বাংলাদেশ ক্রিপ্টোকারেন্সি নিয়ে তৈরি করা প্রথম আধুনিক ডিজিটাল জ্ঞান ভাণ্ডারে আপনাকে স্বাগতম। আমাদের মূল লক্ষ্য হলো বিপজ্জনক পঞ্জি বা এমএলএম ফাঁদ উন্মোচন করা, বৈশ্বিক ওয়েব৩ ইকোসিস্টেমের শক্তি তুলে ধরা এবং তরুণ ফ্রিল্যান্সারদের সুরক্ষার জন্য ওয়ালেট নিরাপত্তা জাগ্রত করা।
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-rose-100 rounded-xl text-xs font-bold text-neutral-600 shadow-xs">
                <FileText size={14} className="text-rose-500" />
                <span>18 {getHelperText('Secret Curriculum Modules', 'শিক্ষামূলক মডিউল এবং তথ্য')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-rose-100 rounded-xl text-xs font-bold text-neutral-600 shadow-xs">
                <Globe size={14} className="text-pink-500" />
                <span>{getHelperText('Verse Community Achievements', 'ভার্স কমিউনিটি সচেতনতা ড্রাইভ')}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-rose-100/80 p-6 rounded-2xl relative shadow-md shadow-rose-100/40">
            <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <h3 className="text-sm font-black uppercase text-neutral-900 tracking-widest mb-2 flex items-center gap-2">
              <Compass size={16} className="text-rose-500" />
              {getHelperText('How to Navigate', 'কীভাবে ব্যবহার করবেন')}
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed mb-4">
              {getHelperText(
                'Explore the carefully curated grid rows below which break down foundational cryptography, scam-detection evaluations, safety transaction checklists, and progressive community mechanics. Click any card to read and practice with interactive tools.',
                'নিচে সাজানো ৬টি রো বা কলামে ক্রিপ্টোকারেন্সির ইতিহাস, স্ক্যাম চেনার ক্যালকুলেটর, এবং ওয়ালেট ব্যাকআপের নিয়ম সুন্দরভাবে উপস্থাপন করা হয়েছে। যেকোনো কার্ডের ওপর ক্লিক করে বিস্তারিত পড়াশোনা এবং অডিট প্র্যাকটিস করুন।'
              )}
            </p>
            <div className="space-y-2 border-t border-rose-100/60 pt-4">
              <a 
                href="https://t.me/GetVerse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[11px] font-bold text-rose-600 hover:text-rose-800 transition-colors group p-1 bg-rose-500/5 hover:bg-rose-500/10 rounded-lg px-3 py-2.5 border border-rose-500/10 shadow-xs"
              >
                <span>💬 {getHelperText('Join official telegram forum', 'ভার্স টেলিগ্রাম গ্রুপে যুক্ত হোন')}</span>
                <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform text-rose-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Curriculums */}
      <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-12 space-y-16 flex-1">
        
        {searchQuery ? (
          /* Search Results View */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-rose-100 pb-4">
              <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-neutral-500">
                {getHelperText(
                  `Found ${filteredSearchTopics.length} Topics matching "${searchQuery}"`,
                  `"${searchQuery}" এর জন্য ${filteredSearchTopics.length}টি মডিউল পাওয়া গেছে`
                )}
              </h3>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-rose-600 hover:underline font-bold"
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
              <div className="text-center py-16 bg-white border border-rose-100 rounded-2xl shadow-xs">
                <HelpCircle size={40} className="mx-auto text-neutral-400 mb-3" />
                <h4 className="text-base font-bold text-neutral-800">{getHelperText('No modules matched your search query', 'কোনো মডিউল তথ্য খুঁজে পাওয়া যায়নি')}</h4>
                <p className="text-xs text-neutral-500 mt-1">{getHelperText('Try searching for keywords like "MLM", "P2P", "Verse", or "Bitcoin".', 'অনুগ্রহ করে "MLM", "P2P", "Verse", বা "Bitcoin" লিখে পুনরায় অনুসন্ধান করুন।')}</p>
              </div>
            )}
          </div>
        ) : (
          /* Traditional Specific Rows Layout */
          <div className="space-y-16">
            
            {/* ROW 1: 4 TOPICS */}
            <div className="space-y-6" id="row-1-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rose-100/70 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50 shadow-xs">Row 01</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-900">
                    {getHelperText('Foundations & Cryptography Basics', 'ক্রিপ্টোগ্রাফির সূচনা এবং কোর ডিরেক্টরি')}
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-widest mt-1 md:mt-0">
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
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rose-100/70 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50 shadow-xs">Row 02</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-900">
                    {getHelperText('Bangladesh Regulations & Anti-Scam Shield', 'বাংলাদেশ আইনি বাধা এবং এমএলএম ও পঞ্জি প্রতিরোধ ঢাল')}
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-widest mt-1 md:mt-0">
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
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rose-100/70 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50 shadow-xs">Row 03</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-900">
                    {getHelperText('Future Perspectives & Legalization timelines', 'আইনি রূপান্তর সম্ভাবনা এবং রোডম্যাপ মডিউল')}
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-widest mt-1 md:mt-0">
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
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rose-100/70 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50 shadow-xs">Row 04</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-900">
                    {getHelperText('Safe Handling Guide & Seed-phrase Vaults', 'নিরাপদ লেনদেন পদ্ধতি এবং পি২পি সুরক্ষা নির্দেশক')}
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-widest mt-1 md:mt-0">
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
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rose-100/70 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50 shadow-xs">Row 05</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-900">
                    {getHelperText('The Verse Case-Study & Collaborative Power', 'আদর্শ সামাজিক আন্দোলন: ভার্স সুশাসন কেস স্টাডি')}
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-widest mt-1 md:mt-0">
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
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rose-100/70 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50 shadow-xs">Row 06</span>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-900">
                    {getHelperText('Future Web3 paradigms & Comparative Analysis', 'নতুন যুগের ওয়েব৩ এবং বাংলাদেশ কেন পিছিয়ে আছে')}
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-widest mt-1 md:mt-0">
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

      </main>

      {/* Bottom Interactive Promotion and Action Banner Section */}
      <section className="max-w-7xl w-full mx-auto px-4 md:px-8 pb-16">
        <div className="bg-gradient-to-r from-rose-50 via-pink-50/20 to-red-50/30 border border-rose-200 p-6 md:p-8 rounded-3xl shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Input Control Box */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600/10 rounded-full text-rose-600 font-bold tracking-widest text-[9px] uppercase border border-rose-500/20 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-550 animate-ping" />
              {getHelperText('Interactive Referral Node', 'ইন্টারেক্টিভ রেফারেল সংযোগ')}
            </div>
            
            <h3 className="text-xl md:text-3xl font-black text-neutral-900 uppercase italic tracking-tight leading-none">
              {getHelperText('Connect to X (Twitter) Gateway', 'X (টুইটার) গেটওয়ের সাথে যুক্ত হন')}
            </h3>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              {getHelperText(
                'Input your preferred X (Twitter) or social username below. The banner on the right dynamically inherits this input, turning into an instant portal leading to your specified handle.',
                'নিচের বক্সে আপনার ব্যবহৃত X (টুইটার) বা সোশ্যাল ইউজারনেম লিখুন। ডানপাশের ইমেজ ব্যানারটি স্বয়ংক্রিয়ভাবে একটি ক্লিক-লিংক তৈরি করবে, যা ভিজিটরদের সরাসরি আপনার পেজে নিয়ে যাবে।'
              )}
            </p>

            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-rose-700 font-mono">
                {getHelperText('Target Username / লিংক ইউজারনেম', 'ইউজারনেম অথবা লিংক সেট করতে লিখুন')}
              </label>
              <div className="relative max-w-sm">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-600 font-black text-xs font-mono">
                  @
                </span>
                <input 
                  type="text" 
                  value={bottomUsername}
                  onChange={(e) => setBottomUsername(e.target.value)}
                  placeholder="BitcoinCom"
                  className="w-full bg-white border-2 border-rose-200 rounded-xl px-4 py-3 pl-8 text-xs font-bold text-rose-800 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-mono shadow-xs"
                />
              </div>
              <p className="text-[10px] font-mono text-rose-600 font-bold mt-1.5">
                {getHelperText('Dynamic Destination Link:', 'সরাসরি গন্তব্য লিংক:')}{' '}
                <a 
                  href={getRedirectLink(bottomUsername)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-rose-800"
                >
                  {getRedirectLink(bottomUsername)}
                </a>
              </p>
            </div>
          </div>

          {/* Dynamic Clickable Banner Visual */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase text-rose-600/80 tracking-widest block mb-1">
                {getHelperText('🎯 Click Banner to visit profile', '🎯 প্রোফাইল পরিদর্শনে ব্যানারে ক্লিক করুন')}
              </span>
            </div>

            <a 
              href={getRedirectLink(bottomUsername)}
              target="_blank" 
              rel="noopener noreferrer"
              className="block group relative rounded-2xl overflow-hidden border-2 border-rose-200/90 shadow-md hover:shadow-xl hover:border-rose-500 transition-all duration-300 scale-95 hover:scale-100 max-w-full"
            >
              {/* Visual Hover Glowing Layers */}
              <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-300 z-10">
                <span className="bg-rose-600 text-white font-black uppercase text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-rose-500">
                  <span>{getHelperText('Visit Profile', 'প্রোফাইলে যান')}</span>
                  <span className="font-mono text-orange-200 font-bold">({bottomUsername})</span>
                </span>
              </div>

              <img 
                src="https://i.ibb.co.com/JjMK5jGw/IMG-20260603-145948.png" 
                alt="Telegram Referral Banner" 
                className="w-full max-h-[220px] object-cover rounded-xl transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

        </div>
      </section>

      {/* Dynamic Pop-up Reading Modal & Interactive Core */}
      <AnimatePresence>
        {selectedTopic && (
          <ExpandedTopicModal 
            topic={selectedTopic} 
            onClose={() => setSelectedTopic(null)} 
            language={language}
          />
        )}
      </AnimatePresence>

      {/* Modern High-End Footer */}
      <footer className="border-t border-rose-100 bg-white py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block">
              {getHelperText('Bangladesh Cryptocurrency Directory Portal', 'বাংলাদেশ ক্রিপ্টোকারেন্সি নির্দেশিকা পোর্টাল')}
            </span>
            <span className="text-[10px] text-neutral-500 block uppercase tracking-widest">
              {getHelperText('Built with absolute transparency as an educational shield', 'সম্পূর্ণ অনানুষ্ঠানিক ও বিনামূল্যে সচেতনতা ডিপি তৈরিতে সংরক্ষিত')}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span>{getHelperText('Proudly aligned under', 'গৌরবের সাথে')}</span>
            <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>{getHelperText('the support of the', 'সমর্থন ও দিকনির্দেশনায়')}</span>
            <a 
              href="https://t.me/GetVerse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-rose-600 hover:underline hover:text-rose-700 transition"
            >
              Verse Community
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
