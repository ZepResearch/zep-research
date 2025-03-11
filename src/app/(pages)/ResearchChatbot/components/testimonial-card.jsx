"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"


export default function TestimonialCard({ quote, author, role, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-primary/40 mb-4" />
          <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{quote}"</p>
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{author}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

