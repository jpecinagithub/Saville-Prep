import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import type { LocalizedText } from "../types";
import { useT } from "../i18n/useT";
import { useCountdown, formatClock } from "../hooks/useCountdown";

interface DrillItem {
  prompt: LocalizedText;
  answer: number;
  display: LocalizedText; // e.g. "12.5%" shown after answering
  kind: string;
}

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

function genItem(kind: string): DrillItem {
  switch (kind) {
    case "percent": {
      const base = pick([200, 240, 320, 400, 500, 800, 1200]);
      const p = pick([10, 12.5, 15, 20, 25, 30, 40, 50, 75]);
      const ans = (base * p) / 100;
      return {
        prompt: { en: `${p}% of ${base} = ?`, es: `${p}% de ${base} = ?` },
        answer: ans,
        display: { en: `${ans}`, es: `${ans}` },
        kind,
      };
    }
    case "change": {
      const a = pick([40, 48, 60, 80, 120, 200, 250, 400]) * 100;
      const p = pick([10, 12.5, 20, 25, 30, 50]);
      const up = Math.random() < 0.6;
      const b = up ? a * (1 + p / 100) : a * (1 - p / 100);
      const ans = up ? p : -p;
      return {
        prompt: { en: `Revenue: ${a / 1000}k → ${b / 1000}k — percentage change?`, es: `Ingresos: ${a / 1000}k → ${b / 1000}k — ¿variación porcentual?` },
        answer: ans,
        display: { en: `${ans > 0 ? "+" : ""}${ans}%`, es: `${ans > 0 ? "+" : ""}${ans}%` },
        kind,
      };
    }
    case "ratio": {
      const x = rand(2, 9);
      const y = rand(2, 9);
      const k = rand(2, 6);
      return {
        prompt: { en: `Simplify the ratio ${x * k} : ${y * k}`, es: `Simplifica el ratio ${x * k} : ${y * k}` },
        answer: x / y,
        display: { en: `${x}:${y}`, es: `${x}:${y}` },
        kind,
      };
    }
    case "rule3": {
      const a = pick([4, 5, 6, 8, 10]);
      const b = pick([12, 15, 20, 24, 30]);
      const c = pick([3, 5, 6, 9, 10]);
      // a -> b, c -> ?
      const ans = (b * c) / a;
      return {
        prompt: { en: `${a} units cost ${b} — what do ${c} units cost?`, es: `${a} unidades cuestan ${b} — ¿cuánto cuestan ${c} unidades?` },
        answer: ans,
        display: { en: `${ans}`, es: `${ans}` },
        kind,
      };
    }
    case "average": {
      const n = 4;
      const vals = Array.from({ length: n }, () => rand(4, 20) * 5);
      const ans = vals.reduce((s, v) => s + v, 0) / n;
      return {
        prompt: { en: `Average of ${vals.join(", ")}?`, es: `¿Media de ${vals.join(", ")}?` },
        answer: ans,
        display: { en: `${ans}`, es: `${ans}` },
        kind,
      };
    }
    case "difference": {
      const a = rand(200, 900);
      const b = rand(50, a - 20);
      return {
        prompt: { en: `${a} − ${b} = ?`, es: `${a} − ${b} = ?` },
        answer: a - b,
        display: { en: `${a - b}`, es: `${a - b}` },
        kind,
      };
    }
    default: {
      // unit conversion
      const km = pick([2.5, 4, 5, 7.5, 10, 12]);
      return {
        prompt: { en: `${km} km = ? metres`, es: `${km} km = ? metros` },
        answer: km * 1000,
        display: { en: `${km * 1000}`, es: `${km * 1000}` },
        kind,
      };
    }
  }
}

const KINDS = ["percent", "change", "ratio", "rule3", "average", "difference", "units"];
const DRILL_LEN = 10;
const Q_SECONDS = 20;

