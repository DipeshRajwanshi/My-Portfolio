import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaUserEdit } from "react-icons/fa";
import ImageME from "../assets/profile1.png"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-gray-200 px-8 md:px-20 py-16"
    >
      {/* Left Side – Image / Video / Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <img
          src={ImageME}
          alt="Dipesh working on editing"
          className="rounded-2xl shadow-lg w-80 md:w-96 object-cover"
        />
      </motion.div>

      {/* Right Side – Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 text-teal-400 flex items-center justify-center md:justify-start gap-2">
          <FaUserEdit /> About Me
        </h2>

        <p className="text-gray-400 leading-relaxed mb-6">
          Hi, I’m <span className="text-white font-semibold">Dipesh</span> — a
          passionate <span className="text-teal-400 font-semibold">video editor</span> who loves
          transforming raw clips into cinematic stories. Whether it’s a brand
          reel, short film, or YouTube montage, I aim to make every frame
          engaging and visually powerful.
        </p>

        <p className="text-gray-400 leading-relaxed mb-8">
          I specialize in <span className="text-white">Premiere Pro, After Effects, Photoshop,</span> 
          and mobile tools like <span className="text-white">Kinemaster</span> and <span className="text-white">CapCut</span>.
          My focus is always on storytelling, rhythm, and emotion through visuals and sound.
        </p>

        <motion.a
          href="/Dipesh Rajwanshi Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
        >
          <FaVideo /> Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
