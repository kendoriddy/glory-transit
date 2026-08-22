import type { MetadataRoute } from "next";
import { SITE_URLS } from "@portfolio/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URLS.hub,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URLS.hub}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
