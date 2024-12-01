import React from "react";
import img from "../assets/management.png";
const Mission = () => {
  return (
    <div className="px-[20%] py-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="w-full md:w-[1350px] mb-4 md:mb-0 md:mr-6">
          <img src={img} alt="Team meeting" className="w-full" />
        </div>
        <div className="flex flex-col justify-between">
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
          <div className="bg-white p-4 mt-6">
            <h2 className="text-2xl font-bold mb-2">WHY CHOOSE US</h2>
            <p className="mb-4">Benefits Of Choosing Our Agency</p>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mb-4">
              <p className="font-bold">Locally Recommended: 80%</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: "80%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">Projects Completed Successfully: 90%</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: "90%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
