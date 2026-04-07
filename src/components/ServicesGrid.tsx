import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">
            Comprehensive Home Services for Every Need
          </h3>
          <p className="text-lg text-gray-600">
            We offer a wide range of professional services to keep your home in perfect condition. From minor repairs to major renovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center text-primary font-bold group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
