import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '../types';

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105">
        {post.coverImage && (
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
            {post.category}
          </div>
          <h3 className="text-xl font-semibold mb-2 leading-tight">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;