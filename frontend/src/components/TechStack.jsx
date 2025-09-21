import React from 'react';
import { Cpu, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Website Tech",
      techs: ["React", "Next.js", "Vue.js", "HTML/CSS", "JavaScript"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10"
    },
    {
      category: "Server Tech", 
      techs: ["Node.js", "Python", "PHP", "MySQL", "MongoDB"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      category: "Cloud Services",
      techs: ["Amazon AWS", "Google Cloud", "Microsoft Azure", "Digital Ocean", "Cloudflare"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      category: "Design Tools",
      techs: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-64 h-64 border border-cyan-400/5 rotate-45 animate-spin"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rotate-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 mb-6 backdrop-blur-sm">
            <Cpu className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
            <span className="text-sm text-purple-300 font-medium">Tools We Use</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Modern
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"> Technology</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We use the best and latest tools to build websites that are fast, secure, and easy to use.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className={`
                relative bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 
                hover:bg-black/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl
                ${category.bgColor} hover:border-opacity-60
              `}>
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Category Title */}
                <div className="relative mb-6">
                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {category.category}
                  </h3>
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  {category.techs.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between bg-gray-800/30 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-gray-700/40 transition-all duration-300 group/tech"
                    >
                      <span className="text-gray-300 group-hover/tech:text-white transition-colors duration-300 font-medium">
                        {tech}
                      </span>
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/tech:scale-125 transition-transform duration-300`}></div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect - Lightning */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className={`h-6 w-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-400 text-sm">Tools We Know</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">99%</div>
            <div className="text-gray-400 text-sm">Website Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">3x</div>
            <div className="text-gray-400 text-sm">Faster Loading</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;