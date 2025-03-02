import React from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="md:flex max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Matt Wilkinson
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Software Engineer, Musician & Travel Enthusiast
          </h2>
          <p className="text-xl mb-8">
            I build things for the web, create music, and explore the world.
            Welcome to my digital garden where I share my projects, thoughts,
            and adventures.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/blog">
              <span className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium inline-block text-center cursor-pointer transition-colors hover:bg-gray-100">
                Read My Blog
              </span>
            </Link>
            <a
              href="https://github.com/"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium inline-block text-center transition-colors hover:bg-white hover:bg-opacity-10"
            >
              View My Projects
            </a>
          </div>
        </div>
        <div className="rounded-full overflow-hidden">
          <Image src="/face.png" width={300} height={300} alt="face" />
        </div>
      </div>
    </section>
  );
};