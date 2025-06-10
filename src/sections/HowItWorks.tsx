import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description: "Link your social media accounts from platforms like Instagram, Twitter, Facebook, and LinkedIn."
  },
  {
    number: "02",
    title: "Set Up Automation Rules",
    description: "Create custom response templates and rules for different types of interactions."
  },
  {
    number: "03",
    title: "Monitor Performance",
    description: "Track engagement metrics and adjust your automation strategy as needed."
  },
  {
    number: "04",
    title: "Scale Your Presence",
    description: "Grow your audience while maintaining meaningful connections through smart automation."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-[#EAEEFE]">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                ease: "easeOut" 
              }}
            >
              <motion.div 
                className="text-5xl font-bold text-blue-100 absolute -top-6 -left-2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08 + 0.2,
                  ease: "easeOut" 
                }}
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
