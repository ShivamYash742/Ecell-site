import React from "react";
import image from "../assets/management.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-36 px-10 relative"
      style={{ backgroundImage: `url(${image})`, border: "3px solid black" }}
    >
      <h2 className="text-lg font-light mb- 5">
        Transforming Ideas Into Reality
      </h2>
      <h1 className="text-5xl font-bold mb-5">
        Innovative Solutions for Your Business
      </h1>
      <p className="text-base mb-8">
        Join us in creating a brighter future with our cutting-edge technology
        and services.
      </p>
      <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition duration-300 shadow-lg">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
