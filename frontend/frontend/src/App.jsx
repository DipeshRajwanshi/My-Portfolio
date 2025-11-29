import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing"
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="bg-black text-white font-poppins">
      {/* Navbar stays fixed at top */}
      <Navbar />

      {/* Each section has its own ID for scrolling */}
      <section id="home">
        <Landing />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
