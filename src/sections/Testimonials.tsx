import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This app has completely transformed how I manage my social media presence. The automated responses save me hours every day.",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
    role: "Marketing Manager"
  },
  {
    text: "Our team's engagement rates have skyrocketed since we started using this tool. The AI responses are incredibly natural.",
    name: "Josh Smith",
    username: "@jjsmith",
    role: "Social Media Influencer"
  },
  {
    text: "As a small business owner, I couldn't keep up with all the comments and messages. This platform has been a game-changer.",
    name: "Morgan Lee",
    username: "@morganleewhiz",
    role: "Entrepreneur"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their social media strategy
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-[#F8F9FF] p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            >
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
