import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Robust countdown timer.
 * Driven by performance.now() (monotonic clock) rather than setInterval counting:
 * it stays accurate across React re-renders, tab focus loss, and browser throttling.
 * Calls onExpire exactly once when the deadline passes.
 */
export function useCountdown(durationMs: number, onExpire: () => void) {
  const [remainingMs, setRemainingMs] = useState(durationMs);
  const deadlineRef = useRef<number>(0);
  const expiredRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  const reset = useCallback(
    (nextMs: number = durationMs) => {
      expiredRef.current = false;
      deadlineRef.current = performance.now() + nextMs;
      setRemainingMs(nextMs);
    },
    [durationMs],
  );

  useEffect(() => {
    deadlineRef.current = performance.now() + durationMs;
    expiredRef.current = false;
    setRemainingMs(durationMs);

    let raf = 0;
    const tick = () => {
      const left = Math.max(0, deadlineRef.current - performance.now());
      setRemainingMs(left);
      if (left <= 0) {
        if (!expiredRef.current) {
          expiredRef.current = true;
          onExpireRef.current();
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs]);

  return { remainingMs, reset };
}

export function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
