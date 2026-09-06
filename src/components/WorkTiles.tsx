'use client';

import Link from 'next/link';
import type { PointerEvent } from 'react';
import type { Project } from '@/data/types';
import styles from './WorkTiles.module.css';

/**
 * The homepage work grid: one tile per project, tilting under the pointer with
 * an accent plate that wipes up on hover. Each tile is a real link to
 * /work/[slug] — the case pages stay the shareable, indexable version.
 */
export default function WorkTiles({ projects }: { projects: Project[] }) {
  const tilt = (event: PointerEvent<HTMLAnchorElement>) => {
    const tile = event.currentTarget;
    const inner = tile.querySelector<HTMLElement>('[data-inner]');
    if (!inner) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = tile.getBoundingClientRect();
    const nx = (event.clientX - r.left) / r.width - 0.5;
    const ny = (event.clientY - r.top) / r.height - 0.5;
    inner.style.transform =
      'rotateY(' + (nx * 9).toFixed(2) + 'deg) rotateX(' + (-ny * 9).toFixed(2) + 'deg) translateZ(14px)';
  };

  const reset = (event: PointerEvent<HTMLAnchorElement>) => {
    const inner = event.currentTarget.querySelector<HTMLElement>('[data-inner]');
    if (inner) inner.style.transform = 'none';
  };

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className={styles.tile}
          data-cursor="Open"
          onPointerMove={tilt}
          onPointerLeave={reset}
        >
          <span className={styles.fill} aria-hidden="true" />
          <span className={styles.inner} data-inner>
            <span className={styles.top}>
              <span className={styles.index}>{project.index}</span>
              <span className={styles.disciplines}>
                {project.disciplines.join(' · ')} · {project.year}
              </span>
            </span>
            <span className={styles.text}>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.subtitle}>{project.subtitle}</span>
              <span className={styles.read}>Open case →</span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
