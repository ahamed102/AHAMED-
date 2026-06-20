import { useState } from 'react';
import { Users, HelpCircle, Award, Send, CheckCircle2, XCircle, ChevronDown, ChevronUp, Trophy, RefreshCw } from 'lucide-react';

interface CommunityTabProps {
  language: 'en' | 'bn' | 'bilingual';
}

interface QuizQuestion {
  qEn: string;
  qBn: string;
  optionsEn: string[];
  optionsBn: string[];
  correctAnsIdx: number;
  explanationEn: string;
  explanationBn: string;
}

export default function CommunityTab({ language }: CommunityTabProps) {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  
  // Interactive Quiz Engine State
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Airdrop checker simulation
  const [addressInput, setAddressInput] = useState<string>('');
  const [isEligible, setIsEligible] = useState<'idle' | 'checking' | 'eligible' | 'notEligible'>('idle');

  const getTxt = (en: string, bn: string) => {
    if (language === 'en') return en;
    if (language === 'bn') return bn;
    return `${bn} (${en})`;
  };

  const getBilingualDesc = (en: string, bn: string) => {
    if (language === 'en') return <p className="text-slate-200 text-xs md:text-sm leading-relaxed">{en}</p>;
    if (language === 'bn') return <p className="text-blue-100 text-xs md:text-sm leading-relaxed">{bn}</p>;
    return (
      <div className="space-y-1.5">
        <p className="text-blue-105 text-xs md:text-sm leading-relaxed">{bn}</p>
        <p className="text-slate-400 text-[11px] leading-relaxed border-l border-cyan-500/25 pl-2.5 italic">{en}</p>
      </div>
    );
  };

  // 4 high-quality educational security questions
  const quizQuestions: QuizQuestion[] = [
    {
      qEn: 'If a Telegram channel admin messages you offering a guaranteed 3% daily return on USDT, what is it?',
      qBn: 'যদি কোনো টেলিগ্রাম চ্যানেল অ্যাডমিন আপনাকে এসএমএস করে প্রতিদিন ৩% নিশ্চিত প্রফিট দেওয়ার দাবি করে, তবে সেটি আসলে কী?',
      optionsEn: [
        'A revolutionary algorithmic decentralization program',
        'A standard high-yield professional investing firm',
        'A 100% dangerous Ponzi / MLM fraudulent scam',
        'An official Binance partnership project'
      ],
      optionsBn: [
        'একটি বৈপ্লবিক সয়ংক্রিয় ব্লকচেইন মাইনিং প্রোটোকল',
        'পেশাদার বিশ্বস্ত দীর্ঘমেয়াদী ইনভেস্ট কোম্পানি',
        'শতভাগ বিপজ্জনক পঞ্জি (MLM) এবং প্রতারণার ফাঁদ',
        'বাইন্যান্সের অফিসিয়াল পার্টনারশিপ পার্টনার'
      ],
      correctAnsIdx: 2,
      explanationEn: 'Legitimate crypto protocols never guarantee daily linear returns. This is a classic Ponzi exit trap common on chat networks. Never send your dollars!',
      explanationBn: 'আসল ক্রিপ্টো মার্কেট কখনোই প্রতিদিন নির্দিষ্ট ফিক্সড লাভ দেওয়ার গ্যারান্টি দেয় না। এটি একটি বিশুদ্ধ ক্যারেক্টার পঞ্জি বা টাকা মেরে পালানোর ফাঁদ। ভুলেও ডলার পাঠাবেন না!'
    },
    {
      qEn: 'Where is the absolutely safest place to preserve your 12-word seed recovery phrase?',
      qBn: 'আপনার ওয়ালেটের ১২ শব্দের গোপন পুনরুদ্ধার সিক্রেট কি লিখে রাখার সবচেয়ে নিরাপদ স্থান কোনটি?',
      optionsEn: [
        'In your private draft on Telegram or Discord',
        'Stored as a screenshot inside your email or Google Drive',
        'Written on an offline physical paper, laminated and stored securely',
        'Saved inside a text file on your laptop desktop'
      ],
      optionsBn: [
        'টেলিগ্রাম বা ডিসকর্ডের সেভড মেসেজে ড্রাফট করে রাখা',
        'মোবাইলে স্ক্রিনশট নিয়ে গুগল ড্রাইভে বা মেইলে রাখা',
        'অফলাইনে খাতায় কলমে লিখে লেমিনেটিং করে ব্যক্তিগত গোপন বক্সে সেভ রাখা',
        'ল্যাপটপের ডেক্সটপে একটি সাধারণ টেক্সট ফাইলে লিখে রাখা'
      ],
      correctAnsIdx: 2,
      explanationEn: 'Cloud storages, screenshots, and drives are vulnerable to keylogging malware hacks. Offline physical laminated paper ensures zero contact with cyber hackers.',
      explanationBn: 'যেকোনো অনলাইন ড্রাইভ, ল্যাপটপ ফাইল বা স্ক্রিনশট সহজেই ম্যালওয়্যার দিয়ে হ্যাক করা যায়। অফলাইনে কাগজে লিখে ঠান্ডা মাথায় সেভ করার কোনো বিকল্প নেই!'
    },
    {
      qEn: 'When trading on P2P marketplaces like Binance, what should you do if the buyer sends a custom SMS notification saying "Payment Complete" but your bank app shows zero balance?',
      qBn: 'পি২পি ট্রেডে বায়ার যদি আপনাকে ম্যাসেজ পাঠিয়ে বলে "পেমেন্ট কমপ্লিট" কিন্তু আপনার আসল বিকাশ বা রকেট অ্যাপে কোনো টাকা না এড হয়, তবে আপনি কী করবেন?',
      optionsEn: [
        'Release the crypto assets instantly to prevent dispute limits',
        'Refuse release, trust your bank app ledger exclusively, and appeal to admin check',
        'Wait 5 minutes and then click release without checking bank balance',
        'Share your password with the buyer'
      ],
      optionsBn: [
        'দ্রুত ক্রিপ্টো রিলিজ করে দেওয়া উচিত যাতে বায়ার কষ্ট না পায়',
        'কখনোই ক্রিপ্টো রিলিজ করবেন না, নিজের ব্যাংক হিস্ট্রিকে বিশ্বাস করুন এবং বাইন্যান্স আপিল করুন',
        '৫ মিনিট অপেক্ষা করে চেক না করেই রিলিজ বাটনে চাপ দেওয়া',
        'ক্রেতাকে আপনার বিকাশ পাসওয়ার্ড শেয়ার করা'
      ],
      correctAnsIdx: 1,
      explanationEn: 'Scammers frequently send fake sender bulk SMS messages mimicking banks. Always verify actual physical mobile ledger balances yourself inside your app.',
      explanationBn: 'প্রতারকেরা সচরাচর জিপি বা রবির ভুয়া বাল্ক এসএমএস সার্ভার হ্যাক দিয়ে আপনাকে ব্যাংক থেকে মেসেজ পাঠাতে পারে। নিজের ওয়ালেট স্টেটমেন্টে টাকা না জমা হওয়া পর্যন্ত রিলিজ বাটনে চাপ দেওয়া আত্মহত্যাসম!'
    }
  ];

  const currentQ = quizQuestions[quizIdx];

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(idx);
    if (idx === currentQ.correctAnsIdx) {
      setScore(score + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    if (quizIdx < quizQuestions.length - 1) {
      setQuizIdx(quizIdx + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizIdx(0);
    setSelectedOption(null);
    setQuizFinished(false);
    setScore(0);
  };

  // Simulated eligible eligibility criteria for custom mockup airdrops
  const checkAirdropEligibility = () => {
    if (!addressInput.trim()) return;
    setIsEligible('checking');
    setTimeout(() => {
      // simulate checking by mock address hash
      if (addressInput.toLowerCase().startsWith('0x') && addressInput.length >= 35) {
        setIsEligible('eligible');
      } else {
        setIsEligible('notEligible');
      }
    }, 1500);
  };

  const banglaFaqs = [
    {
      q: 'বাংলাদেশ থেকে নতুন ফ্রিল্যান্সাররা কীভাবে নিরাপদে ক্রিপ্টো জ্ঞান অর্জন করতে পারে?',
      enQ: 'How can young freelancers in Bangladesh safely acquire cryptographic awareness?',
      a: 'তরুণদের প্রথম পরামর্শ হলো কোনো লোভনীয় ট্রেডিং টেলিগ্রাম সংকেতে পা না দিয়ে ব্লকচেইন মেকানিজম শেখা। আপনার ওয়ালেট সুরক্ষায় নন-কাস্টোডিয়াল প্রোটোকল শিখুন এবং লোকাল স্প্যাম সাইট চিনে ডিঙিয়ে চলুন।'
    },
    {
      q: 'এয়ারড্রপ হান্টিং বা ফ্রি ক্লেইম কুইজের নামে কীভাবে প্রতারণা প্রতিরোধ করব?',
      enQ: 'How do I prevent scams masking as free airdrops or easy quizzes?',
      a: 'প্রতারক সাইটগুলোতে ক্লেইম বোনাস লিখে মেটামাস্ক এড্রেস কানেক্ট ও অল পারমিশন সাইন করতে বলে। পারমিশন দেওয়া মানেই আপনার ব্যালেন্স শূন্য হওয়া। যেকোনো অপরিচিত সাইটে মেটামাস্ক কানেক্ট করার পূর্বে বার্নার ওয়ালেট ব্যবহার করুন।'
    },
    {
      q: 'ভার্স প্রজেক্টের সাথে যুক্ত থাকার সুফল কী?',
      enQ: 'What are the core educational benefits of participating in Verse Community?',
      a: 'ভার্স কমিউনিটি মূলত বাংলাদেশি যুবকদের ক্রিপ্টোগ্রাফি ও ওয়েব৩ সিকিউরিটি ফ্রন্ট লাইনে শতভাগ ফ্রিতে সাহায্য করে। এটি সঠিক ও নিরাপদ নলেজ শেয়ারের একটি স্বাধীন পাবলিক ফোরাম।'
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in" id="community-view">
      
      {/* Community Welcoming Title */}
      <div className="bg-[#0e1633] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-300 font-bold uppercase tracking-widest text-[9.5px] border border-cyan-500/20 shadow-sm">
            <Users size={13} className="text-cyan-400" />
            <span>{getTxt('National Security Initiative', 'বাংলাদেশী ক্রিপ্টো সচেতনতা ফোরাম')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tight">
            🇧🇩 {getTxt('Bangladesh Crypto Community Portal', 'বাংলাদেশ ক্রিপ্টোকারেন্সি কম্যুনিটি')}
          </h2>
          <p className="text-xs md:text-sm text-blue-250 max-w-3xl leading-relaxed">
            {getTxt(
              'A dedicated academic segment tailored to Bengali language education. Interact with our security quiz modules, practice checking airdrop addresses, and expand your non-custodial literacy.',
              'বাংলাদেশের ক্রিপ্টোকারেন্সি ও ব্লকচেইন শিক্ষানবিসদের জন্য নির্মিত বিশেষ বিভাগ। এখানে সম্পূর্ণ বাংলায় ক্রিপ্টো প্রশ্নোত্তর, কুইজ প্রতিযোগিতা, শিক্ষা এয়ারড্রপ ট্র্যাকার এবং গাইডবুক ফ্রিতে রাখা হয়েছে।'
            )}
          </p>
        </div>
      </div>

      {/* Main Interactive Quiz Card Section */}
      <div className="bg-[#0a112a] border-2 border-[#818cf8]/20 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row gap-8 items-center justify-between">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#818cf8]/10 rounded-full text-indigo-300 font-bold uppercase text-[9.5px] border border-[#818cf8]/25 shadow-sm">
            <Trophy size={12} className="text-indigo-400" />
            <span>{getTxt('Interactive Awareness Contest', 'শিক্ষা ক্যুইজ এবং বুদ্ধিমত্তা টেস্ট')}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">
            🧠 {getTxt('Anti-Scam Intelligence Quiz', 'স্ক্যাম প্রতিরোধ চ্যাম্পিয়নশিপ')}
          </h3>
          <p className="text-xs md:text-sm text-blue-200">
            {getTxt(
              'Test your cybersecurity knowledge regarding P2P banking checkouts and seed protection guidelines. Clear all stages with active scores!',
              'ক্রিপ্টোগ্রাফির সুরম্য অডিট ও পি২পি হ্যাক থেকে বাঁচার বাস্তবিক পরীক্ষা। ৩টি কঠিন প্রশ্নের সঠিক উত্তর দিয়ে নিজের আত্মরক্ষা মডিউল ঝালাই করে নিন।'
            )}
          </p>
          <div className="flex items-center gap-3 bg-blue-950/60 p-4.5 rounded-xl border border-blue-500/10 text-xs">
            <span className="text-indigo-300 font-black">Score Tracker:</span>
            <span className="font-mono text-white font-bold bg-indigo-500/15 px-2.5 py-1 rounded border border-indigo-500/25">
              {score} / {quizQuestions.length}
            </span>
          </div>
        </div>

        {/* Selected Active Quiz Box */}
        <div className="w-full lg:w-[500px] bg-[#0c1334] p-6 rounded-2xl border border-blue-500/20 space-y-4 shadow-inner relative overflow-hidden">
          
          {!quizFinished ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10.5px] font-mono text-cyan-405 font-bold uppercase pb-2 border-b border-blue-500/10">
                <span>STAGE #{String(quizIdx + 1).padStart(2, '0')}</span>
                <span>Active Game</span>
              </div>
              
              <h4 className="text-xs md:text-sm font-bold text-white leading-relaxed">
                {language === 'en' ? currentQ.qEn : currentQ.qBn}
              </h4>

              <div className="space-y-2">
                {(language === 'en' ? currentQ.optionsEn : currentQ.optionsBn).map((opt, oIdx) => {
                  const isChosen = selectedOption === oIdx;
                  const isCorrectAnswer = oIdx === currentQ.correctAnsIdx;
                  
                  let optionStyle = 'bg-[#11193a]/80 border-blue-500/15 text-blue-200 hover:text-white hover:border-blue-500/30';
                  if (selectedOption !== null) {
                    if (isCorrectAnswer) {
                      optionStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold';
                    } else if (isChosen) {
                      optionStyle = 'bg-rose-500/10 border-rose-500 text-rose-455 font-bold';
                    } else {
                      optionStyle = 'bg-[#11193a]/30 border-blue-500/5 text-blue-200/50 cursor-not-allowed';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleOptionClick(oIdx)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && isCorrectAnswer && <CheckCircle2 size={13} className="text-emerald-400 shrink-0 ml-2" />}
                      {selectedOption !== null && isChosen && !isCorrectAnswer && <XCircle size={13} className="text-rose-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Quiz explanation reveals here */}
              {selectedOption !== null && (
                <div className="bg-indigo-500/5 p-4 rounded-xl border border-[#818cf8]/20 animate-fade-in space-y-1">
                  <span className="text-[10px] font-black uppercase text-indigo-300 block">Explanation & Security Takeaway</span>
                  <p className="text-[11.5px] leading-relaxed text-slate-200">
                    {language === 'en' ? currentQ.explanationEn : currentQ.explanationBn}
                  </p>
                  <button
                    onClick={handleNextQuiz}
                    className="mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-black uppercase text-[10px] p-2.5 rounded-lg border border-indigo-400 cursor-pointer shadow hover:brightness-110 tracking-widest"
                  >
                    {quizIdx < quizQuestions.length - 1 ? getTxt('Next Question', 'পরবর্তী প্রশ্ন') : getTxt('Finish & Score Result', 'ক্যুইজ সমাপ্ত করুন')}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <Trophy size={48} className="mx-auto text-yellow-400 animate-bounce" />
              <h4 className="text-lg font-black text-white uppercase italic">{getTxt('Quiz Completed!', 'ক্যুইজ সম্পূর্ণ হয়েছে!')}</h4>
              <p className="text-xs text-blue-250">
                {getTxt(
                  `You scored exactly ${score} out of ${quizQuestions.length} security points. Highly strategic and well done!`,
                  `আপনি ৩টির মাঝে মোট ${score}টি প্রশ্নের সঠিক উত্তর দিয়ে অত্যন্ত বিচক্ষণ পরিচয় প্রকাশ করেছেন!`
                )}
              </p>
              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-[#12214a] border border-blue-500/20 hover:border-cyan-400 text-cyan-300 font-black uppercase text-xs rounded-xl cursor-pointer transition-colors"
              >
                {getTxt('Retry Quiz Challenge', 'খেলুন আবারো টেস্ট')}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Airdrop Checker simulated sandbox segment */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/25">
            <Award className="text-cyan-400" size={22} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
              🪂 {getTxt('Educational Simulated Testnet Airdrop Claims', 'শিক্ষামূলক টেস্টনেট এয়ারড্রপ যোগ্যতা যাচাই')}
            </h3>
            <p className="text-xs text-blue-200">
              {getTxt('Check custom Web3 mockup address parameters safely to practice airdrop claim checkups.', 'আপনার টেস্ট মেটামাস্ক এড্রেস বসিয়ে ডেমো ক্লেইম অডিট প্রাক্টিস করুন শতভাগ সুরক্ষিত উপায়ে।')}
            </p>
          </div>
        </div>

        <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 max-w-xl space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase text-cyan-400 font-mono tracking-wider">
              {getTxt('Input Mock MetaMask Address (ERC-20/EVM)', 'আপনার মেটামাস্ক এড্রেস (ডেমো অডিটে পেস্ট করুন)')}
            </label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                placeholder="e.g. 0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                className="flex-1 bg-[#11193a] border-2 border-slate-500/25 rounded-xl p-2.5 text-xs text-white font-mono placeholder:text-blue-300/20"
              />
              <button
                onClick={checkAirdropEligibility}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-black uppercase text-xs px-5 rounded-xl transition-all cursor-pointer shadow"
              >
                {getTxt('Check', 'যাচাই')}
              </button>
            </div>
          </div>

          {/* Checks responses */}
          {isEligible === 'checking' && (
            <div className="flex items-center gap-2 text-xs text-blue-300 animate-pulse">
              <RefreshCw size={13} className="animate-spin text-cyan-400" />
              <span>Checking block records on decentralization registry...</span>
            </div>
          )}
          
          {isEligible === 'eligible' && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-400 space-y-2">
              <span className="font-black block uppercase tracking-wider">🎉 CONGRATULATIONS! ELIGIBLE</span>
              <p>Your simulated address has been allocated exactly 500 VERSE Edu-Tokens! Redeem complete on simulated test nodes.</p>
            </div>
          )}

          {isEligible === 'notEligible' && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-455 space-y-2">
              <span className="font-black block uppercase tracking-wider">❌ ADDRESS INELIGIBLE / WRONG HASH</span>
              <p>Please enter a valid ERC-20 cryptographic address prefixing with 0x (must be at least 40 chars) to simulate successful check conditions.</p>
            </div>
          )}
        </div>
      </div>

      {/* Accordions for high fidelity Bangladeshi Crypto FAQs */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2">
            <HelpCircle size={18} className="text-cyan-405" />
            {getTxt('Detailed Bengali Tutorials & Q&A Board', 'কম্যুনিটি প্রশ্নোত্তর গাইড এবং টিউটোরিয়াল')}
          </h3>
          <p className="text-xs text-blue-200">
            {getTxt('Expand questions keying to daily digital freelancing legalities and solutions.', 'ক্রিপ্টো লেনদেনের আইনি বাধা ও ফ্রিল্যান্সারদের সুরক্ষামূলক প্রশ্নোত্তর ডেসক্রিপশন দেখে নিন।')}
          </p>
        </div>

        <div className="divide-y divide-blue-500/15">
          {banglaFaqs.map((faq, i) => {
            const isOpen = selectedFaq === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => setSelectedFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="space-y-1 pr-4">
                    <h4 className="text-sm font-black text-white group-hover:text-cyan-400 transition-colors">
                      {faq.q}
                    </h4>
                    <span className="text-[10.5px] italic text-blue-350 block">
                      {faq.enQ}
                    </span>
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-blue-300" /> : <ChevronDown size={16} className="text-blue-300" />}
                </button>
                {isOpen && (
                  <div className="mt-3.5 p-4.5 bg-[#0f1737] rounded-xl border border-blue-500/10 text-xs md:text-sm text-blue-105 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* NEW SECTION: EDUCATIONAL REWARD LOG & LIVE MOCKUP BALANCE CLAIM BLOCK */}
      {(() => {
        const [rewardBalance, setRewardBalance] = useState<number>(0);
        const [claimSuccess, setClaimSuccess] = useState<boolean>(false);

        return (
          <div className="bg-[#0b122f] border-2 border-emerald-500/15 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full text-emerald-400 font-bold uppercase text-[9.5px] border border-emerald-500/25 tracking-wider">
                  <Award size={12} className="text-emerald-400" />
                  <span>Interactive Rewards Engine</span>
                </div>
                <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
                  🏆 {getTxt('Verse Learning Rewards & Education Points Claims', 'ভার্স লার্নিং রিওয়ার্ডস ও কুইজ বোনাস দাবি পোর্টাল')}
                </h3>
                <p className="text-xs text-blue-200">
                  {getTxt(
                    'Acquire mock learning credits through your interactions. Safely transfer them to your simulated gas voucher balance.',
                    'সম্পূর্ণ ফ্রিতে পড়াশোনা শেষ করে আপনার ডেমো লার্নিং পয়েন্ট ওয়ালেটে যুক্ত করুন এবং ব্লকচেইন ট্রানজেকশন ক্লেইম অডিট প্র্যাকটিস করুন।'
                  )}
                </p>
              </div>

              {/* Reward status widget */}
              <div className="bg-[#0f1737] px-6 py-4.5 rounded-2xl border border-emerald-500/20 text-center space-y-1 min-w-[200px]">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#818cf8] block">Accrued Edu-Voucher</span>
                <span className="text-3xl font-mono font-black text-emerald-450 block">{rewardBalance} VERSE</span>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setRewardBalance(rewardBalance + 100);
                      setClaimSuccess(true);
                      setTimeout(() => setClaimSuccess(false), 3000);
                    }}
                    className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-extrabold uppercase text-[10px] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-md block w-full text-center"
                  >
                    {getTxt('Claim +100 Point', '+১০০ বোনাস যুক্ত করুন')}
                  </button>
                </div>
              </div>
            </div>

            {claimSuccess && (
              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center text-xs text-emerald-400 font-bold animate-pulse">
                🎉 {getTxt('Success! 100 VERSE credited offline inside your browser local sandbox memory.', 'সফলভাবে ১০০ ভার্স বোনাস পয়েন্ট আপনার ব্রাউজার মেমরিতে যুক্ত করা হয়েছে!')}
              </div>
            )}
          </div>
        );
      })()}

      {/* NEW SECTION: WEBINAR EVENTS CALENDAR & BENGALI VIDEO RESOURCE DIRECTORY */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2">
            <Trophy size={18} className="text-indigo-405" />
            {getTxt('Bangladesh Active Safety Webinars & Tutorial Directories', 'বাংলাদেশ সেফটি ওয়েবিনার ও এয়ারড্রপ ভিডিও টিউটোরিয়াল')}
          </h3>
          <p className="text-xs text-blue-200">
            {getTxt('Schedule of upcoming digital safety bootcamps and video guides.', 'পরবর্তী ক্রিপ্টো অডিট ও স্ক্যাম এড়ানোর ফ্রি ওয়ার্কশপ শিডিউল এবং গুরুত্বপূর্ণ গাইড ভিডিওসমূহ সংগ্রহ করুন।')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Events calendar block */}
          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-4">
            <span className="text-[10.5px] font-mono font-black uppercase text-indigo-300 block tracking-wider">📅 Upcoming Live Webinars (100% Free)</span>
            <div className="divide-y divide-blue-505/10">
              <div className="py-3 flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-white block">P2P Banking Safety & Cyber-Crime Prevention</span>
                  <span className="text-[10.5px] text-[#818cf8] block">Date: 2026-07-15 | Speaker: Verse Security Core</span>
                </div>
                <span className="text-[9px] bg-red-500/10 text-red-400 px-2.5 py-0.5 rounded font-black uppercase tracking-wider shrink-0 ml-4">Hot</span>
              </div>
              <div className="py-3 flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-white block">MetaMask Smart Contract Revoke & Approved Limits</span>
                  <span className="text-[10.5px] text-[#818cf8] block">Date: 2026-08-01 | Web3 Hands-on Bootcamp</span>
                </div>
                <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-2.5 py-0.5 rounded font-bold uppercase shrink-0 ml-4">Free Access</span>
              </div>
            </div>
          </div>

          {/* Video guides directory */}
          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-4">
            <span className="text-[10.5px] font-mono font-black uppercase text-cyan-400 block tracking-wider">📹 Essential Bengali Video Walkthrough Guides</span>
            <div className="space-y-3.5">
              <div className="p-3 bg-[#0a112a] rounded-xl border border-blue-500/5 hover:border-cyan-405/25 transition-all flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">1. How to create and laminating cold paper backup seed keys</span>
                  <span className="text-[10px] text-blue-300">Duration: 14 mins | Language: Bangla (বাংলা)</span>
                </div>
                <span className="text-xs text-cyan-400 hover:underline cursor-pointer">Watch</span>
              </div>
              <div className="p-3 bg-[#0a112a] rounded-xl border border-blue-500/5 hover:border-cyan-405/25 transition-all flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">2. Revoking malicious approvals using Revoke.cash sandbox</span>
                  <span className="text-[10px] text-blue-300">Duration: 9 mins | Language: Bangla (বাংলা)</span>
                </div>
                <span className="text-xs text-cyan-400 hover:underline cursor-pointer">Watch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
