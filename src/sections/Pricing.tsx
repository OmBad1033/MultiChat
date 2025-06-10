'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    title: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: "Start for free",
    popular: false,
    inverse: false,
    features: [
      "Connect 2 social accounts",
      "Basic automated responses",
      "5GB storage",
      "Weekly analytics reports",
      "Email support"
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 290,
    buttonText: "Get started",
    popular: true,
    inverse: true,
    features: [
      "Connect 10 social accounts",
      "Advanced AI responses",
      "50GB storage",
      "Real-time analytics",
      "Priority support",
      "Custom response templates",
      "Scheduled posting"
    ],
  },
  {
    title: "Business",
    monthlyPrice: 79,
    yearlyPrice: 790,
    buttonText: "Contact sales",
    popular: false,
    inverse: false,
    features: [
      "Unlimited social accounts",
      "Enterprise-grade AI",
      "200GB storage",
      "Advanced analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "Team collaboration",
      "API access",
      "White-labeling options"
    ],
  },
];

export const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  return (
    <section id="pricing" className="py-16 bg-[#EAEEFE]">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!annual ? 'font-bold' : 'text-gray-500'}`}>Monthly</span>
            <motion.div 
              className="relative w-14 h-7 bg-gray-200 rounded-full cursor-pointer"
              onClick={() => setAnnual(!annual)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="absolute w-5 h-5 bg-blue-600 rounded-full top-1"
                animate={{ left: annual ? '8px' : '28px' }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.div>
            <span className={`ml-3 ${annual ? 'font-bold' : 'text-gray-500'}`}>Annual (Save 20%)</span>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.inverse 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm opacity-70">
                    {plan.monthlyPrice === 0 ? '' : annual ? '/year' : '/month'}
                  </span>
                </div>
                <motion.button 
                  className={`w-full py-3 rounded-lg font-medium mb-8 ${
                    plan.inverse 
                      ? 'bg-white text-black' 
                      : 'bg-black text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.buttonText}
                </motion.button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className={`h-5 w-5 mr-2 mt-0.5 ${
                        plan.inverse ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
