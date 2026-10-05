# Plan de contenido — mordonez.dev

**Para:** Mariana Ordonez — diseñadora y artista, 7 años en contenido e-commerce (moda y belleza), 2 años integrando IA en producción.
**Objetivo:** conseguir trabajo como **AI Experience Designer**, remoto, para empresas de Estados Unidos o Europa, con mejor salario.
**Sitio:** Astro 6 en `mordonez.dev` — hoy tiene Home, Blog y Journal con contenido placeholder. Este plan define qué contenido crear, en qué orden y por qué.

---

## 1. Resumen ejecutivo

El sitio no es un portafolio genérico de diseñadora: es una **máquina de conversión hacia un rol de AI Experience Designer**. Cada página debe responder, en menos de 30 segundos, la pregunta que se hace un hiring manager: *"¿esta persona puede diseñar experiencias con IA que generen resultados de negocio?"*

Tres decisiones estratégicas que ordenan todo lo demás:

1. **Inglés primero en las páginas de contratación** (Home, Work, About, casos de estudio): tu audiencia que paga está en EE. UU. y Europa. El español vive en el Journal y en versiones seleccionadas del blog — sin montar i18n completo al inicio.
2. **Liderar con resultados, no con herramientas.** "Bajé el costo por foto 60%" contrata; "uso Midjourney" no. Las herramientas aparecen como evidencia, nunca como titular.
3. **El caso de estudio del pipeline de fotos (–60% costo) es la pieza ancla.** Es el único proyecto con métrica dura: se publica primero y todo lo demás enlaza hacia él.

Resultado esperado en 12 semanas: 3 casos de estudio publicados, página About con CTA de contratación, 5–6 posts de blog, journal activo, y un sitio que puedes pegar en cualquier aplicación o mensaje de LinkedIn sin pedir disculpas.

---

## 2. Posicionamiento y mensaje central

### El puente que te diferencia

No compites como "diseñadora que aprendió IA" ni como "prompt engineer". Tu posición única es la intersección de tres cosas que casi nadie tiene juntas:

- **Dominio profundo de operación de contenido e-commerce** (7 años: fotos de producto, copys, fichas — sabes qué cuesta, qué convierte y qué aprueba un brand manager).
- **IA aplicada en producción real, con resultados medibles** (no demos: pipelines que un equipo usa todos los días).
- **Práctica artística con herramientas generativas** (criterio visual y oficio — la prueba de que tienes gusto, no solo proceso).

### Statement de posicionamiento (para Home, About, LinkedIn)

**EN (versión principal):**
> I design AI-powered content systems and shopping experiences for fashion and beauty e-commerce. Seven years producing the content; the last two rebuilding it with generative AI — including a product photo pipeline that cut cost per photo by ~60%.

**ES (referencia para LinkedIn en español):**
> Diseño sistemas de contenido y experiencias de compra con IA para e-commerce de moda y belleza. Siete años produciendo el contenido; los últimos dos rediseñándolo con IA generativa — incluido un pipeline de fotos de producto que bajó el costo por foto ~60%.

### Audiencias, en orden de prioridad

1. **Hiring managers / design leads** en e-commerce, retail tech y startups de IA (EE. UU./UE) — leen Work y About; deciden en minutos.
2. **Recruiters** que buscan títulos: usar en el sitio las variantes que ellos buscan — *AI Experience Designer, AI Content Designer, Conversational Designer, GenAI Creative Technologist*.
3. **Comunidad de diseño + IA** (potenciales referidos) — leen Blog y Journal.
4. **Clientes freelance** (plan B de ingresos mientras llega el rol) — aterrizan vía SEO en casos de estudio.

### Estrategia de idioma (decisión cerrada, sin i18n al inicio)

| Contenido | Idioma | Razón |
|---|---|---|
| Home, About, Work (casos de estudio) | **Inglés** | Es lo que lee quien contrata. El sitio ya está en `lang="en"`. |
| Blog | **Inglés por defecto**; 2–3 posts clave también en español | Alcance + SEO en EN; visibilidad en comunidad hispana con piezas seleccionadas (marcar "(ES)" en el título o tag `es`). |
| Journal | **Español primero**, inglés cuando salga natural | Es tu espacio de proceso; la autenticidad vale más que el alcance. Una nota breve en frontmatter o primera línea ("*Field note in Spanish*") evita confusión. |

Más adelante (no ahora): i18n de Astro con `hreflang` si el contenido en español crece. No bloquear el lanzamiento por esto.

