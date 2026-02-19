import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Marquee = () => (
    <div className="overflow-hidden whitespace-nowrap border-b border-t border-white/20 bg-acid-green/10 py-2">
        <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="inline-block"
        >
            {[...Array(10)].map((_, i) => (
                <span key={i} className="text-acid-green font-mono font-bold mx-8 tracking-widest">
                    VIDEO EDITOR /// MOTION GRAPHICS /// VISUAL STORYTELLER ///
                </span>
            ))}
        </motion.div>
    </div>
);

const Home = () => {
    return (
        <div className="min-h-screen pt-20 bg-black flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-0 border-l border-r border-white/20 h-[80vh]">

                {/* Left Col - Typography */}
                <div className="lg:col-span-8 border-r border-white/20 flex flex-col justify-center p-12 relative overflow-hidden group">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-acid-green"></span>
                            <span className="font-mono text-acid-green text-sm tracking-widest">EST. 2024</span>
                        </div>

                        <h1 className="font-heading text-7xl md:text-9xl font-bold uppercase leading-[0.8] mb-8 mix-blend-difference">
                            Visual<br />
                            <span className="text-stroke text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Impact</span><br />
                            Unit
                        </h1>

                        <p className="font-mono text-gray-400 max-w-md border-l-2 border-acid-green pl-6 py-2">
                            Specialized in high-energy motion graphics and cinematic editing for the digital age.
                        </p>
                    </motion.div>
                </div>

                {/* Right Col - CTAs */}
                <div className="lg:col-span-4 flex flex-col">
                    <div className="flex-1 border-b border-white/20 p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group">
                        <span className="font-mono text-xs text-gray-500">01 /// SELECTED WORKS</span>
                        <Link to="/portfolio" className="flex items-center justify-between">
                            <span className="font-heading text-4xl uppercase">Portfolio</span>
                            <ArrowRight className="text-acid-green w-8 h-8 group-hover:-rotate-45 transition-transform" />
                        </Link>
                    </div>
                    <div className="flex-1 border-b border-white/20 p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group">
                        <span className="font-mono text-xs text-gray-500">02 /// ASSETS</span>
                        <Link to="/presets" className="flex items-center justify-between">
                            <span className="font-heading text-4xl uppercase">Shop</span>
                            <ArrowRight className="text-acid-green w-8 h-8 group-hover:-rotate-45 transition-transform" />
                        </Link>
                    </div>
                    <div className="flex-1 p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group bg-acid-green text-black">
                        <span className="font-mono text-xs text-black/60">03 /// CONTACT</span>
                        <Link to="/portfolio#contact" className="flex items-center justify-between">
                            <span className="font-heading text-4xl uppercase">Book Now</span>
                            <ArrowRight className="text-black w-8 h-8 group-hover:-rotate-45 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full mt-auto">
                <Marquee />
            </div>
        </div>
    );
};

export default Home;
