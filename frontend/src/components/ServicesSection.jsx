import React from 'react';
import { Button } from './ui/button';
import { Code, Smartphone, Globe, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-400" />,
      title: "Custom Website Development",
      description: "Bespoke websites designed to perfectly match your brand identity and business objectives."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-400" />,
      title: "Responsive Web Design",
      description: "Websites that look and perform flawlessly across all devices and screen sizes."
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-400" />,
      title: "Web Application Development",
      description: "Powerful, scalable applications that streamline operations and enhance user experience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive web solutions tailored to your unique business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;