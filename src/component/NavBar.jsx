import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../uploads/logo.png";

export default function NavBar() {
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menüyü açıp kapatmak için state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-0 px-1">
      <nav className="md:mt-5">
        <div className="flex justify-between font-semibold items-center">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img src={logo} className="h-16" alt="Logo" />
            </span>
          </a>

          {/* Burger menüsünü tetiklemek için buton */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-900 dark:text-white"
            aria-label="Toggle menu"
          >
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
          </button>

          {/* Menüyü açıp kapatmayı kontrol eden div */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
          </div>
        </div>
      </nav>
    </div>
  );
}
