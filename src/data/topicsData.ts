import { Topic, CoinInfo } from '../types';

export const POPULAR_COINS: CoinInfo[] = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    type: 'Layer 1 / Store of Value',
    useCaseEn: 'Digital gold, decentralized peer-to-peer payment network protecting against fiat inflation.',
    useCaseBn: 'ডিজিটাল স্বর্ণ, যা ফিয়াট মুদ্রার মুদ্রাস্ফীতির বিরুদ্ধে সুরক্ষাকারী একটি বিকেন্দ্রীকৃত পিয়ার-টু-পিয়ার পেমেন্ট নেটওয়ার্ক।'
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'Layer 1 / Smart Contracts',
    useCaseEn: 'Decentralized application platform, smart contract engine powering Web3 services globally.',
    useCaseBn: 'বিকেন্দ্রীকৃত অ্যাপ্লিকেশন প্ল্যাটফর্ম এবং স্মার্ট চুক্তি ইঞ্জিন যা বিশ্বজুড়ে ওয়েব৩ সেবা পরিচালনা করে।'
  },
  {
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    type: 'Stablecoin (Fiat-collateralized)',
    useCaseEn: 'Pegged 1:1 to USD, used for dollar liquidity, hedging, and low-cost global value transfer.',
    useCaseBn: 'ইউএস ডলারের সাথে ১:১ মূল্যে সংযুক্ত, যা ডলারের তারল্য বজায় রাখা এবং কম খরচে বিশ্বব্যাপী লেনদেনে ব্যবহৃত হয়।'
  },
  {
    rank: 4,
    name: 'BNB',
    symbol: 'BNB',
    type: 'Layer 1 / Exchange Utility',
    useCaseEn: 'Native token of BNB Chain, powers Binance exchange fee discounts and ecosystem transaction fees.',
    useCaseBn: 'বিএনবি চেইনের নিজস্ব টোকেন, যা বাইন্যান্স এক্সচেঞ্জের ফি ছাড় এবং ইকোসিস্টেমের লেনদেন ফি মেটাতে ব্যবহৃত হয়।'
  },
  {
    rank: 5,
    name: 'Solana',
    symbol: 'SOL',
    type: 'Layer 1 / High-Performance',
    useCaseEn: 'Ultra-fast smart contract executions with safe sub-cent fees using Proof-of-History consensus.',
    useCaseBn: 'প্রুফ-অফ-হিস্ট্রি কনসেনসাস ব্যবহার করে অতি-দ্রুত এবং এক সেন্টেরও কম খরচে স্মার্ট চুক্তি সম্পাদনকারী চেইন।'
  },
  {
    rank: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    type: 'Stablecoin (Regulated)',
    useCaseEn: 'Fully backed digital dollar backed by highly liquid reserves of cash and short-term US treasuries.',
    useCaseBn: 'নগদ অর্থ এবং স্বল্পমেয়াদী মার্কিন ট্রেজারি বন্ডের তারল্য দ্বারা সম্পূর্ণ সমর্থিত একটি নিয়ন্ত্রিত ডিজিটাল ডলার।'
  },
  {
    rank: 7,
    name: 'Ripple',
    symbol: 'XRP',
    type: 'Layer 1 / Settlement',
    useCaseEn: 'Inter-bank cross-border payments & institutional liquidity ledger designed for instant fiat settlement.',
    useCaseBn: 'আন্তঃব্যাংক আন্তঃসীমান্ত লেনদেন এবং তাৎক্ষণিক ফিয়াট নিষ্পত্তির জন্য ডিজাইন করা প্রাতিষ্ঠানিক লিকুইডিটি লেজার।'
  },
  {
    rank: 8,
    name: 'Cardano',
    symbol: 'ADA',
    type: 'Layer 1 / Proof-of-Stake',
    useCaseEn: 'Peer-reviewed blockchain safety, smart contract capabilities based on Haskell framework.',
    useCaseBn: 'হাসকেল ফ্রেমওয়ার্কের ওপর ভিত্তি করে তৈরি এবং পিয়ার-রিভিউড ব্লকচেইন নিরাপত্তা ও স্মার্ট চুক্তির ক্ষমতাসম্পন্ন নেটওয়ার্ক।'
  },
  {
    rank: 9,
    name: 'Dogecoin',
    symbol: 'DOGE',
    type: 'Meme Value / Layer 1',
    useCaseEn: 'Open-source peer-to-peer cryptocurrency backed by an active global community and Elon Musk.',
    useCaseBn: 'একটি সক্রিয় বৈশ্বিক সম্প্রদায় এবং ইলন মাস্কের সমর্থনপুষ্ট ওপেন-সোর্স পিয়ার-টু-পিয়ার ক্রিপ্টোকারেন্সি।'
  },
  {
    rank: 10,
    name: 'Shiba Inu',
    symbol: 'SHIB',
    type: 'Ecosystem Token',
    useCaseEn: 'Decentralized community-led project with native Dex (ShibaSwap) and utility layers.',
    useCaseBn: 'নিজস্ব ডেক্স (শিবা সোয়াপ) এবং ইউটিলিটি লেয়ার সহ একটি বিকেন্দ্রীকৃত ও কমিউনিটি চালিত প্রজেক্ট।'
  },
  {
    rank: 11,
    name: 'Polkadot',
    symbol: 'DOT',
    type: 'Layer 0 / Interoperability',
    useCaseEn: 'Connects multiple specialized blockchains into one unified network via secure parachains.',
    useCaseBn: 'নিরাপদ প্যারাচেইনের মাধ্যমে একাধিক বিশেষায়িত ব্লকচেইনকে একটি সমন্বিত নেটওয়ার্কে সংযুক্ত করে।'
  },
  {
    rank: 12,
    name: 'Polygon',
    symbol: 'MATIC',
    type: 'Layer 2 / Scaling',
    useCaseEn: 'Low cost, scalable infrastructure for Ethereum-compatible networks using POS chains.',
    useCaseBn: 'পিওএস চেইন ব্যবহার করে ইথেরিয়াম-সামঞ্জস্যপূর্ণ নেটওয়ার্কের জন্য কম খরচের ও স্কেলেবল অবকাঠামো।'
  },
  {
    rank: 13,
    name: 'Avalanche',
    symbol: 'AVAX',
    type: 'Layer 1 / Custom Chains',
    useCaseEn: 'Blazing fast consensus protocol with customized sub-networks for corporate networks.',
    useCaseBn: 'কর্পোরেট নেটওয়ার্কের জন্য কাস্টমাইজড সাব-নেটওয়ার্ক সহ অত্যন্ত দ্রুতগতির কনসেনসাস প্রোটোকল।'
  },
  {
    rank: 14,
    name: 'Chainlink',
    symbol: 'LINK',
    type: 'Decentralized Oracle',
    useCaseEn: 'Feeds secure external real-world data and API triggers directly into on-chain smart contracts.',
    useCaseBn: 'বাস্তব বিশ্বের সুরক্ষিত ডেটা এবং এপিআই ট্রিগার সরাসরি অন-চেইনে স্মার্ট চুক্তিতে সরবরাহ করে।'
  },
  {
    rank: 15,
    name: 'Litecoin',
    symbol: 'LTC',
    type: 'Layer 1 / Payments',
    useCaseEn: 'Lighter, faster block creation sibling of original Bitcoin architecture designed for retail.',
    useCaseBn: 'খুচরা লেনদেনের জন্য ডিজাইন করা মূল বিটকয়েন আর্কিটেকচারের একটি হালকা এবং দ্রুততর ব্লক তৈরির সহোদর।'
  },
  {
    rank: 16,
    name: 'Tron',
    symbol: 'TRX',
    type: 'Layer 1 / Media & DeFi',
    useCaseEn: 'High-throughput public blockchain famous for low-cost stablecoin transfers including USDT.',
    useCaseBn: 'ইউএসডিটি সহ কম খরচে স্টেবলকয়েন স্থানান্তরের জন্য অত্যন্ত জনপ্রিয় এবং উচ্চ-থ্রুটপুট সম্পন্ন পাবলিক ব্লকচেইন।'
  },
  {
    rank: 17,
    name: 'Cosmos',
    symbol: 'ATOM',
    type: 'Layer 0 / Cosmos Hub',
    useCaseEn: 'The Internet of Blockchains, supporting cross-chain IBC transfers with multi-chain sovereign networks.',
    useCaseBn: 'ব্লকচেইনের ইন্টারনেট, যা মাল্টি-চেইন সার্বভৌম নেটওয়ার্কের সাথে সহজে ক্রস-চেইন আইবিসি স্থানান্তর সমর্থন করে।'
  },
  {
    rank: 18,
    name: 'Uniswap',
    symbol: 'UNI',
    type: 'DeFi / DEX Token',
    useCaseEn: 'Governance token for the leading Ethereum-based decentralized automated market maker exchange.',
    useCaseBn: 'ইথেরিয়াম-ভিত্তিক প্রধান বিকেন্দ্রীকৃত অটোমেটেড মার্কেট মেকার এক্সচেঞ্জের গভর্ন্যান্স টোকেন।'
  },
  {
    rank: 19,
    name: 'Stellar',
    symbol: 'XLM',
    type: 'Layer 1 / Payments',
    useCaseEn: 'Connecting financial institutions for ultra-low-cost cash and asset payment remittances globally.',
    useCaseBn: 'বিশ্বব্যাপী অতি কম খরচে নগদ অর্থ ও সম্পদ প্রেরণ বা রেমিট্যান্সের জন্য আর্থিক প্রতিষ্ঠানগুলোকে সংযুক্ত করে।'
  },
  {
    rank: 20,
    name: 'Near Protocol',
    symbol: 'NEAR',
    type: 'Layer 1 / Usability',
    useCaseEn: 'Highly scalable platform with human-readable wallet addresses utilizing progressive sharding tech.',
    useCaseBn: 'প্রগতিশীল শার্ডিং প্রযুক্তি ব্যবহার করে পরিচালিত এবং সাধারণ মানুষের পঠনযোগ্য ওয়ালেট অ্যাড্রেস বিশিষ্ট প্ল্যাটফর্ম।'
  },
  {
    rank: 21,
    name: 'OKB',
    symbol: 'OKB',
    type: 'Utility Token',
    useCaseEn: 'Discounts and exclusive access privileges on the OKX global exchange platform.',
    useCaseBn: 'ওকেএক্স বৈশ্বিক এক্সচেঞ্জ প্ল্যাটফর্মে বিশেষ ছাড় এবং একচেটিয়া সুবিধা অ্যাক্সেস করার ইউটিলিটি টোকেন।'
  },
  {
    rank: 22,
    name: 'Monero',
    symbol: 'XMR',
    type: 'Privacy Coin',
    useCaseEn: 'Completely anonymous, untraceable peer-to-peer cash transactions shielding sender and receiver.',
    useCaseBn: 'প্রেরক ও প্রাপকের পরিচয় সম্পূর্ণ গোপন রেখে অত্যন্ত সুরক্ষিত ও ট্রেস-অযোগ্য পিয়ার-টু-পিয়ার লেনদেন ব্যবস্থা।'
  },
  {
    rank: 23,
    name: 'Kaspa',
    symbol: 'KAS',
    type: 'Layer 1 / BlockDAG',
    useCaseEn: 'Rapid proof-of-work blockDAG network delivering single-second confirmation speeds securely.',
    useCaseBn: '১ সেকেন্ডের মধ্যে কনফার্মেশন সুবিধা প্রদানকারী একটি দ্রুতগতির প্রুফ-অফ-ওয়ার্ক ব্লকড্যাগ (BlockDAG) নেটওয়ার্ক।'
  },
  {
    rank: 24,
    name: 'Internet Computer',
    symbol: 'ICP',
    type: 'Layer 1 / Cloud Web',
    useCaseEn: 'Hosts web systems directly on decentralized blockchain infrastructure, bypassing IT monopolies.',
    useCaseBn: 'আইটি একচেটিয়াত্বকে পাশ কাটিয়ে সরাসরি বিকেন্দ্রীকৃত ব্লকচেইন অবকাঠামোতে ওয়েব সিস্টেম হোস্ট করে।'
  },
  {
    rank: 25,
    name: 'Ethereum Classic',
    symbol: 'ETC',
    type: 'Layer 1 / Immutable',
    useCaseEn: 'The original Ethereum block history preserved exactly without rolling back transaction code.',
    useCaseBn: 'কোনো প্রকার লেনদেন কোড রোল ব্যাক না করে সংরক্ষিত মূল ইথেরিয়াম ব্লকচেইনের অপরিবর্তিত ব্লক ইতিহাস।'
  },
  {
    rank: 26,
    name: 'Filecoin',
    symbol: 'FIL',
    type: 'Storage Utility',
    useCaseEn: 'Cooperative cloud data storage rent marketplace backed by algorithmic proof verification.',
    useCaseBn: 'অ্যালগরিদমিক প্রুফ যাচাইকরণ দ্বারা চালিত একটি সমবায় ডিজিটাল ডেটা ক্লাউড স্টোরেজ ভাড়ার মার্কেটপ্লেস।'
  },
  {
    rank: 27,
    name: 'Lido DAO',
    symbol: 'LDO',
    type: 'Staking Governance',
    useCaseEn: 'Governs Lido liquid staking protocols allowing users to earn yield while holding liquid representations.',
    useCaseBn: 'লিডো লিকুইড স্টেকিং প্রোটোকল পরিচালনা করে, যার মাধ্যমে ব্যবহারকারীরা লিকুইড টোকেন ধরে রেখেই ফলন অর্জন করতে পারেন।'
  },
  {
    rank: 28,
    name: 'Stacks',
    symbol: 'STX',
    type: 'Bitcoin Layer 2',
    useCaseEn: 'Brings Web3 smart contracts and decentralized apps securely to root Bitcoin security layers.',
    useCaseBn: 'রুট বিটকয়েন সিকিউরিটি স্তরের সাথে অত্যন্ত নিরাপদে ওয়েব৩ স্মার্ট চুক্তি এবং ডি-অ্যাপস নিয়ে আসে।'
  },
  {
    rank: 29,
    name: 'Optimism',
    symbol: 'OP',
    type: 'Layer 2 / Rollup',
    useCaseEn: 'Fast and cheap transaction rollups built natively to expand Ethereum mainnet scalability.',
    useCaseBn: 'ইথেরিয়াম মেইননেটের স্কেলাবিলিটি বাড়াতে তৈরি অত্যন্ত দ্রুত এবং সস্তা লেনদেন সম্পন্নকরণ রোলআপ।'
  },
  {
    rank: 30,
    name: 'Arbitrum',
    symbol: 'ARB',
    type: 'Layer 2 / Rollup',
    useCaseEn: 'High-utility optimistic rollup suite powering hundreds of advanced DeFi protocols.',
    useCaseBn: 'শত শত উন্নত ডেফি (DeFi) প্রোটোকলসমূহকে শক্তি প্রদানকারী উচ্চ-কার্যকরী অপ্টিমিস্টিক রোলআপ স্যুট।'
  },
  {
    rank: 31,
    name: 'VeChain',
    symbol: 'VET',
    type: 'Enterprise Supply Chain',
    useCaseEn: 'Traces real-world retail logistics, pharmaceutical origins, and asset authenticity ledgers.',
    useCaseBn: 'বাস্তব বিশ্বের খুচরা লজিস্টিকস, ফার্মাসিউটিক্যাল উৎস এবং সম্পদের সত্যতা যাচাইয়ের লেজার ট্র্যাক করে।'
  },
  {
    rank: 32,
    name: 'Maker',
    symbol: 'MKR',
    type: 'DeFi Governance',
    useCaseEn: 'Governs the decentralized autonomously run MakerDAO protocol and its DAI stablecoin infrastructure.',
    useCaseBn: 'বিকেন্দ্রীকৃত উপায়ে স্বয়ংক্রিয়ভাবে পরিচালিত মেকার-ডিএও (MakerDAO) প্রোটোকল এবং ডিএআই (DAI) স্টেবলকয়েন অবকাঠামো পরিচালনা করে।'
  },
  {
    rank: 33,
    name: 'Injective',
    symbol: 'INJ',
    type: 'Layer 1 / Finance Maker',
    useCaseEn: 'Tailor-made financial application blockchain supporting order books and margin options on-chain.',
    useCaseBn: 'অন-চেইন অর্ডার বুক এবং মার্জিন অপশন সমর্থিত অর্থ সংক্রান্ত অ্যাপ্লিকেশনের বিশেষ ব্লকচেইন।'
  },
  {
    rank: 34,
    name: 'Hedera',
    symbol: 'HBAR',
    type: 'Enterprise Ledger',
    useCaseEn: 'Governed by global monopolies, hashgraph offers rapid processing speeds safely.',
    useCaseBn: 'শীর্ষ কর্পোরেট জায়ান্টদের দ্বারা নিয়ন্ত্রিত হ্যাশগ্রাফ টেকনোলজি যা নিরাপদ ও অতি-দ্রুত ট্রানজেকশন প্রসেসিং গতি দেয়।'
  },
  {
    rank: 35,
    name: 'The Graph',
    symbol: 'GRT',
    type: 'Index Protocol',
    useCaseEn: 'Indexing APIs for querying blockchain data records cleanly across open networks.',
    useCaseBn: 'উন্মুক্ত নেটওয়ার্ক লুপগুলিতে ব্লকচেইনের ডেটা রেকর্ড সহজে খোঁজার জন্য ব্যবহৃত ইনডেক্সিং এপিআই।'
  },
  {
    rank: 36,
    name: 'Sui',
    symbol: 'SUI',
    type: 'Layer 1 / Object-Oriented',
    useCaseEn: 'Maintains extreme parallel execution speeds using Move VM object processing pipelines.',
    useCaseBn: 'মুভ ভিএম (Move VM) অবজেক্ট প্রসেসিং পাইপলাইনের মাধ্যমে অত্যন্ত দ্রুত প্যারালাল ট্রানজেকশন প্রসেস সম্পন্ন করে।'
  },
  {
    rank: 37,
    name: 'Aptos',
    symbol: 'APT',
    type: 'Layer 1 / Move Script',
    useCaseEn: 'High throughput network focusing on extreme state safety and decentralized performance scales.',
    useCaseBn: 'উচ্চ স্টেট সুরক্ষা এবং অপ্টিমাইজড বিকেন্দ্রীকৃত পারফরম্যান্স স্কেলের দিকে মনোনিবেশকারী উচ্চ থ্রুটপুট নেটওয়ার্ক।'
  },
  {
    rank: 38,
    name: 'Jupiter',
    symbol: 'JUP',
    type: 'Solana Utilities',
    useCaseEn: 'Consolidates all Solana liquidity streams to offer traders the absolute best exchange prices.',
    useCaseBn: 'ট্রেডারদের সেরা এক্সচেঞ্জ রেট দেওয়ার জন্য সোলানার সমস্ত তারল্য প্রবাহ এক জায়গায় একত্রিত করে।'
  },
  {
    rank: 39,
    name: 'Render',
    symbol: 'RNDR',
    type: 'GPU Compute Network',
    useCaseEn: 'Decentralized graphics rendering power marketplace supporting high demand virtual jobs.',
    useCaseBn: 'উচ্চ চাহিদাসম্পন্ন ভার্চুয়াল কাজ ও রেন্ডারিং মেটাতে বিকেন্দ্রীকৃত গ্রাফিক্স রেন্ডার পাওয়ার মার্কেটপ্লেস।'
  },
  {
    rank: 40,
    name: 'Fantom',
    symbol: 'FTM',
    type: 'Layer 1 / Lachesis',
    useCaseEn: 'Directed Acyclic Graph structures offering speedy sub-second smart contract executions.',
    useCaseBn: 'ডাইরেক্টেড অ্যাসাইক্লিক গ্রাফ (DAG) আর্কিটেকচার যা অতি দ্রুত স্মার্ট কন্ট্রাক্ট এক্সিকিউশন গতি নিশ্চিত করে।'
  }
];

