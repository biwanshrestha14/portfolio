import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// Import profile image
import profileImage from '../../assets/images/profile1.jpg';
// Typed.js is properly imported

const Home = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
  "Full Stack Developer",
      "MERN and Django",
      "Building Web Apps",
      "Learning Every Day"
]
,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
    
    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  
  const openInstagram = () => {
    window.open("https://www.instagram.com/beewan_derer/", "_blank");
  };
  
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/biwan-shrestha-0571142a1/", "_blank");
  };

  return (
    <main id="home" className="relative min-h-screen py-8 sm:py-16 flex flex-col md:flex-row justify-center items-center overflow-hidden">
      {/* Background animation */}
      <div className="ball1 size-40 sm:size-[400px]"></div>
      
      {/* Content container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Text content */}
        <div className="flex justify-center items-center flex-col text-xl sm:text-2xl md:text-3xl relative z-10 order-2 md:order-1 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-[--secondary] mb-2 font-bold">Hello World!</h1>
          <h2 className="mb-2">I'm <span className="text-[--secondary]">Biwan Shrestha</span></h2>
          <span ref={typedRef} className="animate-text min-h-[40px]"></span>
          
          {/* Social buttons */}
          <div id="about" className="buttons flex flex-row justify-center gap-4 mt-6 sm:mt-8 w-full">
            <button onClick={openInstagram}
              className="w-auto px-4 sm:px-8 py-3 rounded-full relative bg-slate-700 text-white text-xs sm:text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-30">MY INSTAGRAM</span>
            </button>
            <button onClick={openLinkedIn}
              className="w-auto px-4 sm:px-8 py-3 rounded-full relative bg-slate-700 text-white text-xs sm:text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-30">MY LINKEDIN</span>
            </button>
          </div>
        </div>
        
        {/* Profile image */}
        <div className="order-1 md:order-2">
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-md overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover rounded-md" src={profileImage} alt="Biwan Shrestha" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;