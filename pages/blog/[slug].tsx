// pages/blog/[slug].tsx
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { Layout } from '../../components/Layout';
import { getPostBySlug, getAllPosts } from '../../utils/mdx';
import { ParsedPost } from '../../types';
import { format } from 'date-fns';

interface PostPageProps {
  post: ParsedPost;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <Layout>
      <Head>
        <title>{post.frontMatter.title} | Matt Wilkinson</title>
        <meta name="description" content={post.frontMatter.excerpt} />
      </Head>
      
      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-4">
            <span>{format(new Date(post.frontMatter.date), 'MMMM dd, yyyy')}</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{post.frontMatter.category}</span>
          </div>
          
          {post.frontMatter.coverImage && (
            <div className="mb-8">
              <img 
                src={post.frontMatter.coverImage} 
                alt={post.frontMatter.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
        
        <div className="prose lg:prose-xl max-w-none">
          <MDXRemote {...post.mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post: { slug: string; }) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}
