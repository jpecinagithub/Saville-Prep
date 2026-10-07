import { useState } from "react";
import { RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import type { DiagramPanel, ShapeKind, ShapeSpec } from "../types";
import { useT } from "../i18n/useT";
import { DiagramPanelView } from "../components/Diagram";

type Rule = "rotate" | "move" | "invert" | "fill" | "addRemove" | "swap" | "sequence";
type Diff = "easy" | "medium" | "hard";

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const KINDS: ShapeKind[] = ["circle", "square", "triangle", "diamond", "star", "cross", "arrow", "pentagon"];

function randomShape(used: Set<string>): ShapeSpec {
  const kind = pick(KINDS.filter((k) => !used.has(k)));
  used.add(kind);
  return {
    kind,
    fill: Math.random() < 0.5,
    rotate: kind === "circle" || kind === "cross" ? 0 : pick([0, 90, 180, 270]),
    x: rand(25, 75),
    y: rand(25, 75),
    size: rand(22, 34),
  };
}

function randomPanel(n: number): DiagramPanel {
  const used = new Set<string>();
  const shapes: ShapeSpec[] = [];
  for (let i = 0; i < n; i++) shapes.push(randomShape(used));
  return { shapes };
}

function clone(p: DiagramPanel): DiagramPanel {
  return { shapes: p.shapes.map((s) => ({ ...s })) };
}

/** Apply a single-step rule. */
function applyRule(p: DiagramPanel, rule: Rule, param: number): DiagramPanel {
  const q = clone(p);
  switch (rule) {
    case "rotate":
      q.shapes.forEach((s) => { s.rotate = ((s.rotate ?? 0) + param) % 360; });
      break;
    case "move":
      q.shapes.forEach((s) => {
        s.x = ((s.x - 1 + param) % 100) + 1; // wrap inside the panel
        if (s.x > 100) s.x -= 100;
      });
      break;
    case "invert":
    case "fill":
      q.shapes.forEach((s) => { s.fill = !s.fill; });
      break;
    case "addRemove":
      if (q.shapes.length > 1) q.shapes.pop();
      else q.shapes.push(randomShape(new Set(q.shapes.map((s) => s.kind))));
      break;
    case "swap":
      if (q.shapes.length >= 2) {
        const [a, b] = [q.shapes[0], q.shapes[1]];
        const ax = a.x, ay = a.y;
        a.x = b.x; a.y = b.y;
        b.x = ax; b.y = ay;
      }
      break;
    case "sequence":
      // alternate handled by caller; default step = rotate
      q.shapes.forEach((s) => { s.rotate = ((s.rotate ?? 0) + param) % 360; });
      break;
  }
  return q;
}

interface Puzzle {
  panels: DiagramPanel[]; // 3 shown + "?" implied
  options: DiagramPanel[];
  correct: number;
  ruleLabel: string;
}

function generatePuzzle(elements: number, ruleChoice: Rule | "all", diff: Diff, t: (k: string) => string): Puzzle {
  const rule: Rule = ruleChoice === "all" ? pick<Rule>(["rotate", "move", "invert", "fill", "addRemove", "swap", "sequence"]) : ruleChoice;
  const p0 = randomPanel(elements);

  // rule parameters depend on difficulty
  const angle = diff === "easy" ? 90 : pick([90, 180, 270]);
  const moveDx = diff === "easy" ? 20 : pick([15, 25, 30]);

  const step = (p: DiagramPanel, r: Rule): DiagramPanel => {
    if (r === "rotate" || r === "sequence") return applyRule(p, r, angle);
    if (r === "move") return applyRule(p, r, moveDx);
    return applyRule(p, r, 0);
  };

  const panels: DiagramPanel[] = [p0];
  if (rule === "sequence") {
    // alternate rotate / invert
    panels.push(step(p0, "rotate"));
    panels.push(applyRule(panels[1], "invert", 0));
  } else {
    panels.push(step(p0, rule));
    panels.push(step(panels[1], rule));
  }
  const expected = rule === "sequence"
    ? step(panels[2], "rotate")
    : step(panels[2], rule);

  // distractors: same start point, wrong parameter or wrong rule
  const wrongs = new Set<string>();
  const options: DiagramPanel[] = [];
  const key = (p: DiagramPanel) => JSON.stringify(p.shapes);
  const addDistractor = (p: DiagramPanel) => {
    const k = key(p);
    if (k !== key(expected) && !wrongs.has(k)) {
      wrongs.add(k);
      options.push(p);
    }
  };
  const altRules: Rule[] = (["rotate", "move", "invert", "swap"] as Rule[]).filter((r) => r !== rule);
  let guard = 0;
  while (options.length < 3 && guard++ < 60) {
    const r = pick(altRules);
    const pp = r === "rotate" ? applyRule(panels[2], "rotate", angle === 90 ? 180 : 90)
      : r === "move" ? applyRule(panels[2], "move", -moveDx)
      : applyRule(panels[2], r, 0);
    addDistractor(pp);
  }
  const correct = rand(0, 3);
  const finalOptions: DiagramPanel[] = [];
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    finalOptions.push(i === correct ? expected : options[wi++ % Math.max(1, options.length)]);
  }

  const ruleLabelMap: Record<Rule, string> = {
    rotate: t("dt.ruleRotate"),
    move: t("dt.ruleMove"),
    invert: t("dt.ruleInvert"),
    fill: t("dt.ruleFill"),
    addRemove: t("dt.ruleAddRemove"),
    swap: t("dt.ruleSwap"),
    sequence: t("dt.ruleSequence"),
  };

  return { panels, options: finalOptions, correct, ruleLabel: ruleLabelMap[rule] };
}

