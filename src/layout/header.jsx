import React, { useState } from "react";
import Logo from "../assets/img/Furniro.png"; // Replace with your logo path
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-600 body-font shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo Section (Left) */}
        
        <Link to="/" className="flex title-font font-medium items-center text-gray-900">
          <img
            src={Logo} // Replace with the actual path to your logo
            alt="Logo"
            className="w-15" // Adjust size and shape as needed
          />
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links (Centered for desktop and mobile toggle) */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center justify-center w-full md:w-auto mt-4 md:mt-0 font-medium text-base leading-normal space-x-[80px]`}
        >
          <Link to="/" className="block md:inline-block hover:text-gray-900">
            Home
          </Link>
          <Link to="/shops" className="block md:inline-block hover:text-gray-900">
            Shop
          </Link>
          <Link to="/about" className="block md:inline-block hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="block md:inline-block hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Icon Section (Right for desktop and hidden in mobile) */}
        <nav className="hidden md:flex flex-row items-center space-x-5">
          <a href="#account" className="text-2xl hover:text-gray-900">
            <AiOutlineUser /> {/* Account Icon */}
          </a>
          <a href="#cart" className="text-2xl hover:text-gray-900">
            <AiOutlineShoppingCart /> {/* Shopping Cart Icon */}
          </a>
          <a href="#heart" className="text-2xl hover:text-gray-900">
            <AiOutlineHeart /> {/* Heart Icon */}
          </a>
          <a href="#search" className="text-2xl hover:text-gray-900">
            <AiOutlineSearch /> {/* Search Icon */}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
