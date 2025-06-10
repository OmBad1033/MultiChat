import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div 
          className="bg-black text-white rounded-2xl p-8 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your social media strategy?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join thousands of businesses and creators who are saving time and increasing engagement with our platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="bg-white text-black py-3 px-8 rounded-lg font-medium mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started for free
            </motion.button>
            <motion.button 
              className="bg-transparent border border-white text-white py-3 px-8 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
