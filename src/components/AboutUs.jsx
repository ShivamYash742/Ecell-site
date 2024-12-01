import React from "react";
import ing from "../assets/marketing.png";

const AboutUs = () => {
  return (
    <div className="px-[20%] py-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">
        We’re Delivering Only Exceptional Quality Work
      </h1>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="md:w-[1350px] mb-4 md:mb-0 md:mr-6">
          <img src={ing} alt="Team meeting" className="w-full" />
        </div>
        <div className="flex flex-col">
          <div className="mb-4">
            <p>
              We are formed by a team with extensive experience in innovation
              and digital transformation. We work mainly in the creation of
              digital solutions and products based on new technologies in an
              open innovation model.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Our team of creative and technological geeks think and work
              differently.
            </p>
          </div>
          <div>
            <a href="#read-more" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-700 text-white p-6 mb-4 md:mb-0 md:mr-4 flex-1">
          <h2 className="text-3xl font-bold">254+</h2>
          <p>Adipiscing elit, sed do eiusmod.</p>
        </div>
        <div className="bg-blue-700 text-white p-6 flex-1">
          <h2 className="text-3xl font-bold">12</h2>
          <p>Sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
