import React, { useState, useEffect } from 'react';
import speaker1 from "../public/Bill_Van_Heyst.png"

const SpeakersSection = () => {
  const [currentBox, setCurrentBox] = useState(0);

  const boxes = [
    {
      image: speaker1,
      name: 'Dr. Bill Van Heyst',
      role: 'Dean, Faculty of Engineering',
      info: '',
    },
    {
      image: 'path/to/speaker2.jpg',
      name: 'Speaker 2',
      role: 'Role 2',
      info: '',
    },
    {
      image: 'path/to/speaker3.jpg',
      name: 'Speaker 3',
      role: 'Role 3',
      info: '',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBox((prevBox) => (prevBox + 1) % boxes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='text-center font-bold text-5xl py-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-md'>
        Meet Our Speakers
      </div>
      <div className="relative h-[80vh] overflow-hidden w-full bg-gradient-to-r from-blue-500 to-purple-500 ">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-2xl transition-transform duration-700 transform ${
              index === currentBox ? 'translate-x-0 scale-100' : 'translate-x-full scale-95 opacity-0'
            }`}
            style={{ transform: `translateX(${(index - currentBox) * 100}%)` }}
          >
            <img src={box.image} alt={box.name} className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 shadow-lg border-4 border-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{box.name}</h2>
            <h3 className="text-xl md:text-2xl text-gray-600">{box.role}</h3>
            <p className="text-center text-gray-700 px-4 md:px-8">{box.info}</p>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {boxes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBox(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === currentBox ? 'bg-white border-2 border-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SpeakersSection;