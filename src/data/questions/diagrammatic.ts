// Diagrammatic reasoning question bank — 24 ORIGINAL items (8 easy, 8 medium, 8 hard).
// All diagrams are generated from ShapeSpec data (the app renders SVG). Nothing here
// copies or reproduces any official Saville Assessment material.
// Conventions: rotate 0 = shape's natural orientation (arrow/triangle point up);
// clockwise degrees. optionPanels are ordered [A, B, C, D] to match option ids.
import type { Question, ShapeSpec, DiagramPanel, LocalizedText } from "../../types";

/** Shorthand for building shape specs. */
const S = (
  kind: ShapeSpec["kind"],
  fill: boolean,
  x: number,
  y: number,
  size: number,
  rotate = 0
): ShapeSpec => ({ kind, fill, x, y, size, rotate });

/** Shorthand for panels. */
const P = (shapes: ShapeSpec[], caption?: LocalizedText): DiagramPanel =>
  caption ? { shapes, caption } : { shapes };

const IN: LocalizedText = { en: "INPUT", es: "ENTRADA" };
const OUT: LocalizedText = { en: "OUTPUT", es: "SALIDA" };
const QQ: LocalizedText = { en: "?", es: "?" };
const N1: LocalizedText = { en: "1", es: "1" };
const N2: LocalizedText = { en: "2", es: "2" };
const N3: LocalizedText = { en: "3", es: "3" };
const N4: LocalizedText = { en: "4", es: "4" };

const WHICH_RULE: LocalizedText = {
  en: "Which rule transforms INPUT into OUTPUT?",
  es: "¿Qué regla transforma la ENTRADA en la SALIDA?",
};
const WHAT_OUTPUT: LocalizedText = {
  en: "What is the OUTPUT?",
  es: "¿Cuál es la SALIDA?",
};
const COMPLETE_SEQ: LocalizedText = {
  en: "Which panel completes the sequence?",
  es: "¿Qué panel completa la secuencia?",
};
const MISSING_PIECE: LocalizedText = {
  en: "Which panel is the missing piece?",
  es: "¿Qué panel es la pieza que falta?",
};
const MISSING_INPUT: LocalizedText = {
  en: "Which panel is the missing INPUT?",
  es: "¿Qué panel es la ENTRADA que falta?",
};

