"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Brain, 
  Calculator, 
  Puzzle, 
  TrendingUp,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  Zap
} from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const CoursesSection = () => {
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

  const courses = [
    {
      id: 1,
      title: "Abacus",
      ageGroup: "Age 5-14 Years",
      duration: "8 Levels | 3-4 Months per Level",
      description: "Whole Brain Development Program that enhances mental arithmetic, concentration, and memory retention.",
      features: ["Mental Math Calculation", "Concentration & Focus", "Memory Enhancement", "Speed & Accuracy"],
      icon: Calculator,
      color: "#E87A5D",
      bgColor: "#E87A5D10",
      link: "/courses/abacus"
    },
    {
      id: 2,
      title: "Vedic Maths",
      ageGroup: "Age 8+ Years",
      duration: "1 Month | 2 Hours Weekly",
      description: "Ancient Indian mathematical system that makes calculations 10x faster using simple sutras and techniques.",
      features: ["10x Faster Calculations", "16 Sutras & 13 Sub-sutras", "Competitive Exam Prep", "Problem Solving Skills"],
      icon: Brain,
      color: "#2C7A6E",
      bgColor: "#2C7A6E10",
      link: "/courses/vedic-math"
    },
    {
      id: 3,
      title: "Rubik's Cube",
      ageGroup: "Age 6+ Years",
      duration: "1 Month | 2 Hours Weekly",
      description: "Learn to solve the world's most popular puzzle while enhancing logical thinking and problem-solving abilities.",
      features: ["Logical Thinking", "Pattern Recognition", "Memory & Focus", "Patience & Perseverance"],
      icon: Puzzle,
      color: "#E87A5D",
      bgColor: "#E87A5D10",
      link: "/courses/rubik-cube"
    }
  ];

  return (
    <section ref={sectionRef} className="section-container section-bg-soft">
      
      {/* ========== CREATIVE DOODLES - Learning Path Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting courses */}
      <div className="absolute top-10 left-4 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected learning paths */}
      <div className="absolute top-20 right-8 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Knowledge flowing through courses */}
      <div className="absolute bottom-20 left-5 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered learning opportunities */}
      <div className="absolute top-[30%] right-[10%] opacity-20 animate-gentle-float">
        <SingleBeadDoodle />
      </div>
      <div className="absolute bottom-[40%] left-[8%] opacity-15 animate-gentle-float delay-500">
        <SingleBeadDoodle />
      </div>
      <div className="absolute top-[60%] right-[15%] opacity-10 animate-gentle-float delay-1000">
        <SingleBeadDoodle />
      </div>

      {/* Doodle 5: Wave separator at top */}
      <div className="absolute top-0 left-0 right-0 opacity-10 rotate-180">
        <WaveSeparator />
      </div>

      {/* Doodle 6: Static Confetti - Celebration of course variety */}
      <div className="absolute top-[15%] right-[5%] w-[250px] h-[250px] opacity-35 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Doodle 7: Extra confetti cluster at bottom */}
      <div className="absolute bottom-[10%] left-[8%] w-[200px] h-[200px] opacity-30 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="content-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5" />
              Our Programs
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Courses We{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Offer
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Discover our specialized programs designed for whole brain development and academic excellence
          </p>
        </div>

        {/* Courses */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: course.bgColor }}>
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: course.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1A2A3A] group-hover:text-[#E87A5D] transition-colors duration-300">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Users className="w-4 h-4 text-[#2C7A6E]" />
                        <span className="text-[#1A2A3A] text-sm font-body">
                          {course.ageGroup}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#E87A5D]" />
                    <span className="stat-label text-base sm:text-lg font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <p className="text-[#1A2A3A] text-base sm:text-lg font-body leading-relaxed mb-5">
                    {course.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[#1A2A3A] text-base sm:text-lg font-heading font-semibold mb-3">
                      Key Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-[#1A2A3A] text-sm sm:text-base font-body bg-[#FEFCF5] px-3 py-1.5 rounded-full hover:bg-[#E87A5D]/10 transition-colors duration-300"
                        >
                          <Star className="w-3.5 h-3.5 text-[#E87A5D]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={course.link}
                    className="group inline-flex items-center gap-2 text-[#E87A5D] font-heading font-semibold text-base sm:text-lg hover:text-[#D95D39] transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="absolute -top-4 -right-4 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" stroke={course.color} strokeWidth="1.5" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="20" stroke={course.color} strokeWidth="1" />
                    </svg>
                  </div>
                </div>

                {index < courses.length - 1 && (
                  <div className="block lg:hidden mt-8 pt-8 border-t border-[#C4D6C4]/30" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[#1A2A3A] text-lg sm:text-xl font-body">
              Ready to unlock your child's potential?
            </span>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-3.5 shadow-md hover:shadow-lg"
            >
              Get Free Demo Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Certification Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 group cursor-pointer">
            <Award className="w-5 h-5 text-[#2C7A6E] group-hover:scale-110 transition-transform duration-300" />
            <span className="stat-label text-sm sm:text-base font-medium group-hover:text-[#E87A5D] transition-colors duration-300">
              All courses are ISO 9001-2015 Certified & Govt. Authorised
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;