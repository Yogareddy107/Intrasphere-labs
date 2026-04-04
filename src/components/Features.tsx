import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare, Building, Cpu, Layers } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Activity className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Sports & Health Tech",
      description: "Connected equipment and wearables with real-time performance analytics, injury prevention, and health monitoring.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
      category: "Sports"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Safety & Defense",
      description: "Smart PPE and tactical gear with environmental monitoring, threat detection, and real-time health tracking.",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png",
      category: "Safety"
    },
    {
      icon: <HardHat className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Industrial IoT",
      description: "Predictive maintenance systems, asset tracking, and worker safety monitoring for industrial environments.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png",
      category: "Industrial"
    },
    {
      icon: <Building className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Smart Cities",
      description: "Environmental monitoring, traffic flow analysis, and infrastructure health systems for urban development.",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
      category: "Cities"
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);

  const pillars = [
    {
      icon: <Code className="w-6 h-6 text-gray-700" />,
      title: "Frontend Development",
      description: "Beautiful, responsive user interfaces built with React, Vue, and modern frameworks that deliver exceptional user experiences."
    },
    {
      icon: <Cpu className="w-6 h-6 text-gray-700" />,
      title: "Backend & APIs",
      description: "Robust server-side logic, RESTful APIs, and database design that power your applications with security and scalability."
    },
    {
      icon: <Layers className="w-6 h-6 text-gray-700" />,
      title: "Deployment & Support",
      description: "Cloud hosting, CI/CD pipelines, performance optimization, and ongoing maintenance for reliable operation."
    }
  ];

  return (
    <>
      <section id="features" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Full-Stack Web & App Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create custom web applications, mobile apps, and digital solutions that transform your business and engage your users.
            </p>
          </motion.div>

          {/* Three Pillars Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Development Approach</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every successful digital solution requires frontend excellence, backend reliability, and seamless deployment. We deliver all three.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-lg mx-auto mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Industry Applications - Simplified grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 max-w-3xl mx-auto feature-item"
          >
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Industry Applications
            </div>
            <h3 className="text-2xl font-bold mb-4 font-outfit">Solutions Across Industries</h3>
            <p className="text-gray-600">
              We build custom web and mobile applications for diverse sectors, delivering tailored solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-item rounded-xl overflow-hidden transform transition-all duration-300 relative shadow-lg hover:-translate-y-1 h-[280px]"
                onMouseEnter={() => setHoveredFeature(index)} 
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-all duration-300 grayscale hover:grayscale-0" 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    hoveredFeature === index ? "bg-black/50" : "bg-black/70"
                  )}></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      {feature.icon}
                      <span className="text-white/80 text-sm font-medium">{feature.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-outfit">{feature.title}</h3>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From Idea to Launch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined 5-phase process takes your app or website from initial concept to successful launch with ongoing support.
            </p>
          </motion.div>

          {isMobile ? (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {[
                  { 
                    phase: "01", 
                    title: "Discovery & Strategy", 
                    description: "Market research, requirements gathering, and feasibility analysis to define the optimal product approach.",
                    icon: <MessageSquare className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "02", 
                    title: "Design & Prototyping", 
                    description: "Rapid prototyping using our modular technology library to validate concepts and gather early feedback.",
                    icon: <Code className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "03", 
                    title: "Development & Integration", 
                    description: "Full-stack development combining hardware, software, and cloud platforms into cohesive solutions.",
                    icon: <Zap className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "04", 
                    title: "Testing & Certification", 
                    description: "Comprehensive testing, compliance verification, and certification management for market readiness.",
                    icon: <CheckCircle className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "05", 
                    title: "Launch & Scale", 
                    description: "Market deployment, production scaling, and ongoing support to ensure commercial success.",
                    icon: <Rocket className="h-8 w-8 text-white" />
                  }
                ].map((step, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="h-80">
                        <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                          <div className="bg-gray-700 rounded-full p-4 mb-4">
                            {step.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-400 mb-2">{step.phase}</div>
                          <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { 
                  phase: "01", 
                  title: "Discovery & Strategy", 
                  description: "Market research, requirements gathering, and feasibility analysis to define the optimal product approach.",
                  icon: <MessageSquare className="h-8 w-8 text-white" />
                },
                { 
                  phase: "02", 
                  title: "Design & Prototyping", 
                  description: "Rapid prototyping using our modular technology library to validate concepts and gather early feedback.",
                  icon: <Code className="h-8 w-8 text-white" />
                },
                { 
                  phase: "03", 
                  title: "Development & Integration", 
                  description: "Full-stack development combining hardware, software, and cloud platforms into cohesive solutions.",
                  icon: <Zap className="h-8 w-8 text-white" />
                },
                { 
                  phase: "04", 
                  title: "Testing & Certification", 
                  description: "Comprehensive testing, compliance verification, and certification management for market readiness.",
                  icon: <CheckCircle className="h-8 w-8 text-white" />
                },
                { 
                  phase: "05", 
                  title: "Launch & Scale", 
                  description: "Market deployment, production scaling, and ongoing support to ensure commercial success.",
                  icon: <Rocket className="h-8 w-8 text-white" />
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gray-700 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-400 mb-2">{step.phase}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {index < 4 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gray-700 text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Start Your Project Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Our Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">
              Modern Tech Stack for Fast Delivery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to build high-performance applications quickly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                  <Box className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold mb-2">Reusable Components</h3>
                <p className="text-sm text-gray-600">Proven UI components, templates, and code libraries from our 7+ years of development</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                  <Microchip className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold mb-2">Modern Frameworks</h3>
                <p className="text-sm text-gray-600">Latest technologies including React, Node.js, and cloud platforms for optimal performance</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                  <Handshake className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cloud Infrastructure</h3>
                <p className="text-sm text-gray-600">Scalable hosting solutions with AWS, Google Cloud, and Azure for enterprise-grade reliability</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Result: Fastest Time-to-Market in the Industry
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our efficient development process reduces time-to-market by 60% while maintaining the highest code quality and security standards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;