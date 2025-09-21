import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/10 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-blue-400/10 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/5 rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-blue-400" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Digital Presence</span>?
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how SERANEX can help you achieve your business goals with a custom web solution.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-12 py-4 text-lg rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Start Your Project
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm mt-6">
          Free consultation • No commitment required • Quick response
        </p>
      </div>
    </section>
  );
};

export default CTASection;