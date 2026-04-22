import { motion } from 'framer-motion';
import React from 'react';

export const AnimatedProgressBar = ({ progress, label }: { progress: number, label: string }) => {
  return (
    <div className="w-full mb-8 relative">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-cyan-700 uppercase tracking-wider">{label}</span>
        <span className="text-sm font-bold text-cyan-600">{progress}%</span>
      </div>
      <div className="h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner relative border border-gray-300">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full relative"
          style={{ backgroundSize: '200% 100%' }}
        >
          {/* Animated shimmer overlay */}
          <motion.div 
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 z-10 opacity-50"
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              backgroundSize: '200% 100%'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
};
