import type { Metadata } from "next";
import { siteConfig } from "@/data/city";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createPageMetadata({ title, description, path = "", image = siteConfig.ogImage }: PageMetadataInput): Metadata {
  const pathname = path.startsWith("/") || path === "" ? path : `/${path}`;
  const pageUrl = pathname ? `${siteConfig.siteUrl}${pathname}` : siteConfig.siteUrl;

  return {
    title,
    description,
    alternates: {
      canonical: pathname || "/"
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: "website",
      url: pageUrl,
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
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image]
    }
  };
}
