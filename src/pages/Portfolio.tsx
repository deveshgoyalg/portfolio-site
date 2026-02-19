import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const projects = [
    { id: 1, title: "Cinematic Travel Vlog", category: "Long Form", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" },
    { id: 2, title: "Tech Product Review", category: "Long Form", image: "https://images.unsplash.com/photo-1593642532744-937713517478?w=800&q=80" },
    { id: 3, title: "Instagram Reel - Fashion", category: "Short Form", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
    { id: 4, title: "TikTok Challenge Edit", category: "Short Form", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" },
    { id: 5, title: "Corporate Documentary", category: "Long Form", image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80" },
    { id: 6, title: "Product Teaser", category: "Short Form", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen pt-32 px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                    <div className="flex justify-center gap-4">
                        {['All', 'Long Form', 'Short Form'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-slate-800"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-blue-400 text-sm font-medium mb-1">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Contact Section */}
                <div id="contact" className="mt-32 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold mb-6 text-center">Let's Work Together</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition" />
                            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition" />
                        </div>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition">
                            <option value="" className="bg-slate-900">Project Type</option>
                            <option value="long-form" className="bg-slate-900">Long Form Video</option>
                            <option value="short-form" className="bg-slate-900">Short Form Content</option>
                            <option value="other" className="bg-slate-900">Other</option>
                        </select>
                        <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition"></textarea>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition transform hover:scale-[1.02]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
