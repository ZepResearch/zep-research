'use client'

import React, { useState, useEffect } from 'react'
import { Container } from './ui/container'
import { Navbar } from './navbar'
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
    <div className="relative max-w-screen-2xl mx-auto   rounded-3xl mt-4 drop-shadow-2xl shadow-2xl ">
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
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-8xl/[0.8]">
            Bridging Minds & Empowering Research
          </h1>
          <p className="mt-8 max-w-4xl text-xl/7 font-medium text-white/90 sm:text-2xl/8">
            Elevate research and publication through expertly managed, innovative conferences.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
          <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
    <span className="w-48 h-48 rounded-3xl rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Start your Journey</span>
</a>
<a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Learn more</span>
</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero

