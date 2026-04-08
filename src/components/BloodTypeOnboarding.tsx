import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bloodTypeResults } from '../data/bloodType';
import type { BloodTypeResult, Mode } from '../data/types';

export function BloodTypeOnboarding() {
  const [selected, setSelected] = useState<BloodTypeResult | null>(null);
  const [mode, setMode] = useState<Mode>('pokapoka');
  const [revealed, setRevealed] = useState(false);

  const isChiku = mode === 'chikuchiku';

  // Blood type selection screen
  if (!selected) {
    return (
      <div className="flex min-h-dvh flex-col bg-poka-bg px-6 pt-16 pb-8">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-4xl">🩸</span>
          <h2 className="mb-2 text-2xl font-black text-gray-800">
            血液型で体験
          </h2>
          <p className="text-sm text-gray-500">
            あなたの血液型をタップしてください
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-xs grid-cols-2 gap-4">
          {bloodTypeResults.map((bt, i) => (
            <motion.button
              key={bt.id}
              onClick={() => setSelected(bt)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
              whileTap={{ scale: 0.92 }}
              className="relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 transition-shadow active:shadow-xl"
            >
              <span className="text-4xl font-black text-gray-800">{bt.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="mt-auto pt-8 text-center">
          <a href="/" className="text-xs font-bold text-gray-400">← トップに戻る</a>
        </div>
      </div>
    );
  }

  // Result screen
  const currentData = selected[mode];

  return (
    <div
      className="flex min-h-dvh flex-col px-6 pt-12 pb-8 transition-colors duration-500"
      style={{ background: isChiku ? '#0d0d1a' : '#fff5f0' }}
    >
      {/* Back */}
      <div className="mb-6">
        <button
          onClick={() => { setSelected(null); setMode('pokapoka'); setRevealed(false); }}
          className={`text-xs font-bold ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
        >
          ← 選び直す
        </button>
      </div>

      {/* Blood type label */}
      <div className="mb-6 text-center">
        <span className={`inline-block rounded-full px-4 py-1 text-sm font-bold ${
          isChiku ? 'bg-chiku-400/10 text-chiku-400' : 'bg-poka-200/50 text-poka-500'
        }`}>
          {selected.label}のあなたは…
        </span>
      </div>

      {/* Result card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto w-full max-w-sm rounded-3xl p-8 text-center shadow-2xl ${
            isChiku
              ? 'bg-chiku-200 ring-1 ring-chiku-400/20'
              : 'bg-white ring-1 ring-poka-200/30'
          }`}
        >
          <motion.h3
            className={`mb-4 text-3xl font-black leading-tight ${
              isChiku ? 'text-chiku-400' : 'text-poka-500'
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {currentData.title}
          </motion.h3>
          <motion.p
            className={`text-sm leading-relaxed ${
              isChiku ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {currentData.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-center gap-3">
        {!revealed ? (
          <motion.button
            onClick={() => { setMode('chikuchiku'); setRevealed(true); }}
            whileTap={{ scale: 0.96 }}
            className="w-full cursor-pointer rounded-2xl bg-gray-900 px-6 py-4 text-center font-bold text-white shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            🌵 本音バージョンを見る？
          </motion.button>
        ) : (
          <>
            <button
              onClick={() => setMode(isChiku ? 'pokapoka' : 'chikuchiku')}
              className={`w-full cursor-pointer rounded-2xl px-6 py-4 text-center font-bold shadow-md transition-all ${
                isChiku
                  ? 'bg-poka-400 text-white'
                  : 'bg-chiku-100 text-chiku-400'
              }`}
            >
              {isChiku ? '🌸 ぽかぽかに切替' : '🌵 チクチクに切替'}
            </button>
            <a
              href="/test"
              className={`w-full rounded-2xl px-6 py-4 text-center font-bold shadow-lg transition-all ${
                isChiku
                  ? 'pulse-glow-green bg-chiku-400 text-chiku-100'
                  : 'pulse-glow bg-poka-500 text-white'
              }`}
            >
              本編の診断へ進む →
            </a>
          </>
        )}
      </div>
    </div>
  );
}
