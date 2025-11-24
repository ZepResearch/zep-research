"use client"

import { useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

const COUNTRIES = [
  "All Countries",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Singapore",
  "Dubai",
  "Thailand",
]

const TOPICS = [
  "All Topics",
  "Engineering",
  "Medicine",
  "Law",
  "Business",
  "Science",
  "Technology",
  "Education",
  "Finance",
  "Healthcare",
  "IT",
  "Management",
]

export function ConferenceFilters({ onFilterChange, isLoading = false }) {
  const [filters, setFilters] = useState({
    searchQuery: "",
    country: "All Countries",
    topic: "All Topics",
  })

  const handleSearchChange = useCallback(
    (value) => {
      const newFilters = { ...filters, searchQuery: value }
      setFilters(newFilters)
      onFilterChange(newFilters)
    },
    [filters, onFilterChange],
  )

  const handleCountryChange = useCallback(
    (value) => {
      const newFilters = { ...filters, country: value }
      setFilters(newFilters)
      onFilterChange(newFilters)
    },
    [filters, onFilterChange],
  )

  const handleTopicChange = useCallback(
    (value) => {
      const newFilters = { ...filters, topic: value }
      setFilters(newFilters)
      onFilterChange(newFilters)
    },
    [filters, onFilterChange],
  )

  const handleReset = useCallback(() => {
    const resetFilters = {
      searchQuery: "",
      country: "All Countries",
      topic: "All Topics",
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }, [onFilterChange])

  return (
    <div className="space-y-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-900 shadow-sm">
      {/* Search Input with Blue Accent */}
      <div>
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 block uppercase tracking-wide">
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-blue-600 dark:text-blue-400" />
          <Input
            placeholder="Search conferences by name..."
            className="pl-9 h-9 text-sm border-blue-200 dark:border-blue-900 focus:ring-blue-500 dark:focus:ring-blue-400"
            value={filters.searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Filter Row - Compact */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {/* Country Filter */}
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block uppercase tracking-wide">
            Location
          </label>
          <Select value={filters.country} onValueChange={handleCountryChange} disabled={isLoading}>
            <SelectTrigger className="h-9 text-sm border-blue-200 dark:border-blue-900 focus:ring-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Topic Filter */}
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block uppercase tracking-wide">
            Topic
          </label>
          <Select value={filters.topic} onValueChange={handleTopicChange} disabled={isLoading}>
            <SelectTrigger className="h-9 text-sm border-blue-200 dark:border-blue-900 focus:ring-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TOPICS.map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Reset Button - Now in the grid for compact layout */}
        <div className="flex items-end">
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full h-9 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium"
            disabled={isLoading}
          >
            <X className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Active Filters Info - Compact */}
      {(filters.searchQuery || filters.country !== "All Countries" || filters.topic !== "All Topics") && (
        <div className="text-xs text-blue-700 dark:text-blue-300 p-2 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-900">
          <strong>Filters:</strong>
          {filters.searchQuery && ` "${filters.searchQuery}"`}
          {filters.country !== "All Countries" && ` • ${filters.country}`}
          {filters.topic !== "All Topics" && ` • ${filters.topic}`}
        </div>
      )}
    </div>
  )
}
