import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_61eyf9z",        // 🔥 replace this
        "template_9dvobr8",       // 🔥 replace this
        formRef.current,
        "USJ5B5abORBmB8MMX"         // 🔥 replace this
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-400">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you’re looking for a{" "}
              <span className="text-teal-400">video editor</span> for your next
              project, or just want to say hi — feel free to reach out!
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-400 text-xl" />
                <a
                  href="mailto:Dipeshrajwanshi@gmail.com"
                  className="hover:text-teal-400 transition"
                >
                  Dipeshrajwanshi@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-teal-400 text-xl" />
                <a
                  href="tel:+916261306938"
                  className="hover:text-teal-400 transition"
                >
                  +91 6261306938
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-5 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 text-2xl transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 text-2xl transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 text-2xl transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 
              focus:outline-none focus:border-teal-400 placeholder-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 
              focus:outline-none focus:border-teal-400 placeholder-gray-400"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 
              focus:outline-none focus:border-teal-400 placeholder-gray-400 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #14b8a6" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <p className="text-green-400 text-sm mt-2 text-center">
                Message sent successfully! I will contact you shortly 😊
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm mt-2 text-center">
                Something went wrong. Try again!
              </p>
            )}
          </form>
        </div>
      </motion.div>

      <footer className="text-center mt-16 text-gray-400 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} DipeshFilms — All Rights Reserved.
      </footer>
    </section>
  );
};

export default Contact;
