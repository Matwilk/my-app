// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Matt Wilkinson</h3>
            <p>Software Engineer, Musician, Travel Enthusiast</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/" className="hover:text-blue-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="https://linkedin.com/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://twitter.com/" className="hover:text-blue-400 transition-colors">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on new blog posts and projects.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-gray-900 rounded-l"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Matt Wilkinson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;