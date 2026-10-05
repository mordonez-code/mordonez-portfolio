# Content plan — Mariana Ordoñez portfolio (mordonez.dev)

**Date:** 2026-06-09 · **Status:** draft — written for you to react to, nothing is locked in · **For:** Mariana Ordoñez

**How to read this plan.** You asked for a plan without an interview, so every call I couldn't confirm is marked `[ASSUMPTION]` inline and restated as a question in section 10 — answer those and the plan tightens itself. Before anything else, react to the three decisions that shape everything downstream:

1. **Lead with the intersection, not the destination.** The site positions you as "AI experience designer with years of real e-commerce content operations" — not as a generalist designer who recently added AI. Plenty of people claim AI skills; almost none pair them with shipped e-commerce content work at scale.
2. **English-first, aimed at remote roles.** `[ASSUMPTION]` The site is already built in English on mordonez.dev; I kept it that way, assuming you're targeting remote US/EU-salary roles. A Spanish track can come later.
3. **Launch small and apply.** Two strong case studies, a real About page, and three journal entries beat a complete archive that ships next quarter. The roadmap (section 9) is phased around that.

---

## 1. Goal & positioning

- **Goal:** Land a role designing AI-powered experiences (in-house or product team), with the site apply-ready in **~3 weeks** so applications can start while Phase 2 content is still being written. `[ASSUMPTION — "starting to job hunt" read as "applying within a month", not "exploring for six months"]`
- **Positioning statement:** *Mariana Ordoñez is an AI experience designer who spent years running e-commerce content at scale — she designs AI-powered content systems and experiences that actually ship.* `[ASSUMPTION — exact years and scale numbers to be filled in by you; see section 8]`
- **Elevator pitch (home page + About opening):**
  > I design AI-powered experiences with the judgment of someone who has run e-commerce content operations for real catalogs — thousands of products, hard deadlines, measurable outcomes. I know where AI genuinely speeds up content work, where it quietly degrades it, and how to design the workflows and interfaces that keep humans in control of quality. Lately that means [flagship project one-liner — fill in once case study 1 is chosen].
- **Target roles:** `[ASSUMPTION — based on your background; trim to the titles you actually see in postings]`
  - AI Experience Designer / AI Product Designer
  - Product Designer (AI features / AI-native products)
  - AI Content Designer / Content Designer, AI
  - Content Systems Designer / Content Strategist on AI teams (fallback titles that value the e-commerce depth)

The tone rule for every page: the site radiates craft and judgment, never "please hire me". Outcomes and process do the persuading; the word "passionate" is banned.

## 2. Audience

| Audience | What they need to see | Priority |
|---|---|---|
| Design hiring managers / design leads at AI-product companies | Process with AI: prompts, iterations, what you rejected and why; judgment, not tool lists | **Primary** |
| Recruiters & talent partners (30-second skim) | Instant positioning on the home page, role keywords, one impressive proof, easy contact + resume link | **Primary** |
| Founders / e-commerce teams needing AI content help (possible freelance income during the hunt) | Outcomes and reliability: numbers, before/afters, "she's done this at scale" | Secondary `[ASSUMPTION — freelance is worth keeping open, but the site optimizes for employment first]` |
| Design & art community peers | Journal voice, art practice, taste | Tertiary |

## 3. Site map

Statuses come from auditing the repo as it exists today (Astro site with `blog` and `journal` collections only).

| Section | Purpose | Status |
|---|---|---|
| Home | 30-second pitch: who you are, what you design, one impressive proof — without scrolling | **Exists, but placeholder copy** — current hero says "a search-friendly home for selected work", which sells the website, not you. Needs rewrite (content task) |
| Work / case studies | The heart of the portfolio: 2–4 case studies proving AI + e-commerce judgment | **Needs build (ask Claude Code):** no `work` collection or pages exist yet |
| About | Make the career change feel inevitable, not desperate; photo + story + contact | **Needs build (ask Claude Code):** no about page exists |
| Journal | Short field notes on working with AI — proof of an active mind between jobs | **Exists** — 1 generic placeholder entry to replace |
| Blog | Longer essays and case-study write-ups | **Exists** — 1 generic placeholder post to replace |
| Contact | One obvious way to reach you from every page | **Needs build (ask Claude Code):** suggest a contact block on Home + About and a site footer, not a separate page `[ASSUMPTION]` |

