import React, { useState, useEffect } from 'react';
import { getPocketBaseClient } from '@/lib/pocketbase';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './ui/container';
import { Heading, Subheading } from './ui/text';

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Function to get PocketBase image URL
const getPocketBaseImageUrl = (record, filename) => {
  if (!filename) return null;
  const pb = getPocketBaseClient();
  return pb.files.getUrl(record, filename);
};

const ConferenceVideoShortSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const pb = getPocketBaseClient();
      const records = await pb.collection('yt_short_section_testomonial').getFullList({
        sort: '-created',
      });
      setVideos(records);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const getThumbnailUrl = (record) => {
    // If custom image is provided, use it
    if (record.img) {
      return getPocketBaseImageUrl(record, record.img);
    }
    // Otherwise, extract YouTube thumbnail
    return getYouTubeThumbnail(record.url);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
            <Container>
                  <div >
                    <Heading as="h3" className="mt-2">
                   Voices from Our Successful Conferences
                    </Heading>
                    <Subheading> Real experiences shared by esteemed speakers and participants who collaborated

                    </Subheading>
                  </div>
                </Container>
          
        </div>

        {/* Horizontal Scrollable Video Section */}
        {videos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No conference videos available yet.</p>
          </div>
        ) : (
          <div className="relative group">
            {/* Left scroll button */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-cyan-500 text-gray-800 hover:text-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videos.map((video) => {
                const thumbnailUrl = getThumbnailUrl(video);
                return (
                  <div
                    key={video.id}
                    className="flex-shrink-0 w-96 cursor-pointer group/card"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="relative aspect-video bg-gray-100">
                        {thumbnailUrl ? (
                          <img
                            src={thumbnailUrl}
                            alt={video.title || 'Conference video'}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100">
                            <Play className="w-12 h-12 text-cyan-400" />
                          </div>
                        )}
                        
                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/card:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <div className="transform scale-0 group-hover/card:scale-100 transition-transform duration-300">
                            <div className="bg-cyan-500 rounded-full p-6 shadow-2xl">
                              <Play className="w-10 h-10 text-white fill-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      {video.title && (
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover/card:text-cyan-600 transition-colors">
                            {video.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right scroll button */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-cyan-500 text-gray-800 hover:text-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -mr-5"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video player */}
              <div className="relative aspect-video bg-black">
                {selectedVideo.url && getYouTubeVideoId(selectedVideo.url) ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                      selectedVideo.url
                    )}?autoplay=1`}
                    title={selectedVideo.title || 'Conference video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <p>Invalid video URL</p>
                  </div>
                )}
              </div>

              {/* Video info */}
              {selectedVideo.title && (
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-white">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedVideo.title}
                  </h2>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ConferenceVideoShortSection;