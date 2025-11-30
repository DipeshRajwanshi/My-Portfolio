import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import thumb3 from "../assets/Thumbnails/thumb3.PNG"
import Thum1 from "../assets/thum1.jpg"
import Thum2 from "../assets/thum2.jpg"
import Thum3 from "../assets/thum3.jpg"
import Product from "../assets/product.png"
import headphone from "../assets/headphone.png"
import Camera from "../assets/camera.png"
import reel from "../assets/Thumbnails/thumbb11.PNG"
import thumb2 from "../assets/Thumbnails/thumbb1.PNG"
import thumb4 from "../assets/Thumbnails/thumb4.PNG"
import thumb5 from "../assets/Thumbnails/thumb5.PNG"
import thumb6 from "../assets/Thumbnails/thumb6.PNG"
import new22 from "../assets/new22.PNG"
import new33 from "../assets/new33.PNG"
import new44 from "../assets/new44.PNG"
import thumbnail1 from "../assets/thumnail1.jpg"
import thumbnail2 from "../assets/thumnail2.jpg"
import thumbnail3 from "../assets/thumnail3.jpg"

const Work = () => {
  const [reels, setReels] = useState([]);
  const [fullVideos, setFullVideos] = useState([]);
  const [graphics, setGraphics] = useState([]);

  useEffect(() => {
    const demoReels = [
      { _id: 13, title: "Documentary Edit", description: "Professional Documentary Style Edit", thumbnail: new22, link: "https://drive.google.com/file/d/1nqNyrm7LaL7BZBt3LOm7mqZ58KVlLJGL/view?usp=drive_link" },
      { _id: 14, title: "Documentary Edit", description: "Professional Documentary Style Edit", thumbnail: new33, link: "https://drive.google.com/file/d/1gkyCBAVyPqUKFGBH28Lgf-ZOAmougqTX/view?usp=drive_link" },
      { _id: 15, title: "Real state Edit", description: "Professional Real state Edit", thumbnail: new44, link: "https://drive.google.com/file/d/1XEUv2LBX1b0ByvtydQGxAwK1UYv8NcIE/view?usp=drive_link" },
      { _id: 1, title: "Documentary Style Edit", description: "Documentary Style Edit", thumbnail: reel , link: "https://drive.google.com/file/d/14g_G0VuN28wzd2-cpiXnqdCpgGYGtuyP/view?usp=drive_link" },
      { _id: 2, title: "Tranding Edit", description: "Tranding Edit", thumbnail: thumb2, link: "https://drive.google.com/file/d/10SeTSYwja_ubhgFyh4TKQUmqZHbwhIdj/view?usp=drive_link" },
      { _id: 3, title: "Podcast Edit", description: "Converting Row Footage into Professional.", thumbnail: thumb3, link: "https://drive.google.com/file/d/1bGGTaKOKQaVkrtEl__GW-yO-1VdAJgTA/view?usp=drive_link" }, //https://www.instagram.com/reel/DRGfn17CGEU/?igsh=MW1ldGR3bW53bmhpeQ==
      { _id: 10, title: "Podcast Edit", description: "Podcast Edit", thumbnail: thumb4, link: "https://drive.google.com/file/d/1wY8hrrC9_sih9CZLVtnSClx0jOsNcV5D/view?usp=drive_link" },
      { _id: 11, title: "Representational Edit", description: "Representational Edit", thumbnail: thumb5, link: "https://drive.google.com/file/d/12ZaaQyw8V6HQhphoRTzHA-8lTFeGvuRd/view?usp=drive_link" },
      { _id: 12, title: "Story Telling Edit", description: "Documentary Edit", thumbnail: thumb6, link: "https://drive.google.com/file/d/1QrDv428hpsEK6EInUKMF_pCnLe5kHXTZ/view?usp=drive_link1" }
    ];

    const fullYT = [
      { _id: 4, title: "Cinematic Vlog Edit", thumbnail: Thum1, link: "https://youtu.be/9W5Vw34xayM?si=Keo-sJA1DfSSqDwH" },
      { _id: 5, title: "Documentary Style Edit", thumbnail: Thum2, link: "https://youtu.be/toy7N0gHG-4?si=IJKPoUVBIBOfXc-W" },
      { _id: 6, title: "Client Promo Edit", thumbnail: Thum3, link: "https://youtu.be/N3i-4hIixjk?si=ecSUXXXr0kVzcZ-t" }
    ];

    const graphicWorks = [
      { _id: 7, title: "Product Poster Design", imageUrl: Product, link: "/thumnail1.png" },
      { _id: 8, title: "Poster Design For Headphone", imageUrl: headphone, link: "/thumnail2.png" },
      { _id: 9, title: "Poster Disign for Camera", imageUrl: Camera, link: "/thumnail3.png" }
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
      {sectionTitle("🎬 Documentary Style Edit (9:16)")}

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
              className={`${glowCard} w-[340px] overflow-hidden cursor-pointer`} // wider like YouTube thumbnail
            >
              {/* 16:9 YouTube thumbnail ratio */}
              <div className="relative w-full pb-[56.25%] overflow-hidden">
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
