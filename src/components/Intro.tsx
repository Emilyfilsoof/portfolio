'use client';

import { useEffect, useState } from 'react';
import { introWords } from '@/data/site-v4';
import styles from './Intro.module.css';

const NAME = 'Emily Rose Shereen Filsoof';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ█/·';
const STEP = 200;
const SCRAMBLE_FRAMES = 18;
const SCRAMBLE_MS = 38;

/**
 * Three-second opening: the disciplines cycle, the name scrambles into place,
 * then the plate wipes up and the headline words stagger in. Runs on every
 * visit by design.
 */
export default function Intro() {
  const [text, setText] = useState<string>(introWords[0]);
  const [wiping, setWiping] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGone(true);
      return;
    }

    const root = document.documentElement;
    root.setAttribute('data-intro', 'running');
    const timers: ReturnType<typeof setTimeout>[] = [];
    let scrambler: ReturnType<typeof setInterval> | undefined;

    introWords.forEach((word, i) => {
      timers.push(setTimeout(() => setText(word), i * STEP));
    });

    const nameAt = introWords.length * STEP;

    timers.push(
      setTimeout(() => {
        let f = 0;
        scrambler = setInterval(() => {
          f += 1;
          const keep = Math.floor((f / SCRAMBLE_FRAMES) * NAME.length);
          let out = NAME.slice(0, keep);
          for (let i = keep; i < NAME.length; i += 1) {
            out += NAME[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          setText(out);
          if (f >= SCRAMBLE_FRAMES) {
            clearInterval(scrambler);
            setText(NAME);
          }
        }, SCRAMBLE_MS);
      }, nameAt),
    );

    timers.push(
      setTimeout(() => {
        setWiping(true);
        root.setAttribute('data-intro', 'done');
      }, nameAt + 1080),
    );

    timers.push(setTimeout(() => setGone(true), nameAt + 1700));

    return () => {
      timers.forEach(clearTimeout);
      if (scrambler) clearInterval(scrambler);
      root.setAttribute('data-intro', 'done');
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`${styles.plate} ${wiping ? styles.wiping : ''}`} aria-hidden="true">
      <div className={styles.top}>
        <p className={styles.meta}>Portfolio · 2026</p>
        <p className={styles.metaDim}>Copenhagen</p>
      </div>
      <p className={styles.word}>{text}</p>
      <div className={styles.track}>
        <div className={styles.bar} />
      </div>
    </div>
  );
}
