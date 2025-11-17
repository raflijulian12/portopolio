import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto mt-32 text-white px-6 md:px-0 relative overflow-hidden"
    >
      {/* Judul */}
      <motion.h2
        className="text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // animasi sekali saat scroll 30% muncul
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-400 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Front-End Developer dan Mobile Developer | UI/UX Enthusiast
      </motion.p>

      {/* Foto & Deskripsi */}
      <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Foto */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(100,100,255,0.3)] w-80 h-80 bg-gradient-to-br from-purple-600/30 to-blue-500/20">
            <img
              src="/assets/images/jas_hitam.png"
              alt="Muhamad Rafli Julian"
              className="w-full h-full object-cover transition duration-300"
            />
          </div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            Saya adalah seorang pelajar SMK yang sedang fokus menjadi Front-End
            Developer dan Mobile Developer menggunakan Flutter. Saya suka
            membuat tampilan yang menarik, responsif, dan mudah digunakan oleh
            pengguna. Bagi saya, setiap baris kode adalah langkah untuk
            mewujudkan ide menjadi kenyataan digital.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Saat ini saya terus belajar dan mengembangkan keterampilan saya di
            bidang pemrograman, desain UI/UX, dan pengembangan aplikasi mobile.
            Tujuan saya adalah menjadi developer yang tidak hanya mahir dalam
            kode, tetapi juga memahami pengalaman pengguna secara mendalam.
          </p>

          {/* Tombol CV */}
          <motion.a
            href="/assets/images/cv.pdf"
            download
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            📄 Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Skill Section */}
      <SkillShowcase />
    </section>
  );
}

// ==================== Skill Showcase ====================
function SkillShowcase() {
  const skills = [
    { name: "React", icon: "/assets/images/react_logo.png" },
    { name: "Flutter", icon: "/assets/images/flutter_logo.png" },
    { name: "Figma", icon: "/assets/images/figma_logo.png" },
    { name: "HTML", icon: "/assets/images/html_logo.png" },
    { name: "CSS", icon: "/assets/images/css_logo.png" },
  ];

  return (
    <div className="mt-32 relative">
      <motion.h3
        className="text-2xl font-semibold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Skills & Tools
      </motion.h3>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 z-10 relative">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm 
                       shadow-[0_0_20px_rgba(120,80,255,0.15)] hover:shadow-[0_0_40px_rgba(160,100,255,0.4)] 
                       hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-600/10 hover:to-blue-500/10 
                       transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600/30 to-blue-500/30 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            </div>
            <p className="text-gray-300 text-sm font-medium group-hover:text-white transition">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
