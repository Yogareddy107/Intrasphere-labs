import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const specializations = [
  "Web Development",
  "App Development",
  "AI Applications",
  "Data Driven Products",
  "Blockchain Technology",
  "Cloud & DevOps",
  "UI/UX",
  "Logo Designing",
  "Rapid Prototyping and MVPs",
  "Digital Marketing & SEO",
  "Brand Strategy",
  "Visual Identity"
];

const Specializations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Specializations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From vision to velocity, we specialize in high-impact digital solutions designed for the modern era.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specializations.map((spec, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="mr-4 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-gray-800 font-semibold tracking-tight leading-tight">{spec}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specializations;
