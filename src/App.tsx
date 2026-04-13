/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Trophy, Users, Play, RotateCcw, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScoreEntry {
  name: string;
  score: number;
}

const GAME_WIDTH = 300;
const GAME_HEIGHT = 400;
const PLAYER_SIZE = 30;
const OBSTACLE_SIZE = 30;
const MOVE_STEP = 30;

export default function App() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameOver'>('idle');
  const [score, setScore] = useState(0);
  const [playerX, setPlayerX] = useState(135);
  const [obstacles, setObstacles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);
  const [visits, setVisits] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);

  const gameLoopRef = useRef<number | null>(null);
  const lastObstacleTimeRef = useRef(0);
  const obstacleIdRef = useRef(0);
  const scoreIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load initial data
  useEffect(() => {
    const savedScores = localStorage.getItem('scores');
    if (savedScores) {
      setLeaderboard(JSON.parse(savedScores));
    }

    const savedVisits = parseInt(localStorage.getItem('visits') || '0', 10);
    const newVisits = savedVisits + 1;
    localStorage.setItem('visits', newVisits.toString());
    setVisits(newVisits);
  }, []);

  const saveScore = useCallback((name: string, finalScore: number) => {
    const currentScores: ScoreEntry[] = JSON.parse(localStorage.getItem('scores') || '[]');
    const newScores = [...currentScores, { name, score: finalScore }]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    localStorage.setItem('scores', JSON.stringify(newScores));
    setLeaderboard(newScores);
  }, []);

  const gameOver = useCallback(() => {
    setGameState('gameOver');
    setShowNamePrompt(true);
    if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    if (scoreIntervalRef.current) clearInterval(scoreIntervalRef.current);
  }, []);

  const updateGame = useCallback((time: number) => {
    if (gameState !== 'playing') return;

    // Spawn obstacles
    if (time - lastObstacleTimeRef.current > 1500) {
      const newX = Math.floor(Math.random() * (GAME_WIDTH / OBSTACLE_SIZE)) * OBSTACLE_SIZE;
      setObstacles(prev => [...prev, { id: obstacleIdRef.current++, x: newX, y: -OBSTACLE_SIZE }]);
      lastObstacleTimeRef.current = time;
    }

    // Move obstacles and check collisions
    setObstacles(prev => {
      const next = prev
        .map(obs => ({ ...obs, y: obs.y + 5 }))
        .filter(obs => obs.y < GAME_HEIGHT);

      // Collision detection
      const collision = next.find(obs => 
        obs.y > GAME_HEIGHT - PLAYER_SIZE - 20 && // Player is at bottom: 10px from bottom
        obs.y < GAME_HEIGHT - 10 &&
        obs.x === playerX
      );

      if (collision) {
        gameOver();
      }

      return next;
    });

    gameLoopRef.current = requestAnimationFrame(updateGame);
  }, [gameState, playerX, gameOver]);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(updateGame);
      scoreIntervalRef.current = setInterval(() => {
        setScore(s => s + 1);
      }, 1000);
    }
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
      if (scoreIntervalRef.current) clearInterval(scoreIntervalRef.current);
    };
  }, [gameState, updateGame]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameState !== 'playing') return;
    if (e.key === 'ArrowLeft') {
      setPlayerX(prev => Math.max(0, prev - MOVE_STEP));
    } else if (e.key === 'ArrowRight') {
      setPlayerX(prev => Math.min(GAME_WIDTH - PLAYER_SIZE, prev + MOVE_STEP));
    }
  }, [gameState]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const startGame = () => {
    setScore(0);
    setPlayerX(135);
    setObstacles([]);
    setGameState('playing');
    lastObstacleTimeRef.current = performance.now();
  };

  const submitScore = () => {
    if (playerName.trim()) {
      saveScore(playerName.trim(), score);
      setShowNamePrompt(false);
      setPlayerName('');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center py-8 px-4 font-sans selection:bg-yellow-400 selection:text-black">
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-black tracking-tighter mb-6 flex items-center gap-2 italic uppercase"
      >
        🏃 Verse Temple Run
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Left Column: Stats & Links */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4 text-neutral-400">
              <Users size={20} />
              <h3 className="text-sm font-bold uppercase tracking-widest">Community</h3>
            </div>
            <p className="text-neutral-500 text-sm mb-4">Join our group to stay updated with new features and challenges!</p>
            <a 
              href="https://t.me/GetVerse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-600 hover:bg-cyan-500 transition-colors rounded-xl font-bold text-sm"
            >
              Join Our Group <ExternalLink size={16} />
            </a>
            <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-neutral-500 text-xs uppercase tracking-tighter">Total Visitors</span>
              <span className="text-2xl font-mono font-bold text-cyan-400">{visits.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Center Column: Game Area */}
        <div className="flex flex-col items-center order-1 lg:order-2">
          <div className="relative mb-6">
            <div 
              id="gameArea"
              className="bg-neutral-900 rounded-2xl border-4 border-neutral-800 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
              style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
            >
              {/* Player */}
              <motion.div 
                animate={{ left: playerX }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute bottom-[10px] bg-yellow-400 rounded-sm shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                style={{ width: PLAYER_SIZE, height: PLAYER_SIZE }}
              />

              {/* Obstacles */}
              {obstacles.map(obs => (
                <div 
                  key={obs.id}
                  className="absolute bg-red-500 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                  style={{ 
                    width: OBSTACLE_SIZE, 
                    height: OBSTACLE_SIZE, 
                    left: obs.x, 
                    top: obs.y 
                  }}
                />
              ))}

              {/* Overlays */}
              <AnimatePresence>
                {gameState === 'idle' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-black shadow-lg shadow-yellow-400/20">
                      <Play size={32} fill="currentColor" />
                    </div>
                    <h2 className="text-2xl font-black mb-2 italic uppercase">Ready to Run?</h2>
                    <p className="text-neutral-400 text-sm mb-6">Use Arrow Keys to dodge the red obstacles.</p>
                    <button 
                      onClick={startGame}
                      className="px-8 py-3 bg-white text-black font-black rounded-full hover:scale-105 transition-transform uppercase tracking-tighter"
                    >
                      Start Game
                    </button>
                  </motion.div>
                )}

                {gameState === 'gameOver' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-red-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
                  >
                    <h2 className="text-4xl font-black mb-2 italic uppercase text-red-500">Game Over</h2>
                    <div className="text-6xl font-black mb-6 font-mono">{score}</div>
                    
                    {showNamePrompt ? (
                      <div className="w-full space-y-3">
                        <input 
                          type="text" 
                          placeholder="Enter your name"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-center focus:outline-none focus:border-red-500"
                          autoFocus
                          onKeyDown={(e) => e.key === 'Enter' && submitScore()}
                        />
                        <button 
                          onClick={submitScore}
                          className="w-full py-3 bg-white text-black font-black rounded-xl uppercase tracking-tighter"
                        >
                          Save Score
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={startGame}
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black font-black rounded-full hover:scale-105 transition-transform uppercase tracking-tighter"
                      >
                        <RotateCcw size={20} /> Try Again
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile Controls */}
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
              <button 
                onMouseDown={() => setPlayerX(prev => Math.max(0, prev - MOVE_STEP))}
                className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center active:bg-neutral-700 active:scale-95 transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onMouseDown={() => setPlayerX(prev => Math.min(GAME_WIDTH - PLAYER_SIZE, prev + MOVE_STEP))}
                className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center active:bg-neutral-700 active:scale-95 transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="text-neutral-500 text-xs uppercase tracking-[0.2em] mb-1">Current Score</div>
            <div className="text-5xl font-black font-mono tracking-tighter">{score}</div>
          </div>
        </div>

        {/* Right Column: Leaderboard */}
        <div className="order-3">
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                <Trophy size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Top 10 Legends</h3>
            </div>
            
            <div className="space-y-2">
              {leaderboard.length > 0 ? (
                leaderboard.map((entry, i) => (
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className={`flex items-center justify-between p-3 rounded-xl border ${i === 0 ? 'bg-yellow-400/5 border-yellow-400/20' : 'bg-black/20 border-white/5'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 text-xs font-bold font-mono ${i === 0 ? 'text-yellow-400' : 'text-neutral-600'}`}>
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`font-bold ${i === 0 ? 'text-white' : 'text-neutral-300'}`}>{entry.name}</span>
                    </div>
                    <span className={`font-mono font-bold ${i === 0 ? 'text-yellow-400' : 'text-neutral-500'}`}>{entry.score}</span>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 text-neutral-600 italic text-sm">
                  No scores yet. Be the first!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-neutral-600 text-[10px] uppercase tracking-[0.3em] font-bold">
        &copy; 2026 Verse Temple Run &bull; Built with React & Tailwind
      </footer>
    </div>
  );
}
