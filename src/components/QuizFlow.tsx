import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import { emptyScores, addScores, determineType } from '../data/scoring';
import { ModeToggle } from './ModeToggle';
import type { Mode, Scores } from '../data/types';

export function QuizFlow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(emptyScores());
  const [mode, setMode] = useState<Mode>('pokapoka');
  const [history, setHistory] = useState<Scores[]>([]);
  const [direction, setDirection] = useState<1 | -1>(1);

  const question = questions[currentIndex];
  const modeData = question[mode];
  const progress = ((currentIndex) / questions.length) * 100;
  const isChiku = mode === 'chikuchiku';

  function handleChoice(choiceIndex: number) {
    const choice = modeData.choices[choiceIndex];
    const newScores = addScores(scores, choice.scores);

    setHistory([...history, scores]);
    setScores(newScores);
    setDirection(1);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const result = determineType(newScores);
      const modeParam = mode === 'chikuchiku' ? 'chiku' : 'poka';
      window.location.href = `/result/${result.id}?mode=${modeParam}`;
    }
  }

  function handleBack() {
    if (history.length === 0) return;
    setScores(history[history.length - 1]);
    setHistory(history.slice(0, -1));
    setDirection(-1);
    setCurrentIndex(currentIndex - 1);
  }

  return (
    <div
      className="flex min-h-dvh flex-col transition-colors duration-500"
      style={{ background: isChiku ? '#0d0d1a' : '#fff5f0' }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-30 px-4 pt-4 pb-2" style={{ background: isChiku ? '#0d0d1a' : '#fff5f0' }}>
        <div className="mb-3 flex items-center justify-between">
          {currentIndex > 0 ? (
            <button
              onClick={handleBack}
              className={`cursor-pointer text-xs font-bold transition-colors ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
            >
              ← 前の質問
            </button>
          ) : (
            <a
              href="/"
              className={`text-xs font-bold transition-colors ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
            >
              ✕ やめる
            </a>
          )}
          <ModeToggle mode={mode} onToggle={() => setMode(mode === 'pokapoka' ? 'chikuchiku' : 'pokapoka')} />
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200/20">
            <motion.div
              className="h-full rounded-full"
              style={{ background: isChiku ? '#00e676' : '#ff8a65' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span
            className={`shrink-0 text-xs font-bold tabular-nums ${isChiku ? 'text-chiku-400' : 'text-poka-400'}`}
          >
            {currentIndex + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Question area */}
      <div className="flex flex-1 flex-col px-5 pt-6 pb-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, y: direction * 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-1 flex-col"
          >
            {/* Question number badge */}
            <div
              className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-colors duration-300 ${
                isChiku ? 'bg-chiku-400/10 text-chiku-400' : 'bg-poka-400/15 text-poka-500'
              }`}
            >
              <span>{isChiku ? '🌵' : '🌸'}</span>
              Q{currentIndex + 1}
            </div>

            {/* Question text */}
            <h2
              className={`mb-8 text-xl font-black leading-relaxed transition-colors duration-300 ${
                isChiku ? 'text-white' : 'text-gray-800'
              }`}
            >
              {modeData.text}
            </h2>

            {/* Choices */}
            <div className="mt-auto flex flex-col gap-3">
              {modeData.choices.map((choice, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleChoice(i)}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-left text-[15px] font-bold
                    transition-all duration-200 cursor-pointer active:brightness-95
                    ${isChiku
                      ? 'bg-white/5 text-gray-200 ring-1 ring-white/10 active:bg-chiku-400/10 active:ring-chiku-400/30'
                      : 'bg-white text-gray-700 shadow-sm ring-1 ring-gray-100 active:bg-poka-50 active:ring-poka-300'
                    }
                  `}
                >
                  <span className={`shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-black transition-colors duration-300 ${
                    isChiku ? 'bg-white/10 text-chiku-400' : 'bg-poka-100 text-poka-500'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{choice.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
