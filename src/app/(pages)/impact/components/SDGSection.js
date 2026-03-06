'use client';

const sdgs = [
    {
        badge: 'SDG 4',
        emoji: '🎓',
        title: 'Quality Education',
        text: 'Promoting accessible and inclusive academic opportunities through conferences and publications.',
        color: 'from-blue-50 to-blue-50',
        badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
        badge: 'SDG 9',
        emoji: '🏗️',
        title: 'Industry, Innovation & Infrastructure',
        text: 'Encouraging research-driven innovation across technology and science.',
        color: 'from-blue-50 to-blue-50',
        badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
        badge: 'SDG 17',
        emoji: '🤝',
        title: 'Partnerships for the Goals',
        text: 'Building strong collaborations among institutions and researchers worldwide.',
        color: 'from-blue-50 to-blue-50',
        badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
        badge: 'SDG 8',
        emoji: '📈',
        title: 'Decent Work & Economic Growth',
        text: 'Supporting knowledge exchange that contributes to sustainable economic development.',
        color: 'from-blue-50 to-blue-50',
        badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
        badge: 'SDG 10',
        emoji: '⚖️',
        title: 'Reduced Inequality',
        text: 'Providing equal research opportunities for scholars across regions.',
        color: 'from-blue-50 to-blue-50',
        badgeColor: 'bg-blue-100 text-blue-700',
    },
];

export default function SDGSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-black text-white text-sm font-semibold tracking-wide">
                        United Nations SDGs
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Supporting the Sustainable Development Goals
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our research initiatives actively contribute to the UN's framework for a better and more
                        sustainable future for all.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {sdgs.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-br ${item.color} rounded-xl p-6 flex flex-col gap-3 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div className="text-3xl">{item.emoji}</div>
                            <span className={`inline-block self-start px-2 py-0.5 rounded-full text-xs font-bold ${item.badgeColor}`}>
                                {item.badge}
                            </span>
                            <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
