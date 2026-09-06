'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

/**
 * Ring cursor. Grows and labels itself over [data-cursor], and pulls
 * [data-mag] elements towards the pointer. Desktop pointers only — touch
 * devices never mount it, and the native cursor is only hidden while it runs.
 *
 * State is reset on click and on every route change, so a tile that unmounts
 * mid-hover (opening a case) cannot leave the ring stuck on "Open".
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const reset = useRef<() => void>(() => {});

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    const el = ring.current;
    if (!el) return;

    document.documentElement.setAttribute('data-ring', 'on');

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let mag: HTMLElement | null = null;
    let frame = 0;

    const size = (px: number, label: string) => {
      el.style.width = px + 'px';
      el.style.height = px + 'px';
      el.style.margin = -px / 2 + 'px 0 0 ' + -px / 2 + 'px';
      el.style.background = label ? 'var(--accent)' : 'transparent';
      // A filled ring is always cyan, so its label is always ink.
      el.style.color = label ? 'var(--ink)' : '';
      el.style.borderColor = label ? 'var(--ink)' : '';
      el.textContent = label;
    };

    const clear = () => {
      if (mag) {
        mag.style.transform = 'none';
        mag = null;
      }
      size(22, '');
    };
    reset.current = clear;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      el.style.opacity = '1';
      if (mag) {
        // A magnetic element that has gone away takes the pull with it.
        if (!mag.isConnected) {
          clear();
          return;
        }
        const r = mag.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.16;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        mag.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
      }
    };

    const onOver = (e: PointerEvent) => {
      const hit = (e.target as HTMLElement | null)?.closest(
        '[data-cursor],[data-mag]',
      ) as HTMLElement | null;
      if (!hit) {
        clear();
        return;
      }
      if (hit.hasAttribute('data-mag')) {
        if (mag && mag !== hit) mag.style.transform = 'none';
        mag = hit;
        hit.style.transition = 'transform 400ms var(--ease-out), color 260ms, background 260ms';
        size(52, '');
      } else {
        if (mag) {
          mag.style.transform = 'none';
          mag = null;
        }
        size(64, hit.getAttribute('data-cursor') || '');
      }
    };

    // Only reset once the pointer has genuinely left the element — moving
    // between a tile's own children fires pointerout too.
    const onOut = (e: PointerEvent) => {
      const hit = (e.target as HTMLElement | null)?.closest(
        '[data-cursor],[data-mag]',
      ) as HTMLElement | null;
      if (!hit) return;
      const next = e.relatedTarget as Node | null;
      if (next && hit.contains(next)) return;
      clear();
    };

    const onLeaveWindow = () => {
      el.style.opacity = '0';
      clear();
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.34;
      pos.y += (target.y - pos.y) * 0.34;
      el.style.transform = 'translate(' + pos.x.toFixed(1) + 'px,' + pos.y.toFixed(1) + 'px)';
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerout', onOut, { passive: true });
    window.addEventListener('pointerdown', clear, { passive: true });
    window.addEventListener('blur', onLeaveWindow);
    document.addEventListener('mouseleave', onLeaveWindow);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerout', onOut);
      window.removeEventListener('pointerdown', clear);
      window.removeEventListener('blur', onLeaveWindow);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.documentElement.removeAttribute('data-ring');
    };
  }, []);

  // New route, clean ring.
  useEffect(() => {
    reset.current();
  }, [pathname]);

  return <div ref={ring} className={styles.ring} aria-hidden="true" />;
}
