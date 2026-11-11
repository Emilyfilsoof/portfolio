import type { CSSProperties } from 'react';
import Link from 'next/link';
import Scramble from '@/components/Scramble';
import { clientWork } from '@/data/client-work';
import styles from './ClientWork.module.css';

/**
 * Client work on the homepage: one calm card per live site. Each card is a
 * single screenshot on a coloured ground with a two-line caption; everything
 * else lives on /client/[id].
 */
export default function ClientWork({
  label = 'Client work',
  note = 'Live sites · Click to see what I built',
}: { label?: string; note?: string } = {}) {
  return (
    <section className={`page ${styles.wrap}`} id="client-work" data-bg="#f4f2ec" data-ink="#0c0c0c">
      <div className={styles.head}>
        <Scramble className="label label-ink" text={label} />
        <p className={styles.note}>{note}</p>
      </div>

      <div className={styles.grid}>
        {clientWork.map((project) => {
          const cover = project.shots[0];
          return (
            <Link
              key={project.id}
              href={`/client/${project.id}`}
              className={styles.card}
              data-cursor="Open"
            >
              <span className={styles.ground} style={{ '--ground': project.ground } as CSSProperties}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.shot}
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className={styles.caption}>
                <span className={styles.title}>{project.title}</span>
                <span className={styles.year}>{project.year}</span>
                <span className={styles.roles}>{project.roles}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
