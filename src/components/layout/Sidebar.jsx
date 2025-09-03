

import React, { useEffect } from 'react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  // Close sidebar when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close sidebar when clicking the close button
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  // Add/remove open class based on isOpen state
  useEffect(() => {
    const sidebarElement = document.querySelector('.sidebar');
    if (sidebarElement) {
      if (isOpen) {
        sidebarElement.classList.add('open');
      } else {
        sidebarElement.classList.remove('open');
      }
    }
  }, [isOpen]);

  return (
    <div className={`sidebar grad z-[20] fixed top-0 flex flex-col items-center content-center justify-center ${isOpen ? 'open' : ''}`}>
      <div className="cursor-pointer mb-8" onClick={handleCloseClick}>
        <svg id="close" className="w-6" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
          width="24px" fill="currentColor">
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
     
      <ul className="expand flex flex-col items-center px-10 text-[--text]">
        <a className="focus:text-[--salmon] my-4" href="#home" onClick={handleLinkClick}>
          <li className="cursor-pointer text-xl hover:text-[--salmon]">Home 
            <span id="line1" className="line"></span>
            <span id="line2" className="line"></span>
          </li>
        </a>
        <a className="focus:text-[--salmon] my-4" href="#about" onClick={handleLinkClick}>
          <li className="cursor-pointer text-xl hover:text-[--salmon]">About
            <span id="line1" className="line"></span>
            <span id="line2" className="line"></span>
          </li>
        </a>
        <a className="focus:text-[--salmon] my-4" href="#resume" onClick={handleLinkClick}>
          <li className="cursor-pointer text-xl hover:text-[--salmon]">Resume
            <span id="line1" className="line"></span>
            <span id="line2" className="line"></span>
          </li>
        </a>
        <a className="focus:text-[--salmon] my-4" href="#contactme" onClick={handleLinkClick}>
          <li className="cursor-pointer text-xl hover:text-[--salmon]">Contact
            <span id="line1" className="line"></span>
            <span id="line2" className="line"></span>
          </li>
        </a>
        <a className="focus:text-[--salmon] my-4" href="#messageme" onClick={handleLinkClick}>
          <li className="cursor-pointer text-xl hover:text-[--salmon]">Message Me
            <span id="line1" className="line"></span>
            <span id="line2" className="line"></span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;