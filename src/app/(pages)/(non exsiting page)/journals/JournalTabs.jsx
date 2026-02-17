"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const TABS = [
  {
    key: "Scopus",
    label: "Scopus",
    description: "Journals indexed in Scopus — Elsevier's abstract and citation database.",
    accent: "from-orange-500 to-orange-700",
    activeTab: "bg-orange-600 text-white border-orange-600",
    inactiveTab: "text-gray-600 hover:text-orange-600 hover:bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    indicator: "bg-orange-600",
  },
  {
    key: "GoogleScholar",
    label: "Google Scholar",
    description: "Journals indexed and discoverable via Google Scholar.",
    accent: "from-blue-500 to-blue-700",
    activeTab: "bg-blue-600 text-white border-blue-600",
    inactiveTab: "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    indicator: "bg-blue-600",
  },
  {
    key: "ABDC",
    label: "ABDC",
    description: "Journals listed in the Australian Business Deans Council journal quality list.",
    accent: "from-green-500 to-green-700",
    activeTab: "bg-green-600 text-white border-green-600",
    inactiveTab: "text-gray-600 hover:text-green-600 hover:bg-green-50",
    badge: "bg-green-100 text-green-700",
    indicator: "bg-green-600",
  },
]

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="ml-1">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full text-center py-20">
      <div className="mx-auto w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="text-gray-400">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      </div>
      <p className="text-muted-foreground">No journals in this category yet</p>
    </div>
  )
}

export default function JournalTabs({ grouped }) {
  const [activeKey, setActiveKey] = useState("Scopus")

  const activeTab = TABS.find((t) => t.key === activeKey)
  const journals = grouped[activeKey] || []

  return (
    <div>
      {/* Tab Bar */}
      <div className="flex items-center gap-2 border-b border-gray-200 mb-8">
        {TABS.map((tab) => {
          const isActive = tab.key === activeKey
          const count = grouped[tab.key]?.length ?? 0
          return (
            <button
              key={tab.key}
              onClick={() => setActiveKey(tab.key)}
              className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-lg border transition-all duration-200 -mb-px
                ${isActive ? tab.activeTab + " border-b-white" : tab.inactiveTab + " border-transparent bg-transparent"}`}
            >
              {tab.label}
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isActive ? "bg-white/25 text-white" : tab.badge}`}>
                {count}
              </span>
              {/* Active indicator line */}
              {isActive && (
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${tab.indicator}`} />
              )}
            </button>
          )
        })}
      </div>

      {/* Section description */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${activeTab.accent}`} />
        <p className="text-sm text-muted-foreground">{activeTab.description}</p>
      </div>

      {/* Journal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journals.length === 0 ? (
          <EmptyState />
        ) : (
          journals.map((journal) => (
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
                    <ArrowIcon />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}