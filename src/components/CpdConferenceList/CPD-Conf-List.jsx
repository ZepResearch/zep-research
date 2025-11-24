"use client"

import { useState, useEffect } from "react"
import { ConferenceFilters } from "./conference-filters"
import { ConferenceCard } from "./conference-card"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getPocketBaseClient } from "@/lib/pocketbase"
import Image from "next/image"

export function ConferenceListSection() {
  const [conferences, setConferences] = useState([])
  const [filteredConferences, setFilteredConferences] = useState([])
  const [filters, setFilters] = useState({
    searchQuery: "",
    country: "All Countries",
    topic: "All Topics",
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all conferences on mount
  useEffect(() => {
    const fetchConferences = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const pb = getPocketBaseClient()

        // Fetch only CPD accredited conferences
        const records = await pb.collection("Conference").getList(1, 50, {
          filter: "cpd_accredited = true",
          sort: "-date",
        })

        setConferences(records.items)
      } catch (err) {
        console.error("Error fetching conferences:", err)
        setError("Failed to load conferences. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchConferences()
  }, [])

  // Apply filters whenever filters or conferences change
  useEffect(() => {
    let filtered = [...conferences]

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (conf) =>
          conf.title.toLowerCase().includes(query) ||
          conf.description.toLowerCase().includes(query) ||
          conf.location.toLowerCase().includes(query),
      )
    }

    // Filter by country
    if (filters.country !== "All Countries") {
      filtered = filtered.filter((conf) => conf.location.toLowerCase().includes(filters.country.toLowerCase()))
    }

    // Filter by topic (using field)
    if (filters.topic !== "All Topics") {
      filtered = filtered.filter(
        (conf) =>
          conf.field?.toLowerCase().includes(filters.topic.toLowerCase()) ||
          conf.description.toLowerCase().includes(filters.topic.toLowerCase()),
      )
    }

    setFilteredConferences(filtered)
  }, [filters, conferences])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <section className="w-full max-w-screen-2xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 py-8 md:py-12">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b-2 border-blue-200 dark:border-blue-900 pb-6">
          <div className="flex items-start gap-3 mb-3">
            <div>
             
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div>
 <Image
                src="/cpd2.png"
                alt="CPD"
                width={150}
                height={200}
                className="mb-2"
              />
                </div>
                <div>
  <h1 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent  mb-1">
                List of Upcoming Scopus International Conferences
              </h1>
              <p className="text-sm md:text-2xl text-slate-600 dark:text-slate-400 font-bold">
                CPD Accredited  Conference List in CPD Directory
              </p>
                </div>
              </div>
            
            </div>
          </div>
        </div>

        <div className="mb-6">
          <ConferenceFilters onFilterChange={handleFilterChange} isLoading={isLoading} />
        </div>

        {/* Error State */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <p className="text-muted-foreground">Loading conferences...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredConferences.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No conferences found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms to find the conferences you're looking for.
            </p>
          </div>
        )}

        {!isLoading && filteredConferences.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium pl-1">
              Showing {filteredConferences.length} of {conferences.length} conferences
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredConferences.map((conference) => (
                <ConferenceCard key={conference.id} conference={conference} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
