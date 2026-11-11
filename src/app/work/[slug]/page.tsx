import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMeta } from '../../meta';
import CaseBlocks from '@/components/CaseBlocks';
import { BackLink, CarryLink } from '@/components/OriginLink';
import Figure from '@/components/Figure';
import { getNeighbours, getProject, projects } from '@/data/projects';
import styles from './case.module.css';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return pageMeta({ title: project.title, description: project.summary, path: `/work/${project.slug}` });
}

export default function CasePage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const neighbours = getNeighbours(project.slug);

  // The opening lead sits above the cover image, as in the design.
  const lead = project.blocks[0]?.kind === 'lead' ? project.blocks.slice(0, 1) : [];
  const rest = project.blocks.slice(lead.length);
  const dark = Boolean(project.field.bg);

  return (
    <article
      className={styles.case}
      style={
        {
          '--field': project.field.accent,
          '--field-bg': project.field.bg ?? 'var(--paper)',
          '--field-ink': project.field.ink ?? 'var(--ink)',
        } as CSSProperties
      }
      data-tone={dark ? 'dark' : 'light'}
      data-bg={project.field.bg ?? '#f4f2ec'}
      data-ink={project.field.ink ?? '#0c0c0c'}
    >
      <div className={styles.bar}>
        <p className={styles.barLabel}>
          {project.index} · {project.title}
        </p>
        <BackLink href="/#work" anchor="more" className={styles.barClose}>
          Close ×
        </BackLink>
      </div>

      <div className={styles.column}>
        <h1 className={styles.title}>{project.subtitle}</h1>
        {lead.length > 0 && <CaseBlocks blocks={lead} />}
        <Figure asset={project.cover} priority />

        <CaseBlocks blocks={rest} />

        <div className={styles.end}>
          <BackLink href="/#work" anchor="more" className={styles.back} originLabel>
            Back to the work
          </BackLink>
          {neighbours && (
            <CarryLink href={`/work/${neighbours.next.slug}`} className={styles.nextLink}>
              <span className={styles.nextLabel}>Next project</span>
              <span className={styles.nextTitle}>{neighbours.next.title}</span>
            </CarryLink>
          )}
        </div>
      </div>
    </article>
  );
}
