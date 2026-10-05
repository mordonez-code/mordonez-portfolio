# Content Plan — mordonez.dev

A job-hunt-ready content plan for the portfolio site of a designer moving from e-commerce content work into AI experience design.

**How to read this:** Everything grounded in the repo or your brief is stated plainly. Anything I had to invent or assume is marked **[GUESS]**. React by striking what's wrong and confirming what's right — the whole plan is built to be corrected, not obeyed.

---

## 0. What I'm working from

**Facts (from the repo):**
- The site is an Astro static site for **Mariana Ordonez**, domain configured as `mordonez.dev`, with strong SEO plumbing already in place (canonical URLs, Open Graph, sitemap, robots.txt).
- Two content collections exist: `blog` and `journal` (shared frontmatter: title, description, pubDate, updatedDate, draft, tags). Each has one placeholder entry.
- The homepage promises a **Portfolio** section, but no work/case-study collection, no About page, and no Contact exist yet. The nav only links Blog and Journal.
- The default social-share image (`og-default.svg`) is a generic placeholder.

**Brief (from you):** designer, e-commerce content work → AI experience design, starting to job hunt, a few candidate projects, undecided which to show.

**Key assumptions I had to make** (all expanded inline below):
1. **[GUESS]** Target roles: AI product/experience designer or content designer for AI products at product companies — not freelance clients, not agencies.
2. **[GUESS]** Seniority: mid-to-senior (you have a body of e-commerce work worth showing, so 4+ years).
3. **[GUESS]** Your candidate projects are e-commerce-era work (PDP/checkout content systems, personalization, experimentation, content ops) plus at most one early AI-adjacent piece. I invented plausible archetypes in §4 — swap in your real projects.
4. **[GUESS]** Timeline: you want to be sending applications within ~3–4 weeks, so the plan is phased around a minimum credible launch, not a perfect site.
5. **[GUESS]** Some past work is under NDA or hard to screenshot, so the case-study template includes a workaround.

---

## 1. Positioning — the one sentence the whole site serves

A career-changer portfolio has one job: make the transition look like a **trajectory, not a pivot**. E-commerce content work is genuinely strong raw material for AI experience design — both are about shaping language systems at scale, designing for variable/generated content, and measuring whether words actually move behavior. The site should say that out loud instead of hoping a hiring manager connects the dots.

**Recommended positioning line (hero, react to these):**

- Option A — *"I design how products talk. Ten years of making e-commerce content convert, now applied to making AI experiences make sense."* **[GUESS — "ten years" is invented; replace with your real number]**
- Option B — *"Experience designer working on AI products. I came up through e-commerce content design, where every word had a conversion rate — I bring that same accountability to conversational and generative interfaces."*
- Option C (plainest) — *"AI experience designer. Formerly content design for e-commerce at scale."*

**Target reader [GUESS]:** a design manager or recruiter at an AI-product company who spends 60–90 seconds on the site before deciding whether to open a case study. Every page should survive that skim.

**Anti-goal:** do not position as "aspiring AI designer" or lead with the learning journey. Lead with competence; let the blog/journal show the learning.

---

## 2. Site architecture — what to add and what to keep

Current: Home, Blog, Journal. Recommended end state:

| Section | Status | Priority | Notes |
|---|---|---|---|
| **Work** (`/work/` + case-study pages) | **Missing — build it** | P0 | New `work` content collection, mirroring how `blog`/`journal` are set up. This is the site's reason to exist during a job hunt. |
| **About** (`/about/`) | Missing — build it | P0 | The transition narrative lives here, not in the hero. |
| **Home** | Exists, generic copy | P0 | Rewrite around positioning; feature 2–3 case studies above the writing feed. |
| **Contact** | Missing | P0 | Doesn't need a page — email + LinkedIn in the footer and at the end of every case study. |
| **Blog** | Exists, 1 placeholder | P1 | Your credibility engine as a career changer — see §5. Delete or rewrite the placeholder post before launch. |
| **Journal** | Exists, 1 placeholder | P2 | Keep, but it's optional for launch. Repurpose as an "AI design field notes" stream — see §6. |
| **Resume** | Missing | P1 | A `/resume.pdf` link in nav or footer. Recruiters will look for it. |

