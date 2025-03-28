import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Amazing Product
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              A fantastic solution to your everyday problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="http://localhost:3001/api/auth/login" className="btn bg-white text-primary hover:bg-gray-100 hover:text-secondary">
                Get Started
              </a>
              <a href="#features" className="btn border border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-xl blur-xl"></div>
              <div className="relative bg-white/20 backdrop-blur-lg rounded-lg p-6 border border-white/30">
                <div className="bg-white rounded-lg shadow-lg p-8 transform -rotate-2">
                  <img 
                    src="https://via.placeholder.com/500x300"
                    alt="Product Preview" 
                    className="rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#f8fafc" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1440,37.3L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;