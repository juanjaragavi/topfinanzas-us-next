"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PreloaderProps {
  duration?: number; // Duration in milliseconds
  onComplete?: () => void;
  showLogo?: boolean;
  showProgress?: boolean;
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const Preloader: React.FC<PreloaderProps> = ({
  duration = 1000,
  onComplete,
  showLogo = true,
  showProgress = true,
  backgroundColor = "#ffffff",
  primaryColor = "#1e40af", // TopFinanzas blue
  secondaryColor = "#3b82f6",
}) => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const isQuizPage = pathname === "/quiz";
  const [isVisible, setIsVisible] = useState(!isQuizPage);

  useEffect(() => {
    if (isQuizPage) {
      return; // Do not run preloader logic on quiz page
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 100);
      }
    }, 16); // 60fps

    return () => clearInterval(interval);
  }, [duration, onComplete, isQuizPage]);

  return (
    <AnimatePresence>
      {isVisible && !isQuizPage && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo Container */}
            {showLogo && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="relative">
                  {/* Animated rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 -m-8"
                  >
                    <svg width="200" height="200" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke={primaryColor}
                        strokeWidth="2"
                        strokeDasharray="20 10"
                        opacity="0.3"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 -m-8"
                  >
                    <svg width="200" height="200" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke={secondaryColor}
                        strokeWidth="2"
                        strokeDasharray="15 5"
                        opacity="0.4"
                      />
                    </svg>
                  </motion.div>

                  {/* Center Logo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="relative z-10 w-32 h-32 flex items-center justify-center"
                  >
                    <Image
                      src="https://media.topfinanzas.com/images/favicon.png"
                      alt="TopFinanzas Logo"
                      width={128}
                      height={128}
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h2
                className="text-2xl font-semibold"
                style={{ color: primaryColor }}
              >
                Loading TopFinanzas
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Your trusted financial advisor
              </p>
            </motion.div>

            {/* Progress Bar */}
            {showProgress && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-64"
              >
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      width: `${progress}%`,
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`,
                    }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Progress percentage */}
                <div className="mt-2 text-center">
                  <span
                    className="text-sm font-medium"
                    style={{ color: primaryColor }}
                  >
                    {Math.round(progress)}%
                  </span>
                </div>
              </motion.div>
            )}

            {/* Animated dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-2 mt-6"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
