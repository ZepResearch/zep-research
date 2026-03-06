'use client';

export default function ThinkTankSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Text */}
                    <div>
                        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide">
                            Knowledge Forum
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            The Zep Research{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Knowledge Forum
                            </span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-5">
                            Zep Research provides a platform where leading scholars and professionals exchange ideas,
                            discuss emerging trends, and collaborate on innovative research initiatives.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Through structured discussions, academic events, and collaborative opportunities, we enable
                            knowledge sharing that contributes to global research advancement.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Expert Speakers', value: '200+' },
                                { label: 'Annual Events', value: '30+' },
                                { label: 'Research Fields', value: '15+' },
                                { label: 'Active Members', value: '5000+' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right – Quote Block + Image */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
                            <svg className="w-8 h-8 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-700 italic leading-relaxed text-lg">
                                "Zep Research's Knowledge Forum has become an indispensable platform where researchers
                                from diverse disciplines converge to shape the future of global scholarship."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                                    ZR
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Zep Research</p>
                                    <p className="text-xs text-gray-500">Research Innovation Team</p>
                                </div>
                            </div>
                        </div>
                        <img
                            src="/gallery/21.jpg"
                            alt="Knowledge forum conference"
                            className="rounded-xl object-cover w-full h-52 shadow-sm border border-gray-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
