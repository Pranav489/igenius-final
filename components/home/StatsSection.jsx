"use client";

import { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  School,
  Users,
  Award,
  Globe,
  Calendar,
  TrendingUp,
  Star
} from "lucide-react";
import { stats } from "@/lib/data";
import {
  AbacusBeadsDoodle,
  NeuralPathDoodle,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-container section-bg-cream">

      {/* ========== CREATIVE DOODLES - Numbers Celebration Theme ========== */}

      {/* Doodle 1: Abacus Beads - Counting our achievements */}
      <div className="absolute top-5 left-5 opacity-25 hover:opacity-35 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Neural Pathways - Connected achievements */}
      <div className="absolute top-10 right-5 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <NeuralPathDoodle />
      </div>

      {/* Doodle 3: Constellation Beads - Star achievements */}
      <div className="absolute bottom-20 left-5 opacity-30 hover:opacity-40 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 4: Math Symbols - Calculations flowing */}
      <div className="absolute bottom-10 right-5 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 5: Floating beads - Scattered milestones */}
      <div className="absolute top-1/2 right-10 opacity-25 animate-gentle-float">
        <SingleBeadDoodle />
      </div>
      <div className="absolute bottom-1/3 left-8 opacity-20 animate-gentle-float delay-700">
        <SingleBeadDoodle />
      </div>


      {/* Doodle 6: Static Confetti - Celebration of numbers */}
      <div className="absolute top-[10%] right-[5%] w-[250px] h-[250px] opacity-40 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Add another confetti cluster at bottom left */}
      <div className="absolute bottom-[15%] left-[5%] w-[200px] h-[200px] opacity-35 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="content-container">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5" />
              Our Achievements
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            I-Genius by{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Numbers
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Our journey of excellence reflected through numbers that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group relative transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Stats Block */}
                <div className="relative no-card bg-gradient-to-br from-[#F8F6F0] to-[#FEFCF5] rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: stat.color }} />
                  </div>

                  {/* Number */}
                  <div className="stat-number text-5xl sm:text-6xl lg:text-7xl mb-3 tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      trigger={isVisible}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#1A2A3A] mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="stat-label text-base sm:text-lg leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E87A5D] to-[#2C7A6E] rounded-full transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-2 bg-[#1A2A3A]/5 rounded-full p-1.5 hover:bg-[#1A2A3A]/10 transition-all duration-300">
            <span className="text-[#1A2A3A] text-base sm:text-lg font-body px-5 py-2">
              Join the success story
            </span>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-base sm:text-lg px-7 py-2.5 shadow-md hover:shadow-lg"
            >
              Enroll Now
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// AnimatedCounter component
const AnimatedCounter = ({ value, suffix, trigger }) => {
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  const formatValue = (val) => {
    if (val >= 100000) {
      return (val / 100000).toFixed(1) + "L";
    }
    return val;
  };

  useEffect(() => {
    if (trigger && !animatedRef.current) {
      animatedRef.current = true;

      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = end / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const nextValue = Math.floor(increment * currentStep);

        if (nextValue >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(nextValue);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [trigger, value]);

  return (
    <span className="font-stats font-bold">
      {formatValue(count)}{suffix}
    </span>
  );
};

export default StatsSection;