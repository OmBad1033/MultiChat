'use client';
import React from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { HowItWorks } from "@/sections/HowItWorks";
import { Testimonials } from "@/sections/Testimonials";
import { Pricing } from "@/sections/Pricing";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import { FiClock, FiCheckCircle } from "react-icons/fi";

export default function Home() {
  // Add smooth scrolling behavior
  React.useEffect(() => {
    // Smooth scroll function
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener
    document.addEventListener('click', handleAnchorClick);
    
    // Clean up
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main>
      <Header />
      
      {/* API Approval Banner */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 relative overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15 
        }}
      >
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FiClock className="h-5 w-5 animate-pulse" />
              <span className="font-medium">Status:</span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <span className="font-medium">Awaiting Instagram API Approval</span>
            </motion.div>
            
            <motion.div
              className="text-sm text-white/80 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              This application is pending review by Meta for Instagram API integration
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-white/10"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 h-16 w-16 rounded-full bg-white/10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 h-12 w-12 rounded-full bg-white/10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Timeline indicator */}
      <div className="bg-gray-100 py-3">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-full h-2 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </div>
          </div>
          <div className="flex justify-between max-w-2xl mx-auto mt-2 text-xs text-gray-500">
            <div className="flex flex-col items-center">
              <FiCheckCircle className="text-green-500" />
              <span>Submitted</span>
            </div>
            <div className="flex flex-col items-center">
              <FiClock className="text-yellow-500" />
              <span>In Review</span>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <FiCheckCircle />
              <span>Approved</span>
            </div>
          </div>
        </div>
      </div>
      
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
