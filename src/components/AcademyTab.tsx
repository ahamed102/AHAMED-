import { useState } from 'react';
import { BookOpen, Search, Sparkles, AlertCircle, Cpu, Shield, Award, HelpCircle, Layers } from 'lucide-react';

interface AcademyTabProps {
  language: 'en' | 'bn' | 'bilingual';
}

export default function AcademyTab({ language }: AcademyTabProps) {
  const [activeLearnModule, setActiveLearnModule] = useState<string>('bitcoin');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  
  // Interactive Gas calculator simulation
  const [gasPrice, setGasPrice] = useState<number>(30); // Gwei
  const [gasLimit, setGasLimit] = useState<number>(21000); // Standard transfer
  const [ethPrice, setEthPrice] = useState<number>(3500);

  const getTxt = (en: string, bn: string) => {
    if (language === 'en') return en;
    if (language === 'bn') return bn;
    return `${bn} (${en})`;
  };

  const getBilingualDesc = (en: string, bn: string) => {
    if (language === 'en') return <p className="text-slate-200 text-sm leading-relaxed">{en}</p>;
    if (language === 'bn') return <p className="text-blue-100 text-sm leading-relaxed">{bn}</p>;
    return (
      <div className="space-y-2">
        <p className="text-blue-100 text-sm leading-relaxed">{bn}</p>
        <p className="text-slate-400 text-xs leading-relaxed border-l-2 border-cyan-500/40 pl-3 italic">{en}</p>
      </div>
    );
  };

  // 16 Detailed learning modules covering all requirements of the user's list
  const academyModules = [
    {
      id: 'bitcoin',
      titleEn: 'Bitcoin (BTC)',
      titleBn: 'বিটকয়েন (BTC)',
      icon: Cpu,
      category: 'Foundation',
      detailsEn: 'Bitcoin is the first decentralized digital currency, created in 2009 by the anonymous developer Satoshi Nakamoto. It relies on a Proof-of-Work (PoW) consensus mechanism where miners solve cryptography puzzles to secure transactions. Bitcoin has a hard-capped supply of 21 million, rendering it a deflationary store of value resembling "digital gold".',
      detailsBn: 'বিটকয়েন হলো বিশ্বের প্রথম বিকেন্দ্রীকৃত ডিজিটাল ক্রিপ্টোকারেন্সি যা ২০০৯ সালে ছদ্মনামধারী সাতোশি নাকামোতো তৈরি করেন। এটি প্রুফ-অফ-ওয়ার্ক (PoW) পদ্ধতির মাধ্যমে খনিজীবী বা মাইনারদের গাণিতিক ধাঁধা সমাধানের মাধ্যমে নেটওয়ার্ক সচল ও নিরাপদ রাখে। বিটকয়েনের মোট সরবরাহ ২১ মিলিয়নে সীমাবদ্ধ থাকায় এটি মুদ্রাস্ফীতি প্রতিরোধী এবং "ডিজিটাল স্বর্ণ" হিসেবে সমাদৃত।',
    },
    {
      id: 'ethereum',
      titleEn: 'Ethereum & Smart Contracts',
      titleBn: 'ইথেরিয়াম ও স্মার্ট চুক্তি',
      icon: Layers,
      category: 'Foundation',
      detailsEn: 'Ethereum is a programmable blockchain launched in 2015 by Vitalik Buterin. It introduced self-executing smart contracts that eliminate intermediate parties. Since transitioning to Proof-of-Stake (PoS), validators lock up ETH to secure the channel, vastly reducing electrical requirements and building the platform for global Web3 software.',
      detailsBn: 'ইথেরিয়াম হলো একটি প্রোগ্রামযোগ্য পাবলিক ব্লকচেইন যা ২০১৫ সালে ভিটালিক বুটেরিন চালু করেন। এটি প্রথম স্বয়ংক্রিয় "স্মার্ট চুক্তি" বা স্মার্ট কন্ট্রাক্ট ধারণার প্রবর্তন করে যা কোনো মধ্যস্থতাকারী প্রতিষ্ঠান ছাড়াই লেনদেন ও চুক্তি সম্পন্ন করতে পারে। বর্তমানে প্রুফ-অফ-স্টেক (PoS) ব্যবহারের মাধ্যমে এর পরিবেশগত ভারসাম্য ও নির্ভরযোগ্যতা বহুলাংশে বেড়েছে।',
    },
    {
      id: 'wallet',
      titleEn: 'Non-Custodial Wallets vs Custodial',
      titleBn: 'নন-কাস্টোডিয়াল বনাম কাস্টোডিয়াল ওয়ালেট',
      icon: Shield,
      category: 'Security',
      detailsEn: 'A non-custodial wallet gives you full exclusive control over your seed phrase (12/24 private words). "Not your keys, not your coins". If you use centralized exchanges (like Binance or KuCoin), they custody your wealth. To prevent unauthorized rugpulls, users select reliable software wallets (Metamask, Trust Wallet) or robust offline hardware keys.',
      detailsBn: 'একটি নন-কাস্টোডিয়াল ওয়ালেট আপনাকে আপনার ১২ বা ২৪ শব্দের সিড ফ্রেজের উপর সম্পূর্ণ মালিকানা প্রদান করে। এর মূলমন্ত্র হলো: "চাবি আপনার না হলে, ক্রিপ্টো আপনার নয়"। সেন্ট্রাল এক্সচেঞ্জে ডলার রাখা মানে সেটি এক্সচেঞ্জের নিয়ন্ত্রণে থাকা। নিরাপদ ও স্বাধীনভাবে কাস্টডি নিশ্চিত করতে ট্রাস্ট ওয়ালেট বা মেটামাস্কের মতো সফটওয়্যার এবং লেজারের মতো হার্ডওয়্যার ডিভাইস আদর্শ।',
    },
    {
      id: 'mining',
      titleEn: 'Mining Infrastructure',
      titleBn: 'মাইনিং ও খনি ব্যবস্থা',
      icon: Cpu,
      category: 'Technology',
      detailsEn: 'Crypto mining is the process of using computing processing units (ASICs, GPUs) to verify block transfers in Proof-of-Work chains. Miners successfully append valid transactional lists onto the ledger and are instantly rewarded with fractioned native coins (e.g., BTC). This ensures decentralized timestamp sequencing without server reliance.',
      detailsBn: 'ক্রিপ্টো মাইনিং হলো খনিজীবী বা উচ্চ ক্ষমতাসম্পন্ন কম্পিউটার ইউনিট (যেমন ASICs বা জিপিইউ) ব্যবহার করে ব্লকচেইনে লেনদেন যাচাইকরণের প্রুফ-অফ-ওয়ার্ক প্রক্রিয়া। যখন নতুন লেনদেন ব্লক সফলভাবে লেজারে যুক্ত হয়, তখন মাইনাররা বোনাস হিসেব নতুন বিটকয়েন বা কয়েন পায়। এটি সার্ভারহীন উপায়ে বিকেন্দ্রীকরণ ও নেটওয়ার্কের নিরাপত্তা বজায় রাখতে সাহায্য করে।',
    },
    {
      id: 'staking',
      titleEn: 'Proof of Stake & Staking',
      titleBn: 'স্টেকিং এবং নিষ্ক্রিয় আয়',
      icon: Award,
      category: 'DeFi',
      detailsEn: 'Staking serves as the environmental alternative to mining in Proof-of-Stake protocols. Token holders secure native liquidity blocks inside validation smart contracts. Stakers receive interest rewards proportionally for honest node execution. Malicious or compromised nodes instead lose part of their frozen assets via slashing.',
      detailsBn: 'স্টেকিং হলো প্রুফ-অফ-স্টেক ব্লকচেইনে জটিল ও পরিবেশ ক্ষতিকারক মাইনিংয়ের একটি চমৎকার বিকল্প। টোকেন হোল্ডাররা তাদের অলস ফান্ড স্মার্ট কন্ট্রাক্ট বা ভ্যালিডেটর নোডে লক বা জমা রেখে নেটওয়ার্ক সচল রাখতে শরিক হন। এর বিনিময়ে পর্যায়বৃত্ত সুদ বা ইনসেন্টিভ এনাউন্সড হয় যা ক্রিপ্টোতে নিষ্ক্রিয় আয়ের জনপ্রিয় পথ।',
    },
    {
      id: 'defi',
      titleEn: 'Decentralized Finance (DeFi)',
      titleBn: 'বিকেন্দ্রীকৃত অর্থায়ন (DeFi)',
      icon: Layers,
      category: 'DeFi',
      detailsEn: 'DeFi replaces centralized retail banks with program-driven dApps. Users can swap assets, borrow against collateral, and earn interest peer-to-peer on networks without passport checks, physical locations, or administrative approvals. Popular protocols include Uniswap, Aave, and MakerDAO.',
      detailsBn: 'DeFi বা ডিসেন্ট্রালাইজড ফাইন্যান্স এমন একটি স্বাধীন ব্যাংকিং ব্যবস্থা যা প্রথাগত ব্যাংক ও মিডলম্যানের প্রয়োজনীয়তা দূর করে। স্মার্ট কন্ট্রাক্টের মাধ্যমে যেকোনো ব্যক্তি পিয়ার-টু-পিয়ার ঋন নিতে পারেন, ডলার পরিবর্তন বা ফিক্সড সেভিংস সুবিধা উপভোগ করতে পারেন সম্পূর্ণ বৈশ্বিকভাবে কোনো কাগজের পাসপোর্ট ভেরিফিকেশন ছাড়া।',
    },
    {
      id: 'nft',
      titleEn: 'Non-Fungible Tokens (NFTs)',
      titleBn: 'নন-ফাঞ্জিবল টোকেন (NFT)',
      icon: Sparkles,
      category: 'Technology',
      detailsEn: 'Fungible coins like 1 BTC can be easily swapped for an identical 1 BTC. NFTs are uniquely distinct cryptographic certificates validating real ownership over digital arts, gaming items, musical collectibles, or property titles. Registered permanently on-chain, their history, origin, and transfers remain permanently tamper-proof.',
      detailsBn: 'আমাদের পকেটস্থ সাধারণ টাকাকে ভাঙানো যায় এক টাকার বদলে অন্য এক টাকা নিয়ে। কিন্তু NFT হলো একটি ইউনিক ক্রিপ্টোগ্রাফিক সার্টিফিকেট যা কোনো নির্দিষ্ট ডিজিটাল ছবি, মিউজিক কনটেন্ট বা ভার্চুয়াল জমির একক মালিকানা প্রমাণ করে। ব্লকচেইনে চিরতরে রেকর্ড হওয়ায় এটি কখনো কপি, জাল বা জবরদখল করা অসম্ভব।',
    },
    {
      id: 'stablecoins',
      titleEn: 'Stablecoins Architecture',
      titleBn: 'স্টেবলকয়েন ও দাম স্থিতিশীলতা',
      icon: Shield,
      category: 'Foundation',
      detailsEn: 'Volatility poses barriers to regular payments. Stablecoins resolve this difficulty by linking their prices directly 1:1 to reserve-backed assets like the USD. Fiat stablecoins (USDT, USDC) deposit cash reserves in custodial bank accounts, while algorithmic alternatives rely on asset collateralization formulas.',
      detailsBn: 'ক্রিপ্টোকারেন্সির ওঠানামা এড়াতে ও দৈনন্দিন লেনদেন সহজ করতে তৈরি হয়েছে স্টেবলকয়েন। এটি সাধারণত ইউএস ডলারের সাথে ১:১ মূল্যে ভারসাম্য রক্ষা করে। যেমন ১ USDT সর্বদা ১ ইউএস ডলার মূল্যের সমান থাকে। এক্সচেঞ্জে ফান্ড জমা রাখা এবং ট্রেড করার ক্ষেত্রে দাম পতনের ঝুঁকি রুখতে স্টেবলকয়েন অত্যন্ত কার্যকরী ভূমিকা পালন করে।',
    },
    {
      id: 'airdrops',
      titleEn: 'Airdrop Mechanics',
      titleBn: 'এয়ারড্রপ বোনাস পদ্ধতি',
      icon: Award,
      category: 'DeFi',
      detailsEn: 'An airdrop represents free marketing token distributions granted directly to early, diligent Web3 testnet users or protocol interaction nodes. Developers allocate these tokens to initiate decentralization models and build active, loyal organic communities before launch, although users must be cautious of scam sites mimicking claims.',
      detailsBn: 'ওয়েব৩-এর নতুন প্রজেক্টগুলো লঞ্চ হওয়ার আগে তাদের ফিচার বা টেস্টনেট সফলভাবে ব্যবহারকারী সাধারণ মানুষকে ফ্রিতে ক্রিপ্টোকারেন্সি গিফট বা ডিস্ট্রিবিউট করে, একেই এয়ারড্রপ বলে। এটি মূলত মার্কেটিং ও বিকেন্দ্রীকরণের একটি উপায়। তবে ক্লেইম করার নামে সাইন-ইন করিয়ে পুরো মানিব্যাগ হ্যাক বা ফাঁদ পাতার ভয় থাকে যা এড়িয়ে চলতে হবে।',
    },
    {
      id: 'web3',
      titleEn: 'Web3 Paradigms',
      titleBn: 'ওয়েব৩ যুগের আগমন',
      icon: Sparkles,
      category: 'Technology',
      detailsEn: 'Web1 was read-only portals (newspapers). Web2 allowed read-write interaction on monopolies owned by big tech (Meta, Google). Web3 introduces read-write-own protocols powered by on-chain identity records. Users manage their personal private data, participate in voting guilds, and carry assets across application borders seamlessly.',
      detailsBn: 'ওয়েব১ ছিল শুধু রিড-অনলি বা তথ্য পড়ার ওয়েব (যেমন প্রথম যুগের হোমপেজ)। ওয়েব২ হলো ইন্টারেক্টিভ ও সোশাল মিডিয়া, যার দখল বড় বড় টেক কোম্পানির হাতে। আর ওয়েব৩ হচ্ছে রিড-রাইট-ওন বা মালিনানার যুগ। এখানে ডেটার প্রকৃত মালিক আপনি নিজে, যা ব্লকচেইন ও ওয়ালেট সাইন-ইনের মাধ্যমে বিশ্বব্যাপী স্বাধীনভাবে ব্যবহৃত হয়।',
    },
    {
      id: 'layer1_2',
      titleEn: 'Layer-1 vs Layer-2 Scalability',
      titleBn: 'লেয়ার-১ বনাম লেয়ার-২ নেটওয়ার্ক',
      icon: Layers,
      category: 'Technology',
      detailsEn: 'Layer-1 refers to base layer chains (Ethereum, Bitcoin, Solana) handling core security, calculations, and final ledger state. Due to congestion limits, Layer-2 engines (Arbitrum, Optimism, Polygon) compile off-grid transaction bundles (rollups) and post summarized proofs back to L1, lowering costs up to 95%.',
      detailsBn: 'লেয়ার-১ হলো বেস বা মূল সিকিউরিটি নেটওয়ার্ক (যেমন বিটকয়েন বা ইথেরিয়াম চেইন) যা মেইন ট্রানজেকশন ক্লিয়ার করে। মেইন চেইনে চাপ ও অতিরিক্ত ফি কমাতে লেয়ার-২ এর জন্ম (যেমন পলিগন, আর্বিট্রাম)। এরা হাজার হাজার লেনদেনকে বাইরে কম খরচে প্রসেস করে একটি বান্ডেল আকারে মেইন লেয়ার-১ এ রিপোর্ট পাঠিয়ে দেয়, ফলে খরচ ৯৫% পর্যন্ত কমে।',
    },
    {
      id: 'tokenomics',
      titleEn: 'Tokenomics and Economics',
      titleBn: 'টোকেনোমিক্স ও টোকেন অর্থশাস্ত্র',
      icon: Award,
      category: 'Foundation',
      detailsEn: 'Tokenomics combines "token" and "economics". It defines supply parameters, release calendars, cliff-vesting schedules for founders, utility usecases inside protocols, and burn mechanisms. Evaluating tokenomics prevents investors from falling for inflationary projects setup purely to dump assets on retail users.',
      detailsBn: 'টোকেনোমিক্স শব্দটি "টোকেন" এবং "ইকোনমিক্স"-এর সমন্বয়ে গঠিত। মূলত এর আওতায় কোনো নির্দিষ্ট কয়েনের সাপ্লাই নীতি, বার্ষিক মুদ্রাস্ফীতি, প্রজেক্ট টিম ও অংশীদারদের হোল্ডিং পিরিয়ড এবং কয়েন ডেস্ট্রাকশন বা বার্ন পলিসি ঠিক করা হয়। এটি ভালো প্রজেক্ট চেনার অন্যতম একটি গুরুত্বপূর্ণ সূচক।',
    },
    {
      id: 'trading_basics',
      titleEn: 'Trading Basics & Terminology',
      titleBn: 'ট্রেডিংয়ের সাধারণ পরিভাষা ও কৌশল',
      icon: BookOpen,
      category: 'DeFi',
      detailsEn: 'Trading is the buying and selling of financial digital instruments. Fundamentals include Order Books (Bid / Ask depth), Market Maker depth, Limit Orders, and Slippage limits. Novice users are strongly advised to keep positions on Spot trading since futures leveraging amplifies margin debts rapidly leading to account liquidations.',
      detailsBn: 'ট্রেডিং হলো ক্রিপ্টোকারেন্সি লাভসহকারে ক্রয়-বিক্রয়ের পদ্ধতি। এর মূল বিষয় হলো অর্ডার বুক, লিমিট অর্ডার, মার্কেট অর্ডার ও স্লিপেজ। নতুন কোনো ট্রেডার ফাদার্স লিমিটেড ফিয়াটের লোভ না করে স্পট ট্রেডিং প্র্যাকটিস করা উচিত। ফিউচার লিভারেজ বা মার্জিন বাড়ালে হঠাৎ অ্যাকাউন্টের সব ব্যালেন্স শূন্য বা লিকুইডিটি হারানোর চরম ঝুঁকি থাকে।',
    },
    {
      id: 'security_basics',
      titleEn: 'Security Protocols & Hygiene',
      titleBn: 'নিরাপত্তা হাইজিন ও সুরক্ষাবিধি',
      icon: Shield,
      category: 'Security',
      detailsEn: 'Basic security hygiene includes activating 2FA exclusively with device authenticator apps (Yubikey, Google Authenticator) instead of SMS. Users should review Smart Contract permissions regularly, revoke unwanted wallet allowances, isolate a distinct "burner wallet" for unfamiliar free websites, and cross-reference links carefully.',
      detailsBn: 'ক্রিপ্টো সুরক্ষার প্রধান শর্ত হলো কখনো মোবাইল এসএমএস বা ইমেইল টু-ফ্যাক্টর অথেনটিকেশনের ওপর ভিত্তি না করে গুগল অথেনটিকেটর অটোজেনারেটেড পিন বা সিকিউরিট হার্ডওয়্যার কি ব্যবহার করা। পাশাপাশি ক্ষতিকর স্মার্ট কন্ট্রাক্টে সাইন ইন করা ব্যালেন্স হ্যাকের প্রধান কারণ। তাই টেস্ট সাইটে মেটামাস্কের বার্নার ওয়ান-টাইম ওয়ালেট ব্যবহার করা বুদ্ধিমানের কাজ।',
    },
    {
      id: 'beg_guide',
      titleEn: "Beginner's Step-by-Step Guild",
      titleBn: 'নতুনদের ক্রিপ্টো গাইডলাইন বুক',
      icon: HelpCircle,
      category: 'Foundation',
      detailsEn: 'For new entrants: 1. Setup a clean non-custodial wallet offline. 2. Write seed words on paper, laminating it from water without snapping screenshots. 3. Practice transferring minuscule amounts first (e.g., $1 worth). 4. Completely avoid telegram channels claiming guaranteed double returns, fake bots, and MLM traps.',
      detailsBn: 'নতুনদের সতর্কতামূলক শুরুর পদক্ষেপ: ১. অফলাইনে একটি সলিড নন-কাস্টোডিয়াল ট্রাস্ট ওয়ালেট তৈরি করুন। ২. আপনার ১২ শব্দের সিক্রেট পেপার বা রিকভারি কোড খাতায় কলমে লিখে নিরাপদে রাখুন, ফোনের ক্যামেরায় ছবি তুলবেন না বা গুগল ড্রাইভে সেভ করবেন না। ৩. প্রথমে ১ ডলারের ছোট ছোট পরীক্ষামূলক লেনদেন করে শিখুন। ৪. বেশি লাভের ফাঁদে ফেলে ডলার ডাবল করে দেওয়ার লোভ দেখানো যেকোনো টেলিগ্রাম বা সোশাল গ্রুপ থেকে ১০০ হাত দূরে থাকুন।',
    },
  ];

  // Comprehensive glossary definitions
  const glossaryList = [
    { term: 'HODL', textEn: 'Hold On for Dear Life; a commitment to never panic-sell during drastic market pullbacks.', textBn: 'হোল্ড অন ফর ডিয়ার লাইফ; বাজার ধস বা মারাত্মক পতনের সময়েও অস্থির না হয়ে দীর্ঘমেয়াদী বিনিয়োগ ধরে রাখার ক্রিপ্টো সংস্কৃতি।' },
    { term: 'Gas Fee', textEn: 'The native network fee payable to miners or validators to process transactions on a blockchain (measured in Gwei for Ethereum).', textBn: 'ব্লকচেইনে যেকোনো ডেটা বা লেনদেন রেকর্ড করতে মাইনার/ভ্যালিয়টরদের যে নেটওয়ার্ক ফি প্রদান করতে হয় (যেমন ইথেরিয়ামে গ্যাস ফি বলা হয়)।' },
    { term: 'Satoshi', textEn: 'The smallest unit of Bitcoin. 1 Satoshi (Sat) equals exactly 0.00000001 BTC.', textBn: 'বিটকয়েনের সবচেয়ে ক্ষুদ্রতম গানিতিক একক। ১ সাতোশি হলো বিটকয়েনের ১০ কোটি ভাগের এক ভাগ (০.০০০০০০০১ BTC)।' },
    { term: 'DYOR', textEn: 'Do Your Own Research. A strong reminder to never buy cryptos solely based on social media influencers or promotional media.', textBn: 'ডু ইয়োর ওন রিসার্চ। ক্রিপ্টো মার্কেটে কারো কথায় উত্তেজিত না হয়ে নিজে প্রজেক্টের ব্যাকগ্রাউন্ড, পার্টনারশিপ ও টোকেনোমিক্স ভালোভাবে গবেষণা করার পরম উপদেশ।' },
    { term: 'FOMO', textEn: 'Fear Of Missing Out. The emotional drive leading traders to buy tokens at local high peaks due to rapid green candles.', textBn: 'ফেয়ার অফ মিসিং আউট। চার্টে কয়েনের দাম দ্রুত বাড়তে দেখে হাতছাড়া হওয়োর ভয়ে সর্বোচ্চ চড়া দামে হুড়োহুড়ি করে ক্রিপ্টো কেনার মানসিক দুর্বলতা।' },
    { term: 'Bear Market', textEn: 'A prolonged period of downward price action, low sentiment, and heavy general panic (often lasting 1 to 2 years).', textBn: 'মার্কেটের এমন একটি দীর্ঘমেয়াদী মন্দা দশা যখন অধিকাংশ কয়েনের দাম ক্রমাগত কমতে থাকে এবং মানুষের মাঝে ভীতি কাজ করে।' },
    { term: 'Bull Market', textEn: 'An intense period of upward price trends, retail frenzy, and capital inflows triggering multi-fold explosions.', textBn: 'মার্কেটের চরম তেজী ভাব যেখানে ক্রিপ্টো মূল্য হুহু করে বাড়ে, চার্টে একটানা সবুজ ক্যান্ডেল তৈরি হয় এবং বিনিয়োগকারী ও মিডিয়াতে চরম উত্তেজনা বিরাজ করে।' },
  ];

  const filteredGlossary = glossaryList.filter(g =>
    g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    g.textEn.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    g.textBn.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const selectedModule = academyModules.find(m => m.id === activeLearnModule) || academyModules[0];

  return (
    <div className="space-y-12 animate-fade-in" id="academy-view">
      
      {/* Top Welcome Title Grid */}
      <div className="bg-[#0e1633] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-300 font-bold uppercase tracking-widest text-[9.5px] border border-cyan-500/20 shadow-sm">
            <BookOpen size={13} className="text-cyan-400" />
            <span>{getTxt('Web3 Education Hub', 'ইন্টারেক্টিভ ক্রিপ্টো একাডেমি')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tight">
            📚 {getTxt('Crypto Academy', 'ক্রিপ্টো শিক্ষা গাইড বুক')}
          </h2>
          <p className="text-xs md:text-sm text-blue-200 max-w-3xl leading-relaxed">
            {getTxt(
              'A complete structured catalog designed from elementary basics to advanced multi-layer blockchain scaling. Study genuine non-custodial custody protocols to protect your personal capital.',
              'ক্রিপ্টোকারেন্সি ও ব্লকচেইনের একেবারে বেসিক থেকে অ্যাডভান্স পর্যন্ত সব ধরনের শিক্ষা মডিউল। নিরাপদে লেনদেন করতে ও এমএলএম ফাঁদ থেকে রক্ষা পেতে নিজের ব্লকচেইন জ্ঞান বৃদ্ধি করুন।'
            )}
          </p>
        </div>
        <div className="shrink-0 bg-blue-950/60 p-4 rounded-2xl border border-blue-500/15 text-center hidden lg:block">
          <span className="text-[10px] text-cyan-400 font-black uppercase tracking-wider block">Level Progress</span>
          <span className="text-2xl font-black text-white block">15 modules</span>
          <span className="text-[9px] text-[#818cf8] font-bold uppercase">100% Free & Open-source</span>
        </div>
      </div>

      {/* Main Educational Interface split in Left sidebar and Right detailed review content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 bg-[#0a112a] border border-blue-500/15 rounded-2xl p-4 space-y-2 max-h-[600px] overflow-y-auto">
          <span className="text-[10px] font-black uppercase text-[#a5b4fc] tracking-wider px-2 block mb-3">
            {getTxt('Select Learning Chapter', 'অধ্যায় নির্বাচন করুন')}
          </span>
          {academyModules.map((m) => {
            const Icon = m.icon;
            const isSelected = m.id === activeLearnModule;
            return (
              <button
                key={m.id}
                onClick={() => setActiveLearnModule(m.id)}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-3 border ${
                  isSelected 
                    ? 'bg-gradient-to-r from-blue-600/90 via-[#0e7490] to-cyan-500/75 border-cyan-400 text-white shadow-md' 
                    : 'bg-[#0f1837]/60 border-blue-500/10 hover:border-blue-500/20 text-blue-200 hover:text-white'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-blue-950'} shrink-0`}>
                  <Icon size={16} className={`${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                </div>
                <div className="truncate">
                  <span className={`block text-xs font-black uppercase tracking-wider ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {language === 'en' ? m.titleEn : m.titleBn}
                  </span>
                  <span className="text-[9px] text-blue-300 font-bold block capitalize mt-0.5">{m.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Full analysis block */}
        <div className="lg:col-span-8 bg-[#090f26]/90 border-2 border-cyan-500/20 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-xl shadow-black/30">
          <div className="absolute top-0 right-0 p-3 bg-cyan-500/10 text-cyan-300 text-[9px] font-mono font-black uppercase rounded-bl-xl border-l border-b border-cyan-500/10">
            {selectedModule.category}
          </div>
          <div className="flex items-center gap-3.5 border-b border-blue-500/15 pb-4">
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-405/20 shrink-0">
              <selectedModule.icon size={26} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase italic flex items-center gap-2">
                {language === 'en' ? selectedModule.titleEn : selectedModule.titleBn}
              </h3>
              <p className="text-[10px] text-cyan-400 tracking-[0.15em] font-bold uppercase mt-1">
                {getTxt('Verified Curriculum Standard', 'যাচাইকৃত সঠিক কারিকুলাম')}
              </p>
            </div>
          </div>

          <div className="space-y-6 min-h-[160px]">
            {getBilingualDesc(selectedModule.detailsEn, selectedModule.detailsBn)}
          </div>

          {/* Practical Takeaway Tips Container */}
          <div className="bg-[#101b3e] p-5 rounded-xl border border-blue-500/20 space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#a5b4fc] flex items-center gap-1.5">
              <AlertCircle size={14} className="text-cyan-400" />
              {getTxt('Crucial Knowledge Shield Takeaways', 'আপনার সুরক্ষায় এই মডিউলের গুরুত্বপূর্ণ টিপস')}
            </h4>
            <ul className="space-y-2 text-xs text-blue-100 list-disc list-inside">
              {selectedModule.id === 'bitcoin' && (
                <>
                  <li>{getTxt('Understand that BTC has no central point of control or CEO.', 'বিটকয়েনের কোনো সেন্ট্রাল ব্যাংক, সিইও বা মালিকানা নেই।')}</li>
                  <li>{getTxt('Be aware that BTC price moves through 4-year halving patterns.', 'বিটকয়েন প্রতি ৪ বছরের হালভিং চক্রের মাধ্যমে দাম বৃদ্ধি বা কমার পথ তৈরি করে।')}</li>
                </>
              )}
              {selectedModule.id === 'ethereum' && (
                <>
                  <li>{getTxt('Smart contracts are self-executable code lines; check site links prior to signing commands.', 'স্মার্ট কন্ট্রাক্ট সম্পূর্ণ সয়ংক্রিয় কোড, লিংকে ক্লিক করার আগে সাবধান থাকুন।')}</li>
                  <li>{getTxt('L2 protocols (Arbitrum etc.) can minimize Ethereum fees by 95%.', 'ফি বাঁচাতে ট্রানজেকশনে মূল ইথারিয়াম এর বদলে লেয়ার-২ চেইন ব্যবহার শিখুন।')}</li>
                </>
              )}
              {selectedModule.id === 'wallet' && (
                <>
                  <li className="text-rose-300 font-bold">{getTxt('Never write seed phrases on internet-connected nodes or google drives.', 'আপনার সিড ফ্রেজ কখনো ট্রাস্ট ওয়ালেট থেকে নিয়ে গুগল ড্রাইভে বা ইন্টারনেটে সেভ করবেন না।')}</li>
                  <li>{getTxt('Use hardcopy paper laminations stored securely from water or fire.', 'কাগজে লিখে সিড ফ্রেজ লেমিনেটিং করে পারিবারিক সেফে বা গোপন স্থানে রাখুন।')}</li>
                </>
              )}
              {selectedModule.id === 'beg_guide' && (
                <>
                  <li className="text-yellow-300 font-bold">{getTxt('Avoid yield bots on Telegram promising risk-free double profits.', 'টেলিগ্রামে কোন রোবট বা ব্যক্তি দিনে ২% প্রফিট দেওয়ার গ্যারান্টি দিলে তা ১০০% স্ক্যাম।')}</li>
                  <li>{getTxt('Test transaction pathways using negligible dollar fractions first.', 'যেকোনো ওয়াউলেট টেস্ট করতে প্রথমে আধা ডলারের মতো নামমাত্র ডলার পাঠিয়ে চেক করুন।')}</li>
                </>
              )}
              {!['bitcoin', 'ethereum', 'wallet', 'beg_guide'].includes(selectedModule.id) && (
                <>
                  <li>{getTxt('Always verify official block explorer URLs explicitly before transfers.', 'যেকোনো ব্লকচেইনে লেনদেন হয়ে গেলে অফিসিয়াল ব্লক এক্সপ্লোরার ইউআরএল মিলিয়ে নিন।')}</li>
                  <li>{getTxt('Maintain offline local safety vault protocols to store security passwords.', 'ডিজিটাল ই-মেইল সেভের বদলে অফলাইনে ডায়েরি মেইনটেইনের প্রাক্টিস গড়ে তুলুন।')}</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Embedded Gas Fee Estimator Interactive Tool */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
            <Cpu size={22} className="text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
              ⛽ {getTxt('Interactive Gas Fee & Fuel Calculator', 'ইন্টারেক্টিভ নেটওয়ার্ক গ্যাস ফি ক্যালকুলেটর')}
            </h3>
            <p className="text-xs text-blue-200">
              {getTxt('Simulate raw blockchain fuel costs instantly according to live price and gwei levels.', 'লাইভ ডলার এবং নোড গ্যাস ব্যবহারের পরিমাণ হিসাব করে নেটওয়ার্ক ফি বের করুন।')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 bg-[#0f1837] p-4.5 rounded-2xl border border-blue-500/10">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">
              {getTxt('Gas Price (Gwei)', 'গ্যাস প্রাইস (Gwei)')} - {gasPrice} Gwei
            </label>
            <input 
              type="range" 
              min="5" 
              max="250" 
              value={gasPrice} 
              onChange={(e) => setGasPrice(Number(e.target.value))}
              className="w-full accent-cyan-400 h-2 bg-blue-900/40 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-blue-300 font-bold block mt-1">Normal: 15-30 Gwei. Congested: 100+ Gwei</span>
          </div>

          <div className="space-y-2 bg-[#0f1837] p-4.5 rounded-2xl border border-blue-500/10">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">
              {getTxt('Gas Limit Input', 'গ্যাস লিমিট (কাজভেদে)')} - {gasLimit.toLocaleString()} Gas
            </label>
            <select
              value={gasLimit}
              onChange={(e) => setGasLimit(Number(e.target.value))}
              className="w-full bg-[#11193a] border border-blue-500/20 rounded-xl p-2.5 text-xs text-white"
            >
              <option value={21000}>Standard transfer (21,050 Gas)</option>
              <option value={65000}>Standard Uniswap swap (65,000 Gas)</option>
              <option value={150000}>Complex Layer-2 bridge (150,050 Gas)</option>
              <option value={300000}>Minting standard NFT (300,000 Gas)</option>
            </select>
          </div>

          <div className="space-y-2 bg-[#0f1837] p-4.5 rounded-2xl border border-blue-500/10">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">
              {getTxt('Ethereum Market Price ($)', 'ইথেরিয়াম মার্কেট প্রাইস ($)')}
            </label>
            <input 
              type="number" 
              value={ethPrice} 
              onChange={(e) => setEthPrice(Number(e.target.value))}
              className="w-full bg-[#11193a] border border-blue-500/20 rounded-xl p-2 text-xs text-white"
            />
          </div>
        </div>

        {/* Calculation Result Board */}
        <div className="mt-6 bg-[#080d24] p-5 rounded-2xl border border-[#0e7490]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#a5b4fc] block">Calculated Transaction Fee</span>
            <span className="text-3xl font-black text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {((gasPrice * gasLimit * ethPrice) / 1000000000).toFixed(4)} USD
            </span>
            <span className="text-xs text-blue-300 font-mono block">Formula: (Gas Price × Gas Limit × ETH Price) ÷ 10⁹ Gwei</span>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs text-emerald-350 max-w-sm">
            🛡️ {getTxt(
              'L2 chains like Arbitrum or Optimism often save up to 98% of this cost by grouping transactions together!',
              'আর্বিট্রাম বা পলিগনের মতো লেয়ার-২ ব্যবহার করলে এই ফি-এর ৯৮% বাঁচানো যায় এবং মাত্র ১০-২০ পয়সায় লেনদেন সম্পন্ন করা সম্ভব!'
            )}
          </div>
        </div>
      </div>

      {/* Explanatory Glossary Search Section */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
              🔍 {getTxt('Bilingual Cryptography Glossary', 'ক্রিপ্টো অভিধান ও গুরুত্বপূর্ণ পরিভাষা')}
            </h3>
            <p className="text-xs text-blue-200">
              {getTxt('Search essential cryptographic jargon phrases instantly with absolute clarity.', 'ক্রিপ্টো পরিমণ্ডলের জটিল সব শব্দার্থের সহজ বাংলা ও চমৎকার ইংরেজি ব্যাখ্যা জেনে নিন।')}
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-300/40" />
            <input 
              type="text" 
              placeholder={getTxt('Filter key terms (e.g., HODL, DYOR)...', 'গুরুত্বপূর্ণ শব্দ খুঁজুন (যেমন HODL, DYOR)...')}
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              className="w-full bg-[#11193a] border border-blue-500/25 rounded-xl px-4 py-2 pl-9 text-xs text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGlossary.map((g) => (
            <div key={g.term} className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-2.5 shadow-sm hover:border-cyan-500/20 transition-all duration-300">
              <span className="inline-block px-2.5 py-1 bg-cyan-500/10 rounded-lg text-cyan-400 font-extrabold text-xs font-mono tracking-wide border border-cyan-500/10">
                {g.term}
              </span>
              {getBilingualDesc(g.textEn, g.textBn)}
            </div>
          ))}
          {filteredGlossary.length === 0 && (
            <div className="col-span-full text-center py-12 text-blue-300">
              {getTxt('No glossary items match your terms.', 'পছন্দের শব্দটি আমাদের তালিকায় খুঁজে পাওয়া যায়নি। ইউআর শব্দ পরিবর্তন করে ট্রাই করুন।')}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
