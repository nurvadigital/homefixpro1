import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, ThumbsUp } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '10k+' },
    { icon: CheckCircle2, label: 'Projects Done', value: '25k+' },
    { icon: ThumbsUp, label: 'Success Rate', value: '99%' },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200"
                alt="Our Team at Work"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-3xl shadow-2xl z-20 text-white hidden sm:block">
              <p className="text-5xl font-display font-extrabold mb-1">15+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About HomeFix Pro</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-8">
              We Are Dedicated To Providing The Best Home Services
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on the principles of integrity and quality, HomeFix Pro has grown from a small local plumbing service to a full-scale home maintenance provider. We understand that your home is your sanctuary, and we treat every project with the respect it deserves.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Professional & Certified Technicians',
                'Affordable & Transparent Pricing',
                '24/7 Emergency Support Available',
                '100% Satisfaction Guaranteed'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <span className="font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <stat.icon className="text-primary mb-3" size={24} />
                  <p className="text-2xl font-display font-extrabold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
