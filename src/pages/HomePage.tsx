import React from 'react';
import Hero from '@/src/components/Hero';
import ServicesGrid from '@/src/components/ServicesGrid';
import AboutSection from '@/src/components/AboutSection';
import BlogSection from '@/src/components/BlogSection';
import ContactForm from '@/src/components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <BlogSection />
      <ContactForm />
    </main>
  );
}
