import React from 'react'
// Import github image
import githubImage from '../../assets/images/github.png'

const Github = () => {
  return (
    <div id="github" className="github mt-5 px-5 relative overflow-hidden">
      <div className="relative flex flex-col items-center justify-center py-10 md:py-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src={githubImage} 
            alt="Github Profile"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content container */}
        <div className="relative z-10 text-center px-4 py-10 md:py-16 max-w-4xl mx-auto">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mb-6 font-bold">
            Here's My GitHub Portfolio
          </h1>
          
          <button 
            onClick={() => window.open('https://github.com/biwanshrestha14')}
            className="px-6 py-3 md:px-10 md:py-4 rounded-full bg-slate-700 text-white text-sm md:text-base hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 mx-auto mb-6"
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-30">VIEW MY GITHUB</span>
          </button>
          
          <h4 className="text-white text-lg md:text-xl lg:text-2xl">
            I love to code &amp; create awesome artworks.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Github