import type { Question } from "../../types";

// NUMERICAL REASONING QUESTION BANK — Saville-style data interpretation.
// All scenarios, companies and datasets are 100% original and fictional.
// Every answer was recomputed by hand during authoring.

const questions: Question[] = [
  // ================= EASY =================
  {
    id: "n-e-01",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Nordam Foods reports annual sales by product line.",
      es: "Nordam Foods presenta sus ventas anuales por línea de producto.",
    },
    question: {
      en: "What percentage of total annual sales came from the Beta line?",
      es: "¿Qué porcentaje de las ventas anuales totales correspondió a la línea Beta?",
    },
    options: [
      { id: "a", label: { en: "32%", es: "32 %" } },
      { id: "b", label: { en: "40%", es: "40 %" } },
      { id: "c", label: { en: "45%", es: "45 %" } },
      { id: "d", label: { en: "36%", es: "36 %" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Total sales are 48 + 72 + 60 = €180m, and 72 ÷ 180 = 0.40, i.e. 40%.",
      es: "Las ventas totales son 48 + 72 + 60 = 180 M€, y 72 ÷ 180 = 0,40, es decir, 40 %.",
    },
    tip: {
      en: "For 'share of total' questions, always compute the total first — it is the base of the percentage.",
      es: "En preguntas de 'cuota del total', calcula siempre primero el total: es la base del porcentaje.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Annual sales by product line (€ million)",
          es: "Ventas anuales por línea de producto (millones de €)",
        },
        headers: [
          { en: "Product line", es: "Línea de producto" },
          { en: "Sales (€m)", es: "Ventas (M€)" },
        ],
        rows: [
          ["Alpha", "48"],
          ["Beta", "72"],
          ["Gamma", "60"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: total sales = 48 + 72 + 60 = 180 (€m).",
          es: "Identifica los datos correctos: ventas totales = 48 + 72 + 60 = 180 (M€).",
        },
        {
          en: "Decide the calculation: Beta's share = 72 ÷ 180.",
          es: "Decide el cálculo: cuota de Beta = 72 ÷ 180.",
        },
        {
          en: "Execute: 72 ÷ 180 = 0.40, then × 100 = 40%.",
          es: "Ejecuta: 72 ÷ 180 = 0,40; luego × 100 = 40 %.",
        },
        {
          en: "Check units: the answer is a share of a total, so a percentage is the right unit.",
          es: "Comprueba las unidades: la respuesta es una parte de un total, por lo que un porcentaje es la unidad correcta.",
        },
      ],
    },
  },
  {
    id: "n-e-02",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Brightline Logistics reports its operating costs each quarter.",
      es: "Brightline Logistics presenta sus costes operativos cada trimestre.",
    },
    question: {
      en: "By how much did operating costs increase from Q1 to Q2?",
      es: "¿En cuánto aumentaron los costes operativos del Q1 al Q2?",
    },
    options: [
      { id: "a", label: { en: "€24,000", es: "24 000 €" } },
      { id: "b", label: { en: "€22,000", es: "22 000 €" } },
      { id: "c", label: { en: "€28,000", es: "28 000 €" } },
      { id: "d", label: { en: "€26,000", es: "26 000 €" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "238 − 212 = 26, and the table is in € thousands, so the increase is €26,000.",
      es: "238 − 212 = 26, y la tabla está en miles de €, por lo que el aumento es de 26 000 €.",
    },
    tip: {
      en: "When a table uses €000, multiply your result by 1,000 before picking an answer.",
      es: "Cuando una tabla usa miles de €, multiplica tu resultado por 1000 antes de elegir una respuesta.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Operating costs (€ thousand)",
          es: "Costes operativos (miles de €)",
        },
        headers: [
          { en: "Quarter", es: "Trimestre" },
          { en: "Operating costs (€000)", es: "Costes operativos (miles €)" },
        ],
        rows: [
          ["Q1", "212"],
          ["Q2", "238"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: Q1 = 212, Q2 = 238 (in €000).",
          es: "Identifica los datos correctos: Q1 = 212, Q2 = 238 (en miles de €).",
        },
        {
          en: "Decide the calculation: an increase means subtract, Q2 − Q1.",
          es: "Decide el cálculo: un aumento significa restar, Q2 − Q1.",
        },
        {
          en: "Execute: 238 − 212 = 26.",
          es: "Ejecuta: 238 − 212 = 26.",
        },
        {
          en: "Check units: the table is in €000, so 26 means 26 × 1,000 = €26,000 — never answer '26'.",
          es: "Comprueba las unidades: la tabla está en miles de €, por lo que 26 significa 26 × 1000 = 26 000 €; nunca respondas «26».",
        },
      ],
    },
  },
  {
    id: "n-e-03",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Kestrel Apparel tracks the number of units its warehouse ships each month.",
      es: "Kestrel Apparel registra el número de unidades que su almacén envía cada mes.",
    },
    question: {
      en: "A warehouse shipped 800 units last month and 1,000 units this month. What was the percentage increase?",
      es: "Un almacén envió 800 unidades el mes pasado y 1000 unidades este mes. ¿Cuál fue el aumento porcentual?",
    },
    options: [
      { id: "a", label: { en: "25%", es: "25 %" } },
      { id: "b", label: { en: "20%", es: "20 %" } },
      { id: "c", label: { en: "30%", es: "30 %" } },
      { id: "d", label: { en: "125%", es: "125 %" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The increase is 1,000 − 800 = 200 units, and 200 ÷ 800 = 0.25 = 25%.",
      es: "El aumento es de 1000 − 800 = 200 unidades, y 200 ÷ 800 = 0,25 = 25 %.",
    },
    tip: {
      en: "Percentage change always divides by the ORIGINAL value, never the new one.",
      es: "El cambio porcentual siempre divide entre el valor ORIGINAL, nunca entre el nuevo.",
    },
    numeric: {
      calculationSteps: [
        {
          en: "Identify the right data: old value = 800, new value = 1,000, so the change = 200.",
          es: "Identifica los datos correctos: valor anterior = 800, valor nuevo = 1000, por lo que el cambio = 200.",
        },
        {
          en: "Decide the calculation: change ÷ original value (last month is the base).",
          es: "Decide el cálculo: cambio ÷ valor original (el mes pasado es la base).",
        },
        {
          en: "Execute: 200 ÷ 800 = 0.25, then × 100 = 25%.",
          es: "Ejecuta: 200 ÷ 800 = 0,25; luego × 100 = 25 %.",
        },
        {
          en: "Check: 125% is the new value as a share of the old — that is not the increase, so reject it.",
          es: "Comprueba: 125 % es el valor nuevo como cuota del anterior; eso no es el aumento, así que descártalo.",
        },
      ],
    },
  },
  {
    id: "n-e-04",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Vela Coffee tracks monthly sales at its flagship store.",
      es: "Vela Coffee registra las ventas mensuales de su tienda insignia.",
    },
    question: {
      en: "What was the average monthly sales over these four months?",
      es: "¿Cuál fue la venta mensual media de estos cuatro meses?",
    },
    options: [
      { id: "a", label: { en: "€12,500", es: "12 500 €" } },
      { id: "b", label: { en: "€14,000", es: "14 000 €" } },
      { id: "c", label: { en: "€13,000", es: "13 000 €" } },
      { id: "d", label: { en: "€13,500", es: "13 500 €" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "12 + 15 + 9 + 16 = 52, and 52 ÷ 4 = 13, i.e. €13,000 per month.",
      es: "12 + 15 + 9 + 16 = 52, y 52 ÷ 4 = 13, es decir, 13 000 € al mes.",
    },
    tip: {
      en: "For an average: sum first, then divide by the number of data points.",
      es: "Para una media: suma primero y luego divide entre el número de datos.",
    },
    numeric: {
      chartData: {
        type: "bar",
        title: {
          en: "Monthly sales (€ thousand)",
          es: "Ventas mensuales (miles de €)",
        },
        labels: ["Jan", "Feb", "Mar", "Apr"],
        values: [12, 15, 9, 16],
        unit: { en: "€000", es: "miles €" },
      },
      calculationSteps: [
        {
          en: "Identify the right data: the four bar values, 12, 15, 9 and 16 (€000).",
          es: "Identifica los datos correctos: los cuatro valores de las barras, 12, 15, 9 y 16 (miles de €).",
        },
        {
          en: "Decide the calculation: an average means sum ÷ count.",
          es: "Decide el cálculo: una media significa suma ÷ número de datos.",
        },
        {
          en: "Execute: 12 + 15 + 9 + 16 = 52; 52 ÷ 4 = 13.",
          es: "Ejecuta: 12 + 15 + 9 + 16 = 52; 52 ÷ 4 = 13.",
        },
        {
          en: "Check units: the chart is in €000, so 13 means €13,000 per month.",
          es: "Comprueba las unidades: el gráfico está en miles de €, por lo que 13 significa 13 000 € al mes.",
        },
      ],
    },
  },
  {
    id: "n-e-05",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "A delivery van has a maximum load of 2.4 tonnes of goods, packed on identical pallets.",
      es: "Una furgoneta de reparto tiene una carga máxima de 2,4 toneladas de mercancía, en palés idénticos.",
    },
    question: {
      en: "If each pallet weighs 600 kg, how many pallets can the van carry?",
      es: "Si cada palé pesa 600 kg, ¿cuántos palés puede llevar la furgoneta?",
    },
    options: [
      { id: "a", label: { en: "3", es: "3" } },
      { id: "b", label: { en: "4", es: "4" } },
      { id: "c", label: { en: "5", es: "5" } },
      { id: "d", label: { en: "40", es: "40" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "2.4 tonnes = 2,400 kg, and 2,400 ÷ 600 = 4 pallets.",
      es: "2,4 toneladas = 2400 kg, y 2400 ÷ 600 = 4 palés.",
    },
    tip: {
      en: "Convert to common units BEFORE dividing — tonnes to kilograms here.",
      es: "Convierte a unidades comunes ANTES de dividir: aquí, de toneladas a kilogramos.",
    },
    numeric: {
      calculationSteps: [
        {
          en: "Identify the right data: capacity 2.4 tonnes, pallet weight 600 kg — mixed units.",
          es: "Identifica los datos correctos: capacidad 2,4 toneladas, peso del palé 600 kg; unidades mezcladas.",
        },
        {
          en: "Decide the calculation: first convert tonnes to kg, then divide.",
          es: "Decide el cálculo: primero convierte toneladas a kg y luego divide.",
        },
        {
          en: "Execute: 2.4 × 1,000 = 2,400 kg; 2,400 ÷ 600 = 4.",
          es: "Ejecuta: 2,4 × 1000 = 2400 kg; 2400 ÷ 600 = 4.",
        },
        {
          en: "Check: 4 × 600 kg = 2,400 kg = 2.4 tonnes, which exactly fills the van.",
          es: "Comprueba: 4 × 600 kg = 2400 kg = 2,4 toneladas, que llena exactamente la furgoneta.",
        },
      ],
    },
  },
  {
    id: "n-e-06",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Solace Hotels monitors customer complaints per year.",
      es: "Solace Hotels registra las reclamaciones de clientes por año.",
    },
    question: {
      en: "By what percentage did customer complaints decrease from 2024 to 2025?",
      es: "¿En qué porcentaje disminuyeron las reclamaciones de clientes de 2024 a 2025?",
    },
    options: [
      { id: "a", label: { en: "20%", es: "20 %" } },
      { id: "b", label: { en: "33.3%", es: "33,3 %" } },
      { id: "c", label: { en: "75%", es: "75 %" } },
      { id: "d", label: { en: "25%", es: "25 %" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Complaints fell by 480 − 360 = 120, and 120 ÷ 480 = 0.25 = 25%.",
      es: "Las reclamaciones bajaron en 480 − 360 = 120, y 120 ÷ 480 = 0,25 = 25 %.",
    },
    tip: {
      en: "A decrease means: (old − new) ÷ old. 75% is what remains, not what was lost.",
      es: "Una disminución significa: (anterior − nuevo) ÷ anterior. El 75 % es lo que queda, no lo que se perdió.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Customer complaints per year",
          es: "Reclamaciones de clientes por año",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Complaints", es: "Reclamaciones" },
        ],
        rows: [
          ["2024", "480"],
          ["2025", "360"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: 2024 = 480, 2025 = 360.",
          es: "Identifica los datos correctos: 2024 = 480, 2025 = 360.",
        },
        {
          en: "Decide the calculation: drop = 480 − 360, then divide by the starting year (480).",
          es: "Decide el cálculo: caída = 480 − 360; luego divide entre el año inicial (480).",
        },
        {
          en: "Execute: 120 ÷ 480 = 0.25 = 25%.",
          es: "Ejecuta: 120 ÷ 480 = 0,25 = 25 %.",
        },
        {
          en: "Check: 360 is 75% of 480, so the missing part must be 25% — consistent.",
          es: "Comprueba: 360 es el 75 % de 480, por lo que la parte que falta debe ser el 25 %; es coherente.",
        },
      ],
    },
  },
  {
    id: "n-e-07",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Fernway Gardens reports headcount by department.",
      es: "Fernway Gardens presenta su plantilla por departamento.",
    },
    question: {
      en: "What percentage of employees work in Sales?",
      es: "¿Qué porcentaje de los empleados trabaja en Ventas?",
    },
    options: [
      { id: "a", label: { en: "45%", es: "45 %" } },
      { id: "b", label: { en: "30%", es: "30 %" } },
      { id: "c", label: { en: "25%", es: "25 %" } },
      { id: "d", label: { en: "55%", es: "55 %" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Total headcount is 45 + 30 + 25 = 100, and 45 ÷ 100 = 45%.",
      es: "La plantilla total es 45 + 30 + 25 = 100, y 45 ÷ 100 = 45 %.",
    },
    tip: {
      en: "When the total is a round number like 100, read the share directly — but always confirm the total first.",
      es: "Cuando el total es un número redondo como 100, lee la cuota directamente, pero confirma siempre primero el total.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Headcount by department",
          es: "Plantilla por departamento",
        },
        headers: [
          { en: "Department", es: "Departamento" },
          { en: "Employees", es: "Empleados" },
        ],
        rows: [
          ["Sales", "45"],
          ["Marketing", "30"],
          ["Support", "25"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: 45 in Sales; total = 45 + 30 + 25 = 100.",
          es: "Identifica los datos correctos: 45 en Ventas; total = 45 + 30 + 25 = 100.",
        },
        {
          en: "Decide the calculation: share = 45 ÷ 100.",
          es: "Decide el cálculo: cuota = 45 ÷ 100.",
        },
        {
          en: "Execute: 45 ÷ 100 = 0.45 = 45%.",
          es: "Ejecuta: 45 ÷ 100 = 0,45 = 45 %.",
        },
      ],
    },
  },
  {
    id: "n-e-08",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Beacon Retail tracks daily visitors to its online store.",
      es: "Beacon Retail registra las visitas diarias a su tienda en línea.",
    },
    question: {
      en: "By how many visitors did traffic increase from Monday to Thursday?",
      es: "¿En cuántas visitas aumentó el tráfico del lunes al jueves?",
    },
    options: [
      { id: "a", label: { en: "7,000", es: "7 000" } },
      { id: "b", label: { en: "8,000", es: "8 000" } },
      { id: "c", label: { en: "9,000", es: "9 000" } },
      { id: "d", label: { en: "11,000", es: "11 000" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "Thursday had 31 thousand visitors and Monday 22 thousand: 31 − 22 = 9, i.e. 9,000 visitors.",
      es: "El jueves hubo 31 mil visitas y el lunes 22 mil: 31 − 22 = 9, es decir, 9000 visitas.",
    },
    tip: {
      en: "Read only the two points the question asks about — ignore the rest of the series.",
      es: "Lee solo los dos puntos que pide la pregunta e ignora el resto de la serie.",
    },
    numeric: {
      chartData: {
        type: "line",
        title: {
          en: "Daily website visitors (thousands)",
          es: "Visitas diarias al sitio web (miles)",
        },
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        values: [22, 26, 24, 31, 28],
        unit: { en: "000 visitors", es: "miles de visitas" },
      },
      calculationSteps: [
        {
          en: "Identify the right data: Monday = 22, Thursday = 31 (thousands). Ignore the other days.",
          es: "Identifica los datos correctos: lunes = 22, jueves = 31 (miles). Ignora los demás días.",
        },
        {
          en: "Decide the calculation: Thursday − Monday.",
          es: "Decide el cálculo: jueves − lunes.",
        },
        {
          en: "Execute: 31 − 22 = 9.",
          es: "Ejecuta: 31 − 22 = 9.",
        },
        {
          en: "Check units: the axis is in thousands, so 9 means 9,000 visitors.",
          es: "Comprueba las unidades: el eje está en miles, por lo que 9 significa 9000 visitas.",
        },
      ],
    },
  },
  {
    id: "n-e-09",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Copperline Tools logs the hours spent on each phase of a project.",
      es: "Copperline Tools registra las horas dedicadas a cada fase de un proyecto.",
    },
    question: {
      en: "How many hours did the project take in total?",
      es: "¿Cuántas horas llevó el proyecto en total?",
    },
    options: [
      { id: "a", label: { en: "500", es: "500" } },
      { id: "b", label: { en: "550", es: "550" } },
      { id: "c", label: { en: "650", es: "650" } },
      { id: "d", label: { en: "600", es: "600" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "120 + 340 + 140 = 600 hours in total.",
      es: "120 + 340 + 140 = 600 horas en total.",
    },
    tip: {
      en: "A 'total' question is just addition — add every row once, no more.",
      es: "Una pregunta de «total» es solo una suma: suma cada fila una vez, ni más ni menos.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Project hours by phase",
          es: "Horas del proyecto por fase",
        },
        headers: [
          { en: "Phase", es: "Fase" },
          { en: "Hours", es: "Horas" },
        ],
        rows: [
          ["Design", "120"],
          ["Build", "340"],
          ["Testing", "140"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: the three phase totals, 120, 340 and 140.",
          es: "Identifica los datos correctos: los tres totales de fase, 120, 340 y 140.",
        },
        {
          en: "Decide the calculation: add all three phases.",
          es: "Decide el cálculo: suma las tres fases.",
        },
        {
          en: "Execute: 120 + 340 + 140 = 600 hours.",
          es: "Ejecuta: 120 + 340 + 140 = 600 horas.",
        },
      ],
    },
  },
  {
    id: "n-e-10",
    category: "numerical",
    difficulty: "easy",
    context: {
      en: "Nordam Foods breaks down annual revenue by region.",
      es: "Nordam Foods desglosa sus ingresos anuales por región.",
    },
    question: {
      en: "How much more revenue did the South generate than the West?",
      es: "¿Cuántos ingresos más generó el Sur que el Oeste?",
    },
    options: [
      { id: "a", label: { en: "€7m", es: "7 M€" } },
      { id: "b", label: { en: "€9m", es: "9 M€" } },
      { id: "c", label: { en: "€8m", es: "8 M€" } },
      { id: "d", label: { en: "€11m", es: "11 M€" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "South generated €22m and West €13m: 22 − 13 = €9m more.",
      es: "El Sur generó 22 M€ y el Oeste 13 M€: 22 − 13 = 9 M€ más.",
    },
    tip: {
      en: "'How much more' always means subtract the smaller value from the larger one.",
      es: "«Cuánto más» significa siempre restar el valor menor del mayor.",
    },
    numeric: {
      chartData: {
        type: "bar",
        title: {
          en: "Revenue by region (€ million)",
          es: "Ingresos por región (millones de €)",
        },
        labels: ["North", "South", "East", "West"],
        values: [15, 22, 18, 13],
        unit: { en: "€m", es: "M€" },
      },
      calculationSteps: [
        {
          en: "Identify the right data: South = 22, West = 13 (€m). The other regions are irrelevant.",
          es: "Identifica los datos correctos: Sur = 22, Oeste = 13 (M€). Las demás regiones son irrelevantes.",
        },
        {
          en: "Decide the calculation: South − West.",
          es: "Decide el cálculo: Sur − Oeste.",
        },
        {
          en: "Execute: 22 − 13 = 9.",
          es: "Ejecuta: 22 − 13 = 9.",
        },
        {
          en: "Check units: the chart is in € millions, so the answer is €9m.",
          es: "Comprueba las unidades: el gráfico está en millones de €, por lo que la respuesta es 9 M€.",
        },
      ],
    },
  },
  // ================= MEDIUM =================
  {
    id: "n-m-01",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Harlow & Finch reports revenue by region for 2023 and 2024.",
      es: "Harlow & Finch presenta sus ingresos por región de 2023 y 2024.",
    },
    question: {
      en: "Which region recorded the highest percentage revenue growth?",
      es: "¿Qué región registró el mayor crecimiento porcentual de ingresos?",
    },
    options: [
      { id: "a", label: { en: "North", es: "Norte" } },
      { id: "b", label: { en: "South", es: "Sur" } },
      { id: "c", label: { en: "East", es: "Este" } },
      { id: "d", label: { en: "All three grew by the same amount", es: "Las tres crecieron lo mismo" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "All three grew by €30m, but the percentages differ: North 30 ÷ 200 = 15%, South 30 ÷ 150 = 20%, East 30 ÷ 120 = 25%. East grew fastest in percentage terms.",
      es: "Las tres crecieron 30 M€, pero los porcentajes difieren: Norte 30 ÷ 200 = 15 %, Sur 30 ÷ 150 = 20 %, Este 30 ÷ 120 = 25 %. El Este creció más rápido en términos porcentuales.",
    },
    whyWrong: [
      {
        en: "Option (d) confuses absolute growth with percentage growth: €30m is the same amount, but not the same rate.",
        es: "La opción (d) confunde el crecimiento absoluto con el porcentual: 30 M€ es la misma cantidad, pero no la misma tasa.",
      },
    ],
    tip: {
      en: "Same absolute growth ≠ same percentage growth — always divide by each series' own base.",
      es: "Mismo crecimiento absoluto ≠ mismo crecimiento porcentual: divide siempre entre la base propia de cada serie.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Revenue by region (€ million)",
          es: "Ingresos por región (millones de €)",
        },
        headers: [
          { en: "Region", es: "Región" },
          { en: "2023", es: "2023" },
          { en: "2024", es: "2024" },
        ],
        rows: [
          ["North", "200", "230"],
          ["South", "150", "180"],
          ["East", "120", "150"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: each region's 2023 base and its 2024 value.",
          es: "Identifica los datos correctos: la base de 2023 de cada región y su valor de 2024.",
        },
        {
          en: "Decide the calculation: (2024 − 2023) ÷ 2023 for each region — three small divisions, not one big one.",
          es: "Decide el cálculo: (2024 − 2023) ÷ 2023 para cada región; tres divisiones pequeñas, no una grande.",
        },
        {
          en: "Execute: North 30 ÷ 200 = 15%; South 30 ÷ 150 = 20%; East 30 ÷ 120 = 25%.",
          es: "Ejecuta: Norte 30 ÷ 200 = 15 %; Sur 30 ÷ 150 = 20 %; Este 30 ÷ 120 = 25 %.",
        },
        {
          en: "Check: the smallest base (East, 120) with the same €30m gain must give the highest rate — consistent.",
          es: "Comprueba: la base más pequeña (Este, 120) con la misma ganancia de 30 M€ debe dar la tasa más alta; es coherente.",
        },
      ],
    },
  },
  {
    id: "n-m-02",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Kestrel Apparel reports results for its two divisions.",
      es: "Kestrel Apparel presenta los resultados de sus dos divisiones.",
    },
    question: {
      en: "Which division has the higher profit margin, and by how many percentage points?",
      es: "¿Qué división tiene el mayor margen de beneficio y por cuántos puntos porcentuales?",
    },
    options: [
      { id: "a", label: { en: "Consumer, by 3 percentage points", es: "Consumo, por 3 puntos porcentuales" } },
      { id: "b", label: { en: "Enterprise, by 3 percentage points", es: "Empresas, por 3 puntos porcentuales" } },
      { id: "c", label: { en: "Enterprise, by 20%", es: "Empresas, por un 20 %" } },
      { id: "d", label: { en: "Consumer, by 5 percentage points", es: "Consumo, por 5 puntos porcentuales" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Consumer margin = (800 − 680) ÷ 800 = 15%; Enterprise margin = (500 − 410) ÷ 500 = 18%. Enterprise is higher by 3 percentage points.",
      es: "Margen de Consumo = (800 − 680) ÷ 800 = 15 %; margen de Empresas = (500 − 410) ÷ 500 = 18 %. Empresas es mayor por 3 puntos porcentuales.",
    },
    whyWrong: [
      {
        en: "Option (c) mistakes the Enterprise margin itself (18%, not 20%) for the gap between the divisions.",
        es: "La opción (c) confunde el propio margen de Empresas (18 %, no 20 %) con la diferencia entre divisiones.",
      },
    ],
    tip: {
      en: "Profit margin = profit ÷ revenue. Compute profit first (revenue − costs), then divide.",
      es: "Margen de beneficio = beneficio ÷ ingresos. Calcula primero el beneficio (ingresos − costes) y luego divide.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Divisional results (€ million)",
          es: "Resultados por división (millones de €)",
        },
        headers: [
          { en: "Division", es: "División" },
          { en: "Revenue", es: "Ingresos" },
          { en: "Costs", es: "Costes" },
        ],
        rows: [
          ["Consumer", "800", "680"],
          ["Enterprise", "500", "410"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: each division's revenue and costs.",
          es: "Identifica los datos correctos: los ingresos y costes de cada división.",
        },
        {
          en: "Decide the calculation: profit = revenue − costs, then margin = profit ÷ revenue, for both divisions.",
          es: "Decide el cálculo: beneficio = ingresos − costes; luego margen = beneficio ÷ ingresos, para ambas divisiones.",
        },
        {
          en: "Execute: Consumer 120 ÷ 800 = 15%; Enterprise 90 ÷ 500 = 18%; gap = 18 − 15 = 3 percentage points.",
          es: "Ejecuta: Consumo 120 ÷ 800 = 15 %; Empresas 90 ÷ 500 = 18 %; diferencia = 18 − 15 = 3 puntos porcentuales.",
        },
        {
          en: "Check: Enterprise wins despite lower absolute profit (€90m vs €120m) — margin is relative, not absolute.",
          es: "Comprueba: Empresas gana pese a un menor beneficio absoluto (90 M€ frente a 120 M€); el margen es relativo, no absoluto.",
        },
      ],
    },
  },
  {
    id: "n-m-03",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Beacon Retail reports annual units sold.",
      es: "Beacon Retail presenta las unidades vendidas por año.",
    },
    question: {
      en: "By what percentage did units sold increase from 2024 to 2025?",
      es: "¿En qué porcentaje aumentaron las unidades vendidas de 2024 a 2025?",
    },
    options: [
      { id: "a", label: { en: "10%", es: "10 %" } },
      { id: "b", label: { en: "11.25%", es: "11,25 %" } },
      { id: "c", label: { en: "11.1%", es: "11,1 %" } },
      { id: "d", label: { en: "12.5%", es: "12,5 %" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "The increase is 5,400 − 4,800 = 600 units, and 600 ÷ 4,800 = 0.125 = 12.5%.",
      es: "El aumento es de 5400 − 4800 = 600 unidades, y 600 ÷ 4800 = 0,125 = 12,5 %.",
    },
    whyWrong: [
      {
        en: "Option (c) divides by the NEW value (5,400) instead of the original — the classic wrong-base trap.",
        es: "La opción (c) divide entre el valor NUEVO (5400) en lugar del original: la clásica trampa de la base incorrecta.",
      },
    ],
    tip: {
      en: "The base of a percentage change is always the EARLIER period.",
      es: "La base de un cambio porcentual es siempre el periodo ANTERIOR.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Units sold per year",
          es: "Unidades vendidas por año",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Units", es: "Unidades" },
        ],
        rows: [
          ["2024", "4,800"],
          ["2025", "5,400"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: 2024 = 4,800 (the base), 2025 = 5,400.",
          es: "Identifica los datos correctos: 2024 = 4800 (la base), 2025 = 5400.",
        },
        {
          en: "Decide the calculation: (5,400 − 4,800) ÷ 4,800.",
          es: "Decide el cálculo: (5400 − 4800) ÷ 4800.",
        },
        {
          en: "Execute: 600 ÷ 4,800 = 0.125 = 12.5%.",
          es: "Ejecuta: 600 ÷ 4800 = 0,125 = 12,5 %.",
        },
        {
          en: "Check: 4,800 × 1.125 = 5,400 — the answer reconstructs the 2025 figure exactly.",
          es: "Comprueba: 4800 × 1,125 = 5400; la respuesta reconstruye exactamente la cifra de 2025.",
        },
      ],
    },
  },
  {
    id: "n-m-04",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Copperline Tools compares production costs at its two factories.",
      es: "Copperline Tools compara los costes de producción de sus dos fábricas.",
    },
    question: {
      en: "Which factory has the lower cost per unit, and what is it?",
      es: "¿Qué fábrica tiene el menor coste por unidad y cuál es?",
    },
    options: [
      { id: "a", label: { en: "Factory B, €27", es: "Fábrica B, 27 €" } },
      { id: "b", label: { en: "Factory A, €30", es: "Fábrica A, 30 €" } },
      { id: "c", label: { en: "Factory A, €27.50", es: "Fábrica A, 27,50 €" } },
      { id: "d", label: { en: "Factory B, €30", es: "Fábrica B, 30 €" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Factory A: 75,000 ÷ 2,500 = €30 per unit. Factory B: 108,000 ÷ 4,000 = €27 per unit. Factory B is cheaper.",
      es: "Fábrica A: 75 000 ÷ 2500 = 30 € por unidad. Fábrica B: 108 000 ÷ 4000 = 27 € por unidad. La fábrica B es más barata.",
    },
    tip: {
      en: "For 'per unit' comparisons, divide total cost by total units for EACH option — the bigger factory is not automatically cheaper.",
      es: "Para comparaciones «por unidad», divide el coste total entre las unidades totales de CADA opción; la fábrica más grande no es automáticamente más barata.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Production costs by factory",
          es: "Costes de producción por fábrica",
        },
        headers: [
          { en: "Factory", es: "Fábrica" },
          { en: "Units", es: "Unidades" },
          { en: "Total cost (€)", es: "Coste total (€)" },
        ],
        rows: [
          ["A", "2,500", "75,000"],
          ["B", "4,000", "108,000"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: each factory's units and its total cost.",
          es: "Identifica los datos correctos: las unidades y el coste total de cada fábrica.",
        },
        {
          en: "Decide the calculation: cost per unit = total cost ÷ units, computed separately for A and B.",
          es: "Decide el cálculo: coste por unidad = coste total ÷ unidades, calculado por separado para A y B.",
        },
        {
          en: "Execute: A = 75,000 ÷ 2,500 = 30; B = 108,000 ÷ 4,000 = 27. Factory B wins.",
          es: "Ejecuta: A = 75 000 ÷ 2500 = 30; B = 108 000 ÷ 4000 = 27. Gana la fábrica B.",
        },
      ],
    },
  },
  {
    id: "n-m-05",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "A UK supplier quotes £4,500 for equipment. The exchange rate is £1 = €1.16, and 6% import duty applies to the euro value.",
      es: "Un proveedor británico cotiza 4500 £ por un equipo. El tipo de cambio es 1 £ = 1,16 €, y se aplica un arancel de importación del 6 % sobre el valor en euros.",
    },
    question: {
      en: "What is the total cost in euros?",
      es: "¿Cuál es el coste total en euros?",
    },
    options: [
      { id: "a", label: { en: "€5,220", es: "5 220 €" } },
      { id: "b", label: { en: "€5,533.20", es: "5 533,20 €" } },
      { id: "c", label: { en: "€5,475", es: "5 475 €" } },
      { id: "d", label: { en: "€5,650", es: "5 650 €" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Convert first: 4,500 × 1.16 = €5,220. Then add 6% duty: 5,220 × 1.06 = €5,533.20.",
      es: "Convierte primero: 4500 × 1,16 = 5220 €. Luego añade el 6 % de arancel: 5220 × 1,06 = 5533,20 €.",
    },
    whyWrong: [
      {
        en: "Option (a) converts the currency but forgets the import duty entirely.",
        es: "La opción (a) convierte la moneda pero olvida por completo el arancel de importación.",
      },
    ],
    tip: {
      en: "Multi-step conversions: handle one operation at a time and re-read what each step means.",
      es: "Conversiones de varios pasos: haz una operación cada vez y relee lo que significa cada paso.",
    },
    numeric: {
      calculationSteps: [
        {
          en: "Identify the right data: £4,500 quote, rate 1.16, duty 6% on the euro value.",
          es: "Identifica los datos correctos: cotización de 4500 £, tipo 1,16, arancel del 6 % sobre el valor en euros.",
        },
        {
          en: "Decide the calculation: convert currency first, then apply the duty to the converted figure — not to the pounds.",
          es: "Decide el cálculo: convierte primero la moneda y luego aplica el arancel a la cifra convertida, no a las libras.",
        },
        {
          en: "Execute: 4,500 × 1.16 = 5,220; 5,220 × 1.06 = 5,533.20.",
          es: "Ejecuta: 4500 × 1,16 = 5220; 5220 × 1,06 = 5533,20.",
        },
        {
          en: "Check: the answer must exceed €5,220, because duty adds cost — this rules out (a) immediately.",
          es: "Comprueba: la respuesta debe superar los 5220 €, porque el arancel añade coste; esto descarta (a) de inmediato.",
        },
      ],
    },
  },
  {
    id: "n-m-06",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Two teams took the same assessment, with different team sizes.",
      es: "Dos equipos realizaron la misma evaluación, con tamaños de equipo diferentes.",
    },
    question: {
      en: "What is the combined average score of both teams?",
      es: "¿Cuál es la puntuación media combinada de ambos equipos?",
    },
    options: [
      { id: "a", label: { en: "81", es: "81" } },
      { id: "b", label: { en: "80", es: "80" } },
      { id: "c", label: { en: "82", es: "82" } },
      { id: "d", label: { en: "80.4", es: "80,4" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Total points = 12 × 78 + 8 × 84 = 936 + 672 = 1,608. Total members = 20. Combined average = 1,608 ÷ 20 = 80.4.",
      es: "Puntos totales = 12 × 78 + 8 × 84 = 936 + 672 = 1608. Miembros totales = 20. Media combinada = 1608 ÷ 20 = 80,4.",
    },
    whyWrong: [
      {
        en: "Option (a) is the simple average (78 + 84) ÷ 2, which wrongly treats both teams as the same size.",
        es: "La opción (a) es la media simple (78 + 84) ÷ 2, que trata erróneamente a ambos equipos como si tuvieran el mismo tamaño.",
      },
    ],
    tip: {
      en: "Never average two averages directly when group sizes differ — weight by group size.",
      es: "Nunca promedies dos medias directamente cuando los tamaños de grupo difieren: pondera por el tamaño del grupo.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Team assessment scores",
          es: "Puntuaciones de evaluación por equipo",
        },
        headers: [
          { en: "Team", es: "Equipo" },
          { en: "Members", es: "Miembros" },
          { en: "Average score", es: "Puntuación media" },
        ],
        rows: [
          ["X", "12", "78"],
          ["Y", "8", "84"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: members and average for each team — the sizes differ, so weighting matters.",
          es: "Identifica los datos correctos: miembros y media de cada equipo; los tamaños difieren, por lo que la ponderación importa.",
        },
        {
          en: "Decide the calculation: (12 × 78 + 8 × 84) ÷ (12 + 8) — total points over total people.",
          es: "Decide el cálculo: (12 × 78 + 8 × 84) ÷ (12 + 8): puntos totales entre personas totales.",
        },
        {
          en: "Execute: (936 + 672) ÷ 20 = 1,608 ÷ 20 = 80.4.",
          es: "Ejecuta: (936 + 672) ÷ 20 = 1608 ÷ 20 = 80,4.",
        },
        {
          en: "Check: the larger team scored lower, so the combined average must sit below 81 and closer to 78 than to 84 — 80.4 fits.",
          es: "Comprueba: el equipo más grande obtuvo menos puntos, por lo que la media combinada debe estar por debajo de 81 y más cerca de 78 que de 84; 80,4 encaja.",
        },
      ],
    },
  },
  {
    id: "n-m-07",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Fernway Gardens reports revenue and costs for three years.",
      es: "Fernway Gardens presenta ingresos y costes de tres años.",
    },
    question: {
      en: "In which year was profit highest, and what was it?",
      es: "¿En qué año fue mayor el beneficio y de cuánto fue?",
    },
    options: [
      { id: "a", label: { en: "2022, €0.8m", es: "2022; 0,8 M€" } },
      { id: "b", label: { en: "2023, €0.9m", es: "2023; 0,9 M€" } },
      { id: "c", label: { en: "2024, €1.2m", es: "2024; 1,2 M€" } },
      { id: "d", label: { en: "2024, €1.1m", es: "2024; 1,1 M€" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "Profit = revenue − costs: 2022 → 3.2 − 2.4 = 0.8; 2023 → 3.6 − 2.7 = 0.9; 2024 → 4.2 − 3.0 = 1.2. Highest was 2024 at €1.2m.",
      es: "Beneficio = ingresos − costes: 2022 → 3,2 − 2,4 = 0,8; 2023 → 3,6 − 2,7 = 0,9; 2024 → 4,2 − 3,0 = 1,2. El mayor fue 2024 con 1,2 M€.",
    },
    tip: {
      en: "The year with the highest revenue is not automatically the most profitable — subtract costs for each year.",
      es: "El año con mayores ingresos no es automáticamente el más rentable: resta los costes de cada año.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Revenue and costs (€ million)",
          es: "Ingresos y costes (millones de €)",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Revenue", es: "Ingresos" },
          { en: "Costs", es: "Costes" },
        ],
        rows: [
          ["2022", "3.2", "2.4"],
          ["2023", "3.6", "2.7"],
          ["2024", "4.2", "3.0"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: revenue and costs for each of the three years.",
          es: "Identifica los datos correctos: ingresos y costes de cada uno de los tres años.",
        },
        {
          en: "Decide the calculation: profit = revenue − costs, once per year — three quick subtractions.",
          es: "Decide el cálculo: beneficio = ingresos − costes, una vez por año; tres restas rápidas.",
        },
        {
          en: "Execute: 2022 → 0.8; 2023 → 0.9; 2024 → 1.2 (€m).",
          es: "Ejecuta: 2022 → 0,8; 2023 → 0,9; 2024 → 1,2 (M€).",
        },
        {
          en: "Check: costs grew more slowly than revenue (0.6 vs 1.0 over the period), so profit rising each year is consistent.",
          es: "Comprueba: los costes crecieron más despacio que los ingresos (0,6 frente a 1,0 en el periodo), por lo que un beneficio creciente cada año es coherente.",
        },
      ],
    },
  },
  {
    id: "n-m-08",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Solace Hotels compares three marketing channels by spend and new customers gained.",
      es: "Solace Hotels compara tres canales de marketing por gasto y nuevos clientes conseguidos.",
    },
    question: {
      en: "Which channel has the lowest cost per new customer?",
      es: "¿Qué canal tiene el menor coste por nuevo cliente?",
    },
    options: [
      { id: "a", label: { en: "Online, €50", es: "En línea, 50 €" } },
      { id: "b", label: { en: "Events, €60", es: "Eventos, 60 €" } },
      { id: "c", label: { en: "Print, €75", es: "Impreso, 75 €" } },
      { id: "d", label: { en: "Online, €60", es: "En línea, 60 €" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Cost per customer = spend ÷ customers: Online 60,000 ÷ 1,200 = €50; Print 45,000 ÷ 600 = €75; Events 30,000 ÷ 500 = €60. Online is cheapest.",
      es: "Coste por cliente = gasto ÷ clientes: en línea 60 000 ÷ 1200 = 50 €; impreso 45 000 ÷ 600 = 75 €; eventos 30 000 ÷ 500 = 60 €. En línea es el más barato.",
    },
    tip: {
      en: "For 'per unit' comparisons, divide spend by customers for EACH channel — the biggest channel is not automatically the cheapest.",
      es: "Para comparaciones «por unidad», divide el gasto entre los clientes de CADA canal; el canal más grande no es automáticamente el más barato.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Marketing spend and new customers",
          es: "Gasto en marketing y nuevos clientes",
        },
        headers: [
          { en: "Channel", es: "Canal" },
          { en: "Spend (€000)", es: "Gasto (miles €)" },
          { en: "New customers", es: "Nuevos clientes" },
        ],
        rows: [
          ["Online", "60", "1,200"],
          ["Print", "45", "600"],
          ["Events", "30", "500"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: spend (in €000) and customers for each channel.",
          es: "Identifica los datos correctos: gasto (en miles de €) y clientes de cada canal.",
        },
        {
          en: "Decide the calculation: cost per customer = spend ÷ customers, once per channel.",
          es: "Decide el cálculo: coste por cliente = gasto ÷ clientes, una vez por canal.",
        },
        {
          en: "Execute: Online 60,000 ÷ 1,200 = 50; Print 45,000 ÷ 600 = 75; Events 30,000 ÷ 500 = 60 (€).",
          es: "Ejecuta: en línea 60 000 ÷ 1200 = 50; impreso 45 000 ÷ 600 = 75; eventos 30 000 ÷ 500 = 60 (€).",
        },
        {
          en: "Check units: spend was in €000, so 60 means €60,000 — divide by the customer count, never skip the conversion.",
          es: "Comprueba las unidades: el gasto estaba en miles de €, por lo que 60 significa 60 000 €; divide entre el número de clientes y nunca omitas la conversión.",
        },
      ],
    },
  },
  {
    id: "n-m-09",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Brightline Logistics reports annual revenue and costs.",
      es: "Brightline Logistics presenta sus ingresos y costes anuales.",
    },
    question: {
      en: "By what percentage did profit change from 2024 to 2025?",
      es: "¿En qué porcentaje varió el beneficio de 2024 a 2025?",
    },
    options: [
      { id: "a", label: { en: "Increased 9.4%", es: "Aumentó un 9,4 %" } },
      { id: "b", label: { en: "Decreased 12.5%", es: "Disminuyó un 12,5 %" } },
      { id: "c", label: { en: "Decreased 14.3%", es: "Disminuyó un 14,3 %" } },
      { id: "d", label: { en: "Increased 12.5%", es: "Aumentó un 12,5 %" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Profit 2024 = 960 − 720 = 240; profit 2025 = 1,050 − 840 = 210. Change = (210 − 240) ÷ 240 = −12.5%, a decrease.",
      es: "Beneficio 2024 = 960 − 720 = 240; beneficio 2025 = 1050 − 840 = 210. Cambio = (210 − 240) ÷ 240 = −12,5 %, una disminución.",
    },
    whyWrong: [
      {
        en: "Option (a) is the revenue growth (90 ÷ 960 = 9.4%) — the question asks about profit, not revenue.",
        es: "La opción (a) es el crecimiento de los ingresos (90 ÷ 960 = 9,4 %); la pregunta es sobre el beneficio, no sobre los ingresos.",
      },
      {
        en: "Option (c) divides the change by the 2025 profit (210) instead of the 2024 base (240).",
        es: "La opción (c) divide el cambio entre el beneficio de 2025 (210) en lugar de la base de 2024 (240).",
      },
    ],
    tip: {
      en: "When a question asks about profit, compute profit for both periods first — revenue and cost figures alone will mislead you.",
      es: "Cuando una pregunta trata del beneficio, calcula primero el beneficio de ambos periodos; solo con ingresos y costes te confundirás.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Annual results (€ thousand)",
          es: "Resultados anuales (miles de €)",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Revenue", es: "Ingresos" },
          { en: "Costs", es: "Costes" },
        ],
        rows: [
          ["2024", "960", "720"],
          ["2025", "1,050", "840"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: revenue and costs for both years — profit is not given directly.",
          es: "Identifica los datos correctos: ingresos y costes de ambos años; el beneficio no se da directamente.",
        },
        {
          en: "Decide the calculation: first profit for each year (revenue − costs), then percentage change on the 2024 profit.",
          es: "Decide el cálculo: primero el beneficio de cada año (ingresos − costes) y luego el cambio porcentual sobre el beneficio de 2024.",
        },
        {
          en: "Execute: 2024 profit = 240; 2025 profit = 210; (210 − 240) ÷ 240 = −0.125 = −12.5%.",
          es: "Ejecuta: beneficio 2024 = 240; beneficio 2025 = 210; (210 − 240) ÷ 240 = −0,125 = −12,5 %.",
        },
        {
          en: "Check: revenue rose but costs rose faster (+120 vs +90), so a falling profit is consistent.",
          es: "Comprueba: los ingresos subieron, pero los costes subieron más rápido (+120 frente a +90), por lo que un beneficio a la baja es coherente.",
        },
      ],
    },
  },
  {
    id: "n-m-10",
    category: "numerical",
    difficulty: "medium",
    context: {
      en: "Fernway Gardens tracks donations received each quarter.",
      es: "Fernway Gardens registra las donaciones recibidas cada trimestre.",
    },
    question: {
      en: "What percentage of the year's donations were received in Q4?",
      es: "¿Qué porcentaje de las donaciones del año se recibió en el Q4?",
    },
    options: [
      { id: "a", label: { en: "35%", es: "35 %" } },
      { id: "b", label: { en: "45%", es: "45 %" } },
      { id: "c", label: { en: "30%", es: "30 %" } },
      { id: "d", label: { en: "40%", es: "40 %" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Annual total = 45 + 75 + 60 + 120 = 300 (€000), and 120 ÷ 300 = 0.40 = 40%.",
      es: "Total anual = 45 + 75 + 60 + 120 = 300 (miles €), y 120 ÷ 300 = 0,40 = 40 %.",
    },
    tip: {
      en: "For a share of a time period, sum the whole period first — eyeballing the tallest bar is not enough.",
      es: "Para una cuota de un periodo, suma primero todo el periodo; mirar la barra más alta no basta.",
    },
    numeric: {
      chartData: {
        type: "bar",
        title: {
          en: "Quarterly donations (€ thousand)",
          es: "Donaciones trimestrales (miles de €)",
        },
        labels: ["Q1", "Q2", "Q3", "Q4"],
        values: [45, 75, 60, 120],
        unit: { en: "€000", es: "miles €" },
      },
      calculationSteps: [
        {
          en: "Identify the right data: all four quarterly values — you need the total, not just Q4.",
          es: "Identifica los datos correctos: los cuatro valores trimestrales; necesitas el total, no solo el Q4.",
        },
        {
          en: "Decide the calculation: share = Q4 ÷ (Q1 + Q2 + Q3 + Q4).",
          es: "Decide el cálculo: cuota = Q4 ÷ (Q1 + Q2 + Q3 + Q4).",
        },
        {
          en: "Execute: total = 300; 120 ÷ 300 = 0.40 = 40%.",
          es: "Ejecuta: total = 300; 120 ÷ 300 = 0,40 = 40 %.",
        },
        {
          en: "Check: 300 × 0.40 = 120 — the answer reconstructs the Q4 bar exactly.",
          es: "Comprueba: 300 × 0,40 = 120; la respuesta reconstruye exactamente la barra del Q4.",
        },
      ],
    },
  },
  // ================= HARD =================
  {
    id: "n-h-01",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Nordam Foods sells the same product in three regions at different prices.",
      es: "Nordam Foods vende el mismo producto en tres regiones a precios diferentes.",
    },
    question: {
      en: "What is the average selling price per unit across all regions?",
      es: "¿Cuál es el precio medio de venta por unidad en todas las regiones?",
    },
    options: [
      { id: "a", label: { en: "€21.67", es: "21,67 €" } },
      { id: "b", label: { en: "€20.68", es: "20,68 €" } },
      { id: "c", label: { en: "€20.40", es: "20,40 €" } },
      { id: "d", label: { en: "€21.00", es: "21,00 €" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Total revenue = 1,200 × 18 + 800 × 22 + 500 × 25 = 21,600 + 17,600 + 12,500 = €51,700. Total units = 2,500. Average = 51,700 ÷ 2,500 = €20.68.",
      es: "Ingresos totales = 1200 × 18 + 800 × 22 + 500 × 25 = 21 600 + 17 600 + 12 500 = 51 700 €. Unidades totales = 2500. Media = 51 700 ÷ 2500 = 20,68 €.",
    },
    whyWrong: [
      {
        en: "Option (a) is the simple average of the three prices (18 + 22 + 25) ÷ 3 — it ignores that the regions sold different quantities.",
        es: "La opción (a) es la media simple de los tres precios (18 + 22 + 25) ÷ 3; ignora que las regiones vendieron cantidades diferentes.",
      },
    ],
    tip: {
      en: "A 'price across regions' question is a weighted average: total money ÷ total units, never the average of the prices.",
      es: "Una pregunta de «precio en varias regiones» es una media ponderada: dinero total ÷ unidades totales, nunca la media de los precios.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Unit sales and price by region",
          es: "Unidades vendidas y precio por región",
        },
        headers: [
          { en: "Region", es: "Región" },
          { en: "Units", es: "Unidades" },
          { en: "Price per unit (€)", es: "Precio por unidad (€)" },
        ],
        rows: [
          ["North", "1,200", "18"],
          ["South", "800", "22"],
          ["East", "500", "25"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: units AND price for each region — both are needed.",
          es: "Identifica los datos correctos: unidades Y precio de cada región; ambos son necesarios.",
        },
        {
          en: "Decide the calculation: weighted average = total revenue ÷ total units. Skip the simple average of prices — it answers the wrong question.",
          es: "Decide el cálculo: media ponderada = ingresos totales ÷ unidades totales. Omite la media simple de precios: responde a otra pregunta.",
        },
        {
          en: "Execute: revenue = 21,600 + 17,600 + 12,500 = 51,700; units = 2,500; 51,700 ÷ 2,500 = 20.68.",
          es: "Ejecuta: ingresos = 21 600 + 17 600 + 12 500 = 51 700; unidades = 2500; 51 700 ÷ 2500 = 20,68.",
        },
        {
          en: "Check: the cheapest region sold the most units, so the true average must sit below the simple average of €21.67 — €20.68 fits.",
          es: "Comprueba: la región más barata vendió más unidades, por lo que la media real debe estar por debajo de la media simple de 21,67 €; 20,68 € encaja.",
        },
      ],
    },
  },
  {
    id: "n-h-02",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Kestrel Apparel reports annual revenue and costs.",
      es: "Kestrel Apparel presenta sus ingresos y costes anuales.",
    },
    question: {
      en: "By how many percentage points did the profit margin fall between 2023 and 2024?",
      es: "¿En cuántos puntos porcentuales cayó el margen de beneficio entre 2023 y 2024?",
    },
    options: [
      { id: "a", label: { en: "5 percentage points", es: "5 puntos porcentuales" } },
      { id: "b", label: { en: "20%", es: "20 %" } },
      { id: "c", label: { en: "€300,000", es: "300 000 €" } },
      { id: "d", label: { en: "5%", es: "5 %" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "2023 margin = (1.2 − 0.9) ÷ 1.2 = 25%; 2024 margin = (1.5 − 1.2) ÷ 1.5 = 20%. The fall is 25 − 20 = 5 percentage points.",
      es: "Margen 2023 = (1,2 − 0,9) ÷ 1,2 = 25 %; margen 2024 = (1,5 − 1,2) ÷ 1,5 = 20 %. La caída es 25 − 20 = 5 puntos porcentuales.",
    },
    whyWrong: [
      {
        en: "Option (b) is the 2024 margin itself, not the size of the fall. Option (c) is the absolute profit (€0.3m both years) — irrelevant to a margin question.",
        es: "La opción (b) es el propio margen de 2024, no el tamaño de la caída. La opción (c) es el beneficio absoluto (0,3 M€ ambos años), irrelevante para una pregunta de margen.",
      },
    ],
    tip: {
      en: "'Percentage points' means subtract the two percentages directly — do NOT divide the difference by anything.",
      es: "«Puntos porcentuales» significa restar los dos porcentajes directamente; NO dividas la diferencia entre nada.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Annual results (€ million)",
          es: "Resultados anuales (millones de €)",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Revenue", es: "Ingresos" },
          { en: "Costs", es: "Costes" },
        ],
        rows: [
          ["2023", "1.2", "0.9"],
          ["2024", "1.5", "1.2"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: revenue and costs for both years — margins are not given directly.",
          es: "Identifica los datos correctos: ingresos y costes de ambos años; los márgenes no se dan directamente.",
        },
        {
          en: "Decide the calculation: margin = (revenue − costs) ÷ revenue for each year, then subtract the percentages.",
          es: "Decide el cálculo: margen = (ingresos − costes) ÷ ingresos para cada año; luego resta los porcentajes.",
        },
        {
          en: "Execute: 2023 → 0.3 ÷ 1.2 = 25%; 2024 → 0.3 ÷ 1.5 = 20%; fall = 5 percentage points.",
          es: "Ejecuta: 2023 → 0,3 ÷ 1,2 = 25 %; 2024 → 0,3 ÷ 1,5 = 20 %; caída = 5 puntos porcentuales.",
        },
        {
          en: "Check units: the question asks for percentage POINTS, so the answer is '5 pp', not '20%' (a relative fall).",
          es: "Comprueba las unidades: la pregunta pide PUNTOS porcentuales, por lo que la respuesta es «5 pp», no «20 %» (una caída relativa).",
        },
      ],
    },
  },
  {
    id: "n-h-03",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Harlow & Finch reports staff costs and headcount for two departments.",
      es: "Harlow & Finch presenta los costes de personal y la plantilla de dos departamentos.",
    },
    question: {
      en: "What is the ratio of average staff cost per employee, Sales : Operations?",
      es: "¿Cuál es la razón entre el coste medio de personal por empleado, Ventas : Operaciones?",
    },
    options: [
      { id: "a", label: { en: "8 : 7", es: "8 : 7" } },
      { id: "b", label: { en: "7 : 9", es: "7 : 9" } },
      { id: "c", label: { en: "6 : 5", es: "6 : 5" } },
      { id: "d", label: { en: "7 : 8", es: "7 : 8" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Sales average = 420,000 ÷ 60 = €7,000 per employee. Operations average = 360,000 ÷ 45 = €8,000. Ratio = 7,000 : 8,000 = 7 : 8.",
      es: "Media de Ventas = 420 000 ÷ 60 = 7000 € por empleado. Media de Operaciones = 360 000 ÷ 45 = 8000 €. Razón = 7000 : 8000 = 7 : 8.",
    },
    whyWrong: [
      {
        en: "Option (a) reverses the ratio — the question asks Sales : Operations, in that order.",
        es: "La opción (a) invierte la razón; la pregunta pide Ventas : Operaciones, en ese orden.",
      },
    ],
    tip: {
      en: "Ratios follow the order named in the question. Compute each side's per-unit value first, then simplify.",
      es: "Las razones siguen el orden nombrado en la pregunta. Calcula primero el valor por unidad de cada lado y luego simplifica.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Staff costs and headcount by department",
          es: "Costes de personal y plantilla por departamento",
        },
        headers: [
          { en: "Department", es: "Departamento" },
          { en: "Staff costs (€000)", es: "Costes de personal (miles €)" },
          { en: "Headcount", es: "Plantilla" },
        ],
        rows: [
          ["Sales", "420", "60"],
          ["Operations", "360", "45"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: costs (in €000) and headcount for both departments.",
          es: "Identifica los datos correctos: costes (en miles de €) y plantilla de ambos departamentos.",
        },
        {
          en: "Decide the calculation: average cost per employee = costs ÷ headcount for each department, then form the ratio.",
          es: "Decide el cálculo: coste medio por empleado = costes ÷ plantilla para cada departamento; luego forma la razón.",
        },
        {
          en: "Execute: Sales 420 ÷ 60 = 7; Operations 360 ÷ 45 = 8 (in €000) → 7 : 8.",
          es: "Ejecuta: Ventas 420 ÷ 60 = 7; Operaciones 360 ÷ 45 = 8 (en miles de €) → 7 : 8.",
        },
        {
          en: "Check: the €000 units cancel in a ratio, and Sales staff are cheaper per head — consistent with 7 : 8.",
          es: "Comprueba: las unidades de miles de € se cancelan en una razón, y el personal de Ventas es más barato por persona; coherente con 7 : 8.",
        },
      ],
    },
  },
  {
    id: "n-h-04",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Meridian Print reports revenue in € millions but its cost lines in € thousands — a classic mixed-units presentation.",
      es: "Meridian Print presenta los ingresos en millones de € pero sus líneas de coste en miles de €: una clásica presentación con unidades mezcladas.",
    },
    question: {
      en: "What was the company's profit?",
      es: "¿Cuál fue el beneficio de la empresa?",
    },
    options: [
      { id: "a", label: { en: "€80,000", es: "80 000 €" } },
      { id: "b", label: { en: "€8,392,400", es: "8 392 400 €" } },
      { id: "c", label: { en: "€800,000", es: "800 000 €" } },
      { id: "d", label: { en: "€760,000", es: "760 000 €" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "Total costs = 3,600 + 2,900 + 1,100 = €7,600k = €7.6m. Profit = 8.4 − 7.6 = €0.8m = €800,000.",
      es: "Costes totales = 3600 + 2900 + 1100 = 7600 miles € = 7,6 M€. Beneficio = 8,4 − 7,6 = 0,8 M€ = 800 000 €.",
    },
    whyWrong: [
      {
        en: "Option (b) subtracts 7,600 from 8,400,000 — it mixes millions and thousands without converting.",
        es: "La opción (b) resta 7600 de 8 400 000: mezcla millones y miles sin convertir.",
      },
    ],
    tip: {
      en: "Mixed units are a classic trap: convert everything to the SAME unit before subtracting.",
      es: "Las unidades mezcladas son una trampa clásica: convierte todo a la MISMA unidad antes de restar.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Annual figures (mixed units)",
          es: "Cifras anuales (unidades mezcladas)",
        },
        headers: [
          { en: "Item", es: "Concepto" },
          { en: "Amount", es: "Importe" },
        ],
        rows: [
          ["Revenue", "€8.4m"],
          ["Materials", "€3,600k"],
          ["Labour", "€2,900k"],
          ["Overheads", "€1,100k"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data — and the trap: revenue is in millions, costs in thousands.",
          es: "Identifica los datos correctos, y la trampa: los ingresos están en millones y los costes en miles.",
        },
        {
          en: "Decide the calculation: convert costs to €m first (÷ 1,000), then profit = revenue − total costs.",
          es: "Decide el cálculo: convierte primero los costes a M€ (÷ 1000); luego beneficio = ingresos − costes totales.",
        },
        {
          en: "Execute: costs = 3.6 + 2.9 + 1.1 = 7.6 (€m); 8.4 − 7.6 = 0.8 (€m) = €800,000.",
          es: "Ejecuta: costes = 3,6 + 2,9 + 1,1 = 7,6 (M€); 8,4 − 7,6 = 0,8 (M€) = 800 000 €.",
        },
        {
          en: "Check: €800,000 is about 9.5% of revenue — a plausible margin; €8.39m would exceed revenue itself.",
          es: "Comprueba: 800 000 € es alrededor del 9,5 % de los ingresos, un margen plausible; 8,39 M€ superaría los propios ingresos.",
        },
      ],
    },
  },
  {
    id: "n-h-05",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Vela Coffee's revenue grew steadily between 2022 and 2024.",
      es: "Los ingresos de Vela Coffee crecieron de forma constante entre 2022 y 2024.",
    },
    question: {
      en: "If revenue grew at a constant annual rate between 2022 and 2024, what was that rate?",
      es: "Si los ingresos crecieron a una tasa anual constante entre 2022 y 2024, ¿cuál fue esa tasa?",
    },
    options: [
      { id: "a", label: { en: "20%", es: "20 %" } },
      { id: "b", label: { en: "22%", es: "22 %" } },
      { id: "c", label: { en: "44%", es: "44 %" } },
      { id: "d", label: { en: "14.4%", es: "14,4 %" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Total growth factor = 2.88 ÷ 2.0 = 1.44 over two years. Annual factor = √1.44 = 1.20, i.e. 20% per year (2.0 × 1.2 = 2.4; 2.4 × 1.2 = 2.88).",
      es: "Factor de crecimiento total = 2,88 ÷ 2,0 = 1,44 en dos años. Factor anual = √1,44 = 1,20, es decir, 20 % anual (2,0 × 1,2 = 2,4; 2,4 × 1,2 = 2,88).",
    },
    whyWrong: [
      {
        en: "Option (b) halves the total 44% growth — that is simple interest thinking; constant annual growth compounds.",
        es: "La opción (b) divide entre dos el crecimiento total del 44 %: es pensar en interés simple; el crecimiento anual constante se compone.",
      },
    ],
    tip: {
      en: "Constant growth over two periods compounds — take the square root of the total growth factor, don't just halve the percentage.",
      es: "El crecimiento constante en dos periodos se compone: toma la raíz cuadrada del factor de crecimiento total, no dividas el porcentaje entre dos.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Revenue (€ million)",
          es: "Ingresos (millones de €)",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Revenue", es: "Ingresos" },
        ],
        rows: [
          ["2022", "2.0"],
          ["2024", "2.88"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: 2022 = 2.0, 2024 = 2.88 — two years apart, one missing year in between.",
          es: "Identifica los datos correctos: 2022 = 2,0; 2024 = 2,88; dos años de diferencia con un año intermedio sin datos.",
        },
        {
          en: "Decide the calculation: total factor = 2.88 ÷ 2.0, then annual factor = square root (constant rate compounds).",
          es: "Decide el cálculo: factor total = 2,88 ÷ 2,0; luego factor anual = raíz cuadrada (la tasa constante se compone).",
        },
        {
          en: "Execute: 2.88 ÷ 2.0 = 1.44; √1.44 = 1.20 → 20% per year.",
          es: "Ejecuta: 2,88 ÷ 2,0 = 1,44; √1,44 = 1,20 → 20 % anual.",
        },
        {
          en: "Check: 2.0 × 1.2 × 1.2 = 2.88 — the answer reconstructs the 2024 figure exactly.",
          es: "Comprueba: 2,0 × 1,2 × 1,2 = 2,88; la respuesta reconstruye exactamente la cifra de 2024.",
        },
      ],
    },
  },
  {
    id: "n-h-06",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Copperline Tools buys raw material from three suppliers at different prices.",
      es: "Copperline Tools compra materia prima a tres proveedores a precios diferentes.",
    },
    question: {
      en: "What is the weighted average cost per kilogram?",
      es: "¿Cuál es el coste medio ponderado por kilogramo?",
    },
    options: [
      { id: "a", label: { en: "€3.33", es: "3,33 €" } },
      { id: "b", label: { en: "€3.24", es: "3,24 €" } },
      { id: "c", label: { en: "€3.18", es: "3,18 €" } },
      { id: "d", label: { en: "€3.42", es: "3,42 €" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Total cost = 500 × 3.20 + 300 × 2.80 + 200 × 4.00 = 1,600 + 840 + 800 = €3,240. Total weight = 1,000 kg. Average = 3,240 ÷ 1,000 = €3.24 per kg.",
      es: "Coste total = 500 × 3,20 + 300 × 2,80 + 200 × 4,00 = 1600 + 840 + 800 = 3240 €. Peso total = 1000 kg. Media = 3240 ÷ 1000 = 3,24 € por kg.",
    },
    whyWrong: [
      {
        en: "Option (a) is the simple average of the three prices (3.20 + 2.80 + 4.00) ÷ 3 — it ignores the different quantities.",
        es: "La opción (a) es la media simple de los tres precios (3,20 + 2,80 + 4,00) ÷ 3; ignora las diferentes cantidades.",
      },
    ],
    tip: {
      en: "Weighted average = total cost ÷ total quantity. The quantities are the weights — never average the prices alone.",
      es: "Media ponderada = coste total ÷ cantidad total. Las cantidades son los pesos; nunca promedies solo los precios.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Raw material purchases",
          es: "Compras de materia prima",
        },
        headers: [
          { en: "Supplier", es: "Proveedor" },
          { en: "Quantity (kg)", es: "Cantidad (kg)" },
          { en: "Price per kg (€)", es: "Precio por kg (€)" },
        ],
        rows: [
          ["A", "500", "3.20"],
          ["B", "300", "2.80"],
          ["C", "200", "4.00"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: quantity AND price for each supplier.",
          es: "Identifica los datos correctos: cantidad Y precio de cada proveedor.",
        },
        {
          en: "Decide the calculation: (sum of quantity × price) ÷ (sum of quantities). Skip the simple average of prices.",
          es: "Decide el cálculo: (suma de cantidad × precio) ÷ (suma de cantidades). Omite la media simple de precios.",
        },
        {
          en: "Execute: (1,600 + 840 + 800) ÷ 1,000 = 3,240 ÷ 1,000 = €3.24.",
          es: "Ejecuta: (1600 + 840 + 800) ÷ 1000 = 3240 ÷ 1000 = 3,24 €.",
        },
        {
          en: "Check: the largest purchase was at €3.20, so the average must sit near €3.20 — €3.24 fits; €3.33 is pulled too high by the small 200 kg order.",
          es: "Comprueba: la mayor compra fue a 3,20 €, por lo que la media debe estar cerca de 3,20 €; 3,24 € encaja; 3,33 € queda demasiado alta por el pequeño pedido de 200 kg.",
        },
      ],
    },
  },
  {
    id: "n-h-07",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Beacon Retail reports annual revenue and profit.",
      es: "Beacon Retail presenta sus ingresos y beneficio anuales.",
    },
    question: {
      en: "By how many percentage points did the profit margin fall from 2024 to 2025?",
      es: "¿En cuántos puntos porcentuales cayó el margen de beneficio de 2024 a 2025?",
    },
    options: [
      { id: "a", label: { en: "25%", es: "25 %" } },
      { id: "b", label: { en: "€20,000", es: "20 000 €" } },
      { id: "c", label: { en: "5%", es: "5 %" } },
      { id: "d", label: { en: "5 percentage points", es: "5 puntos porcentuales" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "2024 margin = 128 ÷ 640 = 20%; 2025 margin = 108 ÷ 720 = 15%. The fall is 20 − 15 = 5 percentage points.",
      es: "Margen 2024 = 128 ÷ 640 = 20 %; margen 2025 = 108 ÷ 720 = 15 %. La caída es 20 − 15 = 5 puntos porcentuales.",
    },
    whyWrong: [
      {
        en: "Option (a) is the RELATIVE fall (5 ÷ 20 = 25%) — the question asks for percentage points, a different unit.",
        es: "La opción (a) es la caída RELATIVA (5 ÷ 20 = 25 %); la pregunta pide puntos porcentuales, una unidad diferente.",
      },
      {
        en: "Option (b) is the absolute profit drop (€20,000) — irrelevant to a margin question.",
        es: "La opción (b) es la caída absoluta del beneficio (20 000 €), irrelevante para una pregunta de margen.",
      },
    ],
    tip: {
      en: "Percentage points vs percent: 20% → 15% is a 5-point fall but a 25% relative fall. Read the question's exact wording.",
      es: "Puntos porcentuales frente a porcentaje: de 20 % a 15 % es una caída de 5 puntos pero del 25 % en términos relativos. Lee el enunciado con exactitud.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Annual results (€ thousand)",
          es: "Resultados anuales (miles de €)",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Revenue", es: "Ingresos" },
          { en: "Profit", es: "Beneficio" },
        ],
        rows: [
          ["2024", "640", "128"],
          ["2025", "720", "108"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: revenue and profit for both years.",
          es: "Identifica los datos correctos: ingresos y beneficio de ambos años.",
        },
        {
          en: "Decide the calculation: margin = profit ÷ revenue for each year, then subtract the two percentages directly.",
          es: "Decide el cálculo: margen = beneficio ÷ ingresos para cada año; luego resta los dos porcentajes directamente.",
        },
        {
          en: "Execute: 128 ÷ 640 = 20%; 108 ÷ 720 = 15%; 20 − 15 = 5 percentage points.",
          es: "Ejecuta: 128 ÷ 640 = 20 %; 108 ÷ 720 = 15 %; 20 − 15 = 5 puntos porcentuales.",
        },
        {
          en: "Check: revenue rose while profit fell, so the margin must fall — and by points, not by a relative percent.",
          es: "Comprueba: los ingresos subieron mientras el beneficio bajó, por lo que el margen debe caer; y en puntos, no en porcentaje relativo.",
        },
      ],
    },
  },
  {
    id: "n-h-08",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "Two production lines report output and hours worked.",
      es: "Dos líneas de producción presentan su producción y las horas trabajadas.",
    },
    question: {
      en: "What is the ratio of units produced per hour, Line 1 : Line 2?",
      es: "¿Cuál es la razón de unidades producidas por hora, Línea 1 : Línea 2?",
    },
    options: [
      { id: "a", label: { en: "4 : 3", es: "4 : 3" } },
      { id: "b", label: { en: "1 : 1", es: "1 : 1" } },
      { id: "c", label: { en: "3 : 2", es: "3 : 2" } },
      { id: "d", label: { en: "5 : 4", es: "5 : 4" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "Line 1: 9,600 ÷ 480 = 20 units/hour. Line 2: 7,200 ÷ 360 = 20 units/hour. Ratio = 20 : 20 = 1 : 1.",
      es: "Línea 1: 9600 ÷ 480 = 20 unidades/hora. Línea 2: 7200 ÷ 360 = 20 unidades/hora. Razón = 20 : 20 = 1 : 1.",
    },
    whyWrong: [
      {
        en: "Option (a) ratios the raw outputs (9,600 : 7,200) — it forgets to divide by the hours first.",
        es: "La opción (a) compara las producciones brutas (9600 : 7200); olvida dividir primero entre las horas.",
      },
    ],
    tip: {
      en: "A ratio of rates needs the rates first: divide each total by its own denominator before comparing.",
      es: "Una razón de tasas necesita primero las tasas: divide cada total entre su propio denominador antes de comparar.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Line performance",
          es: "Rendimiento por línea",
        },
        headers: [
          { en: "Line", es: "Línea" },
          { en: "Output (units)", es: "Producción (unidades)" },
          { en: "Hours worked", es: "Horas trabajadas" },
        ],
        rows: [
          ["Line 1", "9,600", "480"],
          ["Line 2", "7,200", "360"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: output AND hours for each line — both totals are needed.",
          es: "Identifica los datos correctos: producción Y horas de cada línea; se necesitan ambos totales.",
        },
        {
          en: "Decide the calculation: units per hour = output ÷ hours for each line, then form the ratio. Skip the raw-output ratio.",
          es: "Decide el cálculo: unidades por hora = producción ÷ horas para cada línea; luego forma la razón. Omite la razón de producciones brutas.",
        },
        {
          en: "Execute: Line 1 = 9,600 ÷ 480 = 20; Line 2 = 7,200 ÷ 360 = 20 → 1 : 1.",
          es: "Ejecuta: Línea 1 = 9600 ÷ 480 = 20; Línea 2 = 7200 ÷ 360 = 20 → 1 : 1.",
        },
        {
          en: "Check: Line 1 has exactly 4/3 the output AND 4/3 the hours of Line 2, so equal rates are consistent.",
          es: "Comprueba: la Línea 1 tiene exactamente 4/3 de la producción Y 4/3 de las horas de la Línea 2, por lo que tasas iguales son coherentes.",
        },
      ],
    },
  },
  {
    id: "n-h-09",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "A café's annual cost breakdown is shown below. Revenue and headcount are also given but are not needed for this question.",
      es: "A continuación se muestra el desglose de costes anuales de una cafetería. También se dan los ingresos y la plantilla, pero no son necesarios para esta pregunta.",
    },
    question: {
      en: "What percentage of total COSTS do salaries represent?",
      es: "¿Qué porcentaje de los COSTES totales representan los salarios?",
    },
    options: [
      { id: "a", label: { en: "33.3%", es: "33,3 %" } },
      { id: "b", label: { en: "60%", es: "60 %" } },
      { id: "c", label: { en: "54.5%", es: "54,5 %" } },
      { id: "d", label: { en: "45%", es: "45 %" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "Total costs = 120 + 300 + 40 + 90 = €550k (revenue and headcount are decoys). Salaries = 300 ÷ 550 = 0.5454… = 54.5%.",
      es: "Costes totales = 120 + 300 + 40 + 90 = 550 miles € (los ingresos y la plantilla son señuelos). Salarios = 300 ÷ 550 = 0,5454… = 54,5 %.",
    },
    whyWrong: [
      {
        en: "Option (a) divides salaries by REVENUE (900) — the wrong base; the question asks about costs.",
        es: "La opción (a) divide los salarios entre los INGRESOS (900): la base incorrecta; la pregunta es sobre los costes.",
      },
    ],
    tip: {
      en: "Ignore data the question doesn't ask for — revenue and headcount are decoys here.",
      es: "Ignora los datos que la pregunta no pide: aquí los ingresos y la plantilla son señuelos.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Annual figures (€ thousand)",
          es: "Cifras anuales (miles de €)",
        },
        headers: [
          { en: "Item", es: "Concepto" },
          { en: "Amount", es: "Importe" },
        ],
        rows: [
          ["Rent", "120"],
          ["Salaries", "300"],
          ["Utilities", "40"],
          ["Marketing", "90"],
          ["Revenue", "900"],
          ["Headcount", "45"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: only the four COST lines — cross out revenue and headcount immediately.",
          es: "Identifica los datos correctos: solo las cuatro líneas de COSTES; tacha de inmediato los ingresos y la plantilla.",
        },
        {
          en: "Decide the calculation: total costs first, then salaries ÷ total costs.",
          es: "Decide el cálculo: primero los costes totales y luego salarios ÷ costes totales.",
        },
        {
          en: "Execute: 120 + 300 + 40 + 90 = 550; 300 ÷ 550 = 0.5454… = 54.5%.",
          es: "Ejecuta: 120 + 300 + 40 + 90 = 550; 300 ÷ 550 = 0,5454… = 54,5 %.",
        },
        {
          en: "Check: salaries are over half of costs, so an answer above 50% is expected — 33.3% (the revenue-based trap) is far too low.",
          es: "Comprueba: los salarios son más de la mitad de los costes, por lo que se espera una respuesta superior al 50 %; el 33,3 % (la trampa basada en ingresos) es demasiado bajo.",
        },
      ],
    },
  },
  {
    id: "n-h-10",
    category: "numerical",
    difficulty: "hard",
    context: {
      en: "A shop reports revenue and profit margin for two consecutive years.",
      es: "Una tienda presenta sus ingresos y su margen de beneficio de dos años consecutivos.",
    },
    question: {
      en: "What is the overall profit margin across the two years combined?",
      es: "¿Cuál es el margen de beneficio global de los dos años combinados?",
    },
    options: [
      { id: "a", label: { en: "24%", es: "24 %" } },
      { id: "b", label: { en: "25%", es: "25 %" } },
      { id: "c", label: { en: "26%", es: "26 %" } },
      { id: "d", label: { en: "20%", es: "20 %" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Year 1 profit = 200 × 30% = 60; Year 2 profit = 300 × 20% = 60. Total profit = 120 on revenue of 500: 120 ÷ 500 = 24%.",
      es: "Beneficio año 1 = 200 × 30 % = 60; beneficio año 2 = 300 × 20 % = 60. Beneficio total = 120 sobre ingresos de 500: 120 ÷ 500 = 24 %.",
    },
    whyWrong: [
      {
        en: "Option (b) is the simple average of the two margins (30 + 20) ÷ 2 — it ignores that Year 2 had higher revenue.",
        es: "La opción (b) es la media simple de los dos márgenes (30 + 20) ÷ 2; ignora que el año 2 tuvo mayores ingresos.",
      },
    ],
    tip: {
      en: "A combined margin is total profit ÷ total revenue. Rebuild the money figures first — margins alone can't be averaged.",
      es: "Un margen combinado es beneficio total ÷ ingresos totales. Reconstruye primero las cifras de dinero: los márgenes solos no se pueden promediar.",
    },
    numeric: {
      tableData: {
        caption: {
          en: "Two-year results (€ thousand)",
          es: "Resultados de dos años (miles de €)",
        },
        headers: [
          { en: "Year", es: "Año" },
          { en: "Revenue", es: "Ingresos" },
          { en: "Profit margin", es: "Margen de beneficio" },
        ],
        rows: [
          ["Year 1", "200", "30%"],
          ["Year 2", "300", "20%"],
        ],
      },
      calculationSteps: [
        {
          en: "Identify the right data: revenue and margin for each year — you need money amounts, not just percentages.",
          es: "Identifica los datos correctos: ingresos y margen de cada año; necesitas cantidades de dinero, no solo porcentajes.",
        },
        {
          en: "Decide the calculation: rebuild each year's profit (revenue × margin), then total profit ÷ total revenue.",
          es: "Decide el cálculo: reconstruye el beneficio de cada año (ingresos × margen) y luego beneficio total ÷ ingresos totales.",
        },
        {
          en: "Execute: 200 × 0.30 = 60; 300 × 0.20 = 60; (60 + 60) ÷ (200 + 300) = 120 ÷ 500 = 24%.",
          es: "Ejecuta: 200 × 0,30 = 60; 300 × 0,20 = 60; (60 + 60) ÷ (200 + 300) = 120 ÷ 500 = 24 %.",
        },
        {
          en: "Check: Year 2 (the lower margin) had the higher revenue, so the true margin must sit below the simple average of 25% — 24% fits.",
          es: "Comprueba: el año 2 (el de menor margen) tuvo mayores ingresos, por lo que el margen real debe estar por debajo de la media simple del 25 %; 24 % encaja.",
        },
      ],
    },
  },
];

export default questions;
