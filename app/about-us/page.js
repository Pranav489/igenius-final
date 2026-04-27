import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Users,
  School,
  Award,
  Calendar,
  Shield,
  Heart,
  Target,
  Eye,
  TrendingUp,
  CheckCircle,
  Play,
  Star,
  BookOpen,
  Zap,
  MapPin,
  Building2,
  Globe,
  ChevronRight,
  Medal,
  Rocket,
  Brain,
  Clock,
  BadgeCheck,
  User,
  Briefcase,
  GraduationCap,
  Quote,
  FileText,
  Download,
  ExternalLink,
  Activity,
  Network,
  Database
} from "lucide-react";
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

// Metadata for SEO
export async function generateMetadata() {
  return buildMetadata("about");
}

// Team members data with images
const leadershipTeam = [
  {
    name: "Nita Pawar",
    role: "Founder & Director",
    description: "Visionary founder who started the journey in 2007 with just 2 students. Her dedication and passion have built I-Genius into a nationally recognized institution.",
    image: "/images/nita_pawar.jpg",
    color: "#E87A5D"
  },
  {
    name: "Yogesh Pawar",
    role: "Director",
    description: "Strategic leader driving expansion and innovation. Instrumental in scaling the franchise network and establishing institutional partnerships.",
    image: "/images/yogesh_pawar.png",
    color: "#2C7A6E"
  },
  {
    name: "Dattatray S",
    role: "Executive Head",
    description: "Operational excellence leader ensuring quality education delivery across all centers and school projects.",
    image: "/images/dattatray_s.png",
    color: "#E87A5D"
  }
];

// Department heads with images
const departmentHeads = [
  { name: "Roshani", role: "Head IT", image: "/images/roshani.png", icon: Briefcase, color: "#2C7A6E" },
  { name: "Suvarna", role: "Head Admin", image: "/images/suvarna.png", icon: User, color: "#E87A5D" },
  { name: "Anita", role: "Head Training", image: "/images/anita.png", icon: GraduationCap, color: "#2C7A6E" },
  { name: "Kranti", role: "Leader Pune Division", image: "/images/kranti.png", icon: MapPin, color: "#E87A5D" },
  { name: "Harshada", role: "Leader School Project", image: "/images/harshada.png", icon: School, color: "#2C7A6E" },
  { name: "Nutan", role: "Leader School Project", image: "/images/nutan.png", icon: School, color: "#E87A5D" },
  { name: "Pratibha", role: "Leader Dhule Malegaon Division", image: "/images/pratibha.png", icon: MapPin, color: "#2C7A6E" },
  { name: "Ujjwala", role: "Leader Nashik Division Private", image: "/images/ujjwala.png", icon: MapPin, color: "#E87A5D" },
  { name: "Rupali", role: "Leader Chh. Sambhaji Nagar Division", image: "/images/rupali.png", icon: MapPin, color: "#2C7A6E" },
  { name: "Kishori", role: "Leader School Project English Medium", image: "/images/kishori.png", icon: School, color: "#E87A5D" },
  { name: "Mansi", role: "Leader Malegaon Division Private", image: "/images/mansi.png", icon: MapPin, color: "#2C7A6E" }
];

