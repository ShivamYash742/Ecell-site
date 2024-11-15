import React from "react";

const Mission = () => {
  return (
    <section className="flex gap-10 p-16">
      <div className="w-3/5">
        <h2 className="text-4xl font-bold mb-5">Your Success Is Our Mission</h2>
        <p className="text-base text-gray-600 mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text since the 1500s.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition duration-300">Read More</button>
      </div>
      {/* <div className="w-2/5">
        <img src="../assets/mission-image.jpg" alt="Mission" className="w-full h-auto rounded-lg" />
      </div>*/}
    </section>
  );
};

export default Mission;