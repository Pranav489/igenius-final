"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState({});
  const [isInView, setIsInView] = useState(false);
  const autoPlayRef = useRef(null);
  const isManualNavigationRef = useRef(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Video data - I-Genius students performing mental math
  const videos = [
    {
      id: 1,
      title: "Mental Math Calculation - Addition",
      videoId: "BvHQoUCrasU",
    },
    {
      id: 2,
      title: "Multiplication Mastery",
      videoId: "BvHQoUCrasU",
    },
    {
      id: 3,
      title: "Division Speed Test",
      videoId: "Pje1b6-rMUE",
    },
    {
      id: 4,
      title: "Mixed Operations - Addition & Subtraction",
      videoId: "BI1-BEccV84",
    },
    {
      id: 5,
      title: "Square Root Calculation",
      videoId: "CQ-0xIn5W4k",
    },
    {
      id: 6,
      title: "Abacus Mental Math Championship",
      videoId: "5moN0k6Krj8",
    }
  ];

  const currentVideo = videos[currentIndex];
  const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
  const nextIndex = (currentIndex + 1) % videos.length;

  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% of section must be visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Load videos lazily when they come into view
  useEffect(() => {
    const indicesToLoad = [currentIndex, prevIndex, nextIndex];
    indicesToLoad.forEach(idx => {
      if (!loadedVideos[idx]) {
        setLoadedVideos(prev => ({ ...prev, [idx]: true }));
      }
    });
  }, [currentIndex, prevIndex, nextIndex, loadedVideos]);

  // Auto-slide functionality - only when in view and auto-play is enabled
  useEffect(() => {
    // Clear existing interval
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    // Start new interval only if in view, auto-play enabled, and not manually navigating
    if (isInView && isAutoPlaying && !isManualNavigationRef.current) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 8000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isInView, isAutoPlaying, videos.length]);

  const nextSlide = useCallback(() => {
    isManualNavigationRef.current = true;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    // Clear auto-play interval temporarily
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    // Reset manual navigation flag after delay
    setTimeout(() => {
      isManualNavigationRef.current = false;
      // Restart auto-play if in view and auto-play enabled
      if (isInView && isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 8000);
      }
    }, 5000);
  }, [isInView, isAutoPlaying, videos.length]);

  const prevSlide = useCallback(() => {
    isManualNavigationRef.current = true;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    setTimeout(() => {
      isManualNavigationRef.current = false;
      if (isInView && isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 8000);
      }
    }, 5000);
  }, [isInView, isAutoPlaying, videos.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    // If turning auto-play on and in view, restart interval
    if (!isAutoPlaying && isInView) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 8000);
    }
  };

  const goToSlide = (index) => {
    isManualNavigationRef.current = true;
    setCurrentIndex(index);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    setTimeout(() => {
      isManualNavigationRef.current = false;
      if (isInView && isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 8000);
      }
    }, 5000);
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#1A2A3A] to-[#2D4A6E]">
      
      {/* ========== CREATIVE DOODLES - Student Performance Showcase Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting student skills */}
      <div className="absolute top-10 left-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected student achievements */}
      <div className="absolute top-12 right-6 opacity-10 hover:opacity-20 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Flowing mathematical skills */}
      <div className="absolute bottom-16 left-6 opacity-10 hover:opacity-20 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered performance highlights */}
      <div className="absolute top-[30%] right-[8%] opacity-15 animate-gentle-float">
        <SingleBeadDoodle />
      </div>
      <div className="absolute bottom-[40%] left-[5%] opacity-10 animate-gentle-float delay-500">
        <SingleBeadDoodle />
      </div>
      <div className="absolute top-[60%] right-[12%] opacity-8 animate-gentle-float delay-1000">
        <SingleBeadDoodle />
      </div>

      {/* Doodle 5: Wave separator at top */}
      <div className="absolute top-0 left-0 right-0 opacity-10 rotate-180">
        <WaveSeparator />
      </div>

      {/* Doodle 6: Static Confetti - Celebration of student success */}
      <div className="absolute top-[15%] right-[10%] w-[200px] h-[200px] opacity-20 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 content-container">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-4">
            I-GENIUS STUDENTS PERFORMING{" "}
            <span className="text-[#E87A5D]">MENTAL MATH CALCULATIONS</span>
          </h2>
          <p className="text-[#C4D6C4] text-base sm:text-lg max-w-2xl mx-auto font-body">
            Watch our young geniuses showcase their incredible mental math skills
          </p>
        </div>

        {/* Video Slider - Full Width Layout */}
        <div className="relative flex items-center justify-center">
          
          {/* Previous Video Preview */}
          <div className="hidden lg:block w-[280px] mr-4">
            <div 
              className="relative aspect-video rounded-media overflow-hidden cursor-pointer group bg-black/50 transition-all duration-300 hover:scale-105"
              onClick={prevSlide}
            >
              {loadedVideos[prevIndex] ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videos[prevIndex].videoId}?autoplay=0&controls=0&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                  className="w-full h-full pointer-events-none opacity-60"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-black/50 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-start pl-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Main Current Video */}
          <div className="flex-1 max-w-3xl">
            <div className="relative aspect-video bg-black rounded-media overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,122,93,0.3)]">
              <iframe
                key={currentVideo.id}
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=${isInView ? 1 : 0}&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                title={currentVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              />
            </div>
          </div>

          {/* Next Video Preview */}
          <div className="hidden lg:block w-[280px] ml-4">
            <div 
              className="relative aspect-video rounded-media overflow-hidden cursor-pointer group bg-black/50 transition-all duration-300 hover:scale-105"
              onClick={nextSlide}
            >
              {loadedVideos[nextIndex] ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videos[nextIndex].videoId}?autoplay=0&controls=0&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                  className="w-full h-full pointer-events-none opacity-60"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-black/50 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent flex items-center justify-end pr-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex justify-between items-center mt-6 max-w-3xl mx-auto">
          {/* Slide Counter */}
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm font-body transition-all duration-300 hover:bg-black/80">
            {currentIndex + 1} / {videos.length}
          </div>

          {/* Play/Pause Auto-slide Button - Shows auto-play status */}
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-body">Pause Auto-Slide</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-body">Play Auto-Slide</span>
              </>
            )}
          </button>

          {/* Auto-play status indicator when section not in view */}
          {!isInView && isAutoPlaying && (
            <div className="hidden sm:block text-xs text-white/50">
              Auto-play paused (scroll to view)
            </div>
          )}

          {/* Empty div for spacing */}
          <div className="w-[100px] hidden sm:block"></div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-2 bg-[#E87A5D]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60 hover:scale-110"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;