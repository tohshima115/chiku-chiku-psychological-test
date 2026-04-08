import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';
import { ShareButton } from './ShareButton';
import type { Mode, ResultType } from '../data/types';

interface Props {
  resultType: ResultType;
  initialMode: Mode;
}

export function Result({ resultType, initialMode }: Props) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const data = resultType[mode];
  const isChiku = mode === 'chikuchiku';

  return (
    <div
      className="flex min-h-dvh flex-col transition-colors duration-500"
      style={{ background: isChiku ? '#0d0d1a' : '#fff5f0' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <a
          href="/"
          className={`text-xs font-bold ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
        >
          ← トップ
        </a>
        <ModeToggle
          mode={mode}
          onToggle={() => setMode(mode === 'pokapoka' ? 'chikuchiku' : 'pokapoka')}
        />
      </div>

      {/* Result area */}
      <div className="flex flex-1 flex-col items-center px-5 pt-8 pb-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-2 text-xs font-bold ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
        >
          あなたのタイプは…
        </motion.div>

        {/* Main result card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full max-w-sm rounded-3xl p-8 text-center shadow-2xl ${
              isChiku
                ? 'bg-chiku-200 ring-1 ring-chiku-400/20'
                : 'bg-white ring-1 ring-poka-200/40'
            }`}
          >
            {/* Emoji accent */}
            <motion.div
              className="mb-3 text-4xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
            >
              {isChiku ? '🌵' : '🌸'}
            </motion.div>

            {/* Title */}
            <motion.h2
              className={`mb-4 text-[1.75rem] font-black leading-tight ${
                isChiku ? 'text-chiku-400' : 'text-poka-500'
              }`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {data.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className={`mb-6 text-sm leading-relaxed ${
                isChiku ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              {data.description}
            </motion.p>

            {/* Advice box */}
            <motion.div
              className={`rounded-2xl p-4 ${
                isChiku ? 'bg-white/5' : 'bg-poka-50'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <p className={`mb-1.5 text-[10px] font-black tracking-wider uppercase ${
                isChiku ? 'text-chiku-400/60' : 'text-poka-400'
              }`}>
                {isChiku ? '💀 忠告' : '💡 アドバイス'}
              </p>
              <p className={`text-[13px] leading-relaxed ${
                isChiku ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {data.advice}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Comparison strip */}
        <motion.div
          className="mt-5 grid w-full max-w-sm grid-cols-2 gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={`rounded-2xl p-3.5 text-center ${
            !isChiku ? 'bg-white ring-2 ring-poka-300 shadow-sm' : 'bg-white/5 ring-1 ring-white/10'
          }`}>
            <p className={`mb-0.5 text-[10px] font-bold ${!isChiku ? 'text-poka-400' : 'text-gray-500'}`}>
              🌸 ぽかぽか
            </p>
            <p className={`text-sm font-black ${!isChiku ? 'text-poka-500' : 'text-gray-400'}`}>
              {resultType.pokapoka.title}
            </p>
          </div>
          <div className={`rounded-2xl p-3.5 text-center ${
            isChiku ? 'bg-chiku-200 ring-2 ring-chiku-400/40 shadow-sm' : 'bg-gray-50 ring-1 ring-gray-100'
          }`}>
            <p className={`mb-0.5 text-[10px] font-bold ${isChiku ? 'text-chiku-400' : 'text-gray-400'}`}>
              🌵 チクチク
            </p>
            <p className={`text-sm font-black ${isChiku ? 'text-chiku-400' : 'text-gray-600'}`}>
              {resultType.chikuchiku.title}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom actions */}
      <div className="sticky bottom-0 bg-gradient-to-t from-transparent px-5 pt-2 pb-8">
        <div className="mx-auto flex max-w-sm flex-col gap-3">
          <ShareButton resultType={resultType} mode={mode} />
          <div className="flex justify-center gap-6">
            <a
              href="/test"
              className={`text-xs font-bold ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
            >
              もう一度診断する
            </a>
            <a
              href="/"
              className={`text-xs font-bold ${isChiku ? 'text-gray-500' : 'text-gray-400'}`}
            >
              トップに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
