"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Sparkles, Star } from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-r from-[#1A2A3A] to-[#2D4A6E]">
      
      {/* ========== CREATIVE DOODLES - Call to Action Celebration Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting enrollments */}
      <div className="absolute top-10 left-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected opportunities */}
      <div className="absolute top-12 right-6 opacity-10 hover:opacity-20 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Flowing towards enrollment */}
      <div className="absolute bottom-16 left-6 opacity-10 hover:opacity-20 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered opportunities */}
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

      {/* Doodle 6: Static Confetti - Celebration of new enrollments */}
      <div className="absolute top-[15%] right-[10%] w-[200px] h-[200px] opacity-25 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Doodle 7: Extra confetti cluster at bottom */}
      <div className="absolute bottom-[10%] left-[8%] w-[180px] h-[180px] opacity-20 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 content-container max-w-[1200px] text-center">
        
        {/* Animated Badge */}
        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-500 hover:bg-white/15 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}>
          <Sparkles className="w-4 h-4 text-[#E87A5D]" />
          <span className="text-white text-sm font-body font-medium">Limited Time Offer</span>
        </div>

        {/* Main Heading */}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          Ready to Unlock Your{" "}
          <span className="text-[#E87A5D] relative inline-block">
            Child's Genius
            <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 10">
              <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>

        {/* Subheading */}
        <p className={`text-base sm:text-lg lg:text-xl text-[#C4D6C4] max-w-2xl mx-auto mb-8 font-body leading-relaxed transition-all duration-500 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          Join thousands of happy parents who have seen their children transform into confident, skilled learners
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-10 transition-all duration-500 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#E87A5D] hover:bg-[#D95D39] text-white font-heading font-semibold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="tel:+917770045402"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-heading font-semibold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <Phone className="w-5 h-5" />
            Call +91 77700 45402
          </a>
        </div>

        {/* Trust Indicators - Using inline classes for better visibility on dark background */}
        <div className={`flex flex-wrap justify-center gap-6 sm:gap-8 pt-6 border-t border-white/10 transition-all duration-500 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Star className="w-5 h-5 fill-[#E87A5D] text-[#E87A5D] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 text-sm font-body group-hover:text-[#E87A5D] transition-colors duration-300">500+ Happy Parents</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Star className="w-5 h-5 fill-[#E87A5D] text-[#E87A5D] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 text-sm font-body group-hover:text-[#E87A5D] transition-colors duration-300">4.9 Rating</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Star className="w-5 h-5 fill-[#E87A5D] text-[#E87A5D] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 text-sm font-body group-hover:text-[#E87A5D] transition-colors duration-300">ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;