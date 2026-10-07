import type { Question } from "../../types";

// Saville-style VERBAL reasoning bank — 100% original items.
// 24 questions: 8 easy (v-e-01..08), 8 medium (v-m-01..08), 8 hard (v-h-01..08).
// All passages, arguments and distractors were written for this bank.

const questions: Question[] = [
  // ---------------- EASY ----------------
  {
    id: "v-e-01",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "Where will the weekly team meeting be held?",
      es: "¿Dónde se celebrará la reunión semanal del equipo?",
    },
    context: {
      en: "MEMO — To all staff. From: Operations. Subject: Weekly team meeting. Please note that the weekly team meeting has been moved to Tuesday at 10:00. It will now take place in Room 4B on the second floor, not Room 2A as before. Attendance is expected from all department heads.",
      es: "MEMORANDO — Para todo el personal. De: Operaciones. Asunto: Reunión semanal del equipo. Tenga en cuenta que la reunión semanal del equipo se ha trasladado al martes a las 10:00. Ahora tendrá lugar en la Sala 4B de la segunda planta, y no en la Sala 2A como antes. Se espera la asistencia de todos los jefes de departamento.",
    },
    options: [
      { id: "a", label: { en: "In Room 2A", es: "En la Sala 2A" } },
      { id: "b", label: { en: "In the main hall", es: "En el salón principal" } },
      { id: "c", label: { en: "In Room 4B", es: "En la Sala 4B" } },
      { id: "d", label: { en: "On the second floor of the annex", es: "En la segunda planta del anexo" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The memo states the meeting will now take place in Room 4B on the second floor.",
      es: "El memorando indica que la reunión ahora tendrá lugar en la Sala 4B de la segunda planta.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because Room 2A was the old location; the memo says it is no longer used.",
        es: "La opción A es incorrecta porque la Sala 2A era la ubicación anterior; el memorando dice que ya no se utiliza.",
      },
      {
        en: "Options B and D are wrong because they are never mentioned in the memo.",
        es: "Las opciones B y D son incorrectas porque no se mencionan en el memorando.",
      },
    ],
    tip: {
      en: "For fact questions, scan the passage for the exact detail the question asks for — the answer is usually stated word-for-word.",
      es: "En las preguntas de datos, localice en el texto el dato exacto que pide la pregunta: la respuesta suele estar expresada palabra por palabra.",
    },
  },
  {
    id: "v-e-02",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "By how much did total revenue increase compared with the second quarter?",
      es: "¿En cuánto aumentaron los ingresos totales respecto al segundo trimestre?",
    },
    context: {
      en: "Q3 SALES REPORT. Total revenue for the third quarter reached €4.2 million, an increase of 12% compared with the second quarter. The strongest-performing region was the South, with revenue of €1.6 million.",
      es: "INFORME DE VENTAS DEL T3. Los ingresos totales del tercer trimestre alcanzaron los 4,2 millones de euros, un aumento del 12 % respecto al segundo trimestre. La región con mejor rendimiento fue la Sur, con unos ingresos de 1,6 millones de euros.",
    },
    options: [
      { id: "a", label: { en: "By 12%", es: "Un 12 %" } },
      { id: "b", label: { en: "By €1.6 million", es: "1,6 millones de euros" } },
      { id: "c", label: { en: "By €4.2 million", es: "4,2 millones de euros" } },
      { id: "d", label: { en: "By 8%", es: "Un 8 %" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The report says revenue grew by 12% compared with the second quarter.",
      es: "El informe dice que los ingresos crecieron un 12 % respecto al segundo trimestre.",
    },
    whyWrong: [
      {
        en: "Option B is wrong because €1.6 million is the revenue of the South region, not the growth rate.",
        es: "La opción B es incorrecta porque 1,6 millones de euros son los ingresos de la región Sur, no la tasa de crecimiento.",
      },
      {
        en: "Options C and D are wrong because €4.2 million is total Q3 revenue and 8% appears nowhere in the report.",
        es: "Las opciones C y D son incorrectas porque 4,2 millones de euros son los ingresos totales del T3 y el 8 % no aparece en el informe.",
      },
    ],
    tip: {
      en: "Read the question carefully: totals, shares and growth rates are different numbers — match the one the question asks for.",
      es: "Lea la pregunta con atención: totales, cuotas y tasas de crecimiento son cifras distintas; elija la que pide la pregunta.",
    },
  },
  {
    id: "v-e-03",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "At what time does the warehouse close on 24 December?",
      es: "¿A qué hora cierra el almacén el 24 de diciembre?",
    },
    context: {
      en: "NOTICE — Warehouse hours. During the holiday period the warehouse will close early. On 24 December the warehouse will close at 14:00. Normal hours resume on 2 January.",
      es: "AVISO — Horario del almacén. Durante el periodo festivo, el almacén cerrará antes. El 24 de diciembre, el almacén cerrará a las 14:00. El horario normal se reanuda el 2 de enero.",
    },
    options: [
      { id: "a", label: { en: "12:00", es: "12:00" } },
      { id: "b", label: { en: "16:00", es: "16:00" } },
      { id: "c", label: { en: "18:00", es: "18:00" } },
      { id: "d", label: { en: "14:00", es: "14:00" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "The notice states the warehouse will close at 14:00 on 24 December.",
      es: "El aviso indica que el almacén cerrará a las 14:00 el 24 de diciembre.",
    },
    whyWrong: [
      {
        en: "Options A, B and C are wrong because none of these times appears in the notice.",
        es: "Las opciones A, B y C son incorrectas porque ninguna de estas horas aparece en el aviso.",
      },
    ],
    tip: {
      en: "When the question asks for a specific detail, ignore the surrounding context and match the exact figure.",
      es: "Cuando la pregunta pide un dato concreto, ignore el contexto adicional y localice la cifra exacta.",
    },
  },
  {
    id: "v-e-04",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "A consultant submits an expense claim of €650. Whose approval is required?",
      es: "Un consultor presenta una solicitud de gastos de 650 €. ¿De quién se requiere la aprobación?",
    },
    context: {
      en: "EXPENSE POLICY (extract). Expense claims up to €500 may be approved by the employee's direct supervisor. Claims above €500 require approval from the department manager before payment is processed.",
      es: "POLÍTICA DE GASTOS (extracto). Las solicitudes de gastos de hasta 500 € pueden ser aprobadas por el supervisor directo del empleado. Las solicitudes superiores a 500 € requieren la aprobación del jefe de departamento antes de que se procese el pago.",
    },
    options: [
      { id: "a", label: { en: "No approval is needed", es: "No se necesita aprobación" } },
      { id: "b", label: { en: "The department manager's approval", es: "La aprobación del jefe de departamento" } },
      { id: "c", label: { en: "The direct supervisor's approval", es: "La aprobación del supervisor directo" } },
      { id: "d", label: { en: "The finance director's approval", es: "La aprobación del director financiero" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "€650 is above €500, so the department manager's approval is required.",
      es: "650 € supera los 500 €, por lo que se requiere la aprobación del jefe de departamento.",
    },
    whyWrong: [
      {
        en: "Option C is wrong because the supervisor can only approve claims up to €500.",
        es: "La opción C es incorrecta porque el supervisor solo puede aprobar solicitudes de hasta 500 €.",
      },
      {
        en: "Options A and D are wrong because the policy mentions neither of these cases.",
        es: "Las opciones A y D son incorrectas porque la política no menciona ninguno de estos casos.",
      },
    ],
    tip: {
      en: "Apply stated thresholds exactly: compare the given figure with the rule and follow the matching case.",
      es: "Aplique los umbrales tal como se indican: compare la cifra dada con la norma y siga el caso correspondiente.",
    },
  },
  {
    id: "v-e-05",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "When will the delayed order be delivered?",
      es: "¿Cuándo se entregará el pedido retrasado?",
    },
    context: {
      en: "EMAIL — From: Procurement. To: Sales team. The supplier has confirmed that the delayed order of 2,000 units will be delivered on Thursday morning. Please update your delivery forecasts for clients accordingly.",
      es: "CORREO — De: Compras. Para: Equipo de ventas. El proveedor ha confirmado que el pedido retrasado de 2.000 unidades se entregará el jueves por la mañana. Actualicen sus previsiones de entrega a los clientes en consecuencia.",
    },
    options: [
      { id: "a", label: { en: "On Monday morning", es: "El lunes por la mañana" } },
      { id: "b", label: { en: "On Thursday morning", es: "El jueves por la mañana" } },
      { id: "c", label: { en: "On Friday afternoon", es: "El viernes por la tarde" } },
      { id: "d", label: { en: "Next week", es: "La próxima semana" } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The email says the order will be delivered on Thursday morning.",
      es: "El correo dice que el pedido se entregará el jueves por la mañana.",
    },
    whyWrong: [
      {
        en: "Options A, C and D are wrong because the email gives a different, specific day.",
        es: "Las opciones A, C y D son incorrectas porque el correo indica un día diferente y concreto.",
      },
    ],
    tip: {
      en: "Underline time expressions (days, dates, hours) while reading — most easy questions ask about one of them.",
      es: "Subraye las expresiones de tiempo (días, fechas, horas) al leer: la mayoría de las preguntas fáciles versan sobre alguna de ellas.",
    },
  },
  {
    id: "v-e-06",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "What is the new IT helpdesk extension?",
      es: "¿Cuál es la nueva extensión del servicio de asistencia informática?",
    },
    context: {
      en: "IT ANNOUNCEMENT. From Monday, the IT helpdesk can be reached on the new extension 4420. The old extension 3388 will stop working at the end of this week. For urgent issues outside office hours, email support@company.example.",
      es: "ANUNCIO DE TI. A partir del lunes, el servicio de asistencia informática estará disponible en la nueva extensión 4420. La antigua extensión 3388 dejará de funcionar al final de esta semana. Para asuntos urgentes fuera del horario de oficina, escriba a support@company.example.",
    },
    options: [
      { id: "a", label: { en: "3388", es: "3388" } },
      { id: "b", label: { en: "4402", es: "4402" } },
      { id: "c", label: { en: "4240", es: "4240" } },
      { id: "d", label: { en: "4420", es: "4420" } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "The announcement gives the new extension as 4420.",
      es: "El anuncio indica que la nueva extensión es la 4420.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because 3388 is the old extension.",
        es: "La opción A es incorrecta porque la 3388 es la extensión antigua.",
      },
      {
        en: "Options B and C are wrong because they rearrange the digits; the correct number is 4420.",
        es: "Las opciones B y C son incorrectas porque reordenan los dígitos; el número correcto es 4420.",
      },
    ],
    tip: {
      en: "Watch out for look-alike numbers and names in the options — copy the exact figure from the text.",
      es: "Cuidado con los números y nombres parecidos en las opciones: copie la cifra exacta del texto.",
    },
  },
  {
    id: "v-e-07",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "Who must attend the training course?",
      es: "¿Quiénes deben asistir al curso de formación?",
    },
    context: {
      en: "TRAINING MEMO. A new data-protection training course will start on Monday at 9:00 in the conference room. The course is mandatory for all new hires who joined in the last six months. Other employees may attend voluntarily.",
      es: "MEMORANDO DE FORMACIÓN. El lunes a las 9:00 comenzará en la sala de conferencias un nuevo curso de formación sobre protección de datos. El curso es obligatorio para todos los nuevos empleados incorporados en los últimos seis meses. Los demás empleados pueden asistir de forma voluntaria.",
    },
    options: [
      { id: "a", label: { en: "New hires from the last six months", es: "Los nuevos empleados de los últimos seis meses" } },
      { id: "b", label: { en: "All employees", es: "Todos los empleados" } },
      { id: "c", label: { en: "Only managers", es: "Solo los directivos" } },
      { id: "d", label: { en: "Nobody — it is optional", es: "Nadie: es opcional" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "The memo says the course is mandatory for all new hires from the last six months.",
      es: "El memorando dice que el curso es obligatorio para todos los nuevos empleados incorporados en los últimos seis meses.",
    },
    whyWrong: [
      {
        en: "Option B is wrong because other employees may attend voluntarily; it is not mandatory for them.",
        es: "La opción B es incorrecta porque los demás empleados pueden asistir de forma voluntaria; no es obligatorio para ellos.",
      },
      {
        en: "Options C and D are wrong because the memo never mentions managers only, and the course is not fully optional.",
        es: "Las opciones C y D son incorrectas porque el memorando nunca menciona solo a los directivos, y el curso no es totalmente opcional.",
      },
    ],
    tip: {
      en: "Pay attention to qualifying words like 'mandatory', 'may' and 'all' — they define who the rule applies to.",
      es: "Preste atención a palabras como «obligatorio», «puede» y «todos»: definen a quién se aplica la norma.",
    },
  },
  {
    id: "v-e-08",
    category: "verbal",
    difficulty: "easy",
    question: {
      en: "How many black-and-white pages per minute can the X200 print?",
      es: "¿Cuántas páginas por minuto en blanco y negro puede imprimir la X200?",
    },
    context: {
      en: "PRODUCT NOTE — X200 office printer. The X200 prints up to 40 pages per minute in black and white and 28 pages per minute in colour. Its standard paper tray holds 500 sheets. Recommended monthly volume: 10,000 pages.",
      es: "NOTA DE PRODUCTO — Impresora de oficina X200. La X200 imprime hasta 40 páginas por minuto en blanco y negro y 28 páginas por minuto en color. Su bandeja de papel estándar tiene capacidad para 500 hojas. Volumen mensual recomendado: 10.000 páginas.",
    },
    options: [
      { id: "a", label: { en: "28", es: "28" } },
      { id: "b", label: { en: "500", es: "500" } },
      { id: "c", label: { en: "40", es: "40" } },
      { id: "d", label: { en: "10,000", es: "10.000" } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The note states the X200 prints up to 40 pages per minute in black and white.",
      es: "La nota indica que la X200 imprime hasta 40 páginas por minuto en blanco y negro.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because 28 is the colour speed, not the black-and-white speed.",
        es: "La opción A es incorrecta porque 28 es la velocidad en color, no en blanco y negro.",
      },
      {
        en: "Options B and D are wrong because they refer to paper-tray capacity and monthly volume, not print speed.",
        es: "Las opciones B y D son incorrectas porque se refieren a la capacidad de la bandeja y al volumen mensual, no a la velocidad de impresión.",
      },
    ],
    tip: {
      en: "Match the unit in the question ('pages per minute') with the matching figure in the text — nearby numbers with different units are traps.",
      es: "Haga coincidir la unidad de la pregunta («páginas por minuto») con la cifra correspondiente del texto: los números cercanos con otras unidades son trampas.",
    },
  },
  // ---------------- MEDIUM ----------------
  {
    id: "v-m-01",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "Which of the following is an opinion rather than a fact?",
      es: "¿Cuál de las siguientes afirmaciones es una opinión y no un hecho?",
    },
    context: {
      en: "REGIONAL UPDATE — North region. Sales grew by 8% in the first quarter, reaching €3.1 million. Customer returns fell by 15%. The regional manager commented: 'These results prove that our team is the most motivated in the whole company.'",
      es: "ACTUALIZACIÓN REGIONAL — Región Norte. Las ventas crecieron un 8 % en el primer trimestre, hasta alcanzar los 3,1 millones de euros. Las devoluciones de clientes se redujeron un 15 %. El director regional comentó: «Estos resultados demuestran que nuestro equipo es el más motivado de toda la empresa».",
    },
    options: [
      { id: "a", label: { en: "Sales grew by 8% in the first quarter.", es: "Las ventas crecieron un 8 % en el primer trimestre." } },
      { id: "b", label: { en: "Revenue reached €3.1 million.", es: "Los ingresos alcanzaron los 3,1 millones de euros." } },
      { id: "c", label: { en: "Customer returns fell by 15%.", es: "Las devoluciones de clientes se redujeron un 15 %." } },
      { id: "d", label: { en: "The North team is the most motivated in the company.", es: "El equipo del Norte es el más motivado de la empresa." } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Options A–C are measurable facts stated in the update; the 'most motivated team' claim is the manager's subjective judgement.",
      es: "Las opciones A–C son hechos medibles del informe; la afirmación del «equipo más motivado» es un juicio subjetivo del director.",
    },
    whyWrong: [
      {
        en: "Options A, B and C are wrong because each is a verifiable figure given in the update, not a personal judgement.",
        es: "Las opciones A, B y C son incorrectas porque cada una es una cifra verificable del informe, no un juicio personal.",
      },
    ],
    tip: {
      en: "Facts can be checked against data; opinions use evaluative language ('best', 'most', 'should', 'proves'). Ask: could this be measured?",
      es: "Los hechos pueden comprobarse con datos; las opiniones usan lenguaje valorativo («mejor», «el más», «debería», «demuestra»). Pregúntese: ¿podría medirse?",
    },
  },
  {
    id: "v-m-02",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "Which statement is directly supported by the report?",
      es: "¿Qué afirmación está respaldada directamente por el informe?",
    },
    context: {
      en: "CUSTOMER SATISFACTION REPORT. A survey of 1,200 customers found that 82% were satisfied with our support service, up from 74% last year. The support director stated: 'This improvement shows that the new response-time policy is working.' The survey was conducted online in March.",
      es: "INFORME DE SATISFACCIÓN DEL CLIENTE. Una encuesta a 1.200 clientes reveló que el 82 % estaba satisfecho con nuestro servicio de asistencia, frente al 74 % del año pasado. El director de asistencia declaró: «Esta mejora demuestra que la nueva política de tiempos de respuesta está funcionando». La encuesta se realizó en línea en marzo.",
    },
    options: [
      { id: "a", label: { en: "The new response-time policy caused the improvement in satisfaction.", es: "La nueva política de tiempos de respuesta causó la mejora de la satisfacción." } },
      { id: "b", label: { en: "82% of the customers surveyed reported being satisfied with the support service.", es: "El 82 % de los clientes encuestados se declaró satisfecho con el servicio de asistencia." } },
      { id: "c", label: { en: "The support team is the best in the industry.", es: "El equipo de asistencia es el mejor del sector." } },
      { id: "d", label: { en: "All customers prefer the new response-time policy.", es: "Todos los clientes prefieren la nueva política de tiempos de respuesta." } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The 82% satisfaction figure is a direct survey result. The causal claim (A) is only the director's interpretation, and C and D go beyond the evidence.",
      es: "El 82 % de satisfacción es un resultado directo de la encuesta. La afirmación causal (A) es solo la interpretación del director, y C y D van más allá de la evidencia.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because the report shows a rise in satisfaction but does not prove what caused it.",
        es: "La opción A es incorrecta porque el informe muestra un aumento de la satisfacción, pero no demuestra qué lo causó.",
      },
      {
        en: "Options C and D are wrong because neither is stated or implied by the survey data.",
        es: "Las opciones C y D son incorrectas porque ninguna está indicada ni implícita en los datos de la encuesta.",
      },
    ],
    tip: {
      en: "Distinguish what the data shows from what people say about the data. A claim of cause needs evidence, not just a quote.",
      es: "Distinga lo que muestran los datos de lo que la gente dice sobre los datos. Una afirmación de causa necesita evidencia, no solo una cita.",
    },
  },
  {
    id: "v-m-03",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "What can be inferred from the review?",
      es: "¿Qué puede inferirse de la revisión?",
    },
    context: {
      en: "ANNUAL REVIEW — Logistics. Delivery costs rose 6% this year while the number of deliveries rose 22%. On-time delivery improved from 91% to 96%. The logistics director attributes the cost increase mainly to higher fuel prices, noting that the cost per delivery actually fell.",
      es: "REVISIÓN ANUAL — Logística. Los costes de entrega subieron un 6 % este año, mientras que el número de entregas aumentó un 22 %. La entrega puntual mejoró del 91 % al 96 %. El director de logística atribuye el aumento de costes principalmente a la subida del precio del combustible, y señala que el coste por entrega en realidad se redujo.",
    },
    options: [
      { id: "a", label: { en: "The average cost of each delivery decreased.", es: "El coste medio de cada entrega disminuyó." } },
      { id: "b", label: { en: "Fuel prices had no effect on delivery costs.", es: "Los precios del combustible no afectaron a los costes de entrega." } },
      { id: "c", label: { en: "Fewer deliveries were made this year.", es: "Este año se realizaron menos entregas." } },
      { id: "d", label: { en: "On-time delivery got worse.", es: "La entrega puntual empeoró." } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "If total costs rose 6% but deliveries rose 22%, the cost per delivery fell — the director states this explicitly.",
      es: "Si los costes totales subieron un 6 % pero las entregas aumentaron un 22 %, el coste por entrega bajó; el director lo afirma explícitamente.",
    },
    whyWrong: [
      {
        en: "Option B is wrong because the director names fuel prices as the main cause of the cost increase.",
        es: "La opción B es incorrecta porque el director señala los precios del combustible como causa principal del aumento de costes.",
      },
      {
        en: "Options C and D are wrong because they directly contradict the figures (deliveries +22%, punctuality 91% to 96%).",
        es: "Las opciones C y D son incorrectas porque contradicen directamente las cifras (entregas +22 %, puntualidad del 91 % al 96 %).",
      },
    ],
    tip: {
      en: "Combine two figures to derive a third: when a total and its volume move at different rates, the per-unit figure moves with the difference.",
      es: "Combine dos cifras para deducir una tercera: cuando un total y su volumen varían a ritmos distintos, la cifra por unidad se mueve con la diferencia.",
    },
  },
  {
    id: "v-m-04",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "The proposal's conclusion depends on which assumption?",
      es: "¿De qué supuesto depende la conclusión de la propuesta?",
    },
    context: {
      en: "PROPOSAL — Retail operations. 'We should extend our stores' opening hours until 22:00. Two competitors extended their hours last year and both reported higher evening footfall. Longer hours will therefore increase our sales too.'",
      es: "PROPUESTA — Operaciones minoristas. «Deberíamos ampliar el horario de nuestras tiendas hasta las 22:00. Dos competidores ampliaron su horario el año pasado y ambos registraron más afluencia por la noche. Por tanto, un horario más amplio también aumentará nuestras ventas».",
    },
    options: [
      { id: "a", label: { en: "Competitors' reports about footfall are accurate.", es: "Los informes de los competidores sobre la afluencia son exactos." } },
      { id: "b", label: { en: "Evening customers spend more than morning customers.", es: "Los clientes de la noche gastan más que los de la mañana." } },
      { id: "c", label: { en: "What worked for the competitors will also work for our stores.", es: "Lo que funcionó para los competidores también funcionará para nuestras tiendas." } },
      { id: "d", label: { en: "Our stores currently close before 22:00.", es: "Nuestras tiendas cierran actualmente antes de las 22:00." } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The argument transfers the competitors' experience to our stores; it only works if the same effect can be expected for us.",
      es: "El argumento traslada la experiencia de los competidores a nuestras tiendas; solo funciona si cabe esperar el mismo efecto para nosotros.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because even accurate competitor data would not prove the effect transfers to our stores.",
        es: "La opción A es incorrecta porque, aunque los datos de los competidores fueran exactos, eso no demostraría que el efecto se traslade a nuestras tiendas.",
      },
      {
        en: "Options B and D are wrong because the conclusion does not require them: higher footfall could raise sales even without bigger tickets, and current closing time is background detail.",
        es: "Las opciones B y D son incorrectas porque la conclusión no las necesita: una mayor afluencia podría aumentar las ventas sin tickets mayores, y la hora actual de cierre es un detalle de contexto.",
      },
    ],
    tip: {
      en: "To find an assumption, ask: what must be true for the evidence to prove the conclusion? Arguments by analogy always assume the cases are comparable.",
      es: "Para hallar un supuesto, pregúntese: ¿qué debe ser cierto para que la evidencia demuestre la conclusión? Los argumentos por analogía siempre suponen que los casos son comparables.",
    },
  },
  {
    id: "v-m-05",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "Which of the following, if true, most weakens the recommendation?",
      es: "¿Cuál de las siguientes afirmaciones, de ser cierta, debilita más la recomendación?",
    },
    context: {
      en: "MARKETING PLAN. The marketing director recommends a 20% discount campaign for the spring collection: 'Discounts have always driven traffic to our stores, and the spring collection is our largest ever. A discount will clear stock before the summer line arrives.'",
      es: "PLAN DE MARKETING. La directora de marketing recomienda una campaña de descuentos del 20 % para la colección de primavera: «Los descuentos siempre han atraído tráfico a nuestras tiendas, y la colección de primavera es la más grande que hemos tenido. Un descuento liquidará el stock antes de que llegue la línea de verano».",
    },
    options: [
      { id: "a", label: { en: "Previous discount campaigns attracted bargain-hunters but did not increase total revenue.", es: "Las campañas de descuentos anteriores atrajeron a cazaofertas, pero no aumentaron los ingresos totales." } },
      { id: "b", label: { en: "The spring collection received positive reviews from fashion journalists.", es: "La colección de primavera recibió críticas positivas de periodistas de moda." } },
      { id: "c", label: { en: "The summer line will arrive two weeks later than planned.", es: "La línea de verano llegará dos semanas más tarde de lo previsto." } },
      { id: "d", label: { en: "Store traffic has been stable for the last three months.", es: "El tráfico en tienda se ha mantenido estable durante los últimos tres meses." } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "If past discounts drove traffic without raising revenue, the key premise of the recommendation — that discounts achieve the business goal — fails.",
      es: "Si los descuentos anteriores atrajeron tráfico sin aumentar los ingresos, falla la premisa clave de la recomendación: que los descuentos logran el objetivo comercial.",
    },
    whyWrong: [
      {
        en: "Option B is wrong because positive reviews strengthen, rather than weaken, the case for promoting the collection.",
        es: "La opción B es incorrecta porque las críticas positivas refuerzan, en lugar de debilitar, la promoción de la colección.",
      },
      {
        en: "Options C and D are wrong because a delayed summer line or stable traffic neither supports nor undermines the discount logic.",
        es: "Las opciones C y D son incorrectas porque un retraso de la línea de verano o un tráfico estable ni apoyan ni socavan la lógica del descuento.",
      },
    ],
    tip: {
      en: "To weaken an argument, attack its central premise or show its evidence does not lead to the conclusion — not just a side detail.",
      es: "Para debilitar un argumento, ataque su premisa central o demuestre que su evidencia no conduce a la conclusión, no solo un detalle secundario.",
    },
  },
  {
    id: "v-m-06",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "Which conclusion follows from the summary?",
      es: "¿Qué conclusión se deriva del resumen?",
    },
    context: {
      en: "HR SUMMARY. Headcount fell by 5% this year after the automation programme, while company revenue grew by 10%. Employee turnover remained stable at 12%, and the training budget was unchanged.",
      es: "RESUMEN DE RR. HH. La plantilla se redujo un 5 % este año tras el programa de automatización, mientras que los ingresos de la empresa crecieron un 10 %. La rotación de empleados se mantuvo estable en el 12 % y el presupuesto de formación no cambió.",
    },
    options: [
      { id: "a", label: { en: "Automation caused the revenue growth.", es: "La automatización causó el crecimiento de los ingresos." } },
      { id: "b", label: { en: "Employees are now less satisfied.", es: "Los empleados están ahora menos satisfechos." } },
      { id: "c", label: { en: "The training budget was cut.", es: "El presupuesto de formación se recortó." } },
      { id: "d", label: { en: "Revenue per employee increased.", es: "Los ingresos por empleado aumentaron." } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "Revenue rose while headcount fell, so revenue per employee must have risen. Nothing is said about causes, satisfaction, or training cuts.",
      es: "Los ingresos subieron mientras la plantilla se redujo, por lo que los ingresos por empleado tuvieron que aumentar. No se dice nada sobre causas, satisfacción o recortes de formación.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because the summary shows both trends but does not establish that automation caused the revenue growth.",
        es: "La opción A es incorrecta porque el resumen muestra ambas tendencias, pero no establece que la automatización causara el crecimiento de los ingresos.",
      },
      {
        en: "Options B and C are wrong because satisfaction is not mentioned and the training budget was explicitly unchanged.",
        es: "Las opciones B y C son incorrectas porque no se menciona la satisfacción y el presupuesto de formación se mantuvo explícitamente sin cambios.",
      },
    ],
    tip: {
      en: "A valid conclusion must follow from the data alone. Reject options that add causes, feelings, or facts the text never gives.",
      es: "Una conclusión válida debe derivarse solo de los datos. Descarte las opciones que añaden causas, sentimientos o hechos que el texto no menciona.",
    },
  },
  {
    id: "v-m-07",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "Which part of the statement is presented as fact?",
      es: "¿Qué parte de la declaración se presenta como hecho?",
    },
    context: {
      en: "CEO STATEMENT. 'Our new sustainability programme cut packaging waste by 30% last year. I believe this makes us the most responsible company in our sector, and customers will reward us with their loyalty.'",
      es: "DECLARACIÓN DEL CONSEJERO DELEGADO. «Nuestro nuevo programa de sostenibilidad redujo los residuos de envases un 30 % el año pasado. Creo que esto nos convierte en la empresa más responsable de nuestro sector, y los clientes nos recompensarán con su lealtad».",
    },
    options: [
      { id: "a", label: { en: "That the company is the most responsible in its sector.", es: "Que la empresa es la más responsable de su sector." } },
      { id: "b", label: { en: "That packaging waste fell by 30% last year.", es: "Que los residuos de envases se redujeron un 30 % el año pasado." } },
      { id: "c", label: { en: "That customers will reward the company with loyalty.", es: "Que los clientes recompensarán a la empresa con su lealtad." } },
      { id: "d", label: { en: "That the programme is the best investment the company ever made.", es: "Que el programa es la mejor inversión que la empresa ha hecho jamás." } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The 30% reduction is a measurable result; the rest are the CEO's beliefs, predictions, or judgements.",
      es: "La reducción del 30 % es un resultado medible; el resto son creencias, predicciones o juicios del consejero delegado.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because 'most responsible' is an evaluative judgement, signalled by 'I believe'.",
        es: "La opción A es incorrecta porque «la más responsable» es un juicio valorativo, introducido por «creo que».",
      },
      {
        en: "Options C and D are wrong because C is a prediction about the future and D was never said in the statement.",
        es: "Las opciones C y D son incorrectas porque C es una predicción sobre el futuro y D nunca se dijo en la declaración.",
      },
    ],
    tip: {
      en: "Look for the language: 'I believe', 'will', and superlatives ('most', 'best') mark opinions; precise figures mark facts.",
      es: "Fíjese en el lenguaje: «creo», «será» y los superlativos («el más», «el mejor») marcan opiniones; las cifras precisas marcan hechos.",
    },
  },
  {
    id: "v-m-08",
    category: "verbal",
    difficulty: "medium",
    question: {
      en: "Which conclusion is best supported by the report?",
      es: "¿Qué conclusión está mejor respaldada por el informe?",
    },
    context: {
      en: "OPERATIONS REPORT. In Q2, the company fulfilled 48,000 orders, 6% more than in Q1. The average delivery time dropped from 4.2 days to 3.5 days. Returns remained at 3% of orders. The operations manager concluded that service quality improved.",
      es: "INFORME DE OPERACIONES. En el T2, la empresa gestionó 48.000 pedidos, un 6 % más que en el T1. El tiempo medio de entrega bajó de 4,2 a 3,5 días. Las devoluciones se mantuvieron en el 3 % de los pedidos. El director de operaciones concluyó que la calidad del servicio mejoró.",
    },
    options: [
      { id: "a", label: { en: "Customers are more satisfied than ever.", es: "Los clientes están más satisfechos que nunca." } },
      { id: "b", label: { en: "The company should hire more warehouse staff.", es: "La empresa debería contratar más personal de almacén." } },
      { id: "c", label: { en: "Delivery performance improved in Q2.", es: "El rendimiento de las entregas mejoró en el T2." } },
      { id: "d", label: { en: "Returns are the company's biggest problem.", es: "Las devoluciones son el mayor problema de la empresa." } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "More orders fulfilled plus faster average delivery directly support improved delivery performance; satisfaction, hiring, and 'biggest problem' are not evidenced.",
      es: "Más pedidos gestionados y una entrega media más rápida respaldan directamente la mejora del rendimiento de entregas; la satisfacción, la contratación y el «mayor problema» no tienen evidencia.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because no customer-satisfaction data is given.",
        es: "La opción A es incorrecta porque no se ofrecen datos de satisfacción del cliente.",
      },
      {
        en: "Options B and D are wrong because the report recommends nothing about hiring, and a stable 3% return rate is not presented as a problem.",
        es: "Las opciones B y D son incorrectas porque el informe no recomienda nada sobre contratación, y una tasa de devoluciones estable del 3 % no se presenta como un problema.",
      },
    ],
    tip: {
      en: "The best-supported conclusion stays inside the evidence. Reject options that introduce new topics the passage never measures.",
      es: "La conclusión mejor respaldada se mantiene dentro de la evidencia. Descarte las opciones que introducen temas que el texto no mide.",
    },
  },
  // ---------------- HARD ----------------
  {
    id: "v-h-01",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which of the following, if true, most strengthens the argument?",
      es: "¿Cuál de las siguientes afirmaciones, de ser cierta, refuerza más el argumento?",
    },
    context: {
      en: "ARGUMENT — Training investment. 'The company should expand its staff training programme. Trained employees make fewer errors, and fewer errors mean lower costs and higher customer satisfaction. Therefore, more training will improve profitability.'",
      es: "ARGUMENTO — Inversión en formación. «La empresa debería ampliar su programa de formación del personal. Los empleados formados cometen menos errores, y menos errores significan menores costes y mayor satisfacción del cliente. Por tanto, más formación mejorará la rentabilidad».",
    },
    options: [
      { id: "a", label: { en: "Employees enjoy training sessions and rate them highly.", es: "Los empleados disfrutan de las sesiones de formación y las valoran muy positivamente." } },
      { id: "b", label: { en: "A recent study found that after training, error rates fell by 40% and the savings exceeded the training cost.", es: "Un estudio reciente reveló que, tras la formación, las tasas de error se redujeron un 40 % y el ahorro superó el coste de la formación." } },
      { id: "c", label: { en: "Competitors spend more on training than we do.", es: "Los competidores gastan más en formación que nosotros." } },
      { id: "d", label: { en: "Training programmes are legally required in our industry.", es: "Los programas de formación son obligatorios por ley en nuestro sector." } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "B directly supports the causal chain: training → fewer errors → savings greater than cost, which is exactly what the conclusion (higher profitability) needs.",
      es: "B apoya directamente la cadena causal: formación → menos errores → ahorro superior al coste, que es justo lo que necesita la conclusión (mayor rentabilidad).",
    },
    whyWrong: [
      {
        en: "Option A is wrong because employee enjoyment does not show that training reduces errors or improves profitability.",
        es: "La opción A es incorrecta porque el disfrute de los empleados no demuestra que la formación reduzca errores ni mejore la rentabilidad.",
      },
      {
        en: "Options C and D are wrong because competitor spending and legal requirements give no evidence that training is profitable.",
        es: "Las opciones C y D son incorrectas porque el gasto de los competidores y las obligaciones legales no aportan evidencia de que la formación sea rentable.",
      },
    ],
    tip: {
      en: "To strengthen an argument, find evidence for its weakest link — usually the step from evidence to conclusion — not for a side point.",
      es: "Para reforzar un argumento, busque evidencia para su eslabón más débil —normalmente el paso de la evidencia a la conclusión—, no para un punto secundario.",
    },
  },
  {
    id: "v-h-02",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which of the following, if true, most weakens the argument?",
      es: "¿Cuál de las siguientes afirmaciones, de ser cierta, debilita más el argumento?",
    },
    context: {
      en: "ARGUMENT — Remote work. 'Moving to fully remote work will reduce our costs. Office rent is our largest fixed cost, and eliminating it would save €1.2 million per year with no loss of productivity, since our teams already collaborate online.'",
      es: "ARGUMENTO — Teletrabajo. «Pasar al teletrabajo total reducirá nuestros costes. El alquiler de la oficina es nuestro mayor coste fijo, y eliminarlo ahorraría 1,2 millones de euros al año sin pérdida de productividad, ya que nuestros equipos ya colaboran en línea».",
    },
    options: [
      { id: "a", label: { en: "Some employees prefer working in the office.", es: "Algunos empleados prefieren trabajar en la oficina." } },
      { id: "b", label: { en: "Office rent has risen in recent years.", es: "El alquiler de oficinas ha subido en los últimos años." } },
      { id: "c", label: { en: "Other companies saved money by going remote.", es: "Otras empresas ahorraron dinero con el teletrabajo." } },
      { id: "d", label: { en: "Remote employees would receive a home-office allowance totalling €1.5 million per year.", es: "Los empleados en remoto recibirían una ayuda para la oficina en casa por un total de 1,5 millones de euros al año." } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "If the allowance (€1.5m) exceeds the rent saving (€1.2m), the promised cost reduction disappears — the conclusion's core claim fails.",
      es: "Si la ayuda (1,5 M€) supera el ahorro del alquiler (1,2 M€), la prometida reducción de costes desaparece: falla la afirmación central de la conclusión.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because employee preferences do not affect whether costs fall.",
        es: "La opción A es incorrecta porque las preferencias de los empleados no afectan a si los costes bajan.",
      },
      {
        en: "Options B and C are wrong because rising rents or others' savings would, if anything, strengthen the argument.",
        es: "Las opciones B y C son incorrectas porque el aumento de los alquileres o el ahorro de otras empresas, en todo caso, reforzarían el argumento.",
      },
    ],
    tip: {
      en: "A strong weakener targets the conclusion's arithmetic: show the promised benefit is cancelled out, not just that someone dislikes the plan.",
      es: "Un buen debilitador ataca la aritmética de la conclusión: demuestre que el beneficio prometido se anula, no solo que a alguien no le gusta el plan.",
    },
  },
  {
    id: "v-h-03",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which assumption is required for the conclusion to hold?",
      es: "¿Qué supuesto es necesario para que la conclusión sea válida?",
    },
    context: {
      en: "ARGUMENT — New CRM. 'We should buy the NovaCRM system. It automates customer follow-ups, and businesses that follow up systematically close more deals. Therefore, NovaCRM will increase our sales.'",
      es: "ARGUMENTO — Nuevo CRM. «Deberíamos comprar el sistema NovaCRM. Automatiza los seguimientos a clientes, y las empresas que hacen un seguimiento sistemático cierran más acuerdos. Por tanto, NovaCRM aumentará nuestras ventas».",
    },
    options: [
      { id: "a", label: { en: "NovaCRM is cheaper than competing systems.", es: "NovaCRM es más barato que los sistemas de la competencia." } },
      { id: "b", label: { en: "Our competitors do not use NovaCRM.", es: "Nuestros competidores no utilizan NovaCRM." } },
      { id: "c", label: { en: "Our sales team will actually use NovaCRM consistently.", es: "Nuestro equipo de ventas utilizará NovaCRM de forma constante." } },
      { id: "d", label: { en: "Customer follow-ups are currently done by phone.", es: "Los seguimientos a clientes se hacen actualmente por teléfono." } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The argument assumes the system's capability becomes real results — which requires the team to use it. Without adoption, automation changes nothing.",
      es: "El argumento supone que la capacidad del sistema se convierte en resultados reales, lo cual exige que el equipo lo utilice. Sin adopción, la automatización no cambia nada.",
    },
    whyWrong: [
      {
        en: "Options A and B are wrong because price and competitors' choices are irrelevant to whether the system raises our sales.",
        es: "Las opciones A y B son incorrectas porque el precio y las decisiones de los competidores son irrelevantes para si el sistema aumenta nuestras ventas.",
      },
      {
        en: "Option D is wrong because the current follow-up channel does not matter; the conclusion needs consistent use, not a particular starting point.",
        es: "La opción D es incorrecta porque el canal actual de seguimiento no importa; la conclusión necesita un uso constante, no un punto de partida concreto.",
      },
    ],
    tip: {
      en: "Test an assumption by negating it: if the argument collapses when the statement is false, the assumption is required.",
      es: "Compruebe un supuesto negándolo: si el argumento se derrumba cuando la afirmación es falsa, el supuesto es necesario.",
    },
  },
  {
    id: "v-h-04",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which of the following, if true, best explains the apparent paradox?",
      es: "¿Cuál de las siguientes afirmaciones, de ser cierta, explica mejor la aparente paradoja?",
    },
    context: {
      en: "PARADOX. Last year the company doubled its marketing budget, yet independent brand-awareness surveys show that recognition of the brand fell by 10 percentage points over the same period. The marketing director insists the extra spending was well targeted.",
      es: "PARADOJA. El año pasado la empresa duplicó su presupuesto de marketing, pero las encuestas independientes de notoriedad de marca muestran que el reconocimiento de la marca cayó 10 puntos porcentuales en el mismo periodo. El director de marketing insiste en que el gasto adicional estuvo bien orientado.",
    },
    options: [
      { id: "a", label: { en: "Competitors tripled their marketing spend, drowning out the company's campaigns.", es: "Los competidores triplicaron su gasto en marketing, eclipsando las campañas de la empresa." } },
      { id: "b", label: { en: "The company's products received excellent reviews last year.", es: "Los productos de la empresa recibieron excelentes críticas el año pasado." } },
      { id: "c", label: { en: "Marketing staff received a pay rise in January.", es: "El personal de marketing recibió un aumento salarial en enero." } },
      { id: "d", label: { en: "The surveys were conducted by a reputable agency.", es: "Las encuestas fueron realizadas por una agencia de prestigio." } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "Brand awareness is relative: even well-targeted spending can lose share of voice if competitors spend far more, so awareness can fall while the budget rises.",
      es: "La notoriedad de marca es relativa: incluso un gasto bien orientado puede perder cuota de voz si los competidores gastan mucho más, de modo que la notoriedad puede caer mientras sube el presupuesto.",
    },
    whyWrong: [
      {
        en: "Option B is wrong because good reviews would tend to raise, not lower, brand recognition.",
        es: "La opción B es incorrecta porque las buenas críticas tenderían a elevar, no a reducir, el reconocimiento de marca.",
      },
      {
        en: "Options C and D are wrong because staff pay and survey quality do not explain why awareness fell despite higher spending.",
        es: "Las opciones C y D son incorrectas porque el salario del personal y la calidad de la encuesta no explican por qué cayó la notoriedad pese al mayor gasto.",
      },
    ],
    tip: {
      en: "To resolve a paradox, look for a hidden factor that affects both sides — here, awareness is relative, not absolute.",
      es: "Para resolver una paradoja, busque un factor oculto que afecte a ambos lados: aquí, la notoriedad es relativa, no absoluta.",
    },
  },
  {
    id: "v-h-05",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "What is the flaw in this reasoning?",
      es: "¿Cuál es el fallo de este razonamiento?",
    },
    context: {
      en: "ARGUMENT — Rebrand. 'Our record sales quarter came right after the company rebrand. The new image clearly attracted customers, so the rebrand caused our best quarter ever.'",
      es: "ARGUMENTO — Cambio de imagen. «Nuestro trimestre récord de ventas llegó justo después del cambio de imagen de la empresa. La nueva imagen atrajo claramente a los clientes, así que el cambio de imagen causó nuestro mejor trimestre de la historia».",
    },
    options: [
      { id: "a", label: { en: "It relies on data that is too old to be relevant.", es: "Se basa en datos demasiado antiguos para ser relevantes." } },
      { id: "b", label: { en: "It assumes customers notice branding.", es: "Supone que los clientes se fijan en la imagen de marca." } },
      { id: "c", label: { en: "It confuses the order of events with causation.", es: "Confunde el orden de los acontecimientos con la causalidad." } },
      { id: "d", label: { en: "It draws a conclusion about the whole year from one quarter.", es: "Extrae una conclusión sobre todo el año a partir de un trimestre." } },
    ],
    correctAnswer: "c",
    explanation: {
      en: "The argument treats 'after the rebrand' as 'because of the rebrand' — a classic post hoc fallacy — ignoring other possible causes such as seasonality or market conditions.",
      es: "El argumento trata «después del cambio de imagen» como «a causa del cambio de imagen» —la clásica falacia post hoc— ignorando otras posibles causas como la estacionalidad o las condiciones del mercado.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because the data is recent (last quarter), not old.",
        es: "La opción A es incorrecta porque los datos son recientes (el último trimestre), no antiguos.",
      },
      {
        en: "Options B and D are wrong because the argument does not depend on customers noticing branding details, and it makes no claim about the whole year.",
        es: "Las opciones B y D son incorrectas porque el argumento no depende de que los clientes noten detalles de la marca, y no hace ninguna afirmación sobre todo el año.",
      },
    ],
    tip: {
      en: "Name the classic flaw: 'after this, therefore because of this' is post hoc reasoning. Check whether other causes were ruled out.",
      es: "Nombre la falacia clásica: «después de esto, luego a causa de esto» es razonamiento post hoc. Compruebe si se descartaron otras causas.",
    },
  },
  {
    id: "v-h-06",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which of the following must be true for the argument's conclusion to hold?",
      es: "¿Cuál de las siguientes afirmaciones debe ser cierta para que la conclusión del argumento sea válida?",
    },
    context: {
      en: "ARGUMENT — Price rise. 'We can raise the price of our premium service by 10% without losing customers. Our customer survey shows that 90% of clients rate the service as excellent and say they would not switch to a competitor for a small price difference.'",
      es: "ARGUMENTO — Subida de precios. «Podemos subir un 10 % el precio de nuestro servicio premium sin perder clientes. Nuestra encuesta a clientes muestra que el 90 % califica el servicio como excelente y dice que no cambiaría a un competidor por una pequeña diferencia de precio».",
    },
    options: [
      { id: "a", label: { en: "Competitors will also raise their prices by 10%.", es: "Los competidores también subirán sus precios un 10 %." } },
      { id: "b", label: { en: "Customers consider a 10% rise to be a small price difference.", es: "Los clientes consideran que una subida del 10 % es una pequeña diferencia de precio." } },
      { id: "c", label: { en: "The service is the best on the market.", es: "El servicio es el mejor del mercado." } },
      { id: "d", label: { en: "No new competitors will enter the market.", es: "No entrarán nuevos competidores en el mercado." } },
    ],
    correctAnswer: "b",
    explanation: {
      en: "The survey only protects against 'small' differences; the conclusion needs 10% to count as small in customers' eyes. If customers see 10% as large, the survey evidence does not apply.",
      es: "La encuesta solo protege frente a diferencias «pequeñas»; la conclusión necesita que el 10 % cuente como pequeño a ojos de los clientes. Si los clientes ven el 10 % como grande, la evidencia de la encuesta no se aplica.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because the argument claims customers would stay even if competitors keep prices — it does not need rivals to raise theirs.",
        es: "La opción A es incorrecta porque el argumento afirma que los clientes se quedarían aunque los competidores mantengan sus precios; no necesita que los rivales suban los suyos.",
      },
      {
        en: "Options C and D are wrong because the conclusion does not require being the best or a frozen market, only that customers tolerate this specific rise.",
        es: "Las opciones C y D son incorrectas porque la conclusión no exige ser el mejor ni un mercado congelado, solo que los clientes toleren esta subida concreta.",
      },
    ],
    tip: {
      en: "Watch for vague qualifiers ('small', 'soon', 'most') in evidence: the argument's numbers must fit inside them.",
      es: "Atención a los calificativos vagos («pequeña», «pronto», «la mayoría») en la evidencia: las cifras del argumento deben encajar dentro de ellos.",
    },
  },
  {
    id: "v-h-07",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which of the following, if true, most seriously undermines the argument?",
      es: "¿Cuál de las siguientes afirmaciones, de ser cierta, socava más seriamente el argumento?",
    },
    context: {
      en: "ARGUMENT — Four-day week. 'Introducing a four-day week will boost productivity. A two-year trial at a similar-sized manufacturer showed output per hour rose 18%, and our staff survey shows 78% of employees believe they would be more productive with an extra day off.'",
      es: "ARGUMENTO — Semana de cuatro días. «Introducir la semana de cuatro días aumentará la productividad. Una prueba de dos años en un fabricante de tamaño similar mostró que la producción por hora subió un 18 %, y nuestra encuesta al personal muestra que el 78 % de los empleados cree que sería más productivo con un día libre extra».",
    },
    options: [
      { id: "a", label: { en: "The manufacturer in the trial also introduced new machinery during the trial period.", es: "El fabricante de la prueba también introdujo nueva maquinaria durante el periodo de prueba." } },
      { id: "b", label: { en: "Some employees said they would use the extra day for a second job.", es: "Algunos empleados dijeron que usarían el día extra para un segundo empleo." } },
      { id: "c", label: { en: "Staff surveys at the company have a low response rate.", es: "Las encuestas al personal de la empresa tienen una baja tasa de respuesta." } },
      { id: "d", label: { en: "The trial manufacturer measured output per hour, but total weekly output fell by 9%.", es: "El fabricante de la prueba midió la producción por hora, pero la producción semanal total cayó un 9 %." } },
    ],
    correctAnswer: "d",
    explanation: {
      en: "The argument promises higher productivity overall, but D shows the trial's 'gain' came with fewer hours worked and less total output — directly contradicting the conclusion.",
      es: "El argumento promete mayor productividad en general, pero D muestra que la «ganancia» de la prueba vino con menos horas trabajadas y menor producción total, lo que contradice directamente la conclusión.",
    },
    whyWrong: [
      {
        en: "Option A is wrong because an alternative cause weakens the trial evidence, but D attacks the conclusion itself with the trial's own numbers.",
        es: "La opción A es incorrecta porque una causa alternativa debilita la evidencia de la prueba, pero D ataca la propia conclusión con los números de la prueba.",
      },
      {
        en: "Options B and C are wrong because second jobs and low response rates are side issues that leave the productivity claim standing.",
        es: "Las opciones B y C son incorrectas porque los segundos empleos y la baja respuesta son cuestiones secundarias que dejan intacta la afirmación de productividad.",
      },
    ],
    tip: {
      en: "The strongest weakener contradicts the conclusion with its own evidence type. Rank options: direct contradiction beats alternative explanations, which beat side issues.",
      es: "El debilitador más fuerte contradice la conclusión con su propio tipo de evidencia. Ordene las opciones: la contradicción directa supera a las explicaciones alternativas, que superan a las cuestiones secundarias.",
    },
  },
  {
    id: "v-h-08",
    category: "verbal",
    difficulty: "hard",
    question: {
      en: "Which question would be most useful to ask in order to evaluate the argument?",
      es: "¿Qué pregunta sería más útil para evaluar el argumento?",
    },
    context: {
      en: "ARGUMENT — Outsourcing. 'We should outsource our customer support to an external provider. It would cut support costs by 35%, and the provider guarantees the same response times we achieve today. Lower costs with equal service can only benefit the company.'",
      es: "ARGUMENTO — Externalización. «Deberíamos externalizar nuestra atención al cliente a un proveedor externo. Reduciría los costes de asistencia un 35 % y el proveedor garantiza los mismos tiempos de respuesta que logramos hoy. Menores costes con igual servicio solo puede beneficiar a la empresa».",
    },
    options: [
      { id: "a", label: { en: "Does the provider's guarantee cover service quality, or only response times?", es: "¿La garantía del proveedor cubre la calidad del servicio, o solo los tiempos de respuesta?" } },
      { id: "b", label: { en: "How many employees does the external provider have?", es: "¿Cuántos empleados tiene el proveedor externo?" } },
      { id: "c", label: { en: "Have other companies outsourced their support?", es: "¿Otras empresas han externalizado su asistencia?" } },
      { id: "d", label: { en: "When was the provider founded?", es: "¿Cuándo se fundó el proveedor?" } },
    ],
    correctAnswer: "a",
    explanation: {
      en: "'Equal service' is assumed from equal response times, but speed is not quality — if the guarantee covers only speed, service could worsen while costs fall, breaking the conclusion.",
      es: "Se supone un «servicio igual» a partir de tiempos de respuesta iguales, pero la rapidez no es calidad: si la garantía solo cubre la rapidez, el servicio podría empeorar mientras bajan los costes, rompiendo la conclusión.",
    },
    whyWrong: [
      {
        en: "Option B is wrong because provider headcount does not determine the quality our customers would receive.",
        es: "La opción B es incorrecta porque el número de empleados del proveedor no determina la calidad que recibirían nuestros clientes.",
      },
      {
        en: "Options C and D are wrong because others' choices and the provider's age do not test whether equal response times mean equal service.",
        es: "Las opciones C y D son incorrectas porque las decisiones de otros y la antigüedad del proveedor no comprueban si tiempos de respuesta iguales significan servicio igual.",
      },
    ],
    tip: {
      en: "To evaluate an argument, probe the gap between its evidence and its conclusion: ask the question whose answer would confirm or break that link.",
      es: "Para evaluar un argumento, examine la brecha entre su evidencia y su conclusión: formule la pregunta cuya respuesta confirmaría o rompería ese vínculo.",
    },
  },
];

export default questions;
