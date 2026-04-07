import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Home, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <div className="bg-primary p-2 rounded-lg">
                <Home className="text-white" size={24} />
              </div>
              <span className="text-2xl font-display font-bold text-white">
                HomeFix<span className="text-primary">Pro</span>
              </span>
            </Link>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Your trusted partner for professional home maintenance services. Quality work, affordable prices, and 100% satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Latest Blogs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center hover:text-primary transition-colors group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Plumbing', 'Electrical', 'Gardening', 'Painting', 'HVAC Repair'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="flex items-center hover:text-primary transition-colors group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1" size={20} />
                <span>123 Service Lane, Maintenance City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-primary" size={20} />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-primary" size={20} />
                <span>contact@homefixpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} HomeFix Pro. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
