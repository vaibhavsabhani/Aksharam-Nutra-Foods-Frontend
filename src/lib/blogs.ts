import { API_URL } from "./api";
import type { PublicBlogPost } from "@/types";

export type { PublicBlogPost };

export async function getPublicBlogs(): Promise<PublicBlogPost[]> {
  const response = await fetch(`${API_URL}/blogs?onlyVisible=true`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Unable to load blogs (${response.status})`);
  }

  return response.json();
}

export async function getPublicBlog(id: string): Promise<PublicBlogPost> {
  const response = await fetch(`${API_URL}/blogs/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Unable to load blog (${response.status})`);
  }

  return response.json();
}
