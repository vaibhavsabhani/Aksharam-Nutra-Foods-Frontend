import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { allDealerSlugs } from "@/lib/dealerRoutes";

const BASE_URL = "https://aksharamnutrafoods.com";

// Priority scheme matches the original sitemap.xml: 1.0 for home, 0.8 for
// every other real (non-dealer) page, 0.64 for the dealer-city pages.
const staticPaths = [
  "",
  "/about",
  "/contact",
  "/application",
  "/brochure",
  "/blog",
  "/market",
  "/spray-dried",
  "/spray-dried-fruit-powder",
  "/spray-dried-vegetable-powder",
  "/spray-dried-fat-powder",
  "/spray-dried-dairy-powder",
  "/other-spray-dried-powder",
  "/dehydrated-products",
  "/freeze-dried",
  "/indian-herbal-extract",
  "/smoothies",
  "/red-chilli-powder",
  "/seasoning-masala",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified,
    priority: 0.8,
  }));

  const dealerEntries: MetadataRoute.Sitemap = allDealerSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    priority: 0.64,
  }));

  return [...staticEntries, ...blogEntries, ...dealerEntries];
}
