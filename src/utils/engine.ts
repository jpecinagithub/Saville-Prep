import type { Attempt, MockResult } from "./storage";
import type { Difficulty, Question, QuestionCategory } from "../types";

/** Fisher–Yates shuffle (returns a new array) */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickQuestions(
  bank: Question[],
  category: QuestionCategory | "mixed",
  difficulty: Difficulty | "mixed",
  count: number,
  excludeIds: Set<string> = new Set(),
): Question[] {
  let pool = bank.filter((q) => !excludeIds.has(q.id));
  if (category !== "mixed") pool = pool.filter((q) => q.category === category);
  if (difficulty !== "mixed") pool = pool.filter((q) => q.difficulty === difficulty);
  return shuffle(pool).slice(0, count);
}

export type ErrorType = "concept" | "calculation" | "interpretation" | "time-pressure";

/**
 * Rule-based error classification (local rules, no AI):
 * - answered in the last 15% of the available time (or skipped with little time left) -> time-pressure
 * - numerical & wrong -> calculation (method may have been fine)
 * - verbal & wrong -> interpretation
 * - diagrammatic & wrong -> concept
 */
export function classifyError(
  q: Question,
  attempt: { selected: string | null; timeMs: number },
  timeLimitMs: number | null,
): ErrorType | null {
  if (attempt.selected === q.correctAnswer) return null;
  const rushed =
    timeLimitMs != null && attempt.timeMs >= timeLimitMs * 0.85;
  const skippedLate =
    attempt.selected == null &&
    timeLimitMs != null &&
    attempt.timeMs >= timeLimitMs * 0.7;
  if (rushed || skippedLate) return "time-pressure";
  if (q.category === "numerical") return "calculation";
  if (q.category === "verbal") return "interpretation";
  return "concept";
}

export type PaceStatus = "on" | "slow" | "tooSlow";

export function paceStatus(elapsedMs: number, answered: number, total: number, limitMs: number): PaceStatus {
  if (answered === 0) return elapsedMs > limitMs * 0.25 ? "slow" : "on";
  const expectedMsPerQ = limitMs / total;
  const actualMsPerQ = elapsedMs / answered;
  const ratio = actualMsPerQ / expectedMsPerQ;
  if (ratio > 1.6) return "tooSlow";
  if (ratio > 1.2) return "slow";
  return "on";
}

export function buildMockResult(
  attempts: Attempt[],
  questionsById: Map<string, Question>,
): MockResult {
  const byCat = (cat: string) => attempts.filter((a) => a.category === cat);
  const count = (list: Attempt[]) => ({
    correct: list.filter((a) => a.correct).length,
    total: list.length,
  });
  const total = attempts.length;
  const correct = attempts.filter((a) => a.correct).length;
  const unanswered = attempts.filter((a) => a.selected == null).length;
  const meanTimeMs =
    total === 0 ? 0 : attempts.reduce((s, a) => s + a.timeMs, 0) / total;
  void questionsById;
  return {
    id: `mock-${Date.now()}`,
    date: new Date().toISOString(),
    overall: total === 0 ? 0 : correct / total,
    verbal: count(byCat("verbal")),
    numerical: count(byCat("numerical")),
    diagrammatic: count(byCat("diagrammatic")),
    unanswered,
    attempts,
    meanTimeMs,
  };
}

export function sectionLabel(cat: string, t: (k: string) => string): string {
  if (cat === "verbal") return t("common.verbal");
  if (cat === "numerical") return t("common.numerical");
  return t("common.diagrammatic");
}
