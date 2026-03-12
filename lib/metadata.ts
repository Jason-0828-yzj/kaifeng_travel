import type { Metadata } from "next";
import { siteConfig } from "@/data/city";

const deploymentUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
const normalizedUrl = deploymentUrl
  ? deploymentUrl.startsWith("http")
    ? deploymentUrl
    : `https://${deploymentUrl}`
  : siteConfig.siteUrl;

export const siteUrl = normalizedUrl;

export function createMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const fullUrl = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      type: "website",
      siteName: siteConfig.name,
      locale: "zh_CN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}