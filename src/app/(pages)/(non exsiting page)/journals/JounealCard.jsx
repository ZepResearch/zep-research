'use client'

import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import { getPocketBaseClient } from "@/lib/pocketbase"
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from 'lucide-react'

export default function JournalCard() {
  const [journals, setJournals] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    async function fetchJournals() {
      try {
        const pb = getPocketBaseClient()
        const records = await pb.collection('Journals').getFullList({
          sort: '-created',
          filter: 'by_zep = true',
        })
        setJournals(records)
      } catch (error) {
        console.error("Error fetching journals:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchJournals()
  }, [])

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState)
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [journals])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  const getImageUrl = (record) => {
    if (!record.imgs) return null
    const pb = getPocketBaseClient()
    return pb.files.getUrl(record, record.imgs)
  }

  if (loading) {
    return (
      <div className="py-8">
        <div className="flex gap-4 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="min-w-[260px] h-[340px] bg-slate-800/60 rounded-2xl animate-pulse border border-slate-700/40" />
          ))}
        </div>
      </div>
    )
  }

  if (!journals.length) return null

  return (
    <div className="py-8 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30">
            <BookOpen className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold">ZEP Journals</h2>
            <p className="text-slate-400 text-sm">{journals.length} peer-reviewed publications</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700/50 text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700/50 text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {journals.map((journal) => {
          const imgUrl = journal.img || getImageUrl(journal)
          return (
            <div
              key={journal.id}
              className="min-w-[260px] max-w-[260px] flex flex-col bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="h-[160px] bg-slate-700/50 overflow-hidden relative">
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={journal.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-slate-600" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-white font-semibold text-sm leading-snug line-clamp-3 group-hover:text-blue-300 transition-colors duration-200">
                  {journal.title}
                </h3>

                {journal.issncode && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-700/60 rounded-full border border-slate-600/50 w-fit">
                    <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wide">ISSN</span>
                    <span className="text-slate-200 text-xs font-mono">{journal.issncode}</span>
                  </div>
                )}

                {/* Visit Button */}
                {journal.web_url && (
                  <div className="mt-auto pt-2">
                    <Link
                      href={journal.web_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 text-xs font-medium rounded-xl transition-all duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit Journal
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}