Navigation note: the header currently links only to Blog and Journal. Once Work and About exist, the nav order should be **Work · About · Journal · Blog** — Work first, because that's what hiring managers come for (build task).

## 4. Page-by-page outline

### Home
- **Job of this page:** pass the 30-second recruiter test — who, what, one proof, where to click next.
- **Content blocks, in order:**
  1. Hero: name + title ("AI Experience Designer") + one-line intersection pitch + one proof point with a number `[ASSUMPTION — strongest number likely comes from the e-commerce content operation; see section 8]`
  2. Selected work: 2–3 case study cards (image, outcome-first title, one-line result)
  3. Short "how I work with AI" strip: 3 bullets on judgment/process (not a tool logo wall)
  4. Latest writing: keep the existing journal/blog feed, but below the work
  5. Contact block: email + LinkedIn + resume link
- **Assets needed:** 1 cover image per featured case study; resume PDF; final headline number.
- **SEO:** title: "Mariana Ordoñez — AI Experience Designer" · description: "AI experience designer with deep e-commerce content roots. I design AI-powered content systems and experiences that ship. See selected work and field notes."

### Work (index)
- **Job of this page:** let a hiring manager pick a case study in under 10 seconds.
- **Content blocks, in order:** intro line (one sentence, no fluff) → case study cards ordered by relevance to AI roles (not chronology) → contact block.
- **Assets needed:** cover image + outcome line per case study.
- **SEO:** title: "Work — Mariana Ordoñez" · description: "Case studies in AI-powered e-commerce content and experience design: pipelines, systems, and the judgment behind them."

### Case study pages (template for each)
- **Job of this page:** prove judgment with AI, not tool usage.
- **Content blocks, in order:**
  1. Outcome-first title + 3-fact summary bar (role · timeframe · result)
  2. Context: client (or anonymized) + the problem in business terms
  3. Her role: what *you* decided, made, led — first person, specific
  4. Where AI entered: tools, prompts, iterations, and crucially **what you rejected and why**
  5. Outcome: numbers, before/afters
  6. "What I'd do differently" (one honest paragraph — reads as seniority)
  7. Next/previous case study + contact block
- **Assets needed:** see section 5 per study.
- **SEO:** title pattern: "[Outcome-first case study title] — Mariana Ordoñez" · description: one-sentence result with the number in it.

### About
- **Job of this page:** make design → art → e-commerce content → AI feel like one inevitable thread, and give a human reason to say yes.
- **Content blocks, in order:**
  1. Portrait photo + 2–3 paragraph story told as a through-line: trained as a designer; art practice sharpened taste; e-commerce content taught scale, deadlines and quality systems; AI is where all three converge `[ASSUMPTION — the real connecting thread is yours to confirm; this is the frame I'd pitch]`
  2. "What I bring" — 3–4 evidence-backed capabilities (content ops at scale, AI workflow design, visual judgment, systems thinking)
  3. Tools & methods strip (kept short; judgment over logos)
  4. Art practice teaser: 1–2 images linking to journal entries tagged `art` `[ASSUMPTION — art stays light-touch at launch; see section 10]`
  5. Contact block + resume link
- **Assets needed:** portrait photo; resume PDF; 1–2 art images.
- **SEO:** title: "About — Mariana Ordoñez" · description: "Designer and artist who ran e-commerce content at scale, now designing AI-powered experiences. The path from catalogs to AI, and what carries over."

### Journal (index + entries)
- **Job of this page:** show an active, honest mind working with AI — frequency over polish.
- **Content blocks, in order:** one-line purpose statement ("Field notes from designing with AI — experiments, prompts, dead ends") → entry list (exists). Replace the placeholder "Field Note 001" with real entries from section 6.
- **Assets needed:** screenshots per entry where relevant (sanitized prompts, before/afters).
- **SEO:** title: "Journal — Mariana Ordoñez" · description: "Short field notes on designing with AI: experiments, prompt libraries, quality checks, and honest dead ends from real content work."

