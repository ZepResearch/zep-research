"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "./badge"
import { ArrowRight } from "lucide-react"



export function FeatureCard({ title, description, isVisible, imageUrl }) {
  return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="absolute inset-0"
      >
        <Card className="group overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="relative z-10"
          >
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">
                Feature 
              </Badge>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-blue-600"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </div>
            
            <h2 className="text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
              {title}
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </Card>
      </motion.div>
    )}
  </AnimatePresence>
  )
}

