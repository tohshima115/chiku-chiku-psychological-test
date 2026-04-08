import { motion } from 'framer-motion';
import type { Mode } from '../data/types';

interface Props {
  mode: Mode;
  onToggle: () => void;
  size?: 'sm' | 'md';
}

export function ModeToggle({ mode, onToggle, size = 'sm' }: Props) {
  const isChiku = mode === 'chikuchiku';
  const isMd = size === 'md';

  return (
    <button
      onClick={onToggle}
      className={`
        relative flex items-center rounded-full transition-all duration-500 cursor-pointer
        ${isMd ? 'h-12 w-[200px]' : 'h-10 w-[170px]'}
        ${isChiku
          ? 'bg-chiku-100 shadow-[0_0_20px_rgba(0,230,118,0.15)]'
          : 'bg-poka-100 shadow-[0_0_20px_rgba(255,138,101,0.15)]'
        }
      `}
    >
      {/* Sliding pill */}
      <motion.div
        className={`
          absolute top-1 rounded-full
          ${isMd ? 'h-10 w-[98px]' : 'h-8 w-[83px]'}
          ${isChiku ? 'bg-chiku-400' : 'bg-poka-400'}
        `}
        animate={{ x: isChiku ? (isMd ? 98 : 83) : 4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />

      {/* Labels */}
      <div className="relative z-10 flex w-full">
        <motion.span
          className={`flex flex-1 items-center justify-center gap-1 font-bold ${isMd ? 'text-sm' : 'text-xs'}`}
          animate={{ color: isChiku ? 'rgba(255,255,255,0.4)' : '#ffffff' }}
        >
          🌸 ぽかぽか
        </motion.span>
        <motion.span
          className={`flex flex-1 items-center justify-center gap-1 font-bold ${isMd ? 'text-sm' : 'text-xs'}`}
          animate={{ color: isChiku ? '#ffffff' : 'rgba(0,0,0,0.3)' }}
        >
          🌵 チクチク
        </motion.span>
      </div>
    </button>
  );
}