export const ROW_1_TOPICS: Topic[] = [
  {
    id: 'intro-crypto',
    titleEn: 'Decrypting the Core: Origin & Cryptography Basics',
    titleBn: 'কোর ডিক্রিপ্ট করা: উৎপত্তি এবং ক্রিপ্টোগ্রাফি বেসিকস',
    shortDescriptionEn: 'Explore how cryptographic secure algorithms replaced trusted banks with trustless peer-to-peer systems.',
    shortDescriptionBn: 'অনুসন্ধান করুন কীভাবে ক্রিপ্টোগ্রাফিক সুরক্ষিত অ্যালগরিদমগুলো পিয়ার-টু-পিয়ার সিস্টেমের মাধ্যমে বিশ্বস্ত ব্যাংকগুলোর বিকল্প হয়ে উঠছে।',
    category: 'Foundations',
    iconName: 'Database',
    paragraphs: [
      {
        en: 'In 2008, an anonymous developer or group writing under the pseudonym Satoshi Nakamoto published the Bitcoin Whitepaper: "A Peer-to-Peer Electronic Cash System". In early 2009, the genesis block was mined, introducing the world’s first decentralized digital currency. This revolutionized modern finance by resolving the "double-spending problem" without needing a middleman or central clearinghouse.',
        bn: '২০০৮ সালে, সাতোশি নাকামোতো ছদ্মনামে একজন বেনামী ডেভেলপার বা গ্রুপ বিটকয়েনের হোয়াইটপেপার প্রকাশ করেছিলেন: "এ পিয়ার-টু-পিয়ার ইলেকট্রনিক ক্যাশ সিস্টেম"। ২০০৯ সালের শুরুতে প্রথম জেনেসিস ব্লকটি মাইন করা হয়, যা বিশ্বের প্রথম বিকেন্দ্রীকৃত ডিজিটাল মুদ্রার প্রবর্তন করে। এটি কোনো মধ্যস্থতাকারী বা কেন্দ্রীয় ক্লিয়ারিংহাউসের প্রয়োজন ছাড়াই "ডাবল-স্পেন্ডিং সমস্যা" সমাধান করে আধুনিক অর্থব্যবস্থায় বিপ্লব ঘটায়।'
      },
      {
        en: 'Cryptocurrency relies on asymmetric cryptography (public and private key pairs) to secure transactions. Every user has a public address (where anyone can send funds) and a secret private key (which validates and signs outward transactions). If a user loses their private key, their funds are locked forever, as no central database reset exists.',
        bn: 'লেনদেনের সুরক্ষার জন্য ক্রিপ্টোকারেন্সি অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি (পাবলিক এবং প্রাইভেট কী জোড়া) এর ওপর নির্ভর করে। প্রত্যেক ব্যবহারকারীর একটি পাবলিক ঠিকানা থাকে (যেখানে যে কেউ ফান্ড পাঠাতে পারে) এবং একটি গোপন প্রাইভেট কী থাকে (যা আউটওয়ার্ড লেনদেন যাচাই এবং স্বাক্ষর করে)। কোনো ব্যবহারকারী যদি তার প্রাইভেট কী হারিয়ে ফেলে, তবে তার ফান্ড চিরকালের জন্য লক হয়ে যায়, কারণ এখানে কোনো কেন্দ্রীয় ডেটাবেস বা রিসেটের সুযোগ নেই।'
      },
      {
        en: 'Transactions are grouped into "blocks" and securely chained together in chronological order, forming a "blockchain". This ledger is run and verified by thousands of nodes globally, making it mathematically impossible for a single system to malicious rewrite history. The balance of power is distributed democratically, empowering individuals over centralized financial gatekeepers.',
        bn: 'লেনদেনগুলোকে "ব্লক" আকারে গ্রুপ করা হয় এবং কালানুক্রমিক ক্রমে একসঙ্গে যুক্ত করা হয়, যা তৈরি করে একটি "ব্লকচেইন"। এই লেজারটি বিশ্বব্যাপী হাজার হাজার নোড দ্বারা চালিত এবং যাচাইকৃত হয়, যার ফলে কোনো একক সিস্টেমের পক্ষে ইতিহাস পরিবর্তন করা গাণিতিকভাবে অসম্ভব। ক্ষমতার ভারসাম্য এখানে গণতান্ত্রিকভাবে বন্টিত, যা কেন্দ্রীয় আর্থিক নিয়ন্ত্রকদের তুলনায় সাধারণ ব্যক্তিবর্গকে বেশি ক্ষমতায়িত করে।'
      }
    ]
  },
  {
    id: 'popular-tokens',
    titleEn: 'Top 40 Coins & Tokens: Global Ecosystem Directory',
    titleBn: 'সেরা ৪০টি কয়েন এবং টোকেন: বৈশ্বিক ইকোসিস্টেম ডিরেক্টরি',
    shortDescriptionEn: 'A structured overview of the top 35-40 tokens powering smart contracts, stablecoins, and Web3 apps.',
    shortDescriptionBn: 'স্মার্ট কন্ট্রাক্ট, স্টেবলকয়েন এবং ওয়েব৩ অ্যাপস পরিচালনাকারী শীর্ষ ৩৫-৪০টি টোকেনের একটি কাঠামোগত ওভারভিউ।',
    category: 'Market Guide',
    iconName: 'Trophy',
    interactiveType: 'tokens',
    paragraphs: [
      {
        en: 'The modern digital economy contains thousands of diverse crypto assets, varying from basic payment options to highly specialized decentralized utilities. Bitcoin remains the absolute benchmark of security and value storage, while Ethereum acts as a global smart agreement mainframe allowing computer programs to live directly on-chain.',
        bn: 'আধুনিক ডিজিটাল অর্থনীতিতে হাজার হাজার বৈচিত্র্যময় ক্রিপ্টো সম্পদ রয়েছে, যা মৌলিক অর্থপ্রদান থেকে শুরু করে অত্যন্ত বিশেষায়িত বিকেন্দ্রীকৃত সেবা প্রদান করে। বিটকয়েন নিরাপত্তা এবং মূল্য সংরক্ষণের পরম মানদণ্ড হিসেবে রয়েছে, যেখানে ইথেরিয়াম একটি বৈশ্বিক স্মার্ট চুক্তি মেইনফ্রেম হিসেবে কাজ করে এবং কম্পিউটার প্রোগ্রামগুলোকে সরাসরি অন-চেইনে চলার অনুমতি দেয়।'
      },
      {
        en: 'Beyond these, stablecoins like USDT and USDC provide non-volatile bridges back to traditional currencies, absorbing major daily trading volume. Meanwhile, alternative Layer 1 chains like Solana and Sui optimized performance for sub-penny transaction costs to compete with traditional credit processors.',
        bn: 'এসবের বাইরে, ইউএসডিটি এবং ইউএসডিসি-এর মতো স্টেবলকয়েনগুলো প্রথাগত মুদ্রার সাথে একটি অস্থিতিশীলতাহীন সেতু তৈরি করে বিপুল পরিমাণ দৈনন্দিন লেনদেনকে ধারণ করছে। অন্যদিকে, সোলানা এবং সুই-এর মতো বিকল্প লেয়ার ১ চেইনগুলো ভিসা বা মাস্টারকার্ডের মতো প্রথাগত কার্ড প্রসেসরের সাথে প্রতিদ্বন্দ্বিতা করতে এক সেন্টেরও কম লেনদেন খরচে কাজ করে।'
      },
      {
        en: 'Explore the dynamic interactive directory below containing the top 40 cryptocurrencies globally, outlining their specific technical classification, underlying use case, and operational utility in the global decentralized landscape.',
        bn: 'বিশ্বব্যাপী শীর্ষ ৪০টি ক্রিপ্টোকারেন্সি নিয়ে তৈরি নিচের ইন্টারেক্টিভ ডিরেক্টরিটি অন্বেষণ করুন, যা তাদের নির্দিষ্ট প্রযুক্তিগত শ্রেণিবিভাগ, অন্তর্নিহিত ব্যবহারের ক্ষেত্র এবং বৈশ্বিক বিকেন্দ্রীকৃত ল্যান্ডস্কেপে তাদের কার্যকারিতা প্রদর্শন করে।'
      }
    ]
  },
  {
    id: 'crypto-profit-roi',
    titleEn: 'Why People Use Crypto & The Financial Mathematics of Growth',
    titleBn: 'মানুষ কেন ক্রিপ্টো ব্যবহার করে এবং প্রবৃদ্ধির আর্থিক গণিত',
    shortDescriptionEn: 'Unpack real incentives, passive yields, and an interactive calculator representing CAGR yields with compound returns.',
    shortDescriptionBn: 'প্রকৃত প্রণোদনা, নিষ্ক্রিয় আয়ের উৎস এবং সরল চক্রবৃদ্ধি সুদের পার্থক্যের একটি গাণিতিক সিমুলেটর ক্যালকুলেটর।',
    category: 'Finance',
    iconName: 'TrendingUp',
    interactiveType: 'calculator',
    paragraphs: [
      {
        en: 'People use cryptocurrency for many reasons: permissionless wealth ownership, censorship-resistant transfers, high liquidity, and potential hedge against local currency inflation. In emerging economies, it offers instant integration into global capital markets for anyone with a smartphone.',
        bn: 'মানুষ প্রধানত কয়েকটি কারণে ক্রিপ্টোকারেন্সি ব্যবহার করে: অনুমতিহীন সম্পদের মালিকানা, সেন্সরশিপ-প্রতিরোধী তহবিল স্থানান্তর, উচ্চ তারল্য এবং স্থানীয় মুদ্রার অবমূল্যায়নের বিরুদ্ধে সম্ভাব্য সুরক্ষা। উদীয়মান অর্থনীতিতে এটি যেকোনো স্মার্টফোন ব্যবহারকারীকে তাত্ক্ষণিকভাবে বিশ্বব্যাপী পুঁজি বাজারের সাথে যুক্ত করার সুযোগ দেয়।'
      },
      {
        en: 'The potential returns of digital assets can outperform traditional banks, but carry significantly higher risk. Active participants leverage decentralized finance (DeFi) platforms, staking, and liquidity pools to yield rewards from network validations.',
        bn: 'ডিজিটাল সম্পদের সম্ভাব্য রিটার্ন প্রথাগত ব্যাংকের তুলনায় বহুগুণ বেশি হতে পারে, কিন্তু এটি অত্যন্ত উচ্চ ঝুঁকি বহন করে। সচেতন ব্যবহারকারীরা বিকেন্দ্রীকৃত ফাইন্যান্স (DeFi) প্ল্যাটফর্ম, স্টেকিং এবং লিকুইডিটি পুলে অংশ নিয়ে ব্লকচেইন নেটওয়ার্ক ভ্যালিডেশনের মাধ্যমে নিষ্ক্রিয় আয়ের সুযোগ পান।'
      },
      {
        en: 'Below is a transparent mathematical example modeled to simulate compound annual growth. If you stake an asset with a steady yearly return, compound interest works exponentially. Let us test various investments and interest parameters in our simulator to study how capital scales over several intervals.',
        bn: 'নিচে চক্রবৃদ্ধি বার্ষিক বৃদ্ধির একটি স্পষ্ট গাণিতিক সিমুলেশন মডেল দেওয়া হলো। আপনি যদি একটি নির্দিষ্ট বার্ষিক রিটার্ন সহ একটি সম্পদ স্টেক করেন, তবে চক্রবৃদ্ধি মুনাফা এটি জ্যামিতিক হারে বাড়িয়ে দেয়। চলুন বিভিন্ন বিনিয়োগ এবং সুদের হার ইনপুট দিয়ে পরীক্ষা করি যে আমাদের মূলধন সময়ের সাথে সাথে কীভাবে বড় হতে পারে।'
      }
    ]
  },
  {
    id: 'transform-future',
    titleEn: 'Sovereignty of Asset: Transforming Personal Finance',
    titleBn: 'সম্পদের সার্বভৌমত্ব: ব্যক্তিগত ফাইন্যান্সের রূপান্তর',
    shortDescriptionEn: 'How decentralized digital custody changes our relationship with money and challenges modern banking bureaus.',
    shortDescriptionBn: 'কীভাবে বিকেন্দ্রীকৃত ডিজিটাল কাস্টডি অর্থের সাথে আমাদের সম্পর্ক বদলে দেয় এবং আধুনিক ব্যাংকিং ব্যবস্থাকে চ্যালেঞ্জ করে।',
    category: 'Wealth Tech',
    iconName: 'Sparkles',
    paragraphs: [
      {
        en: 'For centuries, personal wealth required custody by banks and state registries. If a financial institution collapses, or limits daily withdrawals, citizens face immediate capital stagnation. Cryptocurrencies transform personal finance by offering complete self-custody—acting as your own bank.',
        bn: 'শত শত বছর ধরে ব্যক্তিগত সম্পদ ব্যাংক এবং রাষ্ট্রীয় রেজিস্ট্রি দ্বারা নিয়ন্ত্রিত হয়ে আসছে। কোনো আর্থিক প্রতিষ্ঠান যদি ধসে পড়ে, বা দৈনন্দিন উত্তোলনের সীমা সীমিত করে দেয়, তবে সাধারণ মানুষ তাত্ক্ষণিক আর্থিক সংকটে পড়ে। ক্রিপ্টোকারেন্সি সম্পূর্ণ স্ব-কাস্টডি বা নিজের ওয়ালেটে চাবি রাখার সুবিধা দিয়ে আমাদের নিজস্ব ব্যাংক হিসেবে কাজ করার ক্ষমতা দেয়।'
      },
      {
        en: 'With a self-custody wallet, no permission is ever required to send, receive, or store assets. It allows frictionless international transfers that clear in minutes rather than days. It levels the playing field for the global unbanked, providing standard access to credit, insurance, and interest systems.',
        bn: 'একটি স্ব-কাস্টডি ওয়ালেটের মাধ্যমে তহবিল পাঠাতে, গ্রহণ করতে বা সংরক্ষণ করতে কোনো অনুমতির প্রয়োজন হয় না। এটি নিমিষেই আন্তর্জাতিক সীমানা পেরিয়ে কয়েক মিনিটের মধ্যে তহবিল পরিষ্কারের সুবিধা দেয়। এটি বিশ্বব্যাপী ব্যাংকহীন জনগোষ্ঠীকে ঋণ, বীমা এবং সুদের সিস্টেমে সমানাধিকার ও সমান সুযোগ প্রদান করে।'
      },
      {
        en: 'This shift towards self-sovereignty demands a parallel evolution of personal security. Because there are no support helplines to reverse bad choices, individual financial agency requires disciplined education, secure backup habits, and awareness of systemic scams.',
        bn: 'স্ব-সার্বভৌমত্বের এই পরিবর্তনটি আমাদের ব্যক্তিগত সুরক্ষার ক্ষেত্রে আরও সচেতন হওয়ার দাবি রাখে। যেহেতু এখানে ভুল সিদ্ধান্তগুলি সংশোধন করার জন্য কোনো হেল্পলাইন বা ব্যাকআপ টিম নেই, তাই নিজের আর্থিক স্বাধীনতা অক্ষুণ্ণ রাখতে সুশৃঙ্খল শিক্ষা, সুরক্ষিত ব্যাকআপ অভ্যাস এবং পদ্ধতিগত স্ক্যাম সম্পর্কে সতর্কতা অত্যন্ত জরুরি।'
      }
    ]
  }
];

