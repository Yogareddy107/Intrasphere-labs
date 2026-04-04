import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Layout, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven sensor solution integrated into uniforms for law enforcement, military and firefighters, providing real-time vital monitoring and situational awareness in high-risk environments.",
    tags: ["Safety", "Military", "AI Sensors", "Real-time Monitoring"],
    imageUrl: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    isFeatured: true,
    link: "/projects/firecat",
    details: `
      FireCat Group aimed to enhance safety in high-risk environments. Intrasphere Labs provided the 6th SENSE solution with secure real-time data transmission, high-quality sensors resistant to extreme conditions, integrated AI-powered clothing, and a centralized control unit. Features include Man Down Alarm, GPS positioning, vital sign monitoring, and Panic Button. Benefits: life-saving technology, machine learning preventing false alarms, durable hardware with 7-10 year lifespan, washable sensors, and Plug & Play installation with 12-20 hours of operation per charge.
    `
  },
  {
    id: 2,
    title: "Performance Athletic Footwear",
    brand: "Global Sports Retail Leader",
    description: "Smart Footwear R&D aiming to revolutionize development, fitting, and testing of athletic footwear.",
    tags: ["Sports", "R&D", "Footwear", "Athletic Performance"],
    imageUrl: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
    link: "/projects/sport-retail"
  },
  {
    id: 3,
    title: "Workwear Climate Control",
    brand: "European Multinational Textile Producer",
    description: "Fully integrated temperature controls for professionals working in extreme heat and cold. Modular approach to enable full-body systems.",
    tags: ["Climate Control", "Workwear", "Temperature Regulation", "Extreme Conditions"],
    imageUrl: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
    link: "/projects/workwear"
  },
  {
    id: 4,
    title: "Ice Hockey Elite Skill Tracker",
    brand: "Mars Blades",
    description: "R&D product evaluating data from single IMU embedded in the hockey shoe. Aim: establish motion patterns that lead to ultimate acceleration, speed, and maneuverability.",
    tags: ["Ice Hockey", "Motion Analysis", "Performance Tracking", "Sports"],
    imageUrl: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    link: "/projects/hockey"
  },
  {
    id: 5,
    title: "Dog Activity Counter",
    brand: "UK Insurance Giant",
    description: "R&D project embedding a step counter in a dog collar. Measures daily activity and sends real-time data to the cloud for veterinary consultancies.",
    tags: ["Pet Technology", "Insurance", "Activity Tracking", "R&D"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
    link: "/projects/pet-tracker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4 uppercase tracking-widest">
              <Layout className="w-3.5 h-3.5" />
              <span>Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit tracking-tight">Featured Projects</h2>
            <p className="text-gray-600 text-lg font-medium">
              A glimpse into the high-impact digital solutions we've engineered for global partners and innovative startups.
            </p>
          </div>
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
          >
            <span>View Case Studies</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-600">
                    {project.tags[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{project.brand}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors font-outfit">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={project.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

