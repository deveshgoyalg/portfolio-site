import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const presets = [
    { id: 1, title: "Cinematic LUTs Pack", price: "$29", image: "https://images.unsplash.com/photo-1533142296043-059ad2a488e0?w=800&q=80" },
    { id: 2, title: "Glitch Transitions", price: "$19", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
    { id: 3, title: "Social Media Templates", price: "$39", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
];

const Presets = () => {
    return (
        <div className="min-h-screen pt-32 px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Presets & Templates</h2>
                    <p className="text-gray-400">Level up your editing game with my custom assets.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {presets.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={item.id}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="aspect-video bg-slate-800 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">{item.price}</span>
                                </div>
                                <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition flex items-center justify-center gap-2">
                                    <ShoppingBag className="w-4 h-4" />
                                    Buy Now
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
