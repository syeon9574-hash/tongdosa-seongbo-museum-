import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'CURATION', href: '#curation' },
    { name: 'ARCHIVE', href: '#archive' },
    { name: 'STORY', href: '#story' },
    { name: 'SPACE', href: '#space' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-4 flex items-center justify-between ${
          isScrolled 
            ? 'bg-zen-white/80 backdrop-blur-xl border-b border-zen-black/5 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="flex items-center">
          <a 
            href="/" 
            className={`text-xl font-serif tracking-[0.2em] font-medium transition-colors duration-500 ${isScrolled ? 'text-zen-black' : 'text-zen-white'}`}
          >
            TONGDOSA
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-[10px] tracking-[0.2em] font-light transition-all duration-500 hover:text-zen-gold ${isScrolled ? 'text-zen-black/60' : 'text-zen-white/70'}`}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`transition-colors duration-500 ${isScrolled ? 'text-zen-black hover:text-zen-gold' : 'text-zen-white hover:text-zen-gold'}`}
          >
            <Menu size={20} strokeWidth={1} />
          </button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={isScrolled ? 'text-zen-black' : 'text-zen-white'}
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-zen-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-full md:w-[40vw] h-full bg-zen-white shadow-2xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 p-4 text-zen-black group"
              >
                <div className="relative">
                  <X size={32} strokeWidth={1} className="transition-transform duration-500 group-hover:rotate-90" />
                </div>
              </button>
              
              <div className="flex flex-col space-y-12 text-center">
                {navItems.map((item, idx) => (
                  <div key={item.name} className="overflow-hidden">
                    <motion.a
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      exit={{ y: 100 }}
                      transition={{ 
                        delay: isMenuOpen ? (0.1 + idx * 0.1) : 0, 
                        duration: 0.8, 
                        ease: [0.33, 1, 0.68, 1] 
                      }}
                      href={item.href}
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        scrollToSection(e, item.href);
                      }}
                      className="block text-4xl md:text-5xl font-serif tracking-[0.1em] text-zen-black hover:text-zen-gold transition-colors duration-500"
                    >
                      {item.name}
                    </motion.a>
                  </div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-32 space-y-4 flex flex-col items-center"
              >
                <div className="w-12 h-[1px] bg-zen-gold/30" />
                <span className="text-[9px] tracking-[0.6em] text-zen-black/30 uppercase ml-[0.6em]">
                  The Art of Zen
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
