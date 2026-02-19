import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const projects = [
    { id: 1, title: "Cinematic Travel Vlog", category: "Long Form", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", size: "col-span-1 md:col-span-2" },
    { id: 2, title: "Tech Product Review", category: "Long Form", image: "https://images.unsplash.com/photo-1593642532744-937713517478?w=800&q=80", size: "col-span-1" },
    { id: 3, title: "Fashion Reel", category: "Short Form", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", size: "col-span-1" },
    { id: 4, title: "TikTok Challenge", category: "Short Form", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80", size: "col-span-1 md:col-span-2 row-span-2" },
    { id: 5, title: "Corp Doc", category: "Long Form", image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80", size: "col-span-1" },
    { id: 6, title: "Teaser", category: "Short Form", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", size: "col-span-1" },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen pt-24 pb-20 bg-black">

            {/* Header */}
            <div className="border-b border-white/20 mb-12">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="font-mono text-acid-green text-sm tracking-widest mb-2 block">// ARCHIVE</span>
                        <h1 className="font-heading text-6xl uppercase font-bold">Selected Works</h1>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex border border-white/20 bg-white/5">
                        {['All', 'Long Form', 'Short Form'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all border-r border-white/20 last:border-r-0 hover:bg-white/10 ${filter === cat
                                        ? 'bg-acid-green text-black font-bold'
                                        : 'text-gray-400'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className={`group relative border border-white/10 bg-white/5 overflow-hidden ${project.size}`}
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay UI */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-acid-green/50 transition-colors pointer-events-none z-20"></div>

                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-acid-green font-mono text-xs px-2 py-1 border border-white/20">
                                    {project.category.toUpperCase()}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 bg-black/90 border-t border-white/20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-heading text-xl uppercase mb-1">{project.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-acid-green rounded-full animate-pulse"></span>
                                        <span className="font-mono text-xs text-gray-400">WATCH PROJECT</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Contact Section */}
                <div id="contact" className="mt-32 max-w-4xl mx-auto border border-white/20 p-1 relative">
                    <div className="absolute top-0 left-0 bg-acid-green text-black px-2 py-1 font-mono text-xs font-bold">
                        SYSTEM_STATUS: ONLINE
                    </div>

                    <div className="bg-white/5 p-12 text-center border border-white/5">
                        <h2 className="font-heading text-5xl uppercase mb-8">Initiate Collaboration</h2>
                        <form className="space-y-6 text-left max-w-lg mx-auto">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-mono text-xs text-gray-500 uppercase">Input: Name</label>
                                    <input type="text" className="w-full bg-black border border-white/20 p-3 text-white focus:border-acid-green focus:outline-none transition-colors font-mono" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-xs text-gray-500 uppercase">Input: Email</label>
                                    <input type="email" className="w-full bg-black border border-white/20 p-3 text-white focus:border-acid-green focus:outline-none transition-colors font-mono" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs text-gray-500 uppercase">Select: Protocol</label>
                                <select className="w-full bg-black border border-white/20 p-3 text-white focus:border-acid-green focus:outline-none transition-colors font-mono uppercase">
                                    <option>Long Form Content</option>
                                    <option>Short Form / Reels</option>
                                    <option>Visual Effects</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs text-gray-500 uppercase">Input: Message</label>
                                <textarea rows={4} className="w-full bg-black border border-white/20 p-3 text-white focus:border-acid-green focus:outline-none transition-colors font-mono"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-acid-green text-black font-heading font-bold text-xl uppercase py-4 hover:bg-white transition-colors">
                                Transmit Data
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
