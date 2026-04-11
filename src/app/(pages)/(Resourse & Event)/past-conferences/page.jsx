import React from 'react'
import LastConferenceContent from './Content'

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-8 text-gray-800">Past Conferences</h1>
      <LastConferenceContent />
    </div>
  )
}
