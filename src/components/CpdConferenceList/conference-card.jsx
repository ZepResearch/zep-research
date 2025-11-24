import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

export function ConferenceCard({ conference }) {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 dark:from-blue-900/30 dark:to-slate-800">
        <Image
          src={conference.img || "/placeholder.svg"}
          alt={conference.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const img = e.target
            img.src = "/business-conference.png"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="p-3 space-y-2">
        {/* Header with Title and Badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-tight">
            {conference.title}
          </h3>
          {conference.cpd_accredited && (
            <Badge className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs px-2 py-0.5">
              CPD
            </Badge>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
          <MapPin className="h-3 w-3 flex-shrink-0 text-blue-600 dark:text-blue-400" />
          <span className="line-clamp-1">{conference.location}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
          {conference.shortDescription || conference.description}
        </p>

        {/* Date and CPD Hours Row */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{conference.date}</span>
          </div>
          {conference.cpd_accredited && conference.cpd_hours && (
            <div className="flex items-center gap-1 border-2 px-3 rounded-3xl border-blue-700">
              <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="text-base font-bold text-blue-600 dark:text-blue-400">{conference.cpd_hours} hr</span>
            </div>
          )}
        </div>

        {/* Learn More Button */}
        <Link
          href={conference.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-3 py-2 rounded-md font-semibold transition-all text-xs mt-2 hover:shadow-md"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
