
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="store-heading mb-6">
              Discover Your Perfect Style
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Curated fashion pieces that express your unique personality. 
              From casual essentials to statement pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="store-button-primary group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="store-button-secondary">
                View Collection
              </Button>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg h-24 animate-pulse"></div>
                  <div className="bg-white/20 rounded-lg h-24 animate-pulse"></div>
                  <div className="bg-white/20 rounded-lg h-24 animate-pulse"></div>
                  <div className="bg-white/20 rounded-lg h-24 animate-pulse"></div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-white/80 text-sm">Featured Products Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
