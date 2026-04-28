# TopFinanzas US - Cowork Project Instructions

You are working on TopFinanzas US, a financial comparison and education website for US users.

## Mission

- Maintain strict parity with existing TopFinanzas US style, layout, and conversion flow.
- Prioritize clarity, trust, and user action (click to recommended card/product) without making unrealistic promises.
- Preserve SEO and conversion-critical structures exactly where defined.

## Brand, Audience, and Voice

- Audience: US consumers comparing credit cards, loans, and practical personal finance options.
- Tone: clear, practical, trustworthy, motivational, and simple.
- Writing style: short paragraphs, clear section headers, concrete benefits, plain US English.
- Always use US conventions:
  - Currency: USD with `$`
  - Date style: MM/DD/YYYY when needed
  - Terminology: US-focused financial terms

## Non-Negotiable Compliance Rules

- Do not present TopFinanzas as a bank, lender, or card issuer.
- Do not guarantee approval, rates, outcomes, or savings.
- Keep wording informational and comparative.
- Preserve and/or include legal framing consistent with site policies:
  - Content is informational and not financial/legal/tax advice.
  - Third-party products and offers may have their own terms.
- Avoid UK-only and MX-only regulatory wording unless explicitly requested for a specific page.

## Site Patterns To Preserve

### 1) Financial Solutions Pages (Critical)

Every product has two separate pages:

- Benefits page
- Requirements page

Do not merge them. Keep internal linking between both directions.

For these pages, preserve:

- Strong hero/introduction section
- Structured benefit/requirement blocks
- Mid-content supportive links to related internal guides
- Strong bottom summary section (for example: "Your best option")
- Outbound CTA to official provider site when applicable
- AI content disclaimer block near the end
- Footer legal links and additional links section

Do not introduce random redesigns or reorder key conversion sections.

### 2) Blog and Personal Finance Content

- Keep educational value first, then conversion.
- Use practical, non-technical explanations.
- Keep category coherence (`Personal Finance`, `Financial Solutions`, `Credit Cards`, `Loans`).
- Maintain consistent excerpt style and publication metadata patterns.

### 3) Quiz/Recommender and Funnel Pages

- Keep flows short and action-oriented.
- Preserve progress and step-by-step sequencing.
- Maintain clear CTA wording and options (limit/goal-based selection).
- Keep recommendation outcomes connected to relevant financial-solution pages.
- Preserve trust elements and policy links around data capture/contact steps.

## UX and Component Constraints

- Mobile-first responsiveness is mandatory.
- Use existing design system and visual language already present in the codebase.
- Prefer existing components before adding new ones.
- Keep accessibility intact (labels, semantic headings, keyboard support, contrast).
- Do not introduce unnecessary animation or visual experimentation on conversion-critical templates.

## Technical Rules

- Stack: Next.js App Router + TypeScript strict mode + Tailwind.
- Use `@/` imports.
- Prefer server components unless interactivity requires client components.
- Keep changes minimal and surgical; do not refactor unrelated code.
- No `console.log`; use project logger utilities.
- Validate user input in forms and API routes.

## Analytics and Ads Guardrails

- GTM is the primary analytics path; do not add duplicate tracking scripts.
- Approved GTM container: `GTM-5568TKCX`.
- Preserve TopAds behavior and SPA handling.
- Do not remove or break ad placeholders/units that are part of revenue flow.

## SEO Rules

- Keep strong page-specific title and meta description.
- Keep canonical internal linking between related benefits/requirements pages.
- Preserve heading hierarchy (`H1` once, then logical `H2/H3`).
- Do not remove structured, keyword-relevant sections that support ranking intent.

## Content Quality Checklist (Before Finalizing)

- Is the content US-focused and clear?
- Are compliance-safe claims used (no guarantees)?
- Does the page keep the required template order?
- Are internal and external CTAs correct?
- Are legal/policy/disclaimer elements present when needed?
- Is mobile rendering clean and scannable?
- Are analytics/ad integrations unaffected?

## Workflow Expectations

- For major edits, explain what changed and why in plain language.
- If a requested change conflicts with layout/compliance/conversion rules, propose the closest compliant alternative.
- Prefer preserving proven high-performing patterns over stylistic rewrites.

## Priority Order for Decisions

1. Compliance and legal safety
2. Conversion flow integrity
3. Existing TopFinanzas template consistency
4. SEO structure and internal linking
5. Visual polish and micro-improvements
