
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, MessageCircle, Mail, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4",
        isScrolled ? "top-6" : "top-0"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div 
        className={cn(
          "transition-all duration-500 flex items-center justify-between h-16 w-full",
          isScrolled 
            ? "max-w-4xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-6 py-2" 
            : "max-w-full bg-transparent px-8"
        )}
      >
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center group">
            <span className={cn(
              "text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              Intrasphere Labs<span className="text-blue-500">.</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
            <NavigationMenuList className="gap-1 lg:gap-2">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest px-4",
                    isScrolled 
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                      : "text-gray-200 hover:text-white bg-transparent hover:bg-white/10"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest px-4",
                    isScrolled 
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                      : "text-gray-200 hover:text-white bg-transparent hover:bg-white/10"
                  )}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/tech-details">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest px-4",
                    isScrolled 
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                      : "text-gray-200 hover:text-white bg-transparent hover:bg-white/10"
                  )}>
                    Learn More
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/careers">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest px-4",
                    isScrolled 
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                      : "text-gray-200 hover:text-white bg-transparent hover:bg-white/10"
                  )}>
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Corner CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <AnimatePresence>
              {showContact && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={cn(
                    "absolute top-full right-0 mt-3 p-2 rounded-2xl border flex flex-col gap-2 shadow-2xl backdrop-blur-xl transition-all duration-300 w-48",
                    isScrolled ? "bg-white border-gray-100" : "bg-black/90 border-white/10"
                  )}
                >
                  <a 
                    href="https://wa.me/919490964015" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                      isScrolled ? "hover:bg-blue-50" : "hover:bg-white/10"
                    )}
                  >
                    <div className="p-2 bg-green-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className={cn("text-xs font-bold", isScrolled ? "text-gray-900" : "text-white")}>WhatsApp</span>
                  </a>
                  <a 
                    href="mailto:teamintrasphere@gmail.com" 
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                      isScrolled ? "hover:bg-blue-50" : "hover:bg-white/10"
                    )}
                  >
                    <div className="p-2 bg-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className={cn("text-xs font-bold", isScrolled ? "text-gray-900" : "text-white")}>Email Us</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button 
              onClick={() => setShowContact(!showContact)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2",
                isScrolled 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-white text-gray-900 hover:bg-gray-100"
              )}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Book a Call
            </button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={cn("focus:outline-none p-2 rounded-full", isScrolled ? "text-gray-900 bg-gray-100" : "text-white bg-white/10")}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Modern Card Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className={cn(
              "md:hidden absolute top-full left-4 right-4 mt-4 overflow-hidden shadow-2xl rounded-3xl border transition-all duration-300",
              isScrolled ? "bg-white border-gray-100" : "bg-black/95 border-white/10"
            )}
          >
            <div className="p-6 space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Learn More", to: "/tech-details" },
                { label: "Careers", to: "/careers" }
              ].map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.to} 
                  className={cn(
                    "block px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all",
                    isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-white/10"
                  )} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-100/10 grid grid-cols-2 gap-3">
                <a 
                  href="https://wa.me/919490964015"
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all",
                    isScrolled ? "bg-green-50 text-green-700" : "bg-green-500/10 text-green-400"
                  )}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
                </a>
                <a 
                  href="mailto:teamintrasphere@gmail.com"
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all",
                    isScrolled ? "bg-blue-50 text-blue-700" : "bg-blue-500/10 text-blue-400"
                  )}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