const questions: Question[] = [
  // ============================ EASY (one simple rule) ============================
  {
    id: "d-e-01",
    category: "diagrammatic",
    difficulty: "easy",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Rotate the arrow 90° clockwise.",
          es: "Gira la flecha 90° en el sentido de las agujas del reloj.",
        },
      },
      {
        id: "b",
        label: {
          en: "Rotate the arrow 90° anticlockwise.",
          es: "Gira la flecha 90° en sentido contrario a las agujas del reloj.",
        },
      },
      {
        id: "c",
        label: {
          en: "Swap the arrow's fill (solid ↔ outline).",
          es: "Cambia el relleno de la flecha (sólido ↔ contorno).",
        },
      },
      {
        id: "d",
        label: {
          en: "Move the arrow to the opposite corner.",
          es: "Mueve la flecha a la esquina opuesta.",
        },
      },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The arrow points up in INPUT and right in OUTPUT: a 90° clockwise rotation. Its fill (solid) and its position (centre) do not change.",
      es: "La flecha apunta hacia arriba en la ENTRADA y hacia la derecha en la SALIDA: una rotación de 90° en el sentido de las agujas del reloj. Su relleno (sólido) y su posición (centro) no cambian.",
    },
    whyWrong: [
      {
        en: "B rotates the wrong way: anticlockwise would leave the arrow pointing left.",
        es: "B gira en el sentido equivocado: en sentido antihorario la flecha apuntaría a la izquierda.",
      },
      {
        en: "C is wrong: the fill stays solid in both panels.",
        es: "C es incorrecta: el relleno sigue siendo sólido en ambos paneles.",
      },
      {
        en: "D is wrong: the arrow stays in the centre of the panel.",
        es: "D es incorrecta: la flecha permanece en el centro del panel.",
      },
    ],
    tip: {
      en: "Check one feature at a time — position, then rotation, then fill. The first difference you spot is usually the rule.",
      es: "Comprueba una característica cada vez: posición, luego rotación, luego relleno. La primera diferencia que detectes suele ser la regla.",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 50, 50, 32, 0)], IN),
        P([S("arrow", true, 50, 50, 32, 90)], OUT),
      ],
      rule: {
        en: "Rotate 90° clockwise.",
        es: "Girar 90° en el sentido de las agujas del reloj.",
      },
    },
  },
  {
    id: "d-e-02",
    category: "diagrammatic",
    difficulty: "easy",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: { en: "Rotate the circle 90°.", es: "Gira el círculo 90°." },
      },
      {
        id: "b",
        label: {
          en: "Swap solid fill for outline.",
          es: "Cambia el relleno sólido por contorno.",
        },
      },
      {
        id: "c",
        label: { en: "Add a second circle.", es: "Añade un segundo círculo." },
      },
      {
        id: "d",
        label: { en: "Move the circle down.", es: "Mueve el círculo hacia abajo." },
      },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The circle is solid in INPUT and outline-only in OUTPUT. Its position and size do not change — only the fill flips.",
      es: "El círculo es sólido en la ENTRADA y solo contorno en la SALIDA. Su posición y tamaño no cambian; solo se invierte el relleno.",
    },
    whyWrong: [
      {
        en: "A: rotating a circle changes nothing visible, and nothing else changed either.",
        es: "A: girar un círculo no cambia nada visible, y tampoco cambió nada más.",
      },
      {
        en: "C is wrong: there is still exactly one circle in OUTPUT.",
        es: "C es incorrecta: sigue habiendo exactamente un círculo en la SALIDA.",
      },
      {
        en: "D is wrong: the circle stays in the centre of the panel.",
        es: "D es incorrecta: el círculo permanece en el centro del panel.",
      },
    ],
    tip: {
      en: "If nothing moved and nothing turned, compare solid vs. outline — fill flips are the quietest rule.",
      es: "Si nada se movió ni giró, compara sólido con contorno: los cambios de relleno son la regla más discreta.",
    },
    diagram: {
      panels: [P([S("circle", true, 50, 50, 36)], IN), P([S("circle", false, 50, 50, 36)], OUT)],
      rule: {
        en: "Invert the fill (solid → outline).",
        es: "Invertir el relleno (sólido → contorno).",
      },
    },
  },
  {
    id: "d-e-03",
    category: "diagrammatic",
    difficulty: "easy",
    question: WHAT_OUTPUT,
    context: {
      en: "Rule: move the square to the opposite corner of the panel.",
      es: "Regla: mueve el cuadrado a la esquina opuesta del panel.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The square starts at the top-left corner (30, 30). The opposite corner of the panel is the bottom-right (70, 70): panel C.",
      es: "El cuadrado empieza en la esquina superior izquierda (30, 30). La esquina opuesta del panel es la inferior derecha (70, 70): panel C.",
    },
    whyWrong: [
      {
        en: "A shows the square unmoved. B is the top-right corner, not the opposite one.",
        es: "A muestra el cuadrado sin mover. B es la esquina superior derecha, no la opuesta.",
      },
      {
        en: "D moves it to the centre, which is not a corner at all.",
        es: "D lo mueve al centro, que no es una esquina.",
      },
    ],
    tip: {
      en: "“Opposite corner” means both coordinates flip: top-left ↔ bottom-right, top-right ↔ bottom-left.",
      es: "«Esquina opuesta» significa que ambas coordenadas se invierten: superior izquierda ↔ inferior derecha, superior derecha ↔ inferior izquierda.",
    },
    diagram: {
      panels: [P([S("square", true, 30, 30, 28)], IN)],
      optionPanels: [
        P([S("square", true, 30, 30, 28)]),
        P([S("square", true, 70, 30, 28)]),
        P([S("square", true, 70, 70, 28)]),
        P([S("square", true, 50, 50, 28)]),
      ],
      rule: {
        en: "Move to the opposite corner.",
        es: "Mover a la esquina opuesta.",
      },
    },
  },
  {
    id: "d-e-04",
    category: "diagrammatic",
    difficulty: "easy",
    question: WHAT_OUTPUT,
    context: {
      en: "Rule: add one outline circle to the right of the existing shapes.",
      es: "Regla: añade un círculo de contorno a la derecha de las figuras existentes.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "INPUT has two solid circles. The rule adds one outline circle on the right, giving three circles in total: panel D.",
      es: "La ENTRADA tiene dos círculos sólidos. La regla añade un círculo de contorno a la derecha, con tres círculos en total: panel D.",
    },
    whyWrong: [
      {
        en: "A adds nothing. B adds two circles instead of one.",
        es: "A no añade nada. B añade dos círculos en lugar de uno.",
      },
      {
        en: "C adds the wrong shape (a square), not an outline circle.",
        es: "C añade la figura equivocada (un cuadrado), no un círculo de contorno.",
      },
    ],
    tip: {
      en: "Count the shapes before and after: the difference tells you exactly how many were added or removed.",
      es: "Cuenta las figuras antes y después: la diferencia te dice exactamente cuántas se añadieron o eliminaron.",
    },
    diagram: {
      panels: [P([S("circle", true, 30, 50, 22), S("circle", true, 55, 50, 22)], IN)],
      optionPanels: [
        P([S("circle", true, 30, 50, 22), S("circle", true, 55, 50, 22)]),
        P([
          S("circle", true, 25, 50, 20),
          S("circle", true, 42, 50, 20),
          S("circle", true, 59, 50, 20),
          S("circle", true, 76, 50, 20),
        ]),
        P([
          S("circle", true, 30, 50, 22),
          S("circle", true, 55, 50, 22),
          S("square", false, 80, 50, 22),
        ]),
        P([
          S("circle", true, 30, 50, 22),
          S("circle", true, 55, 50, 22),
          S("circle", false, 80, 50, 22),
        ]),
      ],
      rule: {
        en: "Add one outline circle on the right.",
        es: "Añadir un círculo de contorno a la derecha.",
      },
    },
  },
  {
    id: "d-e-05",
    category: "diagrammatic",
    difficulty: "easy",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: { en: "Rotate both shapes 180°.", es: "Gira ambas figuras 180°." },
      },
      {
        id: "b",
        label: {
          en: "Invert the fill of both shapes.",
          es: "Invierte el relleno de ambas figuras.",
        },
      },
      {
        id: "c",
        label: {
          en: "Swap the positions of the two shapes.",
          es: "Intercambia las posiciones de las dos figuras.",
        },
      },
      {
        id: "d",
        label: { en: "Remove the square.", es: "Elimina el cuadrado." },
      },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The solid circle moves from the left to the right, and the outline square moves from the right to the left. Neither shape changes fill or rotation — only their positions swap.",
      es: "El círculo sólido se mueve de la izquierda a la derecha, y el cuadrado de contorno de la derecha a la izquierda. Ninguna figura cambia de relleno ni de rotación; solo se intercambian sus posiciones.",
    },
    whyWrong: [
      {
        en: "A is wrong: the shapes did not turn (a 180° turn of the circle would be invisible anyway).",
        es: "A es incorrecta: las figuras no giraron (un giro de 180° del círculo sería invisible de todos modos).",
      },
      {
        en: "B is wrong: the circle stays solid and the square stays outline.",
        es: "B es incorrecta: el círculo sigue siendo sólido y el cuadrado sigue siendo contorno.",
      },
      {
        en: "D is wrong: both shapes are still present in OUTPUT.",
        es: "D es incorrecta: ambas figuras siguen presentes en la SALIDA.",
      },
    ],
    tip: {
      en: "Trace each shape with your finger from INPUT to OUTPUT — if each one lands where the other was, it is a swap.",
      es: "Sigue cada figura con el dedo desde la ENTRADA hasta la SALIDA: si cada una termina donde estaba la otra, es un intercambio.",
    },
    diagram: {
      panels: [
        P([S("circle", true, 30, 50, 26), S("square", false, 70, 50, 26)], IN),
        P([S("square", false, 30, 50, 26), S("circle", true, 70, 50, 26)], OUT),
      ],
      rule: {
        en: "Swap the positions of the two shapes.",
        es: "Intercambiar las posiciones de las dos figuras.",
      },
    },
  },
  {
    id: "d-e-06",
    category: "diagrammatic",
    difficulty: "easy",
    question: MISSING_PIECE,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The arrow turns 90° clockwise each step: up (1) → right (2) → down (3). Panel B shows the arrow pointing down.",
      es: "La flecha gira 90° en el sentido de las agujas del reloj en cada paso: arriba (1) → derecha (2) → abajo (3). El panel B muestra la flecha apuntando hacia abajo.",
    },
    whyWrong: [
      {
        en: "A (left) would be step 4, not step 3. C repeats step 1.",
        es: "A (izquierda) sería el paso 4, no el paso 3. C repite el paso 1.",
      },
      {
        en: "D repeats step 2 instead of advancing the rotation.",
        es: "D repite el paso 2 en lugar de avanzar la rotación.",
      },
    ],
    tip: {
      en: "In a rotation sequence, name the direction each panel points — the pattern of directions usually spells out the rule.",
      es: "En una secuencia de rotación, nombra la dirección a la que apunta cada panel: el patrón de direcciones suele revelar la regla.",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 50, 50, 32, 0)], N1),
        P([S("arrow", true, 50, 50, 32, 90)], N2),
        P([], QQ),
      ],
      optionPanels: [
        P([S("arrow", true, 50, 50, 32, 270)]),
        P([S("arrow", true, 50, 50, 32, 180)]),
        P([S("arrow", true, 50, 50, 32, 0)]),
        P([S("arrow", true, 50, 50, 32, 90)]),
      ],
      rule: {
        en: "Rotate 90° clockwise each step.",
        es: "Girar 90° en el sentido de las agujas del reloj en cada paso.",
      },
    },
  },
  {
    id: "d-e-07",
    category: "diagrammatic",
    difficulty: "easy",
    question: COMPLETE_SEQ,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The triangle's fill alternates: solid (1), outline (2), solid (3) — so panel 4 must be outline. Panel A is the outline triangle.",
      es: "El relleno del triángulo se alterna: sólido (1), contorno (2), sólido (3); por tanto el panel 4 debe ser de contorno. El panel A es el triángulo de contorno.",
    },
    whyWrong: [
      {
        en: "B repeats the solid fill of panel 3 instead of alternating.",
        es: "B repite el relleno sólido del panel 3 en lugar de alternar.",
      },
      {
        en: "C and D change the shape itself — the rule only affects the fill.",
        es: "C y D cambian la propia figura; la regla solo afecta al relleno.",
      },
    ],
    tip: {
      en: "Alternation (ABAB…) is the simplest sequence pattern — always test for it before looking for harder rules.",
      es: "La alternancia (ABAB…) es el patrón de secuencia más simple: compruébalo siempre antes de buscar reglas más difíciles.",
    },
    diagram: {
      panels: [
        P([S("triangle", true, 50, 50, 34)], N1),
        P([S("triangle", false, 50, 50, 34)], N2),
        P([S("triangle", true, 50, 50, 34)], N3),
      ],
      optionPanels: [
        P([S("triangle", false, 50, 50, 34)]),
        P([S("triangle", true, 50, 50, 34)]),
        P([S("circle", false, 50, 50, 34)]),
        P([S("square", true, 50, 50, 30)]),
      ],
      rule: {
        en: "Alternate the fill each step (solid, outline, solid, outline…).",
        es: "Alternar el relleno en cada paso (sólido, contorno, sólido, contorno…).",
      },
    },
  },
  {
    id: "d-e-08",
    category: "diagrammatic",
    difficulty: "easy",
    question: MISSING_INPUT,
    context: {
      en: "Rule: rotate the arrow 90° clockwise.",
      es: "Regla: gira la flecha 90° en el sentido de las agujas del reloj.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "OUTPUT shows the arrow pointing right. Rotating 90° clockwise turns up → right, so the INPUT must have pointed up: panel D.",
      es: "La SALIDA muestra la flecha apuntando a la derecha. Girar 90° en el sentido de las agujas del reloj convierte arriba → derecha, así que la ENTRADA debía apuntar hacia arriba: panel D.",
    },
    whyWrong: [
      {
        en: "C already points right — that is the OUTPUT, not the INPUT.",
        es: "C ya apunta a la derecha: esa es la SALIDA, no la ENTRADA.",
      },
      {
        en: "A (down) would rotate to left; B (left) would rotate to up.",
        es: "A (abajo) giraría hacia la izquierda; B (izquierda) giraría hacia arriba.",
      },
    ],
    tip: {
      en: "To find a missing INPUT, run the rule backwards: rotate the OUTPUT 90° anticlockwise.",
      es: "Para hallar una ENTRADA que falta, aplica la regla al revés: gira la SALIDA 90° en sentido antihorario.",
    },
    diagram: {
      panels: [P([], QQ), P([S("arrow", true, 50, 50, 32, 90)], OUT)],
      optionPanels: [
        P([S("arrow", true, 50, 50, 32, 180)]),
        P([S("arrow", true, 50, 50, 32, 270)]),
        P([S("arrow", true, 50, 50, 32, 90)]),
        P([S("arrow", true, 50, 50, 32, 0)]),
      ],
      rule: {
        en: "Rotate 90° clockwise.",
        es: "Girar 90° en el sentido de las agujas del reloj.",
      },
    },
  },
  // ========================== MEDIUM (move+rotate, add/remove) ==========================
  {
    id: "d-m-01",
    category: "diagrammatic",
    difficulty: "medium",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Rotate the arrow 90° anticlockwise and move it to the right side.",
          es: "Gira la flecha 90° en sentido antihorario y muévela al lado derecho.",
        },
      },
      {
        id: "b",
        label: {
          en: "Rotate the arrow 90° clockwise and move it to the right side.",
          es: "Gira la flecha 90° en el sentido de las agujas del reloj y muévela al lado derecho.",
        },
      },
      {
        id: "c",
        label: {
          en: "Rotate the arrow 90° clockwise only (no movement).",
          es: "Gira la flecha 90° en el sentido de las agujas del reloj solamente (sin moverla).",
        },
      },
      {
        id: "d",
        label: {
          en: "Move the arrow to the right side only (no rotation).",
          es: "Mueve la flecha al lado derecho solamente (sin girarla).",
        },
      },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Two things change at once: the arrow points up on the left in INPUT and right on the right side in OUTPUT — a 90° clockwise rotation plus a move from x=30 to x=70. The fill stays solid.",
      es: "Dos cosas cambian a la vez: la flecha apunta hacia arriba a la izquierda en la ENTRADA y hacia la derecha en el lado derecho en la SALIDA: una rotación de 90° en el sentido de las agujas del reloj más un movimiento de x=30 a x=70. El relleno sigue siendo sólido.",
    },
    whyWrong: [
      {
        en: "A gets the move right but the rotation backwards (anticlockwise would point left).",
        es: "A acierta el movimiento pero invierte la rotación (en sentido antihorario apuntaría a la izquierda).",
      },
      {
        en: "C and D each capture only half of the change — both the rotation and the move happen.",
        es: "C y D capturan solo la mitad del cambio: ocurren tanto la rotación como el movimiento.",
      },
    ],
    tip: {
      en: "When more than one feature changes, eliminate options that describe only one of them.",
      es: "Cuando cambia más de una característica, elimina las opciones que describan solo una de ellas.",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 30, 50, 28, 0)], IN),
        P([S("arrow", true, 70, 50, 28, 90)], OUT),
      ],
      rule: {
        en: "Rotate 90° clockwise AND move to the right side.",
        es: "Girar 90° en el sentido de las agujas del reloj Y mover al lado derecho.",
      },
    },
  },
  {
    id: "d-m-02",
    category: "diagrammatic",
    difficulty: "medium",
    question: WHAT_OUTPUT,
    context: {
      en: "Rule: invert the circle's fill and add a solid square below it.",
      es: "Regla: invierte el relleno del círculo y añade un cuadrado sólido debajo.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "The solid circle becomes outline (fill inverted), and a new solid square appears below it at (50, 70): panel D.",
      es: "El círculo sólido pasa a ser de contorno (relleno invertido) y aparece un nuevo cuadrado sólido debajo, en (50, 70): panel D.",
    },
    whyWrong: [
      {
        en: "A inverts the fill but forgets the new square.",
        es: "A invierte el relleno pero olvida el nuevo cuadrado.",
      },
      {
        en: "B adds the square but keeps the circle solid. C adds the square as outline instead of solid.",
        es: "B añade el cuadrado pero mantiene el círculo sólido. C añade el cuadrado como contorno en lugar de sólido.",
      },
    ],
    tip: {
      en: "Two-part rules need two checks: verify each part separately against the winning panel.",
      es: "Las reglas de dos partes requieren dos comprobaciones: verifica cada parte por separado en el panel ganador.",
    },
    diagram: {
      panels: [P([S("circle", true, 50, 35, 30)], IN)],
      optionPanels: [
        P([S("circle", false, 50, 35, 30)]),
        P([S("circle", true, 50, 35, 30), S("square", true, 50, 70, 26)]),
        P([S("circle", false, 50, 35, 30), S("square", false, 50, 70, 26)]),
        P([S("circle", false, 50, 35, 30), S("square", true, 50, 70, 26)]),
      ],
      rule: {
        en: "Invert the circle's fill AND add a solid square below.",
        es: "Invertir el relleno del círculo Y añadir un cuadrado sólido debajo.",
      },
    },
  },
  {
    id: "d-m-03",
    category: "diagrammatic",
    difficulty: "medium",
    question: COMPLETE_SEQ,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Each step moves the pentagon 20 units right and rotates it 45° clockwise: (20, 0°) → (40, 45°) → (60, 90°) → (80, 135°). Panel A matches exactly.",
      es: "Cada paso mueve el pentágono 20 unidades a la derecha y lo gira 45° en el sentido de las agujas del reloj: (20, 0°) → (40, 45°) → (60, 90°) → (80, 135°). El panel A coincide exactamente.",
    },
    whyWrong: [
      {
        en: "B moves correctly but stops rotating at 90°. C rotates correctly but stays at x=60.",
        es: "B se mueve bien pero deja de girar en 90°. C gira bien pero se queda en x=60.",
      },
      {
        en: "D changes the shape to a diamond — the shape never changes in this sequence.",
        es: "D cambia la figura a un rombo: la figura nunca cambia en esta secuencia.",
      },
    ],
    tip: {
      en: "When a sequence changes position and rotation together, measure both progressions separately — they rarely share the same step size.",
      es: "Cuando una secuencia cambia posición y rotación a la vez, mide ambas progresiones por separado: rara vez comparten el mismo paso.",
    },
    diagram: {
      panels: [
        P([S("pentagon", true, 20, 50, 28, 0)], N1),
        P([S("pentagon", true, 40, 50, 28, 45)], N2),
        P([S("pentagon", true, 60, 50, 28, 90)], N3),
      ],
      optionPanels: [
        P([S("pentagon", true, 80, 50, 28, 135)]),
        P([S("pentagon", true, 80, 50, 28, 90)]),
        P([S("pentagon", true, 60, 50, 28, 135)]),
        P([S("diamond", true, 80, 50, 28, 135)]),
      ],
      rule: {
        en: "Each step: move 20 right AND rotate 45° clockwise.",
        es: "Cada paso: mover 20 a la derecha Y girar 45° en el sentido de las agujas del reloj.",
      },
    },
  },
  {
    id: "d-m-04",
    category: "diagrammatic",
    difficulty: "medium",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Remove the arrow and rotate the circle 180°.",
          es: "Elimina la flecha y gira el círculo 180°.",
        },
      },
      {
        id: "b",
        label: {
          en: "Remove the circle and invert the arrow's fill.",
          es: "Elimina el círculo e invierte el relleno de la flecha.",
        },
      },
      {
        id: "c",
        label: {
          en: "Remove the circle and rotate the arrow 180°.",
          es: "Elimina el círculo y gira la flecha 180°.",
        },
      },
      {
        id: "d",
        label: {
          en: "Swap the shapes and rotate the arrow 90°.",
          es: "Intercambia las figuras y gira la flecha 90°.",
        },
      },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The circle disappears, and the arrow stays on the right but flips from pointing up to pointing down: a 180° rotation. Its fill stays solid.",
      es: "El círculo desaparece y la flecha permanece a la derecha pero pasa de apuntar hacia arriba a apuntar hacia abajo: una rotación de 180°. Su relleno sigue siendo sólido.",
    },
    whyWrong: [
      {
        en: "A removes the wrong shape — the arrow survives, the circle does not.",
        es: "A elimina la figura equivocada: la flecha sobrevive, el círculo no.",
      },
      {
        en: "B removes the right shape but the fill never changes. D moves nothing and rotates the wrong amount.",
        es: "B elimina la figura correcta pero el relleno nunca cambia. D no mueve nada y gira una cantidad equivocada.",
      },
    ],
    tip: {
      en: "First note which shapes survive; then describe what happened to the survivor.",
      es: "Primero anota qué figuras sobreviven; luego describe qué le ocurrió a la superviviente.",
    },
    diagram: {
      panels: [
        P([S("circle", true, 30, 50, 26), S("arrow", true, 70, 50, 28, 0)], IN),
        P([S("arrow", true, 70, 50, 28, 180)], OUT),
      ],
      rule: {
        en: "Remove the circle AND rotate the arrow 180°.",
        es: "Eliminar el círculo Y girar la flecha 180°.",
      },
    },
  },
  {
    id: "d-m-05",
    category: "diagrammatic",
    difficulty: "medium",
    question: WHAT_OUTPUT,
    context: {
      en: "Rule: swap the two shapes' positions and invert each shape's fill.",
      es: "Regla: intercambia las posiciones de las dos figuras e invierte el relleno de cada figura.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The shapes trade places and each flips its fill: the solid circle becomes an outline circle on the right, and the outline square becomes a solid square on the left. Panel A shows exactly that.",
      es: "Las figuras intercambian sus lugares y cada una invierte su relleno: el círculo sólido pasa a ser un círculo de contorno a la derecha, y el cuadrado de contorno pasa a ser un cuadrado sólido a la izquierda. El panel A muestra exactamente eso.",
    },
    whyWrong: [
      {
        en: "B swaps the positions but keeps the fills unchanged — only half the rule.",
        es: "B intercambia las posiciones pero mantiene los rellenos: solo la mitad de la regla.",
      },
      {
        en: "C inverts the fills but leaves the shapes in place. D applies nothing at all.",
        es: "C invierte los rellenos pero deja las figuras en su sitio. D no aplica nada.",
      },
    ],
    tip: {
      en: "Distractors often apply just one half of a two-part rule — check both halves before choosing.",
      es: "Los distractores suelen aplicar solo la mitad de una regla de dos partes: comprueba ambas mitades antes de elegir.",
    },
    diagram: {
      panels: [P([S("circle", true, 30, 50, 26), S("square", false, 70, 50, 26)], IN)],
      optionPanels: [
        P([S("square", true, 30, 50, 26), S("circle", false, 70, 50, 26)]),
        P([S("square", false, 30, 50, 26), S("circle", true, 70, 50, 26)]),
        P([S("circle", false, 30, 50, 26), S("square", true, 70, 50, 26)]),
        P([S("circle", true, 30, 50, 26), S("square", false, 70, 50, 26)]),
      ],
      rule: {
        en: "Swap positions AND invert both fills.",
        es: "Intercambiar posiciones E invertir ambos rellenos.",
      },
    },
  },
  {
    id: "d-m-06",
    category: "diagrammatic",
    difficulty: "medium",
    question: MISSING_PIECE,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Each step adds one triangle on the right, and the fills alternate starting with solid: 1 solid; solid, outline; solid, outline, solid — so step 4 is solid, outline, solid, outline. Panel D matches.",
      es: "Cada paso añade un triángulo a la derecha y los rellenos se alternan empezando por sólido: 1 sólido; sólido, contorno; sólido, contorno, sólido; por tanto el paso 4 es sólido, contorno, sólido, contorno. El panel D coincide.",
    },
    whyWrong: [
      {
        en: "A repeats panel 3 instead of adding a fourth triangle.",
        es: "A repite el panel 3 en lugar de añadir un cuarto triángulo.",
      },
      {
        en: "B adds the triangle but breaks the alternation (all solid). C starts the alternation with outline instead of solid.",
        es: "B añade el triángulo pero rompe la alternancia (todos sólidos). C empieza la alternancia con contorno en lugar de sólido.",
      },
    ],
    tip: {
      en: "When a sequence grows, track two things: the count (does it rise by one each step?) and the pattern of the new items.",
      es: "Cuando una secuencia crece, sigue dos cosas: el conteo (¿aumenta en uno cada paso?) y el patrón de los elementos nuevos.",
    },
    diagram: {
      panels: [
        P([S("triangle", true, 20, 50, 16)], N1),
        P([S("triangle", true, 20, 50, 16), S("triangle", false, 40, 50, 16)], N2),
        P([
          S("triangle", true, 20, 50, 16),
          S("triangle", false, 40, 50, 16),
          S("triangle", true, 60, 50, 16),
        ], N3),
        P([], QQ),
      ],
      optionPanels: [
        P([
          S("triangle", true, 20, 50, 16),
          S("triangle", false, 40, 50, 16),
          S("triangle", true, 60, 50, 16),
        ]),
        P([
          S("triangle", true, 20, 50, 16),
          S("triangle", true, 40, 50, 16),
          S("triangle", true, 60, 50, 16),
          S("triangle", true, 80, 50, 16),
        ]),
        P([
          S("triangle", false, 20, 50, 16),
          S("triangle", true, 40, 50, 16),
          S("triangle", false, 60, 50, 16),
          S("triangle", true, 80, 50, 16),
        ]),
        P([
          S("triangle", true, 20, 50, 16),
          S("triangle", false, 40, 50, 16),
          S("triangle", true, 60, 50, 16),
          S("triangle", false, 80, 50, 16),
        ]),
      ],
      rule: {
        en: "Add one triangle per step; fills alternate solid, outline, solid, outline…",
        es: "Añadir un triángulo por paso; los rellenos se alternan sólido, contorno, sólido, contorno…",
      },
    },
  },
  {
    id: "d-m-07",
    category: "diagrammatic",
    difficulty: "medium",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Rotate the diamond 90° and invert its fill.",
          es: "Gira el rombo 90° e invierte su relleno.",
        },
      },
      {
        id: "b",
        label: {
          en: "Rotate the diamond 45° and invert its fill.",
          es: "Gira el rombo 45° e invierte su relleno.",
        },
      },
      {
        id: "c",
        label: {
          en: "Rotate the diamond 45° only (fill unchanged).",
          es: "Gira el rombo 45° solamente (relleno sin cambios).",
        },
      },
      {
        id: "d",
        label: {
          en: "Invert the fill only (no rotation).",
          es: "Invierte el relleno solamente (sin rotación).",
        },
      },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The solid diamond becomes an outline diamond (fill inverted) and tips 45° clockwise — its points now aim at the panel's corners. Position and size stay the same.",
      es: "El rombo sólido pasa a ser de contorno (relleno invertido) y se inclina 45° en el sentido de las agujas del reloj: sus puntas ahora apuntan a las esquinas del panel. La posición y el tamaño no cambian.",
    },
    whyWrong: [
      {
        en: "A rotates too far: 90° would leave the diamond pointing up-down again (it has 90° symmetry).",
        es: "A gira demasiado: 90° dejaría el rombo apuntando arriba-abajo de nuevo (tiene simetría de 90°).",
      },
      {
        en: "C gets the rotation right but misses the fill flip; D gets the fill right but misses the rotation.",
        es: "C acierta la rotación pero omite el cambio de relleno; D acierta el relleno pero omite la rotación.",
      },
    ],
    tip: {
      en: "A 45° turn is the classic “tip onto its corner” move — look for points that were aiming at edges now aiming at corners.",
      es: "Un giro de 45° es el clásico movimiento de «apoyarse en la esquina»: busca puntas que apuntaban a los bordes y ahora apuntan a las esquinas.",
    },
    diagram: {
      panels: [
        P([S("diamond", true, 50, 50, 30, 0)], IN),
        P([S("diamond", false, 50, 50, 30, 45)], OUT),
      ],
      rule: {
        en: "Rotate 45° clockwise AND invert the fill.",
        es: "Girar 45° en el sentido de las agujas del reloj E invertir el relleno.",
      },
    },
  },
  {
    id: "d-m-08",
    category: "diagrammatic",
    difficulty: "medium",
    question: COMPLETE_SEQ,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The square walks clockwise around the panel's corners: top-left (1) → top-right (2) → bottom-right (3) → bottom-left (4). Panel C shows the square at (30, 70).",
      es: "El cuadrado recorre las esquinas del panel en el sentido de las agujas del reloj: superior izquierda (1) → superior derecha (2) → inferior derecha (3) → inferior izquierda (4). El panel C muestra el cuadrado en (30, 70).",
    },
    whyWrong: [
      {
        en: "A repeats panel 3 and B steps backwards to panel 2 — the walk never stalls or reverses.",
        es: "A repite el panel 3 y B retrocede al panel 2: el recorrido nunca se detiene ni retrocede.",
      },
      {
        en: "D jumps back to the start (top-left); the sequence continues forward to the bottom-left.",
        es: "D salta de vuelta al inicio (superior izquierda); la secuencia continúa hacia la inferior izquierda.",
      },
    ],
    tip: {
      en: "Plot the centres in your head and join the dots — corner-walk sequences draw a clear path.",
      es: "Traza los centros mentalmente y une los puntos: las secuencias que recorren esquinas dibujan un camino claro.",
    },
    diagram: {
      panels: [
        P([S("square", true, 30, 30, 26)], N1),
        P([S("square", true, 70, 30, 26)], N2),
        P([S("square", true, 70, 70, 26)], N3),
      ],
      optionPanels: [
        P([S("square", true, 70, 70, 26)]),
        P([S("square", true, 70, 30, 26)]),
        P([S("square", true, 30, 70, 26)]),
        P([S("square", true, 30, 30, 26)]),
      ],
      rule: {
        en: "Move clockwise to the next corner each step.",
        es: "Moverse a la siguiente esquina en el sentido de las agujas del reloj en cada paso.",
      },
    },
  },
  // ==================== HARD (two-rule combinations, longer sequences) ====================
  {
    id: "d-h-01",
    category: "diagrammatic",
    difficulty: "hard",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Swap the positions and rotate each shape 90° clockwise (fills unchanged).",
          es: "Intercambia las posiciones y gira cada figura 90° en el sentido de las agujas del reloj (rellenos sin cambios).",
        },
      },
      {
        id: "b",
        label: {
          en: "Swap the positions and invert both fills (no rotation).",
          es: "Intercambia las posiciones e invierte ambos rellenos (sin rotación).",
        },
      },
      {
        id: "c",
        label: {
          en: "Rotate each shape 90° clockwise and invert both fills (no swap).",
          es: "Gira cada figura 90° en el sentido de las agujas del reloj e invierte ambos rellenos (sin intercambio).",
        },
      },
      {
        id: "d",
        label: {
          en: "Swap the positions, rotate each shape 90° clockwise, and invert both fills.",
          es: "Intercambia las posiciones, gira cada figura 90° en el sentido de las agujas del reloj e invierte ambos rellenos.",
        },
      },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Three things change together: the shapes trade sides (circle right, arrow left), the up-pointing arrow turns to point right (90° clockwise; the circle's rotation is invisible), and each shape flips its fill — the circle goes solid → outline and the arrow goes outline → solid.",
      es: "Tres cosas cambian a la vez: las figuras intercambian sus lados (círculo a la derecha, flecha a la izquierda), la flecha que apuntaba hacia arriba pasa a apuntar a la derecha (90° en el sentido de las agujas del reloj; la rotación del círculo es invisible) y cada figura invierte su relleno: el círculo pasa de sólido a contorno y la flecha de contorno a sólido.",
    },
    whyWrong: [
      {
        en: "A misses the fill flips; B misses the rotation; C misses the swap — each captures only two of the three changes.",
        es: "A omite los cambios de relleno; B omite la rotación; C omite el intercambio: cada una captura solo dos de los tres cambios.",
      },
    ],
    tip: {
      en: "Hard items stack rules. List every difference you see (position, rotation, fill, count) and pick the option that accounts for all of them.",
      es: "Los ítems difíciles apilan reglas. Enumera cada diferencia que veas (posición, rotación, relleno, conteo) y elige la opción que explique todas.",
    },
    diagram: {
      panels: [
        P([S("circle", true, 30, 50, 26), S("arrow", false, 70, 50, 28, 0)], IN),
        P([S("arrow", true, 30, 50, 28, 90), S("circle", false, 70, 50, 26)], OUT),
      ],
      rule: {
        en: "Swap positions AND rotate each shape 90° clockwise AND invert both fills.",
        es: "Intercambiar posiciones Y girar cada figura 90° en el sentido de las agujas del reloj E invertir ambos rellenos.",
      },
    },
  },
  {
    id: "d-h-02",
    category: "diagrammatic",
    difficulty: "hard",
    question: COMPLETE_SEQ,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Two patterns run together: the arrow rotates 90° clockwise each step (up → right → down → left) and the fill alternates (solid → outline → solid → outline). Step 4 must point left and be outline: panel B.",
      es: "Dos patrones avanzan juntos: la flecha gira 90° en el sentido de las agujas del reloj en cada paso (arriba → derecha → abajo → izquierda) y el relleno se alterna (sólido → contorno → sólido → contorno). El paso 4 debe apuntar a la izquierda y ser de contorno: panel B.",
    },
    whyWrong: [
      {
        en: "A points left but keeps the fill solid — the alternation demands outline.",
        es: "A apunta a la izquierda pero mantiene el relleno sólido: la alternancia exige contorno.",
      },
      {
        en: "C is outline but repeats step 3's direction. D points the wrong way entirely (right).",
        es: "C es de contorno pero repite la dirección del paso 3. D apunta en la dirección totalmente equivocada (derecha).",
      },
    ],
    tip: {
      en: "With two simultaneous patterns, solve each one independently, then combine the answers.",
      es: "Con dos patrones simultáneos, resuelve cada uno por separado y luego combina las respuestas.",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 50, 50, 30, 0)], N1),
        P([S("arrow", false, 50, 50, 30, 90)], N2),
        P([S("arrow", true, 50, 50, 30, 180)], N3),
      ],
      optionPanels: [
        P([S("arrow", true, 50, 50, 30, 270)]),
        P([S("arrow", false, 50, 50, 30, 270)]),
        P([S("arrow", false, 50, 50, 30, 180)]),
        P([S("arrow", true, 50, 50, 30, 90)]),
      ],
      rule: {
        en: "Each step: rotate 90° clockwise AND alternate the fill.",
        es: "Cada paso: girar 90° en el sentido de las agujas del reloj Y alternar el relleno.",
      },
    },
  },
  {
    id: "d-h-03",
    category: "diagrammatic",
    difficulty: "hard",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Remove the circle and square, move the triangle to the centre and rotate it 180°.",
          es: "Elimina el círculo y el cuadrado, mueve el triángulo al centro y gíralo 180°.",
        },
      },
      {
        id: "b",
        label: {
          en: "Remove the triangle and move the circle to the centre.",
          es: "Elimina el triángulo y mueve el círculo al centro.",
        },
      },
      {
        id: "c",
        label: {
          en: "Invert all fills and rotate the triangle 180°.",
          es: "Invierte todos los rellenos y gira el triángulo 180°.",
        },
      },
      {
        id: "d",
        label: {
          en: "Remove the circle and keep the square and triangle in place.",
          es: "Elimina el círculo y mantén el cuadrado y el triángulo en su sitio.",
        },
      },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Only the triangle survives: the circle and square are removed. The survivor moves from (50, 70) to the centre (50, 50) and flips from pointing up to pointing down — a 180° rotation. Its fill stays outline.",
      es: "Solo sobrevive el triángulo: el círculo y el cuadrado se eliminan. El superviviente se mueve de (50, 70) al centro (50, 50) y pasa de apuntar hacia arriba a apuntar hacia abajo: una rotación de 180°. Su relleno sigue siendo de contorno.",
    },
    whyWrong: [
      {
        en: "B removes the wrong shape — the triangle is the survivor, not the victim.",
        es: "B elimina la figura equivocada: el triángulo es el superviviente, no la víctima.",
      },
      {
        en: "C removes nothing and flips fills that never change. D keeps shapes that disappear.",
        es: "C no elimina nada e invierte rellenos que nunca cambian. D conserva figuras que desaparecen.",
      },
    ],
    tip: {
      en: "Deletion questions are solved backwards: identify the survivor first, then describe its journey.",
      es: "Las preguntas de eliminación se resuelven al revés: identifica primero al superviviente y luego describe su recorrido.",
    },
    diagram: {
      panels: [
        P([
          S("circle", true, 30, 30, 24),
          S("square", true, 70, 30, 24),
          S("triangle", false, 50, 70, 30, 0),
        ], IN),
        P([S("triangle", false, 50, 50, 30, 180)], OUT),
      ],
      rule: {
        en: "Remove the circle and square AND move the triangle to the centre AND rotate it 180°.",
        es: "Eliminar el círculo y el cuadrado Y mover el triángulo al centro Y girarlo 180°.",
      },
    },
  },
  {
    id: "d-h-04",
    category: "diagrammatic",
    difficulty: "hard",
    question: MISSING_PIECE,
    context: {
      en: "The rule applies twice: each step rotates the arrow 90° clockwise and moves it down 20 units.",
      es: "La regla se aplica dos veces: cada paso gira la flecha 90° en el sentido de las agujas del reloj y la mueve 20 unidades hacia abajo.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "After one application of the rule, the up-pointing arrow at (50, 20) becomes a right-pointing arrow at (50, 40): panel C. Applying it again gives the down-pointing arrow at (50, 60) shown in OUTPUT.",
      es: "Tras una aplicación de la regla, la flecha que apunta hacia arriba en (50, 20) pasa a apuntar a la derecha en (50, 40): panel C. Al aplicarla de nuevo se obtiene la flecha que apunta hacia abajo en (50, 60) mostrada en la SALIDA.",
    },
    whyWrong: [
      {
        en: "A moves correctly but rotates twice (180°) instead of once. B moves correctly but does not rotate at all.",
        es: "A se mueve bien pero gira dos veces (180°) en lugar de una. B se mueve bien pero no gira nada.",
      },
      {
        en: "D is the OUTPUT panel itself — the missing piece sits between INPUT and OUTPUT.",
        es: "D es el propio panel de SALIDA: la pieza que falta está entre la ENTRADA y la SALIDA.",
      },
    ],
    tip: {
      en: "For a missing middle, apply the rule forward from INPUT — or backward from OUTPUT. Both must land on the same panel.",
      es: "Para un eslabón intermedio que falta, aplica la regla hacia adelante desde la ENTRADA, o hacia atrás desde la SALIDA. Ambas deben llegar al mismo panel.",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 50, 20, 28, 0)], IN),
        P([], QQ),
        P([S("arrow", true, 50, 60, 28, 180)], OUT),
      ],
      optionPanels: [
        P([S("arrow", true, 50, 40, 28, 180)]),
        P([S("arrow", true, 50, 40, 28, 0)]),
        P([S("arrow", true, 50, 40, 28, 90)]),
        P([S("arrow", true, 50, 60, 28, 90)]),
      ],
      rule: {
        en: "Each step: rotate 90° clockwise AND move down 20.",
        es: "Cada paso: girar 90° en el sentido de las agujas del reloj Y mover 20 hacia abajo.",
      },
    },
  },
  {
    id: "d-h-05",
    category: "diagrammatic",
    difficulty: "hard",
    question: COMPLETE_SEQ,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The two shapes walk past each other: the circle moves right 20 per step (20 → 40 → 60 → 80) along y=35, while the square moves left 20 per step (80 → 60 → 40 → 20) along y=65. Fills never change. Step 4 is panel A.",
      es: "Las dos figuras se cruzan: el círculo se mueve 20 a la derecha por paso (20 → 40 → 60 → 80) sobre y=35, mientras el cuadrado se mueve 20 a la izquierda por paso (80 → 60 → 40 → 20) sobre y=65. Los rellenos nunca cambian. El paso 4 es el panel A.",
    },
    whyWrong: [
      {
        en: "B stalls at step 3 — both progressions must advance.",
        es: "B se estanca en el paso 3: ambas progresiones deben avanzar.",
      },
      {
        en: "C swaps the rows the shapes travel on. D puts both shapes on the wrong rows.",
        es: "C intercambia las filas por las que viaja cada figura. D coloca ambas figuras en las filas equivocadas.",
      },
    ],
    tip: {
      en: "With two moving shapes, track each one separately — give each shape its own mental “name” and follow it.",
      es: "Con dos figuras en movimiento, sigue cada una por separado: dale a cada figura su propio «nombre» mental y síguela.",
    },
    diagram: {
      panels: [
        P([S("circle", true, 20, 35, 24), S("square", false, 80, 65, 24)], N1),
        P([S("circle", true, 40, 35, 24), S("square", false, 60, 65, 24)], N2),
        P([S("circle", true, 60, 35, 24), S("square", false, 40, 65, 24)], N3),
      ],
      optionPanels: [
        P([S("circle", true, 80, 35, 24), S("square", false, 20, 65, 24)]),
        P([S("circle", true, 60, 35, 24), S("square", false, 40, 65, 24)]),
        P([S("circle", true, 20, 65, 24), S("square", false, 80, 35, 24)]),
        P([S("circle", true, 80, 65, 24), S("square", false, 20, 35, 24)]),
      ],
      rule: {
        en: "Circle moves right 20/step; square moves left 20/step; fills unchanged.",
        es: "El círculo se mueve 20 a la derecha por paso; el cuadrado 20 a la izquierda por paso; rellenos sin cambios.",
      },
    },
  },
  {
    id: "d-h-06",
    category: "diagrammatic",
    difficulty: "hard",
    question: WHAT_OUTPUT,
    context: {
      en: "Rule: invert both fills, rotate both shapes 180°, and add a solid star at the centre.",
      es: "Regla: invierte ambos rellenos, gira ambas figuras 180° y añade una estrella sólida en el centro.",
    },
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "The solid up-triangle becomes an outline down-triangle (fill inverted, rotated 180°) on the left; the outline up-arrow becomes a solid down-arrow (fill inverted, rotated 180°) on the right; and a new solid star appears at the centre (50, 50). Panel D shows all three changes.",
      es: "El triángulo sólido hacia arriba pasa a ser un triángulo de contorno hacia abajo (relleno invertido, girado 180°) a la izquierda; la flecha de contorno hacia arriba pasa a ser una flecha sólida hacia abajo (relleno invertido, girada 180°) a la derecha; y aparece una nueva estrella sólida en el centro (50, 50). El panel D muestra los tres cambios.",
    },
    whyWrong: [
      {
        en: "A forgets the new star. B adds the star as outline instead of solid.",
        es: "A olvida la nueva estrella. B añade la estrella como contorno en lugar de sólida.",
      },
      {
        en: "C rotates correctly but keeps the original fills — the inversion is missing.",
        es: "C gira correctamente pero mantiene los rellenos originales: falta la inversión.",
      },
    ],
    tip: {
      en: "A three-part rule needs three checks. Count the changes you expect before looking at the options.",
      es: "Una regla de tres partes requiere tres comprobaciones. Cuenta los cambios que esperas antes de mirar las opciones.",
    },
    diagram: {
      panels: [P([S("triangle", true, 30, 50, 28, 0), S("arrow", false, 70, 50, 28, 0)], IN)],
      optionPanels: [
        P([S("triangle", false, 30, 50, 28, 180), S("arrow", true, 70, 50, 28, 180)]),
        P([
          S("triangle", false, 30, 50, 28, 180),
          S("arrow", true, 70, 50, 28, 180),
          S("star", false, 50, 50, 24),
        ]),
        P([
          S("triangle", true, 30, 50, 28, 180),
          S("arrow", false, 70, 50, 28, 180),
          S("star", true, 50, 50, 24),
        ]),
        P([
          S("triangle", false, 30, 50, 28, 180),
          S("arrow", true, 70, 50, 28, 180),
          S("star", true, 50, 50, 24),
        ]),
      ],
      rule: {
        en: "Invert both fills AND rotate both 180° AND add a solid star at the centre.",
        es: "Invertir ambos rellenos Y girar ambas 180° Y añadir una estrella sólida en el centro.",
      },
    },
  },
  {
    id: "d-h-07",
    category: "diagrammatic",
    difficulty: "hard",
    question: WHICH_RULE,
    options: [
      {
        id: "a",
        label: {
          en: "Swap the positions and rotate each shape 180°.",
          es: "Intercambia las posiciones y gira cada figura 180°.",
        },
      },
      {
        id: "b",
        label: {
          en: "Swap the positions and rotate each shape 90° clockwise.",
          es: "Intercambia las posiciones y gira cada figura 90° en el sentido de las agujas del reloj.",
        },
      },
      {
        id: "c",
        label: {
          en: "Rotate each shape 90° clockwise in place (no swap).",
          es: "Gira cada figura 90° en el sentido de las agujas del reloj en su sitio (sin intercambio).",
        },
      },
      {
        id: "d",
        label: {
          en: "Swap the positions and invert both fills.",
          es: "Intercambia las posiciones e invierte ambos rellenos.",
        },
      },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The shapes trade corners: the up-arrow leaves (30, 30) and the pentagon leaves (70, 70). The arrow arrives at (70, 70) pointing right and the pentagon arrives at (30, 30) tipped 90° clockwise — both rotated, neither changed fill.",
      es: "Las figuras intercambian sus esquinas: la flecha hacia arriba abandona (30, 30) y el pentágono abandona (70, 70). La flecha llega a (70, 70) apuntando a la derecha y el pentágono llega a (30, 30) inclinado 90° en el sentido de las agujas del reloj: ambas giradas, ninguna con cambio de relleno.",
    },
    whyWrong: [
      {
        en: "A rotates too far: 180° would point the arrow down, not right.",
        es: "A gira demasiado: 180° dejaría la flecha apuntando hacia abajo, no a la derecha.",
      },
      {
        en: "C keeps each shape in its original corner — but they clearly traded places. D flips fills that stay solid throughout.",
        es: "C mantiene cada figura en su esquina original, pero claramente intercambiaron sus lugares. D invierte rellenos que permanecen sólidos en todo momento.",
      },
    ],
    tip: {
      en: "When shapes both move and turn, decide the move first (where did each land?) and the turn second (which way does it point now?).",
      es: "Cuando las figuras se mueven y giran a la vez, decide primero el movimiento (¿dónde aterrizó cada una?) y luego el giro (¿hacia dónde apunta ahora?).",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 30, 30, 28, 0), S("pentagon", true, 70, 70, 30, 0)], IN),
        P([S("pentagon", true, 30, 30, 30, 90), S("arrow", true, 70, 70, 28, 90)], OUT),
      ],
      rule: {
        en: "Swap positions AND rotate each shape 90° clockwise (fills unchanged).",
        es: "Intercambiar posiciones Y girar cada figura 90° en el sentido de las agujas del reloj (rellenos sin cambios).",
      },
    },
  },
  {
    id: "d-h-08",
    category: "diagrammatic",
    difficulty: "hard",
    question: COMPLETE_SEQ,
    options: [
      { id: "a", label: { en: "A", es: "A" } },
      { id: "b", label: { en: "B", es: "B" } },
      { id: "c", label: { en: "C", es: "C" } },
      { id: "d", label: { en: "D", es: "D" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The arrow orbits the panel clockwise while turning 90° clockwise each step: up at top-left (1) → right at top-right (2) → down at bottom-right (3) → left at bottom-left (4) → up at top-left again (5). Panel C shows the up-arrow back at (30, 30).",
      es: "La flecha orbita el panel en el sentido de las agujas del reloj mientras gira 90° en el mismo sentido en cada paso: arriba en superior izquierda (1) → derecha en superior derecha (2) → abajo en inferior derecha (3) → izquierda en inferior izquierda (4) → arriba en superior izquierda de nuevo (5). El panel C muestra la flecha hacia arriba de vuelta en (30, 30).",
    },
    whyWrong: [
      {
        en: "A is at the right corner but points right instead of up — position right, rotation wrong.",
        es: "A está en la esquina correcta pero apunta a la derecha en lugar de hacia arriba: posición bien, rotación mal.",
      },
      {
        en: "B points up but sits at the bottom-right — rotation right, position wrong. D changes the shape to a triangle.",
        es: "B apunta hacia arriba pero está en la inferior derecha: rotación bien, posición mal. D cambia la figura a un triángulo.",
      },
    ],
    tip: {
      en: "Orbit sequences wrap around: after the last corner comes the first corner again — don't be fooled by a panel that “looks like the start” but points the wrong way.",
      es: "Las secuencias orbitales se cierran: tras la última esquina vuelve la primera; no te dejes engañar por un panel que «parece el inicio» pero apunta en la dirección equivocada.",
    },
    diagram: {
      panels: [
        P([S("arrow", true, 30, 30, 28, 0)], N1),
        P([S("arrow", true, 70, 30, 28, 90)], N2),
        P([S("arrow", true, 70, 70, 28, 180)], N3),
        P([S("arrow", true, 30, 70, 28, 270)], N4),
      ],
      optionPanels: [
        P([S("arrow", true, 30, 30, 28, 90)]),
        P([S("arrow", true, 70, 70, 28, 0)]),
        P([S("arrow", true, 30, 30, 28, 0)]),
        P([S("triangle", true, 30, 30, 28, 0)]),
      ],
      rule: {
        en: "Each step: move clockwise to the next corner AND rotate 90° clockwise.",
        es: "Cada paso: moverse a la siguiente esquina en el sentido de las agujas del reloj Y girar 90° en el mismo sentido.",
      },
    },
  },
];

export default questions;
