import React from 'react';
import { Button } from './ui/button';
import { Heading } from './ui/text';
import Link from 'next/link';

const AccessJournalCtaCard = () => {
  const features = [
    { number: '1', title: 'Supporting Journals', icon: '📋', color: 'bg-blue-600', image: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' },
    { number: '2', title: 'Special Issues', icon: '🏆', color: 'bg-cyan-500', image: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' },
    { number: '3', title: 'Conference Proceedings', icon: '📚', color: 'bg-cyan-400', image: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)' },
    { number: '4', title: 'Publication Workshops', icon: '👥', color: 'bg-red-500', image: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
    { number: '5', title: 'Book Of Abstracts', icon: '📖', color: 'bg-red-600', image: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' },
    { number: '6', title: 'International Journals', icon: '🌍', color: 'bg-orange-600', image: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' },
    { number: '7', title: 'Research Guidance', icon: '✨', color: 'bg-green-600', image: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' },
    { number: '8', title: 'Scopus Journals', icon: '✓', color: 'bg-green-500', image: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' },
    { number: '9', title: 'Publish Help', icon: '🤝', color: 'bg-emerald-600', image: 'linear-gradient(135deg, #059669 0%, #047857 100%)' },
  ];

  return (
    <div className="min-h-full bg-white flex items-center justify-center p-6">
      <div className="max-w-screen-2xl px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="flex flex-col space-y-6">
            <div>
               <Heading as="h3" className="mt-2 max-w-3xl">
                Get instant <span className="text-blue-600">access</span> to over 10+ free journals and publications for global insight
              </Heading>
              <p className="text-gray-600 text-lg leading-relaxed my-6">
                Access 10+ premium journals and publications from leading global experts. Our library offers valuable insights for academics, industry professionals, and changemakers alike.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Sign up now to stay updated on the latest trends, research, and innovations by signing up for free access to our exclusive resources. Stay informed and stay ahead!
              </p>
            </div>
            <Link href="/journals">
<Button size="lg" className="bg-gradient-to-tr max-w-xs from-cyan-400 to-blue-500 " >
                  Get Access Now
            </Button>
            </Link>
          </div>

          {/* Right Side - Enhanced Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border-3 border-gray-900 aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: feature.image,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center space-y-2 text-white">
                  <span className="text-sm font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/40">
                    {feature.number}
                  </span>
                  <div className="text-3xl md:text-4xl">{feature.icon}</div>
                  <h3 className="text-xs md:text-sm font-bold text-center uppercase tracking-wider leading-tight px-2">
                    {feature.title}
                  </h3>
                </div>

                {/* Hover accent */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-lg transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessJournalCtaCard;
