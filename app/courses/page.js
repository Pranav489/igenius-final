import Link from "next/link";
import Image from "next/image";
import { 
  Clock, 
  Users, 
  Star, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  Trophy,
  Award,
  School,
  CheckCircle,
  Calculator,
  Brain,
  Puzzle,
  Zap
} from "lucide-react";
import { getAllCourses } from "@/lib/data";
import { 
  AbacusBeadsDoodle, 
  NeuralPathDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";
import { buildMetadata } from "@/utils/seoConfig";

export const metadata = buildMetadata("courses");

export default function CoursesPage() {
  const courses = getAllCourses();

  const getIcon = (iconName) => {
    const icons = {
      Calculator: Calculator,
      Brain: Brain,
      Puzzle: Puzzle
    };
    return icons[iconName] || Calculator;
  };

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Learning Path Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Celebrating learning opportunities */}
        <div className="absolute top-[15%] left-[5%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[4%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[25%] right-[8%] opacity-25">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[7%] opacity-15">
          <NeuralPathDoodle />
        </div>
        
        {/* Floating beads - representing different courses */}
        <div className="absolute top-[30%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[94%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[70%] right-[88%] opacity-15 animate-gentle-float delay-1500">
          <SingleBeadDoodle />
        </div>
        
        {/* Celebration confetti */}
        <div className="absolute top-[10%] right-[2%] w-40 h-40 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <Sparkles className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base sm:text-lg font-body">90,000+ Happy Students</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Courses We{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Offer
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl sm:text-2xl max-w-2xl mx-auto font-body leading-relaxed">
            Choose from our specialized programs designed for whole brain development and academic excellence
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-12 mt-12 pt-8 border-t border-white/10">
            <div className="stat-item group"><div className="stat-number text-3xl sm:text-4xl">8+</div><div className="text-white/70 text-base font-body">Years of Excellence</div></div>
            <div className="stat-item group"><div className="stat-number text-3xl sm:text-4xl">1.5L+</div><div className="text-white/70 text-base font-body">Students Trained</div></div>
            <div className="stat-item group"><div className="stat-number text-3xl sm:text-4xl">550+</div><div className="text-white/70 text-base font-body">Franchisees</div></div>
            <div className="stat-item group"><div className="stat-number text-3xl sm:text-4xl">4.9</div><div className="text-white/70 text-base font-body">Parent Rating</div></div>
          </div>
        </div>
      </section>

      {/* ========== COURSES GRID SECTION ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Background doodles */}
        <div className="absolute top-[10%] right-[3%] opacity-10 hover:opacity-20 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[2%] opacity-10 hover:opacity-20 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[30%] left-[95%] opacity-15">
          <SingleBeadDoodle />
        </div>
        
        <div className="absolute bottom-[25%] right-[90%] opacity-10">
          <SingleBeadDoodle />
        </div>
        
        {/* Celebration confetti scattered throughout */}
        <div className="absolute top-[5%] left-[2%] w-32 h-32 opacity-15 pointer-events-none">
          <StaticConfetti density="low" />
        </div>

        <div className="content-container">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20 hover:scale-105 transition-transform duration-300">
                Our Programs
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#1A2A3A] mb-6">
              Choose the{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Right Path
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body leading-relaxed">
              Each course is meticulously designed to unlock your child's full potential
            </p>
          </div>

          {/* Featured Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-[#F8F6F0] px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 hover:bg-[#E87A5D]/5">
              <Award className="w-5 h-5 text-[#E87A5D]" />
              <span className="text-base text-[#1A2A3A] font-body font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F8F6F0] px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 hover:bg-[#E87A5D]/5">
              <School className="w-5 h-5 text-[#2C7A6E]" />
              <span className="text-base text-[#1A2A3A] font-body font-medium">Govt. Authorised</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F8F6F0] px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 hover:bg-[#E87A5D]/5">
              <Users className="w-5 h-5 text-[#E87A5D]" />
              <span className="text-base text-[#1A2A3A] font-body font-medium">1.5L+ Trained</span>
            </div>
          </div>

          {/* Course Cards */}
          <div className="space-y-28 lg:space-y-36">
            {courses.map((course, index) => {
              const Icon = getIcon(course.icon);
              return (
                <div key={course.id} className={`group relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
                  
                  {/* Image Section with hover effects */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative rounded-media overflow-hidden bg-gradient-to-br from-[#F8F6F0] to-[#FEFCF5] shadow-md group-hover:shadow-xl transition-all duration-500">
                      <div className="relative aspect-video">
                        <Image 
                          src={course.image} 
                          alt={course.name} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                          sizes="(max-width: 768px) 100vw, 50vw" 
                          priority={index === 0}
                        />
                      </div>
                      <div className="absolute top-5 left-5 flex gap-2">
                        {course.isPopular && <span className="bg-[#E87A5D] text-white text-sm font-body font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg"><Zap className="w-4 h-4" /> Most Popular</span>}
                        {course.isNew && <span className="bg-[#2C7A6E] text-white text-sm font-body font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg"><Sparkles className="w-4 h-4" /> New</span>}
                      </div>
                      <div className="absolute bottom-5 right-5 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#E87A5D] text-[#E87A5D]" />
                        <span className="text-white text-base font-stats font-semibold">{course.rating}</span>
                        <span className="text-white/60 text-sm font-body">({course.studentsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E87A5D]/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" style={{ color: course.color }} />
                      </div>
                      <span className="text-[#E87A5D] text-base font-body font-semibold uppercase tracking-wide">{course.tagline}</span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] group-hover:text-[#E87A5D] transition-colors duration-300">{course.name}</h2>
                    <p className="text-[#1A2A3A] text-xl font-body leading-relaxed">{course.shortDesc}</p>
                    
                    <div className="flex flex-wrap gap-6 pt-2">
                      <div className="flex items-center gap-2"><Users className="w-5 h-5 text-[#2C7A6E]" /><span className="text-[#1A2A3A] text-base font-body">Age: {course.ageGroup}</span></div>
                      <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#2C7A6E]" /><span className="text-[#1A2A3A] text-base font-body">Duration: {course.duration}</span></div>
                      <div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-[#2C7A6E]" /><span className="text-[#1A2A3A] text-base font-body">{course.classMode}</span></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {course.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/benefit">
                          <CheckCircle className="w-5 h-5 text-[#E87A5D] group-hover/benefit:scale-110 transition-transform" />
                          <span className="text-[#1A2A3A] text-base font-body">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link href={`/courses/${course.slug}`} className="group inline-flex items-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#D95D39] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        Explore Course <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-[#E87A5D] text-[#E87A5D] font-heading font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#E87A5D] hover:text-white transition-all duration-300 hover:scale-105">
                        Free Demo
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Expert Guidance ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        
        {/* Wave separators */}
        <div className="absolute top-0 left-0 right-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        
        {/* Dancing celebration elements */}
        <div className="absolute top-[15%] left-[5%] opacity-25 hover:scale-110 transition-transform duration-500 animate-gentle-float">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[8%] opacity-30 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        
        <div className="absolute top-[40%] right-[3%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti celebration */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <StaticConfetti density="medium" />
        </div>
        
        {/* Constellation of future success */}
        <div className="absolute bottom-[15%] left-[8%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        <div className="relative z-10 content-container text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Not Sure Which Course to Choose?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Our education experts will help you identify the perfect program for your child's needs
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Talk to an Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}