export const ROW_2_TOPICS: Topic[] = [
  {
    id: 'bd-legality',
    titleEn: 'The Legal Landscape: Bangladesh vs. Decentralized Assets',
    titleBn: 'আইনি প্রেক্ষাপট: বাংলাদেশ বনাম বিকেন্দ্রীকৃত সম্পদ',
    shortDescriptionEn: 'Understanding why cryptocurrency is restricted in Bangladesh, the legacy central bank notices, and the current legal status.',
    shortDescriptionBn: 'বাংলাদেশে ক্রিপ্টোকারেন্সি কেন নিষিদ্ধ বা সীমাবদ্ধ রয়েছে, কেন্দ্রীয় ব্যাংকের নোটিশ এবং বর্তমান আইনি অবস্থা বোঝা।',
    category: 'Legislation',
    iconName: 'ShieldAlert',
    paragraphs: [
      {
        en: 'Currently, Bangladesh Bank (the country’s central bank) holds a highly restricted stance toward virtual assets. Multiple official warnings advise citizens that digital currencies are not legal tender, and using them violates foreign exchange rules. The official posture is anchored on concerns regarding illegal capital flight, laundering risks, and absence of regulatory oversight.',
        bn: 'বর্তমানে, বাংলাদেশ ব্যাংক (দেশের কেন্দ্রীয় ব্যাংক) ভার্চুয়াল সম্পদের প্রতি অত্যন্ত সীমাবদ্ধ অবস্থান বজায় রেখেছে। একাধিক সরকারি সতর্কবার্তায় নাগরিকদের জানানো হয়েছে যে ডিজিটাল মুদ্রা কোনো আইনি দরপত্র নয় এবং এগুলো ব্যবহার করলে বৈদেশিক মুদ্রা নিয়ন্ত্রণ আইন লঙ্ঘন হয়। এই অবস্থানের মূল কারণ অবৈধ অর্থ পাচার, মূলধন চলে যাওয়ার ঝুঁকি এবং নিয়ন্ত্রক তদারকির অনুপস্থিতি।'
      },
      {
        en: 'Under the Foreign Exchange Regulation Act (FERA) of 1947 and the Prevention of Money Laundering Act of 2012, speculative asset activities are considered highly volatile. Because transactions cannot be indexed nor reversed, domestic banks are completely prohibited from facilitating crypto-related deposits, settlements, or exchange portals.',
        bn: '১৯৪৭ সালের ফরেন এক্সচেঞ্জ রেগুলেশন অ্যাক্ট (FERA) এবং ২০১২ সালের মানি লন্ডারিং প্রতিরোধ আইনের অধীনে অনুমাননির্ভর সম্পদ কার্যক্রমগুলি অত্যন্ত ঝুঁকিপূর্ণ বলে গণ্য হয়। যেহেতু ক্রিপ্টোকারেন্সির লেনদেন ব্লকচেইনে হয় এবং এগুলো সহজে সনাক্ত বা ফেরত আনা যায় না, তাই দেশীয় ব্যাংকগুলোর জন্য ক্রিপ্টো-সম্পর্কিত আমানত, নিষ্পত্তি বা এক্সচেঞ্জ গেটওয়ে সরবরাহ করা সম্পূর্ণ নিষিদ্ধ।'
      },
      {
        en: 'This systemic barrier creates a dangerous policy gap. While thousands of tech-savvy youths are highly passionate about Web3 innovations, the lack of legal recognition forces activities underground. This limits tax revenues for the state, while simultaneously amplifying risks for ordinary digital entrepreneurs.',
        bn: 'এই পদ্ধতিগত বাধা একটি বিপজ্জনক পলিসি গ্যাপ বা নীতিগত শূন্যতা সৃষ্টি করে। দেশের হাজার হাজার প্রযুক্তি-সচেতন তরুণ যখন ওয়েব৩ উদ্ভাবনে ভীষণ আগ্রহী, তখন আইনি স্বীকৃতির অভাব এই কার্যক্রমগুলোকে অনানুষ্ঠানিক বা আন্ডারগ্রাউন্ডে পাঠিয়ে দিচ্ছে। এটি একদিকে যেমন রাষ্ট্রের কর রাজস্ব সীমিত করছে, অন্যদিকে সাধারণ ডিজিটাল উদ্যোক্তাদের ঝুঁকি বহুলাংশে বাড়িয়ে দিচ্ছে।'
      }
    ]
  },
  {
    id: 'scams-uncovered',
    titleEn: 'The anatomy of MLM Schemes & Crypto Fraud in Bangladesh',
    titleBn: 'বাংলাদেশে এমএলএম স্কিম এবং ক্রিপ্টো জালিয়াতির বিশ্লেষণ',
    shortDescriptionEn: 'How unscrupulous actors weaponize crypto jargon to launch fake investment circles targeting unaware citizens.',
    shortDescriptionBn: 'কীভাবে অসাধু চক্র ক্রিপ্টোর কঠিন পরিভাষা ব্যবহার করে সাধারণ মানুষদের লক্ষ্য করে ভুয়া বিনিয়োগ স্কিম বা ফাঁদ শুরু করে।',
    category: 'Consumer Warning',
    iconName: 'EyeOff',
    paragraphs: [
      {
        en: 'As interest in digital wealth spikes in Bangladesh, thousands of citizens have fallen victim to fraudulent schemes masquerading as "lucrative crypto programs". The overwhelming majority of these frauds do not involve actual blockchain projects. Instead, they are classic Ponzi or Multi-Level Marketing (MLM) schemes disguised with modern blockchain terminology.',
        bn: 'বাংলাদেশে যখনই ক্রিপ্টোকারেন্সির মাধ্যমে রাতারাতি বড়লোক হওয়ার আগ্রহ জাগে, তখনই শত শত নাগরিক "লাভজনক ক্রিপ্টো প্রোগ্রাম" এর ছদ্মবেশে থাকা প্রতারকদের ফাঁদে পড়ে। এই সমস্ত প্রতারণার সিংহভাগই কোনো প্রকৃত ব্লকচেইন প্রযুক্তির সাথে যুক্ত নয়। এগুলো হলো ক্লাসিক পঞ্জি স্কিম বা মাল্টি-লেভেল মার্কেটিং (MLM) যা আধুনিক ব্লকচেইন পরিভাষার আড়ালে পরিচালিত হয়।'
      },
      {
        en: 'Scammers aggressively target people by promising fixed daily or monthly returns (e.g., "Invest 10,000 BDT and get 1,000 BDT daily"). They often require recruits to bring in more participants to earn bonuses. Once the flow of fresh capital dries up, the website or app abruptly goes dark, leaving investors with nothing.',
        bn: 'প্রতারকেরা মানুষকে নির্দিষ্ট দৈনিক বা মাসিক রিটার্নের লোভ দেখিয়ে লক্ষ্যবস্তু বানায় (যেমন, "১০,০০০ টাকা বিনিয়োগ করলে প্রতিদিন ১,০০০ টাকা পাবেন")। তারা প্রায়ই রেফারেল বোনাস পাওয়ার জন্য আপনার মাধ্যমে আরও নতুন সদস্য যোগ করার শর্ত দেয়। নতুন মানুষের টাকার প্রবাহ যখনই কমে যায়, তখনই অ্যাপ বা ওয়েবসাইটটি বন্ধ করে পালিয়ে যায় প্রতারক চক্র।'
      },
      {
        en: 'The core weapon of these scammers is the general lack of public education. By weaponizing complex buzzwords like "smart contracts", "mining rings", or "decentralized arbitrage", they create a veneer of legitimacy that deceives people seeking to improve their financial future.',
        bn: 'এই স্ক্যামারদের সবচেয়ে বড় অস্ত্র হলো সাধারণ মানুষের ভেতর ব্লকচেইনের মৌলিক জ্ঞানের অভাব। তারা "স্মার্ট কন্ট্রাক্ট", "ক্লাউড মাইনিং", বা "ডেসেন্ট্রালাইজড আর্বিট্রেজ" এর মতো জটিল শব্দগুলো ব্যবহার করে একটি ভুয়া আভিজাত্য বা বৈধতার চিত্র ফুটিয়ে তোলে, যা আর্থিক সচ্ছলতা খুঁজতে থাকা সরল মানুষকে সহজেই বিভ্রান্ত করে।'
      }
    ]
  },
  {
    id: 'anti-scam-roadmap',
    titleEn: 'Defensive Strategy: Combatting and Preventing Crypto Fraud',
    titleBn: 'প্রতিরক্ষামূলক কৌশল: ক্রিপ্টো জালিয়াতি মোকাবেলা এবং প্রতিরোধ',
    shortDescriptionEn: 'Comprehensive defense solutions, verification methods, and public warning flags to stop fraudulent schemes.',
    shortDescriptionBn: 'প্রতারণামূলক স্কিম বন্ধ করার জন্য সামগ্রিক প্রতিরক্ষা সমাধান, ভেরিফিকেশনের নিয়ম এবং সতর্ক সংকেতসমূহ।',
    category: 'Consumer Warning',
    iconName: 'ShieldCheck',
    interactiveType: 'checklist',
    paragraphs: [
      {
        en: 'Preventing public exploitation requires a shift from passive bans to active education. The first golden rule of digital assets is simple: any system promising guaranteed returns is a certified scam. True decentralized assets like Bitcoin do not have owners that can promise fixed yields, as prices are dictated purely by worldwide market demand.',
        bn: 'মানুষের প্রতারিত হওয়া বন্ধ করার জন্য শুধুমাত্র আইনি নিষেধাজ্ঞা যথেষ্ট নয়, সক্রিয় জনশিক্ষার প্রয়োজন। ডিজিটাল সম্পদের প্রথম সুবর্ণ নিয়ম খুব সাধারণ ও কঠিন: যেকোনো সিস্টেম যা আপনাকে গ্যারান্টিযুক্ত আয়ের প্রতিশ্রুতি দেয়, তা শতভাগ একটি প্রতারণা বা স্ক্যাম। বিটকয়েনের মতো কোনো বিকেন্দ্রীকৃত সম্পদের কোনো একক মালিক নেই যে আপনাকে নির্দিষ্ট মুনাফা দেবে, এর দাম সম্পূর্ণ বৈশ্বিক চাহিদার ওপর নির্ধারিত।'
      },
      {
        en: 'Before interacting with any crypto-related service, users must verify if the platform has an actual, publicly verifiable smart contract or open source code. If the project requires installing obscure side-loaded mobile application files (.apk) or requires referrals to unlock earnings, it is highly likely a classic pyramid trap.',
        bn: 'যেকোনো ক্রিপ্টো-সম্পর্কিত সার্ভিসে অংশ নেওয়ার আগে ব্যবহারকারীদের যাচাই করা উচিত যে সেই প্ল্যাটফর্মটির কোনো বাস্তব ও সর্বজনীনভাবে যাচাইযোগ্য স্মার্ট চুক্তি বা ওপেন সোর্স কোড আছে কিনা। যদি কোনো প্রজেক্ট প্লে স্টোর বা অ্যাপ স্টোরে না থেকে অপরিচিত ওয়েবসাইট থেকে ক্ষতিকর .apk ফাইল ডাউনলোড করতে বাধ্য করে, তবে সেটি নিশ্চিতভাবে একটি পিরামিড ট্র্যাপ।'
      },
      {
        en: 'Below is our interactive "Public Protection Audit Checklist". We encourage all users to run projects through this checklist. Checking multiple "Warning Flags" means you should immediately halt interaction to save your hard-earned funds.',
        bn: 'নিচে আমাদের তৈরি করা ইন্টারেক্টিভ "পাবলিক প্রটেকশন অডিট চেকলিস্ট" দেওয়া হলো। আমরা প্রত্যেককে নতুন যেকোনো প্ল্যাটফর্মকে এই প্রশ্নগুলোর মুখোমুখি করতে উৎসাহিত করি। যদি একাধিক সতর্ক সংকেত সত্য হয়, তবে আপনার কষ্টার্জিত অর্থ বাঁচাতে দ্রুত সেই প্ল্যাটফর্ম ত্যাগ করুন।'
      }
    ]
  }
];

