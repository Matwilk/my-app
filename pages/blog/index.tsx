import Head from 'next/head';
import { Layout } from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../utils/mdx';
import { Post } from '../../types';
import { useState } from 'react';

interface BlogIndexProps {
  posts: Post[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const [filter, setFilter] = useState('all');
  
  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.category === filter);

  return (
    <Layout>
      <Head>
        <title>Blog | Matt Wilkinson</title>
        <meta name="description" content="Thoughts on software development, music, and travel adventures" />
      </Head>
      
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="mb-8">
          <div className="flex space-x-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('code')}
              className={`px-4 py-2 rounded ${filter === 'code' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Code
            </button>
            <button 
              onClick={() => setFilter('music')}
              className={`px-4 py-2 rounded ${filter === 'music' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Music
            </button>
            <button 
              onClick={() => setFilter('travel')}
              className={`px-4 py-2 rounded ${filter === 'travel' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Travel
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}