'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { introWords } from '@/data/site-v4';
import styles from './Intro.module.css';

const NAME = 'Emily Rose Shereen Filsoof';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ█/·';
const STEP = 200;
const SCRAMBLE_FRAMES = 18;
const SCRAMBLE_MS = 38;

/** Fired by <IntroReplay /> to play the intro again on demand. */
export const INTRO_REPLAY = 'ef:intro-replay';

/**
 * Three-second opening: the disciplines cycle, the name scrambles into place,
 * then the plate wipes up and the headline words stagger in.
 *
 * It plays once per visit. A small script in the layout marks the page with
 * data-intro="skip" before first paint when the visitor has seen it in the last
 * half hour, or lands on an application page, so the plate never flashes.
 */
export default function Intro() {
  const [text, setText] = useState<string>(introWords[0]);
  const [wiping, setWiping] = useState(false);
  const [gone, setGone] = useState(false);
  const cleanup = useRef<() => void>();

  const play = useCallback(() => {
    cleanup.current?.();
    const root = document.documentElement;
    root.setAttribute('data-intro', 'running');
    setText(introWords[0]);
    setWiping(false);
    setGone(false);

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

    cleanup.current = () => {
      timers.forEach(clearTimeout);
      if (scrambler) clearInterval(scrambler);
      root.setAttribute('data-intro', 'done');
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || root.getAttribute('data-intro') === 'skip') {
      setGone(true);
      root.setAttribute('data-intro', 'done');
    } else {
      play();
    }

    const replay = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      play();
    };
    window.addEventListener(INTRO_REPLAY, replay);

    return () => {
      window.removeEventListener(INTRO_REPLAY, replay);
      cleanup.current?.();
    };
  }, [play]);

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
