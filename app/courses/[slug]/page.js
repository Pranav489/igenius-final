import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  Users,
  Star,
  ChevronRight,
  ArrowRight,
  Calendar,
  Award,
  BookOpen,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
  Gift,
  Medal,
  Sparkles,
  Rocket,
  Heart,
  Globe,
  Trophy,
  Brain,
  Puzzle,
  Calculator
} from "lucide-react";
import { getCourseBySlug, getAllCourses } from "@/lib/data";
import { 
  AbacusBeadsDoodle, 
  NeuralPathDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

// Generate static params for all courses
export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const course = getCourseBySlug(slug);

  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.name} Course | I-Genius Abacus Academy`,
    description: course.shortDesc,
  };
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Icon mapping
  const getCourseIcon = () => {
    switch (course.id) {
      case "abacus": return <Calculator className="w-12 h-12" />;
      case "vedic-math": return <Brain className="w-12 h-12" />;
      case "rubik-cube": return <Puzzle className="w-12 h-12" />;
      default: return <TrendingUp className="w-12 h-12" />;
    }
  };

  const iconColor = course.id === "vedic-math" ? "#2C7A6E" : "#E87A5D";

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">

      {/* ========== HERO SECTION - Course Spotlight Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">

        {/* Doodles - Celebrating this course */}
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
        
        {/* Floating beads - representing course modules */}
        <div className="absolute top-[30%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[94%] opacity-20 animate-gentle-float delay-1000">
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

        <div className="relative z-10 content-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left Side - Info */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
                <Sparkles className="w-5 h-5 text-[#E87A5D]" />
                <span className="text-white text-base font-body">{course.classMode}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
                {course.name}
              </h1>
              <p className="text-[#E87A5D] text-xl font-body font-semibold mb-4">
                {course.tagline}
              </p>
              <p className="text-[#C4D6C4] text-xl leading-relaxed mb-8 font-body">
                {course.description}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                <div className="flex items-center gap-3 group">
                  <Users className="w-6 h-6 text-[#E87A5D] group-hover:scale-110 transition-transform" />
                  <div><div className="text-white font-heading font-bold text-2xl">{course.studentsCount}</div><div className="text-[#C4D6C4] text-sm font-body">Students Enrolled</div></div>
                </div>
                <div className="flex items-center gap-3 group">
                  <Star className="w-6 h-6 text-[#E87A5D] group-hover:scale-110 transition-transform" />
                  <div><div className="text-white font-heading font-bold text-2xl">{course.rating}/5</div><div className="text-[#C4D6C4] text-sm font-body">Parent Rating</div></div>
                </div>
                <div className="flex items-center gap-3 group">
                  <Clock className="w-6 h-6 text-[#E87A5D] group-hover:scale-110 transition-transform" />
                  <div><div className="text-white font-heading font-bold text-2xl">{course.duration}</div><div className="text-[#C4D6C4] text-sm font-body">Course Duration</div></div>
                </div>
                <div className="flex items-center gap-3 group">
                  <Globe className="w-6 h-6 text-[#E87A5D] group-hover:scale-110 transition-transform" />
                  <div><div className="text-white font-heading font-bold text-2xl">{course.classMode}</div><div className="text-[#C4D6C4] text-sm font-body">Class Mode</div></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#D95D39] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
                  Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#curriculum" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  View Curriculum <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Side - Course Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-media bg-gradient-to-br from-[#E87A5D]/20 to-[#2C7A6E]/20 p-4 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-square rounded-media overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
                {course.isPopular && (
                  <div className="absolute -top-3 -right-3 bg-[#E87A5D] text-white px-5 py-2 rounded-full text-sm font-heading font-bold shadow-lg transform rotate-6">
                    Most Popular
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="section-container section-bg-cream">
        
        <div className="absolute top-20 right-10 opacity-10 hover:opacity-20 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-10 left-10">
          <SingleBeadDoodle />
        </div>
        
        <div className="absolute top-0 left-0 opacity-10">
          <WaveSeparator />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20 hover:scale-105 transition-transform duration-300">
                Program Benefits
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Why Choose{" "}
              <span className="text-[#E87A5D] relative inline-block">
                {course.name}
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Transform your child's learning journey with our proven methodology</p>
          </div>

          {/* Benefits flowing layout */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {course.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#F8F6F0] px-6 py-3 rounded-full hover:bg-[#E87A5D]/10 transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-6 h-6 text-[#E87A5D]" />
                <span className="text-[#1A2A3A] text-lg font-body font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CURRICULUM SECTION ========== */}
      <section id="curriculum" className="section-container section-bg-soft">
        
        <div className="absolute top-0 left-0 opacity-15">
          <WaveSeparator />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-15 hover:opacity-25 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute top-20 left-10 opacity-10">
          <AbacusBeadsDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Learning Path
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Course{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Curriculum
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Step-by-step progressive learning structure</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {(course.levels || []).map((level, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-[#C4D6C4]/30 last:border-0 group hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#E87A5D] text-white flex items-center justify-center font-heading font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {level.level}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2 group-hover:text-[#E87A5D] transition-colors">{level.name}</h3>
                  <p className="text-[#2C7A6E] text-base font-body mb-3">{level.duration}</p>
                  <p className="text-[#1A2A3A] text-lg font-body">{level.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU'LL LEARN ========== */}
      <section className="section-container section-bg-cream">
        
        <div className="absolute top-20 left-10 opacity-10">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-10">
          <MathFlowDoodle />
        </div>
        
        {/* Celebration confetti for learning */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <StaticConfetti density="low" />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              What You'll{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Learn
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {(course.curriculum || []).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#F8F6F0] px-5 py-2.5 rounded-full hover:bg-[#E87A5D]/10 transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-5 h-5 text-[#E87A5D]" />
                <span className="text-[#1A2A3A] text-lg font-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATION SECTION ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#E87A5D]/5 to-[#2C7A6E]/5">
        
        <div className="absolute top-0 left-0 opacity-10">
          <WaveSeparator />
        </div>
        
        <div className="absolute top-10 right-20 opacity-10">
          <SingleBeadDoodle />
        </div>
        
        <div className="absolute bottom-10 left-20 opacity-15">
          <ConstellationDoodle />
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-[#E87A5D]/10 border border-[#E87A5D]/20 hover:scale-105 transition-transform duration-300">
            <Award className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-[#E87A5D] text-base font-body font-semibold">Certification</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-heading font-bold text-[#1A2A3A] mb-4">
            Get Recognized for Your Achievement
          </h3>
          <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto mb-6 font-body leading-relaxed">
            {course.certifications}
          </p>
          <Trophy className="w-16 h-16 text-[#E87A5D] mx-auto opacity-40 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </section>

      {/* ========== CTA SECTION - Start Your Journey ========== */}
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
              Ready to Start Your Journey?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Join {course.studentsCount} successful students who have transformed their abilities
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Book Free Demo <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}