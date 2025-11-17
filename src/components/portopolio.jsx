// src/components/Portfolio.jsx
import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { categories, projects } from "../variable/portfolioData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Ambil 3 project acak untuk kategori "All"
  const randomProjects = useMemo(() => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? randomProjects
      : projects.filter((p) => p.tag === activeCategory);

  // Ref untuk scroll-trigger
  const sectionRef = useRef(null);
  // Animasi hanya muncul sekali saat section masuk viewport
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Variants container (stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variants tiap project
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto mt-32 px-6 md:px-0 text-white"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Portfolio
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Beberapa project yang pernah saya kerjakan — dari website, mobile app,
          hingga desain UI/UX.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 md:px-5 md:py-2 rounded-md border transition-all duration-300 text-sm md:text-base ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-md shadow-purple-500/30"
                : "border-gray-600 text-gray-400 hover:border-purple-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] place-items-center px-2"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(150,100,255,0.3)] hover:-translate-y-2 transition-all duration-300 w-full max-w-sm min-h-[450px] flex flex-col"
            >
              <div className="relative group h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-2xl group-hover:opacity-90 transition duration-300"
                />
                <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm text-purple-400 mb-1">{project.tag}</p>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition self-start mt-auto"
                >
                  View Project ↗
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
