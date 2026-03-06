'use client';

const stats = [
    {
        number: '30+',
        title: 'Global Conferences',
        description: 'Connecting researchers and scholars across international platforms.',
        gradient: 'from-blue-50 to-blue-50',
        accent: 'from-blue-400 to-blue-500',
    },
    {
        number: '1000+',
        title: 'Research Articles Published',
        description: 'Supporting peer-reviewed research dissemination worldwide.',
        gradient: 'from-blue-50 to-blue-50',
        accent: 'from-blue-400 to-blue-500',
    },
    {
        number: '75+',
        title: 'Journal Partnerships',
        description: 'Collaborations with reputed journals to enhance publication opportunities.',
        gradient: 'from-blue-50 to-blue-50',
        accent: 'from-blue-400 to-blue-500',
    },
    {
        number: '50+',
        title: 'Global Research Collaborations',
        description: 'Connecting academic institutions and researchers worldwide.',
        gradient: 'from-blue-50 to-blue-50',
        accent: 'from-blue-400 to-blue-500',
    },
];

export default function ImpactStats() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-gray-700 text-white text-sm font-semibold tracking-wide">
                        Our Numbers
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Impact That Speaks for Itself
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div
                                className={`text-5xl font-extrabold mb-2 bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}
                            >
                                {stat.number}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{stat.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
