'use client';

import { INTRO_REPLAY } from '@/components/Intro';

/** A small button that plays the site intro again, for pages that skip it. */
export default function IntroReplay({ className, label }: { className?: string; label: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(INTRO_REPLAY))} data-mag>
      {label}
    </button>
  );
}
