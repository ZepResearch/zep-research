'use client'

import React, { useState, useEffect } from 'react'
import { Container } from './ui/container'

import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import { Button } from './ui/button'

const images = [
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // Add more image paths as needed
]

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-24   rounded-3xl  drop-shadow-2xl shadow-2xl ">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 rounded-3xl ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-cyan-500/50 rounded-3xl " />
      <Container className="relative h-full flex flex-col justify-center rounded-3xl">
        <div className="py-24">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-8xl/[0.8]">
            Bridging Minds & Empowering Research
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-white/90 sm:text-2xl/8">
            Elevate research and publication through expertly managed, innovative conferences.
          </p>
          <div className='gap-4 flex flex-col md:flex-row'>
          <Button size="lg" className="mt-8 " variant="outline">
            Learn More
          </Button>
        <Button size="lg" className="mt-8 " variant="outline">
          Explore Conferences
          <ChevronRightIcon className="ml-2 h-6 w-6" /> 
          </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero

