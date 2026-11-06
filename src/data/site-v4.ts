/**
 * Presentation data introduced by the v4 theme. Kept out of profile.ts so the
 * factual CV data stays a single source of truth and this file can be deleted
 * with the theme.
 */

export const stats = [
  { value: 4, suffix: '', label: 'Years in digital design' },
  { value: 5, suffix: '', label: 'Organisations worked with' },
  { value: 4, suffix: '', label: 'Websites designed & launched' },
] as const;

export const workedWith = [
  { name: 'Danmarks Radio', note: 'Case', href: '/work/vores-side' },
  { name: 'DSB', note: 'Vinge Togværksted', href: '/client/vinge' },
] as const;

/** The three employers from profile.experience, named in a mono row. */
export const alsoWorkedWith = [
  'Duus Partners',
  'Bæredygtigt Kulturliv NU',
  'Kollab',
] as const;

/** Hero positioning line, set as one sentence rather than derived from prose. */
export const positioning =
  'PRODUCT DESIGNER & DIGITAL DEVELOPMENT CONSULTANT WORKING ACROSS UX, FRONTEND & AI';

/** Top row of the hero. The site has no separate navigation bar. */
export const heroName = ['Emily Rose', 'Shereen Filsoof'] as const;

export const heroKicker =
  'Cand.it. · Digital Product Design · UX & Interaction · Emerging Technology';

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

/**
 * The About section, written as one voice rather than assembled from CV prose.
 * A column may end on a statement, set larger than its body copy.
 */
type AboutColumn = { label: string; body: string[]; statement?: string };

export const about: {
  headline: string;
  lead: string;
  intro: string;
  columns: AboutColumn[];
  closing: string;
} = {
  headline: 'Hi, I’m Emily.',
  lead: 'I’m a Product Designer, but I’ve never been particularly good at staying in one box.',
  intro:
    'My background is in Information Studies and Digital Design, which probably explains why I’m equally interested in how people make sense of things, how technology shapes what they do, and why some interfaces make perfect sense while others make you want to throw your laptop out the window.',
  columns: [
    {
      label: 'How I work',
      body: [
        'I like figuring things out. Especially the things I don’t quite understand yet. I tend to ask a lot of questions, go down unnecessary rabbit holes, and keep digging until something starts to make sense. Then I usually want to make something with it.',
      ],
      statement:
        'That might be a digital product, an interaction, a prototype, a physical artefact, a website, a coded experiment, or occasionally just a much better question.',
    },
    {
      label: 'Where I sit',
      body: [
        'I’m particularly drawn to the messy space between research, design and technology. I like zooming out to understand what’s going on, then zooming back in and making something tangible. I’m also comfortable getting my hands dirty with the technology behind what I design, so I don’t see a particularly big wall between thinking, designing and making.',
        'AI has naturally found its way into that process too. I use it to explore ideas, prototype, research and generally make a mess of things faster. But I’m just as interested in where it falls short, what it misunderstands, what it misses, and where human judgement still matters.',
      ],
    },
  ],
  closing:
    'Basically, I’m curious, slightly obsessive about understanding things, and happiest when I get to learn something I didn’t know yesterday and make something that didn’t exist before.',
};
