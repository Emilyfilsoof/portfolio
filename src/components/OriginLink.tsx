'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

/**
 * Pages a visitor can arrive from, other than the homepage. A link from one of
 * them carries ?fra=<key>, and the case pages use it to send people back to
 * where they started instead of to the homepage.
 */
const ORIGINS: Record<string, { path: string; back: string }> = {
  signifly: { path: '/signifly', back: 'Tilbage til ansøgningen' },
};

function useOrigin() {
  const [from, setFrom] = useState<string | null>(null);
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get('fra');
    if (key && ORIGINS[key]) setFrom(key);
  }, []);
  return from;
}

/** Close and back links: the origin page if there is one, else `href`. */
export function BackLink({
  href,
  anchor,
  className,
  children,
  originLabel = false,
}: {
  href: string;
  /** Section id on the origin page to land on. */
  anchor: string;
  className?: string;
  children: ReactNode;
  /** Replace the text with the origin's own back label. */
  originLabel?: boolean;
}) {
  const from = useOrigin();
  const origin = from ? ORIGINS[from] : null;
  return (
    <Link href={origin ? `${origin.path}#${anchor}` : href} className={className}>
      {origin && originLabel ? origin.back : children}
    </Link>
  );
}

/** A link to another case that keeps the origin, so "back" still works there. */
export function CarryLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const from = useOrigin();
  return (
    <Link href={from ? `${href}?fra=${from}` : href} className={className}>
      {children}
    </Link>
  );
}
