import type { Project } from '../types';

/**
 * Sources: "Redesign af diabetesteknologi: Hvad er en alarm?" (article) and the
 * accompanying process report — Advanced Design Processes, ITU, Group 5,
 * 20 December 2024. Group of four. Quotes translated from the Danish originals.
 */
export const diabetesAlarms: Project = {
  slug: 'diabetes-alarms',
  index: '03',
  title: 'What is an alarm?',
  subtitle: 'Redesigning alarms in diabetes technology',
  year: '2024',
  context: 'ITU · group of four',
  disciplines: ['Participatory design', 'UX research', 'Physical prototyping'],
  summary:
    'Co-designing with people living with Type 1 diabetes, and answering alarm fatigue with seven context-specific alarms instead of one fix.',
  meta: [
    { term: 'Year', detail: '2024' },
    { term: 'Context', detail: 'Advanced Design Processes, ITU' },
    {
      term: 'Team',
      detail:
        'Mai Engelbrecht Pilegaard, Emily Rose Shereen Filsoof, Jacob Tærsker Adelholm, Amalie Christine Bagger',
    },
    {
      term: 'My role',
      detail:
        'Workshop planning and facilitation, analysis and synthesis of participant insights, ideation, alarm concepts, physical prototyping and documentation',
    },
    { term: 'Participants', detail: 'Three women aged 20 to 30 living with Type 1 diabetes' },
    { term: 'Output', detail: 'A physical catalogue of seven context-based alarms' },
  ],
  field: { accent: '#00e5ff' },
  cover: {
    id: 'alarms-cover',
    src: '/images/alarms-cover.webp',
    alt: 'The printed catalogue of context-based alarms',
    need: 'Photographs of the physical catalogue — cover and one open spread. Article Figure 1 is the fallback.',
    ratio: '16 / 9',
  },
  preview: {
    id: 'alarms-preview',
    src: '/images/alarms-preview.webp',
    alt: 'One of the seven alarm prototypes',
    need: 'One clean photograph of a single alarm prototype — DeskCue’s cup or GlowCue’s light work best as a preview.',
    ratio: '4 / 3',
  },
  blocks: [
    {
      kind: 'lead',
      text: 'Around 35,000 people in Denmark live with Type 1 diabetes. Continuous glucose monitors keep them safe and alarm them at critical levels: in lectures, at dinner, asleep next to someone. We asked what an alarm could be instead.',
    },
    {
      kind: 'prose',
      label: 'The problem',
      heading: 'The alarm is necessary. Its modality is not.',
      paragraphs: [
        'CGM alarms warn through sound, vibration and notification, and they arrive whether or not the situation allows for them. Frequent or irrelevant alarms produce alarm fatigue, which leads people to ignore or switch off alarms that matter.',
        'Existing technology follows a biomedical logic: the user adapts to the device. Our participants live between that logic and two others, the bodily and the social, and the alarms are where the three collide.',
      ],
    },
    {
      kind: 'quote',
      text: 'If you happen to ignore it once, it just goes off at full volume across the lecture hall, and then you’re a bit like, oh, sorry.',
      attribution: 'Participant 1',
      original:
        'Hvis man lige kommer til at ignorere [alarmen] en enkelt gang, så kører den altså bare for fuld smæk ud i forelæsningssalen, og så er man sådan lidt hi, ej, ups, undskyld.',
    },
    {
      kind: 'quote',
      text: 'What I typically do in a lecture or at the theatre is turn the alarms off.',
      attribution: 'Participant 1',
      original:
        'Det jeg typisk gør når jeg er til forelæsning eller i teateret så slår jeg alarmerne fra.',
    },
    {
      kind: 'prose',
      label: 'Method',
      heading: 'Three future workshops, one participant at a time',
      paragraphs: [
        'We invited three women aged 20 to 30 who have lived with Type 1 diabetes for years and use CGM, and ran individual hour-long sessions in the future workshop format: critique, dream, design.',
        'The materials were built from existing research on the tensions of everyday life with CGM: statements to select from, symbols, situation cards, and prepared “what if” questions: what if you got no notifications? what if the technology were caring? what if it took account of the situation you were in?',
        'The sessions differed sharply. One participant worked visually and built an ideal future out of the symbols; another found radical imagining difficult and moved to dialogue, which produced concrete improvements to existing technology instead. Both were useful, and adapting mid-session was part of the method rather than a failure of it.',
      ],
    },
    {
      kind: 'figures',
      label: 'Workshop material',
      columns: 2,
      assets: [
        {
          id: 'alarms-workshop-material',
          src: '/images/alarms-workshop-material.webp',
          alt: 'Statements, symbols and situation cards used in the workshops',
          need: 'Photographs of the physical workshop material: statement cards, emoji/symbol set, situation images, the “what if” cards (process report Appendix 1).',
          ratio: '4 / 3',
        },
        {
          id: 'alarms-affinity',
          src: '/images/alarms-affinity.webp',
          alt: 'Affinity diagram of insights from the three sessions',
          need: 'Photograph of the affinity diagramming wall — post-its grouped under headings.',
          ratio: '4 / 3',
        },
      ],
    },
    {
      kind: 'prose',
      label: 'Analysis',
      heading: 'Three themes',
      paragraphs: [
        '(In)visibility. All three participants picked the same statement as most recognisable: that people do not understand the invisible work of keeping diabetes in check, and that it can feel lonely. But visibility cuts both ways: they also want the condition to take up as little room as possible.',
        'Context. Some situations make a piercing alarm impossible: a lecture hall, a theatre, a meeting. Since the alarms cannot be tuned to the situation, the phone gets switched off entirely, with real clinical risk.',
        'Modality. Being alerted is not the problem. Being alerted with sound, in front of everyone, is. That reframing is what the catalogue answers.',
      ],
    },
    {
      kind: 'quote',
      text: 'I’d rather it lit up instead of beeping. Then people can choose for themselves whether to ask about it.',
      attribution: 'Participant 2',
      original:
        'Jeg ville hellere have, at den lyste i stedet for at bippe, så kan folk selv vælge, om de vil spørge ind til det.',
    },
    {
      kind: 'list',
      label: 'Design criteria',
      items: [
        {
          term: 'Adaptable',
          detail: 'The design must fit the situations and contexts the user moves through.',
        },
        {
          term: 'Stress-reducing',
          detail: 'It must reduce stress and guilt by making alarms easier to handle day to day.',
        },
        {
          term: 'Affirming',
          detail:
            'It must acknowledge the daily work people with diabetes do, and avoid a black-and-white view of health.',
        },
        {
          term: 'Unremarkable',
          detail: 'Its form must not attract unnecessary attention or make the user feel different.',
        },
      ],
    },
    {
      kind: 'table',
      label: 'The outcome',
      heading: 'A catalogue of seven alarms',
      head: ['Alarm', 'Context', 'What it does'],
      rows: [
        ['NightCue', 'Home', 'Gentle waking that minimises disturbance to the people around you'],
        ['HomeCue', 'Home', 'Ambient light connected to smart-home technology, alarming across the home'],
        ['DeskCue', 'Work, school', 'Discreet portable alerting via LED light in a cup'],
        ['BloodCue', 'Work, school', 'A discreet desktop assistant that disturbs only the user'],
        ['FitCue', 'Sport', 'Portable vibration alerting that does not interrupt training'],
        ['GlowCue', 'Social', 'Ambient portable light that makes monitoring a shared, visible matter'],
        ['FeatherCue', 'Social', 'Decorative, discreet alerting via a puff of air, for quiet environments'],
      ],
    },
    {
      kind: 'prose',
      label: 'The catalogue',
      heading: 'Seven alarms, one visual system',
      paragraphs: [
        'Seven, not one. The catalogue deliberately refuses a universal solution: it treats context as something negotiated in practice, and offers significantly different designs so that different people, in different rooms, can find one that fits.',
        'The physical catalogue became more than documentation of the concepts. Its graphic language (colour, typography, composition and contextual imagery) brings seven very different alarm behaviours into one coherent design system. Each concept is presented in the situation it was designed for, making the catalogue itself part of how the design argument is communicated.',
        'GlowCue runs against the grain of the others. Where most concepts work by making the alarm less conspicuous, it makes monitoring visible and shared, holding onto the tension between visibility and invisibility that emerged in the workshops.',
      ],
    },
    {
      kind: 'figure',
      label: 'Catalogue overview',
      asset: {
        id: 'alarms-catalogue-overview',
        src: '/images/alarms-catalogue-overview.webp',
        alt: 'Overview of the visual catalogue presenting the seven context-based alarm concepts',
        need: 'Overview of the final alarm catalogue.',
        ratio: '2315 / 1638',
      },
      wide: true,
    },
    {
      kind: 'figures',
      label: 'Selected concepts',
      columns: 3,
      assets: [
        {
          id: 'alarms-concept-nightcue',
          src: '/images/alarms-concept-nightcue.webp',
          alt: 'NightCue catalogue concept for a home and sleep context',
          need: 'NightCue catalogue concept.',
          ratio: '2315 / 1638',
        },
        {
          id: 'alarms-concept-deskcue',
          src: '/images/alarms-concept-deskcue.webp',
          alt: 'DeskCue catalogue concept for work and study contexts',
          need: 'DeskCue catalogue concept.',
          ratio: '2315 / 1638',
        },
        {
          id: 'alarms-concept-glowcue',
          src: '/images/alarms-concept-glowcue.webp',
          alt: 'GlowCue catalogue concept for social contexts',
          need: 'GlowCue catalogue concept.',
          ratio: '2315 / 1638',
        },
      ],
    },
    {
      kind: 'figures',
      label: 'The physical catalogue',
      columns: 2,
      assets: [
        {
          id: 'alarms-cover',
          src: '/images/alarms-cover.webp',
          alt: 'Cover of the printed alarm catalogue',
          need: 'Photograph of the printed catalogue cover.',
          ratio: '793 / 814',
        },
        {
          id: 'alarms-catalogue-spread',
          src: '/images/alarms-catalogue-spread.webp',
          alt: 'Open spread from the printed alarm catalogue',
          need: 'Photograph of an open catalogue spread.',
          ratio: '1258 / 1072',
        },
      ],
    },
    {
      kind: 'prose',
      label: 'Prototyping',
      heading: 'From concepts to physical behaviour',
      paragraphs: [
        'The catalogue was not only a speculative presentation. Selected alarm principles were explored through physical computing and material prototyping, including light-based feedback and Arduino-driven experiments.',
        'Working physically made the modality question tangible: instead of asking only what an alarm should look like, we could explore how quietly it could enter a room, how attention might be directed without sound, and when an ambient signal becomes noticeable enough to act on.',
      ],
    },
    {
      kind: 'figures',
      label: 'Physical prototyping',
      columns: 3,
      assets: [
        {
          id: 'alarms-process-electronics-setup',
          src: '/images/alarms-process-electronics-setup.webp',
          alt: 'Electronics setup used while developing the alarm prototypes',
          need: 'Process photograph of the electronics setup.',
          ratio: '3 / 4',
        },
        {
          id: 'alarms-process-physical-computing',
          src: '/images/alarms-process-physical-computing.webp',
          alt: 'Physical computing alarm prototype in development',
          need: 'Process photograph of the physical computing prototype.',
          ratio: '3 / 4',
        },
        {
          id: 'alarms-process-light-prototype',
          src: '/images/alarms-process-light-prototype.webp',
          alt: 'Light-based alarm prototype in development',
          need: 'Process photograph of the light prototype.',
          ratio: '3 / 4',
        },
      ],
    },
    {
      kind: 'prose',
      label: 'Evaluation',
      heading: 'The Expo, and the objections',
      paragraphs: [
        'We showed the catalogue at the ITU Expo alongside an interactive prototype of one alarm, collected written feedback from visitors, and did a semi-structured walkthrough of the catalogue with one of our co-design participants.',
        'What worked: the invisibility of the alarms, which matched our participant’s wish to remain invisibly ill, and the situational adaptation, which she thought could genuinely reduce stress. DeskCue was singled out: “it would be a hit at my work at the Danish Diabetes Association”. Expo visitors read the approach as ambient and slow technology.',
        'What did not: constant visual signals risk becoming a new layer of stress, and some designs have a learning curve. How would FeatherCue distinguish high from low blood sugar? Visitors also asked whether people would remember to bring the alarms with them, and whether so many options would overwhelm. We reported those objections rather than resolving them; the catalogue is a proof of concept and a frame for further work, not a finished product.',
      ],
    },
    {
      kind: 'credits',
      role: 'I contributed throughout the participatory design process: workshop planning and facilitation, analysis and synthesis of participant insights, ideation, development of alternative alarm concepts, physical prototyping, and documentation of the final design proposals.',
      context:
        'Group of four: Mai Engelbrecht Pilegaard, Emily Rose Shereen Filsoof, Jacob Tærsker Adelholm and Amalie Christine Bagger. Advanced Design Processes, IT University of Copenhagen, December 2024.',
      methods: [
        'Interaction criticism of existing CGM alarms',
        'Future workshops (critique, dream, design) with three participants',
        'Affinity diagramming and ideation',
        'Design programme and design experiments',
        'Sketching and physical prototyping',
        'Exhibition evaluation and semi-structured walkthrough',
      ],
      tools: ['Physical prototyping materials', 'Printed catalogue', 'Sketching', 'Interviews'],
    },
  ],
};
