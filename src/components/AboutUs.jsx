import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Add an image of a team or office here */}
      <div className="text-content">
        <h2>We're Delivering Only Exceptional Quality Work</h2>
        <p>
          We are formed by a team with extensive experience in innovation and digital transformation.
          We work mainly in the creation of digital solutions and products.
        </p>
        <button>Read More</button>
      </div>
      <div className="stats">
        {/* Statistics Section */}
        <div className="stat">
          <h3>254+</h3>
          <p>People</p>
        </div>
        <div className="stat">
          <h3>12</h3>
          <p>World Offices</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
