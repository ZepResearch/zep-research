import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getJournals } from "@/lib/pocketbase"
import { FileText, TrendingUp, Users, Lightbulb } from 'lucide-react';

export const dynamic = "force-dynamic"
export const metadata = {
  title: "Journals | Zep Research",
  description: "Browse academic journals on Zep Research",
  metadataBase: new URL("https://zepresearch.com"),
  alternates: {
    canonical: "https://zepresearch.com/journals",
  },
};

export default async function JournalsPage() {
  const journals = await getJournals()

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-2">
        <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Academic Journals
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of academic journals and research publications
        </p>
      </div>
        <JournalCard/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journals.map((journal) => (
          <Link href={`/journals/${journal.id}`} key={journal.id} className="group">
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-gray-200 hover:border-gray-300">
              <div className="relative h-[300px] bg-gradient-to-t from-blue-300 to-blue-800 w-full overflow-hidden">
                {journal.imgs ? (
                  <Image
                    src={`https://zep-research.pockethost.io/api/files/Journals/${journal.id}/${journal.imgs}`}
                    alt={journal.title || "Journal cover"}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : journal.img ? (
                  <Image
                    src={journal.img || "/placeholder.svg"}
                    alt={journal.title || "Journal cover"}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">No image available</span>
                  </div>
                )}
              </div>
              <CardContent className="flex-grow pt-4">
                <h2 className="text-lg font-medium line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {journal.title || "Untitled Journal"}
                </h2>
                {journal.issncode && (
                  <p className="text-sm text-muted-foreground mt-2 font-mono">ISSN: {journal.issncode}</p>
                )}
              </CardContent>
              <CardFooter className="pt-0">
                <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  View Details & Submit Paper
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}

        {journals.length === 0 && (
          <div className="col-span-full text-center py-16">
            <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
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
                className="text-gray-400"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <p className="text-muted-foreground">No journals found in the collection</p>
          </div>
        )}
      </div>
    </div>
  )
}



 function JournalCard() {
  return (
    <div className="py-8">
      <div className="max-w-screen-2xl w-full">
        <div className="relative group">
          {/* Animated gradient border effect */}
          <div className="absolute -inset-1  rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-tl from-blue-800 via-blue-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left section */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/30 to-sky-600/30 rounded-full border border-blue-500/50 backdrop-blur-sm">
                  <FileText className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 text-sm font-medium">Peer-Reviewed Journal</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-200 leading-tight">
                  Frontiers in Management and Social Insights
                </h1>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  A multidisciplinary platform dedicated to advancing knowledge in business, management, and social sciences.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-700/80 rounded-xl border border-slate-700/50 backdrop-blur-sm  transition-all duration-300">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-blue-300 font-semibold text-sm">Strategy & Innovation</div>
                      <div className="text-slate-400 text-xs mt-1">Business & Digital</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-slate-700/50 rounded-xl border border-slate-700/50 backdrop-blur-sm  transition-all duration-300">
                    <Users className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sky-300 font-semibold text-sm">People & Society</div>
                      <div className="text-slate-400 text-xs mt-1">HR & Policy</div>
                    </div>
                  </div>
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
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
                      <span>Business Strategy & Marketing</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
                      <span>Organizational Behavior & HRM</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"></div>
                      <span>Sustainability & Entrepreneurship</span>
                    </div>
                  </div>
                  
                  <button className="w-full group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5" />
                      Submit Your Paper
                    </span>
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <Lightbulb className="w-4 h-4" />
                    <span>Fast peer review • Open access options available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}