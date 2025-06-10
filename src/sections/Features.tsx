import { motion } from "framer-motion";
import { FiMessageSquare, FiUsers, FiBarChart2, FiClock } from "react-icons/fi";

const features = [
  {
    icon: <FiMessageSquare className="h-6 w-6" />,
    title: "Automated Responses",
    description: "AI-powered responses to comments and messages across all your social platforms."
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: "Audience Engagement",
    description: "Increase engagement with timely responses and personalized interactions."
  },
  {
    icon: <FiBarChart2 className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description: "Track performance metrics and engagement statistics in real-time."
  },
  {
    icon: <FiClock className="h-6 w-6" />,
    title: "Scheduled Posting",
    description: "Plan and schedule your content across multiple platforms in advance."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers everything you need to automate and enhance your social media presence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-[#F8F9FF] p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
