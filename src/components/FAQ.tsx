import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Who’s behind Intrasphere Labs?",
    answer: "Intrasphere Labs is powered by a passionate team of developers, designers, and strategists who care about your success. We combine decades of experience in the software industry to deliver results that matter."
  },
  {
    question: "Do you accept custom requirements?",
    answer: "Absolutely! We specialize in tailored digital solutions. Whether you have a specific technical challenge or a unique feature request, our team works closely with you to bring your custom requirements to life."
  },
  {
    question: "What is your turnaround time?",
    answer: "We pride ourselves on our speed and reliability. Most projects follow an agile delivery model, with initial MVPs ready within weeks rather than months. We prioritize efficiency without compromising on quality."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we believe in long-term partnerships. We offer comprehensive post-launch support and maintenance to ensure your digital product stays secure, updated, and continues to perform optimally."
  },
  {
    question: "Can you handle branding and marketing too?",
    answer: "Yes! Beyond software engineering, we offer full-service branding, visual identity, and digital marketing strategies to ensure your product not only works perfectly but also reaches its target audience."
  },
  {
    question: "What’s your pricing?",
    answer: "Our pricing is fair and transparent. We offer competitive rates that scale with your project needs—providing more value than hiring an internal team while maintaining lower overhead than traditional large agencies."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  onClick: () => void 
}) => {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/10 shadow-sm' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
      <button 
        className="w-full p-5 flex items-center justify-between text-left gap-4"
        onClick={onClick}
      >
        <span className={`text-lg font-bold ${isOpen ? 'text-blue-600' : 'text-gray-900'} transition-colors`}>{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed font-medium border-t border-gray-100/50 mt-2 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            We Get It — Curiosity Leads to Success! Got questions? That’s a great sign. Here are some answers to get you started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FAQItem 
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 rounded-3xl bg-gray-900 text-white text-center relative overflow-hidden group shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 blur-3xl bg-blue-500 rounded-full w-64 h-64 -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Still have a unique question?</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10 capitalize">
            Our team is always ready to dive deep into your specific needs. Let's talk directly.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all relative z-10 group shadow-lg">
            Let's Connect Directly
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
