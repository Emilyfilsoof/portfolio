import styles from './Grain.module.css';

/** Static film-grain plate over the whole page. Pure CSS, no client JS. */
export default function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
