import React from "react";

const AboutUs = () => {
  return (
    <section className="flex gap-10 p-16">
      <div className="text-content w-3/5">
        <h2 className="text-4xl font-bold mb-5">We're Delivering Only Exceptional Quality Work</h2>
        <p className="text-base text-gray-600 mb-5">
          We are formed by a team with extensive experience in innovation and digital transformation.
          We work mainly in the creation of digital solutions and products.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition duration-300">Read More</button>
      </div>
      <div className="stats w-2/5 bg-blue-600 text-white p-8 rounded-lg">
        <div className="stat flex flex-col items-center text-center mb-5">
          <h3 className="text-4xl font-bold mb-2">254+</h3>
          <p className="text-sm text-gray-200">People</p>
        </div>
        <div className="stat flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold mb-2">12</h3>
          <p className="text-sm text-gray-200">World Offices</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;