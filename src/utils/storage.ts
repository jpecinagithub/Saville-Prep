export interface Attempt {
  questionId: string;
  category: string;
  selected: string | null; // option id or null (unanswered)
  correct: boolean;
  timeMs: number;
  /** Rule-based error classification used in review */
  errorType?: "concept" | "calculation" | "interpretation" | "time-pressure" | null;
}

export interface MockResult {
  id: string;
  date: string; // ISO
  overall: number; // 0..1
  verbal: { correct: number; total: number };
  numerical: { correct: number; total: number };
  diagrammatic: { correct: number; total: number };
  unanswered: number;
  attempts: Attempt[];
  meanTimeMs: number;
}

const HISTORY_KEY = "saville-prep-history-v1";
const MAX_HISTORY = 10;

export function loadHistory(): MockResult[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY) : [];
  } catch {
    return [];
  }
}

export function saveResult(result: MockResult): MockResult[] {
  const history = [result, ...loadHistory()].slice(0, MAX_HISTORY);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    /* ignore */
  }
  return history;
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch {
    /* ignore */
  }
}

export function pct(x: number): string {
  return `${Math.round(x * 100)}%`;
}