export function QuickMaths() {
  const { t, loc, lang } = useT();
  const [items, setItems] = useState<DrillItem[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [timed, setTimed] = useState(true);
  const [feedback, setFeedback] = useState<null | { ok: boolean; ans: string }>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [done, setDone] = useState(false);

  const start = () => {
    setItems(Array.from({ length: DRILL_LEN }, () => genItem(pick(KINDS))));
    setIdx(0);
    setInput("");
    setFeedback(null);
    setScore(0);
    setStreak(0);
    setDone(false);
  };

  const check = () => {
    if (!items || feedback) return;
    const item = items[idx];
    const v = parseFloat(input.replace(",", "."));
    // tolerate ratio answers (x/y) and small float error
    const ok = Number.isFinite(v) && Math.abs(v - item.answer) < 0.011;
    if (ok) {
      setScore((s) => s + 1);
      const ns = streak + 1;
      setStreak(ns);
      setBest((b) => Math.max(b, ns));
    } else {
      setStreak(0);
    }
    setFeedback({ ok, ans: loc(item.display) });
  };

  const next = () => {
    if (!items) return;
    if (idx + 1 >= items.length) setDone(true);
    else {
      setIdx(idx + 1);
      setInput("");
      setFeedback(null);
    }
  };

  const kindLabel = (k: string) => {
    const map: Record<string, string> = {
      percent: t("qm.typePercent"),
      change: t("qm.typeChange"),
      ratio: t("qm.typeRatio"),
      rule3: t("qm.typeRule3"),
      average: t("qm.typeAverage"),
      difference: t("qm.typeDifference"),
      units: t("qm.typeUnits"),
    };
    return map[k] ?? k;
  };

  if (!items) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("qm.title")}</h1>
        <p className="mt-2 text-lg text-slate-600">{t("qm.subtitle")}</p>
        <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-2 text-left">
          {KINDS.map((k) => (
            <div key={k} className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
              {kindLabel(k)}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-3" role="radiogroup" aria-label={t("qm.timerLabel")}>
          <button type="button" role="radio" aria-checked={!timed} onClick={() => setTimed(false)}
            className={`rounded-xl border-2 px-5 py-2.5 font-semibold ${!timed ? "border-brand bg-brand-light text-brand" : "border-slate-200 bg-white text-slate-600"}`}>
            {t("qm.noTimer")}
          </button>
          <button type="button" role="radio" aria-checked={timed} onClick={() => setTimed(true)}
            className={`rounded-xl border-2 px-5 py-2.5 font-semibold ${timed ? "border-brand bg-brand-light text-brand" : "border-slate-200 bg-white text-slate-600"}`}>
            {t("qm.timerLabel")}
          </button>
        </div>
        <button type="button" onClick={start}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white hover:bg-brand-dark">
          <Play size={20} aria-hidden /> {t("qm.start")} · {t("qm.questionCount")}
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold text-ink">{t("qm.resultsTitle")}</h1>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-6xl font-extrabold text-brand">{score}/{items.length}</div>
          <p className="mt-2 text-slate-600">{t("qm.yourStreak")}: <strong>{best}</strong></p>
          <button type="button" onClick={start}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
            <RotateCcw size={18} aria-hidden /> {t("qm.newDrill")}
          </button>
        </div>
      </div>
    );
  }

  const item = items[idx];
  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-500">
          {t("common.question")} {idx + 1} {t("common.of")} {items.length} · {kindLabel(item.kind)}
        </span>
        {timed && <DrillTimer key={`${idx}-${items.length}`} onExpire={() => { if (!feedback) { setStreak(0); setFeedback({ ok: false, ans: loc(item.display) }); } }} />}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-slate-500">{t("qm.prompt")}</p>
        <div className="mt-3 font-mono text-3xl font-bold text-ink md:text-4xl">{loc(item.prompt)}</div>
        {!feedback ? (
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
            onSubmit={(e) => { e.preventDefault(); check(); }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              inputMode="decimal"
              autoFocus
              placeholder={t("qm.placeholder")}
              aria-label={t("qm.placeholder")}
              className="rounded-xl border-2 border-slate-300 px-4 py-3 text-center font-mono text-xl focus:border-brand"
            />
            <button type="submit" className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              {t("qm.check")}
            </button>
          </form>
        ) : (
          <div>
            <div className={`mt-6 rounded-xl p-4 font-semibold ${feedback.ok ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
              {feedback.ok ? t("qm.correctUnit") : t("qm.wrongUnit", { ans: feedback.ans })}
            </div>
            <button type="button" onClick={next} autoFocus
              className="mt-4 rounded-xl bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark">
              {idx + 1 === items.length ? t("common.finish") : t("common.next")}
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{lang === "es" ? "Aciertos" : "Score"}: <strong className="text-brand">{score}</strong></span>
        <span>{t("qm.yourStreak")}: <strong className="text-brand">{streak}</strong></span>
      </div>
    </div>
  );
}

function DrillTimer({ onExpire }: { onExpire: () => void }) {
  const { remainingMs } = useCountdown(Q_SECONDS * 1000, onExpire);
  return (
    <div role="timer" className={`font-mono text-2xl font-bold tabular-nums ${remainingMs <= 5000 ? "timer-critical text-red-700" : "text-brand"}`}>
      {formatClock(remainingMs)}
    </div>
  );
}
