import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaGoogle,
} from "react-icons/fa";

export default function Contact() {
  // State untuk form
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Data EmailJS kamu
  const SERVICE_ID = "service_9oavapq"; // service ID dari EmailJS (punya kamu)
  const TEMPLATE_ID = "template_pdazu5p"; 
  const PUBLIC_KEY = "SDy9ScaL__87KgxUK"; // ganti dgn public key kamu

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        alert("✅ Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Gagal mengirim pesan. Silakan coba lagi nanti.");
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-6xl mx-auto mt-32 px-6 md:px-0 py-20 text-white"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Punya proyek, ide kolaborasi, atau sekadar ingin terhubung?  
          Kirim pesan melalui form atau hubungi saya lewat kontak di bawah ini.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Kiri - Info Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Email */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:border-purple-400/40 transition">
            <FaEnvelope className="text-purple-400 text-2xl" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:raflijulian356@gmail.com"
                className="text-white hover:underline"
              >
                raflijulian356@gmail.com
              </a>
            </div>
          </div>

          {/* Telepon */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:border-blue-400/40 transition">
            <FaPhoneAlt className="text-blue-400 text-2xl" />
            <div>
              <p className="text-gray-400 text-sm">Telepon</p>
              <a
                href="tel:+6281234567890"
                className="text-white hover:underline"
              >
                +62 812-3456-7890
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:border-gray-400/40 transition">
            <FaGithub className="text-gray-300 text-2xl" />
            <div>
              <p className="text-gray-400 text-sm">GitHub</p>
              <a
                href="https://github.com/raflijulian12?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                raflijulian12
              </a>
            </div>
          </div>
        </motion.div>

        {/* Kanan - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm p-8 md:p-10 shadow-[0_0_30px_rgba(140,100,255,0.2)]"
        >
          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama kamu"
              className="px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Alamat email aktif"
              className="px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tulis pesanmu di sini..."
              className="px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition outline-none text-white placeholder-gray-400 resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 shadow-lg shadow-purple-500/30 transition duration-300"
          >
            🚀 Kirim Pesan
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
