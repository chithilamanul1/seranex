import React, { useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight, Monitor, Smartphone, Globe, Rocket, X } from 'lucide-react';

const FuturisticPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "TechStart Website",
      category: "Business Website",
      description: "A modern website for a technology startup with easy navigation and mobile-friendly design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      technologies: ["Website Design", "Mobile-Friendly", "Fast Loading", "SEO Ready"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      icon: <Monitor className="h-6 w-6" />,
      fullDescription: "We built a complete website for TechStart, a growing technology company. The site features a clean, modern design that works perfectly on all devices. We included a content management system so they can easily update their blog and services. The website loads quickly and is optimized for search engines.",
      results: ["50% more website visitors", "30% increase in contact forms", "Mobile traffic up 70%", "Page load time under 2 seconds"],
      demoUrl: "#"
    },
    {
      id: 2,
      title: "FoodDelivery App",
      category: "Mobile App",
      description: "Easy-to-use food delivery app with online ordering and real-time tracking features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["iPhone App", "Android App", "Online Payments", "GPS Tracking"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      icon: <Smartphone className="h-6 w-6" />,
      fullDescription: "FoodDelivery needed a mobile app that customers would love using. We created an intuitive app for both iPhone and Android with features like easy restaurant browsing, secure payments, and real-time order tracking. The app has become their customers' favorite way to order food.",
      results: ["10,000+ app downloads", "4.8 star rating", "Order time reduced by 40%", "Customer retention up 60%"],
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Fashion Store Online",
      category: "Online Shop",
      description: "Beautiful online clothing store with easy shopping cart and secure payment system.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Online Store", "Payment System", "Inventory", "Customer Reviews"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      icon: <Globe className="h-6 w-6" />,
      fullDescription: "Fashion Store wanted to sell their clothes online. We built them a beautiful e-commerce website with an easy shopping experience, secure payment processing, and automatic inventory management. Customers can easily browse products, read reviews, and checkout safely.",
      results: ["200% increase in sales", "Expanded to 3 new markets", "95% customer satisfaction", "Average order value up 45%"],
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "Health App",
      description: "Personal fitness tracking app with workout plans and progress monitoring features.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Workout Plans", "Progress Tracking", "Social Features", "Health Data"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      icon: <Rocket className="h-6 w-6" />,
      fullDescription: "We created a comprehensive fitness app that helps users stay motivated and track their progress. The app includes personalized workout plans, progress tracking with charts and graphs, social features to connect with friends, and integration with popular health devices.",
      results: ["25,000+ active users", "Average 15 min daily usage", "80% user retention rate", "Featured in App Store"],
      demoUrl: "#"
    },
    {
      id: 5,
      title: "Learning Platform",
      category: "Education Website",
      description: "Online learning platform where students can take courses and track their progress.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Video Lessons", "Progress Tests", "Certificates", "Student Dashboard"],
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      icon: <Monitor className="h-6 w-6" />,
      fullDescription: "An educational institution needed an online learning platform for their students. We built a comprehensive system with video lessons, interactive quizzes, progress tracking, and certificate generation. Students can learn at their own pace and teachers can monitor progress easily.",
      results: ["1,000+ students enrolled", "92% course completion rate", "50+ courses available", "Reduced admin work by 60%"],
      demoUrl: "#"
    },
    {
      id: 6,
      title: "Restaurant Website",
      category: "Local Business",
      description: "Professional website for a local restaurant with online menu and reservation system.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      technologies: ["Online Menu", "Table Booking", "Location Map", "Customer Reviews"],
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10",
      icon: <Globe className="h-6 w-6" />,
      fullDescription: "A local restaurant wanted to modernize their business with an online presence. We created a beautiful website showcasing their menu, allowing customers to make reservations online, and featuring customer reviews. The site helped them attract new customers and manage bookings better.",
      results: ["40% more reservations", "Reduced phone calls by 30%", "New customer visits up 55%", "Online reviews improved"],
      demoUrl: "#"
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

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const handleStartProject = () => {
    setSelectedProject(null);
    smoothScroll('#contact');
  };

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
            <span className="text-sm text-purple-300 font-medium">Our Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Recent
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Check out some of the amazing websites and apps we've built for our clients.
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

                  {/* View Project Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleViewProject(project)}
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
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
                  <button
                    onClick={() => handleViewProject(project)}
                    className={`flex items-center text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => smoothScroll('#contact')}
            size="lg"
            className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-12 py-4 rounded-lg overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`relative bg-black/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${selectedProject.bgColor}`}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Project Header */}
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.color} rounded-xl flex items-center justify-center mr-4`}>
                <div className="text-black">
                  {selectedProject.icon}
                </div>
              </div>
              <div>
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent`}>
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400">{selectedProject.category}</p>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-xl mb-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Full Description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 bg-gradient-to-r ${selectedProject.color} text-black rounded-md text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Results Achieved</h4>
                <div className="space-y-3">
                  {selectedProject.results.map((result, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${selectedProject.color} rounded-full mr-3`}></div>
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                onClick={handleStartProject}
                className={`bg-gradient-to-r ${selectedProject.color} text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300`}
              >
                Start Similar Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FuturisticPortfolio;