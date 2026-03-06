'use client';

export default function PartnershipSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10" />

                    <div className="relative z-10">
                        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold border border-white/30 tracking-wide">
                            Partnership
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                            Partner With Zep Research
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            We collaborate with academic institutions, journals, and organizations to expand opportunities
                            for researchers and strengthen the global research ecosystem.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Become a Partner
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
