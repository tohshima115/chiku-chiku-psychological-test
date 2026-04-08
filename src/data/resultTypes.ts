import type { ResultType, ScoreAxis } from './types';

export const resultTypes: ResultType[] = [
  {
    id: 'philosopher',
    pattern: { sociability: 'low', planning: 'low', sensitivity: 'high', assertiveness: 'low' },
    pokapoka: {
      title: '思慮深い哲学者',
      description: '深い洞察力を持ち、物事の本質を見抜くあなた。一人の時間を大切にし、じっくり考えることで独自の視点を育てています。周囲があなたの言葉にハッとさせられることも多いはず。',
      advice: 'あなたの深い思考は大きな武器です。時には直感を信じて一歩踏み出してみると、新しい世界が広がりますよ。',
    },
    chikuchiku: {
      title: '考えすぎて動けない人',
      description: 'ずっと考えてるけど何も始まらない。頭の中だけ忙しくて、外から見ると何もしてない人。「深い」んじゃなくて「遅い」だけ。',
      advice: '考えるのはもういいから動け。完璧なタイミングは一生来ない。',
    },
  },
  {
    id: 'commander',
    pattern: { sociability: 'high', planning: 'high', sensitivity: 'low', assertiveness: 'high' },
    pokapoka: {
      title: '頼れる司令官',
      description: '明確なビジョンと実行力で周囲を導くリーダー。計画を立て、人を動かし、確実に成果を出すあなたは、どんなチームでも中心的な存在になれます。',
      advice: 'あなたのリーダーシップは周囲に安心感を与えています。時にはメンバーの声にも耳を傾けて、チーム全体の力を引き出してみてください。',
    },
    chikuchiku: {
      title: '仕切りたがりの独裁者',
      description: '人の話を聞かずに仕切り始める。本人は「リーダーシップ」と呼んでるけど、周りは「また始まった」と思ってる。反論すると不機嫌になるのでみんな黙ってるだけ。',
      advice: '「俺についてこい」じゃなくて一回黙って人の話聞いてみ。ついてきてるんじゃなくて諦めてるだけだから。',
    },
  },
  {
    id: 'diplomat',
    pattern: { sociability: 'high', planning: 'low', sensitivity: 'high', assertiveness: 'low' },
    pokapoka: {
      title: '心優しい調停者',
      description: '誰とでも打ち解け、場の空気を和ませる天才。共感力が高く、相手の気持ちを自然と察することができるあなたは、人間関係の潤滑油のような存在です。',
      advice: '周囲への気配りは素晴らしい才能です。でも、自分の気持ちも大切にしてくださいね。あなたが笑顔でいることが一番大切です。',
    },
    chikuchiku: {
      title: '八方美人',
      description: 'みんなにいい顔して結局誰の味方でもない。「わかるー」が口癖だけど本当にわかってるか怪しい。自分の意見を聞かれると急にフリーズする。',
      advice: '全員に好かれようとするのやめたら？嫌われる勇気以前に、そもそも自分の意見を持て。',
    },
  },
  {
    id: 'strategist',
    pattern: { sociability: 'low', planning: 'high', sensitivity: 'low', assertiveness: 'high' },
    pokapoka: {
      title: '冷静な戦略家',
      description: '論理的に最善の道を選び、着実に成果を出すあなた。感情に流されず、客観的に物事を分析できる力は、ビジネスでも私生活でも大きな武器です。',
      advice: 'あなたの分析力は頼りにされています。たまには論理を脇に置いて、直感や感情に身を任せてみるのも新しい発見につながりますよ。',
    },
    chikuchiku: {
      title: '冷たい計算機',
      description: '効率のことしか考えてないから一緒にいて楽しくない。人の気持ちをExcelで管理してそう。「合理的に考えて」が口癖だけど、その合理性に人間味はない。',
      advice: '効率だけ追い求めた結果、友達いなくなっても「合理的」って言えるか？たまには無駄話でもしてみろ。',
    },
  },
  {
    id: 'adventurer',
    pattern: { sociability: 'high', planning: 'low', sensitivity: 'low', assertiveness: 'high' },
    pokapoka: {
      title: '自由な冒険家',
      description: '好奇心旺盛でどんな環境でも楽しめるチャレンジャー。行動力とポジティブさで周囲にエネルギーを与え、どんな困難も楽しみに変えてしまう力があります。',
      advice: 'あなたの行動力は周りを巻き込むパワーがあります。時には立ち止まって振り返ることで、冒険がもっと豊かになりますよ。',
    },
    chikuchiku: {
      title: '飽き性の逃げ足職人',
      description: '新しいことに飛びつくけど続いた試しがない。「経験豊富」じゃなくて「何一つ極めてない」が正しい。逃げるスピードだけは一流。',
      advice: '一個くらい最後までやり遂げてみたら？「自分探し」はもう見つかってるよ、飽き性の自分が。',
    },
  },
  {
    id: 'guardian',
    pattern: { sociability: 'low', planning: 'high', sensitivity: 'high', assertiveness: 'low' },
    pokapoka: {
      title: '誠実な守護者',
      description: '大切な人を静かに見守り、支える縁の下の力持ち。責任感が強く、約束を必ず守るあなたは、周囲から絶大な信頼を寄せられています。',
      advice: '献身的なあなたの姿は多くの人の支えになっています。自分のことも大切にする時間を作ってくださいね。',
    },
    chikuchiku: {
      title: '心配性のお節介',
      description: '頼まれてないのに心配して、頼まれてないアドバイスをする。善意の押し売り専門店。相手がうんざりしてるのに気づかない（感受性高いはずなのに）。',
      advice: '心配する暇があったら自分の心配しろ。あと「あなたのためを思って」は大体あなたのため。',
    },
  },
  {
    id: 'performer',
    pattern: { sociability: 'high', planning: 'low', sensitivity: 'high', assertiveness: 'high' },
    pokapoka: {
      title: '輝くエンターテイナー',
      description: 'カリスマ性と表現力で周囲を魅了する太陽のような人。感受性豊かでありながら堂々と自分を表現できるあなたは、どんな場でも主役になれる輝きを持っています。',
      advice: 'あなたの魅力は人を元気にする力があります。時には脇役に回って、他の人のステージも楽しんでみてはいかがでしょう。',
    },
    chikuchiku: {
      title: '注目されたいだけの人',
      description: '常に主役でいたい。会話のハイジャックが得意技。人の話を聞いてるフリして次に自分が何を言うか考えてる。SNSの投稿頻度が物語ってる。',
      advice: '5分間黙ってみ。世界は回ってるから。お前がいなくても。',
    },
  },
  {
    id: 'craftsman',
    pattern: { sociability: 'low', planning: 'high', sensitivity: 'low', assertiveness: 'low' },
    pokapoka: {
      title: '職人気質の完璧主義者',
      description: 'こだわりを持って質の高い成果を生み出す匠。妥協を許さず、細部まで丁寧に仕上げるあなたの仕事は、周囲から高い評価を受けています。',
      advice: 'あなたのこだわりは素晴らしい武器です。「完璧」の基準を少しだけ緩めると、もっと多くの作品を世に送り出せますよ。',
    },
    chikuchiku: {
      title: 'うるさい細かい人',
      description: '自分ルールが多すぎて周りがついていけない。「こだわり」と言えば聞こえはいいが、要は融通が利かないだけ。一人で勝手にやってる分にはいいけど、他人に求めるな。',
      advice: '他人にまで完璧求めるのやめたら？そのこだわり、気づいてるのは自分だけ。',
    },
  },
];

/** 全軸キー */
export const scoreAxes: ScoreAxis[] = ['sociability', 'planning', 'sensitivity', 'assertiveness'];
