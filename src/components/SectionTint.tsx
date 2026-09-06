'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Tints the document background — and the cursor ring — to match whichever
 * [data-bg] element owns the upper third of the viewport, so overscroll never
 * reveals the wrong ground and the ring stays legible on dark cases.
 */
export default function SectionTint() {
  const pathname = usePathname();

  useEffect(() => {
    let queued = false;

    const sync = () => {
      queued = false;
      const grounds = document.querySelectorAll<HTMLElement>('[data-bg]');
      let pick: HTMLElement | null = null;
      grounds.forEach((ground) => {
        const r = ground.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.4 && r.bottom > window.innerHeight * 0.4) pick = ground;
      });
      // Fall back to the first ground on the page: a case opens at the top,
      // where nothing yet crosses the 40% line.
      const chosen = pick ?? grounds[0] ?? null;
      document.body.style.background = chosen?.dataset.bg || '';
      document.documentElement.style.setProperty(
        '--cursor-ink',
        chosen?.dataset.ink || 'var(--ink)',
      );
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.body.style.background = '';
    };
  }, [pathname]);

  return null;
}