### Blog (index + posts)
- **Job of this page:** depth and authority — pieces a hiring manager might share internally.
- **Content blocks, in order:** one-line purpose statement → post list (exists). Replace the placeholder post ("Starting With a Durable Web Home") or rewrite it as the "built this site with AI" post (section 6).
- **Assets needed:** 1 illustrative image per post (can be own work).
- **SEO:** title: "Blog — Mariana Ordoñez" · description: "Essays on AI experience design and e-commerce content: frameworks, case-study write-ups, and what actually transfers between the two."

### Contact (block, not page)
- **Job:** zero-friction next step on every page.
- **Content:** one line ("Hiring for an AI experience team, or need e-commerce content help? →") + email + LinkedIn + resume PDF. `[ASSUMPTION — email address and LinkedIn URL unknown; see section 8]`

## 5. Case studies

You said you have a few projects but haven't decided which ones. Since I don't know the actual projects, this section gives you **(a) a selection scorecard** and **(b) four proposed slots** based on your profile — map your real projects onto the slots, or veto the slots that don't fit. Every slot description is an `[ASSUMPTION]` about the kind of work you have.

**Selection scorecard — pick the 2–4 projects that score highest:**

| Criterion | Question | Weight |
|---|---|---|
| Role-match | Does it look like the job you want next (AI in the workflow or the product)? | ×3 |
| Outcome | Is there a number, or a metric you could realistically dig up? | ×2 |
| Your fingerprints | Can you show decisions *you* made, not just deliverables you touched? | ×2 |
| Assets | Do images, before/afters, prototypes, or live links exist? | ×1 |
| NDA risk | Can it be named — or anonymized without losing the substance? (Never drop a story over a name: "a beauty retailer" works fine.) | ×1 |

Note: the project you're proudest of and the project that best matches the target jobs may be different projects. If so, the role-match one leads the Work page; the proud one still gets a slot.

### Slot 1 — "How I put AI inside a real e-commerce content operation" (flagship)
- **Client/context:** `[ASSUMPTION]` your main e-commerce employer/client — anonymize if needed ("a [category] retailer with an N-thousand-product catalog").
- **Her role:** designing/running the content workflow and deciding where AI belonged in it.
- **Story arc:** the cost/volume/consistency problem → the workflow you designed → where AI entered (tools, prompts, iterations) and the quality bar you enforced → what you rejected and why → outcome.
- **Metrics:** to dig up — products or assets per month, production time per asset before/after, cost per asset, rework rate, time-to-publish, any conversion effect (see section 8).
- **Assets:** before/after product content, workflow diagram (can be redrawn), sanitized prompt examples.
- **Priority:** **1 — write first.** This is the intersection no one else can claim.

### Slot 2 — "E-commerce content at scale, pre-AI" (credibility anchor)
- **Client/context:** `[ASSUMPTION]` the same or another e-commerce operation, before/without AI.
- **Her role:** content systems — templates, guidelines, photography direction, catalog structure.
- **Story arc:** scale problem → the system you designed → how it held up → outcome. Positioned as "I understood content operations deeply enough to know where AI would actually help" — it's the setup for Slot 1.
- **Metrics:** catalog size, team size, throughput, error reduction.
- **Assets:** screenshots of live PDPs/listings, guideline excerpts.
- **Priority:** 2.

### Slot 3 — "Designing an AI experience end-to-end" (aspiration proof)
- **Client/context:** `[ASSUMPTION — this is the slot I'm least sure exists]` a project where AI is in the *product*, not just the workflow — an AI-assisted shopping/content feature, a conversational flow, a tool concept. **If no client project fits, fill it with a self-initiated concept project** — for AI-experience roles, a rigorous self-initiated piece beats nothing, and the plan flags it honestly as a concept.
- **Story arc:** user problem → interaction/UX decisions specific to AI (uncertainty, trust, feedback loops, failure states) → prototype → what you learned.
- **Metrics:** prototype-test findings if any; otherwise framed as design rationale.
- **Assets:** prototype link or video, screens.
- **Priority:** 3 — Phase 2, unless a real project fits, in which case it may jump to priority 1–2.

