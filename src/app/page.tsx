import { Fragment } from 'react';
import Marquee from '@/components/Marquee';
import WorkTiles from '@/components/WorkTiles';
import WorkedWith from '@/components/WorkedWith';
import ClientWork from '@/components/ClientWork';
import { clientWork } from '@/data/client-work';
import Scramble from '@/components/Scramble';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { about, heroKicker, heroMeta, heroName, manifest, positioning } from '@/data/site-v4';
import styles from './page.module.css';

/** Words stagger in after the intro plate lifts; see globals.css .word */
function Words({ text, offset = 0, mark = false }: { text: string; offset?: number; mark?: boolean }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <span className="word" style={{ transitionDelay: (offset + i) * 45 + 'ms' }}>
            {mark ? <span className={styles.mark}>{word}</span> : word}
          </span>{' '}
        </Fragment>
      ))}
    </>
  );
}

export default function HomePage() {
  const beforeWords = manifest.before.split(' ').length;

  return (
    <>
      <section className={`page ${styles.hero}`} data-bg="#f4f2ec" data-ink="#0c0c0c">
        <div className={styles.heroTop}>
          <p className={styles.name}>
            {heroName[0]}
            <br />
            {heroName[1]}
          </p>
          <Scramble className={styles.role} text={heroKicker} />
          <p className={styles.available}>
            <span className={styles.chip}>Available now</span>
          </p>
        </div>

        <h1 className={`display ${styles.manifest}`}>
          <Words text={manifest.before} />
          {manifest.highlight.map((word, i) => (
            <Fragment key={word}>
              <Words text={word} offset={beforeWords + i} mark />
            </Fragment>
          ))}
          <Words text={manifest.after} offset={beforeWords + manifest.highlight.length} />
        </h1>

        <div className={styles.heroFoot}>
          <div className={styles.heroFootText}>
            <p className={styles.positioning}>{positioning}</p>
            <p className={styles.heroMeta}>{heroMeta}</p>
          </div>
          <p className={styles.scrollCue}>
            <span className={styles.dot} aria-hidden="true" />
            Scroll · {String(clientWork.length).padStart(2, '0')} live sites ·{' '}
            {String(projects.length).padStart(2, '0')} projects
          </p>
        </div>
      </section>

      <Marquee />

      <ClientWork />

      <section className={`page ${styles.work}`} id="work" data-bg="#f4f2ec" data-ink="#0c0c0c">
        <div className={styles.workHead}>
          <Scramble className="label label-ink" text="Research & studio projects" />
          <p className={styles.workNote}>From my MSc at ITU · Click a tile to open the case</p>
        </div>
        <WorkTiles projects={projects} />
      </section>

      <WorkedWith />

      <section className={`page ${styles.about}`} id="about" data-bg="#f4f2ec" data-ink="#0c0c0c">
        <Scramble className="label label-ink" text="About" />

        <h2 className={styles.aboutHeadline}>{about.headline}</h2>

        <div className={styles.aboutRow}>
          <div className={styles.portraitCol}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.portrait}
              src="/images/emily-portrait.jpg"
              alt={profile.name}
              width={600}
              height={750}
            />
            <div className={styles.nameStack}>
              <p className={styles.nameLine}>Emily</p>
              <p className={`${styles.nameLine} ${styles.nameLine2}`}>Rose Shereen</p>
              <p className={`${styles.nameLine} ${styles.nameLine3}`}>Filsoof</p>
            </div>
          </div>
          <div className={styles.aboutText}>
            <p className={styles.aboutLead}>{about.lead}</p>
            <p className={styles.aboutBody}>{about.intro}</p>
          </div>
        </div>

        <div className={styles.aboutCols}>
          {about.columns.map((column) => (
            <div key={column.label} className={styles.aboutCol}>
              <p className={styles.aboutColLabel}>{column.label}</p>
              {column.body.map((paragraph) => (
                <p key={paragraph} className={styles.aboutBody}>
                  {paragraph}
                </p>
              ))}
              {column.statement ? <p className={styles.aboutStatement}>{column.statement}</p> : null}
            </div>
          ))}
        </div>

        <p className={styles.aboutClosing}>{about.closing}</p>
      </section>
    </>
  );
}
