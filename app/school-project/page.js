import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight,
  Sparkles,
  School,
  Users,
  Award,
  Calendar,
  Shield,
  Target,
  TrendingUp,
  CheckCircle,
  Play,
  Star,
  BookOpen,
  Zap,
  Building2,
  Globe,
  Medal,
  Rocket,
  Clock,
  BadgeCheck,
  FileText,
  GraduationCap,
  Trophy,
  Building
} from "lucide-react";
import VideoSlider from "@/components/school-project/VideoSlider";
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

export const metadata = buildMetadata("schoolProject");

// Partner schools data
const partnerSchools = [
  { name: "Vidya Vikas International School", logo: "/images/Vidya Vikas International School.png" },
  { name: "MVP's School", logo: "/images/MVP's LOGO.jpg" },
  { name: "Rajiv Gandhi International School", logo: "/images/Rajiv Gandhi International School, Malegaon.png" },
  { name: "Chaitanya Valley International School", logo: "/images/Chaitanya Valley International School.jpeg" },
  { name: "HAP International School", logo: "/images/HAP International School.jpg" },
  { name: "Horizon Academy Nashik", logo: "/images/Horizon Academy Nashik.png" },
  { name: "Mahatma Gandhi Vidyamandir", logo: "/images/Mahatma Gandhi Vidyamandir.png" },
  { name: "Apex International School Pune", logo: "/images/Apex International School Pune.jpeg" },
  { name: "Divine English Medium School", logo: "/images/Divine English Medium School.jpeg" },
];

// Video data for success stories
const videos = [
  { id: 1, title: "School Project Overview", videoId: "K7IHo2HZRsQ" },
  { id: 2, title: "Student Mental Math Performance", videoId: "OHhKbrrGUz4" },
  { id: 3, title: "Teacher Training Session", videoId: "A2svB8madeU" },
  { id: 4, title: "Competition Highlights", videoId: "iXXSSO4Dz0U" },
  { id: 5, title: "Parent Testimonials", videoId: "cttWMICOplQ" }
];

