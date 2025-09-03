import { useState, useEffect } from 'react';
// Import menu icon
import menuIcon from '../../assets/icons/menu.svg';

const Navbar = ({ toggleTheme, currentTheme }) => {
  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="nav flex items-center justify-around py-5 bg-opacity-70 backdrop-blur-md bg-[--background] sticky top-0 z-[999] before:absolute before:inset-0 before:z-[-1] before:opacity-30 transition-all duration-300">
      <h1 className="text-2xl font-extrabold text-[--text]">&lt;/&gt; Biwan Shrestha </h1>
      <div className="flex gap-6 items-center">
        <div className="menu flex items-center text-center text-gray-500 space-x-3 lg:hidden">
          <img id="hamburger" className="h-8 block lg:hidden cursor-pointer" src={menuIcon} alt="Menu" />
        </div>
        <div className="menus hidden lg:block">
          <ul className="expand flex space-x-5 text-[--text]">
            <a className="focus:text-[--salmon]" href="#home">
              <li className="cursor-pointer">Home</li>
            </a>
            <a className="focus:text-[--salmon]" href="#about">
              <li className="cursor-pointer">About</li>
            </a>
            <a className="focus:text-[--salmon]" href="#resume">
              <li className="cursor-pointer">Resume</li>
            </a>
            <a className="focus:text-[--salmon]" href="#github">
              <li className="cursor-pointer">Github</li>
            </a>
            <a className="focus:text-[--salmon]" href="#contactme">
              <li className="cursor-pointer">Contact Me</li>
            </a>
          </ul>
        </div>
        <button id="theme-toggle" onClick={toggleTheme} className="cursor-pointer p-2 rounded-full transition-all duration-300 hover:bg-opacity-10 hover:bg-gray-500">
          {currentTheme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
            </svg>
          )}
        </button>
        </div>
    </nav>
  );
};

export default Navbar;