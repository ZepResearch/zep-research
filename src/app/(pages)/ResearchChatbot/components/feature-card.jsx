"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"



export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        <CardContent className="p-6 flex flex-col items-start">
          <div className="mb-4 p-2 rounded-lg bg-primary/10">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

