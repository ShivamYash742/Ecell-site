import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Navbar.css'; // Import CSS for animations
import logo from '../public/logo.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md fixed w-full z-50 top-0">
      <div className=" mx-auto flex justify-between items-center">

        <div className="">
          <Link to="/">
            <img className='rounded-full h-14' src={logo} alt="" />
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger/Cross Button for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <CSSTransition
        in={isMenuOpen}
        timeout={200}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className="md:hidden bg-white p-4 my-4 space-y-4 shadow-md rounded-lg">
          <Link
            to="/"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;