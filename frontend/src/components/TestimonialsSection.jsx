import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SERANEX transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve remarkable results.",
      author: "Riyon Basitha",
      position: "CEO, NovaLink solutions",
      rating: 5
    },
    {
      quote: "Working with SERANEX was a game-changer for our business. Their team's expertise and dedication exceeded our expectations.",
      author: "Sajith Fernando",
      position: "Marketing Director, Sasip International",
      rating: 5
    },
    {
      quote: "The level of professionalism and technical excellence SERANEX brings to the table is outstanding. They're more than developers; they're strategic partners.",
      author: "Emma Rodriguez",
      position: "Founder, EcoTech Ventures",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8 hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 italic group-hover:text-white transition-colors duration-300">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-600 pt-4">
                <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {testimonial.author}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;