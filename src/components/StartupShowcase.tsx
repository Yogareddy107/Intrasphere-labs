import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Home, Calendar, ArrowUpRight, Sparkles } from "lucide-react";

const startups = [
  {
    name: "ApplyWise",
    description: "AI-powered application assistant that optimizes your professional outreach and track success.",
    icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    tag: "AI & Productivity",
    color: "bg-blue-50"
  },
  {
    name: "RoomSure",
    description: "The modern standard for seamless property management, tenant verification, and secure bookings.",
    icon: <Home className="w-8 h-8 text-emerald-500" />,
    tag: "PropTech",
    color: "bg-emerald-50"
  },
  {
    name: "CheckBeforeCommit",
    description: "Advanced code analysis and pull request verification tool for high-performance engineering teams.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
    tag: "DevTools",
    color: "bg-indigo-50"
  },
  {
    name: "EventWala",
    description: "Your hyperlocal marketplace for event services, connecting planners with verified vendors instantly.",
    icon: <Calendar className="w-8 h-8 text-rose-500" />,
    tag: "Marketplace",
    color: "bg-rose-50"
  }
];

const StartupShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-6">
            <Rocket className="w-4 h-4" />
            <span>Our Micro SaaS Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-outfit">Our Startup Ecosystem</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Beyond serving clients, we build, launch, and scale our own innovative digital products. 
            We practice what we preach by building market-leading solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${startup.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {startup.icon}
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">{startup.tag}</span>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  {startup.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {startup.description}
              </p>
              
              <div className="pt-4 border-t border-gray-50">
                <span className="text-xs font-bold text-blue-600 group-hover:underline cursor-pointer">Explore Product →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupShowcase;
