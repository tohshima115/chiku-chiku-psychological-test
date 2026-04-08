import type { BloodTypeResult } from './types';

export const bloodTypeResults: BloodTypeResult[] = [
  {
    id: 'a',
    label: 'A型',
    pokapoka: {
      title: '几帳面で真面目なしっかり者',
      description: '計画的に物事を進め、周囲からの信頼も厚いあなた。細やかな気配りができ、チームの中では欠かせない存在です。',
    },
    chikuchiku: {
      title: '神経質',
      description: '細かいことが気になって仕方ない。他人のやり方が雑に見えてイライラしがち。周りもちょっと疲れてる。',
    },
  },
  {
    id: 'b',
    label: 'B型',
    pokapoka: {
      title: 'マイペースで自由な開拓者',
      description: '自分の信じた道を突き進む情熱家。型にはまらない発想で、周囲に新しい風を吹き込みます。',
    },
    chikuchiku: {
      title: '自分勝手',
      description: '周りの都合は基本見えてない。協調性という概念が辞書にない。本人だけ楽しそう。',
    },
  },
  {
    id: 'o',
    label: 'O型',
    pokapoka: {
      title: 'おおらかなリーダー気質',
      description: '懐が深く、人をまとめる力があるあなた。どんな状況でも動じない安定感が魅力です。',
    },
    chikuchiku: {
      title: '雑',
      description: '細かいことは気にしない、というか気づいてない。「まあいっか」が口癖。書類の誤字は数えきれない。',
    },
  },
  {
    id: 'ab',
    label: 'AB型',
    pokapoka: {
      title: '天才肌のミステリアス',
      description: '独自の感性で周囲を魅了する不思議な存在。多角的な視点を持ち、誰も思いつかない解決策を見出します。',
    },
    chikuchiku: {
      title: '何考えてるかわからない',
      description: '言ってることとやってることが違う。本人もたぶんわかってない。周囲は常に困惑している。',
    },
  },
];
