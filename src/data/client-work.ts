/**
 * Client work: live sites designed and built for clients, kept apart from the
 * research and studio projects in ./projects. Each entry is shown on the
 * homepage as screenshots of the shipped site plus the features I built.
 *
 * To add a site: put screenshots in /public/images/client/ and add an entry.
 */

export type ClientShot = {
  src: string;
  alt: string;
  /** Shown under the frame. */
  caption?: string;
  /** Shown in the browser bar of the frame. */
  url: string;
  width: number;
  height: number;
};

export type ClientProject = {
  id: string;
  index: string;
  client: string;
  /** Context after the client name, e.g. 'via Duus Partners'. */
  via?: string;
  title: string;
  href: string;
  linkLabel: string;
  summary: string;
  meta: { term: string; detail: string }[];
  built: { term: string; detail: string }[];
  /** First shot is the large one. */
  shots: ClientShot[];
  /** A live, clickable piece of the work, served from /public/embeds. */
  embed?: { src: string; title: string; label: string; note: string };
};

export const clientWork: ClientProject[] = [
  {
    id: 'vinge',
    index: 'C/01',
    client: 'DSB',
    via: 'via Duus Partners',
    title: 'Vinge Togværksted',
    href: 'https://vingetogvaerksted.dk',
    linkLabel: 'vingetogvaerksted.dk',
    summary:
      "DSB's public project site for the new S-train depot in Vinge. Residents follow the local plan, the environmental impact assessment, public meetings and the timeline towards 2032 in one place.",
    meta: [
      {
        term: 'Role',
        detail: 'Information architecture, UX, visual design, implementation',
      },
      { term: 'Built in', detail: 'Figma, WordPress' },
    ],
    built: [
      {
        term: 'Structure',
        detail:
          'News, hearings, the timeline and the environmental assessment organised into one public site.',
      },
      {
        term: 'Visual design',
        detail: 'Glass panels over aerial renderings, and an image card for each environmental theme.',
      },
      {
        term: 'Implementation',
        detail: 'Built in WordPress from my Figma designs and taken through to launch.',
      },
    ],
    shots: [
      {
        src: '/images/client/dsb-hero.jpg',
        alt: 'Front page of vingetogvaerksted.dk: a glass panel with the title Togværkstedet i Vinge over an aerial view of the area.',
        url: 'vingetogvaerksted.dk',
        width: 1068,
        height: 747,
      },
      {
        src: '/images/client/dsb-impact.jpg',
        alt: 'The environmental impact section with image cards for soil and for light, air and climate.',
        caption: 'Environmental impact assessment, one card per theme',
        url: 'vingetogvaerksted.dk/#miljoe',
        width: 930,
        height: 700,
      },
    ],
  },
  {
    id: 'green-log',
    index: 'C/02',
    client: 'Beregn Handling',
    via: 'via Duus Partners',
    title: 'The Green Log',
    href: 'https://beregnhandling.nu/da/thegreenlog',
    linkLabel: 'beregnhandling.nu',
    summary:
      'A digital tool that makes sustainability work concrete: more than 100 actions sorted into four phases, so an organisation can see where to start and log what it has done.',
    meta: [
      {
        term: 'Role',
        detail: 'Concept, user flows, landing page, onboarding, prototype',
      },
      { term: 'Built in', detail: 'Figma, Drupal, JavaScript' },
    ],
    built: [
      {
        term: 'Landing page',
        detail:
          'The four phases as one visual system, and action cards that show area and phase at a glance.',
      },
      {
        term: 'Onboarding quiz',
        detail:
          'Three questions about size, maturity and themes lead to three recommended first actions and a sign-up link prefilled with the answers.',
      },
      {
        term: 'Built to drop in',
        detail:
          'One self-contained block of HTML, CSS and JavaScript that mounts in Drupal and scales a fixed 375px layout to any phone.',
      },
    ],
    shots: [
      {
        src: '/images/client/greenlog-hero.jpg',
        alt: 'The Green Log landing page: a dark green hero with the headline Flyt fokus fra at måle fortiden til at handle for fremtiden next to a laptop showing the action board.',
        url: 'beregnhandling.nu/da/thegreenlog',
        width: 1076,
        height: 682,
      },
      {
        src: '/images/client/greenlog-phases.jpg',
        alt: 'Three green cards for the phases Frø, Spire and Plante, connected like puzzle pieces.',
        caption: 'Four phases, from first steps to setting the standard',
        url: 'beregnhandling.nu/da/thegreenlog',
        width: 895,
        height: 715,
      },
      {
        src: '/images/client/greenlog-actions.jpg',
        alt: 'A carousel of action cards with photos, area and phase tags, such as LED-belysning and Kødfri dag.',
        caption: 'Action cards tagged by area and phase',
        url: 'beregnhandling.nu/da/thegreenlog',
        width: 895,
        height: 767,
      },
    ],
    embed: {
      src: '/embeds/greenlog-quiz.html',
      label: 'Try it',
      title: 'The onboarding quiz I designed and coded',
      note: 'Live code, launching on beregnhandling.nu. Click through it.',
    },
  },
  {
    id: 'bkn',
    index: 'C/03',
    client: 'Bæredygtigt Kulturliv NU',
    title: 'Bæredygtigt Kulturliv NU',
    href: 'https://www.baeredygtigtkulturliv.nu',
    linkLabel: 'baeredygtigtkulturliv.nu',
    summary:
      'The website of an organisation that helps the Danish arts and culture sector with the green transition, with tools, events, projects and news from the international Theatre Green Book network.',
    meta: [
      { term: 'Role', detail: 'Information architecture, web design, CMS, ongoing maintenance' },
      { term: 'Built in', detail: 'Webflow' },
    ],
    built: [
      {
        term: 'New structure',
        detail: 'Redesigned the site and its CMS around a new information architecture.',
      },
      {
        term: 'TGB news',
        detail:
          'A CMS collection and landing page for the Theatre Green Book newsletters, sortable by date and styled to match the rest of the site.',
      },
      {
        term: 'Running the site',
        detail: 'Publish and maintain content in the CMS as part of my role as digital designer.',
      },
    ],
    shots: [
      {
        src: '/images/client/bkn-hero.jpg',
        alt: 'Front page of baeredygtigtkulturliv.nu: the headline Den indre bæredygtighed og den ydre i balance next to a round photo of people gathered in a courtyard.',
        url: 'baeredygtigtkulturliv.nu',
        width: 1068,
        height: 745,
      },
      {
        src: '/images/client/bkn-tgb-news.jpg',
        alt: 'The TGB nyheder page: a sort menu and a grid of newsletter cards with number, title, teaser and date on a dark green ground.',
        caption: 'TGB news: a CMS collection with sorting',
        url: 'baeredygtigtkulturliv.nu/tgb-nyheder',
        width: 1068,
        height: 737,
      },
      {
        src: '/images/client/bkn-latest-news.jpg',
        alt: 'The latest news section on the front page, with a large Theatre Green Book card and two smaller news cards.',
        caption: 'Latest news on the front page, fed by the CMS',
        url: 'baeredygtigtkulturliv.nu',
        width: 1068,
        height: 720,
      },
    ],
  },
  {
    id: 'hairholic',
    index: 'C/04',
    client: 'Hairholic',
    via: 'Side project',
    title: 'Hairholic',
    href: 'https://hairholic.co',
    linkLabel: 'hairholic.co',
    summary:
      'Webshop for a Copenhagen hair brand selling raw hair, wigs and lace products. The shop is built around real client looks, so customers can see the hair on people before they buy.',
    meta: [
      { term: 'Role', detail: 'Design and development' },
      { term: 'Built in', detail: 'Shopify, Liquid, CSS, JavaScript' },
    ],
    built: [
      {
        term: 'Shop the look',
        detail:
          'A custom Liquid section where client videos carry a product chip with price. Tap a look and a modal plays the video next to the exact products.',
      },
      {
        term: 'Client looks page',
        detail: 'Every look on one page, with next and previous, sound and share inside the modal.',
      },
      {
        term: 'Social proof',
        detail: "Client reviews styled as Instagram messages, and follow cards for the brand's channels.",
      },
    ],
    shots: [
      {
        src: '/images/client/hairholic-shop-the-look.jpg',
        alt: 'The See it. Love it. Shop it. section: a row of client videos, each with a product chip showing name and price.',
        url: 'hairholic.co',
        width: 1068,
        height: 560,
      },
      {
        src: '/images/client/hairholic-look-modal.jpg',
        alt: 'The look modal: a client video on the left and the products seen in the look on the right, with a Shop now button.',
        caption: 'Tap a look: video and products side by side',
        url: 'hairholic.co/pages/shop-clients-looks',
        width: 760,
        height: 675,
      },
      {
        src: '/images/client/hairholic-reviews.jpg',
        alt: 'Three client reviews designed as Instagram message cards under the heading Loved by our clients.',
        caption: 'Reviews styled as Instagram messages',
        url: 'hairholic.co',
        width: 1068,
        height: 460,
      },
    ],
  },
];
