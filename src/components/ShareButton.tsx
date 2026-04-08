import { motion } from 'framer-motion';
import type { Mode, ResultType } from '../data/types';

interface Props {
  resultType: ResultType;
  mode: Mode;
}

export function ShareButton({ resultType, mode }: Props) {
  const pokaTitle = resultType.pokapoka.title;
  const chikuTitle = resultType.chikuchiku.title;
  const isChiku = mode === 'chikuchiku';

  const text =
    mode === 'chikuchiku'
      ? `チクチク心理テストの結果は\n\n🌵【${chikuTitle}】\n\nでした（ぽかぽか版：${pokaTitle}）\nあなたもやってみて👇`
      : `チクチク心理テストの結果は\n\n🌸【${pokaTitle}】\n\nでした（チクチク版：${chikuTitle}）\nあなたもやってみて👇`;

  const modeParam = mode === 'chikuchiku' ? 'chiku' : 'poka';
  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/result/${resultType.id}?mode=${modeParam}`;

  const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <motion.a
      href={xUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.96 }}
      className={`
        flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4
        font-bold shadow-lg transition-all cursor-pointer
        ${isChiku
          ? 'bg-white text-gray-900'
          : 'bg-gray-900 text-white'
        }
      `}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      Xでシェアする
    </motion.a>
  );
}