**Nav order:** Work · About · Blog · Journal. (Work first — it's currently absent from the nav entirely.)

**Suggested `work` frontmatter** (consistent with the existing typed schema): title, description, pubDate, tags, plus `role`, `timeframe`, `outcome` (one-line metric), and `featured` (boolean for homepage). Keep `draft: true` available so you can stage case studies without publishing.

---

## 3. Page-by-page plan

### 3.1 Homepage (rewrite)

Current copy is about the site's architecture ("a search-friendly home for selected work…") — it sells Astro, not you. Replace with:

1. **Hero:** name, positioning line (§1), one CTA → "See selected work."
2. **Featured work:** 2–3 case-study cards with outcome-first blurbs ("Cut content production time 40%" beats "A content system project"). Replaces the current Portfolio/Blog/Journal feature grid, which describes sections instead of showing work.
3. **Short transition paragraph:** 2–3 sentences of the §1 story, linking to About.
4. **Recent writing:** keep the existing latest-posts feed — it's already built and it signals an active mind.
5. **Footer:** email, LinkedIn, resume. **[GUESS]** I don't know your preferred contact email or LinkedIn URL — the git history shows `marianaordonez04@gmail.com`; confirm what you actually want public.

### 3.2 Work index (`/work/`)

A simple list of 3 case studies (see §4 for which three). One line of framing at the top: what kinds of problems you take on. Resist adding more than 4 projects — a job-hunt portfolio is an argument, not an archive.

### 3.3 Case-study template (use for all of them)

Target 800–1,200 words, 10-minute read max, skimmable from headers alone:

1. **Header block:** title, one-line outcome, role, team size, timeframe.
2. **Context:** the business problem in 3 sentences. No company history.
3. **Constraints:** what made it hard (this is where senior judgment shows).
4. **Process:** 2–3 key decisions with the *reasoning*, not a deliverables tour. For the AI-relevant angle, explicitly name the transferable mechanic (e.g., "designing templates for content we couldn't fully control" → exactly the generative-UI problem).
5. **Artifacts:** 3–6 images max. **NDA workaround [GUESS that you need it]:** recreate sanitized mockups, abstract the data, and say plainly "details anonymized" — hiring managers respect this and it reads better than nothing.
6. **Outcome:** numbers if you have them; honest qualitative results if you don't ("adopted by 3 teams" counts).
7. **What I'd do differently:** 2–3 sentences. Disarms interviewers and signals reflection.
8. **CTA:** "Currently looking for AI experience design roles — email me."

### 3.4 About (`/about/`)

- The transition story as a through-line, ~300–400 words: what e-commerce content taught you (systems for language at scale, measurement, designing for content you don't control) → why AI experience design is the same problem with higher stakes → what you've done about it (courses, side projects, experiments — **[GUESS]** that you have some of these; list whatever is real).
- A "how I work" list of 4–5 principles.
- Photo optional; tools list optional and only if it includes AI tooling (Figma + prompt work + whatever model/agent tools you actually use).
- End with what you're looking for: **[GUESS]** "product teams building AI features, where content, behavior, and interface get designed together."

---

## 4. Which projects to show — selection rubric + recommended mix

You said you haven't decided. Here's a decision tool plus my recommended slate.

**Score each candidate project 1–5 on:**

| Criterion | Weight | Why |
|---|---|---|
| AI-relevance (real or reframable) | ×3 | The whole site argues you can do AI work |
| Outcome strength (metrics, adoption) | ×2 | Career-changers get extra scrutiny on impact |
| Story you're allowed to tell (NDA, assets) | ×2 | A great project you can't show loses to a good one you can |
| Recency | ×1 | Tiebreaker only |

Pick the top 3. Two from your e-commerce work, one AI-native.

**Recommended slate — these three slots, with [GUESS] archetypes as stand-ins:**

1. **The systems story [GUESS at archetype]:** an e-commerce content *system* — PDP template system, content design system, localization/scaling framework. Reframe: "designing rules for content that varies" = prompt/template design for generative output.
2. **The evidence story [GUESS at archetype]:** an experimentation/optimization project — copy testing, checkout flow, personalization. Reframe: "I treat language as a measurable interface" = exactly how good AI products are evaluated.
3. **The AI-native story — this slot is non-negotiable, even if the project is self-initiated.** **[GUESS]** that you don't yet have a shipped AI project. If so, build one in week 1–2 of this plan rather than skipping the slot. Strong one-week options:
   - Redesign a real AI flaw you've experienced (e.g., a shopping assistant's failure modes: hallucinated availability, dead-end clarifying questions) — document the redesign with the same rigor as client work, labeled "self-initiated."
   - A pattern study: "error and uncertainty states in 5 AI products" with your redesigns.
   - This slot doubles as the proof that the transition is already underway, not aspirational.

**Explicitly leave out:** anything purely visual/branding, anything pre-dating your strongest era, and any project whose story is "I executed someone else's decisions."

---

## 5. Blog — the career-changer's credibility engine (4 seed posts)

For someone whose shipped AI work is thin, *published thinking* is the strongest available signal. One good essay can do as much as a case study. Seed list (titles are drafts — react):

1. **"What e-commerce content design taught me about designing for AI"** — the bridge essay; the About page's argument at full length. Write this one first; it's also your LinkedIn artifact for the job hunt.
2. **"Designing for content you don't control: from CMS templates to model outputs"** — the systems argument, deepened.
3. **A teardown:** one AI product's experience choices, analyzed concretely (pick a product in or near commerce — assistant-driven shopping, AI search — so both halves of your story show up). **[GUESS]** at the product domain; pick whatever you genuinely use.
4. **"Conversion thinking for conversational interfaces"** — what funnels, friction, and trust signals look like when the interface is a dialogue.

Cadence after launch **[GUESS at your capacity]:** one post a month is plenty. Delete `first-post.md` (it's about the site's tech stack, wrong story for a design audience) or rewrite it as a short "why this site" note.

---

## 6. Journal — low-cost signal of momentum

Keep the existing journal as a **field-notes stream about AI experience patterns**: 100–200-word observations — a prompt experiment, an interaction pattern spotted, a paper or product note. 2–4 entries a month, zero polish. Its job is to make the site look alive between blog posts while you're interviewing. Replace the `field-note-001.md` placeholder with a real observation on day one. This section is **optional for launch** — don't let it delay the case studies.

---

## 7. Voice, SEO, and metadata (the plumbing is built — use it)

- **Voice:** first person, concrete, outcome-led. Confident about the e-commerce past, curious-but-rigorous about AI. Never apologetic about the transition.
- **Descriptions** (the schema requires them): write each as the search-result pitch — "How I rebuilt X's product content system and cut production time 40%," not "A case study about content."
- **Tags:** keep a small controlled set so archive pages stay coherent — e.g., `ai-ux`, `content-design`, `e-commerce`, `case-study`, `process`. **[GUESS]** at the taxonomy; prune to what you'll actually reuse.
- **OG images:** replace the placeholder `og-default.svg` with a simple branded card (name + positioning line); ideally give each case study its own share image, since these pages will be pasted into Slack by hiring teams.
- **Title pattern:** the layout already appends "| Mariana Ordonez" — keep titles under ~55 characters so they don't truncate.

---

## 8. Roadmap — phased for a job hunt

**Phase 1 — Minimum credible launch (weeks 1–2).** Don't apply anywhere until this exists:
- [ ] Decide the 3 projects using the §4 rubric (1 evening)
- [ ] Homepage rewrite + footer contact + resume PDF
- [ ] About page
- [ ] Case study #1 (your strongest e-commerce systems story) published; case study #3 scoped (the AI-native piece, started)
- [ ] Delete/replace both placeholder posts; replace the OG image

**Phase 2 — Full argument (weeks 3–4):**
- [ ] Case studies #2 and #3 published
- [ ] Bridge essay (blog post 1) published — share it on LinkedIn the same week you start applying
- [ ] 2–3 journal entries so the stream isn't empty

**Phase 3 — Ongoing while interviewing:**
- [ ] One blog post/month, journal as fuel
- [ ] Teardown post (#3 in §5) timed to companies you're targeting
- [ ] Add a 4th case study only if interviews reveal a gap (e.g., everyone asks about research and you have none shown)

---

## 9. Everything I guessed, in one list — react to these first

| # | Guess | If wrong, what changes |
|---|---|---|
| 1 | Target = in-house AI product/experience design roles | If freelance/consulting: add services framing and stronger CTA; positioning shifts from "hire me" to "engage me" |
| 2 | Mid-to-senior, ~4+ years | If earlier-career: 2 case studies suffice; lean harder on the AI-native project and blog |
| 3 | Your projects match the archetypes in §4 (content systems / experimentation / no shipped AI work yet) | Swap real projects into the slots; if you *do* have shipped AI work, it takes slot 1 and the self-initiated piece becomes optional |
| 4 | ~3–4 week runway before applying in earnest | If sooner: Phase 1 only, with one case study and a "more work coming" note |
| 5 | NDA constraints on some work | If everything is showable, ignore the sanitization guidance |
| 6 | Public contact = an email you'll confirm (git shows a Gmail) + LinkedIn | Footer/contact copy updates |
| 7 | "Ten years" in hero Option A, tag taxonomy, teardown product domain, posting cadence | Cosmetic — replace with real numbers/choices |
| 8 | English-only site | If you want Spanish too **[GUESS that you might, given the name]**, that's a structural decision to make before writing 3 case studies, not after |

---

*Plan grounded in the repo as of 2026-06-09: Astro 6, collections `blog` + `journal` only, no work/about/contact yet, SEO metadata and sitemap already wired, all current content placeholder.*
