import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../public/IMG_3029.JPG'
import img2 from '../public/IMG_2094.JPG'
import img3 from '../public/IMG_4617.JPG'

const ActivitiesSection = () => {
  const activities = [
    { title: 'Study Abroad', description: 'A session on studying abroad for the students who wanted to pursue higher studies abroad.', image: img1 },
    { title: 'Carrer Launcher ', description: 'A seminar on building a successful carrer in business and technology.', image: 'hackathon.jpg' , image: img2  },
    { title: 'MSME', description: 'MSME conducted a seminar to promote entrepreneurship in the institute.', image: 'workshops.jpg', image: img3  },
  ];

  const sponsorLogos = [
    { name: 'Company 1', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png' },
    { name: 'Company 2', logo: 'https://shop.mycrofine.com/wp-content/uploads/2023/06/flipkart.png' },
    { name: 'Company 3', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { name: 'Company 4', logo: 'https://www.techinfobit.com/wp-content/uploads/2012/08/Microsoft-Unveils-a-New-Logo-in-25-Years-New-Microsoft-Windows-Logo-techinfoBiT-Microsoft-New-PNG-Logo-Top-tech-Blog-bangalore.png' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Activities & Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
            <p className="text-lg text-gray-600">{activity.description}</p>
          </motion.div>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Sponsors</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        {sponsorLogos.map((sponsor, index) => (
          <motion.div
            key={index}
            className="p-3"
            animate={{ x: [-1200, 0, 1200] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <img src={sponsor.logo} alt={sponsor.name} className="w-28 h-28 object-contain flex justify-center items-center" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;