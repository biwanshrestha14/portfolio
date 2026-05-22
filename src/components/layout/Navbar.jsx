import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const Navbar = ({ toggleTheme, currentTheme, currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // IntersectionObserver to track which homepage section is currently in view
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sectionIds = ['home', 'about', 'projects', 'timeline', 'github'];
    const observers = [];

    // Small delay to let DOM mount
    const timeout = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }, 200);

    return () => {
      clearTimeout(timeout);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'Gallery', href: '#gallery', sectionId: null },
    { name: 'Timeline', href: '#timeline', sectionId: 'timeline' },
    { name: 'Contact', href: '#contactme', sectionId: null },
  ];

  const getIsActive = useCallback((link) => {
    if (link.name === 'Gallery') return currentPage === 'gallery';
    if (link.name === 'Contact') return currentPage === 'contact';
    if (currentPage !== 'home') return false;
    return activeSection === link.sectionId;
  }, [currentPage, activeSection]);

  const handleLinkClick = (e, link) => {
    if (link.name === 'Gallery') {
      e.preventDefault();
      setCurrentPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else if (link.name === 'Contact') {
      e.preventDefault();
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else {
      if (currentPage !== 'home') {
        e.preventDefault();
        setCurrentPage('home');
        setActiveSection(link.sectionId);
        setMobileMenuOpen(false);
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        setMobileMenuOpen(false);
      }
    }
  };

  const isDark = currentTheme === 'dark';

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-zinc-950/70 border-b border-white/[0.06] py-3 backdrop-blur-md shadow-2xl'
              : 'bg-white/80 border-b border-zinc-200 py-3 backdrop-blur-md shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Magnetic range={40} actionScale={1.02}>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
                setActiveSection('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-lg md:text-xl font-black tracking-widest hover:opacity-85 transition-opacity flex items-center gap-1.5 ${
                isDark ? 'text-white' : 'text-orange-950'
              }`}
            >
              <span className={`font-mono ${isDark ? 'text-cyan-500' : 'text-orange-500'}`}>&lt;</span>
              <span>BIWAN</span>
              <span className={`font-mono font-bold ${isDark ? 'text-purple-500' : 'text-amber-500'}`}>/</span>
              <span>SHRESTHA</span>
              <span className={`font-mono ${isDark ? 'text-cyan-500' : 'text-orange-500'}`}>&gt;</span>
            </a>
          </Magnetic>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, i) => {
                const isActive = getIsActive(link);

                return (
                  <li key={i}>
                    <Magnetic range={30} actionScale={1.05}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link)}
                        className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-2 ${
                          isActive
                            ? isDark ? 'text-cyan-500 font-bold' : 'text-orange-600 font-bold'
                            : isDark
                              ? 'text-zinc-400 hover:text-white'
                              : 'text-orange-700 hover:text-orange-950'
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.span 
                            layoutId="activeIndicator"
                            className={`absolute bottom-0 left-0 right-0 h-0.5 rounded ${isDark ? 'bg-cyan-500' : 'bg-orange-500'}`}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </a>
                    </Magnetic>
                  </li>
                );
              })}
            </ul>

            {/* Separator */}
            <div className={`w-px h-4 ${isDark ? 'bg-white/10' : 'bg-zinc-300'}`} />

            {/* Theme Toggle Button */}
            <Magnetic range={40} actionScale={1.1}>
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/[0.08] hover:border-white/20 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white'
                    : 'border-orange-200 hover:border-orange-400 bg-orange-50 hover:bg-orange-100 text-orange-500 hover:text-orange-700'
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor">
                    <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor">
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
                  </svg>
                )}
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Aesthetic Mobile Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={`relative flex items-center w-14 h-8 rounded-full p-1 transition-all duration-300 border cursor-pointer ${
                isDark
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-400'
                  : 'bg-indigo-50/80 border-indigo-150 text-indigo-500'
              }`}
              aria-label="Toggle Theme"
            >
              {/* Sliding Pill */}
              <motion.div
                className={`absolute w-6 h-6 rounded-full shadow-md bg-gradient-to-tr transition-transform duration-300 ${
                  isDark 
                    ? 'from-cyan-400 to-purple-500 translate-x-6' 
                    : 'from-amber-400 to-orange-500 translate-x-0'
                }`}
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
              {/* Sun & Moon Icons inside */}
              <div className="flex justify-between w-full px-1.5 z-10 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12" className={isDark ? 'text-zinc-600' : 'text-white'} fill="currentColor">
                  <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12" className={isDark ? 'text-white' : 'text-indigo-300'} fill="currentColor">
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
                </svg>
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors cursor-pointer ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              aria-label="Toggle Mobile Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 top-[60px] backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 border-t ${
              isDark
                ? 'bg-zinc-950/95 border-white/[0.05]'
                : 'bg-white/95 border-zinc-200'
            }`}
          >
            <ul className="flex flex-col gap-6 my-auto items-center">
              {navLinks.map((link, i) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-2xl font-bold tracking-widest uppercase transition-colors ${
                      isDark ? 'text-zinc-300 hover:text-white' : 'text-orange-800 hover:text-orange-950'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className={`text-center text-xs font-mono mt-auto ${isDark ? 'text-zinc-600' : 'text-orange-500'}`}>
              © {new Date().getFullYear()} BIWAN SHRESTHA
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;