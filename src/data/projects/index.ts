import type { Project } from '../types';
import { voresSide } from './vores-side';
import { breathingTheCity } from './breathing-the-city';
import { diabetesAlarms } from './diabetes-alarms';
import { ambientMotionPainter } from './ambient-motion-painter';

/**
 * Order here is the order on the homepage and the /work index.
 *
 * Adding a project (e.g. The Green Log):
 *   1. Copy any file in this folder as a starting point.
 *   2. Fill in metadata, cover, preview and blocks. Only the block kinds in
 *      ../types.ts are available — the case template renders them all.
 *   3. Import it below and add it to the array. Nothing else needs to change:
 *      routes, the index, the homepage and prev/next links are all derived.
 */
export const projects: Project[] = [
  voresSide,
  breathingTheCity,
  diabetesAlarms,
  ambientMotionPainter,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNeighbours(slug: string): { prev: Project; next: Project } | undefined {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return undefined;
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}

/** Every asset the site expects, for the manifest page and the README. */
export function allAssets() {
  return projects.flatMap((project) => {
    const fromBlocks = project.blocks.flatMap((block) => {
      if (block.kind === 'figure') return [block.asset];
      if (block.kind === 'figures') return block.assets;
      return [];
    });
    return [project.cover, project.preview, ...fromBlocks].map((asset) => ({
      project: project.title,
      slug: project.slug,
      asset,
    }));
  });
}
