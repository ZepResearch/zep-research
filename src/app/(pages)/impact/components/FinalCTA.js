'use client';

export default function FinalCTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-sm font-semibold border border-white/10 tracking-widest uppercase">
                    Get Started
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Join the Global Research Community
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Discover conferences, publish your research, and collaborate with scholars worldwide through
                    Zep Research.
                </p>
                <a
                    href="/conference"
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 text-lg"
                >
                    Explore Opportunities
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