export const ROW_3_TOPICS: Topic[] = [
  {
    id: 'bd-future-legal',
    titleEn: 'Path of Progression: Will Bangladesh Legalize Cryptocurrencies?',
    titleBn: 'অগ্রগতির পথ: বাংলাদেশ কি কখনো ক্রিপ্টোকারেন্সি বৈধ করবে?',
    shortDescriptionEn: 'Inside potential timelines, economic pressures, and international factors that could trigger regulatory shifts.',
    shortDescriptionBn: 'সম্ভাব্য সময়সীমা, অর্থনৈতিক চাপ এবং আন্তর্জাতিক কারণসমূহ যা আইনি পরিবর্তনের সূচনা করতে পারে।',
    category: 'Future Outlook',
    iconName: 'Compass',
    paragraphs: [
      {
        en: 'Many policymakers and economic analysts ask: Will Bangladesh eventually acknowledge and regulate cryptocurrency? The answer lies in the growing pressure of the modern global digital economy. Over $100 billion of software outsourcing, remittances, and international startup funding flow in global channels that increasingly rely on digital assets.',
        bn: 'অনেক নীতিনির্ধারক ও অর্থনৈতিক বিশ্লেষক জানতে চান: বাংলাদেশ কি শেষ পর্যন্ত ক্রিপ্টোকারেন্সি স্বীকার ও নিয়ন্ত্রণ করবে? উত্তরটি লুকিয়ে রয়েছে আধুনিক বৈশ্বিক ডিজিটাল অর্থনীতির ক্রমবর্ধমান চাপের মধ্যে। সফটওয়্যার আউটসোর্সিং, রেমিট্যান্স এবং আন্তর্জাতিক স্টার্টআপ ফান্ডিং এর প্রবাহ ক্রমবর্ধমান হারে ডিজিটাল অ্যাসেটের ওপর নির্ভর করছে।'
      },
      {
        en: 'As countries in South Asia like India establish formal taxation structures, and international bodies like the IMF push for uniform digital asset frameworks, Bangladesh’s blanket-restrictive policy is becoming increasingly difficult to enforce. Many local experts argue that acknowledging the technology is the only viable path to safely tracking capital.',
        bn: 'যেহেতু দক্ষিণ এশিয়ার প্রতিবেশী দেশ ভারত ইতোমধ্যেই আনুষ্ঠানিক কর কাঠামো স্থাপন করেছে এবং আইএমএফ-এর মতো আন্তর্জাতিক সংস্থাগুলো একটি অভিন্ন ডিজিটাল সম্পদ নিয়ন্ত্রণের তাগিদ দিচ্ছে, তাই বাংলাদেশের এই কঠোর নিষেধাজ্ঞা দীর্ঘমেয়াদে বজায় রাখা অসম্ভব হয়ে উঠছে। রূপান্তরকে চিহ্নিত করাই হলো পুঁজি পাচার কমানোর একমাত্র কার্যকর পথ।'
      },
      {
        en: 'A gradual transition is expected. The government’s Smart Bangladesh 2041 roadmap highlights blockchain as a pivotal frontier. It is highly likely the central bank will first experiment with Web3 technologies in controlled regulatory sandboxes or evaluate a Central Bank Digital Currency (CBDC) before allowing general retail trading.',
        bn: 'একটি ধাপে ধাপে পরিবর্তনের প্রত্যাশা করা হচ্ছে। সরকারের "স্মার্ট বাংলাদেশ ২০৪১" লক্ষ্যমাত্রায় ব্লচেইন প্রযুক্তিকে একটি গুরুত্বপূর্ণ কৌশলগত হাতিয়ার হিসেবে উল্লেখ করা হয়েছে। খুব সম্ভবত, কেন্দ্রীয় ব্যাংক প্রথমে একটি নিরাপদ স্যান্ডবক্সে ল্যাব পরীক্ষা চালাবে কিংবা নিজস্ব কেন্দ্রীয় ব্যাংক ডিজিটাল মুদ্রা (CBDC) মূল্যায়ন করবে।'
      }
    ]
  },
  {
    id: 'legalisation-framework',
    titleEn: 'The Blueprint: A Safe Regulatory Roadmap for Bangladesh',
    titleBn: 'ব্লুপ্রিন্ট: বাংলাদেশের জন্য একটি নিরাপদ নিয়ন্ত্রক রোডম্যাপ',
    shortDescriptionEn: 'How custom local rules can protect national interests, collect tax revenues, and prevent capital flight.',
    shortDescriptionBn: 'কীভাবে বিশেষ স্থানীয় নিয়মসমূহ জাতীয় স্বার্থ রক্ষা করতে পারে, কর আদায় করতে পারে এবং মূলধন পাচার রোধ করতে পারে।',
    category: 'Future Outlook',
    iconName: 'Cpu',
    paragraphs: [
      {
        en: 'For Bangladesh to safely legalize cryptocurrency, a robust legislative framework is necessary. A strict blanket ban only results in unregulated peer-to-peer (P2P) trading that operates completely invisible to central regulators, leaving users highly vulnerable and starving the state of tax revenue.',
        bn: 'বাংলাদেশে ক্রিপ্টোকারেন্সিকে নিরাপদ উপায়ে বৈধ করতে হলে একটি শক্তিশালী আইনি কাঠামো প্রয়োজন। একটি কঠোর বা ঢালাও নিষেধাজ্ঞা কেবল অনিয়ন্ত্রিত পিয়ার-টু-পিয়ার (P2P) লেনদেনকে উৎসাহিত করে, যা কেন্দ্রীয় ব্যাংকের চোখের অন্তরালে কাজ করে। এর ফলে ব্যবহারকারীরাও অরক্ষিত থাকে এবং রাষ্ট্রও কর রাজস্ব ও ট্যাক্স থেকে বঞ্চিত হয়।'
      },
      {
        en: 'A balanced roadmap begins with designating licensed Virtual Asset Service Providers (VASPs). Exchanges operating under local regulatory licenses must mandate complete "Know Your Customer" (KYC) and Anti-Money Laundering (AML) monitoring, linking transactions securely to official National Identity (NID) databases.',
        bn: 'একটি ভারসাম্যপূর্ণ রোডম্যাপের শুরু হতে পারে লাইসেন্সপ্রাপ্ত ভার্চুয়াল অ্যাসেট সার্ভিস প্রোভাইডার (VASP) নির্ধারণের মাধ্যমে। স্থানীয় লাইসেন্সের অধীনে পরিচালিত সব এক্সচেঞ্জকে অবশ্যই বাধ্যতামূলক নো ইউর কাস্টমার (KYC) এবং মানি লন্ডারিং প্রতিরোধ (AML) নীতিমালা মেনে চলতে হবে, যা সরাসরি জাতীয় পরিচয়পত্র (NID) ডেটাবেসের সাথে সংযুক্ত থাকবে।'
      },
      {
        en: 'Furthermore, the government can introduce flat taxes on digital returns, transforming a grey market into an official fiscal contributor. This clear environment will allow local software developers to attract foreign venture funding, building domestic platforms rather than migrating their skills overseas.',
        bn: 'তাছাড়া, সরকার ক্রিপ্টো আয়ের ওপর কর ধার্য করতে পারে, যা অনানুষ্ঠানিক ধূসর বাজারকে রাষ্ট্রের অর্থনীতিতে রূপান্তর করবে। এই ধরণের স্বচ্ছ ও আইনি পরিবেশ আমাদের প্রতিভাবান সফটওয়্যার ডেভেলপারদের দেশেই রেখে বড় বড় ব্লকচেইন কোম্পানি গড়ে তুলতে এবং আন্তর্জাতিক ভেঞ্চার ক্যাপিটাল আকর্ষণ করতে ব্যাপক সাহায্য করবে।'
      }
    ]
  }
];

