import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <motion.div 
        className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white/60 hidden md:block">Automate your social media interactions</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </motion.div>
      <div className="py-5 bg-white shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gray-200 rounded-full mr-3">
                <Image src={Logo} alt="Logo" />
              </div>
              
              {/* MultiChat Futuristic Brand Name */}
              <Link href="/">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h1 
                    className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-2xl tracking-wider"
                    style={{ 
                      fontFamily: "'Orbitron', sans-serif", 
                      letterSpacing: "0.05em",
                      textShadow: "0 0 10px rgba(101, 116, 255, 0.3)"
                    }}
                    whileHover={{
                      textShadow: "0 0 15px rgba(101, 116, 255, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    MULTI<span className="text-black">CHAT</span>
                  </motion.h1>
                  
                  {/* Animated tech line */}
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  
                  {/* Futuristic dots */}
                  <motion.div 
                    className="absolute -right-4 top-0 flex flex-col gap-[3px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="w-[3px] h-[3px] rounded-full bg-blue-500"></div>
                    <div className="w-[3px] h-[3px] rounded-full bg-purple-500"></div>
                    <div className="w-[3px] h-[3px] rounded-full bg-blue-500"></div>
                  </motion.div>
                  
                </motion.div>
              </Link>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <motion.a 
                href="#features" 
                whileHover={{ scale: 1.1, color: "#000" }}
                className="hover:text-black transition-colors"
              >
                Features
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                whileHover={{ scale: 1.1, color: "#000" }}
                className="hover:text-black transition-colors"
              >
                How it works
              </motion.a>
              <motion.a 
                href="#pricing" 
                whileHover={{ scale: 1.1, color: "#000" }}
                className="hover:text-black transition-colors"
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#testimonials" 
                whileHover={{ scale: 1.1, color: "#000" }}
                className="hover:text-black transition-colors"
              >
                Testimonials
              </motion.a>
              <motion.button 
                className="bg-black text-white py-2 px-4 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started free
              </motion.button>
            </nav>
          </div>
          
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  <a href="#features" className="py-2">Features</a>
                  <a href="#how-it-works" className="py-2">How it works</a>
                  <a href="#pricing" className="py-2">Pricing</a>
                  <a href="#testimonials" className="py-2">Testimonials</a>
                  <button className="bg-black text-white py-2 px-4 rounded-lg font-medium mt-2">
                    Get started free
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
