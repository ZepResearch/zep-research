'use client';

export default function MissionBanner() {
    return (
        <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-500">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold tracking-widest uppercase border border-white/30">
                    Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Empowering researchers to thrive in a global knowledge ecosystem
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our mission is to strengthen academic collaboration, promote innovative research, and provide
                    scholars with the tools and opportunities needed to share knowledge and create lasting impact.
                </p>
            </div>
        </section>
    );
}
