/**
 * Thuật toán Lặp lại ngắt quãng SM-2 (SuperMemo-2)
 */

export interface SRSCardState {
  id: string;
  repetitions: number;
  interval: number;
  easeFactor: number;
  lastReviewed: string | null;
  dueDate: string;
}

export type SRSRating = 1 | 2 | 3 | 4;

export const RATING_LABELS = {
  1: { label: 'Lại', desc: 'Quên (1 ngày)', color: 'red' },
  2: { label: 'Khó', desc: 'Nhớ chậm', color: 'amber' },
  3: { label: 'Tốt', desc: 'Chuẩn hạn', color: 'emerald' },
  4: { label: 'Dễ', desc: 'Rất thuộc', color: 'blue' }
};

export function initCardSRS(wordId: string): SRSCardState {
  return {
    id: wordId,
    repetitions: 0,
    interval: 0,
    easeFactor: 2.5,
    lastReviewed: null,
    dueDate: new Date().toISOString().split('T')[0]
  };
}

export function calculateSM2(cardState: SRSCardState, rating: SRSRating): SRSCardState {
  let { repetitions, interval, easeFactor } = cardState;
  
  let quality: number;
  switch (rating) {
    case 1: quality = 1; break;
    case 2: quality = 3; break;
    case 3: quality = 4; break;
    case 4: quality = 5; break;
  }

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = (rating === 2) ? 3 : 6;
    } else {
      let multiplier = easeFactor;
      if (rating === 2) multiplier *= 0.8;
      if (rating === 4) multiplier *= 1.3;
      interval = Math.round(interval * multiplier);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const today = new Date();
  const nextDueDate = new Date(today);
  nextDueDate.setDate(today.getDate() + interval);

  return {
    ...cardState,
    repetitions,
    interval,
    easeFactor: Number(easeFactor.toFixed(2)),
    lastReviewed: today.toISOString(),
    dueDate: nextDueDate.toISOString().split('T')[0]
  };
}

export function isCardDue(cardState?: SRSCardState): boolean {
  if (!cardState || !cardState.dueDate) return true;
  const today = new Date().toISOString().split('T')[0];
  return cardState.dueDate <= today;
}
