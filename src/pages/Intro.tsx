import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.15),transparent_60%)]"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto border border-white/20 bg-black/80 backdrop-blur-sm p-8 md:p-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-acid-green text-xs md:text-sm tracking-[0.3em] mb-6"
        >
          SYSTEM BOOT / VISUAL EDITING INTERFACE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase font-black leading-[0.9]"
        >
          Devesh
          <span className="text-acid-green">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-slate-300 text-base md:text-lg"
        >
          Cinematic edits, glitch-driven transitions, and punchy visual storytelling crafted for modern brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/home"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-acid-green text-black font-heading uppercase text-xl hover:bg-white transition-colors"
          >
            Enter Site
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-7 py-4 border border-white/30 text-white font-mono uppercase tracking-widest hover:border-acid-green hover:text-acid-green transition-colors"
          >
            View Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
