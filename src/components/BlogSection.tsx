import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '@/src/constants';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Latest News</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900">
              Tips & Insights For Your Home Maintenance
            </h3>
          </div>
          <Link
            to="/blogs"
            className="mt-8 md:mt-0 inline-flex items-center text-primary font-bold text-lg hover:underline"
          >
            View All Posts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  By Admin
                </div>
              </div>
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                <Link to={`/blogs/${post.id}`}>{post.title}</Link>
              </h4>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <Link
                to={`/blogs/${post.id}`}
                className="inline-flex items-center font-bold text-gray-900 group-hover:text-primary transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
