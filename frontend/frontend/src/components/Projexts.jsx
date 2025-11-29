import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects") // will work when backend is connected
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));

    // Demo videos (temporary until backend connects)
    const demoVideos = [
      {
        _id: 1,
        title: "Cinematic Travel Reel",
        description:
          "A short cinematic travel sequence showcasing smooth transitions.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        _id: 2,
        title: "Fashion Brand Ad",
        description: "High-energy ad edit with text animation and cuts.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
      },
    ];

    setProjects(demoVideos);
  }, []);

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">🎬 My Video Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            <ReactPlayer url={p.videoUrl} width="100%" height="200px" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
