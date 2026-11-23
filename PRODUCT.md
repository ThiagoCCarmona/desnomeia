# Desnomeia Ltda — Product Context

## Identity
- **Company:** Desnomeia Ltda
- **Domain:** `https://desnomeia.tccodes.com.br`
- **Offering:** Consultoria personalizada para registro de novos nomes (*Bespoke Name-Registration Advisory*).
- **Primary Slogans:**
  - *"Desnomeia antes que seja tarde."*
  - *"Não vendemos nomes, evitamos 18 anos de bullying."*
- **Primary Conversion Channel:** WhatsApp Concierge (`+55 45 99132-5244` / `https://wa.me/5545991325244`) with pre-filled formal consultation dossier in the visitor's active language.

## Audience & Tone
- **Audience:** Expectant parents, friends sharing a viral joke, and international visitors across Portuguese (PT), English (EN), and Spanish (ES).
- **Voice:** 100% deadpan Swiss-Milanese luxury private advisory. The wit emerges purely from executing an absurd premise with the restraint, elegance, and typographic dignity of a Geneva private bank or Savile Row atelier.
- **Honesty Constraint:** Precedent case studies and illustrative risk indices are transparently labeled as illustrative / synthetic examples; no fabricated client logos or false commercial guarantees.

## Brand Commitments
- **Palette:** Sovereign Yellow (`#F5C400`) and Obsidian Black (`#080808`), rooted in the heritage of **JUSC (Jovens Unidos Seguindo Cristo)**, where the founders met.
- **Logo:** *Sovereign Hex-D* geometric monogram created via `logo-design-skill` (exact 30°/60° hexagonal geometry + surgical 30° redaction cut across the spine).
- **Easter Egg:** A discreet geometric hive/bee trigger hidden in the interface that reveals the official **JUSC emblem** and the **Abelhhudo** mascot for exactly **5 seconds**, then glides away cleanly without disturbing the minimalist layout.

## Technical & Deployment Target
- **Stack:** React 19 + TypeScript + Vite 6 + Tailwind CSS v4 (with self-hosted `@fontsource` typography) served by Nginx Alpine (`nginx:1.27-alpine`).
- **Deployment:** Production multi-stage Docker container designed to run behind **Traefik** on a VPS at `desnomeia.tccodes.com.br`, with configurable environment variables and clean GitHub repository structure.
