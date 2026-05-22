import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import CursorFollower from './components/layout/CursorFollower';
import InteractiveBackground from './components/ui/InteractiveBackground';
import Home from './components/sections/Home';
import Profile from './components/sections/Profile';
import Projects from './components/sections/Projects';
import Timeline from './components/sections/Timeline';
import Github from './components/sections/Github';
import Footer from './components/sections/Footer';

// Import CSS
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    // Default to dark theme for premium editorial aesthetic
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`main bg-zinc-950 min-h-screen w-full text-zinc-100 font-['biwan'] transition-colors duration-500 selection:bg-cyan-500/30 selection:text-white ${theme}`}>
      {/* Dynamic Cinematic Canvas Background */}
      <InteractiveBackground theme={theme} />
      
      {/* Morphing Custom Trailing Cursor */}
      <CursorFollower />
      
      {/* Glassmorphic Top Navigation bar */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      
      {/* Content Sections */}
      <Home />
      <Profile />
      <Projects />
      <Timeline />
      <Github />
      <Footer />
    </div>
  );
}

export default App;
