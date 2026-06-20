import { useState } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Key, Search, RefreshCw, EyeOff, CheckSquare, HelpCircle } from 'lucide-react';

interface SecurityTabProps {
  language: 'en' | 'bn' | 'bilingual';
}

export default function SecurityTab({ language }: SecurityTabProps) {
  const [activeSubSec, setActiveSubSec] = useState<'audit' | 'scams' | 'cold' | 'explorers'>('audit');
  
  // Interactive audit state variables
  const [useSms2Fa, setUseSms2Fa] = useState<boolean>(true); // default bad practice (SMS is vulnerable to sim swaps)
  const [wroteSeedOnPhone, setWroteSeedOnPhone] = useState<boolean>(true); // default bad practice
  const [usesGoogleAuth, setUsesGoogleAuth] = useState<boolean>(false);
  const [hasSeparateColdWallet, setHasSeparateColdWallet] = useState<boolean>(false);
  const [readsLinksInP2p, setReadsLinksInP2p] = useState<boolean>(false);
  const [checksAppPermissions, setChecksAppPermissions] = useState<boolean>(false);

  // Seed phrase interactive sandbox training
  const [sandboxWords, setSandboxWords] = useState<string[]>(Array(12).fill(''));
  const [revealSandbox, setRevealSandbox] = useState<boolean>(false);

  const getTxt = (en: string, bn: string) => {
    if (language === 'en') return en;
    if (language === 'bn') return bn;
    return `${bn} (${en})`;
  };

  const getBilingualDesc = (en: string, bn: string) => {
    if (language === 'en') return <p className="text-slate-205 text-xs md:text-sm leading-relaxed">{en}</p>;
    if (language === 'bn') return <p className="text-blue-100 text-xs md:text-sm leading-relaxed">{bn}</p>;
    return (
      <div className="space-y-1.5">
        <p className="text-blue-105 text-xs md:text-sm leading-relaxed">{bn}</p>
        <p className="text-slate-400 text-[11px] leading-relaxed border-l border-cyan-500/25 pl-2.5 italic">{en}</p>
      </div>
    );
  };

  // Compute live security score based on checked practices
  let securityScore = 30; // base score of raw beginner
  if (!useSms2Fa) securityScore += 15; // avoiding SMS is good (+15)
  if (!wroteSeedOnPhone) securityScore += 20; // avoiding phone copy is excellent (+20)
  if (usesGoogleAuth) securityScore += 15; // Auth app (+15)
  if (hasSeparateColdWallet) securityScore += 10; // hardware vault (+10)
  if (readsLinksInP2p) securityScore += 5; // cautious in P2P (+5)
  if (checksAppPermissions) securityScore += 5; // checking permissions (+5)

  // Cap secure scores min/max
  securityScore = Math.min(100, Math.max(10, securityScore));

  const safetyFaqs = [
    {
      q: 'Why is SMS 2FA highly risky for crypto exchanges?',
      aEn: 'SMS 2FA can be easily bypassed via "SIM-swapping", where hackers spoof your telecom operator to steal your phone number. Always use non-network authenticators like Google Authenticator or physical Yubikeys.',
      aBn: 'মোবাইল এসএমএস ২এফএ অত্যন্ত ঝুঁকিপূর্ণ কারণ হ্যাকাররা সহজেই টেলিকম অপারেটরকে ধোঁকা দিয়ে আপনার সিম ক্লোন বা সিম-সোয়াপ করতে পারে। সুরক্ষায় সর্বদা গুগল অথেনটিকেটর অ্যাপ ব্যবহার করুন।',
    },
    {
      q: 'Will my MetaMask wallet block smart contract fraud automatically?',
      aEn: 'MetaMask provides standard alarms on high-risk signatures, but cannot stop you from signing harmful smart contracts that authorize spend limits. Always revoke custom spend limits regularly.',
      aBn: 'মেটামাস্ক সাধারণ ক্ষতিকর ইউআরএলের সংকেত দেয়, কিন্তু আপনি ভুল করে ক্ষতিকর চুক্তিতে পারমিশন বা অ্যাপ্রুভাল সাইন ইন করে দিলে এটি আপনার ফান্ড সরিয়ে নেওয়া হ্যাকারকে থামাতে পারে না।',
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in" id="security-tools-view">
      
      {/* Tab Title Banner */}
      <div className="bg-[#0e1633] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 rounded-full text-rose-300 font-bold uppercase tracking-widest text-[9.5px] border border-rose-500/25 shadow-sm">
            <Lock size={13} className="text-rose-455" />
            <span>{getTxt('Cryptographic Defense Arsenal', 'নিরাপত্তা শিল্ড ও হ্যাকার ডিফেন্স হাব')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tight">
            🛡️ {getTxt('Wallet, Security & Anti-Scam Tools', 'ওয়ালেট, নিরাপত্তা ব্যবস্থা ও অডিট টুলস')}
          </h2>
          <p className="text-xs md:text-sm text-blue-250 max-w-3xl leading-relaxed">
            {getTxt(
              'Interactive testing modules regarding hardware seed phrases, scam vulnerabilities, and real-time smart contract audits. Evaluate your security score directly to patch potential leak points.',
              'ক্রিপ্টো ওয়ালেট সুরক্ষিত করার উপায়, পঞ্জি স্ক্যাম চেনার মূল রহস্য এবং প্যানথার সিকিউরিটি অডিটর টুল। নিজের সিকিউরিটি স্কোর নিজে পরখ করে আপনার ডিজিটাল সম্পদকে অসম্ভব শক্তিশালী গড়ে তুলুন।'
            )}
          </p>
        </div>
      </div>

      {/* Main Container Split: Left interactive Audit Checklist, Right detailed modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Cybersecurity self audit form */}
        <div className="lg:col-span-5 bg-[#0a112a] border-2 border-slate-500/15 p-6 rounded-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 font-mono block">Diagnostic Evaluation Tool</span>
            <h3 className="text-base font-black text-white uppercase tracking-tight flex items-center gap-1.5">
              <ShieldCheck className="text-emerald-400" size={18} />
              {getTxt('Interactive Security Audit', 'ইন্টারেক্টিভ ওয়ালেট সিকিউরিটি অডিট')}
            </h3>
            <p className="text-xs text-blue-300 leading-relaxed">
              {getTxt('Check the boxes matching your current personal digital habits. Read your computed live protection level.', 'আপনার বর্তমান ক্রিপ্টো সুরক্ষার অভ্যাসগুলো চেক করুন এবং লাইভ সিকিউরিটি স্কোর দেখে গাইডলাইন পান।')}
            </p>
          </div>

          <div className="space-y-4 border-t border-blue-500/15 pt-4">
            
            {/* SMS 2FA habit */}
            <div className="flex items-start gap-3 bg-[#0f1737] p-3 rounded-xl border border-blue-500/5 hover:border-blue-500/15 transition-colors">
              <input 
                type="checkbox" 
                checked={!useSms2Fa} 
                onChange={() => setUseSms2Fa(!useSms2Fa)}
                className="mt-1 cursor-pointer accent-emerald-400 h-4 w-4 shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-white block">
                  {getTxt("I avoid SMS 2FA, using app authenticators.", "আমি এসএমএস ২এফএ এড়িয়ে গুগল অথেনটিকেটর ব্যবহার করি।")}
                </span>
                <span className="text-[10px] text-blue-300 max-w-sm block mt-0.5">
                  {getTxt("SMS is highly vulnerable to SIM swap attacks.", "সিম সোয়াপিংয়ের তীব্র ঝুঁকি এড়াতে এটি গুরুত্বপূর্ণ।")}
                </span>
              </div>
            </div>

            {/* Seed Phone copy habit */}
            <div className="flex items-start gap-3 bg-[#0f1737] p-3 rounded-xl border border-blue-500/5 hover:border-blue-500/15 transition-colors">
              <input 
                type="checkbox" 
                checked={!wroteSeedOnPhone} 
                onChange={() => setWroteSeedOnPhone(!wroteSeedOnPhone)}
                className="mt-1 cursor-pointer accent-emerald-400 h-4 w-4 shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-white block">
                  {getTxt("My Seed phrase is strictly offline (NO photos/Cloud).", "আমার সিক্রেট সিড ফ্রেজের কোনো স্ক্রিনশট বা গুগল ড্রাইভ কপি নেই।")}
                </span>
                <span className="text-[10px] text-blue-300 max-w-sm block mt-0.5">
                  {getTxt("Never save recovery words on internet connected devices.", "সিড ফ্রেজ ইমেল বা নোটে লিখে রাখা সবচেয়ে বিপদজনক।")}
                </span>
              </div>
            </div>

            {/* Separate Hardware device */}
            <div className="flex items-start gap-3 bg-[#0f1737] p-3 rounded-xl border border-blue-500/5 hover:border-blue-500/15 transition-colors">
              <input 
                type="checkbox" 
                checked={hasSeparateColdWallet} 
                onChange={() => setHasSeparateColdWallet(!hasSeparateColdWallet)}
                className="mt-1 cursor-pointer accent-emerald-400 h-4 w-4 shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-white block">
                  {getTxt("I use an offline Hardware Wallet for main holdings.", "আমি বড় অঙ্কের বিনিয়োগ সুরক্ষায় মেটাল বা হার্ডওয়্যার কী ব্যবহার করি।")}
                </span>
              </div>
            </div>

            {/* Verification of Links in P2P */}
            <div className="flex items-start gap-3 bg-[#0f1737] p-3 rounded-xl border border-blue-500/5 hover:border-blue-500/15 transition-colors">
              <input 
                type="checkbox" 
                checked={readsLinksInP2p} 
                onChange={() => setReadsLinksInP2p(!readsLinksInP2p)}
                className="mt-1 cursor-pointer accent-emerald-400 h-4 w-4 shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-white block">
                  {getTxt("I explicitly verify bank names & sender IDs in P2P.", "আমি পি২পি লেনদেনে রিসিভারের আসল ব্যাংক নাম ও স্ক্রিনশট মিলিয়ে নিই।")}
                </span>
              </div>
            </div>

          </div>

          {/* Dynamic computed score results bar */}
          <div className="bg-[#0c1228] p-4 rounded-2xl border border-blue-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase text-[#a5b4fc] tracking-wider block">Computed Safety Rating</span>
              <span className={`text-xl font-black font-mono px-2 py-0.5 rounded ${
                securityScore >= 80 ? 'text-emerald-400 bg-emerald-500/5' : securityScore >= 50 ? 'text-yellow-405 bg-yellow-450/5' : 'text-rose-400 bg-rose-500/5'
              }`}>
                {securityScore}%
              </span>
            </div>
            
            <div className="w-full bg-blue-950/75 h-3.5 rounded-full overflow-hidden border border-blue-500/10">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  securityScore >= 80 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : securityScore >= 50 ? 'bg-gradient-to-r from-yellow-500 to-amber-400' : 'bg-gradient-to-r from-rose-500 to-pink-500'
                }`}
                style={{ width: `${securityScore}%` }}
              />
            </div>

            <p className="text-[10.5px] leading-relaxed text-blue-200 block text-center pt-1 font-bold">
              {securityScore >= 80 ? '🥇 Elite Level Defended! Highly safe setup.' : securityScore >= 50 ? '⚠️ Moderate level! Vulnerable to specific phone/cloud hacks.' : '🚨 Extremely vulnerable! Take immediate action to backup your seed phrases offline.'}
            </p>
          </div>
        </div>

        {/* Right Side: Informative tabs with rich study materials */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex gap-2 border-b border-blue-500/10 pb-2">
            {(['audit', 'scams', 'cold', 'explorers'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubSec(sub)}
                className={`flex-1 py-2 text-xs font-black uppercase tracking-wider text-center cursor-pointer rounded-lg border transition-all ${
                  activeSubSec === sub 
                    ? 'bg-[#10193e] border-cyan-500/35 text-cyan-300 font-bold' 
                    : 'border-transparent text-blue-200 hover:text-white hover:bg-blue-950/40'
                }`}
              >
                {sub === 'audit' && getTxt('P2P Safety', 'পি২পি লেনদেনের নিয়ম')}
                {sub === 'scams' && getTxt('Ponzi Red Flags', 'স্ক্যাম ও পঞ্জি ফাঁদ চেনার উপায়')}
                {sub === 'cold' && getTxt('Seed Guide', 'সিড ফ্রেজ সুরক্ষা মডিউল')}
                {sub === 'explorers' && getTxt('DApps & Explorers', 'এক্সপ্লোরার ও প্রয়োজনীয় টুল')}
              </button>
            ))}
          </div>

          <div className="bg-[#0b122f] border-2 border-cyan-500/10 p-6 rounded-3xl min-h-[300px]">
            {activeSubSec === 'audit' && (
              <div className="space-y-4">
                <h4 className="text-base font-black text-white uppercase italic tracking-tight">{getTxt('Secure peer-to-peer (P2P) transaction manuals', '১. পি২পি (P2P) লেনদেনের অত্যন্ত সুরক্ষিত নিয়ামবলী')}</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  {getTxt(
                    'P2P platforms (like Binance P2P) connect buyers with sellers directly. While escrow checks prevent general token thefts, scammers rely on external bank manipulation tactics.',
                    'পি২পি (P2P) এর মাধ্যমে আমরা বাংলাদেশি রিয়াল টাকা দিয়ে সহজে মোবাইল ব্যাংকিং সিস্টেমে (বিকাশ বা রকেট) লেনদেন সম্পন্ন করি। তবে হ্যাকার বা স্প্যামাররা ব্যাংক প্রতারণার চমৎকার সব ফন্দি ব্যবহার করে।'
                  )}
                </p>
                <div className="space-y-2 bg-[#0e173d] p-4 rounded-xl border border-blue-500/10 text-xs">
                  <span className="font-extrabold uppercase text-cyan-400 block tracking-wider">{getTxt('P2P Protection Checkpoints:', 'সুরক্ষিত থাকার গোপন পি২পি পরামর্শ:')}</span>
                  <ul className="list-disc list-inside space-y-1.5 text-blue-105">
                    <li>{getTxt('Never click the "Release Assets" button before verifying actual ledger balance inside your mobile wallet app.', 'নগদ বা বিকাশে ব্যালেন্স রিসিভ হওয়ার নোটিফিকেশন এলেই বিশ্বাস করবেন না; ম্যানুয়ালি আগে অ্যাপে ট্রানজেকশন হিস্ট্রি চেক করুন।')}</li>
                    <li>{getTxt('Decline orders requesting you to pay a different user account than listed on Binance KYC names.', 'বাইন্যান্সে যে কেওয়াইসি নাম দেওয়া আছে, তার বাইরে তৃতীয় কোনো ব্যক্তির বিকাশ বা রকেট নাম্বারে বিল পাঠানো থেকে বিরত থাকুন।')}</li>
                    <li>{getTxt('Under NO circumstances release crypto based on fake SMS payment alerts.', 'ভুয়া বাল্ক এসএমএস দিয়ে পেমেন্ট সাকসেসফুলের জাল স্ক্রিনশট প্রায়ই প্রদর্শন করা হয়; সচেতন থাকুন।')}</li>
                  </ul>
                </div>
              </div>
            )}

            {activeSubSec === 'scams' && (
              <div className="space-y-4">
                <h4 className="text-base font-black text-white uppercase italic tracking-tight">{getTxt('Ponzi Red Flags & MLM pyramid network filters', '২. বিপজ্জনক ক্রিপ্টো পঞ্জি ও এমএলএম ফাড় চেনার লক্ষণ')}</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  {getTxt(
                    'In Bangladesh, bad actors set up automated applications claiming daily compound returns on digital packages. Legitimate cryptos NEVER guarantee monthly ROI.',
                    'বাংলাদেশে প্রলোভন দেখিয়ে বিভিন্ন অ্যাপ ডাউনলোড করতে বলা হয় এবং দিনে বা মাসে নির্দিষ্ট ফিক্সড লভ্যাংশ দেওয়ার স্বপ্ন দেখায়। কোনো আসল ক্রিপ্টো কখনো নির্দিষ্ট হারের ইনকাম গ্যারান্টি দেয় না।'
                  )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#240d12] p-3.5 rounded-xl border border-rose-500/15">
                    <span className="text-rose-350 text-xs font-black uppercase tracking-wider block">🚩 Ponzi Scam Signs</span>
                    <ul className="list-disc list-inside text-[11px] text-blue-150 mt-1.5 space-y-1">
                      <li>Guaranteed daily/weekly profit returns.</li>
                      <li>Forced direct referral commission structures.</li>
                      <li>Lack of actual github code or technical developer profiles.</li>
                    </ul>
                  </div>
                  <div className="bg-[#0b1c18] p-3.5 rounded-xl border border-emerald-500/15">
                    <span className="text-emerald-350 text-xs font-black uppercase tracking-wider block">🛡️ Real Crypto Reality</span>
                    <ul className="list-disc list-inside text-[11px] text-blue-150 mt-1.5 space-y-1">
                      <li>Prices are determined purely by open market orders.</li>
                      <li>No mandatory multi-level team recruitment requirements.</li>
                      <li>Fully audited decentralization block tracking codebases.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSubSec === 'cold' && (
              <div className="space-y-4">
                <h4 className="text-base font-black text-white uppercase italic tracking-tight">{getTxt('Seed-phrase private control strategies', '৩. সিক্রেট সিড ফ্রেজ এবং হার্ডওয়্যার কোল্ড কী')}</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  {getTxt(
                    'If you lose your seed phrase, you lose your wealth forever. If anyone else gains access to it, they can sweep your entire wallet instantly.',
                    'রিকভারি সিক্রেট কি (১২/২৪ শব্দ) হলো আপনার ওয়ালেটের মূল মাস্টার কি। এটি কোনো ই-মেইল বা মেসেঞ্জারে রাখলে যেকোনো ম্যালওয়্যার স্ক্যানার তা চুরি করে মুহূর্তের মধ্যে সব ডলার উইথড্র করে নিতে পারে।'
                  )}
                </p>
                <div className="bg-blue-950/75 p-4 rounded-xl border border-blue-500/10 text-xs space-y-2">
                  <span className="font-extrabold uppercase text-cyan-400 block tracking-wider">{getTxt('Offline Safeguarding Checklist:', 'অফলাইন সেভিংস মডিউল গাইড:')}</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Write words sequentially with waterproof black ink on paper.</li>
                    <li>Avoid typing words directly on digital keyboards, screenshots, or messaging drafts.</li>
                    <li>Store duplicates at securely sealed waterproof bags.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeSubSec === 'explorers' && (
              <div className="space-y-4">
                <h4 className="text-base font-black text-white uppercase italic tracking-tight">{getTxt('Essential Tools, DApps & Blockchain Explorers', '৪. ব্লক এক্সপ্লোরার ও লাইভ অডিট পোর্টাল বিশ্লেষণ')}</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  {getTxt(
                    'Explorers are transparent public search engines that allow you to verify every transfer hash, wallet address balance, and active smart contract code line live.',
                    'ব্লক এক্সপ্লোরার হলো ব্লকচেইনের উন্মুক্ত গুগল সার্চ ইঞ্জিন। এর সাহায্যে যেকোনো ব্যক্তি যেকোনো লেনদেনের নিখুঁত তথ্য ও ওয়ালেট এড্রেস রেকর্ড দেখতে পারে।'
                  )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <a href="https://etherscan.io" target="_blank" rel="noreferrer" className="bg-[#0f1737] p-3 rounded-lg border border-blue-500/10 hover:border-cyan-400 text-center block text-xs font-mono font-bold text-white transition-all">
                    Etherscan.io (ETH)
                  </a>
                  <a href="https://bscscan.com" target="_blank" rel="noreferrer" className="bg-[#0f1737] p-3 rounded-lg border border-blue-500/10 hover:border-cyan-400 text-center block text-xs font-mono font-bold text-white transition-all">
                    BscScan.com (BNB)
                  </a>
                  <a href="https://solscan.io" target="_blank" rel="noreferrer" className="bg-[#0f1737] p-3 rounded-lg border border-blue-500/10 hover:border-cyan-400 text-center block text-xs font-mono font-bold text-white transition-all">
                    Solscan.io (SOL)
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Interactive Seed Phrase mnemonic training sandbox */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h3 className="text-base md:text-lg font-black text-white uppercase italic tracking-wide flex items-center gap-2">
            <Key size={18} className="text-rose-400" />
            ⚠️ {getTxt('Seed Phrase Security Training Sandbox', 'সিড ফ্রেজ অফলাইন কিবোর্ড ট্রেনিং')}
          </h3>
          <p className="text-xs text-blue-200 leading-relaxed">
            {getTxt(
              'A local simulated sandbox to practice how MetaMask generates an offline BIP-39 backup phrase. NEVER input your actual live seed words anywhere online!',
              'এই টুলটি শুধু নতুনদের বোঝানোর জন্য একটি অফলাইন মেটামাস্ক সিমুলেটর প্যানেল। এখানে ট্রাস্ট ওয়ালেট বা মেটামাস্কের ১২ শব্দের তৈরি হওয়ার রুল দেখানো হয়েছে। কখোনই নিজের আসল মেটামাস্ক শব্দ এখানে বা ইন্টারনেটের কোথাও টাইপ করবেন না!'
            )}
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3.5">
          {sandboxWords.map((word, i) => (
            <div key={i} className="relative">
              <span className="absolute left-2.5 top-2.5 text-[9px] font-mono font-black text-rose-455">
                #{String(i + 1).padStart(2, '0')}
              </span>
              <input 
                type={revealSandbox ? 'text' : 'password'} 
                value={word}
                onChange={(e) => {
                  const copy = [...sandboxWords];
                  copy[i] = e.target.value.toLowerCase().replace(/[^a-z]/gi, '');
                  setSandboxWords(copy);
                }}
                placeholder="secretword"
                className="w-full bg-[#11193a] border-2 border-slate-500/25 rounded-lg p-2.5 pt-6 text-xs text-center font-mono font-bold text-white focus:outline-none focus:border-rose-400 placeholder:text-blue-300/10"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-blue-500/10 pt-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                // Generate 12 random dictionary words as demo
                const sampleWords = ['apple', 'globe', 'digital', 'shield', 'cryptography', 'trust', 'island', 'ocean', 'silver', 'future', 'freedom', 'security'];
                // shuffle array 
                const shuffled = [...sampleWords].sort(() => 0.5 - Math.random());
                setSandboxWords(shuffled);
              }}
              className="px-4 py-2 border border-rose-500/20 text-xs font-black uppercase text-rose-300 hover:bg-rose-500/10 rounded-lg cursor-pointer transition-all"
            >
              {getTxt('Generate Demo Array', 'ডেমো ১২ শব্দ তৈরি করুন')}
            </button>
            
            <button
              onClick={() => setRevealSandbox(!revealSandbox)}
              className="px-3 py-2 text-xs font-bold text-blue-200 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <EyeOff size={13} />
              {revealSandbox ? getTxt('Hide Words', 'শব্দ লুকান') : getTxt('Reveal Words', 'শব্দ উম্মুক্ত করুন')}
            </button>
          </div>

          <p className="text-[10px] text-rose-400 font-bold max-w-lg text-center md:text-right">
            ⚠️ {getTxt('This training module operates 100% locally on your browser. Zero bytes are communicated over network protocols to maintain total educational secrecy.', 'নিরাপত্তা নিশ্চিত করতে এই ডেমো শব্দগুলো আপনার কোনো ডাটা সার্ভারে ট্রান্সফার করে না। সম্পূর্ণ অফলাইন এবং শতভাগ নিরাপদ।')}
          </p>
        </div>
      </div>

      {/* NEW SECTION: WALLETS, KYC & PRIVACY MATRIX */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h3 className="text-[#a5b4fc] text-lg font-black uppercase italic tracking-tight flex items-center gap-2">
            🔑 {getTxt('Wallet Types, KYC & Privacy Safeguards', 'ওয়ালেট ক্লাসিফিকেশন, কেওয়াইসি এবং অন-চেইন প্রাইভেসী')}
          </h3>
          <p className="text-xs text-blue-250">
            {getTxt('Deepen your familiarity with cold physical units and exchange KYC account risks.', 'ঠান্ডা মাথার হার্ডওয়্যার স্টোরেজ এবং বিভিন্ন কেন্দ্রীভূত এক্সচেঞ্জে পাসপোর্ট/আইডি চুরি যাওয়ার রিস্ক ম্যানেজমেন্ট।')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-4">
            <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] font-black uppercase text-cyan-300 font-mono tracking-wide">
              Hardware Wallets Comparison
            </span>
            <div className="space-y-3 text-xs leading-relaxed text-slate-100">
              <p>
                {getTxt(
                  'Hardware wallets (Ledger Nano X, Trezor Safe) seal your secret recovery phrase inside an isolated secure-element microchip. Even if your computer is completely infected with malware, transactions are signed locally inside the physical device itself. Highly recommended for heavy asset storing.',
                  'হার্ডওয়্যার বা কোল্ড ওয়ালেট (যেমনঃ Ledger, Trezor) আপনার ১২ বা ২৪ শব্দের পুনরুদ্ধার পাসওয়ার্ড একটি সম্পূর্ণ অফলাইন মাইক্রোচিপে লক করে রাখে। কম্পিউটার স্ক্রিনে কোনো ভাইরাস প্রবেশ করলেও ওয়ালেটের ডলার চুরি করা কোনো হ্যাকারের পক্ষে সম্ভব নয়।'
                )}
              </p>
              <ul className="list-disc list-inside text-blue-200 text-[11px] space-y-1">
                <li>Ledger: Closed/shared-source secure chips with companion utility.</li>
                <li>Trezor: 100% open-source security firmware architecture.</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-4">
            <span className="px-2 py-0.5 bg-rose-500/10 border border-rose-505/20 rounded text-[9px] font-black uppercase text-rose-350 font-mono tracking-wide">
              Exchange KYC Risks & On-Chain Privacy
            </span>
            <div className="space-y-3 text-xs leading-relaxed text-slate-100">
              <p>
                {getTxt(
                  'Know-Your-Customer (KYC) involves uploading your passport or National ID to custodial offshore exchanges. Scammer-hosted fake exchange sites actively mimic KYC prompts to collect and sell personal legal identities. Always ensure you only upload identity details to verified domain servers carrying valid SSL seals.',
                  'কেওয়াইসি (Know Your Customer) হলো পাসপোর্ট বা আইডি কার্ডের স্ক্যান কপি এক্সচেঞ্জগুলোতে আপলোড করা। প্রতারক বা ফিশিং সাইটে ভুলেও এনআইডি ছবি আপলোড করবেন না; হ্যাকাররা এগুলো সংগ্রহ করে ডার্কওয়েবে ব্ল্যাকমেইল করার উদ্দেশ্যে বিক্রি করে থাকে।'
                )}
              </p>
              <p className="text-[11px] text-rose-300 italic">
                💡 {getTxt('Never reuse exchange passwords across personal email accounts or Google passwords.', 'কখনোই এক্সচেঞ্জের মূল পাসওয়ার্ড আপনার ইমেল বা ফেসবুক পাসওয়ার্ডের সাথে এক রাখবেন না।')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SEGMENT: DAPPS SPEND APPROVALS & REVOKING PROCEDURES */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/25 text-cyan-405 font-mono font-black text-sm">
            🔗
          </div>
          <div>
            <h4 className="text-lg font-black text-white uppercase italic tracking-tight">
              🔐 {getTxt('Smart Contract Allowances & Revoke Procedures', 'স্মার্ট কন্ট্রাক্ট পারমিশন রিভোক অডিট')}
            </h4>
            <p className="text-xs text-blue-200">
              {getTxt('Learn how malicious Web3 apps abuse unlimited spending approvals to extract your entire wallet.', 'ক্রিমিনালরা কীভাবে আপনার মেটাবিল্ডিং ওয়ালেটের ডলার চুরি করার জন্য আনলিমিটেড স্পেন্ডিং পারমিশন হাতিয়ে নেয় তা চিনে নিন।')}
            </p>
          </div>
        </div>

        <div className="p-5 bg-[#0a112a] border border-indigo-500/15 rounded-2xl space-y-3.5 text-xs">
          <span className="font-extrabold text-cyan-405 uppercase tracking-wider block text-[10.5px]">🛡️ The Allowance Shield Protocol Checklist:</span>
          <p className="text-slate-200 leading-relaxed">
            {getTxt(
              'When interacting with Decentralized Applications (DApps), MetaMask prompts you for a "Spending Limit Approval" screen. If you approve an "Infinite Allowance" signature to an audited or mock smart contract, the hacker gains legal spending access to withdraw that specific token anytime without your signature.',
              'যেকোনো বিকেন্দ্রীকৃত প্রজেক্টে বা ডিঅ্যাপসে মেটামাস্ক কানেক্ট করার সময়ে "Spending Limit" এর সংকেত দেখায়। আপনি যদি অসতর্কভাবে সেখানে "Unlimited" বা আনলিমিটেড ডলারের অনুমোদন সাইন করে দেন, তবে ফিউচারে আপনার ওয়ালেটের সকল ফান্ড মুহূর্তেই হ্যাকারের এড্রেসে স্থানান্তর হবে।'
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-blue-500/10 pt-4">
            <div className="bg-[#0f1737] p-3 rounded-lg">
              <span className="font-black text-white uppercase text-[10px] block mb-1">🔍 Tool: Revoke.cash</span>
              <p className="text-[11px] text-blue-200">
                {getTxt('Connect your wallet to Revoke.cash regularly to list active approvals and reset custom caps to $0.', 'নিয়মিত Revoke.cash ওয়েব পোর্টাল ব্যবহারে আপনার অযাচিত আনলিমিটেড পারমিশন চেক করুন এবং সাথে সাথে বন্ধ করে দিন।')}
              </p>
            </div>
            <div className="bg-[#0f1737] p-3 rounded-lg">
              <span className="font-black text-white uppercase text-[10px] block mb-1">🛡️ Burner Wallet Strategy</span>
              <p className="text-[11px] text-blue-200">
                {getTxt('Always maintain a secondary burner wallet with zero main holdings for collecting airdrop claims and signing mystery contracts.', 'মূল ইনভেস্টমেন্ট ওয়ালেটে কখনোই ডিঅ্যাপস কানেক্ট করবেন না। এয়ারড্রপ ক্লেইম বা ডেমো কুইজের জন্য সম্পূর্ণ আলাদা বার্নার ওয়ালেট ব্যবহার করুন।')}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
