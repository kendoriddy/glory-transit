import type { MetadataRoute } from "next";
import { SITE_URLS } from "@portfolio/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URLS.hub}/sitemap.xml`,
  };
}
