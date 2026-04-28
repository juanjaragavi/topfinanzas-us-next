"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScratchCardProps {
  width?: number | string;
  height?: number | string;
  coverColor?: string;
  coverText?: string;
  onComplete?: () => void;
  children: React.ReactNode;
  brushSize?: number;
  finishPercent?: number;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  width = "100%",
  height = 160,
  coverColor = "#9CA3AF", // Tailwind gray-400
  coverText = "SCRATCH HERE",
  onComplete,
  children,
  brushSize = 40,
  finishPercent = 40, // Auto-reveal after 40% is scratched
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Set canvas dimensions to match container
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      fillCanvas();
    };

    const fillCanvas = () => {
      if (!ctx || isFinished) return;

      // Draw cover background
      ctx.fillStyle = coverColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw inner border/texture effect
      ctx.strokeStyle = "#4B5563"; // gray-600
      ctx.lineWidth = 4;
      ctx.setLineDash([8, 8]);
      ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
      ctx.setLineDash([]);

      // Draw text
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 24px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Drop shadow for text
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;

      ctx.fillText(coverText, canvas.width / 2, canvas.height / 2 - 10);

      ctx.font = "14px Inter, sans-serif";
      ctx.fillText(
        "Reveal your personalized match!",
        canvas.width / 2,
        canvas.height / 2 + 20,
      );

      // Reset shadow for erasing
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;

      // Essential: set composite operation to erase where we draw
      ctx.globalCompositeOperation = "destination-out";
    };

    updateCanvasSize();

    // Use ResizeObserver to handle fluid width
    const resizeObserver = new ResizeObserver(() => {
      if (!isFinished) updateCanvasSize();
    });
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [coverColor, coverText, isFinished]);

  const getCoordinates = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (isFinished) return;
    setIsDrawing(true);
    scratch(e);
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || isFinished) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    checkPercentage();
  };

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Prevent scrolling while scratching on mobile
    if (e.cancelable && e.nativeEvent) {
      e.nativeEvent.preventDefault();
    }

    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, 2 * Math.PI);
    ctx.fill();
  };

  const checkPercentage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!canvas || !ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    let transparentPixels = 0;
    const totalPixels = pixels.length / 4; // 4 values per pixel (r,g,b,a)

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / totalPixels) * 100;

    if (percentage > finishPercent) {
      setIsFinished(true);
      // Clear the rest of the canvas with a nice fade out
      if (onComplete) onComplete();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden shadow-lg select-none"
      style={{ width, height, touchAction: "none" }}
    >
      {/* Underlying content to reveal */}
      <div className="absolute inset-0 z-0">{children}</div>

      {/* Canvas Cover */}
      <motion.canvas
        ref={canvasRef}
        animate={{ opacity: isFinished ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-10 cursor-crosshair touch-none"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />
    </div>
  );
};
