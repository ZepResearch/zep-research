'use client';

export default function AboutImpact() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Text */}
                    <div>
                        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-gray-700 text-white text-sm font-semibold tracking-wide">
                            About Our Impact
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Driving Academic Excellence{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Worldwide
                            </span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            At Zep Research, we are committed to advancing the global research ecosystem by connecting
                            scholars, institutions, and industry experts.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Through internationally recognized conferences, collaborative initiatives, and high-quality
                            publications, we provide a platform where ideas evolve into impactful knowledge.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our work supports the academic community by enabling meaningful collaborations, encouraging
                            innovation, and ensuring that research contributes to solving real-world challenges.
                        </p>
                        <a
                            href="/conference"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                        >
                            Explore Research Programs
                        </a>
                    </div>

                    {/* Right – Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/gallery/1.jpg"
                            alt="Research collaboration"
                            className="rounded-xl object-cover w-full h-48 shadow-sm border border-gray-100"
                        />
                        <img
                            src="/gallery/2.jpg"
                            alt="Academic conference"
                            className="rounded-xl object-cover w-full h-48 shadow-sm border border-gray-100 mt-8"
                        />
                        <img
                            src="/gallery/3.jpg"
                            alt="Research publication"
                            className="rounded-xl object-cover w-full h-48 shadow-sm border border-gray-100 -mt-8"
                        />
                        <img
                            src="/gallery/4.jpg"
                            alt="Global networking"
                            className="rounded-xl object-cover w-full h-48 shadow-sm border border-gray-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
