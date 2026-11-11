import type { Metadata } from 'next';
import { profile } from '@/data/profile';

/**
 * Metadata for one page: its own canonical URL and a link preview that names
 * the page. Next does not deep-merge openGraph, so every page sets the whole
 * object, including the image.
 */
export function pageMeta({
  title,
  description,
  path,
  locale = 'en_GB',
  image = { url: '/opengraph-image.png', width: 1200, height: 630, alt: `${profile.name}, ${profile.role}` },
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
  /** Link preview image. Defaults to the site card in src/app. */
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${profile.shortName}`,
      description,
      url: path,
      siteName: profile.shortName,
      locale,
      type: 'website',
      images: [image],
    },
  };
}
