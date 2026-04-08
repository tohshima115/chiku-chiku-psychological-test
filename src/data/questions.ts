import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'q1',
    pokapoka: {
      text: '休日の過ごし方で理想に近いのは？',
      choices: [
        { label: '友人と出かけてリフレッシュ', scores: { sociability: 2, assertiveness: 1 } },
        { label: '家で一人のんびり過ごす', scores: { sociability: -2, planning: -1 } },
        { label: '趣味に没頭する', scores: { planning: 1, sensitivity: 1 } },
        { label: '予定を詰め込んで充実させる', scores: { planning: 2, assertiveness: 1 } },
      ],
    },
    chikuchiku: {
      text: '休日、実際のところ何してる？',
      choices: [
        { label: '誰かと一緒じゃないと不安', scores: { sociability: 2, assertiveness: 1 } },
        { label: 'ダラダラして終わる', scores: { sociability: -2, planning: -1 } },
        { label: '趣味という名の現実逃避', scores: { planning: 1, sensitivity: 1 } },
        { label: '暇が怖くて予定パンパン', scores: { planning: 2, assertiveness: 1 } },
      ],
    },
  },
  {
    id: 'q2',
    pokapoka: {
      text: 'グループ作業で自然と担う役割は？',
      choices: [
        { label: 'みんなの意見をまとめるリーダー', scores: { sociability: 1, assertiveness: 2 } },
        { label: '黙々と自分の担当をこなす職人', scores: { sociability: -1, planning: 2 } },
        { label: '場の雰囲気を和ませるムードメーカー', scores: { sociability: 2, sensitivity: 1 } },
        { label: '一歩引いて全体を見守る参謀', scores: { sociability: -2, assertiveness: -1 } },
      ],
    },
    chikuchiku: {
      text: 'グループ作業、正直どうしてる？',
      choices: [
        { label: '仕切りたがって嫌がられる', scores: { sociability: 1, assertiveness: 2 } },
        { label: '自分のパートだけやって消える', scores: { sociability: -1, planning: 2 } },
        { label: 'ヘラヘラしてるだけ', scores: { sociability: 2, sensitivity: 1 } },
        { label: '正直関わりたくない', scores: { sociability: -2, assertiveness: -1 } },
      ],
    },
  },
  {
    id: 'q3',
    pokapoka: {
      text: '計画が変更になったとき、あなたは？',
      choices: [
        { label: '柔軟に対応できるタイプ', scores: { planning: -2, sociability: 1 } },
        { label: '少しストレスを感じるけど頑張る', scores: { planning: 1, sensitivity: 2 } },
        { label: 'すぐに新しいプランを立てる', scores: { planning: 2, assertiveness: 1 } },
        { label: 'まあなんとかなるでしょ', scores: { sensitivity: -2, planning: -1 } },
      ],
    },
    chikuchiku: {
      text: '予定が急に変わったら？',
      choices: [
        { label: 'そもそも計画なんてない', scores: { planning: -2, sociability: 1 } },
        { label: '内心キレてる', scores: { planning: 1, sensitivity: 2 } },
        { label: '即座にリカバリープランを練る（うざい）', scores: { planning: 2, assertiveness: 1 } },
        { label: '何も感じない', scores: { sensitivity: -2, planning: -1 } },
      ],
    },
  },
  {
    id: 'q4',
    pokapoka: {
      text: '友人が落ち込んでいるとき、どうしますか？',
      choices: [
        { label: 'じっくり話を聞いてあげる', scores: { sensitivity: 2, sociability: 1 } },
        { label: '具体的な解決策を提案する', scores: { assertiveness: 2, sensitivity: -1 } },
        { label: '気分転換に誘い出す', scores: { sociability: 2, assertiveness: 1 } },
        { label: 'そっとしておく', scores: { sensitivity: 1, sociability: -2 } },
      ],
    },
    chikuchiku: {
      text: '友達が病んでLINEしてきたら？',
      choices: [
        { label: '聞くけど正直しんどい', scores: { sensitivity: 2, sociability: 1 } },
        { label: '「こうすればいいじゃん」で済ます', scores: { assertiveness: 2, sensitivity: -1 } },
        { label: '「飲み行こ」で解決した気になる', scores: { sociability: 2, assertiveness: 1 } },
        { label: '既読スルー', scores: { sensitivity: 1, sociability: -2 } },
      ],
    },
  },
  {
    id: 'q5',
    pokapoka: {
      text: '自分の意見が少数派だったとき、どうしますか？',
      choices: [
        { label: '堂々と自分の意見を伝える', scores: { assertiveness: 2, sociability: 1 } },
        { label: '多数派の意見を尊重する', scores: { assertiveness: -2, sensitivity: 1 } },
        { label: '黙って様子を見る', scores: { assertiveness: -1, sociability: -1 } },
        { label: '別の切り口で再提案する', scores: { assertiveness: 1, planning: 1 } },
      ],
    },
    chikuchiku: {
      text: 'みんなと意見違ったらどうする？',
      choices: [
        { label: '空気読まずに主張する', scores: { assertiveness: 2, sociability: 1 } },
        { label: '秒で折れる', scores: { assertiveness: -2, sensitivity: 1 } },
        { label: '黙るけど内心バカにしてる', scores: { assertiveness: -1, sociability: -1 } },
        { label: '論破の準備を始める', scores: { assertiveness: 1, planning: 1 } },
      ],
    },
  },
  {
    id: 'q6',
    pokapoka: {
      text: '新しい環境に入ったとき、最初にすることは？',
      choices: [
        { label: '積極的に話しかけて仲間を作る', scores: { sociability: 2, assertiveness: 2 } },
        { label: 'まず観察してから動く', scores: { planning: 1, sensitivity: 1 } },
        { label: '自分のペースで馴染んでいく', scores: { sociability: -1, sensitivity: 1 } },
        { label: '誰かが声をかけてくれるのを待つ', scores: { assertiveness: -2, sociability: -1 } },
      ],
    },
    chikuchiku: {
      text: '知らない場所に放り込まれたら？',
      choices: [
        { label: 'グイグイ行って引かれる', scores: { sociability: 2, assertiveness: 2 } },
        { label: '壁の花になって情報収集', scores: { planning: 1, sensitivity: 1 } },
        { label: 'スマホに逃げる', scores: { sociability: -1, sensitivity: 1 } },
        { label: '帰りたい', scores: { assertiveness: -2, sociability: -1 } },
      ],
    },
  },
  {
    id: 'q7',
    pokapoka: {
      text: '仕事や勉強のスタイルは？',
      choices: [
        { label: 'コツコツ計画通りに進める', scores: { planning: 2, sensitivity: -1 } },
        { label: '締め切り前に集中力を発揮する', scores: { planning: -2, assertiveness: 1 } },
        { label: '納得いくまでとことんやる', scores: { sensitivity: 2, planning: 1 } },
        { label: '効率重視で最短ルートを選ぶ', scores: { sensitivity: -2, assertiveness: 1 } },
      ],
    },
    chikuchiku: {
      text: '締め切り前の自分を正直に言うと？',
      choices: [
        { label: '予定通り。てか終わってる', scores: { planning: 2, sensitivity: -1 } },
        { label: '毎回ギリギリで学ばない', scores: { planning: -2, assertiveness: 1 } },
        { label: '完璧主義で終わらない', scores: { sensitivity: 2, planning: 1 } },
        { label: '最低限で出して逃げる', scores: { sensitivity: -2, assertiveness: 1 } },
      ],
    },
  },
  {
    id: 'q8',
    pokapoka: {
      text: 'あなたが大切にしている価値観は？',
      choices: [
        { label: '人とのつながりと温かさ', scores: { sociability: 2, sensitivity: 1 } },
        { label: '自由と自分らしさ', scores: { sociability: -1, assertiveness: 2 } },
        { label: '安定と確実さ', scores: { planning: 2, sensitivity: 1 } },
        { label: '成果と達成感', scores: { assertiveness: 2, planning: 1 } },
      ],
    },
    chikuchiku: {
      text: '結局、何が一番大事？',
      choices: [
        { label: '寂しくないこと', scores: { sociability: 2, sensitivity: 1 } },
        { label: '誰にも指図されないこと', scores: { sociability: -1, assertiveness: 2 } },
        { label: '不安にならないこと', scores: { planning: 2, sensitivity: 1 } },
        { label: 'マウント取れること', scores: { assertiveness: 2, planning: 1 } },
      ],
    },
  },
  {
    id: 'q9',
    pokapoka: {
      text: 'ストレスを感じたときの対処法は？',
      choices: [
        { label: '信頼できる人に話を聞いてもらう', scores: { sociability: 2, sensitivity: 1 } },
        { label: '一人で静かに過ごしてリセット', scores: { sociability: -2, sensitivity: 1 } },
        { label: '体を動かして発散する', scores: { assertiveness: 1, planning: -1 } },
        { label: '原因を分析して対策を立てる', scores: { planning: 2, assertiveness: 1 } },
      ],
    },
    chikuchiku: {
      text: 'イライラしたとき、本当はどうしてる？',
      choices: [
        { label: '愚痴る（相手は選ばない）', scores: { sociability: 2, sensitivity: 1 } },
        { label: '布団にくるまって消える', scores: { sociability: -2, sensitivity: 1 } },
        { label: '物に当たるか食べる', scores: { assertiveness: 1, planning: -1 } },
        { label: '犯人探しを始める', scores: { planning: 2, assertiveness: 1 } },
      ],
    },
  },
  {
    id: 'q10',
    pokapoka: {
      text: 'チームの中であなたが最も貢献できることは？',
      choices: [
        { label: '場の雰囲気を良くすること', scores: { sociability: 2, sensitivity: 1 } },
        { label: '計画を立てて進行管理すること', scores: { planning: 2, assertiveness: 1 } },
        { label: '新しいアイデアを出すこと', scores: { planning: -1, assertiveness: 1 } },
        { label: '任された仕事を確実にこなすこと', scores: { sociability: -1, planning: 1 } },
      ],
    },
    chikuchiku: {
      text: 'チームで唯一マシなところは？',
      choices: [
        { label: 'いるだけでなんか和む（仕事はしてない）', scores: { sociability: 2, sensitivity: 1 } },
        { label: '口うるさくスケジュール管理する', scores: { planning: 2, assertiveness: 1 } },
        { label: '思いつきを言うだけ言う', scores: { planning: -1, assertiveness: 1 } },
        { label: '言われたことだけはやる', scores: { sociability: -1, planning: 1 } },
      ],
    },
  },
  {
    id: 'q11',
    pokapoka: {
      text: '初対面の人との会話で心がけていることは？',
      choices: [
        { label: '笑顔で積極的に話しかける', scores: { sociability: 2, assertiveness: 1 } },
        { label: '相手の話をよく聞く', scores: { sensitivity: 2, assertiveness: -1 } },
        { label: '共通の話題を探す', scores: { sociability: 1, planning: 1 } },
        { label: '必要最低限で済ませる', scores: { sociability: -2, sensitivity: -1 } },
      ],
    },
    chikuchiku: {
      text: '初対面の人と話すとき、本音は？',
      choices: [
        { label: '自分の話ばっかりしちゃう', scores: { sociability: 2, assertiveness: 1 } },
        { label: '相手の粗探しをしてしまう', scores: { sensitivity: 2, assertiveness: -1 } },
        { label: '必死にネタ探してて会話に集中できてない', scores: { sociability: 1, planning: 1 } },
        { label: '早く終わらないかなと思ってる', scores: { sociability: -2, sensitivity: -1 } },
      ],
    },
  },
  {
    id: 'q12',
    pokapoka: {
      text: '人生で最も充実を感じる瞬間は？',
      choices: [
        { label: '人に感謝されたとき', scores: { sensitivity: 2, sociability: 1 } },
        { label: '目標を達成したとき', scores: { assertiveness: 2, planning: 1 } },
        { label: '新しい発見をしたとき', scores: { planning: -1, sensitivity: 1 } },
        { label: '自分のペースで過ごせているとき', scores: { sociability: -2, planning: 1 } },
      ],
    },
    chikuchiku: {
      text: 'ぶっちゃけ一番テンション上がるのは？',
      choices: [
        { label: '「すごい」って言われたとき', scores: { sensitivity: 2, sociability: 1 } },
        { label: '人に勝ったとき', scores: { assertiveness: 2, planning: 1 } },
        { label: 'どうでもいい雑学を見つけたとき', scores: { planning: -1, sensitivity: 1 } },
        { label: '誰にも邪魔されないとき', scores: { sociability: -2, planning: 1 } },
      ],
    },
  },
];
