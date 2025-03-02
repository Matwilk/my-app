import Head from 'next/head';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import { getFeaturedPosts } from '../utils/mdx';
import { Post } from '../types';

interface HomeProps {
  featuredPosts: Post[];
}

export default function Home({ featuredPosts }: HomeProps) {
  console.log('fe', featuredPosts)
  return (
    <Layout>
      <Head>
        <title>Matt Wilkinson | Software Engineer & Musician</title>
        <meta name="description" content="Personal website of Matt Wilkinson - Software Engineer, Musician, and Travel Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Software Engineering</h3>
              <p>
                Passionate full-stack developer with expertise in modern JavaScript frameworks,
                cloud technologies, and scalable architecture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Music</h3>
              <p>
                Multi-instrumentalist with a love for composition and production.
                Currently exploring the intersection of technology and musical expression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Travel</h3>
              <p>
                Avid traveler documenting journeys across continents, cultures, and cuisines.
                Always planning the next adventure!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredPosts = await getFeaturedPosts();
  console.log('features', featuredPosts)
  return {
    props: {
      featuredPosts,
    },
  };
}