const LETTERS = ["A", "B", "C", "D"];

export function DiagramTrainer() {
  const { t } = useT();
  const [elements, setElements] = useState(2);
  const [rule, setRule] = useState<Rule | "all">("all");
  const [diff, setDiff] = useState<Diff>("easy");
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const generate = () => {
    setPuzzle(generatePuzzle(elements, rule, diff, t));
    setSelected(null);
    setRevealed(false);
  };

  const ruleOptions: { id: Rule | "all"; label: string }[] = [
    { id: "all", label: t("dt.all") },
    { id: "rotate", label: t("dt.ruleRotate") },
    { id: "move", label: t("dt.ruleMove") },
    { id: "invert", label: t("dt.ruleInvert") },
    { id: "fill", label: t("dt.ruleFill") },
    { id: "addRemove", label: t("dt.ruleAddRemove") },
    { id: "swap", label: t("dt.ruleSwap") },
    { id: "sequence", label: t("dt.ruleSequence") },
  ];
  const diffs: { id: Diff; label: string }[] = [
    { id: "easy", label: t("common.easy") },
    { id: "medium", label: t("common.medium") },
    { id: "hard", label: t("common.hard") },
  ];

  const chip = (active: boolean) =>
    `rounded-xl border-2 px-4 py-2 text-sm font-semibold transition ${
      active ? "border-brand bg-brand-light text-brand" : "border-slate-200 bg-white text-slate-600 hover:border-brand"
    }`;

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("dt.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("dt.subtitle")}</p>

      {/* Config */}
      <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
        <div>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">{t("dt.elements")}</h2>
          <div className="flex gap-2" role="radiogroup" aria-label={t("dt.elements")}>
            {[1, 2, 3].map((n) => (
              <button key={n} type="button" role="radio" aria-checked={elements === n} onClick={() => setElements(n)} className={chip(elements === n)}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">{t("dt.difficulty")}</h2>
          <div className="flex gap-2" role="radiogroup" aria-label={t("dt.difficulty")}>
            {diffs.map((d) => (
              <button key={d.id} type="button" role="radio" aria-checked={diff === d.id} onClick={() => setDiff(d.id)} className={chip(diff === d.id)}>
                {d.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-end">
          <button type="button" onClick={generate}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark">
            <RefreshCw size={18} aria-hidden /> {t("dt.generate")}
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">{t("dt.transformation")}</h2>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t("dt.transformation")}>
          {ruleOptions.map((r) => (
            <button key={r.id} type="button" role="radio" aria-checked={rule === r.id} onClick={() => setRule(r.id)} className={chip(rule === r.id)}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Puzzle */}
      {puzzle && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-ink">{t("dt.whichCompletes")}</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {puzzle.panels.map((p, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-4">
                <DiagramPanelView panel={p} size={110} />
                {i < puzzle.panels.length - 1 && <span className="text-2xl text-slate-300" aria-hidden>→</span>}
              </span>
            ))}
            <span className="text-2xl text-slate-300" aria-hidden>→</span>
            <span className="flex h-[110px] w-[110px] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-4xl font-bold text-slate-300" aria-label="?">
              ?
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4" role="radiogroup" aria-label={t("dt.whichCompletes")}>
            {puzzle.options.map((p, i) => {
              const isCorrect = revealed && i === puzzle.correct;
              const isWrongPick = revealed && selected === i && i !== puzzle.correct;
              return (
                <button
                  key={i}
                  type="button"
                  role="radio"
                  aria-checked={selected === i}
                  disabled={revealed}
                  onClick={() => setSelected(i)}
                  className={`flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition ${
                    isCorrect
                      ? "border-emerald-600 bg-emerald-50"
                      : isWrongPick
                        ? "border-red-500 bg-red-50"
                        : selected === i
                          ? "border-brand bg-brand-light"
                          : "border-slate-200 bg-white hover:border-brand"
                  }`}
                >
                  <span className="text-sm font-bold text-slate-500">{LETTERS[i]}</span>
                  <DiagramPanelView panel={p} size={96} />
                </button>
              );
            })}
          </div>

          {!revealed ? (
            <button type="button" onClick={() => selected != null && setRevealed(true)} disabled={selected == null}
              className="mt-5 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-40">
              {t("dt.check")}
            </button>
          ) : (
            <div className="mt-5 space-y-3">
              <div className={`flex items-center gap-2 rounded-xl p-4 font-semibold ${selected === puzzle.correct ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
                {selected === puzzle.correct
                  ? <><CheckCircle2 size={20} aria-hidden /> {t("dt.correctMsg")}</>
                  : <><XCircle size={20} aria-hidden /> {t("dt.wrongMsg")}</>}
              </div>
              <p className="text-sm text-slate-600">
                <strong>{t("dt.transformation")}: </strong>{puzzle.ruleLabel}
              </p>
              <button type="button" onClick={generate}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
                <RefreshCw size={18} aria-hidden /> {t("dt.generate")}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
