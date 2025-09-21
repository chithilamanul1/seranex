import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const processes = [
    {
      icon: <Search className="h-12 w-12 text-blue-400" />,
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and unique requirements to create a comprehensive project roadmap."
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-400" />,
      title: "Design & Prototyping",
      description: "Our designers create intuitive, engaging interfaces that align with your brand and optimize user experience."
    },
    {
      icon: <Code className="h-12 w-12 text-blue-400" />,
      title: "Development",
      description: "We build your solution using cutting-edge technologies, ensuring scalability, security, and performance."
    },
    {
      icon: <Rocket className="h-12 w-12 text-blue-400" />,
      title: "Launch & Support",
      description: "We ensure a smooth deployment and provide ongoing support to help your digital presence thrive."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A streamlined approach to delivering exceptional web solutions
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-black/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {process.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {process.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;