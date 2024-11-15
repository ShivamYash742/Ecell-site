import React from "react";

const Header = () => {
  return (
    <header className="bg-white p-2.5 border-b border-gray-200">
      <div className="flex justify-between text-xs text-gray-500">
        <span>Mon - Fri: 08:00 - 18:00 | Sunday: 08:00 - 14:00</span>
        <span>+1 (555) 123 45 67</span>
        <span>45 Queen Street, 2055 London</span>
      </div>
      <nav className="flex justify-between items-center py-5">
        <div className="text-2xl font-bold text-gray-800">LOGO</div>
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