"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function VideoSlider({ videos }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }, 8000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, videos.length]);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    resetAutoPlay();
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }, 8000);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative max-w-md mx-auto">
      {/* Current Video - YouTube thumbnail with native play button */}
      <a
        href={`https://www.youtube.com/watch?v=${videos[currentVideoIndex].videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-2xl overflow-hidden aspect-video bg-black shadow-lg group"
      >
        <img
          src={`https://img.youtube.com/vi/${videos[currentVideoIndex].videoId}/hqdefault.jpg`}
          alt={videos[currentVideoIndex].title}
          className="w-full h-full object-cover"
        />
        {/* YouTube native play button will appear when hovering on mobile */}
      </a>

      {/* Video Title */}
      <div className="text-center mt-4 mb-4">
        <h3 className="text-lg font-heading font-semibold text-[#1A2A3A]">{videos[currentVideoIndex].title}</h3>
      </div>

      {/* Auto-play Toggle & Counter */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleAutoPlay}
          className="flex items-center gap-2 bg-[#F8F6F0] px-4 py-2 rounded-full text-[#1A2A3A] text-sm font-body hover:bg-[#E87A5D]/10 transition-all"
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isAutoPlaying ? "Pause" : "Play"} Slideshow
        </button>
        <div className="text-[#2D4A6E] text-sm font-body">
          {currentVideoIndex + 1} / {videos.length}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentVideoIndex(idx);
              resetAutoPlay();
            }}
            className={`transition-all duration-300 rounded-full ${
              currentVideoIndex === idx
                ? "w-8 h-2 bg-[#E87A5D]"
                : "w-2 h-2 bg-[#C4D6C4] hover:bg-[#E87A5D]/50"
            }`}
            aria-label={`Go to video ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}