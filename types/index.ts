import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage?: string | null;
  excerpt: string;
  category: string;
  featured?: boolean;
}

export interface FrontMatter {
  title: string;
  date: string;
  coverImage?: string | null;
  excerpt: string;
  category: string;
  featured?: boolean;
}

export interface ParsedPost {
  slug: string;
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
}