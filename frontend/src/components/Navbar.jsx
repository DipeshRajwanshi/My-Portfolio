import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Work", path: "work" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg z-50 py-4 px-8 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-2xl font-bold text-teal-400">
        Dipesh<span className="text-white">Films</span>
      </h1>
      <div className="space-x-6">
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
    </nav>
  );
};

export default Navbar;
