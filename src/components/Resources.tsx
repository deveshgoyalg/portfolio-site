const resources = [
    { title: 'Cinematic LUT Pack', type: 'Color Grading', format: 'CUBE', count: '24 LUTs' },
    { title: 'Documentary Workflow', type: 'Premiere Pro', format: 'PRPROJ', count: 'Full Template' },
    { title: 'Glitch Transitions', type: 'Motion Graphics', format: 'MOGRT', count: '16 Presets' },
    { title: 'Sound Design Kit', type: 'Audio', format: 'WAV', count: '48 SFX' },
];

const Resources = () => {
    return (
        <section id="resources" className="relative py-32 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-20">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-3">02 — Resources</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight">Editor Library</h2>
                    <div className="mt-6 w-16 h-[1px] bg-surface-border"></div>
                </div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-surface-border">
                    {resources.map((item, index) => (
                        <div
                            key={index}
                            className="bg-surface p-8 md:p-12 group hover:bg-surface-light transition-colors duration-500 cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <span className="font-mono text-[10px] tracking-widest text-muted uppercase">{item.type}</span>
                                <span className="font-mono text-[10px] tracking-widest text-accent uppercase">{item.format}</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-3 group-hover:text-primary transition-colors duration-500">
                                {item.title}
                            </h3>

                            <p className="font-mono text-xs text-muted tracking-wider">{item.count}</p>

                            <div className="mt-8 pt-6 border-t border-surface-border">
                                <span className="font-mono text-xs text-muted tracking-widest uppercase group-hover:text-accent transition-colors duration-500">
                                    Download →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-32 section-divider"></div>
        </section>
    );
};

export default Resources;