### Slot 4 — "This site, built with an AI coding agent" (meta, small)
- **Client/context:** this repo — you direct Claude Code; the site itself is exhibit A of designing *with* AI.
- **Story arc:** what you specified vs. what you delegated → how you reviewed and corrected the AI → taste decisions a non-designer wouldn't have made.
- **Metrics:** time from zero to live site.
- **Assets:** already exist (the site, this plan, prompts).
- **Priority:** 4 — ship as a journal series or one blog post rather than a full case study, so it doesn't compete with client work. `[ASSUMPTION]`

## 6. Editorial plan — journal & blog

- **Journal (short field notes):** purpose: visible proof of hands-on AI thinking between jobs; 5–15 minutes to write, screenshots welcome, dead ends encouraged · cadence: **1 per week while job hunting** `[ASSUMPTION — honest-cadence check needed; better 1/week sustained than 3/week for two weeks]`
  - First entries (pick the 6 that feel effortless):
    1. "Five prompt iterations to one usable product image" (with the four rejects)
    2. "What's in my prompt library, and how it's organized"
    3. "A checklist I run before any AI-generated content ships"
    4. "Rewriting one product description: me vs. AI vs. me+AI"
    5. "Three AI tools I dropped this month, and why"
    6. "Directing an AI coding agent to build this site — week one notes"
    7. "Taste is the bottleneck: notes from last night's image session" (art × AI crossover)
    8. "What a 10,000-SKU catalog taught me about reviewing AI output at scale" `[ASSUMPTION — adjust the number to your real catalog]`
- **Blog (long form):** purpose: authority pieces a design lead might share; each doubles as application material · cadence: **1 per month** `[ASSUMPTION]`
  - First posts:
    1. "From e-commerce content to AI experience design: what actually transfers" (your repositioning argument, in public)
    2. The flagship case study (Slot 1) adapted as a narrative post
    3. "A quality framework for AI-generated content at e-commerce scale"
    4. Rework or replace the existing placeholder post into "Building a portfolio with an AI coding agent: a designer's field report"
- **Tags to use consistently (across both collections):** `ai-workflow` · `e-commerce` · `case-study` · `process` · `prompts` · `art` · `site` — current placeholder tags (`seo`, `journal`) fold into these.

## 7. SEO & metadata conventions

- **Keywords to own:** "AI experience designer", "AI e-commerce content", "AI content design", "e-commerce content operations", "designing with AI" — used naturally in titles/descriptions, never stuffed.
- **Title pattern:** "[Page or post topic] — Mariana Ordoñez". (Templates currently use "|" on some pages; standardize on the em-dash — small build task.)
- **Name spelling:** the site currently renders "Mariana Ordonez" (no ñ). Pick one display spelling and use it everywhere; suggestion: "Mariana Ordoñez" on pages, ASCII "mordonez" in the domain/URLs only. `[ASSUMPTION — your call]`
- **Notes:** descriptions ≤ 155 characters, written in first person, each containing one concrete proof ("ran content for N products") rather than adjectives; `title` and `description` map directly to the frontmatter fields every entry already requires. Replace `og-default.svg` with a real 1200×630 OG image (name + title + one proof line) — build/asset task. Confirm **mordonez.dev** is the final domain; it's currently set in the config and robots.txt but reads like a scaffold default `[ASSUMPTION — unconfirmed]`.

## 8. Asset checklist

Everything only you can gather — the usual launch blockers:

