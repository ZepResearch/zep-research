"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CPDCtaSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative mx-auto max-w-7xl my-12 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] py-8 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-2xl shadow-blue-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="relative ">
        <div
          className={`flex flex-col justify-center md:flex-row gap-12 items-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* CPD Logo - Left Side */}
          <div className="flex justify-between lg:justify-end">
            <div className="group relative">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl transition-all duration-500 group-hover:bg-white/30 group-hover:blur-2xl" />
              <div className="relative rounded-full bg-white p-2 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-blue-500/50">
                <img
                  src="/cpd2.png"
                  alt="CPD Accredited Logo"
                  className="h-32 w-32 lg:h-48 lg:w-48 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main content - Right Side */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>{"Elevate Your Professional Development"}</span>
            </div>

            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
              {"Ready to Transform Your Career?"}
            </h2>

            <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-blue-100 sm:text-xl animate-fade-in-up delay-200">
              {
                "Discover the benefits of CPD accreditation and unlock new opportunities for professional growth with our trusted providers."
              }
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row animate-fade-in-up delay-300">
              <Link href="https://www.cpdstandards.com/resources/benefits-of-cpd/">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-white text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/20 px-8 py-6 text-lg font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {"Explore CPD Benefits"}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Button>
              </Link>

              <Link href="https://directory.cpdstandards.com/providers/zep-research-opc-pvt-ltd/">
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-white bg-transparent text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-900 hover:shadow-2xl hover:shadow-white/20 px-8 py-6 text-lg font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {"Learn More"}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="mt-12 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 text-blue-100 sm:flex-row animate-fade-in-up delay-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">{"Trusted by Educators Worldwide"}</span>
              </div>
              <span className="hidden sm:inline text-blue-300">{"•"}</span>
              <span className="text-sm font-medium">{"Professional Standards Guaranteed"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
