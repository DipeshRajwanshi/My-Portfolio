import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => (
  <button
    onClick={() => scroll.scrollToTop()}
    className="fixed bottom-8 right-8 bg-teal-500 text-black p-3 rounded-full hover:bg-teal-400 transition"
  >
    <FaArrowUp />
  </button>
);

export default ScrollToTop;
