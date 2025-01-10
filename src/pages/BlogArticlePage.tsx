import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, ChevronLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500">Article not found</p>
      </div>
    );
  }

  // Find related articles (same tag)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-[#fb7701] mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.date}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="flex gap-2 mb-8">
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

        {/* Featured Image */}
        <div className="aspect-[2/1] rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
          <div className="text-gray-800 leading-relaxed space-y-6">
            {post.content}
          </div>
        </div>

        {/* Share Button */}
        <div className="border-t border-b py-6 my-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#fb7701]">
            <Share2 className="w-5 h-5" />
            Share this article
          </button>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-[#fb7701] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{relatedPost.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}