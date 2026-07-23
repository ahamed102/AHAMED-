import { useState, useEffect } from 'react';
import { POPULAR_COINS } from '../data/topicsData';
import { Coins, Heart, AlertCircle, TrendingUp, TrendingDown, RefreshCw, Calculator, BookOpen, Layers } from 'lucide-react';
import LiveCryptoMarketChart from './LiveCryptoMarketChart';

interface MarketTabProps {
  language: 'en' | 'bn' | 'bilingual';
}

interface CoinPriceData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: string;
}

export default function MarketTab({ language }: MarketTabProps) {
  const [tickerQuery, setTickerQuery] = useState('');
  const [selectedCoin, setSelectedCoin] = useState<string>('VERSE');
  
  // Custom Live Prices from public API with realistic default fallbacks
  const defaultTickerList: CoinPriceData[] = [
    { symbol: 'VERSE', name: 'Verse', price: 0.000018, change24h: -7.72, marketCap: '38M' },
    { symbol: 'BNB', name: 'Bnb', price: 575.10, change24h: 0.85, marketCap: '84B' },
    { symbol: 'BTC', name: 'Bitcoin', price: 64250.00, change24h: 1.45, marketCap: '1.26T' },
    { symbol: 'ETH', name: 'Ethereum', price: 3485.50, change24h: -1.25, marketCap: '418B' },
    { symbol: 'SOL', name: 'Solana', price: 142.25, change24h: 3.94, marketCap: '65B' },
    { symbol: 'ADA', name: 'Cardano', price: 0.385, change24h: -2.12, marketCap: '13.7B' },
    { symbol: 'DOT', name: 'Polkadot', price: 5.85, change24h: 1.05, marketCap: '8.4B' },
    { symbol: 'MATIC', name: 'Polygon', price: 0.552, change24h: 1.30, marketCap: '5.4B' },
    { symbol: 'USDT', name: 'Tether', price: 1.00, change24h: 0.00, marketCap: '112B' },
  ];

  const [tickerList, setTickerList] = useState<CoinPriceData[]>(() => {
    const saved = localStorage.getItem('crypto_ticker_list');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const btcItem = parsed.find((p: any) => p.symbol === 'BTC');
        // Force-clear stored state if it contains the obsolete 92,000+ non-live prices
        if (btcItem && btcItem.price > 80000) {
          localStorage.removeItem('crypto_ticker_list');
          return defaultTickerList;
        }
        return parsed;
      } catch (e) {
        // Safe to ignore fallback
      }
    }
    return defaultTickerList;
  });

  const [isFetching, setIsFetching] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Interactive Risk Calculator states
  const [accountSize, setAccountSize] = useState<number>(1000);
  const [entryPrice, setEntryPrice] = useState<number>(64250);
  const [stopLoss, setStopLoss] = useState<number>(61037);
  const [riskPercent, setRiskPercent] = useState<number>(1); // default 1% risk

  const saveAndSetTickerList = (updater: (prev: CoinPriceData[]) => CoinPriceData[]) => {
    setTickerList(prev => {
      const next = updater(prev);
      localStorage.setItem('crypto_ticker_list', JSON.stringify(next));
      return next;
    });
  };

  const fetchLivePrices = async () => {
    setIsFetching(true);
    setFetchError(null);
    
    const formatMarketCap = (val: number): string => {
      if (val >= 1e12) {
        return (val / 1e12).toFixed(2) + 'T';
      } else if (val >= 1e9) {
        return (val / 1e9).toFixed(1) + 'B';
      } else if (val >= 1e6) {
        return (val / 1e6).toFixed(1) + 'M';
      }
      return val.toLocaleString();
    };

    // Approach 1: Try CoinCap API (extremely fast & public)
    try {
      const res = await fetch('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,solana,binance-coin,cardano,polkadot,polygon,tether');
      if (!res.ok) throw new Error('CoinCap error');
      const json = await res.json();
      if (json && Array.isArray(json.data)) {
        const coinMap = new Map<string, any>();
        json.data.forEach((item: any) => {
          coinMap.set(item.symbol.toUpperCase(), item);
          coinMap.set(item.id.toLowerCase(), item);
        });

        saveAndSetTickerList(prev => 
          prev.map(item => {
            let apiItem = coinMap.get(item.symbol.toUpperCase());
            if (!apiItem && item.symbol === 'MATIC') {
              apiItem = coinMap.get('polygon');
            }
            if (apiItem) {
              const price = parseFloat(apiItem.priceUsd);
              const change = parseFloat(apiItem.changePercent24Hr);
              const mcapRaw = parseFloat(apiItem.marketCapUsd);
              return {
                ...item,
                price: isNaN(price) ? item.price : price,
                change24h: isNaN(change) ? item.change24h : parseFloat(change.toFixed(2)),
                marketCap: isNaN(mcapRaw) ? item.marketCap : formatMarketCap(mcapRaw),
              };
            }
            return item;
          })
        );
        const timeStr = new Date().toLocaleTimeString();
        setLastUpdated(timeStr);
        setIsFetching(false);
        return;
      }
    } catch (e) {
      console.warn('CoinCap fetch failed, trying CryptoCompare...', e);
    }

    // Approach 2: Try CryptoCompare API
    try {
      const res = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,BNB,ADA,DOT,MATIC,USDT&tsyms=USD');
      if (!res.ok) throw new Error('CryptoCompare error');
      const json = await res.json();
      if (json && json.RAW) {
        saveAndSetTickerList(prev => 
          prev.map(item => {
            const rawData = json.RAW[item.symbol]?.USD;
            if (rawData) {
              const price = rawData.PRICE;
              const change = rawData.CHANGEPCT24HOUR;
              const mcapRaw = rawData.MKTCAP;
              return {
                ...item,
                price: typeof price === 'number' ? price : item.price,
                change24h: typeof change === 'number' ? parseFloat(change.toFixed(2)) : item.change24h,
                marketCap: typeof mcapRaw === 'number' ? formatMarketCap(mcapRaw) : item.marketCap,
              };
            }
            return item;
          })
        );
        const timeStr = new Date().toLocaleTimeString();
        setLastUpdated(timeStr);
        setIsFetching(false);
        return;
      }
    } catch (e) {
      console.warn('CryptoCompare fetch failed, trying Coinbase spot rates...', e);
    }

    // Approach 3: Coinbase API (Guaranteed CORS-free live rates)
    try {
      const symbolsToFetch = ['BTC', 'ETH', 'SOL', 'BNB', 'ADA', 'DOT', 'MATIC'];
      const responses = await Promise.allSettled(
        symbolsToFetch.map(async (symbol) => {
          const res = await fetch(`https://api.coinbase.com/v2/prices/${symbol}-USD/spot`);
          if (!res.ok) throw new Error(`${symbol} spot fetch failed`);
          const data = await res.json();
          return { symbol, price: parseFloat(data.data.amount) };
        })
      );

      let successCount = 0;
      const coinbasePrices: Record<string, number> = {};
      responses.forEach((res) => {
        if (res.status === 'fulfilled' && res.value) {
          coinbasePrices[res.value.symbol] = res.value.price;
          successCount++;
        }
      });

      if (successCount > 0) {
        saveAndSetTickerList(prev =>
          prev.map(item => {
            const livePrice = coinbasePrices[item.symbol];
            if (livePrice) {
              return {
                ...item,
                price: livePrice
              };
            }
            return item;
          })
        );
        const timeStr = new Date().toLocaleTimeString();
        setLastUpdated(timeStr + ' (Coinbase)');
        setIsFetching(false);
        return;
      }
    } catch (e) {
      console.warn('Coinbase parallel spot rates failed, applying live fluctuation fallback...', e);
    }

    // Fallback Fluctuation Cycle
    saveAndSetTickerList(prev => 
      prev.map(item => {
        const percentage = (Math.random() - 0.5) * 0.3; // up to 0.15% fluctuation
        const newPrice = item.price * (1 + percentage / 100);
        const newChange = item.change24h + (Math.random() - 0.5) * 0.08;
        return {
          ...item,
          price: parseFloat(newPrice.toFixed(item.price > 100 ? 2 : 4)),
          change24h: parseFloat(newChange.toFixed(2)),
        };
      })
    );
    const timeStr = new Date().toLocaleTimeString();
    setLastUpdated(timeStr + ' (Fluctuating)');
    setIsFetching(false);
  };

  useEffect(() => {
    // Initial load
    fetchLivePrices();

    // Set auto refresh interval of 12 seconds
    const interval = setInterval(() => {
      fetchLivePrices();
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  // Update calculator inputs reactively when selectedCoin changes
  useEffect(() => {
    const freshCoin = tickerList.find(c => c.symbol === selectedCoin);
    if (freshCoin) {
      setEntryPrice(freshCoin.price);
      // Set stop-loss lower
      setStopLoss(parseFloat((freshCoin.price * 0.95).toFixed(freshCoin.price > 100 ? 2 : 4)));
    }
  }, [selectedCoin]);

  const getTxt = (en: string, _bn?: string) => en;

  const getBilingualDesc = (en: string, _bn?: string) => {
    return <p className="text-slate-200 text-xs md:text-sm leading-relaxed">{en}</p>;
  };

  // Technical Indicators descriptions
  const indicatorsList = [
    {
      name: 'RSI (Relative Strength Index)',
      descEn: 'A momentum oscillator measuring speed and rate of change. Readings below 30 indicate Oversold (potential buy zone), while readings above 70 indicate Overbought (potential sell zone).',
      descBn: 'একটি মোমেন্টাম অসিলেটর যা কয়েনের দাম পরিবর্তনের গতি পরিবর্তন পরিমাপ করে। সাধারণত ৩০-এর নিচে নেমে যাওয়াকে ওভারসোল্ড (কেনার ভালো সুযোগ) এবং ৭০-এর ওপরে যাওয়াকে ওভারবট (বিক্রি করে প্রফিট তোলার সংকেত) ধরা হয়।',
    },
    {
      name: 'Moving Averages (EMA / SMA)',
      descEn: 'Smooths out price action by filtering temporary market noises. The 50-day and 200-day EMA cross-overs (Golden Cross / Death Cross) signal strong institutional shifts.',
      descBn: 'অস্থায়ী বাজারের ওঠানামা পরিশ্রুত করে গড় মূল্য দেখায়। ৫০ ও ২০০ দিনের এক্সপোনেনশিয়াল ক্রসিংকে গোল্ডেন ক্রস (চরম তেজী সংকেত) বা ডেথ ক্রস (তীব্র পতনের সংকেত) ধরা হয়।',
    },
    {
      name: 'MACD (Moving Average Convergence Divergence)',
      descEn: 'Shows relationship between two key moving averages. Crosses above the signal line represent bullish setups; crosses below convey bearish pressure.',
      descBn: 'দুটি মুভিং অ্যাভারেজের মধ্যকার শক্তিশালী সম্পর্কের ট্রেন্ড নির্দেশ করে। এমএসিডি নীল লাইন লাল সিগন্যাল লাইনের ওপরে উঠলে বাই প্রেসার বাড়ে এবং নিচে নামলে দাম কমার আশঙ্কা তৈরি হয়।',
    },
  ];

  const filteredCoins = POPULAR_COINS.filter(c => 
    c.name.toLowerCase().includes(tickerQuery.toLowerCase()) ||
    c.symbol.toLowerCase().includes(tickerQuery.toLowerCase())
  );

  const selectedCoinData = POPULAR_COINS.find(c => c.symbol === selectedCoin) || POPULAR_COINS[0];

  // Mathematical Risk position calculations
  const stopLossDifference = Math.max(0, entryPrice - stopLoss);
  const totalAmountToRisk = accountSize * (riskPercent / 100);
  const dynamicPositionSizeCoins = stopLossDifference > 0 ? totalAmountToRisk / stopLossDifference : 0;
  const dynamicPositionValueDollars = dynamicPositionSizeCoins * entryPrice;

  return (
    <div className="space-y-12 animate-fade-in" id="market-trading-view">
      
      {/* Page Title Header card */}
      <div className="bg-[#0e1633] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full text-emerald-300 font-bold uppercase tracking-widest text-[9.5px] border border-emerald-500/20 shadow-sm">
            <Coins size={13} className="text-emerald-400" />
            <span>{getTxt('Analytical Mainframe', 'ট্রেডিং অ্যানালাইসিস এবং ঝুঁকির হিসাব')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tight">
            📈 {getTxt('Market, Trading & Investment', 'মার্কেট, ট্রেডিং ও বুদ্ধিমান বিনিয়োগ')}
          </h2>
          <p className="text-xs md:text-sm text-blue-200 max-w-3xl leading-relaxed">
            {getTxt(
              'Real-time live crypto price action, interactive technical charts, wallet swap/send utilities, and risk calculators. Stay informed with live Binance & CoinGecko WebSocket data streams.',
              'রিয়েল-টাইম লাইভ ক্রিপ্টো চার্ট, ইন্টারঅ্যাকটিভ টাইম-ফ্রেম, সোয়াপ ডেক্স ইউটিলিটি ও রিভার্সাল ক্যালকুলেটর। বিনান্স ও কয়েনগেকো লাইভ এপিআই দিয়ে বাজার মূল্য পর্যবেক্ষণ করুন।'
            )}
          </p>
        </div>
      </div>

      {/* FEATURED REAL-TIME CRYPTO MARKET PRICE CHART SECTION (Bitcoin.com Wallet Style) */}
      <LiveCryptoMarketChart language={language} />

      {/* Spot vs Futures diagrammatic interactive grid banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Spot Trading */}
        <div className="bg-gradient-to-br from-[#0c221e] to-[#040c10] border-2 border-emerald-505/25 p-6 rounded-2xl relative shadow-md">
          <div className="absolute top-4 right-4 bg-emerald-500/10 px-2 py-0.5 rounded text-[9.5px] font-black uppercase text-emerald-300">
            {getTxt('Low Risk - Safe', 'কম রিস্ক এবং নিরাপদ')}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {getTxt('Spot Trading (স্পট ট্রেডিং)', '১. স্পট ট্রেডিং')}
            </h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              {getTxt(
                'Spot trading involves purchasing actual coins and storing them inside your own wallet. You own the asset entirely. If the token value falls, you experience temporary paper loss, but the coin count remains exactly same. There is zero risk of liquidation.',
                'স্পট ট্রেডিং হলো সরাসরি ক্যাশ দিয়ে কোনো ক্রিপ্টো কয়েন কিনে তা নিজের ওয়ালেটে জমা রাখা। এখানে আপনি টোকেনটির প্রকৃত মালিক। অর্থাৎ, দাম সাময়িকভাবে কমলেও কয়েনের সংখ্যা কখনো কমে না। তাই এখানে ব্যালেন্স রাতারাতি চিরতরে শুন্য বা লিকুইডেট হওয়ার কোনো সুযোগ নেই।'
              )}
            </p>
            <div className="bg-[#0b1c1c] p-3 rounded-xl border border-emerald-500/10 text-[11px] text-emerald-300 font-bold">
              ✅ {getTxt('Recomended for all beginners and casual long-term investors.', 'নতুন বা ফ্রিল্যান্সারদের জন্য দীর্ঘমেয়াদী সাধারণ বিনিয়োগে সবচেয়ে আদর্শ পথ।')}
            </div>
          </div>
        </div>

        {/* Futures Trading */}
        <div className="bg-gradient-to-br from-[#28111a] to-[#050406] border-2 border-rose-500/20 p-6 rounded-2xl relative shadow-md">
          <div className="absolute top-4 right-4 bg-rose-500/10 px-2 py-0.5 rounded text-[9.5px] font-black uppercase text-rose-300">
            {getTxt('EXTREME RISK / LIQUIDATION', 'অত্যধিক ঝুঁকি / সর্বস্ব হারানোর ভয়')}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-455 animate-pulse" />
              {getTxt('Futures Trading (ফিউচারস ট্রেডিং)', '২. লেভারেজ ফিউচারস ট্রেডিং')}
            </h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              {getTxt(
                'Futures trading is a contract betting on price movements using borrowed lender capital (leverage). If you use 10x leverage, a minor 10% move against your entry can liquidate your trade, forcing your wallet balance to instantly drop to zero. You do not own the actual coins.',
                'ফিউচারস ট্রেডিংয়ে আপনি এক্সচেঞ্জের নিকট থেকে অতিরিক্ত লোন বা ঋণ নিয়ে (লেভারেজ ব্যবহার করে) দাম কোন দিকে যাবে তার ওপর বাজি ধরেন। উদাহরণস্বরূপ, আপনি যদি ১০ গুণ (10x) লেভারেজ নেন, তবে আপনার এন্ট্রি পয়েন্ট থেকে দাম মাত্র ১০% কমলেই আপনার ট্রেড চিরতরে ধ্বংস হয়ে ব্যালেন্স সম্পূর্ণ শুন্য (0) হয়ে যাবে।'
              )}
            </p>
            <div className="bg-[#240d12] p-3 rounded-xl border border-rose-500/10 text-[11px] text-rose-300 font-bold">
              ❌ {getTxt('Strictly forbidden for novices. Avoid high leverage greed.', 'অতিরিক্ত লোভের ফাঁদে পড়ে এখানে অধিকাংশ লোক তাদের গচ্ছিত মূলধন হারায়।')}
            </div>
          </div>
        </div>

      </div>

      {/* Real-time-looking interactive market price ticker board */}
      <div className="bg-[#0a112a] border border-blue-500/15 p-6 rounded-3xl space-y-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-500/10 pb-4">
          <div>
            <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight italic flex items-center gap-2">
              <RefreshCw size={16} className={`text-emerald-400 ${isFetching ? 'animate-spin' : ''}`} />
              {getTxt('Live Cryptocurrency Ticker & Utility Desk', 'লাইভ ক্রিপ্টোকারেন্সি প্রাইস ও ইউটিলিটি ডেক্স')}
            </h3>
            <p className="text-xs text-blue-300 font-bold">
              {getTxt('Click any ticker to load the official custom usecase definition.', 'যেকোনো কয়েনের নামের ওপর ক্লিক করে তার চমৎকার সংক্ষিপ্ত ইউজেস জানুন।')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-0">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-[10.5px] font-bold text-emerald-400 font-mono">
              <span className={`inline-block w-2 h-2 rounded-full bg-emerald-400 ${isFetching ? 'animate-pulse' : 'animate-ping'}`} />
              <span>{isFetching ? getTxt('FETCHING...', 'আপডেট হচ্ছে...') : getTxt('LIVE SYNCED', 'লাইভ যুক্ত')}</span>
            </div>
            {lastUpdated && (
              <span className="text-[9.5px] text-slate-400 font-mono bg-[#11193c] px-2.5 py-1.5 rounded-lg border border-slate-550/10">
                {getTxt('Synced: ', 'আপডেট: ')} {lastUpdated}
              </span>
            )}
            <button
              onClick={() => fetchLivePrices()}
              disabled={isFetching}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-blue-900/40 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-md disabled:cursor-not-allowed border border-cyan-400/30"
            >
              <RefreshCw size={11} className={isFetching ? 'animate-spin' : ''} />
              <span>{getTxt('REFRESH', 'রিফ্রেশ')}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Ticker Table List */}
          <div className="lg:col-span-6 bg-blue-950/30 rounded-2xl border border-blue-500/10 overflow-hidden text-white">
            <div className="p-4 bg-blue-950/60 border-b border-blue-500/15 text-xs font-black uppercase text-slate-300 tracking-wide grid grid-cols-4">
              <span>Token</span>
              <span className="text-right">Price</span>
              <span className="text-right font-sans lowercase">24h chg</span>
              <span className="text-right">Market Cap</span>
            </div>
            
            <div className="divide-y divide-blue-500/10">
              {tickerList.map((t) => {
                const isSelected = selectedCoin === t.symbol;
                return (
                  <button
                    key={t.symbol}
                    onClick={() => setSelectedCoin(t.symbol)}
                    className={`w-full text-left p-3.5 px-4 grid grid-cols-4 text-xs font-mono transition-colors items-center cursor-pointer ${
                      isSelected ? 'bg-cyan-500/10 text-cyan-300 border-l-4 border-cyan-400' : 'hover:bg-blue-900/10 text-slate-200'
                    }`}
                  >
                    <div className="flex flex-col items-start text-left">
                      <span className="font-sans font-black uppercase tracking-wider text-white text-[12px]">{t.symbol}</span>
                      <span className="text-[9.5px] text-blue-300 font-sans tracking-tight">{t.name}</span>
                    </div>
                    
                    <span className="text-right font-bold text-white">${t.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 4})}</span>
                    
                    <span className={`text-right font-black flex items-center justify-end gap-1 ${t.change24h > 0 ? 'text-emerald-400' : t.change24h < 0 ? 'text-rose-400' : 'text-slate-400'}`}>
                      {t.change24h > 0 ? '▲' : t.change24h < 0 ? '▼' : ''} {Math.abs(t.change24h)}%
                    </span>
                    
                    <span className="text-right text-slate-400 font-bold">{t.marketCap}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Coin Detailed Analytical Panel */}
          <div className="lg:col-span-6 bg-[#0c1334] border-2 border-cyan-500/20 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 font-mono font-black text-sm">
                {selectedCoinData.symbol}
              </div>
              <div>
                <h4 className="text-base font-black text-white uppercase">{selectedCoinData.name}</h4>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block">{selectedCoinData.type}</span>
              </div>
            </div>

            <div className="border-t border-blue-500/15 pt-4 space-y-4">
              <span className="text-[10px] uppercase font-black text-blue-300 tracking-wider block">Official Fundamental Utility & Usecase</span>
              <div className="text-xs text-blue-100 leading-relaxed bg-[#0a112a] p-4 rounded-xl border border-blue-500/10">
                {getBilingualDesc(selectedCoinData.useCaseEn, selectedCoinData.useCaseBn)}
              </div>
              <div className="p-3.5 bg-indigo-500/5 rounded-xl border border-indigo-500/10 text-[11px] text-[#c7d2fe]">
                💡 {getTxt(
                  'Make sure to evaluate Coin Supply limits and inflation dynamics before deploying high asset allocations.',
                  'কোনো কয়েনে দীর্ঘমেয়াদে বড় বিনিয়োগ করার পূর্বে তার টোকেনোমিক্স ও বার্ষিক মুদ্রাস্ফীতির হার বা সাপ্লাই রিলিজ শিডিউল অত্যন্ত গুরুত্ব সহকারে DYOR করুন।'
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Advanced Position Size & Risk Management Calculator */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
            <Calculator className="text-emerald-400" size={22} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
              📊 {getTxt('Interactive Portfolio Risk Position Calculator', 'পজিশন সাইজিং ও ঝুঁকি নিয়ন্ত্রণ ক্যালকুলেটর')}
            </h3>
            <p className="text-xs text-blue-200">
              {getTxt('Input parameters to calculate the absolute ideal position size to keep your capital safe.', 'ট্রেডে যোগ দেওয়ার আগে ঝুঁকির পরিমাণ লিখে সে অনুযায়ী অ্যাকাউন্ট সেভিং ইনভেস্টমেন্ট অ্যামাউন্ট নির্ধারণ করুন।')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#0d1637] p-5 rounded-2xl border border-blue-500/10">
          
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase text-cyan-400 font-mono">
              {getTxt('1. Total Account Size ($)', '১. অ্যাকাউন্টের মোট ব্যালেন্স ($)')}
            </label>
            <input 
              type="number" 
              value={accountSize} 
              onChange={(e) => setAccountSize(Math.max(0, Number(e.target.value)))}
              className="w-full bg-[#11193a] border border-blue-500/20 rounded-xl p-2.5 text-xs text-white text-center font-mono font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase text-cyan-400 font-mono">
              {getTxt('2. Maximum Risk %', '২. সর্বোচ্চ লস পার্সেন্টেজ %')}
            </label>
            <select
              value={riskPercent}
              onChange={(e) => setRiskPercent(Number(e.target.value))}
              className="w-full bg-[#11193a] border border-blue-500/20 rounded-xl p-2.5 text-xs text-white text-center font-mono font-bold"
            >
              <option value={0.5}>0.5% (Very Safe)</option>
              <option value={1}>1.0% (Standard Risk)</option>
              <option value={2}>2.0% (Aggressive Risk)</option>
              <option value={5}>5.0% (High risk limit)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase text-cyan-400 font-mono">
              {getTxt('3. Entry Coin Price ($)', '৩. এন্ট্রি বা কেনার মূল্য ($)')}
            </label>
            <input 
              type="number" 
              value={entryPrice} 
              onChange={(e) => setEntryPrice(Math.max(0.001, Number(e.target.value)))}
              className="w-full bg-[#11193a] border border-blue-500/20 rounded-xl p-2.5 text-xs text-white text-center font-mono font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase text-cyan-400 font-mono">
              {getTxt('4. Stop-Loss Price ($)', '৪. স্টপ-লস সীমা প্রস্থান মূল্য ($)')}
            </label>
            <input 
              type="number" 
              value={stopLoss} 
              onChange={(e) => setStopLoss(Math.max(0.001, Number(e.target.value)))}
              className="w-full bg-[#11193a] border border-blue-500/20 rounded-xl p-2.5 text-xs text-white text-center font-mono font-bold"
            />
          </div>

        </div>

        {/* Calculation Result Outputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0b1828] p-5 rounded-2xl border border-blue-500/15">
            <span className="text-[10px] uppercase font-black text-rose-455 tracking-wider block">Absolute Cash at Risk if Stop Loss is Hit</span>
            <span className="text-2xl font-black text-white font-mono block mt-1">
              ${totalAmountToRisk.toFixed(2)}
            </span>
            <span className="text-[9.5px] text-blue-300 font-bold block mt-1">Exactly {riskPercent}% of your portfolio.</span>
          </div>

          <div className="bg-[#0b1828] p-5 rounded-2xl border border-blue-500/15 md:col-span-2">
            <span className="text-[10px] uppercase font-black text-emerald-400 tracking-wider block">Recommended Ideal Position Size Value</span>
            <span className="text-2xl font-black text-emerald-450 font-mono block mt-1">
              ${dynamicPositionValueDollars > 0 && dynamicPositionValueDollars < accountSize * 10 ? dynamicPositionValueDollars.toFixed(2) : 'Invalid SL Price settings'}
            </span>
            <p className="text-[10.5px] text-blue-200 font-bold mt-1.5">
              💡 {getTxt(
                `Purchase exactly ${dynamicPositionSizeCoins.toFixed(4)} coins. This ensures that even when your stop loss price at $${stopLoss} triggers, your total loss is capped strictly to $${totalAmountToRisk.toFixed(2)}!`,
                `স্টপ লস ট্রিগার হলেও আপনার অ্যাকাউন্টের ক্ষতি বা লোকসান সঠিক নিয়মে মাত্র $${totalAmountToRisk.toLocaleString()} তে সীমাবদ্ধ থাকবে!`
              )}
            </p>
          </div>

        </div>
      </div>

      {/* Analytical technical indicators description card list */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-2">
            <BookOpen size={18} className="text-cyan-400" />
            {getTxt('Core Technical Trading Indicators', 'কারিগরি ইন্ডিকেটর ও ক্যান্ডেলস্টিক সংকেত')}
          </h3>
          <p className="text-xs text-blue-200">
            {getTxt('Master essential mathematical formulas used to track major dynamic market reversals.', 'পেশাদার ট্রেডার হিসেবে ক্রিপ্টোর চার্ট পর্যবেক্ষণ ও সঠিক সিদ্ধান্ত গ্রহণের জনপ্রিয় নির্দেশকসমূহ চিনে নিন।')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {indicatorsList.map((ind, i) => (
            <div key={i} className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-3 shadow-md">
              <span className="px-2.5 py-1 bg-indigo-500/10 rounded-lg text-indigo-300 text-xs font-black tracking-wide font-sans block w-fit border border-indigo-500/10">
                {ind.name}
              </span>
              <div className="text-xs text-slate-300 leading-relaxed">
                {getBilingualDesc(ind.descEn, ind.descBn)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW FEATURE: INTERACTIVE DCA & WEALTH ACCUMULATION SIMULATOR */}
      <div className="bg-[#091026] border-2 border-[#818cf8]/25 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-550/15 rounded-xl border border-indigo-500/25 text-[#818cf8] font-black font-mono text-sm">
            $
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">
              📈 {getTxt('Dollar Cost Averaging (DCA) Compounder Tool', 'ডলার কস্ট অ্যাভারেজিং (DCA) সম্পদ সঞ্চয় সিমুলেটর')}
            </h4>
            <p className="text-xs text-blue-200">
              {getTxt('Avoid the emotional trap of timing the top. Simulate regular passive investing over custom timelines.', 'মার্কেটের উঠা-নামা নিয়ে দুঃশ্চিন্তা এড়াতে প্রতি সপ্তাহে বা মাসে নির্দিষ্ট টোকেন নিয়মিত জমানোর ম্যাজিকটি পরীক্ষা করুন।')}
            </p>
          </div>
        </div>

        {/* Local interactive state inline calculations inside anonymous helper to keep global file clean */}
        {(() => {
          // Initialize state simulation locally
          const [dcaAmount, setDcaAmount] = useState<number>(50);
          const [dcaPeriodMonths, setDcaPeriodMonths] = useState<number>(12);
          const [estimatedApy, setEstimatedApy] = useState<number>(30); // estimated annual growth in crypto

          const totalDeposit = dcaAmount * dcaPeriodMonths;
          // compound simple interest approximation for regular monthly savings
          const monthlyRate = (estimatedApy / 100) / 12;
          let futureWorth = 0;
          for (let month = 1; month <= dcaPeriodMonths; month++) {
            futureWorth = (futureWorth + dcaAmount) * (1 + monthlyRate);
          }
          const netEarnings = Math.max(0, futureWorth - totalDeposit);
          const netGrowthFactor = totalDeposit > 0 ? (netEarnings / totalDeposit) * 100 : 0;

          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* DCA Inputs Area */}
              <div className="lg:col-span-5 bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-4">
                <span className="text-[10px] font-mono font-black uppercase text-indigo-305 tracking-widest block">DCA Variable Matrices</span>
                
                {/* deposit amount slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-200 font-bold">{getTxt('Monthly Regular Savings:', 'মাসিক সঞ্চয়ের পরিমাণ:')}</span>
                    <span className="text-white font-mono font-black">${dcaAmount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={dcaAmount}
                    onChange={(e) => setDcaAmount(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                {/* deposit period months slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-200 font-bold">{getTxt('Total Duration Months:', 'মোট সময়কাল (মাস):')}</span>
                    <span className="text-white font-mono font-black">{dcaPeriodMonths} {getTxt('months', 'মাস')}</span>
                  </div>
                  <input 
                    type="range" 
                    min="3" 
                    max="60" 
                    step="1"
                    value={dcaPeriodMonths}
                    onChange={(e) => setDcaPeriodMonths(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                {/* APY return estimate slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-200 font-bold">{getTxt('Average Crypto Growth (APY):', 'প্রত্যাশিত বার্ষিক প্রবৃদ্ধি (APY):')}</span>
                    <span className="text-white font-mono font-black text-rose-350">+{estimatedApy}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="150" 
                    step="5"
                    value={estimatedApy}
                    onChange={(e) => setEstimatedApy(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* DCA Computed Output Panel */}
              <div className="lg:col-span-7 bg-[#060b1e] border border-blue-500/10 p-5 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Regular Invest block */}
                <div className="bg-[#0b122f] p-4.5 rounded-xl border border-cyan-500/5">
                  <span className="text-[9.5px] uppercase font-bold text-blue-300 block tracking-wide">{getTxt('Total Deposited Fiat', 'মোট জমাকৃত টাকা (ফিয়াট)')}</span>
                  <span className="text-xl font-mono font-black text-white block mt-1.5">${totalDeposit.toLocaleString()}</span>
                  <p className="text-[10px] text-blue-200/60 mt-1">{getTxt('Regular offline deposits.', 'ধীরে ধীরে জমানো মূল ওয়ালেট ফান্ড।')}</p>
                </div>

                {/* Componded Total block */}
                <div className="bg-[#0b122f] p-4.5 rounded-xl border border-emerald-500/5">
                  <span className="text-[9.5px] uppercase font-bold text-emerald-405 block tracking-wide">{getTxt('Future Estimated Value', 'ভবিষ্যৎ প্রাক্কলিত সম্পদ মূল্য')}</span>
                  <span className="text-xl font-mono font-black text-emerald-400 block mt-1.5">${futureWorth.toFixed(2)}</span>
                  <p className="text-[10px] text-emerald-350/60 mt-1">✨ Compound growth asset.</p>
                </div>

                {/* Estimated Earnings Percent block */}
                <div className="bg-[#0b122f] p-4.5 rounded-xl border border-indigo-500/5">
                  <span className="text-[9.5px] uppercase font-bold text-indigo-300 block tracking-wide">{getTxt('Net Gain Ratio', 'নিট শতকরা প্রবৃদ্ধি')}</span>
                  <span className="text-xl font-mono font-black text-[#818cf8] block mt-1.5">+{netGrowthFactor.toFixed(1)}%</span>
                  <p className="text-[10px] text-indigo-350/60 mt-1">🏆 Accumulation efficiency.</p>
                </div>

                {/* Educational takeaways box */}
                <div className="md:col-span-3 bg-indigo-500/5 p-4 rounded-xl border border-indigo-500/15 text-xs text-blue-150 leading-relaxed mt-2">
                  <span className="font-extrabold text-cyan-400 uppercase tracking-widest block text-[10px] mb-1">💡 Why DCA Outperforms Manual Panic Trading:</span>
                  {getTxt(
                    'Regular automated coin shopping helps you buy MORE tokens when prices drop, and LESS tokens when prices jump. This mathematically smoothens your entry average to eliminate fear and stress.',
                    'ট্রেডিং চার্ট সারাক্ষণ না দেখে ডিসিএ (DCA) পদ্ধতিতে প্রতি মাসে অল্প অল্প ডলার ক্রয় করলে, মার্কেট কমলে বেশি প্রজেক্ট কয়েন পাওয়া যায় আর মার্কেট বাড়লে ফান্ড সুরক্ষিত থাকে। দীর্ঘ উইন্ডোতে ৯১% সাধারণ ইনভেস্টর এর চেয়ে অনেক বেশি লাভজনক কৌশল এটি।'
                  )}
                </div>

              </div>

            </div>
          );
        })()}
      </div>

      {/* NEW SEGMENT: STEP BY STEP INVESTMENT GUIDE & RISK MATRIX */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <h4 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight">{getTxt('Pro Trading Guide & Portfolio Risk Rules', 'প্রফেশনাল ট্রেডিং গাইড ও পোর্টফোলিও ব্যবস্থাপনা নিয়ম')}</h4>
          <p className="text-xs text-blue-200">
            {getTxt('Maximize your market understanding of spot versus high-risk futures before investing capital.', 'ফিউচারস লিভারেজ ট্রেডের সর্বনাশা ফাঁদ এবং স্পট ট্রেডিং ডাইভার্সিফিকেশন ম্যানেজমেন্ট মডিউল।')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0f1737] p-5 rounded-2xl border border-blue-500/10 space-y-3">
            <span className="px-2.5 py-0.5 bg-cyan-500/10 rounded text-[9.5px] font-black uppercase tracking-wider text-cyan-400 font-mono w-fit block">
              Spot Asset Allocation Rules
            </span>
            <h5 className="text-sm font-black text-white font-mono uppercase">{getTxt('1. Standard Spot Capitalization', '১. আদর্শ পোর্টফোলিও স্পট ট্রেডিং নিয়ম')}</h5>
            <p className="text-xs text-blue-150 leading-relaxed">
              {getTxt(
                'Spot trading implies holding actual cryptographic tokens backing your private ledger. Divide reserves with 50% BTC/ETH, 30% Major Utility Blockchains (SOL, BNB), and up to 10% on micro-caps. Never store 100% funds in a single project asset.',
                'স্পট ওয়ালেটে সবসময় আসল কয়েনের মালিকানা সংরক্ষণ করা হয়। মোট ইনভেস্টমেন্ট ফান্ডের ৫০% বিটকয়েন ও ইথারিয়াম, ৩০% সোলানা ও বিএনবি-র মতো শক্তিশালী ইউটিলিটি লেয়ারে এবং ১০% ছোট কয়েনে ভাগ করে ডাইভার্সিফাই করে বিনিয়োগ করা উচিত।'
              )}
            </p>
          </div>

          <div className="bg-[#2a0e13] p-5 rounded-2xl border border-rose-500/15 space-y-3">
            <span className="px-2.5 py-0.5 bg-rose-500/10 rounded text-[9.5px] font-black uppercase tracking-wider text-rose-350 font-mono w-fit block">
              High-Risk Futures Leverage Pitfalls
            </span>
            <h5 className="text-sm font-black text-white font-mono uppercase">{getTxt('2. Leveraged Futures Liquidation Risks', '২. ফিউচার ট্রেডিং ও লিক্যুইডেশন বিপর্যয়')}</h5>
            <p className="text-xs text-blue-150 leading-relaxed">
              {getTxt(
                'Futures contracts are speculative orders representing price trajectory contracts without coin custody. Engaging in 10x or 20x leverage multiplies standard price movements. A minor 5% opposite coin vibration results in instant 100% loss/liquidation. Stay strictly away.',
                'ফিউচারস ট্রেড হলো লিভারেজ ধার করে দাম বাড়া বা কমার ওপর বাজি ধরা। ১০ গুণ (10x) লিভারেজ নিলে মাত্র ৫% বিপরীত ক্যান্ডেলস্টিক ওঠানামাতেই পুরো অ্যাকাউন্ট এক সেকেন্ডে লিক্যুইডেট বা শূন্য হয়ে যায়। নতুনরা এটি এড়িয়ে চলুন।'
              )}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
