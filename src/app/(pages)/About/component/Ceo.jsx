"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { Heading } from "@/components/ui/text"

const stats = [
  { label: "Founded", value: "2023" },
  { label: "Conference", value: "37+" },
  { label: "Article Published", value: "1200+" },
  { label: "Journal tie-ups", value: "75" },
]

const testimonials = [
  {
    quote:
      "Our commitment is to drive academic excellence with cutting-edge events, top-tier publications, and transformative professional development.",
    author: "Ankit",
    role: "CEO, Zep Research",
    image: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727342905/mykbitvfcnerpxsvh8qz.jpg",
  },
  {
    quote:
      "Our promise is to propel academic superiority through groundbreaking colloquies, world-class journals, and strategic professional enhancement opportunities.",
    author: "Priyanka",
    role: "Director, Zep Research",
    image: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730879720/oukartk2szolxtopoyua.jpg",
  },
]

const AnimatedText = ({ text }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.p
      ref={ref}
      className="text-base md:text-lg leading-relaxed text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.05 }}
    >
      {text}
    </motion.p>
  )
}

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <Card ref={ref} className="overflow-hidden border-none shadow-lg">
      <CardContent className="p-0">
        <div className="relative h-full">
          <div className="absolute inset-0">
            <img src={image || "/placeholder.svg"} alt={`${author} portrait`} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative p-8 md:p-10 h-full flex flex-col justify-end z-10 min-h-[400px]">
            <Quote className="text-cyan-400/40 h-12 w-12 mb-4" />

            <AnimatedText text={quote} />

            <div className="mt-6 flex items-center">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src={image} alt={author} />
                <AvatarFallback>{author[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="text-sm font-medium text-white">{author}</p>
                <p className="text-sm text-white/70">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const StatCard = ({ label, value }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 rounded-lg bg-slate-50 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl font-bold text-cyan-400">{value}</span>
      <span className="text-sm font-medium text-muted-foreground mt-2">{label}</span>
    </motion.div>
  )
}

export default function CeoVision() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

  return (
    <div className="w-full  to-white py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
          ref={headerRef}
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
            <Heading as="h1" className="mt-2  text-">
            Our Vision to Empower Academic Excellence
            </Heading>
          
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Empowering academic excellence through comprehensive support, we offer impactful conferences, diverse
            publishing opportunities, and streamlined peer reviews.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a
            href="/ZepResearch"
            className="inline-flex items-center text-cyan-400 font-medium hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn more about our company
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div> */}
      </div>
    </div>
  )
}

