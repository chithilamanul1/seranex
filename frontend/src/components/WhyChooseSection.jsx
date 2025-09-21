import React from 'react';
import { Heart, Star, CheckCircle } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Heart className="h-12 w-12 text-blue-400" />,
      title: "Client-Focused Approach",
      description: "We prioritize your success and work closely with you to achieve your goals."
    },
    {
      icon: <Star className="h-12 w-12 text-blue-400" />,
      title: "Expert Team",
      description: "Our developers and designers are industry veterans with proven track records."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-400" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure flawless functionality."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose SERANEX
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with creative excellence to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8 hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group text-center"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;