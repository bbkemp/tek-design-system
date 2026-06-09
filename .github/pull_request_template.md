<!-- Conventional Commit title: type(scope): summary in imperative mood -->

## What & why

<!-- One or two lines. What changed and the reason. Don't narrate the diff. -->

## Type

- [ ] `feat` — new capability
- [ ] `fix` — bug fix
- [ ] `chore` — tooling / deps / CI
- [ ] `docs` — docs only
- [ ] `refactor` — restructure, no behavior change

## Checklist

- [ ] Tokens only — no hardcoded hex, px, font sizes, font families, or radii (`var(--tek-*, fallback)`)
- [ ] Web Components only — no React
- [ ] Grounded in the Figma node where component/visual code changed (DS-v2)
- [ ] Relevant build passes (`npm run build:tokens` / `npm run build:ui`)
- [ ] Verified with proof (screenshot / snapshot / passing check) — no unverified "works"
- [ ] Skill mirrors regenerated if `.claude/skills/` or `docs/agent-baseline.md` changed (`npm run skills:export`)

## Proof

<!-- Screenshot, snapshot, or command output that demonstrates this works. -->

## Linked issues / PRDs

<!-- Closes #… / implements /prds/… -->
