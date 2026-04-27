// components/Doodles/ConfettiDoodle.jsx
"use client";

import { useEffect, useState } from "react";

export const ConfettiDoodle = ({ 
  density = "medium", // low, medium, high
  colors = ["#E87A5D", "#D95D39", "#2C7A6E", "#F4A261", "#A8C3B8"],
  animated = true 
}) => {
  const [pieces, setPieces] = useState([]);
  
  const pieceCount = {
    low: 15,
    medium: 30,
    high: 50
  }[density];
  
  useEffect(() => {
    // Generate random confetti pieces
    const newPieces = Array.from({ length: pieceCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // random horizontal position %
      delay: Math.random() * 8, // random animation delay
      duration: 5 + Math.random() * 8, // random duration
      size: 8 + Math.random() * 12, // random size 8-20px
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? "rectangle" : "circle",
      rotation: Math.random() * 360,
    }));
    
    setPieces(newPieces);
  }, [pieceCount, colors]);
  
  if (!animated) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: `-20px`,
            width: `${piece.size}px`,
            height: `${piece.shape === "circle" ? piece.size : piece.size * 0.6}px`,
            backgroundColor: piece.color,
            borderRadius: piece.shape === "circle" ? "50%" : "2px",
            opacity: 0,
            animation: `float-confetti ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

// Bounded confetti (stays within container - doesn't scroll off screen)
export const BoundedConfetti = ({ 
  density = "medium",
  colors = ["#E87A5D", "#D95D39", "#2C7A6E", "#F4A261", "#A8C3B8"]
}) => {
  const [pieces, setPieces] = useState([]);
  
  const pieceCount = {
    low: 10,
    medium: 20,
    high: 35
  }[density];
  
  useEffect(() => {
    const newPieces = Array.from({ length: pieceCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setPieces(newPieces);
  }, [pieceCount, colors]);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 0.6}px`,
            backgroundColor: piece.color,
            opacity: 0.3,
            animation: `float-confetti-bounded ${piece.duration}s ease-in-out infinite`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Triggered confetti (appears on scroll, hover, or click)
export const TriggeredConfetti = ({ trigger = "scroll", children }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    if (trigger === "scroll") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Trigger when 70% scrolled
        if (scrollPosition > (documentHeight - windowHeight) * 0.7) {
          setShowConfetti(true);
          // Auto-hide after 5 seconds
          setTimeout(() => setShowConfetti(false), 5000);
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [trigger]);
  
  return (
    <div className="relative">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <ConfettiDoodle density="high" />
        </div>
      )}
      {children}
    </div>
  );
};