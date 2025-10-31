import React from 'react';
import { BLOG_OVERVIEW_CONTENT, BLOG_POSTS } from '../constants';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const { hero } = BLOG_OVERVIEW_CONTENT;

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        imageUrl="https://images.unsplash.com/photo-1587825590989-13e00e2b34a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" // Electrical blueprints or complex wiring
        className="h-[60vh] min-h-[500px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <div className="max-w-7xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl"> {/* Adjusted background, padding, rounded */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"> {/* Adjusted margin-top */}
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;