export const ROW_4_TOPICS: Topic[] = [
  {
    id: 'transaction-manual',
    titleEn: 'Interactive Transaction Manual: Executing Clean Exchanges',
    titleBn: 'ইন্টারেক্টিভ লেনদেন ম্যানুয়াল: পরিচ্ছন্ন ট্রেড করা',
    shortDescriptionEn: 'Step-by-step masterclass on how proper digital currency buying, selling, and transfers operate.',
    shortDescriptionBn: 'ডিজিটাল মুদ্রা কীভাবে নিরাপদে কেনা, বেচা এবং এক অ্যাড্রেস থেকে অন্য অ্যাড্রেসে স্থানান্তর করতে হয় তার সহজ নির্দেশিকা।',
    category: 'Practical Guide',
    iconName: 'Repeat',
    paragraphs: [
      {
        en: 'Executing a physical or digital asset transfer on local or international networks requires procedural discipline. It is fundamentally different from digital mobile banking (MFS) because any final blockchain transaction is completely permanent. Errant transactions cannot be reversed.',
        bn: 'স্থানীয় বা আন্তর্জাতিকভাবে ডিজিটাল সম্পদ স্থানান্তর করার নিয়ম অত্যন্ত সুশৃঙ্খল। এটি মোবাইল ফিন্যান্সিয়াল সার্ভিস (যেমন বিকাশ/নগদ) এর চেয়ে সম্পূর্ণ ভিন্ন, কারণ ব্লকচেইনে একবার লেনদেন সফল হলে তা স্থায়ী ও অপরিবর্তনীয়। ভুল ঠিকানায় পাঠানো ফান্ড কোনোভাবেই ফেরত পাওয়া সম্ভব নয়।'
      },
      {
        en: 'When executing a transaction, always ensure you are utilizing the exact network path. For example, sending ERC-20 compliant USDT to a Tron network address (TRC-20) will lead to immediate, irreversible loss of your capital.',
        bn: 'লেনদেন করার সময় সর্বদা নিশ্চিত করুন যে আপনি সঠিক নেটওয়ার্ক বা চেইন ব্যবহার করছেন। উদাহরণস্বরূপ, ইথেরিয়ামের ERC-20 ভিত্তিক USDT টোকেন ট্রনের TRC-20 ওয়ালেট অ্যাড্রেসে পাঠালে আপনার ফান্ডটি চিরতরে হারিয়ে যাবে এবং তা আর কখনোই পুনরুদ্ধার করা যাবে না।'
      },
      {
        en: 'This module outlines the structural steps of trade execution: verifying network parameters, waiting for blocks to confirm, utilizing official secure escrow systems, and checking transaction IDs (TxID) on global ledgers to verify the arrival of funds.',
        bn: 'এই মডিউলে নিরাপদ লেনদেনের সব ধাপ আলোচনা করা হয়েছে: নেটওয়ার্কের ধরন মেলানো, ব্লক কনফার্মেশনের জন্য অপেক্ষা করা, এক্সচেঞ্জের অফিসিয়াল এসক্রো সিস্টেম ব্যবহার করা এবং ট্রানজেকশন আইডি (TxID) ব্যবহার করে ব্লকচেইনে প্রেরণের আসল তথ্যটি নিজেই মিলিয়ে নেওয়া।'
      }
    ]
  },
  {
    id: 'security-best-practices',
    titleEn: 'Vault Security: Private Keys & QR Code Defenses',
    titleBn: 'ভল্ট নিরাপত্তা: প্রাইভেট কী এবং কিউআর কোড প্রতিরক্ষা',
    shortDescriptionEn: 'Crucial steps to securing your non-custodial wallet and preventing unauthorized network access.',
    shortDescriptionBn: 'আপনার নন-কাস্টডিয়াল ওয়ালেট সুরক্ষিত রাখার এবং অননুমোদিত প্রবেশ রোখার অত্যন্ত জরুরি পদক্ষেপসমূহ।',
    category: 'Practical Guide',
    iconName: 'Lock',
    paragraphs: [
      {
        en: 'A non-custodial wallet is a gateway to full financial sovereignty, but it demands military-grade personal security habits. Your private key, which is usually represented as a 12-to-24 word seed phrase, is the ultimate key to your digital assets. Anyone who has this phrase owns your money.',
        bn: 'একটি নন-কাস্টডিয়াল ওয়ালেট হলো সম্পূর্ণ আর্থিক স্বাধীনতার প্রবেশদ্বার, তবে এর জন্য আপনার কঠোর সামরিক-গ্রেডের সুরক্ষার অভ্যাস প্রয়োজন। আপনার প্রাইভেট কী (যা সাধারণত ১২ থেকে ২৪ শব্দের একটি ব্যাকআপ পুনরুদ্ধার বাক্যাংশ) হলো আপনার সম্পদের শেষ চাবি। যার কাছে এই চাবি থাকবে, সম্পদের মালিক সেই।'
      },
      {
        en: 'A critical vulnerability in our local communities is "social engineering". Scammers impersonating customer support will often send links to malicious Google Forms, asking you to type in your seed phrase to "resolve transaction errors". An authentic wallet provider or decentralized protocol will NEVER ask for this.',
        bn: 'আমাদের স্থানীয় কমিউনিটিগুলোতে প্রতারকদের একটি বড় ফাঁদ হলো সামাজিক প্রকৌশল বা "সোশ্যাল ইঞ্জিনিয়ারিং"। টেলিগ্রাম বা অন্য অ্যাপে প্রজেক্ট এডমিন সেজে তারা বিভিন্ন ক্ষতিকর গুগল ফর্ম বা ভুয়া লিংকে আপনার ১২ শব্দের ফ্রেজটি ইনপুট দিতে বলে। মনে রাখবেন, অফিসিয়াল সাপোর্ট কখনোই কোনো অবস্থাতেই আপনার প্রাইভেট কী বা ফ্রেজ চাইবে না।'
      },
      {
        en: 'Never screenshot your secret recovery phrase, store it inside online cloud documents, or share personal QR codes to unfamiliar channels. Digital asset backup cards must be physical, written down on durable materials, and split across secure geographic locations.',
        bn: 'কখনোই আপনার গোপন রিকভারি ফ্রেজের স্ক্রিনশট নিবেন না, এটি গুগল ড্রাইভ বা সামাজিক চ্যাটে রাখবেন না এবং অপরিচিত কাউকে আপনার অ্যাপের চাবির কিউআর কোড দেখাতে বা স্ক্যান করতে দেবেন না। আপনার ওয়ালেটের ব্যাকআপটি কাগজে বা মেটালে লিখে একাধিক নিরাপদ ও গোপন শারীরিক স্থানে রেখে দিন।'
      }
    ]
  },
  {
    id: 'p2p-arbitrage-dangers',
    titleEn: 'The Traps of P2P Arbitrage: Protecting Your Bank Account',
    titleBn: 'পি২পি আর্বিট্রেজের ফাঁদ: আপনার ব্যাংক অ্যাকাউন্ট সুরক্ষিত রাখা',
    shortDescriptionEn: 'Essential steps to survive Peer-to-Peer trading and avoid falling victim to money laundering scams.',
    shortDescriptionBn: 'পিয়ার-টু-পিয়ার বা সরাসরি কেনাবেচার ক্ষেত্রে ব্যাংক অ্যাকাউন্ট ফ্রিজ হওয়া এড়ানোর রক্ষাকবচ ও ইন্টারেক্টিভ টুল।',
    category: 'Practical Guide',
    iconName: 'AlertTriangle',
    interactiveType: 'p2p-safety',
    paragraphs: [
      {
        en: 'Peer-to-Peer (P2P) trading is the most active method for cryptocurrency exchanges in developing countries. However, P2P carries major risks for bank accounts. Unaware sellers frequently fall victim to frozen accounts, as scammers use stolen cards or compromised mobile banking balances to transfer funds.',
        bn: 'উন্নয়নশীল দেশগুলোতে ক্রিপ্টো কেনার জন্য পিয়ার-টু-পিয়ার (P2P) লেনদেন ব্যবস্থা সবচেয়ে জনপ্রিয়। তবে অসচেতন পি২পি বিক্রেতাদের ব্যাংক অ্যাকাউন্ট প্রায়শই ফ্রিজ বা ব্লক হয়ে যায়। কারণ, ধুরন্ধর প্রতারকেরা অন্যের হ্যাক করা বা চুরি করা ব্যাংক অ্যাকাউন্ট ও বিকাশ অ্যাপ থেকে আপনাকে টাকা পাঠায়।'
      },
      {
        en: 'For example, a scammer hacks a victim’s bank account, then uses those stolen funds to purchase USDT from you on a P2P directory. Once the real victim reports the unauthorized transfer, the commercial bank blocks the entire payment flow. Consequently, your bank account is frozen indefinitely as part of police investigations.',
        bn: 'উদাহরণস্বরূপ, একজন স্ক্যামার কোনো সাধারণ মানুষের বিকাশ বা ব্যাংক হ্যাক করে সেই চুরি করা টাকা দিয়ে আপনার থেকে ডলার কিনে নেয়। এরপর প্রকৃত ভুক্তভোগী যখনই সাইবার থানায় অভিযোগ করে, তখনই পুলিশ ওই লেনদেন ট্র্যাক করে আপনার ব্যাংক বা মোবাইল অ্যাকাউন্টটিও স্থায়ীভাবে ব্লক করে দেয়।'
      },
      {
        en: 'To operate safely in P2P circles, you must strictly enforce identity matching. If the buyer’s registered profile name does not match the sender’s bank account name exactly, refuse the execution immediately. Use our interactive P2P Safety Tool below to audit incoming payment details before validating.',
        bn: 'পি২পিতে সম্পূর্ণ নিরাপদ থাকতে আপনাকে কঠোরভাবে অ্যাকাউন্টের নাম মেলানোর পদ্ধতি ব্যবহার করতে হবে। যে ব্যাংক বা বিকাশ থেকে টাকা এসেছে, তার নাম এবং রেজিস্টার্ড ট্রেডারের নাম হুবহু এক না হলে কখনো ডলার রিলিজ করবেন না। নিচে আমাদের তৈরি করা ইন্টারেক্টিভ পি২পি সেফটি গাইডলাইন অডিট টুলটি ব্যবহার করুন।'
      }
    ]
  },
  {
    id: 'passive-income-legit',
    titleEn: 'Earning Passive Wealth: Staking vs. Scams',
    titleBn: 'নিষ্ক্রিয় আয় উপার্জন: আসল বনাম ভুয়া স্টেকিং চেনা',
    shortDescriptionEn: 'Differentiating real automated blockchain yields from fraudulent schemes designed to steal your core funds.',
    shortDescriptionBn: 'আসল ব্লকচেইন অ্যালগরিদমিক জেনারেটেড মুনাফার সাথে সাধারণ ভুয়া ওয়েবসাইট ইনভেস্টমেন্ট পুলে টাকা দ্বিগুণ করার প্রতারণার পার্থক্য।',
    category: 'Practical Guide',
    iconName: 'Coins',
    paragraphs: [
      {
        en: 'Generating passive income with digital assets is highly popular. Legitimate protocols offer rewards via proof-of-stake systems. By locking your tokens in native validators (e.g., staking SOL or ETH), you actively earn newly minted network fees for your computational support.',
        bn: 'ডিজিটাল সম্পদ থেকে নিষ্ক্রিয় আয় করার ধারণাটি অত্যন্ত চমৎকার। তবে প্রকৃত বা বৈধ প্রোটোকলগুলো কাজ করে মূলত প্রুফ-অফ-স্টেক ব্লকচেইনের মাধ্যমে। যেখানে নিজস্ব ভ্যালিডেটরে টোকেন লক রেখে (যেমন সোলানা বা ইথেরিয়াম স্টেকিং করে) ট্রানজেকশন প্রসেসের নেটওয়ার্ক ফি থেকে একটি বৈধ নির্দিষ্ট রিটার্ন অর্জিত হয়।'
      },
      {
        en: 'Staking yields are variable and usually range from 3% to 8% annually. These real mechanisms do not require multi-level networking, nor do they require inviting referrals to scale. You retain custody of your capital within secure smart contracts or cold wallets.',
        bn: 'প্রকৃত চেইন স্টেকিং-এর বাৎসরিক ফলন সাধারণত শতকরা ৩% থেকে সর্বোচ্চ ৮% হয়ে থাকে। এই পদ্ধতিগুলোতে আপনাকে সদস্য বানাতে বা প্রজেক্ট রেফারেলের জন্য কাউকে অনুরোধ করতে হয় না। আপনি ট্রাস্ট ওয়ালেট বা অন্য ডেসেন্ট্রালাইজড ওয়ালেট থেকেই যেকোনো সময় আপনার পুঁজি পুরোপুরি তুলে নিতে পারেন।'
      },
      {
        en: 'In contrast, deceptive investment portals boast of "guaranteed 2% daily profits". These are mathematical lies designed to entrap people. Educated investors should avoid high-yield investment portals and focus on legitimate decentralized ledger mechanics.',
        bn: 'অন্য দিকে, ভুয়া প্রতারণামূলক সাইটগুলো "প্রতিদিন ২% লাভের গ্যারান্টি" দেওয়ার মতো অসম্ভব মিথ্যা দাবি করে। এগুলো মানুষকে ফাঁদে ফেলার গাণিতিক প্রতারণা ছাড়া আর কিছুই নয়। এ ধরণের অবাস্তব উচ্চ-মুনাফার ভুয়া পোর্টাল এড়িয়ে ব্লকচেইনের প্রকৃত আর্কিটেকচার ভালোভাবে বোঝা উচিত।'
      }
    ]
  }
];

