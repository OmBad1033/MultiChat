import React from "react";
import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#F8F9FF] py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h2 
                className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-2xl tracking-wider"
                style={{ 
                  fontFamily: "var(--font-orbitron)", 
                  letterSpacing: "0.05em",
                  textShadow: "0 0 10px rgba(101, 116, 255, 0.3)"
                }}
              >
                MULTI<span className="text-black">CHAT</span>
              </h2>
            </motion.div>
            <p className="text-gray-600 mb-4">
              Automate your social media interactions and save hours every day.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-black"
                whileHover={{ scale: 1.2 }}
              >
                <FiTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-black"
                whileHover={{ scale: 1.2 }}
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-black"
                whileHover={{ scale: 1.2 }}
              >
                <FiInstagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-black"
                whileHover={{ scale: 1.2 }}
              >
                <FiYoutube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-black">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-black">How it works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} MultiChat AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
