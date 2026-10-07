import type { Attempt, MockResult } from "./storage";

/** In-memory handoff between mock run -> results -> review (not persisted). */
let current: { result: MockResult; attempts: Attempt[] } | null = null;

export function setMockSession(result: MockResult) {
  current = { result, attempts: result.attempts };
}

export function getMockSession() {
  return current;
}

export function clearMockSession() {
  current = null;
}
