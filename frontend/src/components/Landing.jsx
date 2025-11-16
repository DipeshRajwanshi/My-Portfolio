import React from "react";
import { Link } from "react-scroll";
import banner from "../assets/banner1.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-0" />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-6">
        <h1 className="text-xl font-semibold tracking-widest uppercase">
          Dipesh Rajwanshi
        </h1>

        <div className="space-x-10 text-sm flex items-center">
          <Link
            to="work"
            smooth={true}
            duration={600}
            offset={-50}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Projects
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-50}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            About
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-50}
            className="hover:text-gray-300 transition border px-4 py-1 
            rounded-full border-gray-700 hover:border-white cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-12 mt-20">
        
        {/* Left Side */}
        <div className="max-w-xl">
          <p className="text-gray-400 mb-4 tracking-wide">India</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            VIDEO EDITOR <br />
            <span className="text-gray-500">MOTION DESIGNER</span>
          </h1>

          <p className="text-gray-400 max-w-md leading-relaxed mb-10">
            Crafting modern visuals, editing reels, and building impactful cinematic 
            stories through clean, bold, and minimal motion.
          </p>

          {/* Buttons */}
          <div className="flex space-x-6">

            {/* Smooth Scroll to Videos */}
            <Link
              to="video"
              smooth={true}
              duration={700}
              offset={-50}
              className="px-8 py-3 border border-gray-600 hover:border-white 
              rounded-full transition cursor-pointer"
            >
              Show Works
            </Link>

            {/* Smooth Scroll to Reels */}
            <Link
              to="work"
              smooth={true}
              duration={700}
              offset={-50}
              className="px-8 py-3 bg-white text-black rounded-full 
              hover:bg-gray-200 transition cursor-pointer"
            >
              Show Reels
            </Link>

          </div>
        </div>

        {/* Right Side Visual */}
        <div className="relative mt-16 md:mt-0 w-full flex justify-center">
          <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden shadow-2xl shadow-white/10">
            <img
              src={banner}
              alt="Banner"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <h2 className="absolute -bottom-10 left-1/2 -translate-x-1/2 
          text-4xl italic text-gray-300 opacity-70">
            curious.
          </h2>
        </div>

      </section>
    </div>
  );
};

export default LandingPage;
