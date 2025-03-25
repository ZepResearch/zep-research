import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Users, BarChart3, Globe, BookOpen, Lightbulb } from "lucide-react"
import Image from "next/image"
import logox from "@/assets/logo.svg"
import { IconRobotFace } from "@tabler/icons-react"

export default function HeroAbout() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 mt-12">
      <div className="flex md:flex-row flex-col justify-center gap-12 items-center">
        {/* Left Content Section */}
        <div className="space-y-6 ">
          <h1 className="md:text-8xl text-5xl font-medium text-pretty  tracking-normal">
            Advancing <br />
            academic <br />
            excellence
          </h1>

          <p className="text-lg text-muted-foreground max-w-md">
            Zep Research is a global leader in advancing academic excellence and fostering innovation through impactful
            conferences, research initiatives, and collaboration opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
        
            {/* <Button className="rounded-full  bg-gradient-to-tr from-cyan-400 to-blue-500 px-8">Learn More</Button> */}
            <Link href="/contact">
            <Button variant="outline" className="rounded-full px- border-2 border-cyan-300 font-semibold">
              Contact Us
            </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-muted">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center border border-muted">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center border border-muted">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center border border-muted">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center border border-muted">
                  <span className="text-xs font-medium">+</span>
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">250+</div>
                <div className="text-sm text-muted-foreground">Research collaborations worldwide</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span>Watch our impact</span>
            </Link>
          </div>
        </div>

        {/* Right Bento Grid Section */}
        <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
          {/* Logo Box */}
          <div className="col-span-4 row-span-3 bg-muted/50 rounded-3xl p-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-32 h-32  rounded-full -top-10 -right-10 bg-cyan-200 drop-shadow-sm"></div>
            <div className="relative z-10">
                <Image src={logox} alt="Zep Research" width={300} height={100} />
            </div>
            <div className="absolute bottom-6 left-6 text-sm font-medium">Our mission is to drive academic growth and innovation through exceptional academic interactions.</div>
          </div>

          {/* Stats Box */}
          <div className="col-span-2 row-span-2 bg-muted/50 rounded-3xl p-6 flex flex-col justify-between">
            <div className="text-4xl font-bold">50+</div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Annual conferences</span>
              <BarChart3 className="w-5 h-5 text-cyan-400" />
            </div>
          </div>

          {/* Fields Box */}
          <div className="col-span-2 row-span-3 bg-muted/50 rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-1 w-16 bg-cyan-400/80 rounded-full"></div>
              <div className="h-1 w-12 bg-cyan-400/60 rounded-full"></div>
              <div className="h-1 w-20 bg-cyan-400/40 rounded-full"></div>
              <div className="h-1 w-10 bg-cyan-400/20 rounded-full"></div>
            </div>
            <div className="text-sm">
              <p>Diverse research fields</p>
              <p className="text-xs text-muted-foreground mt-1">Tourism • Education • Sustainability • Technology</p>
            </div>
          </div>

          {/* Innovation Box */}
          <div className="col-span-3 row-span-3 bg-muted/50 rounded-3xl p-6 flex flex-col justify-between">
            <Lightbulb className="w-8 h-8 text-cyan-400" />
            <div>
              <div className="text-lg font-medium">Fostering Innovation</div>
              <p className="text-sm text-muted-foreground mt-1">
                Creating environments where researchers and industry professionals collaborate
              </p>
            </div>
          </div>

          {/* Global Box */}
          <div className="col-span-3 row-span-3 bg-muted/50 rounded-3xl p-6 flex items-end">
            <div className="w-full">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-lg font-medium">AI ChatBot</div>
                  <p className="text-sm text-muted-foreground mt-1">Connecting experts worldwide</p>
                </div>
                <IconRobotFace className="w-10 h-10 text-cyan-400/80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full About Text Section */}
      
    </main>
  )
}

