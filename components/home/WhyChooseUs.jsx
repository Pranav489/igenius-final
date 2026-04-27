"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  TrendingUp,
  ArrowRight,
  Trophy,
  Users,
  School,
  Award,
  Globe,
  Calendar,
  Zap,
  Brain,
  Heart,
  Shield,
  BookOpen,
  Video,
  Sparkles
} from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const WhyChooseUs = () => {
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

  const reasons = [
    { id: 1, title: "ISO Certified & Govt. Authorised", description: "ISO 9001-2015 certified company authorised by Educational Board of Vocational Training & Research Mumbai.", icon: Shield, color: "#2C7A6E" },
    { id: 2, title: "World Record Holder Institute", description: "Recognized as largest world record holder in 'Wonder Book of International London'.", icon: Trophy, color: "#E87A5D" },
    { id: 3, title: "550+ Franchisees Network", description: "Strong network of 550+ franchisees running successfully across India and abroad.", icon: Users, color: "#2C7A6E" },
    { id: 4, title: "165+ School Associations", description: "Trusted by 165+ prestigious schools for implementing abacus brain development program.", icon: School, color: "#E87A5D" },
    { id: 5, title: "1.5 Lakh+ Students Trained", description: "Successfully trained over 1.5 lakh students since our establishment in 2007.", icon: Brain, color: "#2C7A6E" },
    { id: 6, title: "50+ Qualified Trainers", description: "Strong team of 50+ highly motivated and well-trained teachers.", icon: Award, color: "#E87A5D" },
    { id: 7, title: "Online & Offline Classes", description: "Flexible learning options with dedicated online and offline classes.", icon: Video, color: "#2C7A6E" },
    { id: 8, title: "National Competitions", description: "Organized district, state, national and international level competitions.", icon: Trophy, color: "#E87A5D" },
    { id: 9, title: "Whole Brain Development", description: "Courses designed to promote whole brain development.", icon: Brain, color: "#2C7A6E" },
    { id: 10, title: "Quality Study Material", description: "Well-researched books developed by child age groups.", icon: BookOpen, color: "#E87A5D" },
    { id: 11, title: "Proven Track Record", description: "18+ years of excellence in providing high-quality abacus education.", icon: Calendar, color: "#2C7A6E" },
    { id: 12, title: "Affordable & Accessible", description: "Quality education at affordable fees making abacus accessible to all.", icon: Heart, color: "#E87A5D" }
  ];

  const featuredReasons = reasons.slice(0, 6);
  const additionalReasons = reasons.slice(6, 12);

  return (
    <section ref={sectionRef} className="section-container section-bg-cream">
      
      {/* ========== CREATIVE DOODLES - Trust & Excellence Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting trust factors */}
      <div className="absolute top-8 left-4 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected reasons to trust */}
      <div className="absolute top-12 right-4 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Flowing benefits */}
      <div className="absolute bottom-16 left-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered trust indicators */}
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

      {/* Doodle 6: Static Confetti - Celebration of trust */}
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] opacity-35 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Doodle 7: Extra confetti cluster at bottom */}
      <div className="absolute bottom-[15%] left-[12%] w-[200px] h-[200px] opacity-30 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="content-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
              Why Choose I-Genius
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Why We Are{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Trusted
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Discover what makes I-Genius the preferred choice for parents and students across India
          </p>
        </div>

        {/* Featured Reasons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 mb-16 lg:mb-20">
          {featuredReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className={`w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[380px] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group">
                  <div className="mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14" style={{ color: reason.color }} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#1A2A3A] mb-3 group-hover:text-[#E87A5D] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-[#1A2A3A] text-base sm:text-lg font-body leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Reasons */}
        <div className="pt-8 border-t border-[#C4D6C4]/30">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#1A2A3A] mb-3">
              And That's Not All...
            </h3>
            <p className="text-[#1A2A3A] text-base sm:text-lg font-body">
              Here's what else makes I-Genius the best choice for your child's future
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {additionalReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.id}
                  className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] max-w-[300px] transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="flex items-start gap-3 group">
                    <Icon className="w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" style={{ color: reason.color }} />
                    <div>
                      <h4 className="text-lg sm:text-xl font-heading font-semibold text-[#1A2A3A] mb-1 group-hover:text-[#E87A5D] transition-colors duration-300">
                        {reason.title}
                      </h4>
                      <p className="stat-label text-sm sm:text-base leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[#1A2A3A] text-lg sm:text-xl font-body font-medium">
              Ready to give your child the best advantage?
            </span>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-3.5 shadow-md hover:shadow-lg"
            >
              Join I-Genius Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;