import type { Question, QuestionCategory } from "../../types";
import verbal from "./verbal";
import numerical from "./numerical";
import diagrammatic from "./diagrammatic";

/** All practice questions (original content, bilingual). */
export const ALL_QUESTIONS: Question[] = [...verbal, ...numerical, ...diagrammatic];

export function questionsByCategory(cat: QuestionCategory): Question[] {
  return ALL_QUESTIONS.filter((q) => q.category === cat);
}

/** One deterministic easy example per category for the Learn page. */
export function learnExample(cat: QuestionCategory): Question | undefined {
  return questionsByCategory(cat).find((q) => q.difficulty === "easy");
}

export function assertNoDuplicates(): string[] {
  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const q of ALL_QUESTIONS) {
    if (seen.has(q.id)) dupes.push(q.id);
    seen.add(q.id);
  }
  return dupes;
}
