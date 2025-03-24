import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Globe, Lightbulb, Target } from "lucide-react"
import { Heading } from "@/components/ui/text"

export default function MissionVisionPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section with Bento Layout */}
        <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
          {/* Main Image Box */}
          <div className="col-span-6 row-span-4 bg-muted/50 rounded-3xl overflow-hidden relative">
            <Image
              src="/gallery/10.jpg"
              alt="Academic collaboration"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Global Research Network</span>
              </div>
            </div>
          </div>

          {/* Bottom Left Box */}
          <div className="col-span-3 row-span-2 bg-muted/50 rounded-3xl p-6 flex flex-col justify-between">
            <Target className="w-8 h-8 text-cyan-500" />
            <div>
              <div className="text-lg font-medium">Our Focus</div>
              <p className="text-sm text-muted-foreground mt-1">Excellence in research and collaboration</p>
            </div>
          </div>

          {/* Bottom Right Box */}
          <div className="col-span-3 row-span-2 bg-muted/50 rounded-3xl p-6 flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="space-y-1">
                <div className="h-1 w-12 bg-cyan-500/80 rounded-full"></div>
                <div className="h-1 w-16 bg-cyan-500/60 rounded-full"></div>
                <div className="h-1 w-8 bg-cyan-500/40 rounded-full"></div>
              </div>
              <Globe className="w-6 h-6 text-cyan-500/80" />
            </div>
            <div className="text-sm">
              <p>Global Impact</p>
              <p className="text-xs text-muted-foreground mt-1">Connecting researchers worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="space-y-8">
         <Heading as="h1" className="mt-2  text-">
                          Our Mission & Vision
                          </Heading>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-cyan-500" />
                </div>
                <h2 className="text-xl font-semibold">Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our mission is to enhance the quality of academic research, innovation, and collaboration globally. We
                aim to create an integrated platform that connects professionals, fosters growth and promotes excellence
                in research, conferences, and publications.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-cyan-500" />
                </div>
                <h2 className="text-xl font-semibold">Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We are committed to supporting academic organizations by expanding opportunities for professional
                development and advancing research on a global scale.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Button className="group rounded-full px-6 bg-gradient-to-tr from-cyan-400 to-blue-500">
              Join Our Network
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="bg-muted/50 rounded-xl p-6">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">Countries represented</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-6">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm text-muted-foreground">Researchers connected</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

