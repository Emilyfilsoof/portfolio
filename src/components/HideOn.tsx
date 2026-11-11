'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

/** Leaves out its children on the given paths, e.g. a block a page already has. */
export default function HideOn({ paths, children }: { paths: string[]; children: ReactNode }) {
  const path = usePathname();
  return paths.includes(path) ? null : <>{children}</>;
}