export default function SchoolProjectPage() {
  const benefits = [
    "No hassles in managing your own Abacus teachers",
    "Flexible teaching hours as per the school schedule",
    "Associates with Govt. authorized & most trusted institutes",
    "Best math's based abacus educational modules",
    "Authorized institute for conducting abacus district, state, national & international competition",
    "Most trusted institute by 1.5 lakh students & parents"
  ];

  const stats = [
    { value: "165+", label: "School Associations", icon: School, color: "#E87A5D" },
    { value: "1.5L+", label: "Students Trained", icon: Users, color: "#2C7A6E" },
    { value: "2015", label: "Program Since", icon: Calendar, color: "#E87A5D" },
    { value: "50+", label: "Qualified Trainers", icon: GraduationCap, color: "#2C7A6E" }
  ];

  const steps = [
    { number: "1", title: "Partnership", description: "School ties up with I-Genius for abacus program", color: "#E87A5D" },
    { number: "2", title: "Training", description: "I-Genius sends qualified teachers during school hours", color: "#2C7A6E" },
    { number: "3", title: "Growth", description: "Students develop mental math and cognitive skills", color: "#E87A5D" },
    { number: "4", title: "Competitions", description: "Students participate in national and international events", color: "#2C7A6E" }
  ];

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - School Transformation Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Educational growth symbols */}
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
        
        {/* Floating beads - representing partner schools */}
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
            <div className="w-full lg:w-2/3 mx-auto text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
                <School className="w-5 h-5 text-[#E87A5D]" />
                <span className="text-white text-base font-body">Since 2015 | Transforming School Education</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
                Abacus Program{" "}
                <span className="text-[#E87A5D] relative inline-block">
                  in Schools
                  <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                    <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-[#C4D6C4] text-xl leading-relaxed mb-6 font-body">
                I-Genius Abacus Academy has been implementing the abacus brain development program since 2015 at the school level, making quality brain development education accessible to all students.
              </p>
              <p className="text-[#C4D6C4] text-lg leading-relaxed mb-8 font-body">
                Presently, our abacus course is running in <span className="text-[#E87A5D] font-semibold">165+ Schools</span> of North Maharashtra's renowned educational institute "Maratha Vidhya Prasarak Samaj's Nashik", along with various other educational institutes across Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION - Impact Numbers ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#E87A5D]/5 to-[#2C7A6E]/5">
        
        <div className="absolute top-0 left-0 opacity-10">
          <WaveSeparator />
        </div>
        
        {/* Floating celebration elements */}
        <div className="absolute top-[10%] right-[5%] opacity-10">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[3%] opacity-10">
          <SingleBeadDoodle />
        </div>
        
        <div className="relative z-10 content-container">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="stat-item group">
                  <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div className="stat-number text-4xl sm:text-5xl">{stat.value}</div>
                  <div className="stat-label text-lg font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PARTNER SCHOOLS SECTION ========== */}
      <section className="section-container section-bg-cream">
        
        <div className="absolute top-20 right-10 opacity-15 hover:opacity-25 transition-opacity duration-700">
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
                Our Partners
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Schools That{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Trust Us
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Partnering with prestigious institutions across Maharashtra</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-6xl mx-auto">
            {partnerSchools.map((school, idx) => (
              <div key={idx} className="text-center w-[180px] group">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-[#F8F6F0] flex items-center justify-center overflow-hidden group-hover:bg-[#E87A5D]/5 transition-all duration-300 group-hover:scale-110">
                  {school.logo ? (
                    <Image src={school.logo} alt={school.name} width={60} height={60} className="object-contain" />
                  ) : (
                    <Building className="w-10 h-10 text-[#E87A5D]" />
                  )}
                </div>
                <h3 className="text-base font-heading font-semibold text-[#1A2A3A] mb-1 group-hover:text-[#E87A5D] transition-colors">{school.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SCHOOL PROJECT SECTION ========== */}
      <section className="section-container section-bg-soft">
        
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
                About the Program
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Bringing Brain{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Development to Every Child
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-3xl mx-auto font-body leading-relaxed">
              Our school project initiative makes abacus training accessible at a very low fee, helping all students learn this powerful mental arithmetic method.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-[#E87A5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Accessible Education</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">Abacus course running at school level at very low fee to help all students learn this mental arithmetic method.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#2C7A6E]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-[#2C7A6E]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Expert Trainers</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">I-Genius sends our qualified Abacus teachers to schools during school hours to train students.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-6 h-6 text-[#E87A5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Proven Results</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">So far more than 1.5 lakh students have been trained in Abacus and Vedic Mathematics courses under the school project program.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="no-card bg-gradient-to-br from-[#FEFCF5] to-[#F8F6F0] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <School className="w-12 h-12 text-[#E87A5D]" />
                  <div>
                    <div className="text-3xl font-heading font-bold text-[#1A2A3A]">165+ Partner Schools</div>
                    <div className="text-[#1A2A3A] text-base font-body">And growing across Maharashtra</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#1A2A3A] text-lg font-body font-semibold">Key Features:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[#1A2A3A] font-body"><CheckCircle className="w-5 h-5 text-[#E87A5D]" />Low fee structure for accessibility</li>
                    <li className="flex items-center gap-2 text-[#1A2A3A] font-body"><CheckCircle className="w-5 h-5 text-[#E87A5D]" />Qualified trainers during school hours</li>
                    <li className="flex items-center gap-2 text-[#1A2A3A] font-body"><CheckCircle className="w-5 h-5 text-[#E87A5D]" />Regular assessments and competitions</li>
                    <li className="flex items-center gap-2 text-[#1A2A3A] font-body"><CheckCircle className="w-5 h-5 text-[#E87A5D]" />Certificates for all participants</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE I-GENIUS SECTION ========== */}
      <section className="section-container section-bg-cream">
        
        <div className="absolute top-20 left-10 opacity-10">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-10">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-0 left-0 opacity-5 rotate-180">
          <WaveSeparator />
        </div>

        {/* Celebration confetti */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <StaticConfetti density="medium" />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Why Choose I-Genius
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Why Schools{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Trust I-Genius
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Making abacus education seamless and effective in schools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#F8F6F0] rounded-full px-6 py-3.5 hover:bg-[#E87A5D]/5 transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-6 h-6 text-[#E87A5D] flex-shrink-0" />
                <span className="text-[#1A2A3A] text-base font-body">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section className="section-container section-bg-soft">
        
        <div className="absolute top-0 left-0 opacity-15">
          <WaveSeparator />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-15 hover:opacity-25 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Simple Process
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              How It{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Works
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">A seamless partnership model for schools</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center w-[240px] group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E87A5D]/10 to-[#2C7A6E]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-stats font-bold" style={{ color: step.color }}>{step.number}</span>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2 group-hover:text-[#E87A5D] transition-colors">{step.title}</h3>
                <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VIDEO SUCCESS STORIES ========== */}
      <section className="section-container section-bg-cream">
        
        <div className="absolute top-20 right-10 opacity-10 hover:opacity-20 transition-opacity duration-700">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-10 left-10 opacity-10">
          <MathFlowDoodle />
        </div>
        
        {/* Celebration confetti for success stories */}
        <div className="absolute bottom-20 right-20 opacity-20">
          <StaticConfetti density="low" />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Success Stories
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Program in{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Action
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Watch how our school project is transforming education</p>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.slice(0, 3).map((video) => (
              <div key={video.id} className="relative rounded-media overflow-hidden aspect-video bg-black shadow-lg group hover:shadow-xl transition-all duration-500">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
          
          <div className="hidden sm:grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6 lg:hidden">
            {videos.slice(0, 2).map((video) => (
              <div key={video.id} className="relative rounded-media overflow-hidden aspect-video bg-black shadow-lg group hover:shadow-xl transition-all duration-500">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Mobile View - Client Component Slider */}
          <div className="block md:hidden">
            <VideoSlider videos={videos} />
          </div>

          {/* Remaining videos for desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {videos.slice(3, 5).map((video) => (
              <div key={video.id} className="relative rounded-media overflow-hidden aspect-video bg-black shadow-lg group hover:shadow-xl transition-all duration-500">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Partner With Us ========== */}
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
        
        {/* Constellation of future partnerships */}
        <div className="absolute bottom-[15%] left-[8%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        <div className="relative z-10 content-container text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Partner with I-Genius
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Bring world-class abacus brain development program to your school
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Contact Us Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Request Information <FileText className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}