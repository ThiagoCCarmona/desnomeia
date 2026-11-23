# Desnomeia Ltda — Design System & Visual Architecture

Synthesized from `ui-ux-pro-max` (Luxury Minimalist & Swiss Style), `logo-design-skill` (Sovereign Hex-D), and `impeccable` (Persuade-mode editorial craft floor).

## 1. Visual World & Direction
- **Mode:** Persuade (High-luxury private advisory editorial landing page).
- **Material World:** Deep Obsidian Lacquer (`#080808`) paired with full-bleed Sovereign Yellow (`#F5C400`) editorial plates and razor-thin warm brass hairlines (`#2A261C`).
- **Structural Commitment:** Refuses generic SaaS boxed heroes and identical three-card grids. Leads immediately in the first viewport with the thesis statement and a working interactive Onomastic Intake Desk, followed by a full-bleed Sovereign Yellow manifesto band, a Swiss-ruled Precedents Ledger, a 4-stage sequential Protocol spine, and a bespoke Private Consultation Studio connected directly to WhatsApp.

## 2. Color Tokens (WCAG AA / AAA Verified)
| Role | Token | Hex | Contrast Pairing |
|---|---|---|---|
| Obsidian Ground | `--color-bg` | `#080808` | Base canvas |
| Elevated Onyx | `--color-surface` | `#11110F` | Subtle surface separation |
| Smoked Charcoal | `--color-surface-elevated` | `#181713` | Interactive containers |
| Sovereign Yellow | `--color-sovereign` | `#F5C400` | **12.5:1** against `#080808` (AAA) |
| Sovereign Hover | `--color-sovereign-hover` | `#FFD426` | Interactive state |
| Warm Alabaster Ink | `--color-ink` | `#F6F4EE` | **18.4:1** on `#080808` (AAA) |
| Champagne Stone | `--color-ink-muted` | `#B9B2A1` | **9.1:1** on `#080808` (AAA) |
| Subtle Brass Hairline | `--color-rule` | `#2A261C` | Structural dividers |
| Obsidian Ink on Yellow | `--color-on-sovereign` | `#080808` | **12.5:1** on `#F5C400` (AAA) |
| Editorial Vermilion | `--color-alert` | `#FF5A36` | High-risk verdict indicator (`#FF5A36` on `#080808` = 6.2:1) |

## 3. Typography (Self-Hosted via `@fontsource`)
- **Display Serif:** `Bodoni Moda Variable` — optical high-contrast Didone serif for monumental headlines, editorial quotes, and redacted name specimens. Tracking floor `-0.025em`, `text-wrap: balance`.
- **Body & UI Sans:** `Jost Variable` — geometric precision sans, `16px` base floor (`1rem`), `1.6` line height, `65ch` max measure.
- **Registry Monospace:** `Fragment Mono` — strictly reserved for dossier IDs, tabular risk indices (`font-variant-numeric: tabular-nums`), and countdown telemetry.

## 4. Brand Mark (`logo-design-skill`)
- **Mark:** *Sovereign Hex-D* (`docs/brand/desnomeia-symbol-on-dark.svg`, 100/100 `svg_audit.py` score).
- **Construction:** Exact 30°/60° regular hexagon facets forming an architectural `D` with an 18-unit spine channel and a parallel 30° redaction slash across the left pillar — simultaneously encoding the initial **D**, the act of un-naming, and the JUSC honeycomb heritage.
- **Minimum Size:** Proven legible down to 16×16px favicon.

## 5. Craft Floor & Hardening
- Zero eyebrow/kicker labels above headings.
- Zero gradient text, neon glows, glassmorphism chrome, or emoji icons.
- Themed browser surfaces: `::selection`, `caret-color`, thin obsidian/brass scrollbar, `2px` Sovereign Yellow `:focus-visible` ring, `scroll-padding-top`.
- Full `prefers-reduced-motion` support and hardened PT / EN / ES text expansion budgets.
- Hidden geometric hive/bee easter egg triggers a non-blocking **5-second** cameo of the official **JUSC** emblem and **Abelhhudo** mascot.
