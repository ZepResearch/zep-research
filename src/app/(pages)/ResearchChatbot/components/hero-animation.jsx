"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function HeroAnimation() {
  // Start with isAnimating and particles as false/empty
  const [isAnimating, setIsAnimating] = useState(false)
  const [particles, setParticles] = useState([])

  // Only initialize animations after component mounts on client
  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 15 }).map(() => ({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
      delay: Math.floor(Math.random() * 5),
      duration: 5 + Math.floor(Math.random() * 10),
    }))

    setParticles(newParticles)
    setIsAnimating(true)

    // Set up interval to restart animation
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => setIsAnimating(true), 100)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
      {/* PDF Document */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isAnimating ? "0%" : "100%" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-10 left-10 w-[70%] h-[80%] bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md"
      >
        {/* PDF Header */}
        <div className="h-8 bg-primary/10 rounded-t-lg flex items-center px-4">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <div className="text-xs text-slate-600 dark:text-slate-300 ml-2">research-paper.pdf</div>
        </div>

        {/* PDF Content */}
        <div className="p-6">
          <div className="w-full h-6 bg-slate-200 dark:bg-slate-600 rounded mb-4"></div>
          <div className="w-3/4 h-6 bg-slate-200 dark:bg-slate-600 rounded mb-8"></div>

          <div className="w-full h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
          <div className="w-full h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
          <div className="w-2/3 h-4 bg-slate-200 dark:bg-slate-600 rounded mb-6"></div>

          <div className="w-full h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
          <div className="w-full h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
          <div className="w-5/6 h-4 bg-slate-200 dark:bg-slate-600 rounded mb-6"></div>

          <div className="w-full h-32 bg-slate-200 dark:bg-slate-600 rounded mb-6"></div>

          <div className="w-full h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
          <div className="w-4/5 h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
          <div className="w-3/4 h-4 bg-slate-200 dark:bg-slate-600 rounded"></div>
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isAnimating ? 1 : 0, scale: isAnimating ? 1 : 0.9 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-10 right-10 w-[60%] h-[60%] bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        {/* Chat Header */}
        <div className="h-12 bg-primary flex items-center px-4 text-white">
          <span className="font-medium">Research Assistant</span>
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-[calc(100%-96px)] overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 2 }}
            className="mb-4 max-w-[80%] bg-slate-100 dark:bg-slate-800 p-3 rounded-lg"
          >
            <p className="text-sm text-slate-700 dark:text-slate-300">
              I've analyzed your research paper on quantum computing. What would you like to know about it?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 2.5 }}
            className="mb-4 max-w-[80%] ml-auto bg-primary/10 p-3 rounded-lg"
          >
            <p className="text-sm text-slate-700 dark:text-slate-300">
              What are the key findings in the methodology section?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 3 }}
            className="mb-4 max-w-[80%] bg-slate-100 dark:bg-slate-800 p-3 rounded-lg"
          >
            <p className="text-sm text-slate-700 dark:text-slate-300">
              The methodology section describes a novel approach to quantum error correction using topological qubits.
              The key findings include:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 dark:text-slate-300">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 3.2 }}
              >
                A 42% reduction in decoherence compared to previous methods
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 3.4 }}
              >
                Successful implementation on a 20-qubit system
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 3.6 }}
              >
                Verification through 5 independent experimental trials
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Chat Input */}
        <div className="h-12 border-t border-slate-200 dark:border-slate-700 flex items-center px-4">
          <div className="flex-1 h-8 bg-slate-100 dark:bg-slate-800 rounded-full px-4"></div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 bg-primary rounded-full ml-2 flex items-center justify-center text-white cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 2L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Particles - Always render the container but only populate with particles on client */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 0.7 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
        suppressHydrationWarning
      >
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
            }}
            animate={{
              x: particle.x + 50,
              y: particle.y + 50,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            suppressHydrationWarning
          />
        ))}
      </motion.div>
    </div>
  )
}