// Complete milestones data with all entries
const milestones = [
  { year: "2007", title: "The Beginning", description: "Started with just 2 students in Malegaon", highlight: "From 2 to 50 students through dedication", icon: Star, color: "#E87A5D" },
  { year: "2009", title: "First Registered Center", description: "First registered Abacus training center", highlight: "Transitioned from small classes to structured educational model", icon: Building2, color: "#2C7A6E" },
  { year: "2010", title: "Expansion Begins", description: "First 3 franchisees & school project", highlight: "Marked the beginning of I-Genius expansion journey", icon: TrendingUp, color: "#E87A5D" },
  { year: "2011-2014", title: "Early Challenges & Learning Phase", description: "Resilience Through Setbacks", highlight: "Expanded network to 7-12 franchisees despite challenges", icon: Shield, color: "#2C7A6E", details: "Faced major challenges due to health issues and franchise setbacks. This phase became a turning point for learning, rebuilding, and strengthening the system." },
  { year: "2015", title: "New Beginning in Nashik", description: "Restart with Strong Determination", highlight: "Relocated to Nashik and restarted classes", icon: MapPin, color: "#E87A5D" },
  { year: "2015", title: "Entry into Institutional Education", description: "MVP School Project Initiated", highlight: "Started pilot project in 1 MVP school", icon: School, color: "#2C7A6E", details: "Successfully completed trial with excellent results. Opened doors for long-term institutional collaboration." },
  { year: "2016", title: "Major Breakthrough", description: "Recognition & Rapid Growth", highlight: "100+ franchisees in Nashik, ISO 9001:2015 Certified", icon: Award, color: "#E87A5D" },
  { year: "2017", title: "Scaling Impact", description: "Reaching Thousands of Students", highlight: "Expanded to 100+ franchisees, Impacted 10,000+ students", icon: Users, color: "#2C7A6E", details: "Through centers and school programs" },
  { year: "2018", title: "National Level Presence", description: "First Mega Competition", highlight: "1st National Level Offline Competition in Thane, Mumbai", icon: Trophy, color: "#E87A5D" },
  { year: "2019", title: "WORLD RECORD", description: "Historic Achievement", highlight: "1000+ students solved 200 math questions in 300 seconds", icon: Medal, color: "#E87A5D", isRecord: true, achievement: "1001 participants • 200 sums • 300 seconds • Same venue under one roof at Nandanvan Lawns, Nashik" },
  { year: "2020", title: "Strong Network Growth", description: "Expanding Presence", highlight: "Reached 200+ franchisees", icon: Globe, color: "#2C7A6E", details: "Strengthened presence across multiple regions" },
  { year: "2021-2022", title: "Pandemic Phase", description: "Resilience & Digital Transformation", highlight: "Successfully navigated COVID-19 challenges", icon: Rocket, color: "#E87A5D", details: "Launched online learning platform, online exam system & student portal" },
  { year: "2023", title: "Major Recognition", description: "Excellence & Achievement", highlight: "400+ franchisees, 80,000+ students", icon: Award, color: "#2C7A6E", details: "Received 'One of the Best Abacus Academy' Award" },
  { year: "2024", title: "National to International Growth", description: "Global Expansion Begins", highlight: "530+ franchisees, 1,30,000+ students", icon: Globe, color: "#E87A5D", details: "Initiated International Expansion, Received Best Abacus Academy Award (2nd time)" },
  { year: "2025", title: "Continued Leadership", description: "Continued Leadership & Social Impact", highlight: "650+ franchisees, 1,70,000+ students", icon: Trophy, color: "#2C7A6E", details: "Launched Zilla Parishad school pilot project across 20+ villages. Awarded Best Abacus Academy (3rd time)" },
  { year: "2025-26", title: "WORLD RECORD", description: "New Heights & Historic Achievement", highlight: "1000+ ZP school students solved 100 math questions in 10 minutes", icon: Medal, color: "#E87A5D", isRecord: true, achievement: "1000+ students • 100 sums • 10 minutes • Achieved in presence of Dadaji Bhuse" },
  { year: "2026", title: "New Heights", description: "Continued Growth", highlight: "750+ franchisees, 2,10,000+ students", icon: Star, color: "#2C7A6E", details: "Honored with Best Abacus Academy Award (4th time)" }
];

