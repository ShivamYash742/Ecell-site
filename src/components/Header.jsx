import React from "react";
import logo from "../assets/ecellmsitLogo.jpeg";

const Header = () => {
  return (
    <header className="bg-white p-2.5 border-b border-gray-200">
      <nav className="flex justify-between items-center py-5">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <img src={logo} alt="ECELL MSIT LOGO" />
          </a>
        </div>
        <ul className="flex gap-8 list-none">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Features</li>
          <li className="cursor-pointer hover:text-blue-500">Services</li>
          <li className="cursor-pointer hover:text-blue-500">Prices</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
