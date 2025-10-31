import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block bg-neutral-800 rounded-4xl shadow-xl hover:shadow-2xl group transform hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden"> {/* Adjusted background, rounded */}
      <div className="relative h-64 w-full"> {/* Increased image height */}
        {/* Placeholder image */}
        <img
          src={`https://images.unsplash.com/photo-1621980894548-732386121434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80&r=${post.id.length}`}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div> {/* Adjusted overlay opacity */}
      </div>
      <div className="p-10"> {/* Increased padding */}
        <h3 className="text-3xl font-bold text-gold-accent mb-4 group-hover:text-light-gold-accent transition-colors duration-300 leading-tight"> {/* Larger title */}
          {post.title}
        </h3>
        <p className="text-white text-xl leading-relaxed mb-6"> {/* Larger description text with relaxed line-height */}
          {post.intro.body.substring(0, 150)}...
        </p>
        <span className="mt-4 inline-block text-gold-accent group-hover:text-light-gold-accent font-semibold transition-colors duration-300">
          Read More &rarr;
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;