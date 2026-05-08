# AGENTS.md — AI agent quick orientation

Purpose: give AI coding agents the minimal, actionable knowledge they need to be productive in this repository.

Quick commands
- Install: `npm install` — see [package.json](package.json) for engines and scripts.
- Dev: `npm run dev` — local dev server (Astro).
- Build: `npm run build` — produces `dist/` (used by Netlify).
- Lint / checks: `npm run lint`, `npm run check`, `npm run format:check`.

Key files & locations (link, don't embed)
- Project manifest: [package.json](package.json)
- Astro config / integrations: [astro.config.mjs](astro.config.mjs)
- Deployment: [netlify.toml](netlify.toml)
- Content schema & collections: [src/content.config.ts](src/content.config.ts)
- Pages / routes: [src/pages/](src/pages/)
- Components (Vue + Astro): [src/components/](src/components/)
- Layouts: [src/layouts/](src/layouts/)
- Styles (Spectre + theme): [src/styles/](src/styles/)
- Types: [src/types/](src/types/)

Important conventions & notes
- Frameworks: Astro + Vue 3. Prefer small scoped changes to components; respect existing component APIs.
- i18n: English is default (no prefix); Spanish lives under `/es/`. See [astro.config.mjs](astro.config.mjs).
- Content: blog and pages live under `src/content/` with `en/` and `es/` folders. Content schema validated in [src/content.config.ts](src/content.config.ts).
- Node: project expects modern Node (see `engines` in [package.json](package.json)); tests/builds may fail on older runtimes.
- Build output: static `dist/` directory. Netlify deploy uses `npm run build` and publishes `dist/`.

Agent behavior guidelines (short)
- Link to, don't copy, large docs; prefer pointers to canonical files above.
- Avoid wide-scope refactors without user approval; open a PR description first.
- When editing content, preserve frontmatter keys required by `src/content.config.ts`.
- Run `npm run lint` and `npm run check` locally before proposing CI fixes.

Suggested next agent customizations
- `create-skill:content-sync` — automate cross-locale content sync checks and missing translation reports.
- `create-instruction:deploy` — a small `.github/copilot-instructions.md` with deploy steps and Netlify caveats.

If you'd like, I can also create a `.github/copilot-instructions.md` that surfaces the short commands above for GitHub-based agents.
