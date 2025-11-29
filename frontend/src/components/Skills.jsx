import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaFilm,
  FaMagic,
  FaPenNib,
} from "react-icons/fa";
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiCanva,
  SiCoreldraw,
  SiAdobeaftereffects
} from "react-icons/si";


const skills = [
  { name: "KineMaster", icon: <FaVideo className="text-teal-400 text-3xl" /> },
  { name: "CapCut", icon: <FaFilm className="text-teal-400 text-3xl" /> },
  { name: "Filmora", icon: <FaMagic className="text-teal-400 text-3xl" /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-teal-400 text-3xl" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-teal-400 text-3xl" /> },
  { name: "Canva", icon: <SiCanva className="text-teal-400 text-3xl" /> },
  { name: "CorelDRAW", icon: <SiCoreldraw className="text-teal-400 text-3xl" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects className="text-teal-400 text-3xl" /> },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        💡 My <span className="text-teal-400">Skills</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg w-48 text-center hover:shadow-teal-500/30 transition-all"
          >
            <div className="flex justify-center mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
