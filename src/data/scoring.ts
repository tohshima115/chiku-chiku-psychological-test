import type { Scores, ScoreAxis, ResultType } from './types';
import { resultTypes, scoreAxes } from './resultTypes';

/** 空のスコアオブジェクトを生成 */
export function emptyScores(): Scores {
  return { sociability: 0, planning: 0, sensitivity: 0, assertiveness: 0 };
}

/** スコアを加算する */
export function addScores(base: Scores, partial: Partial<Scores>): Scores {
  const result = { ...base };
  for (const key of scoreAxes) {
    if (partial[key] !== undefined) {
      result[key] += partial[key];
    }
  }
  return result;
}

/** スコアパターンから最も近い結果タイプを判定 */
export function determineType(scores: Scores): ResultType {
  // 各軸を高/低に分類
  const pattern: Record<ScoreAxis, 'high' | 'low'> = {
    sociability: scores.sociability >= 0 ? 'high' : 'low',
    planning: scores.planning >= 0 ? 'high' : 'low',
    sensitivity: scores.sensitivity >= 0 ? 'high' : 'low',
    assertiveness: scores.assertiveness >= 0 ? 'high' : 'low',
  };

  // 完全一致を探す
  const exact = resultTypes.find(
    (t) => scoreAxes.every((axis) => t.pattern[axis] === pattern[axis])
  );
  if (exact) return exact;

  // 完全一致がない場合、最も近いタイプを探す（一致する軸数 + スコア距離で判定）
  let bestType = resultTypes[0];
  let bestScore = -Infinity;

  for (const type of resultTypes) {
    let matchScore = 0;
    for (const axis of scoreAxes) {
      if (type.pattern[axis] === pattern[axis]) {
        matchScore += 10 + Math.abs(scores[axis]); // 一致する軸はスコアの絶対値でブースト
      }
    }
    if (matchScore > bestScore) {
      bestScore = matchScore;
      bestType = type;
    }
  }

  return bestType;
}
