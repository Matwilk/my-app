import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Post, ParsedPost } from '../types';

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(POSTS_PATH).filter(file => /\.mdx?$/.test(file));

  const posts = files.map(filename => {
    const filePath = path.join(POSTS_PATH, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    console.log('data', data)
    
    return {
      slug: filename.replace(/\.mdx?$/, ''),
      title: data.title,
      date: data.date,
      coverImage: data.coverImage || null,
      excerpt: data.excerpt || '',
      category: data.category || 'uncategorized',
      featured: data.featured || false
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured).slice(0, 3);
}

export async function getPostBySlug(slug: string): Promise<ParsedPost> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);
  
  return {
    slug,
    frontMatter: {
      title: data.title,
      date: data.date,
      coverImage: data.coverImage || null,
      excerpt: data.excerpt || '',
      category: data.category || 'uncategorized',
      featured: data.featured || false,
    },
    mdxSource,
  };
}