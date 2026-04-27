"use client";

import { useState, useEffect, useRef } from "react";
import { Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

export const testimonials = [
  {
    id: 1,
    name: "Dinesh Shewalekar",
    role: "Parent",
    child: "Son – Level 3 Abacus",
    rating: 5,
    text: "My son's math grades have improved dramatically since joining I-Genius. The teachers are incredibly patient and the structured approach really works. He can now do mental calculations faster than a calculator!",
    city: "Nashik",
    image: "/images/288920.jpg",
  },
  {
    id: 2,
    name: "Pranjal Shevale",
    role: "Parent",
    child: "Daughter – Level 5 Abacus",
    rating: 5,
    text: "I-Genius has transformed my daughter's confidence completely. She used to fear math — now she loves it. The abacus program has improved not just her math but her overall focus and memory.",
    city: "Nashik",
    image: "/images/928195.jpeg",
  },
  {
    id: 3,
    name: "Pankaj Gangurde",
    role: "Parent",
    child: "Son – Vedic Math & Abacus",
    rating: 5,
    text: "Excellent teaching methodology. The trainers are highly qualified and the curriculum is well-structured. My son completed both abacus and Vedic math, and his performance in school is outstanding.",
    city: "Mumbai",
    image: "/images/629662.jpeg",
  },
  {
    id: 4,
    name: "Purwa Shinde",
    role: "Parent",
    child: "Daughter – Rubik Cube",
    rating: 5,
    text: "The Rubik Cube course has done wonders for my daughter's logical thinking. She's more patient, focused, and loves challenges now. I-Genius is truly unlocking her genius!",
    city: "Pune",
    image: "/images/862895.jpeg",
  },
  {
    id: 5,
    name: "Shital Bachhav",
    role: "Parent",
    child: "Son – Level 6 Abacus",
    rating: 5,
    text: "We enrolled our son in I-Genius three years ago and it is the best decision we've made. He participated in national competition and won first place. The academy's support is phenomenal.",
    city: "Nashik",
    image: "/images/554305.jpeg",
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="section-container section-bg-soft">
      
      {/* ========== CREATIVE DOODLES - Parent Trust & Stories Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting happy parents */}
      <div className="absolute top-10 left-6 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected trust stories */}
      <div className="absolute top-12 right-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Flowing testimonials */}
      <div className="absolute bottom-16 left-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered parent stories */}
      <div className="absolute top-[30%] right-[8%] opacity-20 animate-gentle-float">
        <SingleBeadDoodle />
      </div>
      <div className="absolute bottom-[40%] left-[5%] opacity-15 animate-gentle-float delay-500">
        <SingleBeadDoodle />
      </div>
      <div className="absolute top-[60%] right-[12%] opacity-10 animate-gentle-float delay-1000">
        <SingleBeadDoodle />
      </div>

      {/* Doodle 5: Wave separator at top */}
      <div className="absolute top-0 left-0 right-0 opacity-10 rotate-180">
        <WaveSeparator />
      </div>

      {/* Doodle 6: Static Confetti - Celebration of parent satisfaction */}
      <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] opacity-35 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Doodle 7: Extra confetti cluster at bottom */}
      <div className="absolute bottom-[10%] left-[8%] w-[200px] h-[200px] opacity-30 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 content-container max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-5 h-5" />
              What Parents Say
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Parents{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Testimonials
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Hear from parents who have witnessed their children's transformation
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className={`no-card bg-[#FEFCF5] rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 shadow-md hover:shadow-xl ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            
            {/* Parent Image & Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="team-image w-24 h-24 flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] hover:text-[#E87A5D] transition-colors duration-300">
                  {currentTestimonial.name}
                </h3>
                <p className="text-[#E87A5D] font-body font-medium">
                  {currentTestimonial.child}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E87A5D] text-[#E87A5D]" />
                  ))}
                </div>
                <p className="stat-label text-sm mt-1">
                  {currentTestimonial.city}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-6xl text-[#E87A5D]/20 font-serif">"</div>
              <p className="text-[#1A2A3A] text-base sm:text-lg font-body leading-relaxed px-4 py-2">
                {currentTestimonial.text}
              </p>
              <div className="absolute -bottom-2 -right-2 text-6xl text-[#E87A5D]/20 font-serif rotate-180">"</div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 rounded-full bg-[#E87A5D] hover:bg-[#D95D39] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 rounded-full bg-[#E87A5D] hover:bg-[#D95D39] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-2 bg-[#E87A5D]"
                  : "w-2 h-2 bg-[#C4D6C4] hover:bg-[#E87A5D]/50 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="stat-item group">
              <div className="stat-number text-2xl sm:text-3xl">500+</div>
              <div className="stat-label text-sm">Happy Parents</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-2xl sm:text-3xl">4.9</div>
              <div className="stat-label text-sm">Average Rating</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-2xl sm:text-3xl">5+</div>
              <div className="stat-label text-sm">Years of Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;