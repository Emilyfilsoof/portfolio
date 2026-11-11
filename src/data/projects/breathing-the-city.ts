import type { Project } from '../types';

/**
 * Source: Breathing the City — Wearable Artifacts as a Relational Interface for
 * Urban Air Pollution. MSc thesis, ITU, 31 May 2026. Individual work.
 * Supervisor: Vasiliki Tsaknaki. Participant quotes are the thesis's own
 * English translations of the Danish interviews.
 */
export const breathingTheCity: Project = {
  slug: 'breathing-the-city',
  index: '02',
  title: 'Breathing the City',
  subtitle: 'Wearable artifacts as a relational interface for urban air pollution',
  year: '2026',
  context: 'MSc thesis · ITU · individual',
  disciplines: ['Research through Design', 'Wearable interaction', 'Embodied interaction'],
  summary:
    'A hand-sewn breathing mask, eight runs around Peblinge Sø, and a second deployment built to test whether the first one’s comfortable result was true.',
  meta: [
    { term: 'Year', detail: '2026' },
    { term: 'Context', detail: 'MSc thesis, Digital Design and Interactive Technologies, ITU' },
    { term: 'Supervisor', detail: 'Vasiliki Tsaknaki' },
    { term: 'Work', detail: 'Individual: design, making, deployment and analysis' },
    { term: 'Approach', detail: 'Research through Design, autobiographical inquiry, situated deployment' },
    { term: 'Materials', detail: 'Deadstock cotton, elastic' },
  ],
  field: { accent: '#00e5ff' },
  cover: {
    id: 'btc-cover',
    src: '/images/btc-cover.webp',
    alt: 'The hand-sewn low-fidelity breathing mask',
    need: 'A proper photograph of the finished mask — ideally a new studio shot against a plain ground. Thesis Figure 6 (right) is the fallback.',
    ratio: '16 / 9',
  },
  preview: {
    id: 'btc-preview',
    src: '/images/btc-preview.png',
    alt: 'The breathing mask worn during a run',
    need: 'One photograph of the mask worn mid-run around Peblinge Sø. If none exists, a close crop of the finished mask.',
    ratio: '4 / 3',
  },
  blocks: [
    {
      kind: 'lead',
      text: 'Air pollution is inhaled continuously by everyone moving through a city, and almost never felt. This thesis asked how a wearable artifact might make it noticeable through breathing, during something as ordinary as a run around the lakes.',
    },
    {
      kind: 'statement',
      text: 'How might wearable artifacts make air pollution noticeable through breathing during urban running?',
    },
    {
      kind: 'prose',
      label: 'Starting point',
      heading: 'My own runs, as the first site of inquiry',
      paragraphs: [
        'I run the loop around Peblinge Sø like a lot of people in Copenhagen. The project began there, with three autobiographical runs under different conditions of traffic, weather and crowding, and in-situ notes taken immediately afterwards.',
        'Two patterns came out of them. Running produces a kind of mental bubble: attention goes to pace, breath and route, and the surroundings recede. And the water produces an illusion of fresh air: the visual openness of the lakeside reads as freshness whether or not the air is any better. Two short interviews with other runners on the same route showed the same orientation, so it was not only mine.',
      ],
    },
    {
      kind: 'figures',
      label: 'First prototypes',
      columns: 3,
      assets: [
        {
          id: 'btc-scarf-thick',
          src: '/images/btc-scarf-thick.webp',
          alt: 'Thick wool scarf pulled over mouth and nose',
          need: 'Thesis Figure 3, first variation — the thick wool scarf, at original resolution.',
          ratio: '446 / 918',
          presentation: 'contained',
          frameHeight: 520,
        },
        {
          id: 'btc-scarf-thin',
          src: '/images/btc-scarf-thin.webp',
          alt: 'Thin silk-cotton scarf variation',
          need: 'Thesis Figure 3, second variation — the thin silk/cotton scarf.',
          ratio: '450 / 924',
          presentation: 'contained',
          frameHeight: 520,
        },
        {
          id: 'btc-scarf-intermittent',
          src: '/images/btc-scarf-intermittent.webp',
          alt: 'Diagram of the intermittent scarf variation',
          need: 'Thesis Figure 3, third variation — the diagram of the intermittent variation.',
          ratio: '504 / 928',
          presentation: 'contained',
          frameHeight: 520,
        },
      ],
    },
    {
      kind: 'prose',
      heading: 'Three scarves as physical hypotheses',
      paragraphs: [
        'I tested resistance with what was already at hand. A thick wool scarf made breathing immediately noticeable, but soon dominated attention; a thin scarf disappeared from awareness. An intermediate scarf worked better because shifting it during the run kept the sensation from stabilising.',
        'That variation also exposed a problem: adjusting fabric became a task in itself. The useful finding was not that breathing needed to be harder, but that change could sustain attention without taking over the experience.',
      ],
    },
    {
      kind: 'statement',
      text: 'The design problem shifted from making breathing harder to making breathing situationally legible.',
    },
    {
      kind: 'figures',
      label: 'Making the mask',
      columns: 2,
      layout: 'stack',
      assets: [
        {
          id: 'btc-design-space',
          src: '/images/btc-design-space.webp',
          alt: 'Annotated design space of eight mask variations',
          need: 'Thesis Figure 4 — the annotated design space of eight mask variations, at original resolution or as vector.',
          ratio: '1486 / 1767',
        },
        {
          id: 'btc-materials',
          src: '/images/btc-materials.webp',
          alt: 'Material exploration at a fabric shop',
          need: 'Thesis Figure 5 — the fabric-shop material exploration photographs.',
          ratio: '2048 / 1058',
        },
      ],
    },
    {
      kind: 'prose',
      paragraphs: [
        'Eight sketched variations mapped different ways of modulating airflow. A mesh panel at the nose was explored and abandoned when it proved difficult to sew consistently, pushing the design toward material density instead.',
        'I restricted the material search to deadstock and selected a tightly knitted cotton: soft enough to run in, breathable, and structured enough to hold shape against the face. Hand-sewing through several iterations let the material reshape the design; an opening under the nose enabled a deliberate shift between mouth and nasal breathing. The artifact remained visibly low-fidelity so it could function as something to investigate rather than a finished product to accept.',
      ],
    },
    {
      kind: 'figures',
      columns: 2,
      assets: [
        {
          id: 'btc-mesh-abandoned',
          src: '/images/btc-mesh-abandoned.webp',
          alt: 'The abandoned mesh panel',
          need: 'Thesis Figure 6 (left) — the abandoned mesh panel intended for the nose area.',
          ratio: '1 / 1',
        },
        {
          id: 'btc-mask-finished',
          src: '/images/btc-mask-finished.webp',
          alt: 'The finished low-fidelity breathing mask',
          need: 'Thesis Figure 6 (right) — the finished mask. A new studio photograph would be better.',
          ratio: '1 / 1',
        },
      ],
    },
    {
      kind: 'list',
      label: 'The intervention',
      heading: 'The Atmospheric Interface: a five-part kit',
      items: [
        {
          term: 'Breathing mask',
          detail:
            'Hand-sewn tightly knitted cotton with an opening under the nose, making breathing deliberate without fully restricting airflow.',
        },
        {
          term: 'Zoned route map',
          detail:
            'Peblinge Sø divided into four zones: two traffic-heavy bridge zones at Dronning Louises Bro and Fredensbro, and two water-adjacent lakeside stretches, marked red and blue.',
        },
        {
          term: 'Instruction card',
          detail:
            'Restricted breathing through the covered mouth in red zones, easier nasal breathing in blue zones. Identical in both protocols.',
        },
        {
          term: 'Soma logbook',
          detail:
            'Printed body maps for localising sensation before and after the run, and a trajectory sheet for how the experience shifted along the route.',
        },
        {
          term: 'Coloured markers',
          detail: 'Participants annotated their own bodily accounts directly onto the sheets.',
        },
      ],
    },
    {
      kind: 'figure',
      asset: {
        id: 'btc-kit',
        src: '/images/btc-kit.webp',
        alt: 'The Atmospheric Interface kit laid out',
        need: 'Thesis Figure 7 — the full kit laid out, and the assembled kit. Both, if you have them.',
        ratio: '2048 / 843',
      },
      wide: true,
    },
    {
      kind: 'split',
      label: 'Two protocols, one variable',
      left: {
        label: 'Protocol 1 · aligned',
        paragraphs: [
          'Restricted breathing at the traffic-heavy bridges, easier nasal breathing at the water. Breathing matched the atmospheric character of each zone.',
          'Removing the mouth as a habitual backup channel worked: none of the four participants had noticed how much they relied on it. The nose became a passage where temperature and rhythm registered, and the water-adjacent air became something breathed rather than an idea about a place.',
        ],
      },
      right: {
        label: 'Protocol 2 · reversed',
        paragraphs: [
          'Same route, same mask, same instruction card. Only the colouring of the map was inverted, so restriction arrived at the water and ease at the traffic. The manipulation sat in the map, not in the instruction.',
          'This produced a conflict Protocol 1 could not: the visual field opened at the water while the breathing body was constrained. All four participants described the split, and in describing it, discovered an expectation they had never articulated.',
        ],
      },
    },
    {
      kind: 'figure',
      label: 'The two maps differ only in colour',
      asset: {
        id: 'btc-route-maps',
        src: '/images/btc-route-maps.webp',
        alt: 'The two zoned route maps of Peblinge Sø',
        need: 'Thesis Figure 8 — both route maps side by side (Protocol 1 and the reversed Protocol 2).',
        ratio: '1292 / 942',
      },
      wide: true,
    },
    {
      kind: 'quote',
      text: 'Every time I came close to the water, I expected it to feel easier. And when it didn’t, I noticed that I had expected it. Like, oh, I actually have this habit.',
      attribution: 'Julie, Protocol 2',
    },
    {
      kind: 'prose',
      label: 'The finding',
      heading: 'Bodily ease is not evidence of air quality',
      paragraphs: [
        'The most consequential result came from the traffic zones. When easier nasal breathing arrived at the bridges, the body stopped signalling resistance even though the place itself had not improved. Felt ease and environmental quality came apart.',
        'Three participants also described becoming less attentive to their surroundings when the body was not challenged. The open nasal channel made smell more present (warm asphalt, exhaust, dust), revealing that easier breathing could coexist with an unpleasant atmosphere.',
      ],
    },
    {
      kind: 'quote',
      text: 'It made me think that just because breathing feels easier, it doesn’t mean the air is good. At the traffic it could still smell bad, even if the breathing itself was easier.',
      attribution: 'Simon, Protocol 2',
    },
    {
      kind: 'figure',
      label: 'Participant documentation',
      asset: {
        id: 'btc-trajectory',
        src: '/images/btc-trajectory.webp',
        alt: 'Soma trajectory sheet from Protocol 2',
        need: 'Thesis Figure 11 — the redrawn excerpt of Julie’s soma trajectory sheet, plus one or two original annotated body maps.',
        ratio: '16 / 9',
      },
    },
    {
      kind: 'prose',
      label: 'Design proposition',
      heading: 'An automated relational mask',
      paragraphs: [
        'Across both deployments, tracking which rule applied where became a task in itself and competed with the attention the intervention was meant to produce. The design proposition therefore moves that choreography from the runner to the artifact.',
        'An automated relational mask would gradually modulate respiratory resistance as the runner moves through changing urban conditions, removing the need to follow a map or remember a rule. It is a design argument rather than a finished product: the aim is not to equate pollution with resistance, but to create a felt relation between place, breath and attention.',
      ],
    },
    {
      kind: 'quote',
      text: 'I think the strange part should stay, but it shouldn’t feel so much like an instruction. Then I wouldn’t think, okay, now I’m doing the opposite. I would just feel that something doesn’t fit.',
      attribution: 'Simon, on an automated version',
    },
    {
      kind: 'list',
      label: 'What the work contributes',
      items: [
        {
          term: 'Correspondence',
          detail:
            'Resistance became meaningful when it changed in relation to place; constant resistance flattened the route.',
        },
        {
          term: 'Variation',
          detail: 'Change sustained attention more effectively than constant intensity.',
        },
        {
          term: 'Automation',
          detail:
            'Manual instructions competed with the experience itself, pointing toward situational modulation by the artifact.',
        },
        {
          term: 'A critical caution',
          detail:
            'Feeling that breathing is easy is not evidence that the air is clean. That is a critical caution for respiratory wearables.',
        },
      ],
    },
    {
      kind: 'credits',
      role: 'Individual thesis. I designed and hand-sewed the artifacts, ran the autobiographical phase, recruited and briefed participants, facilitated all eight deployment runs and post-run interviews, and did the analysis and writing.',
      context:
        'MSc thesis, Digital Design and Interactive Technologies, IT University of Copenhagen, submitted 31 May 2026. Supervisor: Vasiliki Tsaknaki. Deployment with four everyday runners over four weeks in April 2026, eight runs at 16:00 in dry conditions on the same route.',
      methods: [
        'Research through Design',
        'Autobiographical / first-person inquiry',
        'Material exploration and hand sewing',
        'Probe-inspired situated deployment',
        'Body maps and soma trajectory sheets',
        'Post-run semi-structured interviews',
      ],
      tools: ['Deadstock cotton and elastic', 'Sewing by hand', 'Sketching', 'Thematic analysis'],
    },
  ],
};
