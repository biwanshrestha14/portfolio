import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import CursorFollower from './components/layout/CursorFollower';
import InteractiveBackground from './components/ui/InteractiveBackground';
import Home from './components/sections/Home';
import Profile from './components/sections/Profile';
import Projects from './components/sections/Projects';
import Gallery from './components/sections/Gallery';
import Timeline from './components/sections/Timeline';
import Github from './components/sections/Github';
import Footer from './components/sections/Footer';

// Import CSS
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [currentPage, setCurrentPage] = useState('home');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const isDark = theme === 'dark';

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`main min-h-screen w-full font-['biwan'] transition-colors duration-500 ${
      isDark
        ? 'bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30 selection:text-white'
        : 'bg-[#f8f9fa] text-zinc-900 selection:bg-cyan-500/20 selection:text-zinc-900'
    }`}>
      {/* Dynamic Cinematic Canvas Background */}
      <InteractiveBackground theme={theme} />
      
      {/* Morphing Custom Trailing Cursor */}
      <CursorFollower />
      
      {/* Glassmorphic Top Navigation bar */}
      <Navbar 
        toggleTheme={toggleTheme} 
        currentTheme={theme} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      {/* Page Routing */}
      {currentPage === 'home' && (
        <div className="animate-fadeIn">
          <Home theme={theme} />
          <Profile theme={theme} />
          <Projects theme={theme} />
          <Timeline theme={theme} />
          <Github theme={theme} />
          
          {/* Minimal homepage footer */}
          <div className={`py-8 text-center text-[10px] font-mono border-t ${
            isDark ? 'text-zinc-600 border-white/[0.03]' : 'text-zinc-400 border-zinc-200'
          }`}>
            &copy; {new Date().getFullYear()} BIWAN SHRESTHA. ALL RIGHTS ENCRYPTED.
          </div>
        </div>
      )}

      {currentPage === 'gallery' && (
        <div className="pt-24 min-h-[calc(100vh-100px)] flex flex-col justify-between animate-fadeIn">
          <Gallery theme={theme} />
          <div className={`py-8 text-center text-xs font-mono border-t mt-12 ${
            isDark ? 'text-zinc-600 border-white/[0.03]' : 'text-zinc-400 border-zinc-200'
          }`}>
            &copy; {new Date().getFullYear()} BIWAN SHRESTHA. ALL RIGHTS ENCRYPTED.
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="pt-24 min-h-[calc(100vh-100px)] animate-fadeIn">
          <Footer theme={theme} />
        </div>
      )}
    </div>
  );
}

export default App;
