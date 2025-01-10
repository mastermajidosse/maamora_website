import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.date}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-[#fb7701] transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}