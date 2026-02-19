import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm mb-6 text-blue-300">
                        Professional Video Editor
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Visual Storytelling <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            Redefined.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Crafting compelling narratives through high-impact editing. From short-form content to cinematic documentaries.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/portfolio"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/portfolio#contact"
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition flex items-center gap-2"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
