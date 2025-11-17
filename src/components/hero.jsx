import { motion } from "framer-motion";

// Variants animasi huruf
const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 }
  }
};

const letter = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 200, damping: 25, mass: 0.7 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

export default function Hero() {
  const name = "Muhamad Rafli Julian";

  return (
    <section
      id="home"
      className="relative w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between mt-24 px-6 text-white overflow-hidden"
    >
      {/* Kiri - Teks & Statistik */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6 p-8"
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-blue-400 uppercase tracking-[4px] font-semibold" variants={fadeUp}>
          👋 Hey There
        </motion.p>

        {/* Nama per huruf */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I'm{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 inline-block"
            variants={container}
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                whileHover={{ scale: 1.15, textShadow: "0 0 15px rgba(255,255,255,0.6)" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Subjudul */}
        <motion.h2 className="text-2xl md:text-3xl text-gray-300 font-medium" variants={fadeUp} transition={{ delay: 0.8 }}>
          Front-End & Mobile Developer
        </motion.h2>

        {/* Deskripsi */}
        <motion.p className="text-gray-400 max-w-md mx-auto md:mx-0" variants={fadeUp} transition={{ delay: 1 }}>
          Pelajar SMK Wikrama Bogor yang bersemangat membangun antarmuka masa depan dengan sentuhan animasi dan desain futuristik.
        </motion.p>

        {/* Statistik */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-10 max-w-xs mx-auto md:mx-0"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          <StatCircle number="2+" label="Years Learning" />
          <StatCircle number="10+" label="Projects" />
          <StatCircle number="5+" label="Clients" />
        </motion.div>
      </motion.div>

      {/* Kanan - Foto floating lebih cepat */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end relative mb-12 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="relative group w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(100,100,255,0.3)] bg-gradient-to-br from-purple-600/30 to-blue-500/20 backdrop-blur-md"
          animate={{
            y: [0, -12, 0, 12, 0],
            rotate: [0, 1, 0, -1, 0],
            scale: [1, 1.03, 1, 1.03, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} // lebih cepat
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src="/assets/images/jas_hitam.png"
            alt="Muhamad Rafli Julian"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-30 transition"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Statistik Bulat
function StatCircle({ number, label }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-md hover:shadow-[0_0_20px_rgba(140,100,255,0.4)] transition-all duration-500"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(140,100,255,0.5)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{number}</h3>
      <p className="text-gray-400 text-xs md:text-sm text-center">{label}</p>
    </motion.div>
  );
}
