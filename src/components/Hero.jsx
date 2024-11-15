import React from "react";
import image from '../assets/react.svg'; // Ensure the correct path to the image

const Hero = () => {
  return (
    <section 
      className="bg-cover bg-center text-white py-36 px-10 relative" 
      style={{ backgroundImage: `url(${image})` }} 
    >
      <h2 className="text-lg font-light mb-2">Welcome to Digital Startup Agency</h2>
      <h1 className="text-5xl font-bold mb-8">Best Digital Technology Agency</h1>
      <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition duration-300">Read More</button>
    </section>
  );
};

export default Hero;