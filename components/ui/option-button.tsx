"use client";

import { motion } from "framer-motion";

interface OptionButtonProps {
  id: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  delay?: number;
  className?: string; // Added className prop
}

export default function OptionButton({
  label,
  selected,
  onClick,
  delay = 0,
  className = "",
}: OptionButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center w-full px-4 py-2 sm:py-3 rounded-full border-2 transition-all duration-200 ${
        selected
          ? "bg-[#2E74B5] border-[#2E74B5] text-white shadow-lg scale-[1.02]"
          : "bg-white border-[#2E74B5] text-[#2E74B5] hover:bg-blue-50 shadow-md"
      } ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="font-semibold text-sm sm:text-base text-center leading-tight">
        {label}
      </span>
    </motion.button>
  );
}
