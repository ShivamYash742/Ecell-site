import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const InstagramFeed = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl text-gray-600">No posts available</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center text-blue-700 my-5">Latest Instagram Posts</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:-translate-y-1 transition-transform duration-200">
            <div className="relative h-64 bg-gray-100">
              {post.image_url ? (
                <img
                  src={post.image_url}
                  alt="Instagram Post"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 line-clamp-4 text-justify">
                {post.caption}
              </p>
              <a
                href={post.post_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium"
              >
                View on Instagram →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;