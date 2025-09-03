import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import CursorFollower from './components/layout/CursorFollower';
import Home from './components/sections/Home';
import Profile from './components/sections/Profile';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';
import Github from './components/sections/Github';
// Import CSS directly in App.jsx
import './App.css';
// Import Typed.js
import Typed from 'typed.js';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Handle hamburger menu click
    useEffect(() => {
      const hamburger = document.getElementById('hamburger');
      if (hamburger) {
        hamburger.addEventListener('click', toggleSidebar);
      }

    // Handle backdrop click to close sidebar
    const handleBackdropClick = (e) => {
      if (sidebarOpen && e.target.classList.contains('backdrop')) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleBackdropClick);

    // Implement cursor follower
    const cursor = document.querySelector('.cursor');
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', toggleSidebar);
      }
      document.removeEventListener('click', handleBackdropClick);
      document.removeEventListener('mousemove', () => {});
    };
  }, [sidebarOpen]);

  return (
    <div className={`main bg-[--background] h-full w-full text-[--text] font-['biwan'] ${theme}`}>
      {/* Backdrop for sidebar */}
      {sidebarOpen && <div className="backdrop fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setSidebarOpen(false)}></div>}
      
      <CursorFollower />
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <Home />
      <Profile />
      <Projects />
      <Github />
      <Footer />
    </div>
  );
}

export default App;
