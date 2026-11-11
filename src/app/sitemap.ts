import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { clientWork } from '@/data/client-work';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.emilyfilsoof.com';
  return [
    { url: base, priority: 1 },
    { url: `${base}/work`, priority: 0.8 },
    ...clientWork.map((project) => ({ url: `${base}/client/${project.id}`, priority: 0.9 })),
    ...projects.map((project) => ({ url: `${base}/work/${project.slug}`, priority: 0.9 })),
  ];
}
