"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { FeatureCard } from "./ui/feature-card"
import { Heading, Subheading } from '@/components/ui/text'

const features = [
  {
    title: "Professional Conference Organizer",
    description: "Expertly planned events that foster academic collaboration, drive innovation and enhance professional development.",
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1735540796/Zep%20Research%20Website%20Assets/ymsrp0veeatgq2wcbkeb.jpg"
  },
  {
    title: "Publishing Opportunities",
    description: "Access diverse academic journals and platforms, enabling scholars to showcase their research and advance knowledge.",
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1735540877/Zep%20Research%20Website%20Assets/kfmcjeiqi0cqqj3kirhf.jpg"
  },
  {
    title: "Global Network",
    description: "Connect with a worldwide community of researchers, academics, and professionals to collaborate and share insights.",
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/jxouvaqolvravdgpj5rl.jpg"
  }
]

export default function Welcome() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-full  bg-white overflow-hidden my-8 ">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 py-12 mx-auto  max-w-screen-2xl ">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-4 lg:w-1/2"
        >
          <Subheading> Welcome to Zep Research</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
        All-in-One <br />platform for <br /> conferences
        </Heading>
          
          {/* <h1 className="text-5xl font-bold tracking-normal sm:text-6xl xl:text-7xl/none">
            All-in-One <br />platform for <br /> conferences
          </h1> */}
         
          <p className="max-w-[550px] ml-2 text-gray-500 md:text-base">
          We take pride in being a leading conference planner, organizing impactful events and webinars that connect faculty, researchers, and students.
           Our mission is to drive academic growth and innovation through exceptional academic interactions.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button size="lg" className="bg-gradient-to-tr from-cyan-400 to-blue-500 " >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className='py-3 border-blue-400 text-blue-500'>Explore Upcoming Conferences</Button>
          </div>
        </motion.div>

        <div className="sm:w-1/2 w-full relative h-[500px] mb-1">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              isVisible={currentFeature === index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

