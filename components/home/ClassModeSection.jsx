"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Monitor, 
  Users, 
  Wifi, 
  Building2,
  ArrowRight,
  Sparkles,
  Clock,
  Calendar,
  Star,
  Zap,
  ChevronRight,
  Laptop,
  School,
  Globe,
  CheckCircle,
  Video,
  Headphones,
  Award,
  BookOpen,
  MessageCircle,
  ThumbsUp
} from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const ClassModeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMode, setSelectedMode] = useState("online");
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

  // Online Classes Details
  const onlineDetails = {
    title: "Online Classes",
    icon: Monitor,
    color: "#E87A5D",
    bgColor: "#E87A5D10",
    description: "Join our live interactive online classes from the comfort of your home with expert trainers. Experience real-time learning with personalized attention.",
    features: [
      { icon: Video, text: "Live Interactive Sessions", desc: "Real-time classes with two-way audio/video" },
      { icon: Wifi, text: "Learn from Anywhere", desc: "Access classes from home, vacation, or anywhere" },
      { icon: Clock, text: "Flexible Timings", desc: "Choose from multiple batch timings" },
      { icon: Headphones, text: "Recorded Backup", desc: "Access recorded sessions anytime" },
      { icon: Users, text: "Small Batch Size", desc: "Maximum 10 students per batch" },
      { icon: MessageCircle, text: "Doubt Clearing", desc: "Instant doubt resolution during class" }
    ],
    requirements: [
      "Laptop/Desktop/Smartphone with camera",
      "Stable internet connection",
      "Headphones with microphone",
      "Quiet learning environment"
    ],
    schedule: [
      "Weekdays: Monday - Friday (1 hour/day)",
      "Weekend: Saturday - Sunday (2 hours/day)",
      "Flexible batch timings available"
    ],
    price: "Starting from ₹999/month"
  };

  // Offline Classes Details
  const offlineDetails = {
    title: "Offline Classes",
    icon: Building2,
    color: "#2C7A6E",
    bgColor: "#2C7A6E10",
    description: "Experience traditional classroom learning at our centers with hands-on abacus training. Learn in a collaborative environment with peers.",
    features: [
      { icon: School, text: "Physical Classrooms", desc: "Well-equipped learning centers" },
      { icon: Users, text: "Group Activities", desc: "Collaborative learning with peers" },
      { icon: Award, text: "Personal Attention", desc: "Individual guidance from trainers" },
      { icon: BookOpen, text: "Physical Study Material", desc: "Workbooks and abacus tools provided" },
      { icon: Calendar, text: "Fixed Schedule", desc: "Regular weekly class schedule" },
      { icon: ThumbsUp, text: "Peer Interaction", desc: "Learn and grow together" }
    ],
    requirements: [
      "Enrollment at nearest center",
      "Regular attendance",
      "Study material provided",
      "Parent-teacher meetings"
    ],
    schedule: [
      "Weekdays: 2-3 classes per week (1 hour each)",
      "Weekend: Saturday/Sunday (2 hours)",
      "Flexible batches available"
    ],
    price: "Starting from ₹1,499/month"
  };

  const currentDetails = selectedMode === "online" ? onlineDetails : offlineDetails;
  const CurrentIcon = currentDetails.icon;

  // Common benefits for both modes
  const benefits = [
    { icon: Users, title: "Certified Trainers", description: "Learn from experienced and qualified teachers", color: "#E87A5D" },
    { icon: Calendar, title: "Weekly Assessments", description: "Regular tests to track progress", color: "#2C7A6E" },
    { icon: Award, title: "Certificate", description: "ISO Certified completion certificate", color: "#E87A5D" },
    { icon: Star, title: "Competitions", description: "Participate in national level competitions", color: "#2C7A6E" }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FEFCF5] to-[#F8F6F0]">
      
      {/* ========== CREATIVE DOODLES - Flexible Learning Theme ========== */}
      
      {/* Doodle 1: Abacus Beads - Counting learning options */}
      <div className="absolute top-10 left-6 opacity-20 hover:opacity-30 transition-opacity duration-700">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Constellation - Connected learning paths */}
      <div className="absolute top-12 right-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <ConstellationDoodle />
      </div>

      {/* Doodle 3: Math Flow - Flowing between modes */}
      <div className="absolute bottom-16 left-6 opacity-15 hover:opacity-25 transition-opacity duration-700">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Floating beads - Scattered learning opportunities */}
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

      {/* Doodle 6: Static Confetti - Celebration of learning choices */}
      <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] opacity-35 pointer-events-none">
        <StaticConfetti density="medium" />
      </div>

      {/* Doodle 7: Extra confetti cluster at bottom */}
      <div className="absolute bottom-[10%] left-[8%] w-[200px] h-[200px] opacity-30 pointer-events-none">
        <StaticConfetti density="low" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 content-container">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2.5 rounded-full border border-[#E87A5D]/20 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
              Choose Your Learning Mode
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Learn Your Way,{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Anytime Anywhere
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Choose between online or offline classes based on your convenience and learning preference
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-[#F8F6F0] rounded-full p-1.5 shadow-inner">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedMode("online")}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 font-heading font-semibold text-base sm:text-lg ${
                  selectedMode === "online"
                    ? "text-white"
                    : "text-[#1A2A3A] hover:text-[#E87A5D]"
                }`}
              >
                <Monitor className="w-5 h-5" />
                Online Classes
              </button>
              <button
                onClick={() => setSelectedMode("offline")}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 font-heading font-semibold text-base sm:text-lg ${
                  selectedMode === "offline"
                    ? "text-white"
                    : "text-[#1A2A3A] hover:text-[#2C7A6E]"
                }`}
              >
                <Building2 className="w-5 h-5" />
                Offline Classes
              </button>
            </div>
            {/* Sliding background */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-in-out ${
                selectedMode === "online" ? "left-1.5 bg-[#E87A5D]" : "left-[calc(50%+2px)] bg-[#2C7A6E]"
              }`}
            />
          </div>
        </div>

        {/* Dynamic Content based on selected mode */}
        <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Main Mode Card */}
          <div className="no-card bg-gradient-to-br from-[#F8F6F0] to-[#FEFCF5] rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Icon & Basic Info */}
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: currentDetails.bgColor }}
                >
                  <CurrentIcon className="w-12 h-12" style={{ color: currentDetails.color }} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-heading font-bold mb-4" style={{ color: currentDetails.color }}>
                  {currentDetails.title}
                </h3>
                <p className="text-[#1A2A3A] text-base sm:text-lg font-body leading-relaxed mb-6">
                  {currentDetails.description}
                </p>
                <div className="inline-block bg-[#E87A5D]/10 rounded-full px-4 py-2 hover:bg-[#E87A5D]/20 transition-colors duration-300">
                  <span className="text-[#1A2A3A] font-body font-semibold">{currentDetails.price}</span>
                </div>
              </div>

              {/* Right Column - Features Grid */}
              <div className="lg:w-2/3">
                <h4 className="text-xl sm:text-2xl font-heading font-semibold text-[#1A2A3A] mb-5">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentDetails.features.map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 group">
                        <FeatureIcon className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" style={{ color: currentDetails.color }} />
                        <div>
                          <h5 className="text-base sm:text-lg font-heading font-semibold text-[#1A2A3A] group-hover:text-[#E87A5D] transition-colors duration-300">
                            {feature.text}
                          </h5>
                          <p className="stat-label text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Requirements & Schedule Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Requirements */}
            <div className="no-card bg-[#F8F6F0] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle className="w-6 h-6" style={{ color: currentDetails.color }} />
                <h4 className="text-xl sm:text-2xl font-heading font-semibold text-[#1A2A3A]">
                  Requirements
                </h4>
              </div>
              <ul className="space-y-3">
                {currentDetails.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: currentDetails.color }} />
                    <span className="text-[#1A2A3A] text-base font-body group-hover:text-[#E87A5D] transition-colors duration-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="no-card bg-[#F8F6F0] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <Calendar className="w-6 h-6" style={{ color: currentDetails.color }} />
                <h4 className="text-xl sm:text-2xl font-heading font-semibold text-[#1A2A3A]">
                  Class Schedule
                </h4>
              </div>
              <ul className="space-y-3">
                {currentDetails.schedule.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: currentDetails.color }} />
                    <span className="text-[#1A2A3A] text-base font-body group-hover:text-[#E87A5D] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Common Benefits Section */}
          <div className="pt-8 border-t border-[#C4D6C4]/30">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#1A2A3A] mb-3">
                Benefits Across All Learning Modes
              </h3>
              <p className="text-[#1A2A3A] text-base sm:text-lg font-body">
                Same quality education, same certified trainers, choose what works best for you
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px] transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="text-center group">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${benefit.color}10` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: benefit.color }} />
                      </div>
                      <h4 className="text-lg sm:text-xl font-heading font-semibold text-[#1A2A3A] mb-2 group-hover:text-[#E87A5D] transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="stat-label text-sm sm:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[#1A2A3A] text-lg sm:text-xl font-body font-medium">
              Ready to start your learning journey?
            </span>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-3.5 shadow-md hover:shadow-lg"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassModeSection;