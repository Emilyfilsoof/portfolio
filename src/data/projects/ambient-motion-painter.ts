import type { Project } from '../types';

/**
 * Source: Ambient Motion Painter report — Programming Experimental Interactions,
 * ITU, 15 December 2025. Individual work.
 */
export const ambientMotionPainter: Project = {
  slug: 'ambient-motion-painter',
  index: '04',
  title: 'Ambient Motion Painter',
  subtitle: 'The smartphone as an expressive design material',
  year: '2025',
  context: 'ITU · individual',
  disciplines: ['Creative coding', 'Generative design', 'Sensor-based interaction'],
  summary:
    'Your surroundings become the pigments. Your movement becomes the composition. Two p5.js sketches, one MQTT connection, one painting that emerges as you walk.',
  meta: [
    { term: 'Year', detail: '2025' },
    { term: 'Context', detail: 'Programming Experimental Interactions, ITU' },
    { term: 'Work', detail: 'Individual — concept, code and visual system' },
    { term: 'Built with', detail: 'p5.js, MQTT (mqtt.min.js), device camera and motion sensors' },
    { term: 'Output', detail: 'Live desktop canvas and clean high-resolution PNG exports' },
  ],
  field: { accent: '#00e5ff', bg: '#0b0b0c', ink: '#f4f2f0' },
  cover: {
    id: 'amp-cover',
    src: '/images/amp-cover.png',
    alt: 'Generative painting produced by walking through Copenhagen',
    need: 'One full-resolution PNG export — the Nyhavn walk (report Figure 1) works well as the cover.',
    ratio: '16 / 9',
    tone: 'dark',
  },
  preview: {
    id: 'amp-preview',
    src: '/images/amp-preview.png',
    alt: 'Detail of a generative painting',
    need: 'A crop of any full-resolution export, dense enough to read at small size.',
    ratio: '4 / 3',
    tone: 'dark',
  },
  blocks: [
    {
      kind: 'lead',
      text: 'A phone is built to be looked at and tapped. This project treats its camera and motion sensors as artistic material instead: the phone collects pigment from the light around you, your movement decides how it lands, and a desktop canvas accumulates the result.',
    },
    {
      kind: 'statement',
      text: 'Your surroundings become the pigments. Your movement becomes the composition.',
    },
    {
      kind: 'prose',
      label: 'Starting point',
      heading: 'It began as Sky Painter',
      paragraphs: [
        'The first idea was narrow: the phone samples the colour of the sky and a computer paints brush-like strokes from it. Early camera tests showed the system responded meaningfully to any surrounding light — a lit room, a shadow on a wall, a bright screen — so the sky framing was dropped in favour of ambient colour.',
        'That reframing opened the design space the rest of the project worked in, and eventually renamed the project.',
      ],
    },
    {
      kind: 'figure',
      label: 'Design process',
      asset: {
        id: 'amp-architecture',
        src: '/images/amp-architecture.png',
        alt: 'Design process map showing experiments, iterations and critical decisions',
        caption: 'Design process mapping experiments, iterations and critical decisions',
        need: 'Your Figma process map as SVG or 2× PNG.',
        ratio: '1129 / 1819',
        tone: 'dark',
      },
      wide: true,
    },
    {
      kind: 'list',
      label: 'Architecture',
      items: [
        {
          term: 'Phone sketch',
          detail:
            'A p5.js sketch that samples every fourth pixel of a 160×120 video stream, averages the values into one ambient colour, computes brightness from it, and derives motion intensity from changes in acceleration magnitude.',
        },
        {
          term: 'Transport',
          detail:
            'One-directional publish–subscribe over MQTT: phone → broker → desktop, with a compact payload of averaged colour, brightness and motion intensity.',
        },
        {
          term: 'Desktop sketch',
          detail:
            'A second p5.js sketch that subscribes to the stream and draws one semi-transparent stroke per message onto a persistent canvas — the desktop is the canvas and the temporal memory.',
        },
      ],
    },
    {
      kind: 'table',
      label: 'Mapping',
      heading: 'Expressive rather than functional',
      head: ['Input (phone)', 'Mapping (desktop)', 'Quality'],
      rows: [
        ['Average camera colour', 'Stroke colour', 'Transparent, ambient'],
        ['Brightness', 'Vertical position', 'Abstract reference to horizon and light'],
        ['Motion speed', 'Jitter, stroke size, movement speed', 'Playful, performative'],
        ['Orientation', 'Minor rotation variation', 'Soft aesthetic nuance'],
      ],
    },
    {
      kind: 'prose',
      label: 'Process',
      heading: 'Five decisions the material forced',
      paragraphs: [
        'The project developed through branching experiments rather than a plan. Five decisions did the structural work — each one arrived because the system behaved unexpectedly, not because it was scheduled.',
      ],
    },
{
  kind: 'list',
  label: 'Design principles',
  items: [
        {
          term: '01 — Beyond the sky',
          detail:
            'Colour sampling responded to any ambient light, so the concept broadened from Sky Painter to ambient colour mapping.',
        },
        {
          term: '02 — Dropping particles',
          detail:
            'Particle systems behaved unpredictably and fought the calm, atmospheric quality I wanted. Committing to layered semi-transparent ellipses gave colour and motion something coherent to act on.',
        },
        {
          term: '03 — Smoothing the accelerometer',
          detail:
            'Raw accelerationIncludingGravity data produced chaotic visuals. Interpolating between readings and constraining ranges turned motion from raw input into a material that could be shaped.',
        },
        {
          term: '04 — Renaming the project',
          detail:
            'The prototype painted rooms, shadows and screens, not the sky. Ambient Motion Painter named what it actually was, and that clarified the interaction design.',
        },
        {
          term: '05 — A clean export',
          detail:
            'Hiding the interface before saving — a two-frame rendering trick plus hiding the DOM overlays — made the output an exhibitable artwork rather than a screenshot.',
        },
      ],
    },
    {
      kind: 'code',
      label: 'Motion as material',
      caption:
        'Motion intensity is the change between consecutive acceleration readings, smoothed with lerp so the visual response stays expressive rather than chaotic.',
      lines: [
        'let mag = sqrt(accX * accX + accY * accY + accZ * accZ);',
        'let delta = abs(mag - prevMag);',
        'motion = lerp(motion, constrain(delta, 0, MAX_MOTION), 0.15);',
        'prevMag = mag;',
      ],
    },
    {
      kind: 'figures',
      label: 'Outputs',
      columns: 2,
      assets: [
        {
          id: 'amp-output-nyhavn',
          src: '/images/amp-output-nyhavn.png',
          alt: 'Painting from a walk down Nyhavn, Copenhagen',
          need: 'Full-resolution PNG export — the Nyhavn walk (report Figure 1).',
          ratio: '4 / 3',
          tone: 'dark',
        },
        {
          id: 'amp-output-woods',
          src: '/images/amp-output-woods.png',
          alt: 'Painting from a walk in the woods',
          need: 'Full-resolution PNG export — the walk in the woods (report Figure 3).',
          ratio: '4 / 3',
          tone: 'dark',
        },
      ],
    },
    {
      kind: 'link',
      label: 'Demo',
      href: 'https://youtu.be/RQOrxa74vRQ',
      text: 'Watch the interaction — a walk, filmed',
      note: 'Two minutes. The desktop canvas builds as the phone moves.',
    },
    {
      kind: 'prose',
      label: 'Limits',
      heading: 'What it does not do',
      paragraphs: [
        'Averaging the camera image reduces detail: the system trades fidelity for atmosphere, deliberately, but it cannot represent. Motion input varies between people and environments, so responsiveness is not consistent.',
        'There is no explicit state control. Painting begins as soon as camera access is granted, motion becomes active only once motion permissions are given, and the canvas has no reset or undo — every session is irreversible.',
        'Next: multiple phones contributing to one shared canvas, richer brush models through shaders or textures, and exposing the mapping parameters during interaction so the expressive space can be explored live.',
      ],
    },
    {
      kind: 'credits',
      role: 'Individual project. I wrote both sketches, designed the mapping and visual system, and ran the experiments. Generative AI was used sparingly for debugging and clarifying specific technical issues; all code was written, tested and iterated by me.',
      context: 'Programming Experimental Interactions, IT University of Copenhagen, December 2025.',
      methods: [
        'Material-driven experimentation',
        'Branching prototypes rather than linear planning',
        'Camera and sensor calibration tests',
      ],
      tools: ['p5.js', 'MQTT (mqtt.min.js)', 'JavaScript', 'Figma'],
    },
  ],
};