---

## 3. Arquitectura del sitio: de lo que hay a lo que se necesita

### Estado actual (auditado en el repo)

- Colecciones: `blog` y `journal` (schema compartido: `title`, `description`, `pubDate`, `updatedDate`, `draft`, `tags`) en `src/content.config.ts`.
- Páginas: Home (`src/pages/index.astro`), `/blog/` + detalle, `/journal/` + detalle.
- **No existe sección de portafolio** (la Home la menciona como concepto, pero no hay colección ni rutas `work`).
- **No hay página About ni contacto.**
- Contenido placeholder por reemplazar: `src/content/blog/first-post.md` y `src/content/journal/field-note-001.md`.
- SEO base bien resuelto: canonical, Open Graph, sitemap, robots.txt apuntando a `mordonez.dev`. El OG image (`public/og-default.svg`) es genérico.
- La Home promete "RSS-ready" pero no hay feed RSS instalado (`@astrojs/rss` no está en `package.json`).

### Estructura objetivo

```
/                  Home (reescribir hero y secciones)
/work/             Índice de casos de estudio  ← NUEVO (colección `work`)
/work/[slug]/      Caso de estudio             ← NUEVO
/about/            Bio + qué busco + contacto  ← NUEVO
/blog/             (existe — solo contenido nuevo)
/journal/          (existe — solo contenido nuevo)
```

Navegación en `BaseLayout.astro`: **Work · About · Blog · Journal** (Work primero: es lo que importa para contratar). El arte generativo vive como caso de estudio dentro de Work (`/work/generative-studio/`), no como sección aparte — menos mantenimiento y posiciona el arte como práctica profesional, no como hobby separado.

### Schema propuesto para la colección `work`

Cuando se implemente, extender `src/content.config.ts` con algo así (los campos importan para el plan de contenido porque definen qué información debe tener cada caso):

```ts
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),        // ≤160 caracteres, es el meta description
    pubDate: z.date(),
    client: z.string(),             // "Fashion brand (LATAM)" si está anonimizado
    role: z.string(),               // "AI workflow design lead"
    timeframe: z.string(),          // "2024–2025"
    tools: z.array(z.string()),
    metrics: z.array(z.string()).default([]),  // ["~60% lower cost per photo"]
    nda: z.boolean().default(false),
    order: z.number().default(99),  // control manual del orden en el índice
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});
```

---

## 4. Contenido página por página

### 4.1 Home (reescritura de `index.astro`)

- **Eyebrow:** `AI Experience Designer — E-commerce · Fashion & Beauty`
- **H1:** `Mariana Ordonez` (mantener)
- **Lede (borrador EN):** *"I design AI-powered content systems and shopping experiences for fashion and beauty e-commerce. Seven years producing product photos, copy, and PDPs; the last two rebuilding those workflows with generative AI — like a photo pipeline that cut cost per photo by ~60%."*
- **Línea de disponibilidad (clave para el objetivo):** *"Open to remote AI experience design roles — US & EU time zones."* Visible sin scroll.
- **CTAs:** `View work` (primario) · `About me` (secundario). Blog/Journal quedan en la nav.
- **Sección "Selected work":** 3 tarjetas (los 3 casos de estudio) con métrica o gancho en cada una. Reemplaza la sección actual "Structure" que describe el sitio en vez de venderte a ti.
- **Sección "Latest writing":** mantener la que existe (mezcla blog + journal, ya funciona).

### 4.2 About (`/about/`) — la página que cierra la venta

Orden del contenido:

1. **Foto + bio corta (EN, 120–150 palabras):** la historia-puente — de producir contenido e-commerce a diseñar los sistemas de IA que lo producen. Una línea sobre la práctica artística.
2. **"What I do"** — 3 bullets: *AI content pipelines* (imagen + copy a escala con control de marca) · *Conversational shopping experiences* (diseño de asistentes de compra) · *Generative art practice* (investigación visual que alimenta el trabajo de cliente).
3. **"How I work"** — métodos, no solo herramientas: workflow mapping, evaluación de herramientas con criterios de marca, diseño de prompts como sistema, QA y guardrails, medición de costo/resultado.
4. **Herramientas:** Midjourney, Flair.ai, Claude, ChatGPT + las de diseño que uses (Figma, suite Adobe…). En segundo plano, después de los métodos.
5. **"What I'm looking for"** — explícito: *"AI Experience Designer / AI Content Designer roles. Remote, US or EU time zones. Full-time or contract-to-hire."*
6. **Idiomas:** *Spanish (native), English (professional)* — para roles remotos es un dato de contratación, no decorativo.
7. **Contacto:** email profesional del dominio (p. ej. `hola@mordonez.dev`) + LinkedIn + **CV en PDF descargable** (una página, EN). Los recruiters siguen pidiendo PDF.

