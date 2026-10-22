export type PublicBlogPost = {
  id: number;
  title: string;
  content: string;
  coverImageUrl: string | null;
  isShow: boolean;
  author: { name: string } | null;
  createdAt: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export async function getPublicBlogs(): Promise<PublicBlogPost[]> {
  const response = await fetch(`${apiUrl}/blogs?onlyVisible=true`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Unable to load blogs (${response.status})`);
  }

  return response.json();
}

export async function getPublicBlog(id: string): Promise<PublicBlogPost> {
  const response = await fetch(`${apiUrl}/blogs/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Unable to load blog (${response.status})`);
  }

  return response.json();
}