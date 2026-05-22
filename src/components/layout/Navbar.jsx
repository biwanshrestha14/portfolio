import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contactme' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/70 border-b border-white/[0.06] py-3 backdrop-blur-md shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Magnetic range={40} actionScale={1.02}>
            <a 
              href="#home" 
              className="text-lg md:text-xl font-black text-white tracking-widest hover:opacity-85 transition-opacity flex items-center gap-1.5"
            >
              <span className="text-cyan-400 font-mono">&lt;</span>
              <span>BIWAN</span>
              <span className="text-purple-500 font-mono font-bold">/</span>
              <span>SHRESTHA</span>
              <span className="text-cyan-400 font-mono">&gt;</span>
            </a>
          </Magnetic>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Magnetic range={30} actionScale={1.05}>
                    <a
                      href={link.href}
                      className="text-xs font-mono tracking-widest text-zinc-400 hover:text-white uppercase transition-colors relative py-2"
                    >
                      {link.name}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>

            {/* Separator */}
            <div className="w-px h-4 bg-white/10" />

            {/* Theme Toggle Button */}
            <Magnetic range={40} actionScale={1.1}>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-white/[0.08] hover:border-white/20 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {currentTheme === 'dark' ? (
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/[0.08] bg-zinc-900/50 text-zinc-400 hover:text-white"
            >
              {currentTheme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="currentColor">
                  <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="currentColor">
                  <path d="M480-120q-150 0-255-105T120-480q0 150 105 255t255 105q0-150-105-255Z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
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
            className="fixed inset-0 top-[60px] bg-zinc-950/95 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 border-t border-white/[0.05]"
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="text-center text-zinc-600 text-xs font-mono mt-auto">
              © {new Date().getFullYear()} BIWAN SHRESTHA
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;