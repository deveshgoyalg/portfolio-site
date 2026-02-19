import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const presets = [
    { id: 1, title: "Cinematic LUTs Pack", price: "$29", image: "https://images.unsplash.com/photo-1533142296043-059ad2a488e0?w=800&q=80", type: "LUT" },
    { id: 2, title: "Glitch Transitions", price: "$19", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80", type: "SFX" },
    { id: 3, title: "Social Media Templates", price: "$39", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", type: "MOGRT" },
];

const Presets = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-black">

            {/* Header */}
            <div className="border-b border-white/20 mb-12">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-[1px] w-12 bg-acid-green"></span>
                        <span className="font-mono text-acid-green text-sm tracking-widest">MARKETPLACE</span>
                    </div>
                    <h1 className="font-heading text-6xl uppercase font-bold">Digital Assets</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {presets.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={item.id}
                            className="group border border-white/20 bg-white/5 hover:border-acid-green transition-colors"
                        >
                            {/* Image Container */}
                            <div className="aspect-video relative overflow-hidden bg-black border-b border-white/20">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0" />
                                <div className="absolute top-4 left-4 bg-black border border-white/20 px-2 py-1">
                                    <span className="font-mono text-xs text-white uppercase">{item.type}</span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-heading text-2xl uppercase group-hover:text-acid-green transition-colors">{item.title}</h3>
                                    <span className="font-mono text-xl font-bold text-white">{item.price}</span>
                                </div>

                                <button className="w-full py-4 bg-white/10 hover:bg-acid-green hover:text-black border border-white/10 hover:border-acid-green text-white font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:font-bold">
                                    <ShoppingBag className="w-4 h-4" />
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Presets;
