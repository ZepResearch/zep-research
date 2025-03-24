import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Heading } from "@/components/ui/text"

export default function SDGPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <Heading as="h1" className="mt-2  text-pretty">
          Sustainable Development Goals
        </Heading>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          The Zep Research supports the Sustainable Development Goals (SDGs) through various initiatives that align with
          global sustainability efforts. Here's how ZEP Research contributes to the SDGs:
        </p>
        <div className="mx-auto w-full flex justify-center">
        <Image
              src="/sdge.png"
              alt="Climate Action"
              width={400}
              height={667}
              className="object-center"
        />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SDG 4 - Quality Education */}
        <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000"
              alt="Education"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="text-cyan-400 font-medium mb-2">SDG 4</div>
            <h3 className="text-xl font-bold mb-3">Promoting Quality Education</h3>
            <p className="text-muted-foreground flex-1">
              Zep Research improves education by conducting research and sharing findings globally, and by hosting
              conferences and workshops where educators and researchers exchange innovative ideas and best practices to
              enhance teaching and learning.
            </p>
            
          </div>
        </div>

        {/* SDG 9 - Innovation and Infrastructure */}
        <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
              alt="Innovation"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="text-cyan-400 font-medium mb-2">SDG 9</div>
            <h3 className="text-xl font-bold mb-3">Fostering Innovation and Infrastructure</h3>
            <p className="text-muted-foreground flex-1">
              Zep Research drives innovation by supporting STEM research and collaborating with academic and industry
              partners, fostering a network that promotes the development of cutting-edge technologies and sustainable
              infrastructure for a better future.
            </p>
            
          </div>
        </div>

        {/* SDG 5 - Gender Equality */}
        <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1000"
              alt="Gender Equality"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="text-cyan-400 font-medium mb-2">SDG 5</div>
            <h3 className="text-xl font-bold mb-3">Gender Equality</h3>
            <p className="text-muted-foreground flex-1">
              Zep Research promotes gender equality in research by providing inclusive opportunities for all genders to
              participate in events and publications, and by supporting women in STEM fields through special initiatives
              and forums, contributing to a more balanced and diverse research community.
            </p>
            
          </div>
        </div>

        {/* SDG 13 - Climate Action */}
        <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000"
              alt="Climate Action"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="text-cyan-400 font-medium mb-2">SDG 13</div>
            <h3 className="text-xl font-bold mb-3">Climate Action and Environmental Sustainability</h3>
            <p className="text-muted-foreground flex-1">
              Zep Research prioritizes environmental sustainability by supporting research on climate change and
              sustainability, publishing key findings, and incorporating eco-friendly practices in its events, such as
              reducing waste and carbon footprints, to contribute to global efforts in addressing climate challenges.
            </p>
            
          </div>
        </div>

        {/* SDG 17 - Partnerships */}
        <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border/50 flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partnerships"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="text-cyan-400 font-medium mb-2">SDG 17</div>
            <h3 className="text-xl font-bold mb-3">Partnerships for the Goals</h3>
            <p className="text-muted-foreground flex-1">
              Zep Research partners with universities, research institutions, and international organizations to achieve
              shared goals in education, innovation, and sustainability, amplifying its global impact and contributing
              to the United Nations Sustainable Development Goals (SDGs) through collaborative efforts.
            </p>
            
          </div>
        </div>

        {/* Additional SDG Card - Can be used for a call to action */}
        <div className="bg-cyan-400/5 rounded-xl overflow-hidden shadow-sm border border-cyan-400/20 flex flex-col">
          <div className="p-6 flex flex-col justify-center items-center text-center h-full">
            <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Join Our Sustainability Efforts</h3>
            <p className="text-muted-foreground mb-6">
              Collaborate with Zep Research to contribute to the Sustainable Development Goals and make a positive
              impact on global challenges.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-400 px-8 text-sm font-medium text-cyan-400-foreground ring-offset-background transition-colors hover:bg-cyan-400/90"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

