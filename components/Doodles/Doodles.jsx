// components/Doodles/Doodles.jsx
"use client";

import { useEffect, useState } from "react";

// ========== INDIVIDUAL DOODLE COMPONENTS ==========

export const AbacusBeadsDoodle = ({ className = "" }) => (
  <div className={`doodle-abacus-beads ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="30" r="6" fill="#E87A5D" opacity="0.6"/>
      <circle cx="40" cy="30" r="6" fill="#2C7A6E" opacity="0.6"/>
      <circle cx="60" cy="30" r="6" fill="#E87A5D" opacity="0.6"/>
      <circle cx="80" cy="30" r="6" fill="#2C7A6E" opacity="0.6"/>
      <rect x="18" y="36" width="64" height="3" fill="#1A2A3A" opacity="0.3"/>
      <circle cx="30" cy="50" r="5" fill="#D95D39" opacity="0.5"/>
      <circle cx="50" cy="50" r="5" fill="#A8C3B8" opacity="0.5"/>
      <circle cx="70" cy="50" r="5" fill="#D95D39" opacity="0.5"/>
    </svg>
  </div>
);

export const NeuralPathDoodle = ({ className = "" }) => (
  <div className={`doodle-neural ${className}`}>
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,100 Q60,60 90,90 T150,80" stroke="#2C7A6E" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="5,5"/>
      <circle cx="30" cy="100" r="4" fill="#E87A5D" opacity="0.6"/>
      <circle cx="90" cy="90" r="4" fill="#E87A5D" opacity="0.6"/>
      <circle cx="150" cy="80" r="4" fill="#E87A5D" opacity="0.6"/>
      <path d="M50,140 Q80,110 120,130" stroke="#D95D39" strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>
  </div>
);

export const BrainSparkDoodle = ({ className = "" }) => (
  <div className={`doodle-brain-spark ${className}`}>
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,15 L33,27 L45,30 L33,33 L30,45 L27,33 L15,30 L27,27 Z" fill="#FFB347" opacity="0.7"/>
      <circle cx="30" cy="30" r="4" fill="#FF8C42"/>
    </svg>
  </div>
);

export const WaveSeparator = ({ className = "" }) => (
  <div className={`doodle-wave ${className}`}>
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,30 L1200,60 L0,60 Z" fill="#2C7A6E" opacity="0.3"/>
    </svg>
  </div>
);

export const ConstellationDoodle = ({ className = "" }) => (
  <div className={`doodle-constellation ${className}`}>
    <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="40" r="3" fill="#D95D39" opacity="0.5"/>
      <circle cx="70" cy="25" r="3" fill="#D95D39" opacity="0.5"/>
      <circle cx="110" cy="50" r="3" fill="#D95D39" opacity="0.5"/>
      <circle cx="50" cy="80" r="3" fill="#D95D39" opacity="0.5"/>
      <line x1="30" y1="40" x2="70" y2="25" stroke="#2C7A6E" strokeWidth="1" opacity="0.3"/>
      <line x1="70" y1="25" x2="110" y2="50" stroke="#2C7A6E" strokeWidth="1" opacity="0.3"/>
      <line x1="110" y1="50" x2="50" y2="80" stroke="#2C7A6E" strokeWidth="1" opacity="0.3"/>
    </svg>
  </div>
);

export const MathFlowDoodle = ({ className = "" }) => (
  <div className={`doodle-math-flow ${className}`}>
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="40" fontSize="24" fill="#E87A5D" opacity="0.4">+</text>
      <text x="60" y="70" fontSize="20" fill="#2C7A6E" opacity="0.4">×</text>
      <text x="100" y="30" fontSize="28" fill="#D95D39" opacity="0.4">−</text>
      <text x="30" y="100" fontSize="22" fill="#A8C3B8" opacity="0.4">÷</text>
      <text x="90" y="110" fontSize="26" fill="#E87A5D" opacity="0.4">=</text>
    </svg>
  </div>
);

export const CornerDoodle = ({ className = "" }) => (
  <div className={`doodle-corner ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,10 L90,10 M10,10 L10,90" stroke="#2C7A6E" strokeWidth="2" opacity="0.3" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="3" fill="#E87A5D" opacity="0.5"/>
    </svg>
  </div>
);

export const SingleBeadDoodle = ({ className = "" }) => (
  <div className={`doodle-bead ${className}`}>
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="11" fill="#E87A5D" opacity="0.4"/>
      <circle cx="15" cy="15" r="6" fill="#D95D39" opacity="0.6"/>
      <circle cx="12" cy="12" r="2" fill="white" opacity="0.3"/>
    </svg>
  </div>
);

// ========== STATIC CONFETTI COMPONENT ==========
export const StaticConfetti = ({ density = "medium", colors = ["#E87A5D", "#D95D39", "#2C7A6E", "#F4A261", "#A8C3B8"] }) => {
  const [pieces, setPieces] = useState([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    if (mounted) return;
    
    const pieceCount = density === "low" ? 15 : density === "high" ? 50 : 30;
    
    const newPieces = Array.from({ length: pieceCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      // Start at random vertical positions (some already midway up)
      top: Math.random() * 100,
      // Negative delays ensure animation is already in progress
      delay: Math.random() * -15, // Random delay between -15s and 0s
      duration: 8 + Math.random() * 10, // Random duration 8-18s
      size: 6 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? "confetti-rectangle" : "confetti-circle",
    }));
    
    setPieces(newPieces);
    setMounted(true);
  }, [mounted, density, colors]);
  
  if (!mounted) return null;
  
  return (
    <div className="static-confetti">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`confetti-piece ${piece.shape}`}
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
            width: `${piece.size}px`,
            height: `${piece.shape === "confetti-circle" ? piece.size : piece.size * 0.6}px`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
// ========== DOODLE BACKGROUND WRAPPER (Optional - if you want to use it) ==========
export const DoodleBackground = ({ 
  children, 
  doodles = ["abacus"], 
  variant = "subtle"
}) => {
  const doodleComponents = {
    abacus: AbacusBeadsDoodle,
    neural: NeuralPathDoodle,
    brain: BrainSparkDoodle,
    constellation: ConstellationDoodle,
    math: MathFlowDoodle,
    wave: WaveSeparator,
    corner: CornerDoodle,
    bead: SingleBeadDoodle,
  };
  
  const positionClasses = {
    abacus: "top-10 left-10",
    neural: "bottom-20 right-10",
    brain: "top-1/2 right-20",
    constellation: "bottom-40 left-20",
    math: "top-40 right-30",
    wave: "bottom-0 left-0",
    corner: "top-0 left-0",
    bead: "bottom-10 right-10",
  };
  
  const opacityMap = {
    subtle: "opacity-20",
    playful: "opacity-30",
    minimal: "opacity-10",
  };
  
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {doodles.map((doodle, index) => {
          const DoodleComp = doodleComponents[doodle];
          if (!DoodleComp) return null;
          return (
            <div 
              key={index}
              className={`absolute ${positionClasses[doodle] || "top-0 left-0"} ${opacityMap[variant]}`}
            >
              <DoodleComp />
            </div>
          );
        })}
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};