// Certificates data
const certificates = [
  {
    title: "Certificate of Incorporation",
    description: "Certificate of Incorporation pursuant to Companies Act, 2013",
    fileUrl: "/certificates/I-Genius Abacus Academy India Pvt.Ltd_ Certificate of Incorporation Pursuant.pdf",
    icon: FileText,
    color: "#E87A5D"
  },
  {
    title: "ISO 9001:2015 Certificate",
    description: "ISO 9001:2015 Certified Company",
    fileUrl: "/certificates/ISO CERTIFICATE_ I-GENIUS ABACUS ACADEMY INDIA PVT.LTD.pdf",
    icon: BadgeCheck,
    color: "#2C7A6E"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">

      {/* ========== HERO SECTION - Legacy Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">

        {/* Doodles - Celebrating our legacy */}
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

        {/* Floating beads - representing years of journey */}
        <div className="absolute top-[30%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[94%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>

        {/* Celebration confetti for our achievements */}
        <div className="absolute top-[10%] right-[2%] w-40 h-40 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
                <Sparkles className="w-5 h-5 text-[#E87A5D]" />
                <span className="text-white text-base font-body">Since 2007 | 18+ Years of Excellence</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
                Pioneers in{" "}
                <span className="text-[#E87A5D] relative inline-block">
                  Abacus Education
                  <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                    <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-[#C4D6C4] text-xl leading-relaxed mb-6 font-body">
                I-Genius Abacus Academy is recognized as <span className="text-[#E87A5D] font-semibold">"One of The Best Abacus Institutes in Maharashtra"</span> and authorised by Educational Board of Vocational Training & Research Mumbai (Regd. by Govt. of India).
              </p>
              <p className="text-[#C4D6C4] text-lg leading-relaxed mb-8 font-body">
                With a strong commitment to excellence and a passion for education, we have been transforming young minds since 2007. Our journey from a small classroom in Malegaon to a global educational network is a testament to our dedication and innovative approach to brain development.
              </p>
            </div>

            {/* Right Side - Video */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-media bg-gradient-to-br from-[#E87A5D]/20 to-[#2C7A6E]/20 p-4 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-video rounded-media overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/bnIGi72dg4A?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1"
                    title="I-Genius Abacus Academy Introduction"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY SECTION ========== */}
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
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Our Story
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              From a Dream to a{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Movement
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-3xl mx-auto font-body leading-relaxed">
              What started as a small initiative in 2007 has grown into one of India's most trusted abacus education networks. Our journey is marked by perseverance, innovation, and an unwavering commitment to unlocking every child's potential.
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
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Our Mission</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">To provide high-quality, accessible, and effective abacus training to grassroots students, regardless of their background or socioeconomic status.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#2C7A6E]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-[#2C7A6E]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Our Vision</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">To empower grassroots students with valuable skills and knowledge of abacus calculation, enabling them to excel academically and thrive in today's competitive world.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-[#E87A5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Our Philosophy</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">Every child has a genius within. Our role is to provide the right tools, guidance, and environment to help that genius shine through brain development and skill enhancement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="no-card bg-gradient-to-br from-[#F8F6F0] to-[#FEFCF5] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Medal className="w-12 h-12 text-[#E87A5D]" />
                  <div>
                    <div className="text-3xl font-heading font-bold text-[#1A2A3A]">2 World Records</div>
                    <div className="text-[#1A2A3A] text-base font-body">Wonder Book of International London</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#E87A5D] pl-4 hover:bg-[#E87A5D]/5 transition-colors rounded-r-lg">
                    <p className="text-[#1A2A3A] text-lg font-body font-semibold">2019: 1001 participants solved 200 arithmetic sums in 300 seconds</p>
                    <p className="text-[#1A2A3A] text-base font-body">Same venue under one roof at Nandanvan Lawns, Nashik</p>
                  </div>
                  <div className="border-l-4 border-[#2C7A6E] pl-4 hover:bg-[#2C7A6E]/5 transition-colors rounded-r-lg">
                    <p className="text-[#1A2A3A] text-lg font-body font-semibold">2025-26: 1000+ ZP school students solved 100 math questions in 10 minutes</p>
                    <p className="text-[#1A2A3A] text-base font-body">Zilla Parishad pilot project in presence of Dadaji Bhuse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== JOURNEY HIGHLIGHTS - Stats Bar ========== */}
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
            <div className="stat-item group"><div className="stat-number text-4xl sm:text-5xl">18+</div><div className="stat-label text-base font-medium">Years of Excellence</div></div>
            <div className="stat-item group"><div className="stat-number text-4xl sm:text-5xl">750+</div><div className="stat-label text-base font-medium">Franchise Network</div></div>
            <div className="stat-item group"><div className="stat-number text-4xl sm:text-5xl">2.1L+</div><div className="stat-label text-base font-medium">Students Empowered</div></div>
            <div className="stat-item group"><div className="stat-number text-4xl sm:text-5xl">165+</div><div className="stat-label text-base font-medium">School Partners</div></div>
            <div className="stat-item group"><div className="stat-number text-4xl sm:text-5xl">2</div><div className="stat-label text-base font-medium">World Records</div></div>
          </div>
        </div>
      </section>

      {/* ========== TIMELINE / FLOWCHART SECTION ========== */}
      <section className="section-container section-bg-cream overflow-x-hidden">

        <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
          <AbacusBeadsDoodle />
        </div>

        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
          <MathFlowDoodle />
        </div>

        {/* Celebration confetti for milestones */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <StaticConfetti density="low" />
        </div>

        <div className="content-container overflow-x-hidden">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Key{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Milestones
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-lg sm:text-xl max-w-2xl mx-auto font-body">Tracing our path of growth, innovation, and impact</p>
          </div>

          {/* Mobile-First Timeline Flowchart */}
          <div className="relative max-w-5xl mx-auto">

            {/* Vertical Line - Left side on mobile, center on desktop */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#E87A5D] via-[#2C7A6E] to-[#E87A5D] transform sm:-translate-x-1/2"></div>

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={`${milestone.year}-${index}`}
                  className={`relative flex mb-12 sm:mb-16 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 sm:top-auto sm:translate-y-0 z-10">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#E87A5D] to-[#D95D39] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] pl-14 sm:pl-0">
                    <div className={`no-card bg-[#F8F6F0] rounded-2xl p-4 sm:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${milestone.isRecord ? 'ring-2 ring-[#E87A5D] ring-opacity-50' : ''
                      }`}>
                      {/* Year and Title */}
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xl sm:text-4xl font-stats font-bold text-[#E87A5D]">{milestone.year}</span>
                          <span className="hidden sm:block w-10 h-px bg-[#C4D6C4]"></span>
                          <h3 className="text-base sm:text-2xl font-heading font-bold text-[#1A2A3A]">{milestone.title}</h3>
                        </div>
                        <div className="block sm:hidden w-8 h-px bg-[#C4D6C4] mt-1"></div>
                      </div>

                      <p className="text-sm sm:text-xl font-body font-semibold text-[#1A2A3A] mb-1 sm:mb-2 break-words">{milestone.description}</p>
                      <p className="text-xs sm:text-base font-body text-[#1A2A3A] break-words">{milestone.highlight}</p>

                      {milestone.details && (
                        <p className="text-xs sm:text-sm font-body text-[#1A2A3A] mt-2 break-words">{milestone.details}</p>
                      )}

                      {milestone.achievement && (
                        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-[#C4D6C4]/30">
                          <p className="text-xs sm:text-sm font-body font-semibold text-[#E87A5D] break-words">{milestone.achievement}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End node */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 bottom-0 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#E87A5D] shadow-lg animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATES SECTION ========== */}
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
                Certifications
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Credentials
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Recognized and certified by national and international authorities</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {certificates.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <a
                  key={idx}
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group no-card w-full sm:w-[280px] bg-white rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E87A5D]/10 to-[#2C7A6E]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-10 h-10" style={{ color: cert.color }} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#1A2A3A] mb-2">{cert.title}</h3>
                  <p className="text-[#1A2A3A] text-sm font-body mb-4">{cert.description}</p>
                  <div className="inline-flex items-center gap-2 text-[#E87A5D] text-sm font-body font-semibold group-hover:gap-3 transition-all duration-300">
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Recognition Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 text-[#2C7A6E]" />
              <span className="text-[#1A2A3A] text-sm font-body">Govt. Authorised by EBVTR</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
              <Medal className="w-5 h-5 text-[#E87A5D]" />
              <span className="text-[#1A2A3A] text-sm font-body">Wonder Book Record Holder</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
              <Award className="w-5 h-5 text-[#2C7A6E]" />
              <span className="text-[#1A2A3A] text-sm font-body">4x Best Abacus Academy Award</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP TEAM SECTION ========== */}
      <section className="section-container section-bg-cream">

        <div className="absolute top-20 right-10 opacity-10 hover:opacity-20 transition-opacity duration-700">
          <AbacusBeadsDoodle />
        </div>

        <div className="absolute bottom-10 left-10 opacity-10">
          <MathFlowDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Leadership
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Meet Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Leaders
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">The visionaries driving I-Genius forward</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="text-center w-[300px] group">
                <div className="team-image w-36 h-36 mx-auto mb-4 ring-4 ring-white shadow-lg group-hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full bg-[#F8F6F0] flex items-center justify-center">
                    {leader.image ? (
                      <Image src={leader.image} alt={leader.name} width={144} height={144} className="object-cover w-full h-full" />
                    ) : (
                      <User className="w-16 h-16" style={{ color: leader.color }} />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-1 group-hover:text-[#E87A5D] transition-colors">{leader.name}</h3>
                <p className="text-[#E87A5D] text-base font-body font-semibold mb-2">{leader.role}</p>
                <p className="text-[#1A2A3A] text-sm font-body leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DEPARTMENT HEADS SECTION ========== */}
      <section className="section-container section-bg-soft">

        <div className="absolute top-0 left-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="absolute bottom-10 right-10 opacity-15 hover:opacity-25 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#1A2A3A] mb-5">
              Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Department Heads
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Dedicated professionals driving excellence across divisions</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {departmentHeads.map((head, idx) => {
              const Icon = head.icon;
              return (
                <div key={idx} className="text-center w-[200px] group">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#E87A5D]/20 to-[#2C7A6E]/20 flex items-center justify-center mb-3 overflow-hidden ring-2 ring-white shadow-md group-hover:scale-105 transition-all duration-300">
                    {head.image ? (
                      <Image src={head.image} alt={head.name} width={96} height={96} className="object-cover w-full h-full" />
                    ) : (
                      <Icon className="w-10 h-10" style={{ color: head.color }} />
                    )}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#1A2A3A] mb-1 group-hover:text-[#E87A5D] transition-colors">{head.name}</h3>
                  <p className="text-[#E87A5D] text-xs font-body font-medium">{head.role}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
              <Users className="w-5 h-5 text-[#E87A5D]" />
              <span className="text-[#1A2A3A] text-base font-body font-medium">50+ qualified and trained teaching staff</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Join Our Legacy ========== */}
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
              Be Part of Our Success Story
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Join over 2,10,000 students who have discovered their genius with I-Genius
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