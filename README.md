# Emily Rose Shereen Filsoof: Portfolio

Standalone Next.js 14 + TypeScript site, live at [emilyfilsoof.com](https://emilyfilsoof.com).
Built with Claude Code as a working partner; the rules agents follow are in [CLAUDE.md](CLAUDE.md).

## Run it

    npm install
    npm run dev

Open http://localhost:3000.

    npm run build     # production build
    npm run start     # serve the build
    npm run typecheck # types only

## Deploy to Vercel

**From the dashboard:** push this folder to a new GitHub repository, then
vercel.com → Add New → Project → import it. Framework detects as Next.js; no
environment variables, no build settings to change.

**From the terminal:**

    npx vercel        # preview
    npx vercel --prod # production

Then add your domain under Project → Settings → Domains.

## Routes

| Route | What it is |
| --- | --- |
| `/` | Homepage: intro plate, manifest headline, marquee, client work, research projects, Worked with, About, contact |
| `/work` | The same four tiles with a short introduction |
| `/work/[slug]` | The four full case pages (`vores-side`, `breathing-the-city`, `diabetes-alarms`, `ambient-motion-painter`) |
| `/client/[id]` | Client work: one page per live site (`vinge`, `green-log`, `bkn`, `hairholic`) |
| `/signifly` | An application page for one job, kept out of search engines |

There is no `/about` route — About lives on the homepage at `/#about`.

## Structure

    src/app/
      globals.css              theme tokens, type scale, utilities
      layout.tsx               mounts Intro, Grain, Cursor, SectionTint, Masthead, Footer
      page.tsx / page.module.css   the homepage
      work/page.tsx            work index
      work/[slug]/page.tsx     case page shell
      work/[slug]/case.module.css
      sitemap.ts, not-found.tsx
    src/components/
      Intro          three-second opening: disciplines cycle, name scrambles, plate wipes up
      Cursor         ring cursor, magnetic links, "Open" label over tiles (desktop only)
      Grain          film-grain plate
      Marquee        scroll-driven type band
      WorkTiles      project tiles with 3D tilt and accent wipe
      Stats          numbers that count up when seen
      WorkedWith     Danmarks Radio · DSB large, the rest in a mono row
      Scramble       labels that scramble on hover
      SectionTint    keeps the document background in step with the section
      Masthead, Footer
      CaseBlocks, Figure, Reveal   case-page rendering
    src/data/
      profile.ts     factual profile, contact, CV, education, experience
      projects/      one file per case, plus index.ts
      site-v4.ts     presentation data: stats, worked-with, manifest sentence, marquee, intro words
      client-work.ts live client sites: screenshots, roles, what was built
    public/
      images/        all case imagery + portrait.jpg
      cv/EmilyFilsoof_CV_2026.pdf

## Editing content

- **Copy, contact, CV** — `src/data/profile.ts`
- **Stats, Worked with, headline, marquee, intro words** — `src/data/site-v4.ts`
- **A case** — the matching file in `src/data/projects/`; blocks render through
  `CaseBlocks.tsx`
- **Colours and type** — the `:root` block at the top of `src/app/globals.css`.
  The accent is `--accent: #00e5ff`; all four cases now use it.

## Design

Off-white paper `#F4F2EC`, charcoal ink `#0C0C0C`, cyan accent `#00E5FF`.
Archivo (variable width axis, set expanded) for display type, Space Mono for
every label. Fonts load from Google Fonts.

Motion is skipped under `prefers-reduced-motion`; the intro is bypassed
entirely and the headline renders without JavaScript. The custom cursor and
magnetic hover are desktop-pointer only.
