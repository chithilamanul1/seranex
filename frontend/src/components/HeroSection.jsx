import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1700557061271-8e1b2cea765c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ2VvbWV0cmljJTIwdGVjaHxlbnwwfHx8YmxhY2t8MTc1ODQ1ODM3NHww&ixlib=rb-4.1.0&q=85"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-blue-900/40"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 border border-blue-500/20 rotate-45 transform"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 border border-blue-400/10 rotate-12 transform"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-500/5 rotate-45 transform"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">SERANEX:</span>
          <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Your Vision, Our Code – Flawless Web Solutions
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          At SERANEX, we transform ideas into powerful digital experiences. Our expert team combines cutting-edge technology with creative design to deliver websites that drive results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-500 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;