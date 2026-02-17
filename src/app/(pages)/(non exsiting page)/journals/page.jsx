import { getGroupedJournals } from "@/lib/journals"
import JournalCard from "./JounealCard"
import JournalTabs from "./JournalTabs"

export const revalidate = 60
export const dynamic = 'force-dynamic'

export default async function JournalsPage() {
  let grouped = { Scopus: [], GoogleScholar: [], ABDC: [] }

  try {
    grouped = await getGroupedJournals()
  } catch (error) {
    console.error("Failed to fetch journals:", error)
  }

  return (
    <div className="container mx-auto py-24">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Academic Journals
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of academic journals and research publications
        </p>
      </div>

      <JournalCard />

      <JournalTabs grouped={grouped} />
    </div>
  )
}