export const ROW_5_TOPICS: Topic[] = [
  {
    id: 'verse-blueprint',
    titleEn: 'The Verse Blueprint: Building Genuine Decentralized Communities',
    titleBn: 'ভার্স ব্লুপ্রিন্ট: সত্যিকারের বিকেন্দ্রীকৃত কমিউনিটি তৈরি',
    shortDescriptionEn: 'How clean organic structures scale with collective trust, honesty, and shared accountability.',
    shortDescriptionBn: 'কীভাবে সম্মিলিত বিশ্বাস, সততা এবং পারস্পরিক জবাবদিহিতার মাধ্যমে সুশৃঙ্খল অর্গানিক কমিউনিটি গড়ে ওঠে।',
    category: 'Verse Ecosystem',
    iconName: 'Network',
    paragraphs: [
      {
        en: 'A genuine Web3 community is never a top-down corporate hierarchy. It is a shared digital cooperative propelled by common values, mutual support, and absolute transparency. Without organic trust, even the most technologically advanced tokens inevitably collapse into speculative irrelevance.',
        bn: 'একটি সত্যিকারের ওয়েব৩ বা বিকেন্দ্রীকৃত কমিউনিটি মূলত ওপর থেকে চাপিয়ে দেওয়া কোনো কর্পোরেট শাসন নয়। এটি সাধারণ মানুষের একটি যৌথ ডিজিটাল সমবায়, যা সততা, পারস্পরিক শিক্ষা এবং সম্পূর্ণ স্বচ্ছতার ওপর ভিত্তি করে গড়ে ওঠে। যেখানে দলগত বিশ্বাস ও স্বচ্ছতা নেই, সেখানে বড় প্রজেক্টও ব্যর্থ হতে বাধ্য।'
      },
      {
        en: 'Honesty and collective accountability are the bedrock of community scaling. Every member must act with shared duty—not only seeking individual payouts, but working to protect the integrity of the collective ecosystem. This mutual social agreement forms an unbreakable bond.',
        bn: 'সততা এবং সম্মিলিত জবাবদিহিতাই হলো যেকোনো বড় সামাজিক বা ডিজিটাল প্ল্যাটফর্মের মূল ভিত্তি। প্রতিটি সদস্যের মূল কাজ কেবল নিজের ফায়দা দেখা নয়, বরং নতুন সাধারণ মানুষদের স্ক্যাম প্রতারক থেকে রক্ষা করা এবং ইকোসিস্টেমের স্বাস্থ্য রক্ষা করা। এই নৈতিক ঐক্য একটি শক্তিশালী বন্ড তৈরি করে।'
      },
      {
        en: 'True network value scales in proportion to the collective effort of its members. When hundreds of users collaboratively run validator nodes, moderate support channels, and protect newcomers from fraudulent third parties, they construct a self-reinforcing financial fortress.',
        bn: 'একটি প্ল্যাটফর্মের আসল নেটওয়ার্ক ভ্যালু বৃদ্ধি পায় তার সদস্যদের সম্মিলিত পরিশ্রমের ওপর। যখন শত শত মানুষ একসাথে কোনো নির্দিষ্ট লক্ষ্য বা শিক্ষার দিকে মনোনিবেশ করে, ভুল তথ্যের প্রতিবাদ করে এবং নবাগতকে পথ দেখায়, তখন তারা একটি দুর্ভেদ্য ডিজিটাল দুর্গের ন্যায় রূপ নেয়।'
      }
    ]
  },
  {
    id: 'verse-case-study',
    titleEn: 'Case Study: The Rise and Triumph of Verse Community',
    titleBn: 'কেস স্টাডি: ভার্স কমিউনিটির উত্থান এবং বিজয় গাঁথা',
    shortDescriptionEn: 'Reviewing the historic dedication that transformed Verse into an inspiring, elite community in South Asia.',
    shortDescriptionBn: 'দক্ষিণ এশিয়ায় শত প্রতিকূলতা ডিঙিয়ে একটি সফল ও আদর্শ শিক্ষামূলক প্ল্যাটফর্ম হিসেবে ভার্স-এর গড়ে ওঠার গল্প।',
    category: 'Verse Ecosystem',
    iconName: 'Globe',
    interactiveType: 'verse-guide',
    paragraphs: [
      {
        en: 'In the local web ecosystem, the Verse Community stands out as an outstanding, pure proof of what collective dedication can achieve. While classic scam projects relied on fake promotions and heavy marketing budgets, Verse grew strictly organic—relying on trust, honesty, and mutual education.',
        bn: 'টেলিগ্রাম ও সোশ্যাল মিডিয়ার বিপুল গোলযোগের মাঝে, সততা ও নিবেদিত প্রচেষ্টার এক অনবদ্য উদাহরণ তৈরি করেছে ভার্স কমিউনিটি (Verse Community)। যখন চারপাশের ভুয়া সাইটগুলো কোটি টাকা দিয়ে অসৎ প্রচারণা করছিল, তখন ভার্স কোনো মার্কেটিং ছাড়াই সম্পূর্ণ অর্গানিক উপায়ে সাধারণ মানুষের বিশ্বাস ও শিক্ষার ওপর ভর করে অনন্য উচ্চতায় পৌঁছেছে।'
      },
      {
        en: 'Verse proved that digital platforms can empower thousands of individuals in developing economies. Through structured training sessions, rigorous safety warnings, and constant support, Verse protected thousands of local youths from falling victim to global crypto MLM traps.',
        bn: 'ভার্স প্রমাণ করেছে যে উন্নয়নশীল দেশের হাজার হাজার বেকার তরুণকে সচেতন ডিজিটাল সম্পদে রুপান্তর করা সামাজিক শিক্ষার মাধ্যমে সম্ভব। নিয়মিত গাইডস, নিখুঁত অডিট এবং সার্বক্ষণিক সচেতনতামূলক সতর্কবার্তা প্রচার করে ভার্স হাজার হাজার তরুণকে বিদেশি এমএলএম ফাঁদ থেকে রক্ষা করেছে এবং তাদের মেধা সঠিকভাবে ব্যবহার করা শিখিয়েছে।'
      },
      {
        en: 'The strength of Verse lies in its human-first ethos. It has created a resilient digital safe haven, showing that when human agency is aligned towards shared knowledge, the aggregate community can challenge systemic barriers and write its own technological destiny.',
        bn: 'ভার্সের সবচেয়ে প্রধান শক্তি হলো মানুষের সাহায্যকে ব্যবসার ওপরে স্থান দেওয়া। এটি মূলত একটি নিরাপদ শিক্ষামূলক ডিজিটাল নিরাপদ আশ্রয়স্থল। এটি আমাদের শেখায় যে, সাধারণ মানুষ যদি সুশিক্ষায় একত্রিত হয়, তবে সব ষড়যন্ত্র ও প্রযুক্তিগত বাধা জয় করে নিজেদের উজ্জ্বল ভবিষ্যৎ নিজেরাই নির্ধারণ করতে পারে।'
      }
    ]
  },
  {
    id: 'organic-group-tactics',
    titleEn: 'Identifying Clean Tribes: Guarding Organized Digital Tribes',
    titleBn: 'পরিচ্ছন্ন গোষ্ঠী চেনা: সংগঠিত ডিজিটাল দলগুলি রক্ষা করা',
    shortDescriptionEn: 'How to avoid paid artificial shills and establish healthy, educational-first decentralized groups.',
    shortDescriptionBn: 'কীভাবে টাকার বিনিময়ে ভাড়া করা ভুয়া প্রজেক্ট প্রচারকারী এড়াবেন এবং সুস্থ শিক্ষামূলক দল গড়ে তুলবেন।',
    category: 'Verse Ecosystem',
    iconName: 'MessageSquareCheck',
    paragraphs: [
      {
        en: 'The crypto space is filled with paid promotional groups, "signal chats" promoting pump-and-dump coins, and echo chambers designed to extract value from novice users. Distinguishing an artificial promotional circle from a genuine educational alliance is vital to your financial safety.',
        bn: 'ক্রিপ্টো ও ট্রেডিং জগত এখন কুখ্যাত সিগন্যাল গ্রুপ, পাম্প-অ্যান্ড-ডাম্প চক্র এবং তথাকথিত পেড ভিআইপি চ্যাটে ভরপুর। আপনি যদি একজন বুদ্ধিমান মানুষ হয়ে থাকেন, তবে এসব ভুয়া সিগন্যাল গ্রুপের ভণ্ডামি ও আসল উন্মুক্ত শিক্ষামূলক প্ল্যাটফর্মের সুরের পার্থক্য বুঝতে পারা আপনার আর্থিক সুরক্ষার জন্য সবচেয়ে গুরুত্বপূর্ণ।'
      },
      {
        en: 'Organic groups do not charge expensive "VIP access fees" for basic trading lessons. They do not hype up unstable coins or push affiliate referral codes. Instead, their discussions focus heavily on fundamentals, security habits, risk management, and local regulatory developments.',
        bn: 'একটি ভালো ও অর্গানিক দল কখনোই আপনার থেকে শেখার জন্য বা গ্রুপে জয়েনের জন্য টাকা বা সাবস্ক্রিপশন ফি চাইবে না। তারা কখনোই আপনাকে রিফারেল দিয়ে আইডি সচল করা বা ক্যাসিনো সাইটে রেজিস্ট্রেশনের জন্য বলবে না। বরং তাদের ফোরামে আপনি পাবেন ঝুঁকি ব্যবস্থাপনা, স্ক্যাম চেনার উপায় এবং সঠিক ব্যবহারিক শিক্ষা।'
      },
      {
        en: 'By studying systems like Verse, users can learn to seek supportive environments where members challenge each other to research thoroughly (Do Your Own Research) and never invest capital they cannot afford to lose.',
        bn: 'ভার্স কমিউনিটির মতো আদর্শ দলগুলোকে পর্যবেক্ষণ করে ব্যবহারকারীরা বুঝতে পারবেন কীভাবে একটি সঠিক সাপোর্ট নেটওয়ার্ক গড়ে তুলতে হয়। যেখানে সবাই আপনাকে নিজের বুদ্ধিতে চলার অনুপ্রেরণা (DYOR - Do Your Own Research) দেবে এবং মনে করিয়ে দেবে যে, নিজের লোকসানের ঝুঁকি নিয়ে কখনো আবেগ দিয়ে লেনদেন করতে নেই।'
      }
    ]
  }
];

