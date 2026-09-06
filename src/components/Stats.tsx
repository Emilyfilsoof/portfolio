'use client';

import { useEffect, useRef } from 'react';
import { stats } from '@/data/site-v4';
import styles from './Stats.module.css';

/** Accent band. Each number counts up once, the first time it is seen. */
export default function Stats() {
  const wrap = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const numbers = Array.from(node.querySelectorAll<HTMLElement>('[data-count]'));

    const run = (el: HTMLElement) => {
      const target = Number(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      if (reduce) {
        el.textContent = target + suffix;
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1000);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === 'undefined') {
      numbers.forEach(run);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          run(entry.target as HTMLElement);
        });
      },
      { threshold: 0.4 },
    );

    numbers.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.band} ref={wrap} data-bg="#00e5ff" data-ink="#0c0c0c">
      {stats.map((stat) => (
        <div key={stat.label} className={styles.cell}>
          <p className={styles.number} data-count={stat.value} data-suffix={stat.suffix}>
            0{stat.suffix}
          </p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
