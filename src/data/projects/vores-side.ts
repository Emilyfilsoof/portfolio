import type { Project } from '../types';

/**
 * Source: KADIINP1KU_Group_6.pdf — "Digital Innovation in Practice", ITU, 15 May 2025.
 * Group project with DR as case partner. Copy below is written from the report;
 * quotes are translated from the Danish originals recorded in its appendices.
 */
export const voresSide: Project = {
  slug: 'vores-side',
  index: '01',
  title: 'Case at Danmarks Radio',
  subtitle: 'Vores Side — from personalisation to participation',
  year: '2025',
  context: 'DR · ITU · group project',
  disciplines: ['UX design', 'User research', 'Digital product design'],
  summary:
    "Reframing DR's cross-platform login from a technical gate into an entry point for public participation.",
  meta: [
    { term: 'Year', detail: '2025' },
    { term: 'Context', detail: 'Digital Innovation in Practice, ITU' },
    { term: 'Case partner', detail: 'DR (Danmarks Radio)' },
    { term: 'Team', detail: 'Group project' },
    {
      term: 'My role',
      detail:
        'Across the full process — user research and interviews, analysis, concept development, iterative prototyping, and how Vores Side would work across DR’s ecosystem',
    },
    { term: 'Tools', detail: 'Figma, semi-structured interviews' },
  ],
  field: { accent: '#00e5ff' },
  cover: {
    id: 'dr-cover',
    src: '/images/dr-cover.png',
    alt: 'Vores Side shown across DRTV, DR LYD and DR Nyheder',
    need: 'Figma export at 2×: the three Vores Side screens side by side (DRTV, DR LYD, DR Nyheder) — report Figure 1.',
    ratio: '16 / 9',
  },
  preview: {
    id: 'dr-preview',
    src: '/images/dr-preview.png',
    alt: 'Vores Side weekly theme screen',
    need: 'Figma export at 2× of the Vores Side weekly-theme screen on DRTV, cropped to the top half.',
    ratio: '4 / 3',
  },
  blocks: [
    {
      kind: 'lead',
      text: 'DR asked how its existing login could tie DRTV, DR LYD and DR Nyheder together. We answered a different question: what would make logging in worth doing at all for a publicly funded broadcaster?',
    },
    {
      kind: 'split',
      label: 'The brief, and the reframe',
      left: {
        label: 'What DR asked',
        paragraphs: [
          'DR has one login across DRTV, DR LYD and DR Nyheder, and a goal of reaching 8 out of 10 people in Denmark through its digital platforms. The login saves viewing and listening activity and gives DR a stronger data foundation, but the platforms still operate separately.',
          'The brief, as presented, was cohesion: get more people to log in, and make the three platforms feel like one service.',
        ],
      },
      right: {
        label: 'What we asked instead',
        paragraphs: [
          'How might DR use its existing login solution to strengthen digital cohesion across its main platforms, while also making the login experience feel valuable and engaging for users?',
          'That moved the project from interface optimisation to a public-service question. Login is the point where a licence-funded institution asks something of a citizen — so it has to give something back that a commercial platform would not.',
        ],
      },
    },
    {
      kind: 'prose',
      label: 'Research',
      heading: 'Two expert interviews at DR, twenty-five with its users',
      paragraphs: [
        'We interviewed DR’s Product Manager, who described login as underused and often experienced as annoying, and later DR’s Media Analyst, who explained how little DR knows about users who are not logged in — and how carefully DR has to handle data as a non-commercial institution.',
        'In parallel we ran semi-structured interviews with 25 people aged 18–30, DR’s stated target group, about their media habits and their view of the login. The dominant response to logging in was irritation: DR had always been freely available, so why the gate?',
        'The second finding was the one that redirected the project. Users did not want personalisation from DR at all.',
      ],
    },
    {
      kind: 'quote',
      text: 'Public service shouldn’t recommend content, it should provide a broader perspective.',
      attribution: 'User interview participant',
      original: 'Public service skal ikke anbefale, det skal give et bredere syn.',
    },
    {
      kind: 'quote',
      text: 'If DR starts recommending things, you get put in a box — and that’s dangerous for public service.',
      attribution: 'User interview participant',
      original:
        'Hvis DR begynder at anbefale ting, bliver man sat i en kasse, og det er farligt for public service.',
    },
    {
      kind: 'prose',
      label: 'The turn',
      heading: 'From Min Side to Vores Side',
      paragraphs: [
        'Our early concepts had circled around Min Side — my page — because that is the shape personalisation usually takes. The interviews made that direction untenable: people were explicitly asking DR not to behave like Netflix.',
        'So the concept became collective rather than individual. Vores Side — our page — is a shared space reached through login, where content is organised around a weekly theme that users vote on, and where the same space appears inside all three apps.',
      ],
    },
    {
      kind: 'figure',
      label: 'The concept',
      asset: {
        id: 'dr-vores-side-three-platforms',
        src: '/images/dr-vores-side-three-platforms.png',
        alt: 'Vores Side on DRTV, DR LYD and DR Nyheder',
        need: 'Figma export at 2× of report Figure 1 — Vores Side on all three platforms, each in its own platform colour.',
        ratio: '16 / 9',
      },
      wide: true,
    },
    {
      kind: 'list',
      label: 'What is in it',
      heading: 'Five parts, one shared page',
      items: [
        {
          term: 'Weekly theme',
          detail:
            'The top of the page carries the current theme and one featured piece of content that anchors it — for example a climate theme drawing together articles, documentaries and podcasts.',
        },
        {
          term: 'Voting',
          detail:
            'Users vote on next week’s theme from several proposals. The most-voted theme guides the following week’s supplementary content across the three platforms.',
        },
        {
          term: 'Quiz',
          detail:
            'A short quiz on the theme — a low-stakes way in, and a focal point that makes the theme something to talk about.',
        },
        {
          term: 'Cross-platform teasers',
          detail:
            '“Det sker på vores andre platforme”: visual previews that link straight into the relevant article, documentary or podcast on DR’s other services.',
        },
        {
          term: 'Feedback',
          detail:
            'Emoji reactions, yes/no polls and comment fields — available to logged-in users only, which is where the value of logging in becomes concrete. It answers DR’s own wish for qualitative feedback.',
        },
      ],
    },
    {
      kind: 'figures',
      label: 'Cross-platform teasers and feedback',
      columns: 2,
      assets: [
        {
          id: 'dr-teasers',
          src: '/images/dr-teasers.png',
          alt: 'Cross-platform teaser components',
          need: 'Figma export at 2× of report Figure 2 — the cross-platform teaser components.',
          ratio: '1762 / 1364',
          presentation: 'contained',
          frameHeight: 500,
        },
        {
          id: 'dr-feedback',
          src: '/images/dr-feedback.png',
          alt: 'Feedback page with reactions, polls and comments',
          need: 'Figma export at 2× of report Figure 3 — the DR feedback page.',
          ratio: '764 / 1422',
          presentation: 'contained',
          frameHeight: 500,
        },
      ],
    },
    {
      kind: 'split',
      label: 'The login, before and after',
      left: {
        label: 'Before',
        paragraphs: [
          'A technical gate. It saves your place and unlocks some content, and it explains nothing about why it exists — which is exactly how our participants described it.',
        ],
      },
      right: {
        label: 'After',
        paragraphs: [
          '“Log ind med et formål – ikke kun adgang. Log ind for at deltage, dele din mening og finde indhold, der betyder noget.”',
          '“Login with purpose — not just access. Log in to engage, share your opinion, and discover content that matters.” No new functionality: a rewritten screen that makes what follows legible.',
        ],
      },
    },
    {
      kind: 'figure',
      asset: {
        id: 'dr-login',
        src: '/images/dr-login.png',
        alt: 'Redesigned DR login screen',
        need: 'Figma export at 2× of report Figure 4 — the redesigned login screen. If the original DR login screenshot exists, supply it too so the pair can be shown side by side.',
        ratio: '2034 / 1468',
      },
    },
    {
      kind: 'prose',
      label: 'Cohesion',
      heading: 'One footer, three identities',
      paragraphs: [
        'To make the three apps feel like one service we unified the footer across DRTV, DR LYD and DR Nyheder, with Vores Side reachable from the same place in each. The layout of Vores Side is identical on all three; only the platform colour changes, so the apps stay recognisable without flattening into one another.',
      ],
    },
    {
      kind: 'prose',
      label: 'Evaluation',
      heading: 'Four sessions, and a pitch to DR',
      paragraphs: [
        'The prototype was tested with four users aged 18–30: task-based usability first, then a short interview about motivation and perceived value. Navigation held up — the interface relies only on scrolling and tapping, and participants found the voting mechanism immediately.',
        'The concept landed as intended. Participants described logging in as taking part rather than being counted, and said the experience would make them more likely to return. We then presented Vores Side to DR with a walkthrough of the prototype.',
      ],
    },
    {
      kind: 'quote',
      text: 'It feels like the same DR across platforms. It makes me want to go from reading to listening, because it all connects.',
      attribution: 'Evaluation participant',
    },
    {
      kind: 'prose',
      label: 'What it required',
      heading: 'The organisational condition we could not design away',
      paragraphs: [
        'Vores Side only works if DR acts on what users send back. Login currently sits with product and data teams; weekly themes, voting and feedback need editorial ownership as well, and a definition of engagement that is not clicks. We said so in the report rather than presenting the concept as self-sufficient — participation that is never answered is decoration.',
      ],
    },
    {
      kind: 'credits',
      role: 'I worked across the full process: user research and interviews, analysis, concept development, iterative prototyping in Figma, and developing how the concept would work across DR’s three platforms.',
      context: 'Group project, Digital Innovation in Practice, IT University of Copenhagen, 2025.',
      methods: [
        'Desk research on DR’s 2025 strategy',
        '2 expert interviews (Product Manager, Media Analyst)',
        '25 semi-structured user interviews, ages 18–30',
        '6-3-5 brainwriting',
        'Sketching and iterative Figma prototyping',
        'Usability testing and qualitative evaluation with 4 users',
      ],
      tools: ['Figma', 'Semi-structured interviews', 'Affinity-style synthesis'],
    },
  ],
};
