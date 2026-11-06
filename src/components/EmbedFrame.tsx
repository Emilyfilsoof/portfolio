'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A live piece of client code in an iframe. The embedded page posts its own
 * height, so the frame grows and shrinks with the content instead of
 * scrolling inside itself.
 */
export default function EmbedFrame({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(560);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== ref.current?.contentWindow) return;
      const data = event.data as { type?: string; height?: number } | null;
      if (data?.type === 'embed-height' && typeof data.height === 'number' && data.height > 0) {
        setHeight(Math.ceil(data.height));
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return <iframe ref={ref} className={className} src={src} title={title} loading="lazy" style={{ height }} />;
}
