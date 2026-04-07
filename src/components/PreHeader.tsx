import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, Clock } from 'lucide-react';

export default function PreHeader() {
  return (
    <div className="bg-gray-900 text-gray-300 py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary" />
            <span>+1 (555) 000-0000</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-primary" />
            <span>contact@homefixpro.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-primary" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
        </div>
      </div>
    </div>
  );
}
