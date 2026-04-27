"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX,
  Star,
  Trophy,
  Users,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { AbacusBeadsDoodle, ConstellationDoodle, SingleBeadDoodle } from "../Doodles/Doodles";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef({});
  const youtubeRefs = useRef({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayInterval = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const isTransitioning = useRef(false);
  const videoEndedFlag = useRef(false);
  const isInitialMount = useRef(true);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Slide Data
  const slides = [
    {
      id: 1,
      type: "image",
      src: "/images/143040.jpg",
      mobileSrc: "/images/143040.jpg",
      title: "Master Abacus with I-Genius",
      subtitle: "Whole Brain Development Program for Ages 5-14",
      ctaText: "Enroll Now",
      ctaLink: "/contact",
      stats: "1.5L+ Students Trained",
      statIcon: Users,
      duration: 5000
    },
    {
      id: 2,
      type: "video",
      src: "/videos/hero-video.mp4",
      poster: "/images/35306.jpg",
      title: "Watch Our Students Perform",
      subtitle: "Mental Math Calculations at Lightning Speed",
      ctaText: "Watch More",
      ctaLink: "/media/videos",
      stats: "550+ Franchisees",
      statIcon: Briefcase,
      duration: null
    },
    {
      id: 3,
      type: "youtube",
      youtubeId: "XrAlH7mRDbs",
      poster: "/images/2331730.jpeg",
      title: "I-Genius Abacus Academy",
      subtitle: "ISO Certified & Govt. Authorized Institute",
      ctaText: "Join Free Demo",
      ctaLink: "/contact",
      stats: "165+ School Projects",
      statIcon: Trophy,
      duration: null
    },
    {
      id: 4,
      type: "image",
      src: "/images/231730.jpeg",
      mobileSrc: "/images/858258.jpg",
      title: "Become a Franchise Partner",
      subtitle: "Start Your Own Abacus Center with Low Investment",
      ctaText: "Know More",
      ctaLink: "/franchise",
      stats: "Earn ₹25,000+ / Month",
      statIcon: Star,
      duration: 5000
    },
    {
      id: 5,
      type: "youtube",
      youtubeId: "K7IHo2HZRsQ",
      poster: "/images/2331730.jpeg",
      title: "School Project Program",
      subtitle: "165+ Schools Trust I-Genius for Abacus Training",
      ctaText: "Partner with Us",
      ctaLink: "/school-project",
      stats: "50+ Qualified Trainers",
      statIcon: Users,
      duration: null
    }
  ];

  // Handle slide transition - MOVED BEFORE useEffect that uses it
  const nextSlide = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    
    // Reset video playing state for next slide
    setIsVideoPlaying(true);
    setShowPoster(false);
    
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      return next;
    });
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    
    setCurrentSlide((prev) => {
      const prevSlide = (prev - 1 + slides.length) % slides.length;
      return prevSlide;
    });
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  }, [slides.length]);

  // Listen for YouTube player events - MOVED AFTER nextSlide definition
  useEffect(() => {
    const handleYouTubeMessages = (event) => {
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onStateChange') {
            const playerState = data.info;
            // 0 = ended, 1 = playing, 2 = paused, 3 = buffering, 5 = cued
            if (playerState === 0) { // Video ended
              const currentSlideData = slides[currentSlide];
              if (currentSlideData.type === "youtube" && 
                  !videoEndedFlag.current && 
                  isAutoPlaying && 
                  !isTransitioning.current) {
                videoEndedFlag.current = true;
                nextSlide();
              }
            } else if (playerState === 1) { // Video playing
              setIsVideoPlaying(true);
              setShowPoster(false);
            } else if (playerState === 2) { // Video paused
              if (!videoEndedFlag.current) {
                setIsVideoPlaying(false);
                setShowPoster(true);
              }
            }
          }
        } catch (e) {
          // Not a JSON message or not our event
        }
      }
    };

    window.addEventListener('message', handleYouTubeMessages);
    return () => window.removeEventListener('message', handleYouTubeMessages);
  }, [currentSlide, isAutoPlaying, nextSlide, slides]);

  const goToSlide = (index) => {
    if (isTransitioning.current || index === currentSlide) return;
    isTransitioning.current = true;
    setCurrentSlide(index);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  // Handle video playback when slide changes
  useEffect(() => {
    // Reset flags for new slide
    videoEndedFlag.current = false;
    
    // Clear existing intervals
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }
    
    const currentSlideData = slides[currentSlide];
    
    // Handle different slide types
    if (currentSlideData.type === "video") {
      // Small delay to ensure video element is ready
      setTimeout(() => {
        const currentVideoRef = videoRefs.current[currentSlide];
        if (currentVideoRef) {
          // Remove old event listener
          if (currentVideoRef.endedListener) {
            currentVideoRef.removeEventListener("ended", currentVideoRef.endedListener);
          }
          
          // Create new event listener
          const handleEnded = () => {
            if (!videoEndedFlag.current && isAutoPlaying && !isTransitioning.current) {
              videoEndedFlag.current = true;
              nextSlide();
            }
          };
          
          currentVideoRef.endedListener = handleEnded;
          currentVideoRef.addEventListener("ended", handleEnded);
          
          // Ensure video is playing
          if (isAutoPlaying) {
            const playPromise = currentVideoRef.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                console.log("Video autoplay prevented:", error);
                setIsVideoPlaying(false);
                setShowPoster(true);
              });
            }
          } else {
            currentVideoRef.pause();
            setShowPoster(true);
            setIsVideoPlaying(false);
          }
        }
      }, 100);
    } 
    else if (currentSlideData.type === "youtube") {
      // For YouTube videos, they will send events through the message API
      // We don't need a timer - just let the video play and wait for the ended event
      const playYouTubeVideo = () => {
        const currentYoutubeRef = youtubeRefs.current[currentSlide];
        if (currentYoutubeRef && currentYoutubeRef.contentWindow) {
          if (isAutoPlaying) {
            // Send play command to YouTube iframe
            currentYoutubeRef.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            setIsVideoPlaying(true);
            setShowPoster(false);
          } else {
            currentYoutubeRef.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            setIsVideoPlaying(false);
            setShowPoster(true);
          }
        }
      };
      
      // Small delay to ensure iframe is loaded
      setTimeout(playYouTubeVideo, 200);
    } 
    else if (currentSlideData.type === "image") {
      // For images, set timer for auto-progress
      if (isAutoPlaying) {
        autoPlayInterval.current = setInterval(() => {
          if (!isTransitioning.current) {
            nextSlide();
          }
        }, currentSlideData.duration || 5000);
      }
    }
    
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [currentSlide, isAutoPlaying, slides, nextSlide]);

  // Initial mount - ensure first slide plays correctly
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Force play for first slide if it's video
      const firstSlideData = slides[0];
      if (firstSlideData.type === "video") {
        setTimeout(() => {
          const firstVideo = videoRefs.current[0];
          if (firstVideo && isAutoPlaying) {
            firstVideo.play().catch(e => console.log("Initial play prevented:", e));
          }
        }, 500);
      } else if (firstSlideData.type === "youtube") {
        setTimeout(() => {
          const firstYoutube = youtubeRefs.current[0];
          if (firstYoutube && firstYoutube.contentWindow && isAutoPlaying) {
            firstYoutube.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }
        }, 500);
      }
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
      // Clean up video event listeners
      Object.values(videoRefs.current).forEach(videoRef => {
        if (videoRef && videoRef.endedListener) {
          videoRef.removeEventListener("ended", videoRef.endedListener);
        }
      });
    };
  }, []);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.type === "video") {
      const currentVideoRef = videoRefs.current[currentSlide];
      if (currentVideoRef) {
        if (isAutoPlaying) {
          currentVideoRef.pause();
          setIsVideoPlaying(false);
          setShowPoster(true);
        } else {
          currentVideoRef.play();
          setIsVideoPlaying(true);
          setShowPoster(false);
        }
      }
    } else if (currentSlideData.type === "youtube") {
      const currentYoutubeRef = youtubeRefs.current[currentSlide];
      if (currentYoutubeRef && currentYoutubeRef.contentWindow) {
        if (isAutoPlaying) {
          currentYoutubeRef.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          setIsVideoPlaying(false);
          setShowPoster(true);
        } else {
          currentYoutubeRef.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          setIsVideoPlaying(true);
          setShowPoster(false);
        }
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.type === "video") {
      const currentVideoRef = videoRefs.current[currentSlide];
      if (currentVideoRef) {
        currentVideoRef.muted = !isMuted;
      }
    }
  };

  const toggleVideoPlayPause = () => {
    const currentSlideData = slides[currentSlide];
    
    if (currentSlideData.type === "video") {
      const currentVideoRef = videoRefs.current[currentSlide];
      if (currentVideoRef) {
        if (isVideoPlaying) {
          currentVideoRef.pause();
          setIsVideoPlaying(false);
          setShowPoster(true);
          setIsAutoPlaying(false);
        } else {
          currentVideoRef.play();
          setIsVideoPlaying(true);
          setShowPoster(false);
          if (!isAutoPlaying) {
            setIsAutoPlaying(true);
          }
        }
      }
    } else if (currentSlideData.type === "youtube") {
      const currentYoutubeRef = youtubeRefs.current[currentSlide];
      if (currentYoutubeRef && currentYoutubeRef.contentWindow) {
        if (isVideoPlaying) {
          currentYoutubeRef.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          setIsVideoPlaying(false);
          setShowPoster(true);
          setIsAutoPlaying(false);
        } else {
          currentYoutubeRef.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          setIsVideoPlaying(true);
          setShowPoster(false);
          if (!isAutoPlaying) {
            setIsAutoPlaying(true);
          }
        }
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const setVideoRef = useCallback((el, index) => {
    if (el && videoRefs.current[index] !== el) {
      videoRefs.current[index] = el;
    }
  }, []);

  const setYoutubeRef = useCallback((el, index) => {
    if (el && youtubeRefs.current[index] !== el) {
      youtubeRefs.current[index] = el;
      // When YouTube iframe loads, try to autoplay
      if (el && slides[index]?.type === "youtube" && isAutoPlaying && index === currentSlide) {
        setTimeout(() => {
          if (el.contentWindow) {
            el.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }
        }, 500);
      }
    }
  }, [currentSlide, isAutoPlaying, slides]);

  const currentSlideData = slides[currentSlide];
  const StatIcon = currentSlideData.statIcon;

  return (
    <section className={`relative w-full overflow-hidden bg-[#1A2A3A] ${isMobile ? 'h-[50vh]' : 'h-screen'}`}>
      {/* ========== DOODLES - Hero Section ========== */}
      <div className="absolute top-5 left-5 opacity-20 z-0 pointer-events-none">
        <ConstellationDoodle />
      </div>
      <div className="absolute bottom-10 right-5 opacity-15 z-0 pointer-events-none">
        <AbacusBeadsDoodle />
      </div>
      <div className="absolute top-1/3 right-10 opacity-10 z-0 pointer-events-none animate-gentle-float">
        <SingleBeadDoodle />
      </div>
      <div 
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full">
          {/* Media Container */}
          <div className="absolute inset-0 w-full h-full">
            {currentSlideData.type === "image" ? (
              <>
                <Image
                  src={currentSlideData.src}
                  alt={currentSlideData.title}
                  fill
                  className="hidden md:block object-cover"
                  priority
                  quality={90}
                />
                <Image
                  src={currentSlideData.mobileSrc || currentSlideData.src}
                  alt={currentSlideData.title}
                  fill
                  className="block md:hidden object-cover"
                  priority
                  quality={90}
                />
              </>
            ) : currentSlideData.type === "youtube" ? (
              <>
                {/* {showPoster && (
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={currentSlideData.poster}
                      alt={currentSlideData.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )} */}
                <iframe
                  ref={(el) => setYoutubeRef(el, currentSlide)}
                  src={`https://www.youtube.com/embed/${currentSlideData.youtubeId}?autoplay=${isAutoPlaying && isVideoPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${currentSlideData.youtubeId}&modestbranding=1&rel=0&enablejsapi=1`}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: "cover", pointerEvents: "none" }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </>
            ) : (
              <>
                {(showPoster || !isVideoPlaying) && (
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={currentSlideData.poster}
                      alt={currentSlideData.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )}
                <video
                  ref={(el) => setVideoRef(el, currentSlide)}
                  src={currentSlideData.src}
                  poster={currentSlideData.poster}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop={false}
                  muted={isMuted}
                  playsInline
                  autoPlay={isAutoPlaying && isVideoPlaying}
                  onPlay={() => {
                    if (!isVideoPlaying) {
                      setIsVideoPlaying(true);
                    }
                    if (showPoster) {
                      setShowPoster(false);
                    }
                  }}
                  onPause={() => {
                    if (!videoEndedFlag.current && !isTransitioning.current) {
                      if (isVideoPlaying) {
                        setIsVideoPlaying(false);
                      }
                      if (!showPoster) {
                        setShowPoster(true);
                      }
                    }
                  }}
                  onEnded={() => {
                    if (!videoEndedFlag.current && isAutoPlaying && !isTransitioning.current) {
                      videoEndedFlag.current = true;
                      nextSlide();
                    }
                  }}
                />
              </>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A3A]/80 via-[#1A2A3A]/50 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1A2A3A]/60 via-transparent to-[#1A2A3A]/30 ${isMobile ? 'opacity-70' : ''}`} />
          </div>

          {/* Content Container */}
          <div className="relative z-20 h-full flex items-center">
            <div className="content-container w-full">
              <div className={`max-w-2xl lg:max-w-3xl ${isMobile ? 'mt-16' : ''}`}>
                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-6">
                  <span className="bg-[#E87A5D]/20 backdrop-blur-sm text-[#E87A5D] text-xs sm:text-sm md:text-base font-body font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#E87A5D]/30 inline-flex items-center gap-1 sm:gap-2">
                    <StatIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    {currentSlideData.stats}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-[#FEFCF5] leading-tight mb-2 sm:mb-6">
                  {currentSlideData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-xl text-[#C4D6C4] font-body leading-relaxed mb-4 sm:mb-10 max-w-xl">
                  {currentSlideData.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href={currentSlideData.ctaLink}
                    className="btn-primary group bg-[#E87A5D] text-[#FEFCF5] font-heading font-semibold text-center text-sm sm:text-base lg:text-lg px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-[#D95D39] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    {currentSlideData.ctaText}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about-us"
                    className="bg-transparent border-2 border-[#FEFCF5] text-[#FEFCF5] font-heading font-semibold text-center text-sm sm:text-base lg:text-lg px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-[#FEFCF5] hover:text-[#1A2A3A] transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Video Controls */}
          {(currentSlideData.type === "video" || currentSlideData.type === "youtube") && (
            <div className={`absolute z-30 flex gap-2 sm:gap-3 ${isMobile ? 'bottom-20 right-4' : 'bottom-24 right-6 sm:right-8'}`}>
              <button
                onClick={toggleVideoPlayPause}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#E87A5D] transition-all duration-300 flex items-center justify-center"
                aria-label={isVideoPlaying ? "Pause" : "Play"}
              >
                {isVideoPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={toggleMute}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#E87A5D] transition-all duration-300 flex items-center justify-center"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#E87A5D] transition-all duration-300 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#E87A5D] transition-all duration-300 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Auto-play Toggle Button */}
        {!isMobile && (
          <button
            onClick={toggleAutoPlay}
            className="absolute bottom-24 left-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-[#E87A5D] transition-all duration-300 flex items-center justify-center"
            aria-label={isAutoPlaying ? "Pause Auto-Play" : "Resume Auto-Play"}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        )}

        {/* Slide Indicators */}
        <div className={`absolute left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 ${isMobile ? 'bottom-4' : 'bottom-6 sm:bottom-8'}`}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? `w-6 sm:w-10 h-1.5 sm:h-2 bg-[#E87A5D]`
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        {isAutoPlaying && currentSlideData.type === "image" && (
          <div 
            className="absolute bottom-0 left-0 z-20 h-1 bg-[#E87A5D]"
            style={{ 
              width: "100%", 
              animation: `progress ${currentSlideData.duration || 5000}ms linear forwards`,
              animationPlayState: isAutoPlaying ? "running" : "paused"
            }}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;