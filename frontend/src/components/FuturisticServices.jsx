import React, { useState } from 'react';
import { Button } from './ui/button';
import { Code2, Palette, TrendingUp, Smartphone, Globe, Database, ArrowRight, Zap, X } from 'lucide-react';

const FuturisticServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Website Building",
      description: "We build fast, beautiful websites that work perfectly on phones, tablets, and computers.",
      features: ["Mobile-Friendly", "Fast Loading", "Easy to Update", "Works Everywhere"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-400/30",
      fullDescription: "Our website building service includes everything you need for a professional online presence. We create responsive designs that look great on all devices, optimize for fast loading speeds, and build with user-friendly content management so you can easily update your site. Every website comes with SEO optimization to help people find you on Google.",
      process: ["Discovery Call", "Design Mockups", "Development", "Testing", "Launch", "Ongoing Support"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Beautiful logos, brand designs, and graphics that make your business look professional.",
      features: ["Logo Design", "Business Cards", "Brochures", "Social Media Graphics"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-400/30",
      fullDescription: "Our graphic design service helps create a strong visual identity for your business. From memorable logos to consistent branding across all materials, we ensure your business stands out. We design everything from business cards and brochures to social media graphics and marketing materials.",
      process: ["Brand Discovery", "Concept Creation", "Design Development", "Revisions", "Final Files", "Brand Guidelines"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Help more people find your business online and turn visitors into customers.",
      features: ["Google Ads", "Social Media", "Email Marketing", "SEO Optimization"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-400/30",
      fullDescription: "Our digital marketing service drives real results for your business. We create targeted Google Ads campaigns, manage your social media presence, build email marketing campaigns, and optimize your website for search engines. Every strategy is data-driven and focused on getting you more customers.",
      process: ["Marketing Audit", "Strategy Planning", "Campaign Setup", "Launch & Monitor", "Optimize", "Monthly Reports"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Custom mobile apps for iPhone and Android that your customers will love to use.",
      features: ["iPhone Apps", "Android Apps", "Easy to Use", "App Store Ready"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30",
      fullDescription: "We develop native mobile apps for both iPhone and Android platforms. Our apps are designed with user experience in mind, featuring intuitive interfaces and smooth performance. We handle everything from design and development to app store submission and ongoing maintenance.",
      process: ["App Planning", "UI/UX Design", "Development", "Testing", "App Store Submission", "Updates & Support"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Online Stores",
      description: "Complete online shops where you can sell products and accept payments easily.",
      features: ["Payment Processing", "Inventory Management", "Order Tracking", "Customer Support"],
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-400/30",
      fullDescription: "Our e-commerce solutions include everything you need to sell online successfully. We build secure online stores with integrated payment processing, inventory management systems, order tracking, and customer support features. Perfect for businesses ready to expand their sales online.",
      process: ["Store Planning", "Design & Setup", "Payment Integration", "Product Upload", "Testing", "Launch & Training"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Secure online storage and backup systems to keep your business data safe.",
      features: ["Data Backup", "File Storage", "Team Collaboration", "24/7 Security"],
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-400/30",
      fullDescription: "Keep your business data safe and accessible with our cloud solutions. We set up secure cloud storage, automated backups, team collaboration tools, and 24/7 monitoring. Perfect for businesses that want to work from anywhere while keeping their data protected.",
      process: ["Needs Assessment", "Cloud Setup", "Data Migration", "Security Configuration", "Team Training", "Ongoing Monitoring"]
    }
  ];

  const smoothScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleGetQuote = () => {
    setSelectedService(null);
    smoothScroll('#contact');
  };

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

                {/* Learn More Button */}
                <button
                  onClick={() => handleLearnMore(service)}
                  className={`flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => smoothScroll('#contact')}
            size="lg"
            className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-12 py-4 rounded-lg overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center text-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`relative bg-black/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${selectedService.bgColor}`}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Service Icon and Title */}
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-xl flex items-center justify-center mr-4`}>
                <div className="text-black">
                  {selectedService.icon}
                </div>
              </div>
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`}>
                {selectedService.title}
              </h3>
            </div>

            {/* Full Description */}
            <p className="text-gray-300 leading-relaxed mb-8">
              {selectedService.fullDescription}
            </p>

            {/* Process */}
            <h4 className="text-xl font-bold text-white mb-4">Our Process:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {selectedService.process.map((step, idx) => (
                <div key={idx} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className={`w-8 h-8 bg-gradient-to-r ${selectedService.color} rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold text-sm`}>
                    {idx + 1}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{step}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                onClick={handleGetQuote}
                className={`bg-gradient-to-r ${selectedService.color} text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300`}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FuturisticServices;