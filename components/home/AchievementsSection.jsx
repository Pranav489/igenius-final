"use client";

import { useState, useEffect, useRef } from "react";
import { Award, Trophy } from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

export const awardImages = [
  { src: "/images/426691.png", alt: "I-Genius Award" },
  { src: "/images/729425.png", alt: "Excellence Award" },
  { src: "/images/681281.png", alt: "Recognition Award" },
  { src: "/images/84772.png", alt: "National Award" },
  { src: "/images/826604.png", alt: "Achievement Award" },
  { src: "/images/637265.png", alt: "Best Academy Award" },
];

const AchievementsSection = () => {
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
    <section ref={sectionRef} className="section-container section-bg-cream">
      
      {/* ========== CREATIVE DOODLES - Achievement Celebration Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting achievements */}
      <div className="absolute top-10 left-6 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected achievements */}
      <div className="absolute top-12 right-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Flowing success */}
      <div className="absolute bottom-16 left-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered milestones */}
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

      {/* Doodle 6: Static Confetti - Celebration of achievements */}
      <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] opacity-35 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Doodle 7: Extra confetti cluster at bottom */}
      <div className="absolute bottom-[10%] left-[8%] w-[200px] h-[200px] opacity-30 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="content-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Trophy className="w-5 h-5" />
              Our Achievements
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Excellence{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Recognized
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Our journey of excellence recognized by national and international institutions
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {awardImages.map((image, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="no-card bg-[#F8F6F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="rounded-media overflow-hidden mb-4 bg-[#E8E4DC] aspect-[3/4]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="stat-label text-center text-sm group-hover:text-[#E87A5D] transition-colors duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 pt-8 border-t border-[#C4D6C4]/30 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl mb-2">6+</div>
              <div className="stat-label text-sm sm:text-base">National Awards</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl mb-2">1</div>
              <div className="stat-label text-sm sm:text-base">International Record</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl mb-2">ISO</div>
              <div className="stat-label text-sm sm:text-base">Certified</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl mb-2">Govt.</div>
              <div className="stat-label text-sm sm:text-base">Authorised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;