const projects = [
    {
        title: 'The Eastern Front',
        type: 'Documentary',
        year: '2024',
        description: 'A deep dive into the geopolitical shifts along Eastern European borders.',
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    },
    {
        title: 'Signal & Noise',
        type: 'Short Film',
        year: '2024',
        description: 'Exploring information warfare in the digital age.',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    },
    {
        title: 'The Archive',
        type: 'Documentary Series',
        year: '2023',
        description: 'Declassified stories from forgotten conflicts.',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    },
];

const ClientWork = () => {
    return (
        <section id="work" className="relative py-32 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-20">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-3">01 — Selected Work</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight">Client Projects</h2>
                    <div className="mt-6 w-16 h-[1px] bg-surface-border"></div>
                </div>

                {/* Project Grid */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}
                        >
                            {/* Image */}
                            <div className="flex-1 overflow-hidden">
                                <div className="aspect-[16/10] overflow-hidden bg-surface-light">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-[10px] tracking-widest text-muted uppercase">{project.type}</span>
                                    <span className="w-4 h-[1px] bg-surface-border"></span>
                                    <span className="font-mono text-[10px] tracking-widest text-muted">{project.year}</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-accent transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-muted font-light leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                                <div className="pt-4">
                                    <span className="font-mono text-xs text-muted tracking-widest uppercase border-b border-surface-border pb-1 group-hover:border-accent group-hover:text-accent transition-all duration-500 cursor-pointer">
                                        View Project →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-32 section-divider"></div>
        </section>
    );
};

export default ClientWork;
