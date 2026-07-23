import React, { useState } from 'react';
import { 
  BookOpen as BookIcon, 
  Sparkles as SparklesIcon, 
  ShieldCheck as ShieldIcon, 
  Globe as GlobeIcon, 
  ArrowLeft as ArrowLeftIcon, 
  CheckCircle2, 
  Layers as LayersIcon, 
  Library as LibraryIcon, 
  Feather as FeatherIcon, 
  Search as SearchIcon,
  Cpu,
  Network,
  GitBranch,
  FileText,
  Users as UsersIcon,
  TrendingUp,
  GraduationCap,
  Clock,
  History,
  Coins,
  X,
  BookMarked,
  Award,
  Calendar,
  BarChart3,
  Flame,
  UserCheck
} from 'lucide-react';

interface BookFairTabProps {
  language?: 'en' | 'bn';
}

export default function BookFairTab({ language = 'en' }: BookFairTabProps) {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeTabFilter, setActiveTabFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // VERSE LOGO & BITCOIN LOGO CONSTANTS
  const VERSE_LOGO_URL = '/verse_logo.jpg';
  const VERSE_FALLBACK_URL = '/verse_logo_new.jpg';
  const BITCOIN_LOGO_URL = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png';

  // 1. CHAPTER 1: VERSE TOKEN & ORIGIN
  const VERSE_CHAPTER = {
    id: 'verse-origin-chapter',
    type: 'verse',
    category: 'Verse Chapter',
    badgeEn: 'Verse Token & Origin',
    badgeBn: 'ভার্স টোকেন ও উৎপত্তি',
    titleEn: 'Chapter 1: Verse Token & Bitcoin.com Origin Story',
    titleBn: 'অধ্যায় ১: ভার্স টোকেন এবং বিটকয়েন.কম-এর উৎপত্তির ইতিহাস',
    subtitleEn: 'Author, Genesis Launch, Worldwide Popularity & Evolution Step-by-Step',
    subtitleBn: 'লেখক, প্রারম্ভিক যাত্রা, বৈশ্বিক জনপ্রিয়তা এবং ধাপে ধাপে বিবর্তনের ইতিহাস',
    logoUrl: VERSE_LOGO_URL,
    fallbackLogoUrl: VERSE_FALLBACK_URL,
    pictureUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80',
    readTime: '15 min read',
    chapterNumber: 'CHAPTER I',
    author: {
      nameEn: 'Bitcoin.com Founding Team & Roger Ver',
      nameBn: 'বিটকয়েন.কম প্রতিষ্ঠাতা টিম ও রজার ভার',
      roleEn: 'Cryptographers & Non-Custodial Web3 Pioneers',
      roleBn: 'ক্রিপ্টোগ্রাফার এবং নন-কাস্টডিয়াল ওয়েব৩ অগ্রদূত'
    },
    meta: {
      startedEn: 'December 2022 (Genesis Event)',
      startedBn: 'ডিসেম্বর ২০২২ (জেনেসিস ইভেন্ট)',
      currentPopularityEn: '50M+ Bitcoin.com Wallet Users Across 180+ Countries',
      currentPopularityBn: '১৮০+ দেশে ৫০ মিলিয়নের বেশি বিটকয়েন.কম ওয়ালেট ব্যবহারকারী',
      globalRankEn: 'Top Multi-Chain Utility Ecosystem on Ethereum & Polygon',
      globalRankBn: 'ইথেরিয়াম ও পলিগনে শীর্ষস্থানীয় মাল্টি-চেইন ইউটিলিটি ইকোসিস্টেম'
    },
    storySections: [
      {
        headingEn: '1. How Verse Originated: The Vision of Economic Sovereignty',
        headingBn: '১. কীভাবে ভার্স-এর উৎপত্তি হলো: অর্থনৈতিক স্বাধীনতার দর্শন',
        textEn: 'Since 2015, Bitcoin.com has been a global beacon for peer-to-peer electronic money, introducing tens of millions of people to cryptocurrency. To create a sustainable, reward-based ecosystem where users are incentivized to hold their own non-custodial keys, the Bitcoin.com team architected the Verse token ($VERSE).',
        textBn: '২০১৫ সাল থেকে বিটকয়েন.কম মুক্ত অর্থনীতি ও স্বাধীন ক্রিপ্টো লেনদেনের পথিকৃৎ হিসেবে কাজ করছে। ব্যবহারকারীদের নিজেদের ওয়ালেটের পূর্ণ নিয়ন্ত্রণ রেখে লেনদেন ও রিওয়ার্ড অর্জনের সুযোগ করে দিতেই বিটকয়েন.কম টিম ভার্স টোকেন ($VERSE) তৈরি করে।'
      },
      {
        headingEn: '2. How Verse Started: The Token Launch & Architecture',
        headingBn: '২. কীভাবে ভার্স-এর যাত্রা শুরু হলো: টোকেন লঞ্চ ও গাণিতিক কাঠামো',
        textEn: 'Verse launched in December 2022 with a fixed total supply of 210 billion tokens distributed over a 7-year linear vesting schedule. 35% of the supply was dedicated directly to ecosystem incentives, liquidity yield farming, and community rewards, ensuring the token belonged to active users rather than centralized insiders.',
        textBn: 'ডিসেম্বর ২০২২-এ ২১০ বিলিয়ন নির্দিষ্ট সরবরাহের মাধ্যমে ভার্স আত্মপ্রকাশ করে। এর ৩৫% সরাসরি কমিউনিটি রিওয়ার্ড, লিকুইডিটি ফার্মিং এবং ব্যবহারকারীদের পুরস্কারের জন্য সংরক্ষিত রাখা হয় যা সাধারণ মানুষকে আর্থিক ক্ষমতা প্রদান করে।'
      },
      {
        headingEn: '3. How Verse Gained Popularity Worldwide',
        headingBn: '৩. কীভাবে ভার্স বিশ্বজুড়ে ব্যাপক জনপ্রিয়তা লাভ করল',
        textEn: 'Verse gained massive global popularity through seamless integration with the official Bitcoin.com Wallet app. Users earned Verse cashback for crypto purchases, non-custodial DEX swaps, and Scratch & Win games. Deploying on Polygon Layer-2 allowed users in developing nations like Bangladesh to trade Verse with near-zero gas fees.',
        textBn: 'বিটকয়েন.কম ওয়ালেট অ্যাপে সরাসরি যুক্ত থাকার কারণে ভার্স খুব দ্রুত বিশ্বব্যাপী ছড়িয়ে পড়ে। পলিগন নেটওয়ার্কে স্থানান্তরের ফলে মাত্র কয়েক পয়সা গ্যাসে ট্রেডিং ও ক্যাশব্যাক সুবিধা পেয়ে বাংলাদেশসহ সারা বিশ্বের তরুণেরা দ্রুত ভার্সে যুক্ত হয়।'
      },
      {
        headingEn: '4. Verse Today: A Thriving Multi-Chain Utility Engine',
        headingBn: '৪. আজকের ভার্স: একটি আন্তর্জাতিক মাল্টি-চেইন ইকোসিস্টেম',
        textEn: 'Today, $VERSE powers the Verse DEX, Verse Staking Vaults, Verse Voyagers NFT collection, and Verse Lounge DAO discussions. It stands as a premier example of how a utility token can foster true non-custodial financial freedom.',
        textBn: 'বর্তমানে ভার্স ডেক্স (Verse DEX), স্ট্যাকিং ভল্ট, ভার্স ভয়েজার্স এনএফটি এবং ডিএও গভর্ন্যান্স পরিচালনায় ভার্স টোকেন প্রধান ভূমিকা পালন করছে।'
      }
    ]
  };

  // 2. CHAPTER 2: BITCOIN HISTORY & SATOSHI NAKAMOTO
  const BITCOIN_CHAPTER = {
    id: 'bitcoin-history-chapter',
    type: 'bitcoin',
    category: 'Bitcoin Chapter',
    badgeEn: 'Bitcoin & Satoshi Nakamoto',
    badgeBn: 'বিটকয়েন ও সাতোশি নাকামোতো',
    titleEn: 'Chapter 2: Bitcoin History, Satoshi Nakamoto & The Genesis Journey',
    titleBn: 'অধ্যায় ২: বিটকয়েন-এর ইতিহাস, সাতোশি নাকামোতো এবং জেনেসিস যাত্রা',
    subtitleEn: 'Author Mystery, Whitepaper, Pizza Day, Popularity Growth & World Impact',
    subtitleBn: 'রহস্যময় লেখক, হোয়াইটপেপার, বিটকয়েন পিজ্জা ডে, জনপ্রিয়তার উত্থান ও বিশ্বব্যাপী প্রভাব',
    logoUrl: BITCOIN_LOGO_URL,
    fallbackLogoUrl: BITCOIN_LOGO_URL,
    pictureUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    readTime: '20 min read',
    chapterNumber: 'CHAPTER II',
    author: {
      nameEn: 'Satoshi Nakamoto (Pseudonymous Creator)',
      nameBn: 'সাতোশি নাকামোতো (ছদ্মনামী স্রষ্টা)',
      roleEn: 'Father of Cryptography & Decentralized Money',
      roleBn: 'বিকেন্দ্রীকৃত ডিজিটাল মুদ্রার জনক'
    },
    meta: {
      startedEn: 'January 3, 2009 (Genesis Block #0)',
      startedBn: '৩ জানুয়ারি, ২০০৯ (জেনেসিস ব্লক #০)',
      currentPopularityEn: '100M+ Holders Worldwide, $1+ Trillion Asset Class',
      currentPopularityBn: 'বিশ্বজুড়ে ১০ কোটির বেশি হোল্ডার, $১ ট্রিলিয়ন+ সম্পদের রূপান্তর',
      globalRankEn: '#1 Worldwide Digital Currency & Sovereign Reserve',
      globalRankBn: 'বিশ্বের ১ নম্বর ডিজিটাল কারেন্সি ও সার্বভৌম ডিজিটাল স্বর্ণ'
    },
    storySections: [
      {
        headingEn: '1. The Author of Bitcoin: Satoshi Nakamoto',
        headingBn: '১. বিটকয়েন-এর জনক: সাতোশি নাকামোতো',
        textEn: 'Bitcoin was authored by Satoshi Nakamoto, a pseudonymous cryptographer or collective who published the legendary 9-page whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System" on October 31, 2008. Satoshi worked with early cypherpunks like Hal Finney before stepping away in April 2011, leaving Bitcoin entirely open-source and ownerless.',
        textBn: '২০০৮ সালের ৩১ অক্টোবর সাতোশি নাকামোতো ৯ পৃষ্ঠার একটি হোয়াইটপেপার প্রকাশ করেন। তিনি বিখ্যাত সাইফারপাঙ্ক হ্যাল ফিনির সাথে প্রথম বিটকয়েন লেনদেন করেন এবং ২০১১ সালে প্রজেক্টটি পুরো পৃথিবীর জন্য উন্মুক্ত করে দিয়ে নিজেকে গুটিয়ে নেন।'
      },
      {
        headingEn: '2. How Bitcoin Started: Genesis Block & Early Transactions',
        headingBn: '২. যেভাবে বিটকয়েন শুরু হলো: জেনেসিস ব্লক ও প্রথম ব্যবহার',
        textEn: 'On January 3, 2009, Satoshi mined Block #0 (The Genesis Block), embedding a headline from The Times: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks". The first commercial transaction occurred on May 22, 2010 (Bitcoin Pizza Day), when programmer Laszlo Hanyecz bought two pizzas for 10,000 Bitcoins.',
        textBn: '২০০৯ সালের ৩ জানুয়ারি সাতোশি জেনেসিস ব্লক মাইনিং করেন। ২০১০ সালের ২২ মে প্রোগ্রামার লাসলো হানিয়েচ ১০,০০০ বিটকয়েন দিয়ে দুইটি পিজ্জা কেনেন, যা ছিল বিটকয়েনের ইতিহাসের প্রথম বাস্তব বাণিজ্যিক লেনদেন।'
      },
      {
        headingEn: '3. How Bitcoin Gained World Popularity & Mass Adoption',
        headingBn: '৩. যেভাবে বিটকয়েন সারা বিশ্বে জনপ্রিয়তার শীর্ষে পৌঁছাল',
        textEn: 'Bitcoin grew from fractions of a cent to an asset worth tens of thousands of dollars due to its strict mathematical scarcity cap of 21 million BTC. Halving cycles every 4 years cut new supply in half. El Salvador adopted BTC as legal tender in 2021, and institutional spot ETFs brought billions of dollars from traditional banking.',
        textBn: '২১ মিলিয়ন নির্দিষ্ট সরবরাহের কারণে বিটকয়েন মুদ্রাস্ফীতিমুক্ত ডিজিটাল স্বর্ণে পরিণত হয়। প্রতি ৪ বছর পর পর হালভিংয়ের মাধ্যমে সরবরাহ অর্ধেক হয়ে যাওয়ায় দাম ও জনপ্রিয়তা জ্যামিতিক হারে বৃদ্ধি পেতে থাকে।'
      },
      {
        headingEn: '4. Bitcoin Today: The World\'s Financial Baseline',
        headingBn: '৪. বর্তমান বিশ্বে বিটকয়েনের অবস্থান',
        textEn: 'Bitcoin stands today as an indestructible decentralized financial network. Unchecked by government control or bank freezes, it empowers anyone with an internet connection to hold and transfer wealth globally.',
        textBn: 'আজ বিটকয়েন বিশ্ব অর্থনীতির অনমনীয় ডিজিটাল স্তম্ভ। সরকারি নিষেধাজ্ঞা বা ব্যাংকিং নিয়ন্ত্রণ ছাড়াই বিটকয়েন প্রতিটি মানুষকে অর্থনৈতিক সার্বভৌমত্ব প্রদান করেছে।'
      }
    ]
  };

  // 3. CHAPTER 3: THE VERSE BOOK (COMBINED VERSE LOGO + BOOK PICTURE)
  const VERSE_BOOK_COMBINED = {
    id: 'verse-book-codex-chapter',
    type: 'combined',
    category: 'The Verse Book',
    badgeEn: 'Verse Logo + Book Picture Combined',
    badgeBn: 'ভার্স লোগো ও বুক পিকচারের যৌথ সংকলন',
    titleEn: 'Chapter 3: The Complete Book of Verse & Non-Custodial Literature',
    titleBn: 'অধ্যায় ৩: দ্য ভার্স বুক - সম্পূর্ণ জ্ঞানকোষ ও সাহিত্য',
    subtitleEn: 'The Comprehensive Verse Codex Integrating Wallet Sovereignty, DEX Math & Tokenomics',
    subtitleBn: 'ওয়ালেট স্বকীয়তা, ডেক্স ম্যাথ এবং টোকেনোমিক্স সমৃদ্ধ মূল ভার্স জ্ঞানগ্রন্থ',
    logoUrl: VERSE_LOGO_URL,
    fallbackLogoUrl: VERSE_FALLBACK_URL,
    pictureUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    readTime: '25 min read',
    chapterNumber: 'CHAPTER III',
    author: {
      nameEn: 'Verse Academy Scholars & Bitcoin.com Council',
      nameBn: 'ভার্স একাডেমি স্কলারস ও বিটকয়েন.কম কাউন্সিল',
      roleEn: 'Decentralized Codex Editors & Literature Authors',
      roleBn: 'বিকেন্দ্রীকৃত কোডেক্স সম্পাদক ও সাহিত্য রচয়িতা'
    },
    meta: {
      startedEn: 'Verse Book Literature Released 2023',
      startedBn: 'ভার্স বুক সাহিত্য প্রকাশ ২০২৩',
      currentPopularityEn: 'Read by 250,000+ Students Worldwide',
      currentPopularityBn: 'বিশ্বজুড়ে ২,৫০,০০০+ শিক্ষার্থী দ্বারা পঠিত',
      globalRankEn: '#1 Non-Custodial Web3 Training Manual',
      globalRankBn: '১ নম্বর নন-কাস্টডিয়াল ওয়েব৩ ম্যানুয়াল'
    },
    storySections: [
      {
        headingEn: '1. The Dual Symbolism of Verse Logo and The Book',
        headingBn: '১. ভার্স লোগো ও পুস্তকের যৌথ প্রতীকের গুরুত্ব',
        textEn: 'This volume combines the icon of the Verse Token with the classical symbol of an open book. It symbolizes that true crypto financial freedom requires both technological access (the token) and deep educational foundation (the book).',
        textBn: 'এই অধ্যায়টি ভার্স টোকেনের লোগো এবং খোলা বইয়ের ছবিকে একত্রে উপস্থাপন করে। এটি নির্দেশ করে যে ক্রিপ্টো অর্থনীতিতে সফল হতে প্রযুক্তির পাশাপাশি গভীর শিক্ষার গুরুত্ব অপরিসীম।'
      },
      {
        headingEn: '2. Standardizing Non-Custodial Education',
        headingBn: '২. নন-কাস্টডিয়াল শিক্ষার আন্তর্জাতিক মানদণ্ড',
        textEn: 'The Verse Book establishes clear guidelines for understanding seed phrase security, EVM smart contracts, gas price calculations, and multi-chain liquidity routing without needing a central bank or broker.',
        textBn: 'ভার্স বুক সিড ফ্রেজ নিরাপত্তা, ইভিএম স্মার্ট কন্ট্রাক্ট এবং গ্যাস ফি হিসাবের জন্য একটি নির্ভুল ও বিশ্বস্ত গাইডলাইন প্রদান করে।'
      },
      {
        headingEn: '3. Bridging Theory with Practical Verse DEX Swaps',
        headingBn: '৩. তত্ত্বের সাথে প্র্যাকটিক্যাল ভার্স ডেক্স ট্রেডিং-এর মেলবন্ধন',
        textEn: 'Readers of The Verse Book don\'t just read theory—they actively connect their Bitcoin.com or MetaMask wallets to perform real swaps on Verse DEX, earn staking rewards, and participate in DAO proposals.',
        textBn: 'ভার্স বইটির পাঠকেরা কেবল পড়ালেখা নয়, বরং বাস্তবে ওয়ালেট কানেক্ট করে ট্রেডিং, স্ট্যাকিং এবং ডিএও ভোটিং-এ অংশ নিয়ে আত্মবিশ্বাসী হন।'
      }
    ]
  };

  // 4. CHAPTER 4: TEACHER & STUDENT LEARNING ABOUT VERSE
  const TEACHING_CHAPTER = {
    id: 'teaching-verse-chapter',
    type: 'teaching',
    category: 'Education Chapter',
    badgeEn: 'One Person Teaching Another',
    badgeBn: 'একজন অন্যজনকে শিক্ষাদানের দৃশ্য',
    titleEn: 'Chapter 4: Mentorship & Peer-to-Peer Web3 Education',
    titleBn: 'অধ্যায় ৪: মেন্টরশিপ এবং পিয়ার-টু-পিয়ার ওয়েব৩ শিক্ষা',
    subtitleEn: 'How Experienced Mentors Train Beginners to Master Verse & Protect Wealth',
    subtitleBn: 'কীভাবে অভিজ্ঞ মেন্টররা নতুনদের ভার্স শেখান ও সম্পদ সুরক্ষা নিশ্চিত করেন',
    logoUrl: VERSE_LOGO_URL,
    fallbackLogoUrl: VERSE_FALLBACK_URL,
    pictureUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    readTime: '12 min read',
    chapterNumber: 'CHAPTER IV',
    author: {
      nameEn: 'Verse Community Educators & Student Guilds',
      nameBn: 'ভার্স কমিউনিটি এডুকেটরস ও স্টুডেন্ট গিল্ড',
      roleEn: 'Web3 Educators in Bangladesh & Globally',
      roleBn: 'বাংলাদেশ ও বিশ্বব্যাপী ওয়েব৩ প্রশিক্ষক'
    },
    meta: {
      startedEn: 'Peer Learning Initiative Active Since 2023',
      startedBn: 'পিয়ার লার্নিং উদ্যোগ ২০২৩ থেকে সচল',
      currentPopularityEn: '10,000+ Students Mentored in South Asia',
      currentPopularityBn: 'দক্ষিণ এশিয়ায় ১০,০০০+ শিক্ষার্থী মেন্টরড',
      globalRankEn: '#1 Peer Mentorship Model for Anti-Scam Training',
      globalRankBn: 'স্ক্যাম প্রতিরোধী মেন্টরশিপের সেরা মডেল'
    },
    storySections: [
      {
        headingEn: '1. The Power of Direct Peer-to-Peer Teaching',
        headingBn: '১. সরাসরি মেন্টরশিপ ও শিক্ষার জাদুকরী ক্ষমতা',
        textEn: 'When one person sits with another to teach Web3, abstract concepts like private keys, gas fees, and DEX liquidity become easy to grasp. This picture represents a senior mentor showing a student how to navigate the Verse ecosystem safely.',
        textBn: 'যখন একজন মেন্টর কোনো শিক্ষার্থীর পাশে বসে হাতকলমে ওয়ালেট সিকিউরিটি ও ডেক্স ট্রেডিং দেখান, তখন কঠিন বিষয়গুলো খুব সহজ মনে হয়। ছবিটিতে অভিজ্ঞ মেন্টর ও শিক্ষার্থীর এই পারস্পরিক শিক্ষার মুহূর্ত ফুটে উঠেছে।'
      },
      {
        headingEn: '2. Protecting Beginners from Telegram & MLM Scams',
        headingBn: '২. নতুনদের টেলিগ্রাম ও এমএলএম স্ক্যাম থেকে রক্ষা করা',
        textEn: 'In regions like Bangladesh, many newcomers fall victim to fake Telegram admins or MLM Ponzi schemes promising daily fixed returns. Mentors teach students to recognize scams instantly and rely solely on verified non-custodial tools like Verse DEX.',
        textBn: 'বাংলাদেশে অনেক নতুন মানুষ ভুয়া টেলিগ্রাম এডমিন ও পঞ্জি স্ক্যামের খপ্পরে পড়েন। মেন্টরশিপের মাধ্যমে তাদের শেখানো হয় কীভাবে নিজের সিড ফ্রেজ রক্ষা করতে হয় এবং বিশ্বস্ত ভার্স ডেক্স ব্যবহার করতে হয়।'
      },
      {
        headingEn: '3. Building Local Web3 Communities',
        headingBn: '৩. স্থানীয় ওয়েব৩ কমিউনিটি গড়ে তোলা',
        textEn: 'Educated students quickly become educators themselves, creating a ripple effect of empowerment across universities, IT clubs, and developer meetups in Bangladesh.',
        textBn: 'একজন দক্ষ শিক্ষার্থী পরবর্তীতে নিজেই আরো দশজনকে শেখান। ফলে বিশ্ববিদ্যালয় ও আইটি ক্লাবগুলোতে দ্রুত সচেতনতা ও অর্থনৈতিক মুক্তি ছড়িয়ে পড়ছে।'
      }
    ]
  };

  // 5. CHAPTER 5: PERSON TRADING VERSE ON DEX
  const TRADING_CHAPTER = {
    id: 'trading-verse-chapter',
    type: 'trading',
    category: 'Trading Chapter',
    badgeEn: 'Person Trading Verses',
    badgeBn: 'ভার্স টোকেন ট্রেডিং-এর দৃশ্য',
    titleEn: 'Chapter 5: Non-Custodial Verse DEX Swaps & Market Execution',
    titleBn: 'অধ্যায় ৫: নন-কাস্টডিয়াল ভার্স ডেক্স ট্রেডিং ও মার্কেট কৌশল',
    subtitleEn: 'Mastering Swaps, Automated Market Makers & Decentralized Trading',
    subtitleBn: 'টোকেন অদলবদল, অটোমেটেড মার্কেট মেকার ও বিকেন্দ্রীকৃত ট্রেডিং-এর কৌশল',
    logoUrl: VERSE_LOGO_URL,
    fallbackLogoUrl: VERSE_FALLBACK_URL,
    pictureUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
    readTime: '14 min read',
    chapterNumber: 'CHAPTER V',
    author: {
      nameEn: 'Verse DEX Liquidity Strategists',
      nameBn: 'ভার্স ডেক্স লিকুইডিটি স্ট্র্যাটেজিস্ট',
      roleEn: 'Automated Market Maker & Trading Specialists',
      roleBn: 'অটোমেটেড মার্কেট মেকার ও ট্রেডিং বিশেষজ্ঞ'
    },
    meta: {
      startedEn: 'Verse DEX Operational Since 2022',
      startedBn: 'ভার্স ডেক্স ২০২২ থেকে সচল',
      currentPopularityEn: '$100M+ Total Trading Volume Executed',
      currentPopularityBn: '$১০০ মিলিয়ন+ মোট ট্রেডিং লেনদেন',
      globalRankEn: 'Ultra-Fast Sub-Cent Swaps on Polygon & Ethereum',
      globalRankBn: 'পলিগন ও ইথেরিয়ামে অতি দ্রুত ট্রেডিং সার্ভিস'
    },
    storySections: [
      {
        headingEn: '1. Hands-On Trading Experience on Verse DEX',
        headingBn: '১. ভার্স ডেক্সে সরাসরি ট্রেডিং অভিজ্ঞতা',
        textEn: 'This picture illustrates a trader evaluating real-time market charts and executing non-custodial swaps on Verse DEX. Unlike centralized exchanges where you must deposit funds to a company, Verse DEX lets you trade directly from your wallet.',
        textBn: 'ছবিটিতে একজন ট্রাডারকে অন-চেইন চার্ট বিশ্লেষণ করে সরাসরি নিজের ওয়ালেট থেকে ভার্স ডেক্সে টোকেন অদলবদল করতে দেখা যাচ্ছে। এখানে এক্সচেঞ্জে কোনো ডলার জমা রাখা লাগে না।'
      },
      {
        headingEn: '2. Understanding AMM Liquidity Mechanics (x * y = k)',
        headingBn: '২. এএমএম লিকুইডিটি গণিত (x * y = k) বোঝা',
        textEn: 'Verse DEX uses the constant product formula to calculate token swaps algorithmically. 0.25% of trading volume goes directly back to liquidity providers, ensuring sustainable yield for participants.',
        textBn: 'ভার্স ডেক্স গাণিতিক সূত্র ব্যবহার করে প্রতি সেকেন্ডে যেকোনো টোকেনের দাম নির্ধারণ করে। প্রতি লেনদেনের ০.২৫% ফি সরাসরি লিকুইডিটি প্রোভাইডারদের পকেটে যায়।'
      },
      {
        headingEn: '3. Safe Trading Habits & Managing Slippage',
        headingBn: '৩. নিরাপদ ট্রেডিং অভ্যাস ও স্লিপেজ নিয়ন্ত্রণ',
        textEn: 'Traders learn to set custom slippage tolerance, verify official smart contract token addresses, and avoid low-liquidity scam tokens.',
        textBn: 'ট্রেডাররা সঠিকভাবে স্লিপেজ টলারেন্স সেট করা, আসল টোকেন কন্ট্রাক্ট অ্যাড্রেস ভেরিফাই করা এবং নিরাপদ ট্রেডিং অভ্যাস রপ্ত করেন।'
      }
    ]
  };

  // 6. CHAPTER 6: PERSON GROWING OLDER & SUCCEEDING THROUGH VERSE
  const GROWTH_CAREER_CHAPTER = {
    id: 'career-growth-chapter',
    type: 'growth',
    category: 'Career Growth Chapter',
    badgeEn: 'Growing Older & Succeeding',
    badgeBn: 'বয়স বৃদ্ধির সাথে সাথে ক্রিপ্টো পেশায় সাফল্য',
    titleEn: 'Chapter 6: Lifelong Skill Evolution & Future Web3 Success',
    titleBn: 'অধ্যায় ৬: আজীবন দক্ষতা বৃদ্ধি এবং ওয়েব৩-তে ভবিষ্যতের উজ্জ্বল সাফল্য',
    subtitleEn: 'From Student Beginner to Senior Web3 Developer, Leader & Sovereign Individual',
    subtitleBn: 'সাধারণ শিক্ষার্থী থেকে শুরু করে সিনিয়র ওয়েব৩ ডেভেলপার, লিডার ও স্বাধীন ব্যক্তিত্বে উত্তরণ',
    logoUrl: VERSE_LOGO_URL,
    fallbackLogoUrl: VERSE_FALLBACK_URL,
    pictureUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    readTime: '16 min read',
    chapterNumber: 'CHAPTER VI',
    author: {
      nameEn: 'Verse Career Development Council',
      nameBn: 'ভার্স ক্যারিয়ার ডেভেলপমেন্ট কাউন্সিল',
      roleEn: 'Web3 Workforce Mentors & Career Strategists',
      roleBn: 'ওয়েব৩ ক্যারিয়ার মেন্টর ও উন্নয়ন কৌশলবিদ'
    },
    meta: {
      startedEn: 'Web3 Lifelong Learning Pathway',
      startedBn: 'ওয়েব৩ আজীবন শিক্ষার পথ পরিক্রমা',
      currentPopularityEn: 'Empowering Thousands of Young Bangladeshi Tech Talents',
      currentPopularityBn: 'বাংলাদেশের হাজার হাজার তরুণ আইটি প্রতিভাকে আত্মনির্ভরশীলকরণ',
      globalRankEn: '#1 Path for Remote Global Web3 Employment',
      globalRankBn: 'আন্তর্জাতিক রিমোট ওয়েব৩ চাকরির ১ নম্বর মাধ্যম'
    },
    storySections: [
      {
        headingEn: '1. The Vision of Aging with Wisdom and Financial Independence',
        headingBn: '১. প্রজ্ঞা ও অর্থনৈতিক স্বাধীনতার সাথে ভবিষ্যৎ গড়ে তোলা',
        textEn: 'This powerful picture captures the transition of an individual who starts learning Verse and Web3 in their youth and grows into a mature, prosperous tech leader over time. By mastering cryptography, smart contracts, and decentralized finance, they secure lifelong financial sovereignty.',
        textBn: 'ছবিটি একজন তরুণের জীবন পরিক্রমা প্রকাশ করে—যিনি ছাত্রবয়সে ভার্স ও ওয়েব৩ শিক্ষা শুরু করেছিলেন এবং বয়স বাড়ার সাথে সাথে একজন সফল, স্বাবলম্বী প্রযুক্তি নেতায় পরিণত হয়েছেন।'
      },
      {
        headingEn: '2. Escaping Local Unemployment through Global Web3 Careers',
        headingBn: '২. স্থানীয় বেকারত্ব দূর করে বৈশ্বিক ওয়েব৩ ক্যারিয়ার গড়ে তোলা',
        textEn: 'In developing nations like Bangladesh, traditional job markets are often overcrowded. Learning Web3 opens doors to remote global opportunities in smart contract auditing, DAO management, Web3 marketing, and liquidity analysis.',
        textBn: 'আমাদের দেশে প্রচলিত চাকরির বাজার কঠিন হলেও ওয়েব৩ শিখলে বিশ্বজুড়ে ঘরে বসে গুগল, বিটকয়েন.কম বা ভার্স ইকোসিস্টেমে আন্তর্জাতিক ক্যারিয়ার গড়া সম্ভব।'
      },
      {
        headingEn: '3. A Bright Future Built on Immutable Foundations',
        headingBn: '৩. পরিবর্তনহীন প্রযুক্তির ওপর ভিত্তি করে উজ্জ্বল ভবিষ্যৎ',
        textEn: 'As blockchain technology becomes the baseline for global trade, early learners who invest in Verse and Web3 knowledge today will stand at the forefront of the next global financial era.',
        textBn: 'আগামীর বিশ্বে ব্লকচেইনই হবে বৈশ্বিক বাণিজ্যের মূল ভিত্তি। যারা আজ ভার্স শিক্ষা গ্রহণ করবেন, তারাই আগামী দিনে নতুন ডিজিটাল বিশ্ব পরিচালনা করবেন।'
      }
    ]
  };

  // 7. REAL PICTURE TECHNOLOGY GALLERY (4 CORE MODULES)
  const TECH_GALLERY_MODULES = [
    {
      id: 'gallery-mod-blockchain',
      titleEn: '1. Blockchain Infrastructure Architecture',
      titleBn: '১. ব্লকচেইন অবকাঠামো ও স্থাপত্য',
      subtitleEn: 'Distributed Node Mesh & Cryptographic Hashing',
      subtitleBn: 'ডিস্ট্রিবিউটেড নোড মেশ ও ক্রিপ্টোগ্রাফিক হ্যাকিং',
      pictureUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      descriptionEn: 'Real visual representation of distributed P2P node clusters validating block transactions with SHA-256 state proofs.',
      descriptionBn: 'বিশ্বজুড়ে ছড়িয়ে থাকা পিয়ার-টু-পিয়ার কম্পিউটার নোডসমূহ ব্লকচেইনের লেনদেনসমূহ গাণিতিক নিখুঁততায় রক্ষা করছে।'
    },
    {
      id: 'gallery-mod-verse',
      titleEn: '2. Verse Token Network & Smart Contracts',
      titleBn: '২. ভার্স টোকেন নেটওয়ার্ক ও স্মার্ট কন্ট্রাক্ট',
      subtitleEn: 'Multi-chain Interoperability on Ethereum & Polygon',
      subtitleBn: 'ইথেরিয়াম ও পলিগনে মাল্টি-চেইন আন্তঃসংযোগ',
      pictureUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1000&q=80',
      descriptionEn: 'High-speed smart contract execution powering Verse DEX swaps, staking rewards, and automated token burns.',
      descriptionBn: 'স্বয়ংক্রিয় স্মার্ট কন্ট্রাক্টের মাধ্যমে অত্যন্ত দ্রুত ও নিরাপদভাবে ভার্স ডেক্স ও স্ট্যাকিং পুলের লেনদেন সম্পন্ন হচ্ছে।'
    },
    {
      id: 'gallery-mod-bitcoin',
      titleEn: '3. Bitcoin Foundation & Mining Power',
      titleBn: '৩. বিটকয়েন ভিত্তি এবং মাইনিং ক্ষমতা',
      subtitleEn: 'Proof-of-Work Energy & Immutable Monetary Policy',
      subtitleBn: 'প্রুফ-অফ-ওয়ার্ক মাইনিং ও ২১ মিলিয়ন নির্দিষ্ট সরবরাহ',
      pictureUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1000&q=80',
      descriptionEn: 'The immutable digital gold backbone of crypto finance, protected by global hash power and decentralized consensus.',
      descriptionBn: 'বিশ্বব্যাপী হাজার হাজার প্রসেসিং পাওয়ার মাইনারের নিরাপত্তার মাধ্যমে বিটকয়েন অক্ষত ও অপরাজেয় রূপ ধারণ করেছে।'
    },
    {
      id: 'gallery-mod-ecosystem',
      titleEn: '4. Global Web3 Ecosystem & Networking',
      titleBn: '৪. গ্লোবাল ওয়েব৩ ইকোসিস্টেম ও নেটওয়ার্কিং',
      subtitleEn: 'Peer-to-Peer Global Community & Financial Sovereignty',
      subtitleBn: 'বিশ্বব্যাপী মুক্ত কমিউনিটি ও অর্থনৈতিক স্বাধীনতা',
      pictureUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      descriptionEn: 'Connecting millions of users worldwide through non-custodial wallets, open-source code, and transparent governance.',
      descriptionBn: 'সীমানা ছাড়িয়ে কোটি কোটি মানুষকে কোনো মধ্যস্থতাকারী ব্যাংকিং ছাড়াই স্বাধীন লেনদেনের বন্ধনে আবদ্ধ করেছে ওয়েব৩।'
    }
  ];

  // ALL CHAPTERS LIST IN SEQUENTIAL ORDER AS REQUESTED BY USER
  const ALL_CHAPTERS = [
    VERSE_CHAPTER,
    BITCOIN_CHAPTER,
    VERSE_BOOK_COMBINED,
    TEACHING_CHAPTER,
    TRADING_CHAPTER,
    GROWTH_CAREER_CHAPTER
  ];

  // FILTERED CHAPTERS
  const filteredChapters = ALL_CHAPTERS.filter(item => {
    const titleMatch = (item.titleEn + item.titleBn).toLowerCase().includes(searchQuery.toLowerCase());
    const subMatch = (item.subtitleEn + item.subtitleBn).toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTabFilter === 'all') return titleMatch || subMatch;
    if (activeTabFilter === 'verse') return item.type === 'verse' || item.type === 'combined';
    if (activeTabFilter === 'bitcoin') return item.type === 'bitcoin';
    if (activeTabFilter === 'education') return item.type === 'teaching' || item.type === 'growth';
    if (activeTabFilter === 'trading') return item.type === 'trading';
    return titleMatch || subMatch;
  });

  return (
    <div className="space-y-10 min-h-screen pb-16">

      {/* 1. HERO HEADER BANNER */}
      <section className="bg-gradient-to-br from-[#0a0f2d] via-[#0e163d] to-[#070a1f] border border-cyan-500/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
              <BookIcon size={16} className="text-cyan-400" />
              <span>{language === 'bn' ? 'ভার্স বইমেলা ও কোডেক্স গ্যালাই' : 'Verse Bookfair & Historical Codex'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight leading-tight">
              {language === 'bn' ? (
                <>ভার্স বইমেলা: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400">ভার্স ও বিটকয়েন-এর সম্পূর্ণ ইতিহাস</span></>
              ) : (
                <>Verse Bookfair: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400">Verse & Bitcoin Master Chronicles</span></>
              )}
            </h1>

            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
              {language === 'bn' 
                ? 'ছবি ও লোগো সহ ভার্স ও বিটকয়েন-এর উৎপত্তি, লেখক, প্রারম্ভিক যাত্রা, বিশ্বব্যাপী জনপ্রিয়তা, শিক্ষা, ট্রেডিং এবং ভবিষ্যতের ক্যারিয়ার উন্নয়নের ধাপে ধাপে চিত্রায়িত গাইড।'
                : 'A structured, picture-rich chronicle detailing the author, origin, launch history, worldwide popularity, peer education, DEX trading, and lifelong career growth behind Verse and Bitcoin.'
              }
            </p>

            {/* Logos Status Badge */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 bg-[#080d26] px-3.5 py-2 rounded-xl border border-cyan-400/30">
                <img 
                  src={VERSE_LOGO_URL} 
                  alt="Verse Logo" 
                  className="w-7 h-7 rounded-lg object-cover" 
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = VERSE_FALLBACK_URL; }}
                />
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-300 block">Verse Token</span>
                  <span className="text-[10px] text-slate-400 font-mono">Bitcoin.com Utility</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#080d26] px-3.5 py-2 rounded-xl border border-amber-400/30">
                <img 
                  src={BITCOIN_LOGO_URL} 
                  alt="Bitcoin Logo" 
                  className="w-7 h-7 rounded-full object-cover" 
                />
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 block">Bitcoin Network</span>
                  <span className="text-[10px] text-slate-400 font-mono">Genesis Decentralized Money</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search & Filter Controls */}
          <div className="w-full lg:w-80 bg-[#080d26] p-5 rounded-2xl border border-purple-500/30 space-y-3 shrink-0">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
              {language === 'bn' ? 'অনুসন্ধান ও ফিল্টার' : 'Search & Filter Codex'}
            </span>

            <div className="relative">
              <SearchIcon size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text"
                placeholder={language === 'bn' ? 'অধ্যায় বা বিষয় খুঁজুন...' : 'Search chapters or topics...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#030617] border border-purple-500/20 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                { id: 'all', labelEn: 'All Chapters', labelBn: 'সকল অধ্যায়' },
                { id: 'verse', labelEn: 'Verse', labelBn: 'ভার্স' },
                { id: 'bitcoin', labelEn: 'Bitcoin', labelBn: 'বিটকয়েন' },
                { id: 'education', labelEn: 'Education', labelBn: 'শিক্ষা ও ক্যারিয়ার' },
                { id: 'trading', labelEn: 'Trading', labelBn: 'ট্রেডিং' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveTabFilter(f.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    activeTabFilter === f.id
                      ? 'bg-cyan-400 text-slate-950 font-black'
                      : 'bg-[#0e1438] text-slate-300 hover:text-white border border-purple-500/20'
                  }`}
                >
                  {language === 'bn' ? f.labelBn : f.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEQUENTIAL CHAPTER CARDS GRID (CLICK ANY PICTURE OR LOGO TO READ DETAILED POPUP/CHAPTER) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
          <div>
            <h2 className="text-2xl font-black text-white font-mono uppercase tracking-tight flex items-center gap-2">
              <LibraryIcon className="text-cyan-400" size={24} />
              {language === 'bn' ? 'ভার্স বইমেলার প্রধান অধ্যায়সমূহ' : 'Main Chapters of The Verse Bookfair'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'bn' 
                ? 'যেকোনো ছবি বা কার্ডে ক্লিক করে সেই নির্দিষ্ট বিষয়ের বিস্তারিত তথ্য ও আলোচনা পড়ুন।' 
                : 'Click on any picture or card to open the complete detailed information & discussion.'
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((chap) => (
            <div 
              key={chap.id}
              onClick={() => setSelectedItem(chap)}
              className="bg-[#090e2b] border border-purple-500/20 hover:border-cyan-400/60 rounded-3xl p-5 space-y-4 cursor-pointer transition-all hover:-translate-y-2 group shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Chapter Number & Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                    {chap.chapterNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock size={12} className="text-cyan-400" />
                    {chap.readTime}
                  </span>
                </div>

                {/* Picture with Logo Overlay */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-purple-500/20 shadow-lg">
                  <img 
                    src={chap.pictureUrl} 
                    alt={chap.titleEn} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Floating Logo Badge on Picture */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-400/40 flex items-center gap-2 shadow-2xl">
                    <img 
                      src={chap.logoUrl} 
                      alt="Logo" 
                      className="w-6 h-6 rounded-lg object-cover" 
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = chap.fallbackLogoUrl; }}
                    />
                    <span className="text-[11px] font-mono font-bold text-white uppercase">
                      {language === 'bn' ? chap.badgeBn : chap.badgeEn}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-white font-mono group-hover:text-cyan-300 transition-colors leading-snug">
                    {language === 'bn' ? chap.titleBn : chap.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {language === 'bn' ? chap.subtitleBn : chap.subtitleEn}
                  </p>
                </div>

              </div>

              {/* Action Button Footer */}
              <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 group-hover:underline flex items-center gap-1">
                  {language === 'bn' ? 'বিস্তারিত তথ্য পড়ুন →' : 'Read Full Information →'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {chap.author.nameEn.split(' ')[0]}
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. REAL PICTURE TECHNOLOGY GALLERY (BLOCKCHAIN, VERSE, BITCOIN, ECOSYSTEM) */}
      <section className="bg-[#070b22] border border-purple-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
        <div className="space-y-1 border-b border-purple-500/20 pb-4">
          <h2 className="text-2xl font-black text-white font-mono uppercase tracking-tight flex items-center gap-2">
            <SparklesIcon className="text-amber-400" size={24} />
            {language === 'bn' ? 'প্রযুক্তিভিত্তিক আসল ছবি ও আলোচনা গ্যালারি' : 'Real Picture Technology & Core Topic Gallery'}
          </h2>
          <p className="text-xs text-slate-400">
            {language === 'bn' 
              ? 'ব্লকচেইন, ভার্স, বিটকয়েন এবং ইকোসিস্টেমের বাস্তব চিত্র সংকলন।'
              : 'Visual showcases for Blockchain, Verse, Bitcoin, and Ecosystem architectures.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_GALLERY_MODULES.map((mod) => (
            <div 
              key={mod.id}
              onClick={() => setSelectedItem({
                ...mod,
                isTechGallery: true,
                titleEn: mod.titleEn,
                titleBn: mod.titleBn,
                subtitleEn: mod.subtitleEn,
                subtitleBn: mod.subtitleBn,
                pictureUrl: mod.pictureUrl,
                logoUrl: mod.titleEn.includes('Verse') ? VERSE_LOGO_URL : (mod.titleEn.includes('Bitcoin') ? BITCOIN_LOGO_URL : VERSE_LOGO_URL),
                fallbackLogoUrl: VERSE_FALLBACK_URL,
                storySections: [
                  {
                    headingEn: mod.titleEn,
                    headingBn: mod.titleBn,
                    textEn: mod.descriptionEn + ' This technical visual demonstrates the decentralized architecture powering non-custodial cryptographic ledgers without central failure points.',
                    textBn: mod.descriptionBn + ' এই প্রযুক্তির ফলে কোনো একক কেন্দ্রীয় সার্ভার ছাড়াই পৃথিবীর হাজার হাজার কম্পিউটার একসাথে নিরাপদ লেনদেন বজায় রাখে।'
                  }
                ],
                author: {
                  nameEn: 'Verse Architecture Lab',
                  nameBn: 'ভার্স আর্কিটেকচার ল্যাব',
                  roleEn: 'Blockchain Systems Engineers',
                  roleBn: 'ব্লকচেইন সিস্টেম ইঞ্জিনিয়ার'
                }
              })}
              className="bg-[#0b1033] border border-purple-500/20 hover:border-amber-400/60 rounded-2xl p-4 space-y-3 cursor-pointer transition-all hover:-translate-y-1.5 group shadow-lg"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-purple-500/20">
                <img 
                  src={mod.pictureUrl} 
                  alt={mod.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white font-mono group-hover:text-amber-300 transition-colors">
                  {language === 'bn' ? mod.titleBn : mod.titleEn}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-2">
                  {language === 'bn' ? mod.subtitleBn : mod.subtitleEn}
                </p>
              </div>

              <span className="text-[10px] font-mono text-amber-400 font-bold block pt-1">
                {language === 'bn' ? 'ছবিতে ক্লিক করে বিস্তার দেখুন →' : 'Click Picture for Deep-Dive →'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAILED MODAL OVERLAY WHEN ANY CHAPTER OR PICTURE IS CLICKED */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0a0e2a] border-2 border-cyan-400/50 rounded-3xl max-w-4xl w-full p-6 md:p-10 shadow-2xl relative space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#121840] text-slate-300 hover:text-white hover:bg-cyan-500/20 border border-purple-500/30 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="space-y-4 border-b border-purple-500/20 pb-6 pr-10">
              <div className="flex flex-wrap items-center gap-3">
                {selectedItem.chapterNumber && (
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase">
                    {selectedItem.chapterNumber}
                  </span>
                )}
                {selectedItem.category && (
                  <span className="px-3 py-1 rounded-full bg-purple-950 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold uppercase">
                    {selectedItem.category}
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-white font-mono leading-tight">
                {language === 'bn' ? selectedItem.titleBn : selectedItem.titleEn}
              </h1>

              <p className="text-sm md:text-base text-cyan-300 font-mono">
                {language === 'bn' ? selectedItem.subtitleBn : selectedItem.subtitleEn}
              </p>
            </div>

            {/* Main Picture with Logo Badge */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-purple-500/30 shadow-xl">
              <img 
                src={selectedItem.pictureUrl} 
                alt={selectedItem.titleEn} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-cyan-400/40 flex items-center gap-3 shadow-2xl">
                <img 
                  src={selectedItem.logoUrl} 
                  alt="Logo" 
                  className="w-8 h-8 rounded-xl object-cover" 
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = selectedItem.fallbackLogoUrl || VERSE_FALLBACK_URL; }}
                />
                <div>
                  <span className="text-xs font-mono font-black text-white uppercase block">
                    {selectedItem.author?.nameEn || 'Verse Protocol'}
                  </span>
                  <span className="text-[10px] text-cyan-300 font-mono">
                    {selectedItem.author?.roleEn || 'Official Literature'}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Metadata Table (If available) */}
            {selectedItem.meta && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0e1438] p-4 rounded-2xl border border-purple-500/20">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{language === 'bn' ? 'কখন শুরু হয়েছিল' : 'Launch Timeline'}</span>
                  <span className="text-xs font-mono font-bold text-amber-300">{language === 'bn' ? selectedItem.meta.startedBn : selectedItem.meta.startedEn}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{language === 'bn' ? 'বর্তমান জনপ্রিয়তা' : 'Current Popularity'}</span>
                  <span className="text-xs font-mono font-bold text-cyan-300">{language === 'bn' ? selectedItem.meta.currentPopularityBn : selectedItem.meta.currentPopularityEn}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{language === 'bn' ? 'বিশ্বব্যাপী অবস্থান' : 'Global Standing'}</span>
                  <span className="text-xs font-mono font-bold text-purple-300">{language === 'bn' ? selectedItem.meta.globalRankBn : selectedItem.meta.globalRankEn}</span>
                </div>
              </div>
            )}

            {/* Detailed Story Paragraphs */}
            <div className="space-y-6 pt-2">
              <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <FileText size={16} className="text-cyan-400" />
                {language === 'bn' ? 'ধাপে ধাপে বিস্তৃত আলোচনা' : 'Detailed Step-by-Step Historical Analysis'}
              </h3>

              {selectedItem.storySections?.map((sec: any, idx: number) => (
                <div key={idx} className="bg-[#0d1338] p-5 rounded-2xl border border-purple-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white font-mono text-cyan-300">
                    {language === 'bn' ? sec.headingBn : sec.headingEn}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                    {language === 'bn' ? sec.textBn : sec.textEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Close Button Footer */}
            <div className="pt-4 border-t border-purple-500/20 flex justify-end">
              <button 
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs font-mono uppercase tracking-wider cursor-pointer transition-all"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close Chapter View'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
