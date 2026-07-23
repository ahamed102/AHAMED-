import { useState, useEffect } from 'react';
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
import BookFairTab from './components/BookFairTab';

import { 
  Search, 
  HelpCircle, 
  Compass, 
  Globe,
  ExternalLink,
  BookOpen,
  Newspaper,
  TrendingUp,
  ShieldAlert,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Send,
  Twitter,
  Award,
  Lock,
  Layers,
  Cpu,
  RefreshCw,
  Coins,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isInitializing, setIsInitializing] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'home' | 'academy' | 'news' | 'market' | 'security' | 'community' | 'bookfair'>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [bottomUsername, setBottomUsername] = useState('@stone_brb');

  // Initial Splash Screen Progress Timer (matching video 00:00 - 00:02)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsInitializing(false), 300);
          return 100;
        }
        return prev + 12;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Filter topics based on search query
  const filteredSearchTopics = ALL_TOPICS.filter(t => 
    t.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.shortDescriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStepCompletion = (stepNum: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNum) ? prev.filter(s => s !== stepNum) : [...prev, stepNum]
    );
  };

  // Safe redirect URL builder
  const getRedirectLink = (input: string) => {
    const clean = input.trim();
    if (!clean) return 'https://t.me/stone_brb';
    if (clean.startsWith('http://') || clean.startsWith('https://')) return clean;
    const rawUser = clean.startsWith('@') ? clean.slice(1) : clean;
    return `https://t.me/${rawUser}`;
  };

  // Syllabus Steps Data (from video 00:36 - 00:46)
  const SYLLABUS_STEPS = [
    {
      step: 1,
      duration: '10 min',
      title: 'What is Web3?',
      description: 'The Transition to read-write-own internet.',
      topicId: 'step-1-web3'
    },
    {
      step: 2,
      duration: '12 min',
      title: 'Blockchain',
      description: 'Decentralized ledgers and immutable databases.',
      topicId: 'step-2-blockchain'
    },
    {
      step: 3,
      duration: '10 min',
      title: 'Crypto Wallets',
      description: 'Cryptographic identity, keys, and seed phrases.',
      topicId: 'step-3-wallets'
    },
    {
      step: 4,
      duration: '11 min',
      title: 'Cryptocurrencies',
      description: 'Native coins, standard tokens, gas fees, and utility.',
      topicId: 'step-4-cryptocurrencies'
    },
    {
      step: 5,
      duration: '10 min',
      title: 'NFTs & Digital Assets',
      description: 'Digital scarcity, provenance, and Verse Voyagers.',
      topicId: 'step-5-nfts'
    },
    {
      step: 6,
      duration: '12 min',
      title: 'DeFi & Verse DEX',
      description: 'Lending pools, AMMs, and decentralized finance.',
      topicId: 'step-6-defi'
    },
    {
      step: 7,
      duration: '10 min',
      title: 'DAOs & Governance',
      description: 'Internet-native cooperatives and community voting.',
      topicId: 'step-7-daos'
    },
    {
      step: 8,
      duration: '11 min',
      title: 'Web3 Security',
      description: 'Protecting private keys and detecting scam schemes.',
      topicId: 'step-8-security'
    },
    {
      step: 9,
      duration: '8 min',
      title: 'Verse Ecosystem',
      description: 'Interactive learning, rewards, and VERSE utility.',
      topicId: 'step-9-verse-ecosystem'
    },
    {
      step: 10,
      duration: '5 min',
      title: 'Verse Hub & Rewards',
      description: 'Registering on Verse Hub and connecting Web3 wallet.',
      topicId: 'step-10-verse-hub'
    }
  ];

  // 1. VIDEO-EXACT INITIAL SPLASH SCREEN (Video 00:00 - 00:02)
  if (isInitializing) {
    return (
      <div className="min-h-screen w-full bg-[#0a0f24] flex flex-col justify-center items-center relative overflow-hidden font-sans select-none">
        <div className="absolute inset-0 bg-radial from-purple-900/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-6">
          {/* Centered Glowing Verse Logo Box */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-75 animate-pulse" />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl p-1 bg-slate-950 border-2 border-purple-500/50 shadow-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/verse_logo.jpg" 
                alt="Verse Logo" 
                className="w-full h-full object-cover rounded-xl" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co.com/nqHkRw7V/IMG-20260724-011109-166.jpg';
                }}
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black font-mono uppercase tracking-[0.3em] text-white">
              VERSE
            </h1>
            <p className="text-xs md:text-sm font-mono text-slate-400 tracking-wider">
              Initializing Web3 Curriculum...
            </p>
          </div>

          {/* Video-exact animated progress bar */}
          <div className="w-64 md:w-80 h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 relative">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-150 ease-out rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)]"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b1e] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 2. HEADER & APP BAR (Video 00:03) */}
      <header className="border-b border-purple-500/15 bg-[#0b0f2a]/95 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-3">
          
          <div className="flex items-center justify-between gap-4">
            {/* Logo + Site Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                setActiveTab('home');
                setSearchQuery('');
                setSelectedTopic(null);
              }}
            >
              <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform">
                <img 
                  src="/verse_logo.jpg" 
                  alt="Verse Logo" 
                  className="h-10 w-10 object-cover rounded-lg bg-slate-900 border-0" 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co.com/nqHkRw7V/IMG-20260724-011109-166.jpg';
                  }}
                />
              </div>
              <div>
                <h1 className="text-base md:text-xl font-black font-mono tracking-wider uppercase text-white leading-none">
                  VERSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">CRYPTO TOKEN HUB</span>
                </h1>
                <p className="text-[10px] tracking-[0.2em] font-mono text-purple-300/80 uppercase mt-0.5">
                  Web3 Ecosystem & Academy
                </p>
              </div>
            </div>

            {/* Header Action Tools */}
            <div className="flex items-center gap-2">
              <div className="relative hidden sm:block w-48 lg:w-64">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#12173d] border border-purple-500/20 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Video-exact Pill Navigation Tabs */}
          <div className="border-t border-purple-500/10 pt-2 flex items-center overflow-x-auto scrollbar-none no-scrollbar">
            <nav className="flex gap-2 min-w-max pb-1">
              {[
                { id: 'home', label: 'Home', icon: Globe },
                { id: 'bookfair', label: 'Verse Book Fair', icon: BookOpen },
                { id: 'academy', label: 'Roadmap & Academy', icon: Compass },
                { id: 'news', label: 'News & History', icon: Newspaper },
                { id: 'market', label: 'Market & Trading', icon: TrendingUp },
                { id: 'security', label: 'Security & Tools', icon: ShieldAlert },
                { id: 'community', label: 'Our Verse Community', icon: Users },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setSearchQuery('');
                      setSelectedTopic(null);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                      isActive
                        ? 'bg-slate-100 text-slate-950 border-white shadow-lg shadow-purple-500/10 font-black'
                        : 'bg-[#12183b]/80 border-purple-500/10 text-slate-300 hover:text-white hover:border-purple-500/30'
                    }`}
                  >
                    <TabIcon size={14} className={isActive ? 'text-slate-950' : 'text-purple-400'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

        </div>
      </header>

      {/* 3. HERO PRESENTATION SECTION (Video 00:03 - 00:04) */}
      {!selectedTopic && activeTab === 'home' && !searchQuery && (
        <section className="relative px-4 md:px-8 pt-10 pb-8 overflow-hidden bg-gradient-to-b from-[#0f153a] via-[#0b0f2a] to-[#070b1e]">
          <div className="max-w-7xl mx-auto space-y-10 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/40 rounded-full text-cyan-300 font-bold text-xs uppercase tracking-widest">
                  <Sparkles size={14} className="text-cyan-400" />
                  <span>YOUR PORTAL TO DECENTRALIZED WEB</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Learn Web3 <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    From Zero
                  </span>
                </h1>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                  Demystify cryptography, block structures, smart contracts, decentralized finance (DeFi), and NFTs. Explore our interactive roadmap, take tests, and master the concepts of Verse Crypto Token Hub.
                </p>

                {/* Hero CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('syllabus-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-slate-950 font-black text-xs md:text-sm uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/20 hover:scale-105 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Start Learning</span>
                    <ArrowRight size={16} />
                  </button>

                  <button 
                    onClick={() => setActiveTab('community')}
                    className="px-6 py-3.5 rounded-xl bg-[#12183d] hover:bg-purple-950/50 border border-purple-500/30 text-white font-bold text-xs md:text-sm uppercase tracking-wider transition-all hover:border-purple-400 cursor-pointer"
                  >
                    Our Verse Community
                  </button>
                </div>

                {/* Hero Metrics Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-500/15 max-w-lg">
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-white font-mono">10</div>
                    <div className="text-[10px] md:text-xs text-slate-400 uppercase font-mono tracking-wider">CHAPTERS</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-white font-mono">30+</div>
                    <div className="text-[10px] md:text-xs text-slate-400 uppercase font-mono tracking-wider">GLOSSARY WORDS</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-cyan-400 font-mono">
                      {Math.round((completedSteps.length / 10) * 100)}%
                    </div>
                    <div className="text-[10px] md:text-xs text-slate-400 uppercase font-mono tracking-wider">COMPLETED</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Video-exact Cyber 3D Ecosystem Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md p-6 rounded-3xl bg-gradient-to-b from-[#131a44] to-[#0c102a] border-2 border-purple-500/30 shadow-2xl space-y-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-purple-500/20 p-4 flex flex-col items-center justify-center text-center group">
                    <div className="absolute inset-0 bg-radial from-purple-500/20 via-cyan-500/10 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-500 p-1 shadow-2xl mb-3 transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                      <img 
                        src="/verse_logo.jpg" 
                        alt="Verse Logo" 
                        className="w-full h-full object-cover rounded-xl" 
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co.com/nqHkRw7V/IMG-20260724-011109-166.jpg';
                        }}
                      />
                    </div>

                    <h3 className="text-lg font-black text-white uppercase font-mono tracking-wider">
                      VERSE TOKEN HUB
                    </h3>
                    <p className="text-xs text-cyan-300 font-mono">Non-custodial Web3 Architecture</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <div className="bg-[#0b0f29] p-2.5 rounded-xl border border-purple-500/20">
                      <span className="text-slate-400 block text-[10px]">NETWORK</span>
                      <span className="text-cyan-400 font-bold">Polygon / ERC-20</span>
                    </div>
                    <div className="bg-[#0b0f29] p-2.5 rounded-xl border border-purple-500/20">
                      <span className="text-slate-400 block text-[10px]">UTILITY</span>
                      <span className="text-purple-400 font-bold">DEX / Staking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. TICKER MARQUEE CAROUSEL (Video 00:05 - 00:33) */}
            <div className="bg-[#0c112e] border border-purple-500/20 rounded-2xl p-3 overflow-hidden shadow-xl">
              <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
                {[
                  { name: 'Ethereum', symbol: 'ETH', logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
                  { name: 'Solana', symbol: 'SOL', logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
                  { name: 'Verse', symbol: 'VERSE', logo: '/verse_logo.jpg' },
                  { name: 'BNB', symbol: 'BNB', logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2x.png' },
                  { name: 'Bitcoin', symbol: 'BTC', logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
                  { name: 'Ethereum', symbol: 'ETH', logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
                  { name: 'Solana', symbol: 'SOL', logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
                  { name: 'Verse', symbol: 'VERSE', logo: '/verse_logo.jpg' },
                  { name: 'BNB', symbol: 'BNB', logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2x.png' },
                  { name: 'Bitcoin', symbol: 'BTC', logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#12193e] border border-purple-500/20 rounded-2xl shrink-0 hover:border-cyan-400/50 transition-all cursor-pointer"
                    onClick={() => setActiveTab('market')}
                  >
                    <img src={item.logo} alt={item.name} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-xs font-bold text-white font-mono">{item.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({item.symbol})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. CORE LEARNING SYLLABUS / ROADMAP (Video 00:36 - 00:54) */}
      <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-10 space-y-12 flex-1">
        
        {selectedTopic ? (
          <div className="space-y-4">
            <ExpandedTopicModal 
              topic={selectedTopic} 
              onClose={() => setSelectedTopic(null)} 
              language="en"
              inlineMode={true}
            />
          </div>
        ) : searchQuery ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
              <h3 className="text-sm font-black uppercase font-mono tracking-wider text-cyan-300">
                Search Results matching "{searchQuery}" ({filteredSearchTopics.length})
              </h3>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-purple-400 hover:underline font-bold"
              >
                Clear Search
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSearchTopics.map((topic, index) => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  onClick={() => setSelectedTopic(topic)} 
                  index={index} 
                  language="en"
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            {activeTab === 'bookfair' && <BookFairTab language="en" />}
            {activeTab === 'academy' && <AcademyTab language="en" />}
            {activeTab === 'news' && <NewsTab language="en" />}
            {activeTab === 'market' && <MarketTab language="en" />}
            {activeTab === 'security' && <SecurityTab language="en" />}
            {activeTab === 'community' && <CommunityTab language="en" />}

            {activeTab === 'home' && (
              <div className="space-y-12" id="syllabus-section">
                
                {/* Syllabus Header */}
                <div className="space-y-2 border-b border-purple-500/20 pb-4">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase font-mono tracking-tight">
                    Core Learning Syllabus
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                    A zero-fluff, robust digital curriculum designed sequentially. Choose a topic to begin studying Verse Crypto Token Hub.
                  </p>
                </div>

                {/* Progress bar banner */}
                <div className="bg-[#0f153a] border border-purple-500/20 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white uppercase font-mono">Syllabus Completion</h4>
                    <p className="text-xs text-slate-400">Complete reading all chapters to master Verse Crypto Token Hub.</p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-36 h-3 bg-slate-900 rounded-full overflow-hidden border border-purple-500/30">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300"
                        style={{ width: `${(completedSteps.length / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">{completedSteps.length} / 10 Done</span>
                  </div>
                </div>

                {/* Video-exact 10 Steps Syllabus List */}
                <div className="space-y-4">
                  {SYLLABUS_STEPS.map((item) => {
                    const isDone = completedSteps.includes(item.step);
                    const matchedTopic = ALL_TOPICS.find(t => t.id === item.topicId) || ALL_TOPICS[0];

                    return (
                      <div 
                        key={item.step}
                        className={`bg-[#0d1230] border rounded-2xl p-5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                          isDone ? 'border-emerald-500/40 bg-[#0a142e]' : 'border-purple-500/20 hover:border-cyan-400/50'
                        }`}
                      >
                        {/* Left Info */}
                        <div className="flex items-start md:items-center gap-4">
                          {/* Circle Step Badge */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-sm shrink-0 border-2 ${
                            isDone 
                              ? 'bg-emerald-500 text-slate-950 border-emerald-300' 
                              : 'bg-[#12193e] text-slate-200 border-purple-500/30'
                          }`}>
                            {item.step}
                          </div>

                          {/* Text content */}
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono uppercase font-bold text-cyan-400">
                                STEP {item.step}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                                <Clock size={10} />
                                {item.duration}
                              </span>
                            </div>

                            <h3 className="text-base font-bold text-white tracking-tight">
                              {item.title}
                            </h3>

                            <p className="text-xs text-slate-300">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Buttons */}
                        <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                          <button
                            onClick={() => toggleStepCompletion(item.step)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase font-mono tracking-wider transition-all cursor-pointer ${
                              isDone
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : 'bg-[#141b42] text-slate-300 border border-purple-500/20 hover:text-white'
                            }`}
                          >
                            {isDone ? 'Completed ✓' : 'Mark Complete'}
                          </button>

                          <button
                            onClick={() => setSelectedTopic(matchedTopic)}
                            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs uppercase font-mono tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <span>Read</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </div>
        )}

      </main>

      {/* Interactive Leader / Telegram Banner */}
      {!selectedTopic && activeTab === 'home' && (
        <section className="max-w-7xl w-full mx-auto px-4 md:px-8 pb-12">
          <div className="bg-[#0d1230] border border-purple-500/30 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/80 border border-purple-500/30 rounded-full text-purple-300 text-xs font-bold font-mono uppercase">
                <Award size={12} />
                <span>Verse Community Leader</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white font-mono uppercase">
                Connect with @stone_brb
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Get direct guidance, official Verse announcements, and peer support from our verified Telegram leadership.
              </p>
            </div>

            <a 
              href="https://t.me/stone_brb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-mono shrink-0 shadow-lg shadow-cyan-400/20"
            >
              <Send size={15} />
              <span>Contact Leader on Telegram</span>
              <ExternalLink size={12} />
            </a>

          </div>
        </section>
      )}

      {/* 6. FOOTER (Video 00:47 - 00:51) */}
      <footer className="border-t border-purple-500/20 bg-[#050818] py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="space-y-3 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-400 to-purple-500 shrink-0">
                  <img 
                    src="/verse_logo.jpg" 
                    alt="Verse Logo" 
                    className="w-full h-full object-cover rounded-lg" 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co.com/nqHkRw7V/IMG-20260724-011109-166.jpg';
                    }}
                  />
                </div>
                <h3 className="text-lg font-black font-mono tracking-wider text-white uppercase">
                  VERSE CRYPTO TOKEN HUB
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Democratizing decentralized technologies. Providing zero-to-one education, interactive sandboxes, and verified learning certificates.
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                © 2026 Verse Crypto Token Hub. All rights reserved.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-1.5 text-slate-400">
                  <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('home')}>Home Roadmap</li>
                  <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('academy')}>Chapters Syllabus</li>
                  <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('security')}>Security Center</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider">Ecosystem</h4>
                <ul className="space-y-1.5 text-slate-400">
                  <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('market')}>Market Trading</li>
                  <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('community')}>Verse Community</li>
                  <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('news')}>News & History</li>
                </ul>
              </div>

              <div className="space-y-2 col-span-2 sm:col-span-1">
                <h4 className="text-white font-bold uppercase tracking-wider">Community</h4>
                <div className="space-y-2 pt-1">
                  <a 
                    href="https://t.me/stone_brb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:underline text-xs"
                  >
                    <Send size={12} />
                    <span>Telegram Community</span>
                  </a>
                  <a 
                    href="https://x.com/BitcoinCom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:underline text-xs"
                  >
                    <Twitter size={12} />
                    <span>Official X (Twitter)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
