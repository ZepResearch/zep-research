"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"



export function LineMessengerButton({
  lineUrl = "https://line.me/R/ti/p/xanFL3Y-rm",
  customText = "Chat with us on Line",
  position = "bottom-left",
  showOnMobile = true,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only show after component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const positionClasses = {
    "bottom-left": "left-4 bottom-4",
    "bottom-right": "right-4 bottom-4",
  }

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col items-start gap-3",
        positionClasses[position],
        !showOnMobile && "hidden md:flex",
      )}
    >
      {isOpen && (
        <div className="animate-fade-in-up mb-2 rounded-lg bg-white p-4 shadow-lg">
          <p className="mb-3 text-sm font-medium">{customText}</p>
          <Button className="w-full bg-[#06C755] hover:bg-[#06C755]/90" onClick={() => window.open(lineUrl, "_blank")}>
            Open Line
          </Button>
        </div>
      )}
      <Button
        size="icon"
        className={cn(
          "h-16 w-16 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-slate-500 hover:bg-slate-500/90" : "bg-green-600 hover:bg-[#06C755]/90",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <img src="/line.png" className="h-16 w-16" />}
        <span className="sr-only">{isOpen ? "Close Line Messenger chat" : "Open Line Messenger chat"}</span>
      </Button>
    </div>
  )
}
