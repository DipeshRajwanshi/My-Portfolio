import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import short1 from "../assets/short1.png"
import Sthum1 from "../assets/Sthum1.jpg"
import Thum1 from "../assets/thum1.jpg"
import Thum2 from "../assets/thum2.jpg"
import Thum3 from "../assets/thum3.jpg"
import Product from "../assets/product.png"
import headphone from "../assets/headphone.png"
import Camera from "../assets/camera.png"
import reel from "../assets/style.jpeg"

const Work = () => {
  const [reels, setReels] = useState([]);
  const [fullVideos, setFullVideos] = useState([]);
  const [graphics, setGraphics] = useState([]);

  useEffect(() => {
    const demoReels = [
      { _id: 1, title: "Cinematic Travel Reel", description: "Vertical reel with smooth transitions.", thumbnail: Sthum1, link: "youtube.com/shorts/Ea4fLXdP0n8?si=bWrBd0cx4gBD2bwQ" },
      { _id: 2, title: "Before After Edit", description: "Before After Edit", thumbnail: reel, link: "https://www.instagram.com/reel/DRGfn17CGEU/?igsh=MW1ldGR3bW53bmhpeQ==" },
      { _id: 3, title: "Music Sync Reel", description: "Fast-paced cuts synced with beats.", thumbnail: short1, link: "https://youtube.com/shorts/v51EEnb-VXM" } //https://www.instagram.com/reel/DRGfn17CGEU/?igsh=MW1ldGR3bW53bmhpeQ==
    ];

    const fullYT = [
      { _id: 4, title: "Cinematic Vlog Edit", thumbnail: Thum1, link: "https://youtu.be/9W5Vw34xayM?si=Keo-sJA1DfSSqDwH" },
      { _id: 5, title: "Documentary Style Edit", thumbnail: Thum2, link: "https://youtu.be/toy7N0gHG-4?si=IJKPoUVBIBOfXc-W" },
      { _id: 6, title: "Client Promo Edit", thumbnail: Thum3, link: "https://youtu.be/N3i-4hIixjk?si=ecSUXXXr0kVzcZ-t" }
    ];

    const graphicWorks = [
      { _id: 7, title: "Product Poster Design", imageUrl: Product, link: "/product.png" },
      { _id: 8, title: "Poster Design For Headphone", imageUrl: headphone, link: "/headphone.png" },
      { _id: 9, title: "Poster Disign for Camera", imageUrl: Camera, link: "/camera.png" }
    ];

    setReels(demoReels);
    setFullVideos(fullYT);
    setGraphics(graphicWorks);
  }, []);

  const sectionTitle = (text) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-semibold text-center mb-14 text-white tracking-wide drop-shadow-lg"
    >
      {text}
    </motion.h2>
  );

  const glowCard =
    "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500";

  return (
    <section
      id="work"
      className="pt-24 pb-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {sectionTitle("🎬 My Reels (9:16)")}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mb-24">
        {reels.map((p) => (
          <a
            key={p._id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              className={`relative ${glowCard} w-[240px] md:w-[260px] overflow-hidden cursor-pointer`}
            >
              <div className="relative w-full pb-[177.77%] overflow-hidden rounded-t-2xl">
                <video
                  src={p.videoUrl}
                  poster={p.thumbnail}    // ✅ THUMBNAIL SUPPORT
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 transition duration-500" />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-teal-300 group-hover:text-teal-200 transition">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm">{p.description}</p>
              </div>
            </motion.div>
          </a>
        ))}
    </div>


      <section id="video">
        {sectionTitle("📺 Full YouTube Videos (16:9)")}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mb-24">
          {fullVideos.map((v) => (
            <a key={v._id} href={v.link} target="_blank" className="group">
              <motion.div
                whileHover={{ scale: 1.06 }}
                className={`${glowCard} w-[300px] overflow-hidden cursor-pointer`}
              >
                <div className="relative w-full pb-[56.25%] overflow-hidden">
                  <img
                    src={v.thumbnail}
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    alt={v.title}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-blue-300 group-hover:text-blue-200 transition">
                    {v.title}
                  </h3>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      {sectionTitle("🎨 Graphic Design Work")}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {graphics.map((g) => (
          <a key={g._id} href={g.link} target="_blank" className="group">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className={`${glowCard} w-[260px] overflow-hidden cursor-pointer`}
            >
              <div className="relative w-full pb-[100%] overflow-hidden">
                <img
                  src={g.imageUrl}
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt={g.title}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-pink-300 group-hover:text-pink-200 transition">
                  {g.title}
                </h3>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
