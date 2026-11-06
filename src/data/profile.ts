/**
 * Factual profile data. Source: EmilyFilsoof_CV_engelsk.pdf (CV 2026).
 * Edit here — the homepage, about page and footer all read from this file.
 */

export const profile = {
  name: 'Emily Rose Shereen Filsoof',
  shortName: 'Emily Filsoof',
  role: 'Product Designer',
  kicker: 'Product designer · UX · AI',
  positioning: 'Research, interaction, and the build.',
  location: 'Copenhagen, Denmark',
  availability: 'Open to new opportunities in digital & product design, AI & technology',
  intro:
    'Product designer with an MSc in Digital Design and Interactive Technologies from the IT University of Copenhagen and a background in Information Studies. I work across UX, interaction design and web, from research and concept development through to finished design and implementation.',
  aboutParagraphs: [
    'I work between design and technology. My projects move from research and framing into interaction, prototyping and implementation, whether the outcome is an interface, a physical artefact or a coded system.',
    'The four projects in this portfolio show different parts of that practice: digital product and UX research, Research through Design and embodied interaction, participatory and conceptual design, and creative coding. Alongside my studies, I worked across three organisations, designing and building websites in Figma, Webflow and WordPress and taking work through to launch.',
    'AI is a normal part of my practice: in the design process itself, and as something I want to understand as material for digital products and for the organisations that run them.',
  ],
  contact: {
    email: 'emilysfilsoof@icloud.com',
    phone: '23 83 74 88',
    phoneHref: '+4523837488',
    linkedin: 'linkedin.com/in/emilyrosefilsoof',
    linkedinHref: 'https://www.linkedin.com/in/emilyrosefilsoof',
  },
  cv: {
    href: '/cv/EmilyFilsoof_CV_2026.pdf',
    label: 'CV 2026 (PDF)',
  },
  disciplines: [
    'UX/UI design',
    'Product design',
    'Interaction design',
    'User research & testing',
    'Concept development',
    'Information architecture',
    'Web design',
    'Visual communication',
    'AI-assisted design & prototyping',
    'AI & digital transformation',
  ],
  tools: [
    'Figma',
    'Webflow',
    'WordPress',
    'HTML/CSS',
    'JavaScript',
    'Python',
    'InDesign',
    'Photoshop',
    'Google Analytics',
  ],
  languages: ['Danish — native', 'English — fluent'],
  education: [
    {
      period: '2024 — 2026',
      institution: 'IT University of Copenhagen',
      qualification: 'MSc in Digital Design and Interactive Technologies',
      note: 'Focus on UX, interaction design and AI',
    },
    {
      period: '2021 — 2024',
      institution: 'Aarhus University',
      qualification: 'BA in Information Studies',
    },
  ],
  experience: [
    {
      period: 'Mar 2026 to present',
      organisation: 'Duus Partners P/S',
      title: 'Digital Development Consultant (promoted from Student Assistant, Mar to Aug 2026)',
      place: 'Copenhagen',
      summary:
        'Project-based digital design, web design and visual communication for a range of clients and projects.',
      points: [
        "Design and build DSB's Vinge og Værksted website, from structure and design in Figma through to launch",
        'Design and build The Green Log, a digital tool offering 120+ concrete sustainability actions',
        'Build and maintain websites in WordPress and Webflow, refining designs through feedback and carrying them into implementation',
      ],
    },
    {
      period: 'Feb 2025 to present',
      organisation: 'Bæredygtigt Kulturliv NU',
      title: 'Digital Designer (promoted from Student Assistant, Feb 2025 to Aug 2026)',
      place: 'Copenhagen',
      summary:
        "Digital design, visual communication and web across the organisation's projects and platforms.",
      points: [
        "Design, build and maintain the organisation's websites in Webflow",
        'Structure digital content in the CMS with a focus on information architecture and interactions',
        'Develop graphic and visual assets for digital platforms, events and communication',
      ],
    },
    {
      period: 'Sep 2022 — Jun 2024',
      organisation: 'People-IT',
      title: 'Student Assistant — Digital Design & Communication',
      place: 'Aarhus',
      summary: '',
      points: [
        'Design and build the company website, owning web design, visual identity and user experience',
        'Produce graphic material and visual content for social media',
        'Maintain and qualify freelance IT consultant profiles in the company database, including through direct contact with the consultants',
      ],
    },
  ],
} as const;

export type Profile = typeof profile;
