"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  Shield,
  Trophy,
  Star
} from "lucide-react";
import {
  AbacusBeadsDoodle,
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const AboutSection = () => {
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

  const highlights = [
    { icon: Calendar, text: "Established in 2007", color: "#E87A5D" },
    { icon: Users, text: "1.5 Lakh+ Students Trained", color: "#2C7A6E" },
    { icon: Award, text: "ISO 9001-2015 Certified", color: "#E87A5D" },
    { icon: Shield, text: "Govt. Authorised by EBVTR", color: "#2C7A6E" }
  ];

  const coreValues = [
    { title: "Excellence", description: "Committed to providing high-quality abacus education", icon: Trophy },
    { title: "Innovation", description: "Continuously improving our teaching methods", icon: TrendingUp },
    { title: "Empowerment", description: "Building confidence and cognitive skills", icon: Star }
  ];

  return (
    <section ref={sectionRef} className="section-container section-bg-cream">

      {/* ========== CREATIVE DOODLES - Trust & Excellence Theme ========== */}

      {/* Doodle 1: Abacus Beads - Counting achievements */}
      <div className="absolute top-10 left-8 opacity-25 hover:opacity-35 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Trust network */}
      <div className="absolute top-20 right-12 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Knowledge flowing */}
      <div className="absolute top-1/2 left-4 opacity-20 -translate-y-1/2 hover:opacity-30 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Single Bead - Key milestones scattered */}
      <div className="absolute top-1/3 right-8 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <SingleBeadDoodle />
      </div>

      {/* Doodle 5: Floating beads - Scattered growth markers */}
      <div className="absolute top-[15%] left-[15%] opacity-20 animate-gentle-float">
        <SingleBeadDoodle />
      </div>
      <div className="absolute bottom-[30%] right-[10%] opacity-15 animate-gentle-float delay-500">
        <SingleBeadDoodle />
      </div>
      <div className="absolute top-[70%] left-[20%] opacity-10 animate-gentle-float delay-1000">
        <SingleBeadDoodle />
      </div>

      {/* Doodle 6: Wave separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <WaveSeparator />
      </div>

      {/* Doodle 7: Static Confetti - Celebration of trust */}
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] opacity-40 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Add another confetti cluster at bottom */}
      <div className="absolute bottom-[10%] left-[15%] w-[200px] h-[200px] opacity-35 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="content-container">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5" />
              About I-Genius
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Pioneers in{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Abacus Education
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            With a strong commitment to excellence and a passion for education, we have been transforming young minds since 2007
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-media overflow-hidden aspect-video bg-[#1A2A3A] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.youtube.com/embed/XrAlH7mRDbs?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="I-Genius Abacus Academy Introduction"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-7">
            <h3 className="text-3xl sm:text-4xl font-heading font-semibold text-[#1A2A3A] leading-tight">
              Whole Brain Development for Young Minds
            </h3>
            <p className="text-[#1A2A3A] text-lg sm:text-xl font-body leading-relaxed">
              I-Genius Abacus Academy is recognized as <span className="text-[#E87A5D] font-semibold">"One of The Best Abacus Institutes in Maharashtra"</span> and authorised by Educational Board of Vocational Training & Research Mumbai (Regd. by Govt. of India).
            </p>
            <p className="text-[#1A2A3A] text-lg sm:text-xl font-body leading-relaxed">
              Our academy is proud to have a network of <span className="font-semibold text-[#1A2A3A] text-xl">550+ Franchisees</span> running all over India and abroad, <span className="font-semibold text-[#1A2A3A] text-xl">165+ School Project Associations</span> and we have successfully trained over <span className="font-semibold text-[#1A2A3A] text-xl">1.5 Lakh students</span> in Abacus Education since 2007.
            </p>

            <div className="flex flex-wrap gap-5 pt-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2.5 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                    <span className="text-[#1A2A3A] text-base sm:text-lg font-body font-medium">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-7">
              <Link
                href="/about-us"
                className="group inline-flex items-center justify-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-lg px-8 py-3.5 rounded-full hover:bg-[#D95D39] transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Know More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2C7A6E] text-[#2C7A6E] font-heading font-semibold text-lg px-8 py-3.5 rounded-full hover:bg-[#2C7A6E] hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="pt-10 border-t border-[#C4D6C4]/30">
          <h3 className="text-center text-2xl sm:text-3xl font-heading font-semibold text-[#1A2A3A] mb-12">
            Why Parents & Students Trust I-Genius
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-12 lg:gap-16">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`text-center max-w-[280px] mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 rounded-full bg-[#F8F4EA] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10" style={{ color: index === 0 ? '#E87A5D' : index === 1 ? '#2C7A6E' : '#E87A5D' }} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-3">
                    {value.title}
                  </h4>
                  <p className="stat-label text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 mt-14 pt-8">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <Shield className="w-6 h-6 text-[#2C7A6E] group-hover:scale-110 transition-transform duration-300" />
            <span className="stat-label text-base sm:text-lg font-medium group-hover:text-[#E87A5D] transition-colors duration-300">ISO 9001-2015 Certified</span>
          </div>
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <Trophy className="w-6 h-6 text-[#E87A5D] group-hover:scale-110 transition-transform duration-300" />
            <span className="stat-label text-base sm:text-lg font-medium group-hover:text-[#E87A5D] transition-colors duration-300">World Record Holder</span>
          </div>
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <Award className="w-6 h-6 text-[#2C7A6E] group-hover:scale-110 transition-transform duration-300" />
            <span className="stat-label text-base sm:text-lg font-medium group-hover:text-[#E87A5D] transition-colors duration-300">Best Abacus Institute in Maharashtra</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;