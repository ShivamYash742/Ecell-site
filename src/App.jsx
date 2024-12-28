import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './public/logo.png'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2400);
  }, []);
  const words = ["Ideate.", "Inspire.", "Invest."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 800);

    return () => clearInterval(interval);
  }, [words.length]);
  

  return (
    <div className="relative min-h-screen bg-gray-100 ">
      {/* Loading Screen */}
      <div className=''>
        {isLoading && (
          <div className="absolute inset-0 grid justify-center items-center bg-black bg-opacity-80 min-h-screen">
          <div >
            <img className='rounded-full w-64' src={logo} alt="logo" />
          </div>
          <div className='text-white text-5xl w-full text-center'>
          {words[currentWordIndex]}
          </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className='overflow-hidden'>
        {!isLoading && (
          <Router>
            <Navbar  />
            <HomePage />
            <Footer />
          </Router>
        )}
      </div>

    </div>
  );
}

export default App;
