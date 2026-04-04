import { useState } from "react";
import { ArrowRight, Code, Cpu, Layers, MessageSquare, Database, Server, Smartphone, Globe, Zap, Wind, Mail, MessageCircle, Triangle, Shield, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const isMobile = useIsMobile();
  const [showContacts, setShowContacts] = useState(false);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-screen w-full">
        <div className="absolute inset-0 bg-black w-full">
          <video autoPlay loop muted playsInline preload="metadata" className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} poster="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png">
            <source src="/lovable-uploads/video_1751292840840_1751292842546.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" alt="Intrasphere Labs Technologies Connected People" className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent absolute inset-0 flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 px-4 flex flex-col items-center">
            <motion.div variants={itemVariants} className="-bottom-0">
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-center max-w-5xl mx-auto font-outfit font-extrabold">
                Innovative Software & Web Development for the Digital Era
              </motion.h1>
              <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6 text-center max-w-2xl mx-auto">
                We empower enterprises and startups with cutting-edge, scalable, and secure digital solutions designed to drive growth and operational efficiency.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12" variants={itemVariants}>
                <button 
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center"
                  onClick={() => setShowContacts(!showContacts)}
                >
                  Book a Free Consultation
                </button>
                
                <AnimatePresence>
                  {showContacts && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-4 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
                    >
                      <a 
                        href="https://wa.me/919490964015" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 bg-green-500/20 rounded-full text-green-400 hover:bg-green-500 hover:text-white transition-all shadow-lg group relative"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">+91 9490964015</span>
                      </a>
                      <a 
                        href="mailto:teamintrasphere@gmail.com" 
                        className="p-2.5 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition-all shadow-lg group relative"
                        title="Email"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">teamintrasphere@gmail.com</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              {/* Technology Stack icons floating below the button */}
              <motion.div 
                className="mt-12 sm:mt-12 text-center w-full overflow-hidden flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 sm:mb-8 text-center">Our Core Technology Stack</p>
                <div className="grid grid-cols-5 sm:flex sm:flex-wrap justify-items-center justify-center items-center gap-y-6 sm:gap-y-10 gap-x-1 sm:gap-x-12 pb-4 opacity-100 transition-all duration-700 w-full px-1 max-w-sm mx-auto sm:max-w-none">
                  {/* Icon 1: React */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 hover:scale-110">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-500" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">React</span>
                  </motion.div>
                  
                  {/* Icon 2: Next.js */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 hover:scale-110">
                      <Triangle className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-white" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Next.js</span>
                  </motion.div>
                  
                  {/* Icon 3: TypeScript */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-600/20 transition-all duration-300 hover:scale-110">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-600" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">TypeScript</span>
                  </motion.div>
                  
                  {/* Icon 4: Node.js */}
                  <motion.div 
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-300 hover:scale-110">
                      <Server className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-green-500" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Node.js</span>
                  </motion.div>
                  
                  {/* Icon 5: Tailwind */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20 transition-all duration-300 hover:scale-110">
                      <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-cyan-400" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Tailwind</span>
                  </motion.div>
                  
                  {/* Icon 6: PostgreSQL */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-indigo-400/10 group-hover:border-indigo-400/20 transition-all duration-300 hover:scale-110">
                      <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-indigo-400" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">PostgreSQL</span>
                  </motion.div>

                  {/* Icon 7: AWS/Cloud */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300 hover:scale-110">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-orange-500" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors space-nowrap whitespace-nowrap">AWS/Cloud</span>
                  </motion.div>

                  {/* Icon 8: Supabase */}
                  <motion.div 
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300 hover:scale-110">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-emerald-500" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Supabase</span>
                  </motion.div>

                  {/* Icon 9: Turso */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-sky-400/10 group-hover:border-sky-400/20 transition-all duration-300 hover:scale-110">
                      <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-sky-400" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Turso</span>
                  </motion.div>

                  {/* Icon 10: Appwrite */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
                    className="flex flex-col items-center gap-1.5 group flex-shrink-0"
                  >
                    <div className="p-1.5 sm:p-2.5 rounded-xl bg-white/20 border border-white/10 group-hover:bg-rose-500/10 group-hover:border-rose-500/20 transition-all duration-300 hover:scale-110">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-rose-500" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Appwrite</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black mb-1">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 flex items-center justify-center rounded-lg text-blue-600 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Web Development</h3>
            <p className="text-gray-600 text-xs md:text-sm">High-performance, responsive web applications engineered for speed, security, and world-class user experience.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 flex items-center justify-center rounded-lg text-indigo-600 mb-2 md:mb-3">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Mobile Solutions</h3>
            <p className="text-gray-600 text-xs md:text-sm">Feature-rich iOS and Android applications that connect brands with users through intuitive design and robust performance.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 flex items-center justify-center rounded-lg text-cyan-600 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Cloud & Infrastructure</h3>
            <p className="text-gray-600 text-xs md:text-sm">Scalable cloud infrastructure and API integrations designed to handle complex workflows and high-traffic demands.</p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>;
};
export default Hero;