export const ROW_6_TOPICS: Topic[] = [
  {
    id: 'web2-web3-eco',
    titleEn: 'Ecosystem Evolutions: The Deep Shift from Web2 to Web3',
    titleBn: 'ইকোসিস্টেমের বিবর্তন: ওয়েব২ থেকে ওয়েব৩-এর গভীর পরিবর্তন',
    shortDescriptionEn: 'A direct comparison of centralized internet models with ownership-focused, trustless web networks.',
    shortDescriptionBn: 'প্রথাগত বড় সার্ভার ভিত্তিক ওয়েব ব্যবস্থার সাথে নতুন বিকেন্দ্রীকৃত ওপেন ব্লকচেইন ওয়েব ব্যবস্থার পার্থক্য।',
    category: 'General Knowledge',
    iconName: 'Layers',
    interactiveType: 'web-compare',
    paragraphs: [
      {
        en: 'The internet is currently undergoing its most significant evolution in decades. Web2, the social and platform-centric internet of the 21st century, is dominated by centralized mega-corporations that monetize user data, centralize hosting services, and restrict creative independence.',
        bn: 'আমরা যে ইন্টারনেট প্রতিদিন ব্যবহার করছি, তা কিন্তু বড় ধরণের বিবর্তনের অংশ। ওয়েব২ (ওয়েব ২.০) হলো সেই প্রচলিত ফেসবুক বা গুগলের সামাজিক ইন্টারনেট, যেখানে আমাদের সমস্ত ব্যক্তিগত তথ্য বড় কর্পোরেট কোম্পানির সার্ভারে জমা থাকে। তারা আমাদের ডেটা বিক্রি করে কোটি কোটি ডলার মুনাফা করে কিন্তু ব্যবহারকারী পায় নামমাত্র নিয়ন্ত্রণ।'
      },
      {
        en: 'Web3 introduces a serverless, decentralized web. It shifts the power backend from centralized databases to open node blockchains, enabling users to truly own their digital identities, domain records, and financial assets through secure public ledgers.',
        bn: 'ওয়েব৩ (Web3) ইন্ট্রোডিউস করছে এক বৈপ্লবিক পরিবর্তন। এটি কোনো নির্দিষ্ট কেন্দ্রীয় মালিকানাধীন সার্ভারের ওপর ডেটা না রেখে তা সরাসরি ওপেন ব্লকচেইনের নোডে ছড়িয়ে দেয়। এর ফলে আপনি আপনার ডিজিটাল পরিচয়, নিজস্ব ডোমেন এবং সম্পদের প্রকৃত ও অবিসংবাদিত মালিক হয়ে ওঠেন, যা কেউ কেড়ে নিতে পারবে না।'
      },
      {
        en: 'This architectural change represents a monumental shift for future generations. Rather than remaining passive visitors whose internet behaviors are sold to advertisers, users are transformed into active stakeholders of the networks they build.',
        bn: 'এই প্রযুক্তিগত ডিপি কাঠামো আগামী প্রজন্মের জন্য এক মহাবিপ্লব। আপনি আর ইন্টারনেটের জন্য কোনো কোম্পানির ডেটা প্রোডাক্ট হয়ে থাকবেন না, বরং আপনার তৈরিকৃত নেটওয়ার্কের আপনি নিজেই হয়ে উঠবেন স্বত্বাধিকারী ও অংশীদার।'
      }
    ]
  },
  {
    id: 'bd-lagging-causes',
    titleEn: 'Why Bangladesh is Lagging Behind: Comparative Analysis & Catchup',
    titleBn: 'বাংলাদেশ কেন পিছিয়ে রয়েছে: তুলনামূলক বিশ্লেষণ এবং উত্তরণের উপায়',
    shortDescriptionEn: 'Detailing how regulatory stagnation delays youth empowerment, comparing models like El Salvador, and finding solutions.',
    shortDescriptionBn: 'কীভাবে আইনি জড়তা আমাদের তরুণ ফ্রিল্যান্সারদের পিছিয়ে দিচ্ছে, অন্যান্য দেশের সাথে তার তুলনামূলক বিশ্লেষণ।',
    category: 'General Knowledge',
    iconName: 'Compass',
    paragraphs: [
      {
        en: 'Bangladesh currently lags significantly behind other developing and developed countries in digital asset integration. While countries like El Salvador embrace Bitcoin as legal tender, Singapore builds clear sandbox licenses, and Vietnam ranks among the top globally in retail adoption, Bangladesh continues to rely on legacy bans.',
        bn: 'ডিজিটাল বিপ্লবের এই মহাসড়কে বাংলাদেশ বর্তমানে অন্যান্য দেশের তুলনায় অনেকখানি পিছিয়ে। যেখানে এল সালভাডর বিটকয়েনকে অফিসিয়াল মুদ্রা করেছে, সিঙ্গাপুর নতুন লাইসেন্স দিচ্ছে, এবং ভিয়েতনাম বৈশ্বিক ক্রিপ্টো এডপশনে প্রথম সারিতে আছে, সেখানে আমরা এখনো ১৯৪৭ সালের আইনের অধীনে ক্রিপ্টোকে শুধু নিষেধাজ্ঞার গণ্ডিতে আটকে রেখেছি।'
      },
      {
        en: 'This delays youth empowerment. Millions of local developers, freelance graphic designers, and tech innovators struggle with outdated cross-border cash out systems, facing high fees and bureaucratic blockades that keep them disconnected from the massive Web3 industry.',
        bn: 'এই জড়তার ফলে আমাদের প্রতিভাবান তরুণেরা ক্রমাগত বঞ্চিত হচ্ছে। আমাদের হাজার হাজার ফ্রিল্যান্সার, আন্তর্জাতিক গেম নির্মাতা এবং ডিজাইনাররা বিশ্ববাজারের ওয়েব৩ কাজের জন্য উপযুক্ত ও বৈশ্বিক পেমেন্ট গেটওয়ে সচল না থাকায় ক্লায়েন্টদের সেবা ঠিকমত পাঠাতে পারে না এবং উপার্জিত অর্থ সময়মত তুলতে পারে না।'
      },
      {
        en: 'Our citizens do not want to participate in illegal schemes; they desire clear, safe, legal avenues to learn, build, and invest. By shifting from historic resistance to active regulation, Bangladesh could unlock billions in foreign capital, prevent illegal underground trading, and elevate its youth to compete on the global stage.',
        bn: 'আমাদের দেশের নাগরিকরা চোরের মতো অপরাধী হয়ে আন্ডারগ্রাউন্ডে থাকতে চায় না; তারা চায় একটি সুন্দর, নিরাপদ ও আইনি পরিবেশ যেখানে তারা ক্রিপ্টো শিখতে পারবে, সঠিক শিক্ষা নিয়ে স্ক্যামারদের প্রতিরোধ করতে পারবে এবং সরাসরি দেশের অর্থনীতিতে ভূমিকা রাখতে পারবে। নীতি পরিবর্তনই পারে আমাদের ভবিষ্যৎ প্রজন্মকে বৈশ্বিক আইটি অঙ্গনে সফল করতে।'
      }
    ]
  }
];

export const ALL_TOPICS: Topic[] = [
  ...ROW_1_TOPICS,
  ...ROW_2_TOPICS,
  ...ROW_3_TOPICS,
  ...ROW_4_TOPICS,
  ...ROW_5_TOPICS,
  ...ROW_6_TOPICS
];
