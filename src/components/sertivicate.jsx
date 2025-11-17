import { motion } from "framer-motion";
import certificates from "../variable/sertificate";
import "../styles/no-scrollbar.css"; // pastikan ini ada

export default function Sertivicate() {
  return (
    <section
      id="certificate"
      className="relative w-full max-w-6xl mx-auto mt-32 px-6 text-white"
    >
      {/* Judul */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Beberapa sertifikat pencapaian saya 📜
        </p>
      </motion.div>

      {/* Scroll Container */}
      <div
        className="
          relative flex gap-6 overflow-x-auto scroll-smooth pb-6 px-2
          cursor-grab active:cursor-grabbing
          no-scrollbar
        "
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="
              min-w-[260px] md:min-w-[320px]
              bg-white/10 backdrop-blur-sm
              border border-white/10 rounded-2xl
              overflow-hidden flex-shrink-0
              hover:scale-[1.05]
              transition-transform duration-300 ease-out
            "
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-44 md:h-52 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-purple-400 text-sm font-medium mb-1">
                {cert.organization}
              </p>
              <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
              <p className="text-xs text-gray-400">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
