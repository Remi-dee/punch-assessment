import React, { useState } from "react";
import Logo from "../../Assets/sector1/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-5 rounded-b-[16px] md:rounded-[16px] bg-[#525AA0] text-white">
      <div className="flex space-x-[190px]  items-center mb-9 md:mb-0 ">
        <div className="text-2xl font-bold md:mb-4 sm:mb-0">
          <img alt="Logo" src={Logo} className="" />
        </div>

        <div className="sm:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-white transition-transform ${
                  isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-transform ${
                  isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <nav
        className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:block`}
      >
        <a href="#find-work" className="hover:underline">
          Find Work
        </a>
        <a href="#find-talent" className="hover:underline">
          Find Talent
        </a>
        <a href="#articles" className="hover:underline">
          Articles
        </a>
        <a href="#about-us" className="hover:underline">
          About Us
        </a>
        <a href="#contact-us" className="hover:underline">
          Contact Us
        </a>
      </nav>
      <div className="flex space-x-4 mt-4  sm:mt-0">
        <button className="bg-transparent text-white px-4 py-2 rounded">
          Log In
        </button>
        <button className="bg-white text-black rounded-[16px] px-[21px] py-[15px]">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;
