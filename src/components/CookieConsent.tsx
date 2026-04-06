import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasChoice = localStorage.getItem('intrasphere_cookie_consent');
    if (!hasChoice) {
      // Delay showing the banner for a better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const updateConsent = (isAccepted: boolean) => {
    const status = isAccepted ? 'granted' : 'denied';
    
    // Update gtag consent if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': status,
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status,
      });
    }

    // Persist choice
    localStorage.setItem('intrasphere_cookie_consent', isAccepted ? 'accept' : 'decline');
    localStorage.setItem('silktideCookieChoice_analytics', isAccepted ? 'true' : 'false');
    localStorage.setItem('silktideCookieChoice_marketing', isAccepted ? 'true' : 'false');
    
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-gray-900 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 blur-3xl bg-blue-500 rounded-full w-64 h-64 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-blue-600/20 p-3 rounded-xl hidden sm:block">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg mb-1 font-outfit">Cookie Policy</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  We use cookies to enhance your experience, analyze site traffic, and serve better digital solutions. By accepting, you consent to our use of cookies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
              <button 
                onClick={() => updateConsent(false)}
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-gray-400 hover:text-white transition-colors"
              >
                Decline All
              </button>
              <button 
                onClick={() => updateConsent(true)}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-950/20 transition-all active:scale-95"
              >
                <Check className="w-4 h-4" />
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Add gtag to window type for TS
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default CookieConsent;
