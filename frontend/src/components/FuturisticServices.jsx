import React from 'react';
import { Button } from './ui/button';
import { Code2, Palette, TrendingUp, Smartphone, Globe, Database, ArrowRight, Zap } from 'lucide-react';

const FuturisticServices = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Website Building",
      description: "We build fast, beautiful websites that work perfectly on phones, tablets, and computers.",
      features: ["Mobile-Friendly", "Fast Loading", "Easy to Update", "Works Everywhere"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-400/30"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Beautiful logos, brand designs, and graphics that make your business look professional.",
      features: ["Logo Design", "Business Cards", "Brochures", "Social Media Graphics"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-400/30"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Help more people find your business online and turn visitors into customers.",
      features: ["Google Ads", "Social Media", "Email Marketing", "SEO Optimization"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-400/30"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Custom mobile apps for iPhone and Android that your customers will love to use.",
      features: ["iPhone Apps", "Android Apps", "Easy to Use", "App Store Ready"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Online Stores",
      description: "Complete online shops where you can sell products and accept payments easily.",
      features: ["Payment Processing", "Inventory Management", "Order Tracking", "Customer Support"],
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-400/30"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Secure online storage and backup systems to keep your business data safe.",
      features: ["Data Backup", "File Storage", "Team Collaboration", "24/7 Security"],
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-400/30"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 border border-cyan-400/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-green-400/10 rounded-full animate-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium">What We Do</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We offer everything you need to grow your business online and reach more customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer`}
            >
              {/* Card */}
              <div className={`
                relative bg-black/40 backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 
                hover:bg-black/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl
                ${service.bgColor} hover:border-opacity-60
              `}>
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-black">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className={`flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}>
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-12 py-4 rounded-lg overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center text-lg">
              See All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FuturisticServices;