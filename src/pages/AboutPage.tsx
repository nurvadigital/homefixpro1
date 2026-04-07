import React from 'react';
import AboutSection from '@/src/components/AboutSection';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <main className="pt-10">
      <section className="bg-gray-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-white mb-6"
          >
            About Our Company
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn about our journey, our values, and why we are the preferred choice for home maintenance.
          </p>
        </div>
      </section>
      <AboutSection />
    </main>
  );
}
