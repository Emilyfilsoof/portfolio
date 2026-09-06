'use client';

import { useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·—';

/** Small label that scrambles itself once on hover. */
export default function Scramble({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState(text);
  const busy = useRef(false);

  const run = () => {
    if (busy.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    busy.current = true;
    let f = 0;
    const total = 14;
    const id = setInterval(() => {
      f += 1;
      const keep = Math.floor((f / total) * text.length);
      let out = text.slice(0, keep);
      for (let i = keep; i < text.length; i += 1) {
        out += text[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setShown(out);
      if (f >= total) {
        clearInterval(id);
        setShown(text);
        busy.current = false;
      }
    }, 32);
  };

  return (
    <span className={className} onPointerEnter={run}>
      {shown}
    </span>
  );
}