### 4.3 Work índice (`/work/`)

- Intro de 2 líneas (qué tipo de problemas resuelves) + tarjetas de casos ordenadas por `order`: 1) Pipeline de fotos, 2) Chatbot de belleza, 3) Estudio generativo.
- Cada tarjeta: título, cliente (anonimizado si aplica), 1 métrica o gancho, rol.

---

## 5. Los tres casos de estudio (las piezas más importantes del sitio)

**Plantilla común** (consistencia = se lee profesional): TL;DR con tarjetas de métricas → Contexto → Mi rol → Proceso (la sección más larga: decisiones y por qué) → Resultados → Limitaciones y ética → Aprendizajes. Cierre con CTA: *"Hiring for AI experience design? → about/contact."* Longitud objetivo: 900–1.400 palabras + 4–6 visuales cada uno.

**Regla de oro de métricas:** publicar solo números que puedas defender en una entrevista. "~60%" con tilde de aproximación es perfecto; inventar precisión ("61,4%") es un riesgo.

### 5.1 `/work/ai-product-photo-pipeline/` — ANCLA, se publica primero

- **Título (EN):** *"Cutting product photo costs ~60% with an AI-assisted photography pipeline"*
- **Cliente:** "Fashion brand" (anonimizar salvo que tengas permiso escrito para nombrarla — confirmar antes de publicar).
- **Historia que contar:** el costo real de una foto de producto tradicional (estudio, modelos, logística, reshoots) → evaluación de herramientas con criterios de fidelidad de prenda y consistencia de marca → diseño del pipeline **híbrido** (qué se queda en estudio porque la verdad de la tela importa, qué se genera: fondos, escenas, variantes) → guardrails de marca (plantillas de prompts, guía de estilo traducida a prompts, checklist de QA, flujo de aprobación) → rollout y entrenamiento del equipo.
- **Métricas:** ~60% menos costo por foto + cualquier otra que tengas (tiempo de entrega, variantes por SKU, volumen mensual).
- **Sección que te diferencia:** limitaciones honestas — dónde la foto generada NO es apropiada (riesgo de devoluciones por fidelidad de prenda, expectativas del cliente) y cómo lo manejaron. Esto demuestra criterio, que es lo que compra un hiring manager.
- **Visuales necesarios:** diagrama antes/después del workflow, desglose de costos (gráfico simple), ejemplos de imágenes (con permiso, o recreadas con producto genérico), foto del checklist de QA.

### 5.2 `/work/beauty-shopping-assistant/` — el caso NDA

- **Título (EN):** *"Designing a conversational shopping assistant for a beauty retailer"*
- **Manejo del NDA (esto suma, no resta):** banner al inicio — *"Client name and proprietary data withheld under NDA. Flows and dialogues below are recreated and sanitized."* Respetar un NDA visiblemente es una señal de profesionalismo que los empleadores valoran. Nada de pantallazos reales: recrear flujos y diálogos con una marca ficticia.
- **Historia que contar:** por qué un retailer de belleza necesita un asistente (shade matching, armar rutinas, regalos, preguntas de ingredientes) → discovery con preguntas reales de clientes (logs de servicio, búsquedas) → persona y tono del asistente alineados a la voz de marca → diseño de flujos de conversación (recomendación, rutina, ingredientes, handoff a humano) → diseño de prompts + grounding en datos de catálogo → **guardrails**: claims cosméticos regulados, alergias y piel sensible, temas fuera de alcance → prototipado y testing con diálogos de ejemplo.
- **Resultados:** si las métricas son NDA, usar resultados cualitativos verificables (se lanzó a piloto, lo adoptó el equipo X, decisiones que cambió). **No inventar números.**
- **Visuales:** diagrama de flujo anonimizado, 2–3 diálogos de ejemplo recreados, tarjeta de persona del asistente, mapa de guardrails.
- **Por qué importa:** este caso es el que más grita "AI **Experience** Designer" — diseño de conversación, confianza y seguridad, no solo producción de contenido.

