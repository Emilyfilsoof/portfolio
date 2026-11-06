import type { ClientShot } from '@/data/client-work';
import { clientWork } from '@/data/client-work';
import EmbedFrame from './EmbedFrame';
import styles from './ClientWork.module.css';

/** A screenshot of a live site in a minimal browser frame. */
function Shot({ shot, eager = false }: { shot: ClientShot; eager?: boolean }) {
  return (
    <figure className={styles.shot}>
      <div className={styles.frame}>
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dots}>
            <span />
            <span />
            <span />
          </span>
          <span className={styles.url}>{shot.url}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.img}
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {shot.caption ? <figcaption className={styles.caption}>{shot.caption}</figcaption> : null}
    </figure>
  );
}

/**
 * Client work: live sites, shown on a dark ground so it reads as a separate
 * body of work from the research and studio projects below it.
 */
export default function ClientWork() {
  return (
    <section className={styles.wrap} id="client-work" data-bg="#0c0c0c" data-ink="#f4f2ec">
      <div className={`page ${styles.inner}`}>
        <header className={styles.head}>
          <p className={styles.label}>Client work</p>
          <h2 className={styles.headline}>Live sites I designed and built</h2>
          <p className={styles.note}>
            Screenshots from the sites as they run today, and the features I built.
          </p>
        </header>

        {clientWork.map((project) => {
          const [main, ...rest] = project.shots;
          return (
            <article key={project.id} className={styles.project} aria-labelledby={`${project.id}-title`}>
              <div className={styles.top}>
                <span className={styles.index}>{project.index}</span>
                <span className={styles.client}>
                  {project.client}
                  {project.via ? <span className={styles.via}> · {project.via}</span> : null}
                </span>
                <span className={styles.live}>
                  <span className={styles.liveDot} aria-hidden="true" />
                  Live
                </span>
              </div>

              <h3 className={styles.title} id={`${project.id}-title`}>
                {project.title}
              </h3>

              <div className={styles.body}>
                <div className={styles.text}>
                  <p className={styles.summary}>{project.summary}</p>

                  <dl className={styles.meta}>
                    {project.meta.map((item) => (
                      <div key={item.term} className={styles.metaRow}>
                        <dt>{item.term}</dt>
                        <dd>{item.detail}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className={styles.builtLabel}>What I built</p>
                  <ol className={styles.built}>
                    {project.built.map((item, i) => (
                      <li key={item.term}>
                        <span className={styles.builtNo}>{String(i + 1).padStart(2, '0')}</span>
                        <span>
                          <span className={styles.builtTerm}>{item.term}</span>
                          <span className={styles.builtDetail}>{item.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ol>

                  <a className={styles.visit} href={project.href} target="_blank" rel="noreferrer" data-mag>
                    Visit {project.linkLabel} ↗
                  </a>
                </div>

                <div className={styles.mainShot}>
                  <Shot shot={main} />
                </div>
              </div>

              {rest.length ? (
                <div className={styles.shots} data-count={rest.length}>
                  {rest.map((shot) => (
                    <Shot key={shot.src} shot={shot} />
                  ))}
                </div>
              ) : null}

              {project.embed ? (
                <div className={styles.embed}>
                  <div className={styles.embedHead}>
                    <p className={styles.embedLabel}>
                      <span className={styles.liveDot} aria-hidden="true" />
                      {project.embed.label}
                    </p>
                    <p className={styles.embedTitle}>{project.embed.title}</p>
                    <p className={styles.embedNote}>{project.embed.note}</p>
                  </div>
                  <div className={styles.embedFrame}>
                    <EmbedFrame
                      className={styles.iframe}
                      src={project.embed.src}
                      title={`${project.title}: ${project.embed.title}`}
                    />
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
