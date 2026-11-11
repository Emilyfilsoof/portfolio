'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SMOOTH_SURGE } from '@/components/Smooth';
import { introWords } from '@/data/site-v4';
import styles from './Intro.module.css';

const NAME = 'Emily Rose Shereen Filsoof';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ█/·';
const STEP = 200;
const SCRAMBLE_FRAMES = 18;
const SCRAMBLE_MS = 38;

/** Pages with their own intro: the plate leaves the page's own word on stage. */
const STAGE_PATHS = ['/signifly'];

/** Stage intro timing, in ms. */
const STAGE = { surgeAt: 280, surgeMs: 1500, wipeAt: 1880, goneAt: 2500 };

/**
 * Opening plate. Runs on every page load by design.
 *
 * Default: the disciplines cycle, the name scrambles into place, then the plate
 * wipes up and the headline words stagger in.
 *
 * Stage (/signifly): there is no copy on the plate. The hero's own "smooooth"
 * sits above it (see .smoothLine in signifly.module.css), stretches to the edge
 * of the line and back, and the plate wipes away underneath it, so the word
 * never moves while the page arrives around it. html[data-stage] says when the
 * word can drop back into the page.
 */
export default function Intro() {
  const stage = STAGE_PATHS.includes(usePathname());
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

  const playStage = useCallback(() => {
    cleanup.current?.();
    const root = document.documentElement;
    root.setAttribute('data-intro', 'running');
    root.removeAttribute('data-stage');

    // The word is the intro, so the page always starts at the top here, even on
    // a reload further down (the browser would otherwise restore the scroll).
    // Scrolling is held until the plate lifts.
    history.scrollRestoration = 'manual';
    const toTop = () => window.scrollTo(0, 0);
    toTop();
    requestAnimationFrame(toTop);
    window.addEventListener('load', toTop, { once: true });
    const hold = (e: Event) => e.preventDefault();
    const keys = (e: KeyboardEvent) => {
      if ([' ', 'PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) e.preventDefault();
    };
    window.addEventListener('wheel', hold, { passive: false });
    window.addEventListener('touchmove', hold, { passive: false });
    window.addEventListener('keydown', keys);
    const release = () => {
      history.scrollRestoration = 'auto';
      window.removeEventListener('wheel', hold);
      window.removeEventListener('touchmove', hold);
      window.removeEventListener('keydown', keys);
      window.removeEventListener('load', toTop);
    };

    const timers = [
      setTimeout(
        () => window.dispatchEvent(new CustomEvent(SMOOTH_SURGE, { detail: { ms: STAGE.surgeMs } })),
        STAGE.surgeAt,
      ),
      setTimeout(() => {
        setWiping(true);
        root.setAttribute('data-intro', 'done');
        release();
      }, STAGE.wipeAt),
      setTimeout(() => {
        setGone(true);
        root.setAttribute('data-stage', 'off');
      }, STAGE.goneAt),
    ];

    cleanup.current = () => {
      timers.forEach(clearTimeout);
      release();
      root.setAttribute('data-intro', 'done');
      root.setAttribute('data-stage', 'off');
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setGone(true);
      root.setAttribute('data-intro', 'done');
      root.setAttribute('data-stage', 'off');
    } else if (stage) {
      playStage();
    } else {
      root.setAttribute('data-stage', 'off');
      play();
    }

    return () => {
      cleanup.current?.();
    };
    // The intro belongs to the page load, not to later client-side navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, playStage]);

  // On /signifly a reload starts at the top, so the browser is told not to
  // restore the scroll only as the page unloads. Back and forward inside the
  // site keep normal scroll restoration.
  useEffect(() => {
    if (!stage) return;
    const onHide = () => {
      history.scrollRestoration = 'manual';
    };
    window.addEventListener('pagehide', onHide);
    return () => {
      window.removeEventListener('pagehide', onHide);
      history.scrollRestoration = 'auto';
    };
  }, [stage]);

  if (gone) return null;

  if (stage) {
    return (
      <div className={`${styles.plate} ${wiping ? styles.wiping : ''}`} aria-hidden="true">
        <div className={styles.top}>
          <p className={styles.meta}>Ansøgning · Creative Developer</p>
          <p className={styles.metaDim}>Til Signifly</p>
        </div>
        <div className={styles.track}>
          <div className={styles.bar} style={{ animationDuration: `${STAGE.wipeAt}ms` }} />
        </div>
      </div>
    );
  }

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
