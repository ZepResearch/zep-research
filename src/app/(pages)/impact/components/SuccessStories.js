'use client';

const stories = [
    {
        icon: '🌐',
        title: 'Global Conference Collaboration',
        text: 'Researchers from multiple countries collaborated at our conferences to develop interdisciplinary research initiatives addressing real-world challenges.',
        tag: 'Conferences',
    },
    {
        icon: '📄',
        title: 'Research Publication Success',
        text: 'Thousands of scholars have successfully published their research through Zep Research partnerships with international journals.',
        tag: 'Publications',
    },
    {
        icon: '🔗',
        title: 'Academic Networking Growth',
        text: 'Our conferences have enabled researchers to build lasting academic networks and collaborative research projects across borders.',
        tag: 'Networking',
    },
];

export default function SuccessStories() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-sm font-semibold tracking-wide">
                        Success Stories
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900">Stories of Research Impact</h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
                        Real stories of how Zep Research is creating lasting change in the global academic community.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="text-4xl">{story.icon}</div>
                            <span className="inline-block self-start px-3 py-0.5 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold">
                                {story.tag}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                            <p className="text-gray-600 leading-relaxed flex-1">{story.text}</p>
                            <div className="pt-2 border-t border-gray-100">
                                <button className="text-sm font-semibold text-cyan-600 hover:text-blue-600 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
