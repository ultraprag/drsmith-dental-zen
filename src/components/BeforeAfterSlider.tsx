import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    handleMove(e);
  };

  const handleEnd = () => {
    setDragging(false);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(Math.max(newPosition, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl select-none"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* BEFORE image */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AFTER image (masked) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={after}
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/40 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        Pre
      </div>
      <div className="absolute top-4 right-4 bg-black/40 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        Posle
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/70"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
          w-10 h-10 rounded-full bg-white/80 flex items-center justify-center 
          shadow-md border border-white/60 backdrop-blur-sm cursor-grab active:cursor-grabbing transition-all duration-300"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <ChevronLeft className="w-4 h-4 text-primary/70" />
          <ChevronRight className="w-4 h-4 text-primary/70 -ml-1" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
