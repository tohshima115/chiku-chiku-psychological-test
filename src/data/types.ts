export type Mode = 'pokapoka' | 'chikuchiku';

export type ScoreAxis = 'sociability' | 'planning' | 'sensitivity' | 'assertiveness';

export type Scores = Record<ScoreAxis, number>;

export interface Choice {
  label: string;
  scores: Partial<Scores>;
}

export interface ModeText {
  text: string;
  choices: Choice[];
}

export interface Question {
  id: string;
  pokapoka: ModeText;
  chikuchiku: ModeText;
}

export interface BloodTypeResult {
  id: string;
  label: string;
  pokapoka: { title: string; description: string };
  chikuchiku: { title: string; description: string };
}

export interface ResultType {
  id: string;
  pokapoka: { title: string; description: string; advice: string };
  chikuchiku: { title: string; description: string; advice: string };
  pattern: Record<ScoreAxis, 'high' | 'low'>;
}
