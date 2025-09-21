import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Code, Palette, TrendingUp } from 'lucide-react';

const FuturisticHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 100) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-900">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-purple-500/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rotate-45 animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glowing Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 mb-8 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
          <span className="text-sm text-cyan-300 font-medium">Crafting Digital Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-white">FUTURE</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            CODE
          </span>
        </h1>

        {/* Tagline with Typing Effect */}
        <div className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
          <span className="text-cyan-400">&gt;</span> We Build Tomorrow's Digital Experiences
          <span className="text-cyan-400 animate-pulse">_</span>
        </div>

        {/* Services Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/20">
              <Code className="h-8 w-8 text-cyan-400" />
            </div>
            <span className="text-xs text-gray-400 font-medium">Development</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border border-purple-400/20">
              <Palette className="h-8 w-8 text-purple-400" />
            </div>
            <span className="text-xs text-gray-400 font-medium">Design</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border border-green-400/20">
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
            <span className="text-xs text-gray-400 font-medium">Marketing</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into cutting-edge digital solutions. We specialize in web development, 
          graphic design, and digital marketing that pushes the boundaries of innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-12 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">200+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
            <div className="text-sm text-gray-400">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
            <div className="text-sm text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;