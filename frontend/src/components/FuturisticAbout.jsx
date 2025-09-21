import React from 'react';
import { Users, Award, Zap, Target, Heart, Star, CheckCircle, Lightbulb } from 'lucide-react';

const FuturisticAbout = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Sarah Kim",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616c768e9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships based on trust and results.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "We deliver nothing less than exceptional quality in every project we undertake.",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Reliability",
      description: "Consistent delivery, transparent communication, and dependable support you can count on.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const achievements = [
    { number: "200+", label: "Projects Completed", color: "text-cyan-400" },
    { number: "50+", label: "Happy Clients", color: "text-purple-400" },
    { number: "5+", label: "Years Experience", color: "text-green-400" },
    { number: "15+", label: "Technologies", color: "text-orange-400" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-40 h-40 border border-cyan-400/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rotate-12 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 mb-6 backdrop-blur-sm">
            <Users className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium">About SERANEX</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet The
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Future</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking digital agency that combines technical expertise with creative vision to deliver 
            extraordinary digital experiences. Our mission is to transform businesses through innovative technology.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Founded in 2019, SERANEX emerged from a vision to bridge the gap between cutting-edge technology 
                  and exceptional user experiences. What started as a small team of passionate developers has grown 
                  into a full-service digital agency.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we specialize in web development, graphic design, and digital marketing, helping businesses 
                  of all sizes achieve their digital transformation goals. We believe in the power of innovation 
                  to create meaningful impact.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/20">
                  <div className="text-center">
                    <Zap className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-cyan-300 font-medium">Innovation in Motion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-black/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-r ${member.color}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className={`text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${member.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {member.name}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            Our <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className={`
                  bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center
                  hover:bg-black/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl
                `}>
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-black">
                      {value.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className={`text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:${value.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold ${achievement.color} mb-2`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticAbout;