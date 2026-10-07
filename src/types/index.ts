// Saville Prep — core question-bank types.
// Question bank files live in src/data/questions/ and import ONLY from this file.
// Every user-facing string MUST be a LocalizedText { en, es } — no bare strings.

export type QuestionCategory = "verbal" | "numerical" | "diagrammatic" | "abstract";
export type Difficulty = "easy" | "medium" | "hard";

export interface LocalizedText {
  en: string;
  es: string;
}

export interface Option {
  /** stable id: "a" | "b" | "c" | "d" */
  id: string;
  label: LocalizedText;
}

// ---------- Numerical extras ----------
export interface TableData {
  caption?: LocalizedText;
  headers: LocalizedText[];
  rows: string[][];
}

export interface ChartData {
  type: "bar" | "line";
  title?: LocalizedText;
  labels: string[];
  values: number[];
  /** y-axis unit, e.g. "€m", "%", "units" */
  unit?: LocalizedText;
}

export interface NumericalExtras {
  tableData?: TableData;
  chartData?: ChartData;
  /** Step-by-step worked solution (teaches how to avoid unnecessary calculation) */
  calculationSteps?: LocalizedText[];
}

// ---------- Diagrammatic extras ----------
export type ShapeKind =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "star"
  | "cross"
  | "arrow"
  | "pentagon";

export interface ShapeSpec {
  kind: ShapeKind;
  /** true = solid fill, false = outline only */
  fill: boolean;
  /** rotation in degrees */
  rotate?: number;
  /** position inside the 100x100 panel */
  x: number;
  y: number;
  size: number;
}

export interface DiagramPanel {
  shapes: ShapeSpec[];
  /** optional small caption shown under the panel */
  caption?: LocalizedText;
}

export interface DiagrammaticExtras {
  /** Stimulus panels shown above the question, e.g. [input, operator-label, output] or a sequence */
  panels: DiagramPanel[];
  /** For "pick the missing piece / pick the result" questions: one panel per option (A–D). */
  optionPanels?: DiagramPanel[];
  /** The rule at play, revealed only in the explanation */
  rule?: LocalizedText;
}

// ---------- Main question ----------
export interface Question {
  /** globally unique, format "<cat-letter>-<diff-letter>-<nn>", e.g. "v-e-01", "n-m-12", "d-h-04" */
  id: string;
  category: QuestionCategory;
  difficulty: Difficulty;
  /** The actual question text */
  question: LocalizedText;
  /** Optional longer stem: a passage (verbal) or scenario intro (numerical) */
  context?: LocalizedText;
  options: Option[];
  /** option id of the correct answer */
  correctAnswer: string;
  explanation: LocalizedText;
  /** why the other options are wrong (1–3 entries, can reference options by letter) */
  whyWrong?: LocalizedText[];
  /** reusable strategy tip */
  tip?: LocalizedText;
  numeric?: NumericalExtras;
  diagram?: DiagrammaticExtras;
}

/** Every bank file must default-export Question[] */
export type QuestionBank = Question[];
