import Link from 'next/link';
import { alsoWorkedWith, workedWith } from '@/data/site-v4';
import styles from './WorkedWith.module.css';

/**
 * The two organisations worth naming in display type, on the cyan ground.
 * Full-bleed, so it does not take the page's max-width.
 */
export default function WorkedWith() {
  return (
    <section className={styles.wrap} data-bg="#00e5ff" data-ink="#0c0c0c">
      <p className="label label-ink">Worked with</p>
      <div className={styles.grid}>
        {workedWith.map((org: { name: string; note?: string; href?: string }) => {
          const inner = (
            <>
              <p className={styles.name}>{org.name}</p>
              {org.note ? <p className={styles.note}>{org.note}</p> : null}
            </>
          );
          return org.href ? (
            <Link key={org.name} href={org.href} className={styles.cell} data-cursor="Case">
              {inner}
            </Link>
          ) : (
            <div key={org.name} className={styles.cell}>
              {inner}
            </div>
          );
        })}
      </div>
      <p className={styles.also}>{alsoWorkedWith.join(' · ')}</p>
    </section>
  );
}
