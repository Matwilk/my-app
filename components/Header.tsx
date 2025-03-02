import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex space-x-4 text-xl font-bold cursor-pointer">
              <Image
                src="/android-chrome-192x192.png"
                alt="logo"
                width={45}
                height={45}
              ></Image>
              <div className="m-auto">Matt Wilkinson</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/blog">
              <span className="hover:text-blue-600 transition-colors cursor-pointer">
                Blog
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white">
            <Link href="/">
              <span className="block py-2 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/blog">
              <span className="block py-2 hover:text-blue-600 transition-colors cursor-pointer">
                Blog
              </span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
