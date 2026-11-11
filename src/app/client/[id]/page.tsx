import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMeta } from '../../meta';
import EmbedFrame from '@/components/EmbedFrame';
import { BackLink, CarryLink } from '@/components/OriginLink';
import { clientWork } from '@/data/client-work';
import type { ClientShot } from '@/data/client-work';
import caseStyles from '../../work/[slug]/case.module.css';
import styles from './client.module.css';

type Params = { params: { id: string } };

const get = (id: string) => clientWork.find((p) => p.id === id);

export function generateStaticParams() {
  return clientWork.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = get(params.id);
  if (!project) return {};
  const cover = project.shots[0];
  return pageMeta({
    title: project.title,
    description: project.summary,
    path: `/client/${project.id}`,
    image: { url: cover.src, width: cover.width, height: cover.height, alt: cover.alt },
  });
}

/** A screenshot centred on the site's colour, always the same frame. */
function Plate({ shot, wide = false }: { shot: ClientShot; wide?: boolean }) {
  return (
    <figure className={styles.figure}>
      <div className={`${styles.plate} ${wide ? styles.plateWide : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.img}
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={wide ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {shot.caption ? <figcaption className={styles.caption}>{shot.caption}</figcaption> : null}
    </figure>
  );
}

export default function ClientCasePage({ params }: Params) {
  const project = get(params.id);
  if (!project) notFound();
  const i = clientWork.indexOf(project);
  const next = clientWork[(i + 1) % clientWork.length];
  const [cover, ...rest] = project.shots;

  return (
    <article
      className={caseStyles.case}
      style={{ '--ground': project.ground } as CSSProperties}
      data-bg="#f4f2ec"
      data-ink="#0c0c0c"
    >
      <div className={caseStyles.bar}>
        <p className={caseStyles.barLabel}>
          {project.index} · Client work
        </p>
        <BackLink href="/#client-work" anchor="shipped" className={caseStyles.barClose}>
          Close ×
        </BackLink>
      </div>

      <div className={caseStyles.column}>
        <header className={styles.head}>
          <h1 className={caseStyles.title}>{project.title}</h1>
          <dl className={styles.meta}>
            <div>
              <dt>Client</dt>
              <dd>
                {project.client}
                {project.via ? <span className={styles.muted}> · {project.via}</span> : null}
              </dd>
            </div>
            {project.meta.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.detail}</dd>
              </div>
            ))}
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
        </header>

        <Plate shot={cover} wide />

        <div className={styles.intro}>
          <p className={caseStyles.summary}>{project.summary}</p>
          <a className={styles.visit} href={project.href} target="_blank" rel="noreferrer" data-mag>
            Visit {project.linkLabel} ↗
          </a>
        </div>

        <section className={styles.built} aria-label="What I built">
          <p className="label label-ink">What I built</p>
          <ol className={styles.builtList}>
            {project.built.map((b, n) => (
              <li key={b.term}>
                <span className={styles.builtNo}>{String(n + 1).padStart(2, '0')}</span>
                <span className={styles.builtTerm}>{b.term}</span>
                <span className={styles.builtDetail}>{b.detail}</span>
              </li>
            ))}
          </ol>
        </section>

        {project.embed ? (
          <section className={styles.embed} aria-label={project.embed.title}>
            <div className={styles.embedHead}>
              <p className="label label-ink">{project.embed.label}</p>
              <p className={styles.embedTitle}>{project.embed.title}</p>
              <p className={styles.embedNote}>{project.embed.note}</p>
            </div>
            <div className={styles.embedPlate}>
              <EmbedFrame className={styles.iframe} src={project.embed.src} title={project.embed.title} />
            </div>
          </section>
        ) : null}

        {rest.length ? (
          <div className={styles.gallery}>
            {rest.map((shot) => (
              <Plate key={shot.src} shot={shot} />
            ))}
          </div>
        ) : null}

        <div className={caseStyles.end}>
          <BackLink href="/#client-work" anchor="shipped" className={caseStyles.back} originLabel>
            Back to the work
          </BackLink>
          <CarryLink href={`/client/${next.id}`} className={caseStyles.nextLink}>
            <span className={caseStyles.nextLabel}>Next site</span>
            <span className={caseStyles.nextTitle}>{next.title}</span>
          </CarryLink>
        </div>
      </div>
    </article>
  );
}
