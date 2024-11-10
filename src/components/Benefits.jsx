import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-text">
        <h2>Benefits Of Choosing Our Agency</h2>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text since the 1500s.
        </p>
      </div>
      <div className="benefits-stats">
        {/* Progress bars indicating benefits */}
        <div className="progress-bar">
          <span>Locally Recommended - 80%</span>
          <div className="bar" style={{ width: "80%" }}></div>
        </div>
        <div className="progress-bar">
          <span>Projects Completed Successfully - 90%</span>
          <div className="bar" style={{ width: "90%" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
