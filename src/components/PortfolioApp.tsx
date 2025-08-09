import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { HeroPage } from '@/components/pages/HeroPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { ProjectsPage } from '@/components/pages/ProjectsPage';
import { SkillsPage } from '@/components/pages/SkillsPage';
import { ContactPage } from '@/components/pages/ContactPage';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: -100,
    scale: 0.95,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.8,
};

export const PortfolioApp = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HeroPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-20"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};