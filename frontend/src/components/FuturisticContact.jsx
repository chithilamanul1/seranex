import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle, Rocket, Sparkles } from 'lucide-react';

const FuturisticContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@seranex.com",
      description: "Get in touch for project inquiries",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Come to our innovation hub",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Graphic Design",
    "Digital Marketing",
    "E-Commerce",
    "Cloud Solutions"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-48 h-48 border border-cyan-400/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-green-400/10 rounded-full animate-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 mb-6 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Together</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss your project and create something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Rocket className="h-6 w-6 text-cyan-400 mr-3" />
                  Start Your Project
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-lg h-12"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-lg h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Project Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-lg h-12"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-lg resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-black">
                          {info.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className={`text-lg font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:${info.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                          {info.title}
                        </h4>
                        <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
                Our Services
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join over 200+ satisfied clients who have transformed their businesses with SERANEX. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticContact;