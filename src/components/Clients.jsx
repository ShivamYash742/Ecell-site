import React from 'react';

const Clients = () => {
  const clientData = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Great service and support!',
      image: 'https://i.pinimg.com/originals/be/a3/49/bea3491915571d34a026753f4a872000.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Highly recommend this company.',
      image: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      feedback: 'Fantastic experience overall.',
      image: 'https://xsgames.co/randomusers/assets/avatars/male/46.jpg',
    },
  ];

  return (
    <div className=" py-10">
      <h2 className="text-center mb-8 text-4xl font-bold">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {clientData.map((client) => (
          <div
            key={client.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{client.name}</h3>
            <p className="text-gray-600 text-center mt-2">{client.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