### 5.3 `/work/generative-studio/` — la práctica de arte como laboratorio

- **Título (EN):** *"Generative studio: an art practice that doubles as R&D"*
- **Encuadre estratégico:** no es una galería; es la prueba de **gusto y oficio**. Posicionarlo como laboratorio personal: aquí es donde desarrollas intuición sobre el comportamiento de los modelos, sistemas visuales y prompt craft que luego aplicas en trabajo de cliente.
- **Contenido:** statement corto (por qué arte con herramientas generativas) → 2–3 series seleccionadas con nota de intención y proceso → **una pieza "abierta en canal"**: prompt → iteraciones → edición final, mostrando el criterio en cada paso → qué le ha aportado a tu trabajo comercial.
- **Visuales:** las obras (curar duro: 9–12 piezas máximo, solo lo mejor) + la cadena de proceso de una pieza.
- Este caso alimenta posts de journal de forma natural (ver §7).

---

## 6. Blog: pilares y banco de ideas

**Propósito:** demostrar pensamiento (no solo ejecución), generar SEO de descubrimiento y darte material para LinkedIn. **Cadencia realista: 1 post cada 2–3 semanas.** Mejor 2 posts excelentes al mes que 4 mediocres.

### Pilares

| Pilar | Tema | % aprox. | A quién le habla |
|---|---|---|---|
| P1 | **AI content ops para e-commerce** (workflows, costos, QA) | 35% | Hiring managers — tu mayor autoridad |
| P2 | **Diseño de experiencias con IA** (conversación, confianza, guardrails) | 30% | Hiring managers + comunidad UX |
| P3 | **Oficio y herramientas** (prompts, Midjourney/Flair/Claude en producción) | 25% | Comunidad + SEO de cola larga |
| P4 | **Carrera y práctica** (la transición a AI Experience Design) | 10% | Recruiters + comunidad hispana |

### Banco de 12 ideas (títulos de trabajo en EN)

