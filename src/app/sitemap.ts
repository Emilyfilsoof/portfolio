import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://emilyfilsoof.com';
  return [
    { url: base, priority: 1 },
    { url: `${base}/work`, priority: 0.8 },
    ...projects.map((project) => ({ url: `${base}/work/${project.slug}`, priority: 0.9 })),
  ];
}
