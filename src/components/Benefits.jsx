import React from "react";

const Benefits = () => {
  return (
    <section className="flex gap-10 p-16 bg-gray-100 items-center">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Benefits Of Choosing Our Agency
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          since the 1500s.
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <div className="w-full bg-gray-300 rounded-full overflow-hidden relative">
          <div className="bg-blue-600 h-full" style={{ width: "80%" }}></div>
          <span className="absolute left-0 top-0 text-gray-800">
            Locally Recommended - 80%
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full overflow-hidden relative">
          <div className="bg-blue-600 h-full" style={{ width: "90%" }}></div>
          <span className="absolute left-0 top-0 text-gray-800">
            Projects Completed Successfully - 90%
          </span>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
