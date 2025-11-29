import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Work", path: "work" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg z-50 border-b border-gray-800">
      <div className="flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">
          Dipesh<span className="text-white">Films</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-sm uppercase tracking-wide text-gray-300 hover:text-teal-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 px-6 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-gray-300 uppercase tracking-wide hover:text-teal-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
