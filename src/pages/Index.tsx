
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import StartupShowcase from '@/components/StartupShowcase';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Intrasphere Labs - Custom Web & App Development Services" 
        description="Intrasphere Labs: 7+ years building custom web applications and mobile apps that drive business growth. Full-stack development expertise from concept to launch."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['web development', 'app development', 'custom web applications', 'mobile app development', 'full-stack development', 'React development', 'cloud solutions']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Comparison />
      <StartupShowcase />
      <FAQ />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
