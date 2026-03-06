'use client';

export default function SustainabilitySection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Text */}
                    <div>
                        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold tracking-wide">
                            Sustainability
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Our Commitment to{' '}
                            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                Sustainable Academic Growth
                            </span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-5">
                            At Zep Research, sustainability means building a long-term ecosystem where knowledge,
                            innovation, and collaboration drive meaningful global progress.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We actively support initiatives that enhance research accessibility, promote interdisciplinary
                            collaboration, and empower institutions and scholars to contribute to global development.
                        </p>

                        <div className="flex flex-col gap-4">
                            {['Research Accessibility', 'Interdisciplinary Collaboration', 'Global Development Impact'].map(
                                (item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right – Image */}
                    <div className="relative">
                        <img
                            src="/gallery/18.jpg"
                            alt="Sustainable academic growth"
                            className="rounded-xl object-cover w-full h-80 shadow-sm border border-gray-100"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-5 max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 .88-.131 1.633-.38 2.315" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Global Reach</p>
                                    <p className="text-xs text-gray-500">50+ countries represented</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
