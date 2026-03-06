'use client';

const initiatives = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: 'Advancing Academic Research',
        text: 'We provide platforms that enable scholars to present, publish, and collaborate on groundbreaking research across multiple disciplines.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Global Knowledge Exchange',
        text: 'Our international conferences bring together researchers, educators, and professionals to share insights and foster interdisciplinary collaboration.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Strengthening Research Communities',
        text: 'Through partnerships with journals and institutions, we support academic growth and encourage innovative solutions to global challenges.',
    },
];

export default function InitiativesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide">
                        Key Initiatives
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Making a Meaningful Impact Through Research
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {initiatives.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center text-cyan-600">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
