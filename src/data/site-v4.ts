/**
 * Presentation data introduced by the v4 theme. Kept out of profile.ts so the
 * factual CV data stays a single source of truth and this file can be deleted
 * with the theme.
 */

export const stats = [
  { value: 4, suffix: '', label: 'Years in digital design' },
  { value: 5, suffix: '', label: 'Organisations worked with' },
  { value: 3, suffix: '+', label: 'Websites designed & launched' },
  { value: 500, suffix: 'K+', label: 'DKK in funding supported' },
] as const;

export const workedWith = [
  { name: 'Danmarks Radio', note: 'Case', href: '/work/vores-side' },
  { name: 'DSB', note: 'Vinge og Værksted' },
] as const;

/** The three employers from profile.experience, named in a mono row. */
export const alsoWorkedWith = [
  'Duus Partners',
  'Bæredygtigt Kulturliv NU',
  'Kollab',
  'Bæredygtig Handling Nu',
] as const;

/** Hero positioning line, set as one sentence rather than derived from prose. */
export const positioning =
  'Digital designer working across UX, product design & emerging technology';

/** Top row of the hero. The site has no separate navigation bar. */
export const heroName = ['Emily Rose', 'Shereen Filsoof'] as const;

export const heroKicker =
  'Cand.it. · AI & Emerging Technology · UX/UI & Product Design · Research & Analysis';

export const heroMeta = 'Copenhagen · Digital design & interactive technologies, ITU';

export const manifest = {
  before: 'I’ve always been a little obsessed with figuring out',
  highlight: ['what’s', 'underneath'],
  after: 'things.',
} as const;

export const marqueeText =
  'UX design — user research — research through design — creative coding — participatory design — wearables — front-end — ';

export const introWords = [
  'UX design',
  'User research',
  'Research through design',
  'Participatory design',
  'Creative coding',
  'Wearable interaction',
  'Emerging technology',
] as const;
