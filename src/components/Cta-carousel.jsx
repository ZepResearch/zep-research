"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"



export function CTACarousel({
  slides,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating) return

      setIsAnimating(true)
      setCurrentIndex(index)

      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    },
    [isAnimating],
  )

  const goToNextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % slides.length
    goToSlide(newIndex)
  }, [currentIndex, goToSlide, slides.length])

  const goToPrevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length
    goToSlide(newIndex)
  }, [currentIndex, goToSlide, slides.length])

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, goToNextSlide, autoPlayInterval, isPaused])

  return (
    <div
      className="relative overflow-hidden rounded-lg max-w-screen-2xl mx-auto pt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-all duration-700 ease-out",
              index === currentIndex
                ? "opacity-100 transform-none"
                : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full",
            )}
            style={{
              zIndex: index === currentIndex ? 10 : 0,
            }}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white max-w-4xl md:ml-12 ml-4 md:mb-4 mb-1">
              <h2 className="md:text-4xl text-2xl font-bold mb-2 animate-fadeIn">{slide.title}</h2>
              <p className="animate-fadeIn animation-delay-200 mb-4 text-white/90 md:text-xl text-sm">{slide.description}</p>
              {slide.href && (
                <Button
                  variant="outline"
                  className="mt-2  backdrop-blur-sm bg-gradient-to-tr from-cyan-400 to-blue-500 border-none text-white hover:text-white  animate-fadeIn animation-delay-300"
                  asChild
                >
                  <a href={slide.href}>Learn More</a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 border-none rounded-full w-12 h-12 shadow-md z-20 transition-all duration-300"
            onClick={goToPrevSlide}
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 border-none rounded-full w-12 h-12 shadow-md z-20 transition-all duration-300"
            onClick={goToNextSlide}
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6 text-white" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white w-6" : "bg-white/40 w-2 hover:bg-white/70",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

