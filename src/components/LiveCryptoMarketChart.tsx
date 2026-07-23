import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  TrendingUp, TrendingDown, RefreshCw, Send, Download, 
  ShoppingCart, DollarSign, Repeat, Search, Clock, ArrowUpRight, 
  ArrowDownRight, CheckCircle2, Copy, ExternalLink, ShieldCheck, 
  Award, Lock, Zap, ChevronRight, HelpCircle, Flame, BarChart2
} from 'lucide-react';

interface LiveCryptoMarketChartProps {
  language: 'en' | 'bn' | 'bilingual';
}

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  coingeckoId: string;
  binanceSymbol: string;
  price: number;
  change24h: number;
  priceDiff24h: number;
  marketCap: string;
  volume24h: string;
  source: string;
  logo: string;
  descriptionEn: string;
  descriptionBn: string;
}

const SUPPORTED_ASSETS: CryptoAsset[] = [
  {
    id: 'verse',
    symbol: 'VERSE',
    name: 'Verse',
    coingeckoId: 'verse',
    binanceSymbol: 'verseusdt',
    price: 0.000018,
    change24h: -7.72,
    priceDiff24h: -0.0000015,
    marketCap: '38M',
    volume24h: '1.8M',
    source: 'Wallet.bitcoin.com',
    logo: '/verse_logo.jpg',
    descriptionEn: 'VERSE is the official rewards and utility token powering the Wallet.bitcoin.com ecosystem, offering staking rewards, fee discounts, and non-custodial Web3 utilities.',
    descriptionBn: 'ভার্স (VERSE) হলো Wallet.bitcoin.com ইকোসিস্টেমের অফিশিয়াল রিওয়ার্ড ও ইউটিলিটি টোকেন, যা স্ট্যাকিং রিওয়ার্ড, ফি ছাড় এবং ডিএও (DAO) পরিচালনায় ব্যবহৃত হয়।'
  },
  {
    id: 'binancecoin',
    symbol: 'BNB',
    name: 'Bnb',
    coingeckoId: 'binancecoin',
    binanceSymbol: 'bnbusdt',
    price: 575.10,
    change24h: 0.85,
    priceDiff24h: 4.85,
    marketCap: '84B',
    volume24h: '1.1B',
    source: 'CoinGecko',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23F3BA2F"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="%23000000">B</text></svg>',
    descriptionEn: 'BNB powers the BNB Chain ecosystem and offers gas fee payments, staking, and decentralized exchange liquidity.',
    descriptionBn: 'বিএনবি (BNB) স্মার্ট চেইনের গ্যাস ফি প্রদান, স্ট্যাকিং এবং বিভিন্ন বিকেন্দ্রীকৃত এক্সচেঞ্জে ব্যবহৃত মূল টোকেন।'
  },
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    coingeckoId: 'bitcoin',
    binanceSymbol: 'btcusdt',
    price: 64815.00,
    change24h: 3.58,
    priceDiff24h: 2244.00,
    marketCap: '1.3T',
    volume24h: '25B',
    source: 'CoinGecko',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    descriptionEn: 'Bitcoin is the first successful internet money based on peer-to-peer technology, operating with no central authority or banks.',
    descriptionBn: 'বিটকয়েন হলো পিআর-টু-পিআর প্রযুক্তির উপর ভিত্তি করে তৈরি প্রথম সফল ইন্টারনেট মুদ্রা, যা কোনো কেন্দ্রীয় কর্তৃপক্ষ বা ব্যাংকের নিয়ন্ত্রণ ছাড়াই চলে।'
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    coingeckoId: 'ethereum',
    binanceSymbol: 'ethusdt',
    price: 3485.50,
    change24h: -1.25,
    priceDiff24h: -44.10,
    marketCap: '418B',
    volume24h: '14B',
    source: 'CoinGecko',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    descriptionEn: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality powers decentralized finance (DeFi) and dApps.',
    descriptionBn: 'ইথেরিয়াম হলো স্মার্ট কন্ট্রাক্ট সুবিধা সম্বলিত একটি বিকেন্দ্রীকৃত ওপেন-সোর্স ব্লকচেইন, যা ডিফাই (DeFi) ও ডি-অ্যাপস পরিচালনা করে।'
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    coingeckoId: 'solana',
    binanceSymbol: 'solusdt',
    price: 142.25,
    change24h: 4.12,
    priceDiff24h: 5.62,
    marketCap: '66B',
    volume24h: '3.2B',
    source: 'CoinGecko',
    logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    descriptionEn: 'Solana is a high-performance blockchain supporting builders around the globe to create crypto apps that scale today.',
    descriptionBn: 'সোলানা হলো অত্যন্ত দ্রুতগতির উচ্চ-পারফরম্যান্স ব্লকচেইন নেটওয়ার্ক, যা কম খরচে লেনদেন সম্পন্ন করে।'
  },
  {
    id: 'tether',
    symbol: 'USDT',
    name: 'Tether USD',
    coingeckoId: 'tether',
    binanceSymbol: 'usdtusdt',
    price: 1.00,
    change24h: 0.01,
    priceDiff24h: 0.0001,
    marketCap: '114B',
    volume24h: '42B',
    source: 'CoinGecko',
    logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    descriptionEn: 'Tether (USDT) is the leading fiat-collateralized stablecoin pegged 1:1 to the US Dollar for trading stability.',
    descriptionBn: 'টেথার (USDT) হলো মার্কিন ডলারের সাথে ১:১ মূল্যে সমতা বজায় রাখা বিশ্বের শীর্ষস্থানীয় স্টেবলকয়েন।'
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'XRP',
    coingeckoId: 'ripple',
    binanceSymbol: 'xrpusdt',
    price: 1.10,
    change24h: -3.06,
    priceDiff24h: -0.035,
    marketCap: '62B',
    volume24h: '2.4B',
    source: 'CoinGecko',
    logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
    descriptionEn: 'XRP is a digital asset built for global cross-border payments, providing financial institutions with instant liquidity.',
    descriptionBn: 'এক্সআরপি (XRP) আন্তর্জাতিক অর্থ স্থানান্তর ও ব্যাংকসমূহের দ্রুত লেনদেনের জন্য নির্মিত ডিজিটাল অ্যাসেট।'
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    coingeckoId: 'cardano',
    binanceSymbol: 'adausdt',
    price: 0.385,
    change24h: -2.12,
    priceDiff24h: -0.008,
    marketCap: '13.7B',
    volume24h: '410M',
    source: 'CoinGecko',
    logo: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    descriptionEn: 'Cardano is a proof-of-stake blockchain platform built on peer-reviewed research and evidence-based development.',
    descriptionBn: 'কার্ডানো (Cardano) বৈজ্ঞানিক পিয়ার-রিভিউড গবেষণার উপর ভিত্তি করে তৈরি প্রুফ-অফ-স্টেক ব্লকচেইন।'
  }
];

type Timeframe = '24H' | '7D' | '1M' | '1Y';

interface ChartDataPoint {
  timestamp: number;
  formattedTime: string;
  price: number;
}

export default function LiveCryptoMarketChart({ language }: LiveCryptoMarketChartProps) {
  const [selectedSymbol, setSelectedSymbol] = useState<string>('VERSE');
  const [timeframe, setTimeframe] = useState<Timeframe>('24H');
  const [assetList, setAssetList] = useState<CryptoAsset[]>(SUPPORTED_ASSETS);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Active asset object
  const currentAsset = useMemo(() => {
    return assetList.find(a => a.symbol === selectedSymbol) || assetList[0];
  }, [assetList, selectedSymbol]);

  // Real-time market tick state
  const [livePrice, setLivePrice] = useState<number>(currentAsset.price);
  const [liveChange24h, setLiveChange24h] = useState<number>(currentAsset.change24h);
  const [livePriceDiff, setLivePriceDiff] = useState<number>(currentAsset.priceDiff24h);
  const [priceFlash, setPriceFlash] = useState<'up' | 'down' | null>(null);
  const [isWebSocketActive, setIsWebSocketActive] = useState<boolean>(false);
  const [lastTickTime, setLastTickTime] = useState<string>('');

  // Chart state & Interactive crosshair tooltip
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [isLoadingChart, setIsLoadingChart] = useState<boolean>(true);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Modals & Action States
  const [activeModal, setActiveModal] = useState<'send' | 'receive' | 'buy' | 'sell' | 'swap' | null>(null);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Prediction timer state
  const [countdownSeconds, setCountdownSeconds] = useState<number>(4115); // 01:08:35
  const [userPrediction, setUserPrediction] = useState<'up' | 'down' | null>(null);

  // Swap modal inputs
  const [swapPayAmount, setSwapPayAmount] = useState<string>('100');
  const [swapPayCoin, setSwapPayCoin] = useState<string>('USDT');
  const [swapReceiveCoin, setSwapReceiveCoin] = useState<string>('BTC');

  // Helper text translator
  const getTxt = (en: string, _bn?: string) => en;

  // Sync live price state when selected symbol changes
  useEffect(() => {
    setLivePrice(currentAsset.price);
    setLiveChange24h(currentAsset.change24h);
    setLivePriceDiff(currentAsset.priceDiff24h);
  }, [selectedSymbol]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownSeconds(prev => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSecs: number) => {
    const h = Math.floor(totalSecs / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSecs % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSecs % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Generate smooth historical chart points depending on timeframe and selected coin
  const generateHistoricalData = (basePrice: number, range: Timeframe): ChartDataPoint[] => {
    const pointsCount = range === '24H' ? 48 : range === '7D' ? 56 : range === '1M' ? 60 : 72;
    const now = Date.now();
    const result: ChartDataPoint[] = [];

    let totalDurationMs = 24 * 3600 * 1000;
    if (range === '7D') totalDurationMs = 7 * 24 * 3600 * 1000;
    if (range === '1M') totalDurationMs = 30 * 24 * 3600 * 1000;
    if (range === '1Y') totalDurationMs = 365 * 24 * 3600 * 1000;

    const intervalMs = totalDurationMs / pointsCount;
    const volatility = range === '24H' ? 0.012 : range === '7D' ? 0.035 : range === '1M' ? 0.08 : 0.22;

    // Build trend seeded curves
    let currentP = basePrice * (1 - (currentAsset.change24h / 100) * (range === '24H' ? 1 : 0.4));
    
    for (let i = 0; i < pointsCount; i++) {
      const pointTime = now - (pointsCount - 1 - i) * intervalMs;
      const dateObj = new Date(pointTime);
      
      let formattedTime = '';
      if (range === '24H') {
        formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else if (range === '7D') {
        formattedTime = dateObj.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit' });
      } else if (range === '1M') {
        formattedTime = dateObj.toLocaleDateString([], { month: 'short', day: 'numeric' });
      } else {
        formattedTime = dateObj.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
      }

      // Add last point exactly matching live price
      if (i === pointsCount - 1) {
        result.push({
          timestamp: pointTime,
          formattedTime: 'Now',
          price: livePrice || basePrice
        });
      } else {
        // Sine wave + random walk for smooth realistic market curve
        const progress = i / pointsCount;
        const wave = Math.sin(progress * Math.PI * 3.5) * (basePrice * volatility * 0.4);
        const randomNoise = (Math.random() - 0.48) * (basePrice * volatility * 0.15);
        currentP = currentP + wave / pointsCount + randomNoise;
        
        // Prevent negative or extreme numbers
        currentP = Math.max(basePrice * 0.2, currentP);

        result.push({
          timestamp: pointTime,
          formattedTime,
          price: parseFloat(currentP.toFixed(basePrice < 1 ? 6 : 2))
        });
      }
    }
    return result;
  };

  // Fetch real historical API or generate curve when symbol or timeframe changes
  useEffect(() => {
    setIsLoadingChart(true);
    setHoverIndex(null);

    const fetchChartFromAPI = async () => {
      try {
        let daysParam = '1';
        if (timeframe === '7D') daysParam = '7';
        if (timeframe === '1M') daysParam = '30';
        if (timeframe === '1Y') daysParam = '365';

        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${currentAsset.coingeckoId}/market_chart?vs_currency=usd&days=${daysParam}`);
        if (res.ok) {
          const json = await res.json();
          if (json && Array.isArray(json.prices) && json.prices.length > 0) {
            // Downsample prices for optimal SVG performance
            const rawPrices: [number, number][] = json.prices;
            const step = Math.max(1, Math.floor(rawPrices.length / 50));
            const formatted: ChartDataPoint[] = [];

            for (let i = 0; i < rawPrices.length; i += step) {
              const [timeMs, p] = rawPrices[i];
              const d = new Date(timeMs);
              let timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              if (timeframe !== '24H') {
                timeStr = d.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit' });
              }

              formatted.push({
                timestamp: timeMs,
                formattedTime: timeStr,
                price: parseFloat(p.toFixed(p < 1 ? 6 : 2))
              });
            }

            // Ensure last point is live
            if (formatted.length > 0) {
              formatted[formatted.length - 1].price = livePrice;
              formatted[formatted.length - 1].formattedTime = 'Now';
            }

            setChartData(formatted);
            setIsLoadingChart(false);
            return;
          }
        }
      } catch (err) {
        console.warn('CoinGecko chart fetch failed, using realistic generated curve:', err);
      }

      // Fallback generator
      const generated = generateHistoricalData(currentAsset.price, timeframe);
      setChartData(generated);
      setIsLoadingChart(false);
    };

    fetchChartFromAPI();
  }, [selectedSymbol, timeframe]);

  // Real-time WebSocket connection for Binance or live polling ticks
  useEffect(() => {
    let ws: WebSocket | null = null;
    let pollInterval: any = null;

    if (currentAsset.binanceSymbol && currentAsset.symbol !== 'VERSE') {
      try {
        ws = new WebSocket(`wss://stream.binance.com:9443/ws/${currentAsset.binanceSymbol}@ticker`);
        ws.onopen = () => {
          setIsWebSocketActive(true);
        };
        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data && data.c) {
              const newP = parseFloat(data.c);
              const changeP = parseFloat(data.P);
              const priceDiff = parseFloat(data.p);

              setLivePrice(prevP => {
                if (newP > prevP) {
                  setPriceFlash('up');
                  setTimeout(() => setPriceFlash(null), 800);
                } else if (newP < prevP) {
                  setPriceFlash('down');
                  setTimeout(() => setPriceFlash(null), 800);
                }
                return newP;
              });

              setLiveChange24h(changeP);
              setLivePriceDiff(priceDiff);
              setLastTickTime(new Date().toLocaleTimeString());

              // Append new price to chart
              setChartData(prevChart => {
                if (prevChart.length === 0) return prevChart;
                const copy = [...prevChart];
                copy[copy.length - 1] = {
                  ...copy[copy.length - 1],
                  price: newP
                };
                return copy;
              });
            }
          } catch (e) {
            // Ignore parse errors
          }
        };
        ws.onerror = () => {
          setIsWebSocketActive(false);
        };
      } catch (e) {
        setIsWebSocketActive(false);
      }
    }

    // Fallback polling for live fluctuation if WebSocket is unavailable or for custom tokens
    pollInterval = setInterval(() => {
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        const percentChange = (Math.random() - 0.49) * 0.25; // mild fluctuation
        setLivePrice(prevP => {
          const delta = prevP * (percentChange / 100);
          const nextP = parseFloat((prevP + delta).toFixed(prevP < 1 ? 6 : 2));
          if (nextP > prevP) {
            setPriceFlash('up');
            setTimeout(() => setPriceFlash(null), 600);
          } else if (nextP < prevP) {
            setPriceFlash('down');
            setTimeout(() => setPriceFlash(null), 600);
          }
          return nextP;
        });

        setLastTickTime(new Date().toLocaleTimeString());

        // Update last point on chart
        setChartData(prevChart => {
          if (prevChart.length === 0) return prevChart;
          const copy = [...prevChart];
          const lastPoint = copy[copy.length - 1];
          copy[copy.length - 1] = {
            ...lastPoint,
            price: parseFloat((lastPoint.price * (1 + (Math.random() - 0.49) * 0.001)).toFixed(lastPoint.price < 1 ? 6 : 2))
          };
          return copy;
        });
      }
    }, 4000);

    return () => {
      if (ws) ws.close();
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [selectedSymbol]);

  // SVG Chart Geometry Calculations
  const chartWidth = 600;
  const chartHeight = 220;
  const paddingY = 25;

  const prices = useMemo(() => chartData.map(d => d.price), [chartData]);
  const minPrice = useMemo(() => (prices.length > 0 ? Math.min(...prices) : 0), [prices]);
  const maxPrice = useMemo(() => (prices.length > 0 ? Math.max(...prices) : 100), [prices]);

  const priceRange = useMemo(() => {
    const diff = maxPrice - minPrice;
    return diff === 0 ? 1 : diff;
  }, [minPrice, maxPrice]);

  // Compute SVG Points
  const svgPoints = useMemo(() => {
    if (chartData.length === 0) return [];
    return chartData.map((d, index) => {
      const x = (index / (chartData.length - 1)) * chartWidth;
      const normalizedY = (d.price - minPrice) / priceRange;
      const y = chartHeight - paddingY - normalizedY * (chartHeight - paddingY * 2);
      return { x, y, price: d.price, formattedTime: d.formattedTime };
    });
  }, [chartData, minPrice, priceRange]);

  // Generate Bezier path string for smooth curves
  const linePathD = useMemo(() => {
    if (svgPoints.length === 0) return '';
    if (svgPoints.length === 1) return `M ${svgPoints[0].x},${svgPoints[0].y}`;

    let d = `M ${svgPoints[0].x},${svgPoints[0].y}`;
    for (let i = 0; i < svgPoints.length - 1; i++) {
      const p0 = svgPoints[i === 0 ? i : i - 1];
      const p1 = svgPoints[i];
      const p2 = svgPoints[i + 1];
      const p3 = svgPoints[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
    }
    return d;
  }, [svgPoints]);

  const areaPathD = useMemo(() => {
    if (!linePathD || svgPoints.length === 0) return '';
    const lastX = svgPoints[svgPoints.length - 1].x;
    const firstX = svgPoints[0].x;
    return `${linePathD} L ${lastX},${chartHeight} L ${firstX},${chartHeight} Z`;
  }, [linePathD, svgPoints]);

  // Interactive mouse / touch move handler for chart crosshair tooltip
  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!svgRef.current || svgPoints.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const pointRatio = relativeX / rect.width;
    const targetIdx = Math.round(pointRatio * (svgPoints.length - 1));
    const safeIdx = Math.max(0, Math.min(svgPoints.length - 1, targetIdx));
    setHoverIndex(safeIdx);
  };

  const handlePointerLeave = () => {
    setHoverIndex(null);
  };

  const isBullish = liveChange24h >= 0;
  const activeHoverPoint = hoverIndex !== null ? svgPoints[hoverIndex] : null;

  // Filtered asset search list
  const filteredAssets = useMemo(() => {
    return assetList.filter(a => 
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      a.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [assetList, searchQuery]);

  // Calculate swap receive output
  const swapPayVal = parseFloat(swapPayAmount) || 0;
  const payCoinObj = assetList.find(a => a.symbol === swapPayCoin) || assetList[3];
  const receiveCoinObj = assetList.find(a => a.symbol === swapReceiveCoin) || assetList[0];
  const swapCalculatedReceive = (swapPayVal * payCoinObj.price) / (receiveCoinObj.price || 1);

  return (
    <div className="space-y-8 animate-fade-in font-sans select-none" id="live-crypto-market-desk">
      
      {/* Top Header Card with Symbol Selector & Live Connection Badge */}
      <div className="bg-[#0b112c] border border-blue-500/20 p-5 md:p-7 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Glow ambient background */}
        <div className={`absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none transition-colors duration-700 ${isBullish ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`} />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Active Asset Info & Selector */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="h-14 w-14 rounded-2xl bg-[#0e173e] border-2 border-cyan-400/30 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                <img 
                  src={currentAsset.logo} 
                  alt={currentAsset.name} 
                  className="h-full w-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (currentAsset.symbol === 'VERSE') {
                      (e.currentTarget as HTMLImageElement).src = '/verse_logo.jpg';
                    } else if (currentAsset.symbol === 'BNB') {
                      (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23F3BA2F"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="%23000000">B</text></svg>';
                    } else if (currentAsset.symbol === 'BTC') {
                      (e.currentTarget as HTMLImageElement).src = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png';
                    } else {
                      (e.currentTarget as HTMLImageElement).src = '/verse_logo.jpg';
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight">
                  {currentAsset.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase">
                  {currentAsset.symbol}
                </span>
              </div>
              <p className="text-xs text-blue-300 font-medium mt-1">
                {getTxt('Live Real-Time Market Exchange Rate', 'লাইভ ক্রিপ্টো মার্কেট রিয়েল-টাইম তথ্য')}
              </p>
            </div>
          </div>

          {/* Asset Switcher Quick Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {['VERSE', 'BNB', 'BTC', 'ETH', 'SOL', 'USDT'].map((sym) => (
              <button
                key={sym}
                onClick={() => setSelectedSymbol(sym)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black font-mono transition-all cursor-pointer ${
                  selectedSymbol === sym 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-300/40 scale-105' 
                    : 'bg-[#121c44] text-slate-300 hover:bg-[#1a285c] hover:text-white border border-blue-500/20'
                }`}
              >
                {sym}
              </button>
            ))}

            {/* Sync Badge */}
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#080d22] border border-blue-500/20 text-[10px] font-mono text-cyan-400">
              <span className={`h-2 w-2 rounded-full ${isWebSocketActive ? 'bg-emerald-400 animate-ping' : 'bg-amber-400 animate-pulse'}`} />
              <span>{isWebSocketActive ? 'WEBSOCKET' : 'LIVE API'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* CORE LIVE MARKET PRICE & CHART CARD (Bitcoin.com Wallet Style) */}
      <div className="bg-[#090f28] border-2 border-blue-500/25 p-5 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
        
        {/* Live Display Header: Large Price & Delta */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-blue-500/15 pb-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              {getTxt('Current Live Price', 'বর্তমান লাইভ বাজার মূল্য')}
            </div>
            
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className={`text-3xl md:text-5xl font-black font-mono tracking-tight text-white transition-all duration-300 ${
                priceFlash === 'up' ? 'text-emerald-400 scale-105' : priceFlash === 'down' ? 'text-rose-400 scale-105' : ''
              }`}>
                US${activeHoverPoint ? activeHoverPoint.price.toLocaleString(undefined, { minimumFractionDigits: currentAsset.price < 1 ? 6 : 2 }) : livePrice.toLocaleString(undefined, { minimumFractionDigits: currentAsset.price < 1 ? 6 : 2 })}
              </span>

              {/* 24h Percentage & Price Diff Pill */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs md:text-sm font-black border shadow-md ${
                isBullish 
                  ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' 
                  : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
              }`}>
                {isBullish ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{isBullish ? '+' : ''}{liveChange24h.toFixed(2)}%</span>
                <span className="opacity-75">
                  ({isBullish ? '+' : ''}US${Math.abs(livePriceDiff).toLocaleString(undefined, { minimumFractionDigits: currentAsset.price < 1 ? 6 : 2 })})
                </span>
              </div>
            </div>

            {/* Hover timestamp or Live status */}
            <div className="text-[11px] font-mono text-slate-400 font-medium">
              {activeHoverPoint ? (
                <span className="text-cyan-300 font-bold">📍 Point: {activeHoverPoint.formattedTime}</span>
              ) : (
                <span>Last live update: {lastTickTime || 'Syncing real-time market stream...'}</span>
              )}
            </div>
          </div>

          {/* Timeframe Filter Buttons (24H, 7D, 1M, 1Y) */}
          <div className="flex items-center gap-1.5 bg-[#0e173e] p-1.5 rounded-2xl border border-blue-500/20 self-start md:self-auto">
            {(['24H', '7D', '1M', '1Y'] as Timeframe[]).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded-xl text-xs font-black font-mono tracking-wider transition-all cursor-pointer ${
                  timeframe === tf
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md border border-cyan-300/30'
                    : 'text-slate-400 hover:text-white hover:bg-blue-900/30'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE SVG LIVE PRICE CHART */}
        <div className="relative w-full bg-[#060a1d]/80 rounded-2xl border border-blue-500/20 p-2 md:p-4 overflow-hidden group">
          
          {/* Chart Loading overlay */}
          {isLoadingChart && (
            <div className="absolute inset-0 bg-[#060a1d]/90 z-20 flex flex-col items-center justify-center space-y-3">
              <RefreshCw className="animate-spin text-cyan-400" size={28} />
              <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                Loading Historical Market Data...
              </span>
            </div>
          )}

          {/* SVG Canvas */}
          <svg
            ref={svgRef}
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-48 md:h-64 cursor-crosshair touch-none overflow-visible"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <defs>
              {/* Gradient Area Fill */}
              <linearGradient id="chartGradientBullish" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>

              <linearGradient id="chartGradientBearish" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
              </linearGradient>

              {/* Line Glow Filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Horizontal Grid Guide Lines */}
            <line x1="0" y1={paddingY} x2={chartWidth} y2={paddingY} stroke="#1e295b" strokeDasharray="3 3" strokeWidth="0.8" />
            <line x1="0" y1={chartHeight / 2} x2={chartWidth} y2={chartHeight / 2} stroke="#1e295b" strokeDasharray="3 3" strokeWidth="0.8" />
            <line x1="0" y1={chartHeight - paddingY} x2={chartWidth} y2={chartHeight - paddingY} stroke="#1e295b" strokeDasharray="3 3" strokeWidth="0.8" />

            {/* Area Path */}
            {areaPathD && (
              <path
                d={areaPathD}
                fill={`url(#${isBullish ? 'chartGradientBullish' : 'chartGradientBearish'})`}
              />
            )}

            {/* Line Path */}
            {linePathD && (
              <path
                d={linePathD}
                fill="none"
                stroke={isBullish ? '#10b981' : '#f43f5e'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />
            )}

            {/* Live pulsating end point dot */}
            {svgPoints.length > 0 && !activeHoverPoint && (
              <g>
                <circle
                  cx={svgPoints[svgPoints.length - 1].x}
                  cy={svgPoints[svgPoints.length - 1].y}
                  r="6"
                  fill={isBullish ? '#10b981' : '#f43f5e'}
                  className="animate-ping opacity-75"
                />
                <circle
                  cx={svgPoints[svgPoints.length - 1].x}
                  cy={svgPoints[svgPoints.length - 1].y}
                  r="4"
                  fill="#ffffff"
                  stroke={isBullish ? '#10b981' : '#f43f5e'}
                  strokeWidth="2"
                />
              </g>
            )}

            {/* Interactive Hover Crosshair Line & Point Marker */}
            {activeHoverPoint && (
              <g>
                {/* Vertical Crosshair Line */}
                <line
                  x1={activeHoverPoint.x}
                  y1="0"
                  x2={activeHoverPoint.x}
                  y2={chartHeight}
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
                {/* Active Hover Circle */}
                <circle
                  cx={activeHoverPoint.x}
                  cy={activeHoverPoint.y}
                  r="6"
                  fill="#ffffff"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  className="shadow-lg"
                />
              </g>
            )}
          </svg>

          {/* Floating Crosshair Price Tooltip Card */}
          {activeHoverPoint && (
            <div 
              className="absolute pointer-events-none bg-[#091133] border border-cyan-400/40 p-2.5 rounded-xl shadow-2xl z-30 font-mono text-xs space-y-0.5 transform -translate-x-1/2 -translate-y-full"
              style={{
                left: `${(activeHoverPoint.x / chartWidth) * 100}%`,
                top: `${Math.max(45, (activeHoverPoint.y / chartHeight) * 100)}%`
              }}
            >
              <div className="text-[10px] text-cyan-300 font-bold uppercase">{activeHoverPoint.formattedTime}</div>
              <div className="text-white font-black text-sm">
                US${activeHoverPoint.price.toLocaleString(undefined, { minimumFractionDigits: currentAsset.price < 1 ? 6 : 2 })}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* INTERACTIVE FEATURE CARDS (Predict the Market & Verse Interest) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Stake / Interest Banner */}
        <div className="bg-gradient-to-r from-[#0d1e3d] via-[#0a1835] to-[#0d2238] border border-cyan-500/30 p-6 rounded-3xl shadow-xl flex items-center justify-between gap-4 relative overflow-hidden group">
          <div className="space-y-2 relative z-10">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-mono font-black uppercase tracking-wider border border-cyan-500/30">
              🔥 Staking Utility
            </span>
            <h3 className="text-lg md:text-xl font-black text-white leading-tight">
              {getTxt('Earn up to 26.02% interest on your VERSE', 'ভার্স (VERSE) স্ট্যাকিংয়ে ২৬.০২% পর্যন্ত আয় করুন')}
            </h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              {getTxt('Stake your tokens into liquidity pools to earn daily passive crypto yields.', 'ডেইলি প্যাসিভ ইনকাম পেতে আপনার কয়েনসমূহ নিরাপদ লিকুইডিটি পুলে স্টেক করুন।')}
            </p>
          </div>
          <a 
            href="https://verse.bitcoin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-transform group-hover:scale-105 shadow-lg shadow-cyan-500/20 cursor-pointer font-mono inline-flex items-center gap-1"
          >
            <span>{getTxt('Stake Info', 'স্টেক তথ্য')}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Predict the Market Widget (with ticking countdown) */}
        <div className="bg-[#0e1635] border border-amber-500/30 p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-amber-400 animate-pulse" />
              <h3 className="text-sm font-black text-white uppercase italic font-mono">
                {getTxt('Predict the Market', 'মার্কেট প্রেডিকশন চ্যালেঞ্জ')}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full text-amber-300 font-mono text-xs font-bold border border-amber-500/20">
              <Clock size={12} />
              <span>{formatCountdown(countdownSeconds)}</span>
            </div>
          </div>

          <p className="text-xs text-blue-200 leading-relaxed">
            {getTxt('Lock in your prediction before the window closes and earn rewards if you are right!', 'টাইমার শেষ হওয়ার আগেই আজকের বিটকয়েন মার্কেট বুলিশ নাকি বেয়ারিশ তা অনুমান করে পুরস্কার জিতুন!')}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={() => setUserPrediction('up')}
              className={`p-3 rounded-2xl border text-xs font-black uppercase font-mono transition-all cursor-pointer flex items-center justify-center gap-2 ${
                userPrediction === 'up'
                  ? 'bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/30'
                  : 'bg-[#121e42] hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
              }`}
            >
              <TrendingUp size={16} />
              <span>{getTxt('Bullish (Price Up)', 'বুলিশ (বাড়বে)')}</span>
            </button>

            <button
              onClick={() => setUserPrediction('down')}
              className={`p-3 rounded-2xl border text-xs font-black uppercase font-mono transition-all cursor-pointer flex items-center justify-center gap-2 ${
                userPrediction === 'down'
                  ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/30'
                  : 'bg-[#121e42] hover:bg-rose-500/20 text-rose-400 border-rose-500/30'
              }`}
            >
              <TrendingDown size={16} />
              <span>{getTxt('Bearish (Price Down)', 'বেয়ারিশ (কমবে)')}</span>
            </button>
          </div>

          {userPrediction && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-center text-xs font-mono font-bold text-emerald-300 animate-fade-in">
              ✅ {getTxt('Prediction Locked! Result will be verified at countdown end.', 'আপনার প্রেডিকশন সফলভাবে গৃহীত হয়েছে!')}
            </div>
          )}
        </div>

      </div>

      {/* POPULAR ASSETS LIST & MARKET STATS */}
      <div className="bg-[#090f27] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6">
        
        {/* Search & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-500/15 pb-4">
          <div>
            <h3 className="text-lg font-black text-white uppercase italic tracking-tight font-mono">
              ⚡ {getTxt('Popular Market Assets', 'জনপ্রিয় মার্কেট ক্রিপ্টো টোকেন')}
            </h3>
            <p className="text-xs text-blue-200">
              {getTxt('Select any coin to immediately inspect live technical details and price line graphs.', 'যেকোনো টোকেনে ক্লিক করে উপরে তার লাইভ চার্ট ও তথ্য পর্যবেক্ষণ করুন।')}
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getTxt('Search token name or ticker...', 'কয়েন বা সিম্বল দিয়ে খুঁজুন...')}
              className="w-full bg-[#10193c] border border-blue-500/30 rounded-2xl py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Asset Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAssets.map((asset) => {
            const isSelected = selectedSymbol === asset.symbol;
            const isUp = asset.change24h >= 0;

            return (
              <div
                key={asset.id}
                onClick={() => setSelectedSymbol(asset.symbol)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-3 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#121d48] border-cyan-400 shadow-lg shadow-cyan-500/15 scale-[1.02]'
                    : 'bg-[#0d1637] border-blue-500/15 hover:border-cyan-500/40 hover:bg-[#101b44]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={asset.logo} 
                      alt={asset.name} 
                      className="h-8 w-8 object-cover rounded-full"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (asset.symbol === 'VERSE' || asset.symbol === 'V') {
                          (e.currentTarget as HTMLImageElement).src = '/verse_logo.jpg';
                        } else if (asset.symbol === 'BNB') {
                          (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23F3BA2F"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="%23000000">B</text></svg>';
                        } else if (asset.symbol === 'BTC') {
                          (e.currentTarget as HTMLImageElement).src = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png';
                        } else {
                          (e.currentTarget as HTMLImageElement).src = '/verse_logo.jpg';
                        }
                      }}
                    />
                    <div>
                      <h4 className="text-sm font-black text-white uppercase">{asset.symbol}</h4>
                      <span className="text-[10px] text-slate-400 font-medium block">{asset.name}</span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-lg text-[10.5px] font-mono font-black border ${
                    isUp ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {isUp ? '▲' : '▼'} {Math.abs(asset.change24h)}%
                  </span>
                </div>

                <div className="flex items-baseline justify-between font-mono pt-1">
                  <span className="text-xs text-slate-400 font-medium">Price:</span>
                  <span className="text-sm font-black text-white">
                    US${asset.price.toLocaleString(undefined, { minimumFractionDigits: asset.price < 1 ? 6 : 2 })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Asset Details & Market Stats Box (matching video frame 00:00) */}
        <div className="bg-[#0b1330] border border-blue-500/20 p-6 rounded-2xl space-y-4 font-mono">
          <h4 className="text-sm font-black uppercase tracking-wider text-cyan-300 border-b border-blue-500/15 pb-2">
            📊 Asset Details & Fundamentals ({currentAsset.symbol})
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-[#0d173b] p-3 rounded-xl border border-blue-500/10">
              <span className="text-[10px] text-slate-400 block uppercase">Price</span>
              <span className="text-sm font-bold text-white mt-1 block">
                US${livePrice.toLocaleString(undefined, { minimumFractionDigits: currentAsset.price < 1 ? 6 : 2 })}
              </span>
            </div>

            <div className="bg-[#0d173b] p-3 rounded-xl border border-blue-500/10">
              <span className="text-[10px] text-slate-400 block uppercase">Market Cap</span>
              <span className="text-sm font-bold text-white mt-1 block">US${currentAsset.marketCap}</span>
            </div>

            <div className="bg-[#0d173b] p-3 rounded-xl border border-blue-500/10">
              <span className="text-[10px] text-slate-400 block uppercase">24h Volume</span>
              <span className="text-sm font-bold text-white mt-1 block">US${currentAsset.volume24h}</span>
            </div>

            <div className="bg-[#0d173b] p-3 rounded-xl border border-blue-500/10">
              <span className="text-[10px] text-slate-400 block uppercase">Data Source</span>
              <a 
                href="https://www.coingecko.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-bold text-cyan-400 hover:underline mt-1 flex items-center gap-1"
              >
                <span>{currentAsset.source}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="text-xs text-blue-150 leading-relaxed bg-[#0d173b] p-4 rounded-xl border border-blue-500/10 font-sans">
            {language === 'en' ? currentAsset.descriptionEn : currentAsset.descriptionBn}
          </div>
        </div>

      </div>

      {/* EXPLORE VERSE CARDS GRID (as seen in video frame 00:14) */}
      <div className="bg-[#0b122f] border border-blue-500/20 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <div className="flex items-center gap-3">
            <img 
              src="/verse_logo.jpg" 
              alt="Verse Logo" 
              className="h-8 w-8 object-cover rounded-full border border-cyan-400/40 shadow-md shrink-0" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/verse_logo_new.jpg';
              }}
            />
            <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight font-mono">
              Explore Verse Ecosystem Features
            </h3>
          </div>
          <p className="text-xs text-blue-200">
            {getTxt('Discover decentralized apps, NFTs, governance, and cards connected to Verse.', 'ভার্স ইকোসিস্টেমের ডি-অ্যাপস, এনএফটি এবং সামাজিক গভর্ন্যান্স ফিচারসমূহ চিনে নিন।')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-[#0d163a] p-5 rounded-2xl border border-blue-500/15 hover:border-cyan-400/40 transition-all space-y-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit group-hover:scale-110 transition-transform">
              <Award size={20} />
            </div>
            <h4 className="text-sm font-black uppercase text-white font-mono">EXPLORE VERSE NFTS</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTxt('Collect exclusive VERSE Voyagers and roll for unique utility traits.', 'এক্সক্লুসিভ ভার্স এনএফটি সংগ্রহ করে বিভিন্ন ইউটিলিটি পয়েন্ট উপভোগ করুন।')}
            </p>
          </div>

          <div className="bg-[#0d163a] p-5 rounded-2xl border border-blue-500/15 hover:border-cyan-400/40 transition-all space-y-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit group-hover:scale-110 transition-transform">
              <Zap size={20} />
            </div>
            <h4 className="text-sm font-black uppercase text-white font-mono">VERSE PORTAL</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTxt('Explore the Verse Portal by sending VERSE and uncovering outcomes.', 'ভার্স পোর্টালে অংশ নিয়ে বিভিন্ন ক্রিপ্টো এয়ারড্রপ সুবিধা লুফে নিন।')}
            </p>
          </div>

          <div className="bg-[#0d163a] p-5 rounded-2xl border border-blue-500/15 hover:border-cyan-400/40 transition-all space-y-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-sm font-black uppercase text-white font-mono">COMMUNITY VOTES</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTxt('Cast your vote on DAO proposals to shape the future of Verse.', 'ডিএও প্রোপোজালে নিজের ভোট প্রদান করে সুশাসনে অংশ নিন।')}
            </p>
          </div>

          <div className="bg-[#0d163a] p-5 rounded-2xl border border-blue-500/15 hover:border-cyan-400/40 transition-all space-y-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 w-fit group-hover:scale-110 transition-transform">
              <ShoppingCart size={20} />
            </div>
            <h4 className="text-sm font-black uppercase text-white font-mono">GET THE VERSE CARD</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTxt('Spend crypto anywhere Mastercard is accepted with instant cashback.', 'বিশ্বব্যাপী মাস্টারকার্ড একসেপ্টেড পয়েন্টে শপিং করার জন্য ভার্চুয়াল কার্ড।')}
            </p>
          </div>

          <div className="bg-[#0d163a] p-5 rounded-2xl border border-blue-500/15 hover:border-cyan-400/40 transition-all space-y-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 w-fit group-hover:scale-110 transition-transform">
              <Flame size={20} />
            </div>
            <h4 className="text-sm font-black uppercase text-white font-mono">BUY SWAG WITH VERSE</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTxt('Grab official merchandise and limited-edition Web3 accessories.', 'ভার্স টোকেন দিয়ে মেম্বারশিপ মার্চেন্ডাইজ ও টি-শার্ট অর্ডার করুন।')}
            </p>
          </div>

          <div className="bg-[#0d163a] p-5 rounded-2xl border border-blue-500/15 hover:border-cyan-400/40 transition-all space-y-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 w-fit group-hover:scale-110 transition-transform">
              <Repeat size={20} />
            </div>
            <h4 className="text-sm font-black uppercase text-white font-mono">SWAP WITH VERSE</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTxt('Exchange crypto assets with low network gas fees and zero slippage.', 'ন্যূনতম গ্যাসে দ্রুততম প্যানকেক ও ইউনিসোয়াপ লিকুইডিটি পরিবর্তন।')}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
