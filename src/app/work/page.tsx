import type { Metadata } from 'next';
import WorkTiles from '@/components/WorkTiles';
import ClientWork from '@/components/ClientWork';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Live client sites for DSB, The Green Log and Hairholic, and four projects: a public-service product concept for DR, an MSc thesis on wearable interaction, a participatory design study of diabetes alarms, and a sensor-driven generative system.',
};

export default function WorkPage() {
  return (
    <>
      <section className={`page ${styles.wrap}`} data-bg="#f4f2ec" data-ink="#0c0c0c">
        <header className={styles.header}>
          <p className="label label-ink">Research &amp; studio projects</p>
          <h1 className={styles.title}>Four projects, deliberately different</h1>
          <p className={styles.intro}>
            A digital product concept for a public broadcaster, a research-through-design thesis, a
            participatory design study, and an experimental generative system. Each page states what the
            project was, what I did, and what it demonstrates.
          </p>
        </header>
        <WorkTiles projects={projects} />
      </section>
      <ClientWork />
    </>
  );
}
