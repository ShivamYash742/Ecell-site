import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import VisionSection from './VisionSection';
import ActivitiesSection from './ActivitiesSection';
import SpeakersSection from './SpeakersSection';

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ActivitiesSection />
      <SpeakersSection />
    </div>
  );
};

export default HomePage;
