'use client';

import { useEffect, useRef } from 'react';
import { marqueeText } from '@/data/site-v4';
import styles from './Marquee.module.css';

/** Type band that drifts on its own and accelerates with the scroll. */
export default function Marquee() {
  const track = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = track.current;
    if (!el) return;

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const first = el.firstElementChild as HTMLElement | null;
      const w = first?.offsetWidth ?? 0;
      if (w) {
        const drift = (now - start) * 0.045 + window.scrollY * 0.55;
        el.style.transform = 'translateX(' + (-(drift % w)).toFixed(1) + 'px)';
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.band} data-bg="#0c0c0c" data-ink="#f4f2ec">
      <div className={styles.track} ref={track}>
        <p className={styles.line}>{marqueeText}</p>
        <p className={styles.line} aria-hidden="true">
          {marqueeText}
        </p>
      </div>
    </section>
  );
}
