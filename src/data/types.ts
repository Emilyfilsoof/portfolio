/**
 * Content model for the portfolio.
 *
 * A project is metadata plus an ordered list of blocks. The case template
 * renders whichever blocks a project declares, so no two cases have to share
 * the same structure — and a new project (e.g. The Green Log) is added by
 * writing one data file, not by touching the layout.
 */

export type Asset = {
  /** Stable id — also the expected filename under /public/images/<project>/ */
  id: string;
  /** Path under /public. Leave undefined to render a labelled placeholder. */
  src?: string;
  alt: string;
  caption?: string;
  /** Exactly which original file belongs here. Shown inside the placeholder. */
  need: string;
  /** CSS aspect-ratio, e.g. '16 / 9', '3 / 4'. Defaults to '4 / 3'. */
  ratio?: string;
  /** Dark placeholder ground, for work made on black. */
  tone?: 'dark';
  /** Optional presentation treatment for documentary/diagram assets that must remain fully visible. */
  presentation?: 'default' | 'contained';
  /** Height of a contained image frame in CSS pixels on desktop. */
  frameHeight?: number;
};

export type Block =
  | { kind: 'lead'; text: string }
  | { kind: 'statement'; text: string; attribution?: string }
  | { kind: 'prose'; label?: string; heading?: string; paragraphs: string[] }
  | {
      kind: 'split';
      label?: string;
      left: { label: string; paragraphs: string[] };
      right: { label: string; paragraphs: string[] };
    }
  | { kind: 'figure'; label?: string; asset: Asset; wide?: boolean }
  | { kind: 'figures'; label?: string; columns: 2 | 3; assets: Asset[]; layout?: 'grid' | 'stack' }
  | { kind: 'quote'; text: string; attribution: string; original?: string }
  | { kind: 'list'; label: string; heading?: string; items: { term: string; detail: string }[] }
  | { kind: 'table'; label: string; heading?: string; head: string[]; rows: string[][] }
  | { kind: 'code'; label: string; caption?: string; lines: string[] }
  | { kind: 'link'; label: string; href: string; text: string; note?: string }
  | {
      kind: 'credits';
      role: string;
      team?: string[];
      context: string;
      methods: string[];
      tools: string[];
    };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  context: string;
  /** Two to four disciplines, shown on the index and the case cover. */
  disciplines: string[];
  /** One line for the index and the homepage. */
  summary: string;
  /** Meta column on the case page. */
  meta: { term: string; detail: string }[];
  /** Per-case colour field. Only these three variables may change. */
  field: { accent: string; bg?: string; ink?: string };
  cover: Asset;
  /** Small preview used on the homepage and /work index. */
  preview: Asset;
  blocks: Block[];
};
