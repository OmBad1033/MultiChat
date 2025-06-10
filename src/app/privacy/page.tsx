'use client';
import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiUserCheck, FiDatabase, FiShare2, FiAlertCircle, FiClock, FiCheckCircle } from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <>
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
              This policy is pending review by Meta for Instagram API integration
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

      <main className="bg-[#F8F9FF] py-16">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For Instagram API Integration
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-8"></div>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <FiDatabase className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">1. Data Collection & Use</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  At SocialAutomator, we value your privacy and are committed to transparency about how we use Instagram's API to enhance your experience. Our integration with Instagram's API allows us to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access your basic profile information (username, profile picture, bio) to personalize your experience on our platform.</li>
                  <li>Retrieve media content (photos/videos) you've shared publicly or that you've explicitly granted us permission to access.</li>
                  <li>Display your Instagram content on our platform in a seamless, integrated manner.</li>
                  <li>Analyze engagement metrics to provide you with valuable insights about your social media performance.</li>
                </ul>
                <p className="font-medium text-blue-600">
                  We never store your Instagram login credentials. Authentication is handled securely through Instagram's official OAuth process.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <FiLock className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">2. How We Process Your Data</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  We handle your data with the utmost care and in compliance with industry best practices:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><span className="font-medium">Authentication:</span> We implement Instagram/Facebook's OAuth protocol for secure login, ensuring your credentials are never exposed to our systems.</li>
                  <li><span className="font-medium">Data Storage:</span> We may temporarily cache public data to improve performance and reduce API calls, but this data is regularly refreshed to ensure accuracy.</li>
                  <li><span className="font-medium">Permissions:</span> Our application only accesses data you have explicitly authorized. You maintain control over what information is shared with us.</li>
                  <li><span className="font-medium">Processing:</span> We process your data to provide analytics, automation features, and insights that help you optimize your social media strategy.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <FiShare2 className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">3. Data Sharing & Compliance</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  We are committed to protecting your data and only share it under specific circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><span className="font-medium">Third Parties:</span> We only share data with Instagram/Facebook as required for API functionality. Any service providers we use to process data are bound by strict confidentiality agreements.</li>
                  <li><span className="font-medium">No Selling:</span> We do not sell your personal data to advertisers or third parties under any circumstances.</li>
                  <li><span className="font-medium">Compliance:</span> Our practices adhere to:
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Meta's Platform Terms and Facebook Developer Policies</li>
                      <li>General Data Protection Regulation (GDPR) for users in the European Union</li>
                      <li>California Consumer Privacy Act (CCPA) for California residents</li>
                      <li>Other applicable privacy laws and regulations in jurisdictions where we operate</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <FiUserCheck className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">4. User Rights</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  We respect your rights regarding your personal data. As a user, you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><span className="font-medium">Revoke Access:</span> You can disconnect our application from your Instagram account at any time through your Facebook Settings or Instagram App permissions.</li>
                  <li><span className="font-medium">Data Deletion:</span> You can request the deletion of any stored data by contacting our privacy team at privacy@socialautomator.com.</li>
                  <li><span className="font-medium">Data Access:</span> You have the right to request a copy of all data we hold about you.</li>
                  <li><span className="font-medium">Opt Out:</span> You can opt out of data collection, though this may limit the functionality of our API-dependent features.</li>
                </ul>
                <p>
                  We aim to respond to all privacy-related requests within 30 days.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <FiShield className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">5. Security</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  Protecting your data is our priority. We implement robust security measures including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Encrypted data transmission using industry-standard HTTPS protocols</li>
                  <li>Secure data storage with regular security audits and updates</li>
                  <li>Limited access to personal data, restricted to authorized personnel only</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Prompt response to potential vulnerabilities or breaches</li>
                </ul>
                <p>
                  In the unlikely event of a data breach that affects your personal information, we will notify you in accordance with applicable laws.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <FiAlertCircle className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">6. Changes to Policy</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  As our services evolve and privacy regulations change, we may update this policy. When we do:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>We'll notify users of significant changes via email or platform announcements</li>
                  <li>We'll provide a comparison of changes for transparency</li>
                  <li>We'll maintain an archive of previous policies for reference</li>
                  <li>The effective date at the top of this policy will be updated</li>
                </ul>
                <p>
                  We encourage you to review this policy periodically to stay informed about how we protect your data.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center mb-6">
                <svg className="text-blue-600 w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold">7. Contact Us</h2>
              </div>
              <div className="pl-12">
                <p className="mb-4">
                  If you have questions, concerns, or requests regarding this privacy policy or our data practices:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                  <p className="mb-2"><span className="font-medium">Email:</span> privacy@socialautomator.com</p>
                  <p className="mb-2"><span className="font-medium">Address:</span> SocialAutomator Inc., 123 Tech Avenue, San Francisco, CA 94107, USA</p>
                  <p><span className="font-medium">Data Protection Officer:</span> dpo@socialautomator.com</p>
                </div>
                <p>
                  We're committed to addressing your concerns and resolving any issues regarding your privacy promptly and thoroughly.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-black text-white p-8 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h3>
            <p>
              This privacy policy is effective as of the date above and will remain in effect except with respect to any changes in its provisions in the future.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
