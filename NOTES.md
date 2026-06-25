# Sync notes — S&S Automations design system

## Origin
Hand-authored from the `ss-brand` skill (`SKILL.md` + two logo PNGs), not produced by the
design-sync converter — there is no `dist/`/Storybook to convert. The repo is laid out in the
design-sync component format (`components/<group>/<Name>/{.html,.jsx,.d.ts,.prompt.md}`,
`styles.css` → `@import` closure, `tokens/`, `_preview/`) so an authenticated sync, or Claude
Design's import, can consume it directly.

## Not yet pushed to claude.ai/design — auth blocked
`DesignSync` needs design-system authorization and `/design-login` requires an interactive
terminal, which this web session does not have. So `projectId` is null and nothing has been
uploaded. To get it into Claude Design:
- From Claude Design, use **"Send to Claude Code Web"** (seeds the project into the workspace), or
- Run a future `/design-sync` from an interactive terminal where `/design-login` works; it will
  create the project, pin the `projectId` here, and push these components as cards.

## Decisions
- **Fonts:** uses a system heavy neo-grotesque stack (`Helvetica Neue`/Inter/Arial) because the
  brand's licensed fonts (Aktiv Grotesk, Founders Grotesk) aren't bundled here. Swap real font
  files into a `fonts/` dir and update `--ss-font` when licensed.
- **Marketplace tiles (§5c) are provisional** in the skill — built off-white-fill by default
  (true to the 90/10 web proportion); the dark-fill variant exists as `.ss-tile--dark`. Decide
  on canvas, then update the skill's §5c and this system together.

## Verification
`node verify.mjs` renders every `components/**/<Name>.html` in headless Chromium and writes
`_preview/<Name>.png`. Uses `playwright-core` (installed locally) with Chromium at
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (override via `SS_CHROMIUM`).

## Fixes applied during the first build (caught by visual verification)
- Em-dash `.ss-label` was ink-black and invisible on the black Hero/Closer/BusinessCard panels —
  added a rule inverting it to off-white on dark surfaces (`brand.css`).
- DocumentPage rendered a literal `#` before each heading (markdown authoring syntax leaking into
  rendered output) — removed so headings render as clean bold text.
