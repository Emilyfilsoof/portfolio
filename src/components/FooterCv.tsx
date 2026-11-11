'use client';

import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';

/**
 * The footer's CV button. On an application page it links the CV made for that
 * application, so a page never offers two different CVs.
 */
export default function FooterCv({ className }: { className?: string }) {
  const path = usePathname();
  const cv = profile.cvByPath[path] ?? profile.cv;
  return (
    <a className={className} href={cv.href} target="_blank" rel="noreferrer" data-mag>
      {cv.label}
    </a>
  );
}
