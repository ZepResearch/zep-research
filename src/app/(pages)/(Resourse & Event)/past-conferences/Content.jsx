'use client'

import { useEffect, useState } from 'react'
import { getPocketBaseClient, getLastConferenceProceedings } from '@/lib/pocketbase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function LastConferenceContent() {
  const [proceedings, setProceedings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProceedings = async () => {
      try {
        const data = await getLastConferenceProceedings()
        setProceedings(data)
      } catch (error) {
        console.error('Failed to fetch proceedings:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProceedings()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Last Conference Proceedings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proceedings.map((record) => {
          const pb = getPocketBaseClient()
          const imgUrl = record.img ? pb.files.getUrl(record, record.img) : null
          const proceedingsUrl = record.proceedings ? pb.files.getUrl(record, record.proceedings) : null

          return (
            <Card key={record.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                {imgUrl && (
                  <img
                    src={imgUrl}
                    alt={record.title || 'Conference Image'}
                    className="w-full h-fit object-contain rounded-t-lg"
                  />
                )}
                <CardTitle className="text-xl text-gray-800">{record.title || 'Untitled'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {record.location || 'N/A'}</p>
                <p className="text-gray-600 mb-4">
                  <strong>Date:</strong> {record.field ? new Date(record.field).toLocaleDateString() : 'N/A'}
                </p>
                {proceedingsUrl && (
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <a href={proceedingsUrl} target="_blank" rel="noopener noreferrer">
                      Download Proceedings
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}