- [ ] Portrait photo for About (and a square crop for OG/social)
- [ ] Resume PDF aligned with the "AI Experience Designer" positioning (if your current CV still says e-commerce content specialist, that's a follow-up task — recruiters cross-check)
- [ ] **Metrics for Slot 1/2** — ask former employer/client or reconstruct from memory: catalog size, assets produced per month, production time per asset before vs. after AI, cost per asset, rework rate, any conversion/revenue effect
- [ ] Before/after examples of product content (images + copy) — sanitized for NDA
- [ ] Permission check per project: can the client be named? If not, agree the anonymized label ("a [category] retailer")
- [ ] Sanitized prompt examples / prompt-library screenshots
- [ ] Prototype links or screen recordings for Slot 3 (if it exists)
- [ ] 1–2 art images you're willing to show on About / in the journal
- [ ] Final contact email + LinkedIn URL (+ Instagram/Behance if you want them linked)
- [ ] Domain confirmation: keep mordonez.dev or use another? (config + robots.txt need the final answer)
- [ ] Any testimonials or quotable feedback from past managers/clients

## 9. Roadmap

- **Phase 1 — apply-ready (target: ~3 weeks, by end of June 2026 `[ASSUMPTION]`):**
  1. Decide on the 3 headline calls (top of this plan) and answer section 10
  2. Build tasks batch 1 (below): Work section, About page, contact block, nav
  3. Write Slot 1 case study + one more (Slot 2, or Slot 3 if a real project fits)
  4. Rewrite Home copy around the positioning statement
  5. Write About
  6. Publish 3 journal entries; retire or rewrite the two placeholder entries
  7. Resume PDF linked; metadata + OG image done
  8. **Start applying — don't wait for Phase 2**
- **Phase 2 — depth (weeks 4–8):** third/fourth case study · blog post #1 ("what actually transfers") · art presence on About/journal · testimonials added to case studies · case-study #1 adapted into a blog post
- **Phase 3 — ongoing:** journal weekly · blog monthly · new work added as it ships · revisit positioning after the first ~10 applications (which case study gets mentioned in interviews? lead with it) · optional Spanish versions if targeting bilingual markets `[ASSUMPTION — deferred]`
- **Build tasks (for Claude Code / a developer — none of this is content):**
  1. Create a `work` content collection (suggested frontmatter: title, description, pubDate, cover image, role, client/anonymized label, timeframe, tools, outcome summary, metrics, draft flag) + Work index and case-study pages
  2. Create the About page
  3. Add contact block component (Home, About, case-study footers) + site footer with social links
  4. Update header nav to Work · About · Journal · Blog
  5. Home page layout updates: featured-work cards above the writing feed
  6. Replace `og-default.svg` with the real OG image; standardize title pattern to "—"; unify name spelling site-wide
  7. Add an RSS feed (the blog copy already promises "RSS-ready"; no feed route exists yet)
  8. When the domain is confirmed: verify `site` in `astro.config.mjs` and the sitemap URL in `robots.txt`

## 10. Assumptions & open questions

Every `[ASSUMPTION]` above, restated as a question you can answer in one line — reply to any of these and the plan gets updated:

- [ ] **Timeline:** are you applying within ~a month (plan assumes yes), or is the runway longer?
- [ ] **Market & language:** remote US/EU roles, English-first site — correct? Any need for Spanish at launch?
- [ ] **Target titles:** which of the four role titles in section 1 match the postings you're actually seeing? Any dream companies?
- [ ] **Positioning years/scale:** how many years of e-commerce content work, and how big was the catalog/operation? (These two numbers power the hero line.)
- [ ] **Projects:** which real projects map onto Slots 1–3? Which are you proudest of, and which best matches the jobs — same project or different?
- [ ] **Slot 3:** does a real "AI in the product" project exist, or should we plan a self-initiated concept piece?
- [ ] **NDA:** which clients can be named, which need anonymizing?
- [ ] **Metrics:** can you get the Slot 1 numbers (volume, time, cost), and from whom?
- [ ] **Art:** light-touch (About teaser + journal tag, as assumed), a dedicated gallery, or off the site entirely? Is any of your art AI-assisted? (That intersection is directly relevant — say so if yes.)
- [ ] **Cadence:** is 1 journal entry/week + 1 blog post/month honest for you while job hunting?
- [ ] **Freelance:** keep the door visibly open on the site (assumed yes, quietly), or employment-only?
- [ ] **Domain & contact:** is mordonez.dev final, and what email/LinkedIn should the site use?
- [ ] **Name spelling:** "Ordoñez" or "Ordonez" on the site?
- [ ] **Resume:** does your current CV match this positioning, or does it need a rewrite alongside Phase 1?
- [ ] **Deadlines:** any fixed dates (visa, specific openings, events) the roadmap must respect?

## Changelog

- 2026-06-09 — Created (first version). Written non-interactively at Mariana's request ("don't ask me questions"); repo audited (blog + journal collections exist; Work/About/contact do not); all guesses marked `[ASSUMPTION]` and collected in section 10 for her reaction.
