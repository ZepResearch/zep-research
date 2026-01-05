'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { FileText, TrendingUp, Users, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'

// Static journal data
const journalData = [
  {
    id: 1,
    name: "Frontiers in Management and Social Insights",
    description: "A multidisciplinary platform dedicated to advancing knowledge in business, management, and social sciences.",
    color: "from-blue-800 via-blue-800 to-gray-900",
    accentColor: "blue",
    features: [
      { icon: TrendingUp, title: "Strategy & Innovation", subtitle: "Business & Digital", color: "blue" },
      { icon: Users, title: "People & Society", subtitle: "HR & Policy", color: "sky" }
    ],
    topics: [
      "Business Strategy & Marketing",
      "Organizational Behavior & HRM",
      "Sustainability & Entrepreneurship"
    ],
    link: "https://journal.zepresearch.com/fmsi"
  },
  {
    id: 2,
    name: "The Preventive Care Journal ",
    description: " The journal’s scope includes areas such as community health, health promotion, chronic disease prevention, nutrition, mental health, healthcare policy, digital health innovations, and sustainable healthcare practices, fostering knowledge exchange and evidence-based approaches for better global health outcomes.",
    color: "from-pink-300 via-teal-purple-400 to-pink-900",
    accentColor: "white",
    features: [
      { icon: Users, title: "Community Health", subtitle: "Health Promotion", color: "slate" },
      { icon: Lightbulb, title: "Digital Health", subtitle: "Healthcare Innovation", color: "slate" }
    ],
    topics: [
      "Chronic Disease Prevention & Management",
      "Mental Health & Wellness Programs",
      "Healthcare Policy & Sustainable Practices"
    ],
    link: "https://journal.zepresearch.com/pcj"
  },
 
]

function JournalCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentJournal = journalData[currentIndex]

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % journalData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + journalData.length) % journalData.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % journalData.length)
  }

  const handleDotClick = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="py-8">
      <div className="max-w-screen-2xl w-full">
        <div className="relative group">
          {/* Animated gradient border effect */}
          <div className="absolute -inset-1 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Main card */}
          <div className={`relative bg-gradient-to-tl ${currentJournal.color} rounded-2xl shadow-2xl overflow-hidden transition-all duration-700`}>
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Decorative elements */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-${currentJournal.accentColor}-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob transition-colors duration-700`}></div>
            <div className={`absolute bottom-0 left-0 w-64 h-64 bg-${currentJournal.accentColor}-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-colors duration-700`}></div>
            
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left section */}
              <div className="space-y-6" key={currentJournal.id}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${currentJournal.accentColor}-600/30 to-${currentJournal.accentColor}-500/30 rounded-full border border-${currentJournal.accentColor}-500/50 backdrop-blur-sm transition-all duration-700`}>
                  <FileText className={`w-4 h-4 text-${currentJournal.accentColor}-300`} />
                  <span className={`text-${currentJournal.accentColor}-200 text-sm font-medium`}>Peer-Reviewed Journal</span>
                </div>
                
                <h1 className={`text-4xl md:text-5xl font-bold  text-white leading-tight transition-all duration-700`}>
                  {currentJournal.name}
                </h1>
                
                <p className="text-lg text-slate-300 leading-relaxed transition-all duration-700">
                  {currentJournal.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {currentJournal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-700">
                      <feature.icon className={`w-5 h-5 text-${feature.color}-400 mt-1 flex-shrink-0`} />
                      <div>
                        <div className={`text-${feature.color}-300 font-semibold text-sm`}>{feature.title}</div>
                        <div className="text-slate-400 text-xs mt-1">{feature.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right section */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Submit Your Research</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Share your original research, case studies, and review papers on contemporary challenges and emerging trends.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {currentJournal.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm transition-all duration-700">
                        <div className={`w-2 h-2 bg-gradient-to-r from-${currentJournal.accentColor}-500 to-${currentJournal.accentColor}-400 rounded-full`}></div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={currentJournal.link} className="block">
                    <button className={`w-full group/btn relative px-8 py-4 bg-gradient-to-r from-${currentJournal.accentColor}-600 to-${currentJournal.accentColor}-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-${currentJournal.accentColor}-500/50 transition-all duration-300 hover:scale-105 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-r from-${currentJournal.accentColor}-500 to-${currentJournal.accentColor}-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                      <span className="relative flex items-center justify-center gap-2">
                        <FileText className="w-5 h-5" />
                        Submit Your Paper
                      </span>
                    </button>
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <Lightbulb className="w-4 h-4" />
                    <span>Fast peer review • Open access options available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 px-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label="Previous journal"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Dots Navigation */}
              <div className="flex items-center gap-2">
                {journalData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? `w-8 h-3 bg-${currentJournal.accentColor}-500`
                        : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to journal ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label="Next journal"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalCard