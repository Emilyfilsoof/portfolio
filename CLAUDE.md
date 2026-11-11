# Working rules for agents in this repo

This is Emily Filsoof's portfolio (emilyfilsoof.com), Next.js 14 + TypeScript,
deployed by Vercel from `main`. Agents (Claude Code) write most of the code;
Emily decides what gets built and when it is good enough. These rules apply to
every change.

## Content lives in data, not in components

- Copy, contact and CV: `src/data/profile.ts`
- Homepage presentation (stats, worked with, marquee, intro words): `src/data/site-v4.ts`
- Research cases: one file per case in `src/data/projects/`, registered in `index.ts`
- Client work: `src/data/client-work.ts`
- A case can only be built from the block kinds in `src/data/types.ts`.
  Do not invent a new component to fit content. If something truly needs a new
  block kind, add it to the type and to `CaseBlocks.tsx` together, and say so.

## Done means checked

- A change to anything visible is not done until it has been built
  (`npm run build`) and looked at on desktop (1440px) and mobile (iPhone 13)
  with screenshots. No horizontal scroll, no text overflow, no layout jumps.
- Respect `prefers-reduced-motion` in every animation.
- Animations run on one `requestAnimationFrame` loop that writes to the DOM
  directly, and pause when off screen. No per-frame React re-renders.
- No new dependencies without a reason Emily agrees with.

## Writing

- Never claim anything that is not true or cannot be shown: no invented
  numbers, results, clients or titles.
- Write in Emily's voice: direct and plain. No em dashes or en dashes.
- Screenshots of client sites show the live site, cropped consistently, and
  only the parts that are worth showing.

## Git

- Small commits with a message that says what changed and why.
- Push to `main` only when Emily has asked for the change to go live.
