'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/gallery/10.jpg')`,
        }}
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-cyan-900/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-cyan-200 text-sm font-semibold tracking-widest uppercase border border-white/20">
          Global Research Impact
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Advancing Global Research{' '}
          <span className="bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
            and Academic Innovation
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Zep Research empowers scholars, institutions, and innovators worldwide through impactful
          conferences, high-quality publications, and collaborative research initiatives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/conference"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
          >
            Explore Conferences
          </a>
          <a
            href="/journals"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            View Publications
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
