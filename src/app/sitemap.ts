import type { MetadataRoute } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  return [
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: `yearly`,
      priority: 1,
    },
  ];
}
