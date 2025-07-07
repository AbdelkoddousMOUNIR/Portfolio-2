import { MetadataRoute } from "next";
import env from "dotenv";
env.config()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: process.env.Website_Url as string,
      lastModified: new Date().toISOString(),
    }
  ];
}
