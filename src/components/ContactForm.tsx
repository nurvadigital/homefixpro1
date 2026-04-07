import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data to your backend here
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-2xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-lg text-gray-600 mb-8">
          Your request has been received. One of our experts will contact you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">
              Ready to Start Your Home Project?
            </h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Get a free, no-obligation consultation today. Our experts are ready to help you with any home maintenance needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-white/10 p-4 rounded-2xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold text-white">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-white/10 p-4 rounded-2xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold text-white">contact@homefixpro.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-white/10 p-4 rounded-2xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-white">123 Service Lane, Maintenance City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <h4 className="text-2xl font-display font-bold text-gray-900 mb-8">Request a Free Consultation</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Service Needed</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Gardening</option>
                    <option>Painting</option>
                    <option>HVAC</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/20 flex items-center justify-center"
              >
                Send Request
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
