import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.world-api.ir',
      lastModified: '2025-03-29',
      changeFrequency: 'yearly',
      priority: 1,
      images: ['https://www.world-api.ir/world-logo.png'],
    },
    {
      url: 'https://www.world-api.ir/documentation/about',
      lastModified: '2025-03-29',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.world-api.ir/documentation/countries',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.world-api.ir/documentation/faq',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://www.world-api.ir/get-api-key',
      lastModified: '2025-03-29',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
