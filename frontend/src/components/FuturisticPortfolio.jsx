import React from 'react';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight, Monitor, Smartphone, Globe, Rocket } from 'lucide-react';

const FuturisticPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "QuantumTech Platform",
      category: "Web Application",
      description: "A cutting-edge SaaS platform for quantum computing simulations with real-time analytics and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      technologies: ["React", "Node.js", "AI/ML", "WebGL"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      id: 2,
      title: "NeoBank Mobile",
      category: "Mobile App",
      description: "Revolutionary banking app with biometric security, AI budgeting, and cryptocurrency integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React Native", "Blockchain", "AI", "Biometrics"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 3,
      title: "MetaVerse Commerce",
      category: "E-Commerce",
      description: "Next-generation e-commerce platform with VR showrooms, AR try-ons, and NFT marketplace integration.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Next.js", "VR", "AR", "NFT", "Web3"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 4,
      title: "SpaceX Dashboard",
      category: "Data Visualization",
      description: "Mission control dashboard for space operations with real-time telemetry and predictive analytics.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["D3.js", "WebSocket", "Python", "TensorFlow"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Neural Network IDE",
      category: "Developer Tools",
      description: "Advanced IDE for machine learning with visual neural network designer and cloud GPU integration.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Electron", "TensorFlow", "CUDA", "Docker"],
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      id: 6,
      title: "CyberSec Platform",
      category: "Security",
      description: "AI-powered cybersecurity platform with threat detection, automated response, and blockchain logging.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      technologies: ["Python", "AI/ML", "Blockchain", "Kubernetes"],
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-64 h-64 border border-cyan-400/5 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-green-400/10 rounded-full animate-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 mb-6 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
            <span className="text-sm text-purple-300 font-medium">Our Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge projects that showcase the future of digital innovation and technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className={`
                relative bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden
                hover:bg-black/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl
                ${project.bgColor} hover:border-opacity-60
              `}>
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full backdrop-blur-sm`}>
                    <div className="flex items-center text-black text-xs font-medium">
                      {project.icon}
                      <span className="ml-1">{project.category}</span>
                    </div>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative p-6">
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:${project.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm rounded-md text-xs text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className={`flex items-center text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}>
                    View Project
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-12 py-4 rounded-lg overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center text-lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FuturisticPortfolio;