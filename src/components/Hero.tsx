import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Star size={16} className="fill-primary" />
              <span className="text-sm font-bold uppercase tracking-wider">Top Rated Home Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 leading-[1.1] mb-6">
              Your One-Stop Solution for <span className="text-primary">Home Maintenance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              From plumbing and electrical to gardening and painting. We provide professional, reliable, and affordable services for every corner of your home.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-primary/25 group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <ShieldCheck className="text-green-600" size={20} />
                </div>
                <span className="text-sm font-semibold text-gray-700">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Home Maintenance"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full z-0 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Customer"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">10k+ Happy Clients</p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} className="fill-current" />)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
