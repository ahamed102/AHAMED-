import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Send, 
  Twitter, 
  Award, 
  Heart, 
  Coins, 
  Globe, 
  Smartphone, 
  Download, 
  Cpu, 
  Layers, 
  Lock, 
  TrendingUp, 
  CheckCircle2, 
  Star, 
  MessageSquare,
  Compass
} from 'lucide-react';

interface CommunityTabProps {
  language: 'en' | 'bn' | 'bilingual';
}

export default function CommunityTab({ language: _language }: CommunityTabProps) {
  const OFFICIAL_WALLET_LINK = "https://branch.wallet.bitcoin.com/1xMoZ7gYhMb";
  const LEADER_TELEGRAM_LINK = "https://t.me/stone_brb";

  return (
    <div className="space-y-10 pb-16 animate-fade-in text-slate-100">
      
      {/* 1. HERO HEADER & VERSE LOGO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#121c44] via-[#0f1738] to-[#0a1027] border-2 border-cyan-500/30 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Verse Logo Display */}
          <div className="relative shrink-0 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-cyan-400/80 bg-slate-950 shadow-2xl p-1 flex items-center justify-center">
              <img 
                src="/verse_logo.jpg" 
                alt="Verse Logo" 
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co.com/nqHkRw7V/IMG-20260724-011109-166.jpg';
                }}
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
              Official Verse
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-950/80 border border-cyan-500/40 rounded-full text-cyan-300 font-bold text-xs uppercase tracking-widest shadow-md">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Official Ecosystem Hub</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">
              Welcome to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">
                Our Verse Community
              </span>
            </h1>

            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              A vibrant, collaborative, and rapidly growing network dedicated to decentralization, non-custodial financial literacy, and the Verse ecosystem.
            </p>

            {/* Quick Action Community Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a 
                href={LEADER_TELEGRAM_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 hover:scale-105"
              >
                <Send size={15} />
                <span>Join Telegram Community</span>
              </a>

              <a 
                href="https://x.com/BitcoinCom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#131d45] hover:bg-blue-900/50 border border-blue-500/30 text-cyan-300 font-bold text-xs uppercase tracking-wider transition-all hover:text-white"
              >
                <Twitter size={15} />
                <span>Verse X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY INTRODUCTION SECTION */}
      <section className="bg-[#0e1635]/90 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3 border-b border-blue-500/20 pb-4">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/20">
            <Users size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight font-mono">
              About Our Community
            </h2>
            <p className="text-xs text-slate-400 font-medium">Strength through collaboration, education, and shared vision</p>
          </div>
        </div>

        <div className="text-slate-200 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            <strong>Our Verse Community</strong> is built upon the foundation of mutual respect, peer-to-peer collaboration, and proactive support. Whether you are taking your first steps into non-custodial crypto storage or navigating advanced DeFi liquidity pools, our community offers a friendly, welcoming, and safe environment for everyone.
          </p>
          <p>
            With active members sharing daily insights, security reminders, and ecosystem updates, we work together to ensure everyone learns safely. As the decentralized Web3 movement grows, Our Verse Community continues to expand, fostering a bright and impactful future for all members.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#121c44] border border-blue-500/20 p-5 rounded-2xl space-y-2 hover:border-cyan-400/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
              <Heart size={20} />
            </div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">Friendly & Inclusive</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              A respectful, supportive space where questions are welcomed and every member is treated with value.
            </p>
          </div>

          <div className="bg-[#121c44] border border-blue-500/20 p-5 rounded-2xl space-y-2 hover:border-cyan-400/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">Mutual Cooperation</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Members proactively help each other avoid scams, verify official contracts, and master Web3 security.
            </p>
          </div>

          <div className="bg-[#121c44] border border-blue-500/20 p-5 rounded-2xl space-y-2 hover:border-cyan-400/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">Expanding Future</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Driven by collective energy and continuous learning, paving the way for long-term growth and adoption.
            </p>
          </div>
        </div>
      </section>

      {/* 3. COMMUNITY LEADER SECTION */}
      <section className="bg-gradient-to-r from-[#0d163a] via-[#101b46] to-[#0d163a] border-2 border-cyan-400/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-blue-500/20 pb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400">
                  <Star size={30} className="fill-cyan-400/20 text-cyan-400" />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cyan-950 border border-cyan-500/30 rounded-md text-cyan-400 font-mono text-[11px] font-bold uppercase mb-1">
                <Award size={12} />
                <span>Community Leader</span>
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                @stone_brb
              </h2>
              <p className="text-xs text-slate-400 font-mono">Telegram: @stone_brb</p>
            </div>
          </div>

          <a 
            href={LEADER_TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 shrink-0 font-mono"
          >
            <Send size={14} />
            <span>Contact Leader on Telegram</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="text-slate-200 text-sm leading-relaxed space-y-3">
          <p>
            Through dedicated leadership, sincere effort, and consistent guidance, <strong>@stone_brb</strong> has played a key role in bringing Verse Community members together. By fostering an encouraging environment, addressing member inquiries, and promoting safe non-custodial practices, their leadership continues to guide our community forward with confidence.
          </p>
          <p className="text-slate-300 text-xs italic bg-blue-950/40 p-4 rounded-xl border border-blue-500/15">
            "With active coordination, shared responsibility, and dedicated community leadership, Our Verse Community is well-positioned for strong, sustainable growth."
          </p>
        </div>
      </section>

      {/* 4. COMMUNITY TEAM & MODERATORS SECTION */}
      <section className="bg-[#0e1635]/90 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-blue-500/20 pb-4">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
            <Award size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight font-mono">
              Verse Community Team & Moderators
            </h2>
            <p className="text-xs text-slate-400 font-medium">Honoring the dedicated efforts of our core team</p>
          </div>
        </div>

        <p className="text-slate-200 text-sm leading-relaxed">
          We extend our heartfelt appreciation to all our responsible team members and moderators. Their continuous dedication, daily diligence, and proactive coordination keep our channel clean, helpful, and safe for every member.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#121c44] border border-blue-500/20 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
              <ShieldCheck size={16} />
              <span>Moderation & Safety</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Maintaining scam-free discussion rooms, verifying official links, and protecting members from phishing traps.
            </p>
          </div>

          <div className="bg-[#121c44] border border-blue-500/20 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
              <MessageSquare size={16} />
              <span>Member Support</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Assisting new crypto users with non-custodial wallet setups, transaction queries, and Verse DEX navigation.
            </p>
          </div>

          <div className="bg-[#121c44] border border-blue-500/20 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider font-mono">
              <Compass size={16} />
              <span>Community Growth</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Organizing educational campaigns, updates, and collaborative initiatives to strengthen community ties.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ABOUT VERSE SECTION */}
      <section className="bg-[#0e1635]/90 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-blue-500/20 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 p-1 border border-cyan-500/30 shrink-0 overflow-hidden">
            <img 
              src="/verse_logo.jpg" 
              alt="Verse Logo" 
              className="w-full h-full object-cover rounded-xl" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co.com/nqHkRw7V/IMG-20260724-011109-166.jpg';
              }}
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight font-mono">
              About Verse (VERSE Token)
            </h2>
            <p className="text-xs text-slate-400 font-medium">Rewards & Utility powering the Bitcoin.com Ecosystem</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-slate-200 text-sm leading-relaxed">
            <p>
              <strong>VERSE</strong> is an ERC-20 utility and rewards token created by <strong>Bitcoin.com</strong>. Launched in December 2022, VERSE is designed to incentivize user participation across the decentralized finance (DeFi) ecosystem.
            </p>
            <p>
              By combining staking rewards, trading fee discounts, liquidity pool incentives, and governance features, VERSE bridges traditional crypto users into the world of self-custodial Web3 applications.
            </p>
            
            <div className="p-4 rounded-2xl bg-[#121c44] border border-cyan-500/20 space-y-2">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider font-mono">Key Verse Utility Highlights:</h4>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>Staking yield rewards in liquidity pools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>DEX trading fee discounts on Verse DEX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>Gamified Scratch & Win rewards program</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>DAO governance participation and voting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Verse Ecosystem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#121c44] p-4 rounded-2xl border border-blue-500/20 space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide font-mono text-cyan-300">Verse DEX</h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                A non-custodial decentralized exchange enabling seamless multi-chain token swaps with low fees.
              </p>
            </div>

            <div className="bg-[#121c44] p-4 rounded-2xl border border-blue-500/20 space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide font-mono text-cyan-300">Verse Staking</h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Deposit VERSE into staking pools to generate passive crypto yield in a secure non-custodial environment.
              </p>
            </div>

            <div className="bg-[#121c44] p-4 rounded-2xl border border-blue-500/20 space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide font-mono text-cyan-300">Verse Scratch & Win</h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                An interactive rewards feature allowing users to scratch tickets and win token prizes instantly.
              </p>
            </div>

            <div className="bg-[#121c44] p-4 rounded-2xl border border-blue-500/20 space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-wide font-mono text-cyan-300">Verse Launchpad</h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Provides early access to vetted Web3 projects and token distribution initiatives within the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT BITCOIN SECTION */}
      <section className="bg-[#0e1635]/90 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-blue-500/20 pb-4">
          <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
            <Globe size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight font-mono">
              About Bitcoin & Blockchain
            </h2>
            <p className="text-xs text-slate-400 font-medium">Foundational concepts of peer-to-peer digital sound money</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-[#121c44] p-5 rounded-2xl border border-blue-500/20 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono">
              <Cpu size={16} />
              <span>What is Bitcoin?</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Bitcoin (BTC) is the world's first decentralized digital currency. Introduced in 2008 by Satoshi Nakamoto, it enables direct peer-to-peer monetary transfers across the globe without intermediaries like banks or governments.
            </p>
          </div>

          <div className="bg-[#121c44] p-5 rounded-2xl border border-blue-500/20 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase font-mono">
              <Layers size={16} />
              <span>What is Blockchain?</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              A blockchain is a shared, immutable digital ledger. Transactions are recorded in blocks cryptographically chained together, synchronized across thousands of independent nodes worldwide.
            </p>
          </div>

          <div className="bg-[#121c44] p-5 rounded-2xl border border-blue-500/20 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
              <Lock size={16} />
              <span>What is Decentralization?</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Decentralization removes central control. No single company, state, or authority can unilaterally alter the ledger, censor valid transactions, or inflate the fixed 21,000,000 BTC supply cap.
            </p>
          </div>

          <div className="bg-[#121c44] p-5 rounded-2xl border border-blue-500/20 space-y-2 md:col-span-2 lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase font-mono text-cyan-300">Why Bitcoin Matters Globally</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Bitcoin provides sovereign financial independence. It empowers anyone with an internet connection to hold, send, and receive digital wealth securely using non-custodial cryptographic keys, protected against inflation and arbitrary monetary policy.
            </p>
          </div>

        </div>
      </section>

      {/* 7. BITCOIN.COM WALLET DOWNLOAD SECTION */}
      <section className="bg-gradient-to-r from-[#0d1a42] via-[#102256] to-[#0c163a] border-2 border-cyan-400/40 rounded-3xl p-6 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 border border-cyan-500/40 rounded-full text-cyan-300 font-bold text-xs uppercase tracking-widest">
              <Smartphone size={14} className="text-cyan-400" />
              <span>Official Wallet Application</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              Bitcoin.com Wallet
            </h2>

            <p className="text-slate-200 text-sm leading-relaxed max-w-xl">
              Take complete self-custodial control of your digital assets. Trusted by tens of millions of users worldwide, the official Bitcoin.com Wallet allows you to send, receive, swap, and manage BTC, VERSE, ETH, BCH, and Web3 tokens safely.
            </p>

            {/* Wallet Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="bg-[#0b1333]/80 p-3 rounded-xl border border-blue-500/20">
                <div className="text-cyan-400 font-bold text-xs font-mono uppercase mb-0.5">100% Non-Custodial</div>
                <div className="text-[11px] text-slate-300">You hold private keys & seed phrases</div>
              </div>

              <div className="bg-[#0b1333]/80 p-3 rounded-xl border border-blue-500/20">
                <div className="text-emerald-400 font-bold text-xs font-mono uppercase mb-0.5">Multi-Chain DEX</div>
                <div className="text-[11px] text-slate-300">Instant Verse DEX & Web3 swaps</div>
              </div>

              <div className="bg-[#0b1333]/80 p-3 rounded-xl border border-blue-500/20">
                <div className="text-indigo-400 font-bold text-xs font-mono uppercase mb-0.5">Buy & Sell Rails</div>
                <div className="text-[11px] text-slate-300">Easy fiat gateways & card options</div>
              </div>
            </div>
          </div>

          {/* Download CTA Button */}
          <div className="shrink-0 text-center space-y-3">
            <a 
              href={OFFICIAL_WALLET_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:scale-105 flex items-center justify-center gap-3 font-mono border border-white/20"
            >
              <Download size={20} />
              <span>Download Bitcoin.com Wallet</span>
              <ExternalLink size={16} />
            </a>
            
            <p className="text-[11px] text-slate-400 font-mono">
              Official Link: branch.wallet.bitcoin.com
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
