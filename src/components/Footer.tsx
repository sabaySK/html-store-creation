
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hero-section py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">S</span>
              </div>
              <span className="store-subheading text-white">StyleStore</span>
            </div>
            <p className="text-white/80 mb-4">
              Your destination for premium fashion and style. 
              Curated collections that express your unique personality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Products</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Categories</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80">support@stylestore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/80">123 Fashion St, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 StyleStore. All rights reserved. Built with love for fashion enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
