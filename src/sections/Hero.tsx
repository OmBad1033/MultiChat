import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
          
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                ease: "easeOut" 
              }}
            >
              Automate Your Social Media Presence
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                ease: "easeOut" 
              }}
            >
              Connect your social media accounts and let our AI handle messages and comments. Save time and boost engagement with automated responses.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                ease: "easeOut" 
              }}
            >
              <motion.button 
                className="bg-black text-white py-3 px-6 rounded-lg font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Get started for free
              </motion.button>
              <motion.button 
                className="border border-black py-3 px-6 rounded-lg font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                See how it works
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut" 
            }}
          >
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="bg-gray-100 rounded-lg p-6 h-80 flex items-center justify-center">
                <Image src="/images/dashboard.png" width={500} height={500} alt="Dashboard" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
