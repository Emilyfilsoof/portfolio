'use client';

import { useEffect, useRef } from 'react';
import styles from './Smooth.module.css';

const BASE = 4; // "smooooth", as the job ad spells it
const MAX = 24;

/**
 * The word "smooooth", stretched by how fast you move.
 *
 * Pointer speed and scroll speed feed a target number of O's; the rendered
 * number eases towards it every frame and relaxes back to four when you stop.
 * The fractional O grows in, so the word never jumps. All of it runs on one
 * requestAnimationFrame loop that writes straight to the DOM, so React does
 * not re-render per frame. Reduced motion gets the static word.
 */
export default function Smooth() {
  const wrap = useRef<HTMLSpanElement | null>(null);
  const os = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let energy = 0;
    let shown = BASE;
    let cap = MAX;
    let lastX = 0;
    let lastY = 0;
    let lastScroll = window.scrollY;
    let raf = 0;
    let running = true;

    // How many O's fit on this line before the word would wrap.
    const measure = () => {
      const probe = os.current[0];
      // The highlighted line hugs the word, so measure against the heading.
      const parent = el.closest('h1, h2, p') ?? el.parentElement;
      if (!probe || !parent) return;
      const o = probe.getBoundingClientRect().width || 1;
      const free = parent.getBoundingClientRect().width - (el.getBoundingClientRect().width - shown * o);
      cap = Math.max(BASE, Math.min(MAX, Math.floor(free / o) - 1));
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const d = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      lastX = e.clientX;
      lastY = e.clientY;
      energy += Math.min(d, 120) * 0.06;
    };

    const onScroll = () => {
      const d = Math.abs(window.scrollY - lastScroll);
      lastScroll = window.scrollY;
      energy += Math.min(d, 200) * 0.05;
    };

    const tick = () => {
      if (!running) return;
      energy *= 0.92; // relax back to four
      const target = Math.min(cap, BASE + energy);
      shown += (target - shown) * 0.14;
      const whole = Math.floor(shown);
      const part = shown - whole;
      os.current.forEach((node, i) => {
        if (!node) return;
        const k = i < whole ? 1 : i === whole ? part : 0;
        node.style.setProperty('--k', k.toFixed(3));
      });
      raf = requestAnimationFrame(tick);
    };

    // Only animate while the word is on screen.
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(tick);
    });

    measure();
    io.observe(el);
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <span className={styles.word} ref={wrap} aria-label="smooooth">
      <span aria-hidden="true">SM</span>
      {Array.from({ length: MAX }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={styles.o}
          ref={(node) => {
            os.current[i] = node;
          }}
          style={{ ['--k' as string]: i < BASE ? 1 : 0 }}
        >
          O
        </span>
      ))}
      <span aria-hidden="true">TH</span>
    </span>
  );
}
