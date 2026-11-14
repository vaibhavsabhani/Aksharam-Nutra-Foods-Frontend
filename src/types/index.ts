export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ProductItem {
  image: string;
  title: string;
}

export interface CategoryItem {
  title: string;
  href: string;
  image: string;
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: { title?: string; text: string }[] };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  body: BlogBlock[];
}

export interface PublicBlogPost {
  id: number;
  title: string;
  content: string;
  coverImageUrl: string | null;
  isShow: boolean;
  author: { name: string } | null;
  createdAt: string;
}

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