1. **"What 7 years of e-commerce content taught me about AI image pipelines"** — P1, pieza cornerstone; enlaza al caso ancla. *(Post #1)*
2. **"The real cost of a product photo — and how AI changes the math"** — P1; desglose de costos que casi nadie publica; imán de enlaces.
3. **"A QA checklist for AI-generated product imagery"** — P1; recurso descargable/copiable, muy enlazable.
4. **"Brand consistency with Midjourney: turning a style guide into prompts"** — P3; SEO: *midjourney brand consistency*.
5. **"Flair.ai vs. a photo studio: what each is actually for"** — P3; comparación honesta, búsqueda con intención comercial.
6. **"My working prompts for product descriptions with Claude"** — P3; incluir plantillas reales. **Publicar también en ES** (*"Mis prompts de trabajo para fichas de producto con Claude"*).
7. **"Conversation design for shopping assistants: where chatbots lose customers"** — P2; conecta con el caso NDA.
8. **"Designing AI advice when claims are regulated: lessons from beauty"** — P2; nadie más en tu nicho escribe esto; expertise diferencial puro.
9. **"When customers should know it's AI — and when it's non-negotiable"** — P2; ética y disclosure en imágenes de producto y chat.
10. **"From e-commerce content producer to AI Experience Designer: mapping the skills"** — P4; tu narrativa de carrera. **Publicar también en ES** — viajará en la comunidad hispana de diseño y es tu mejor post para LinkedIn.
11. **"Six prompts I deleted: failures from a production AI workflow"** — P3; los posts de fracasos generan más confianza que los de éxitos.
12. **"My art practice is my R&D lab"** — P4; cruza con el caso 3.

**Formato estándar de post:** 800–1.500 palabras, un visual propio mínimo (diagrama, captura del proceso), `description` ≤160 caracteres pensada como meta description, cierre con enlace a un caso de estudio o al About.

---

## 7. Journal: el espacio en español

**Propósito:** ritmo y autenticidad sin la presión del blog. Notas de 100–400 palabras, 15–30 minutos de esfuerzo, **1 por semana**. Es además tu archivo público de aprendizaje de IA — exactamente lo que dijiste que querías escribir.

Formatos que se sostienen solos:

- **Bitácora de experimento:** "Probé X versión de Midjourney con telas satinadas; esto pasó" + imagen.
- **Prompt de la semana:** un prompt real, qué produjo, qué cambiarías.
- **Nota de lectura/lanzamiento:** qué significa tal feature nuevo para contenido e-commerce, en 3 párrafos.
- **WIP de arte:** una iteración del estudio generativo con 3 líneas de contexto.
- **Pregunta abierta:** algo que aún no sabes resolver (genera conversación).

Primeras 6 entradas sugeridas: (1) nota de relanzamiento del sitio — qué es este espacio y en qué idiomas escribes; (2) un experimento de fondos con Flair.ai; (3) el prompt de descripciones que más usas; (4) una iteración de arte con proceso; (5) reacción a un lanzamiento reciente de modelos de imagen; (6) "lo que un brand manager le diría a tu modelo generativo".

Reemplazar/eliminar el placeholder `field-note-001.md` con la entrada (1).

---

## 8. Taxonomía de tags (compartida entre colecciones)

Máximo 2–3 tags por pieza, en inglés, en minúsculas. Lista cerrada inicial — no inventar tags nuevos sin necesidad:

- **Dominio:** `ecommerce`, `fashion`, `beauty`
- **Disciplina:** `ai-workflows`, `conversational-design`, `image-pipeline`, `content-design`, `art`
- **Herramienta:** `midjourney`, `flair-ai`, `claude`, `chatgpt`
- **Meta:** `career`, `ethics`, `es` (marca contenido en español)

---

## 9. SEO y metadata

Lo técnico ya está bien encaminado (canonical, OG, sitemap, robots). Lo que falta es de contenido:

- **Queries objetivo por página:**
  - Home/About: *AI experience designer portfolio*, *AI content designer e-commerce*, *conversational designer fashion beauty*.
  - Caso 1: *AI product photography workflow*, *AI product photos fashion cost*.
  - Caso 2: *conversational commerce design case study*, *beauty chatbot UX*.
  - Posts P3: cola larga por herramienta (*midjourney brand consistency*, *flair.ai product photos*, *claude product descriptions*).
- **Patrones de título** (el layout ya los soporta vía props): páginas → `{Page} | Mariana Ordonez`; casos → título con métrica incluida (el CTR agradece los números).
- **Descriptions:** escribirlas como copy de venta de ≤160 caracteres, no como resumen burocrático.
- **OG images:** reemplazar `og-default.svg` por una imagen de marca con el statement; ideal una OG propia por caso de estudio (puede salir de tu propio pipeline generativo — meta y demostrativo).
- **Pendientes técnicos derivados del plan** (anotar como tareas de implementación, no de contenido): colección `work` + rutas, página About, nav actualizada, feed RSS con `@astrojs/rss` (la Home ya lo promete), JSON-LD `Person` en Home/About con `jobTitle: "AI Experience Designer"`, y eliminar los dos placeholders.

---

## 10. Calendario editorial — 12 semanas (arranque 15 jun 2026)

| Semana | Foco | Entregables |
|---|---|---|
| 1 (15 jun) | Fundación | Reescribir Home (hero + selected work + disponibilidad). Redactar About. Definir colección `work`. |
| 2 (22 jun) | Fundación | Publicar About + CV PDF. Eliminar placeholders. Journal #1 (nota de relanzamiento, ES). |
| 3 (29 jun) | Caso ancla | Redactar caso 1 (pipeline fotos) + diagrama de workflow + desglose de costos. Confirmar permisos con la marca. |
| 4 (6 jul) | Caso ancla | **Publicar caso 1.** Anunciar en LinkedIn (EN + ES). Journal #2. |
| 5 (13 jul) | Blog | **Publicar post #1** ("What 7 years…"). Journal #3. |
| 6 (20 jul) | Caso NDA | Redactar caso 2: recrear flujos y diálogos sanitizados. Journal #4. |
| 7 (27 jul) | Caso NDA | **Publicar caso 2** + post LinkedIn sobre diseñar bajo NDA. Journal #5. |
| 8 (3 ago) | Blog | **Publicar post #10** ("From content producer to…") en EN y ES. Es tu post de mayor alcance: distribuir fuerte. |
| 9 (10 ago) | Arte | Curar series del estudio generativo (9–12 piezas) + documentar una pieza con proceso completo. Journal #6. |
| 10 (17 ago) | Arte | **Publicar caso 3** (generative studio). Journal #7. |
| 11 (24 ago) | Blog | **Publicar post #2** ("The real cost of a product photo"). Journal #8. |
| 12 (31 ago) | Revisión | **Publicar post #7** (conversation design). Revisar analytics y respuestas; ajustar banco de ideas del trimestre siguiente. |

**Cadencia de crucero (desde sept):** 1–2 posts de blog/mes + 1 journal/semana + 1 actualización de caso de estudio por trimestre.

**Regla de desbloqueo:** si una semana no alcanza el tiempo, se sacrifica el blog, nunca el caso de estudio pendiente. Los casos son los que consiguen entrevistas.

---

## 11. Distribución (el sitio no se descubre solo)

El objetivo es un empleo: cada pieza necesita un plan de salida.

- **LinkedIn (canal #1 para tu objetivo):** cada caso/post → post nativo en EN con la métrica o el insight en la primera línea + enlace. Los posts P4 también en ES. Actualizar titular de perfil al statement de posicionamiento y enlazar `mordonez.dev` en el perfil.
- **CTA transversal:** todos los casos y el About cierran con *"Open to remote AI experience design roles (US/EU). → email / LinkedIn."*
- **Comunidades:** compartir piezas concretas (no autopromoción vacía) en comunidades de UX/IA (ADPList, Designer Hangout, Discords de diseño + IA) y en comunidades hispanas/latinas de tech para los posts en ES.
- **Aplicaciones:** en cada postulación, enlazar el caso de estudio relevante, no la home ("Aquí está cómo bajé 60% el costo por foto: …/work/ai-product-photo-pipeline/").
- **Versión mínima de newsletter:** no montar una todavía; el RSS + LinkedIn cubren el alcance hasta que haya tracción.

---

## 12. Voz, estilo y reglas éticas

- **Voz:** práctica, específica y honesta. Primera persona. Mostrar el trabajo: prompts reales, iteraciones, números, fracasos. Cero hype de IA ("revolucionario", "el futuro de…") — el público que te va a contratar está vacunado contra eso.
- **Credibilidad con números:** solo métricas defendibles en entrevista; usar "~" para aproximaciones; explicar el baseline cuando se cita una mejora.
- **NDA y permisos:** confirmar por escrito qué se puede mostrar del caso 1; el caso 2 siempre anonimizado y con banner de NDA; nunca pantallazos reales de material confidencial.
- **Disclosure de IA:** cuando una imagen del sitio sea generada, decirlo en el pie. En tu nicho, la transparencia ES el portafolio.
- **Inglés:** escribir directo en EN y pasar una revisión propia (o con Claude) de naturalidad; no traducir literalmente del español.

---

## 13. Métricas de éxito

| Horizonte | Señal |
|---|---|
| Semana 4 | Home + About + caso ancla publicados; el enlace ya se puede usar en aplicaciones. |
| Semana 8 | 2 casos + 2 posts; ≥2 conversaciones entrantes (recruiter o referido) atribuibles al sitio/LinkedIn. |
| Semana 12 | 3 casos + 5–6 posts + 8 journals; el sitio aparece para tu nombre + "AI experience designer"; pipeline de ≥3 procesos de entrevista activos. |
| Continuo | Cada entrevista en la que te digan "vi tu caso del pipeline de fotos" = el plan está funcionando. |

---

## Apéndice A — Inventario de tareas de contenido (orden de ejecución)

1. Reescribir hero y secciones de Home (EN) — borradores en §4.1.
2. Redactar y publicar About + CV PDF (EN) — estructura en §4.2.
3. Eliminar `first-post.md` y `field-note-001.md`; publicar Journal #1.
4. Crear colección y rutas `work` (tarea técnica) con el schema de §3.
5. Caso 1 — pipeline de fotos (§5.1). **Prioridad máxima.**
6. Posts #1 y #10 del banco (§6).
7. Caso 2 — chatbot belleza, anonimizado (§5.2).
8. Caso 3 — estudio generativo (§5.3).
9. Posts #2 y #7; journal semanal en paralelo.
10. OG images de marca + RSS + JSON-LD (tareas técnicas de soporte).

## Apéndice B — Checklist previa a publicar cualquier caso de estudio

- [ ] Métrica del TL;DR defendible en entrevista (con baseline claro).
- [ ] Permisos/anonimización confirmados; banner NDA si aplica.
- [ ] Diagrama de proceso propio (no stock).
- [ ] Sección de limitaciones/ética incluida.
- [ ] `description` ≤160 caracteres escrita como copy.
- [ ] CTA final hacia About/contacto.
- [ ] Revisión de naturalidad del inglés.
- [ ] Post de LinkedIn redactado antes de publicar (se publica el mismo día).
