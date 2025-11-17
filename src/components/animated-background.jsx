"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  // Animated orbs untuk background yang elegan
  const orbs = [
    {
      id: 1,
      size: 400,
      duration: 20,
      delay: 0,
      colors: "from-blue-600/20 to-purple-600/20",
      top: "-10%",
      left: "-5%",
    },
    {
      id: 2,
      size: 300,
      duration: 25,
      delay: 2,
      colors: "from-purple-600/20 to-pink-600/20",
      top: "50%",
      right: "-5%",
    },
    {
      id: 3,
      size: 350,
      duration: 30,
      delay: 4,
      colors: "from-cyan-600/20 to-blue-600/20",
      bottom: "-10%",
      left: "20%",
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${orb.colors}`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay untuk subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Radial gradient overlay untuk depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950/50" />
    </div>
  )
}
