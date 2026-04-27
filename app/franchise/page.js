import Link from "next/link";
import { 
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Calendar,
  Shield,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Globe,
  GraduationCap,
  Trophy,
  Building,
  MapPin,
  Search,
  DollarSign,
  Heart,
  Phone,
  Quote
} from "lucide-react";
import FranchiseMap from "@/components/franchise/FranchiseMap";
import FranchiseSearchForm from "@/components/franchise/FranchiseSearchForm";
import FranchiseTestimonials from "@/components/franchise/FranchiseTestimonials";
import FranchiseVideos from "@/components/franchise/FranchiseVideos";
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

export const metadata = buildMetadata("franchise");

export default function FranchisePage() {
  const benefits = [
    "EARN RS. 25,000 TO 30,000+ PER MONTH - You can earn more than Rs. 50,000 per month with our 4-dimensional earning opportunities",
    "WORK WITH GOVT. AUTHORISED - I-Genius authorized and accredited by Educational Board of vocational Training & Research (Reg. With Govt. of India)",
    "TEACH ANYTIME FROM ANYWHERE - You can teach at anytime from anywhere as per your convenience with online classes option",
    "NO EXPERIENCE REQUIRED - I-Genius provides excellent training support to make you an Expert Abacus Trainer",
    "NO HASSLES IN MANAGING YOUR INSTITUTE - The inbuilt systems in the ERP ensures automated management",
    "BEST EDUCATIONAL MODULES - Home-based business model with good returns"
  ];

  const stats = [
    { value: "750+", label: "Franchisees", icon: Building, color: "#E87A5D" },
    { value: "1.5L+", label: "Students Trained", icon: Users, color: "#2C7A6E" },
    { value: "18+", label: "Years of Excellence", icon: Trophy, color: "#E87A5D" },
    { value: "50+", label: "Qualified Trainers", icon: GraduationCap, color: "#2C7A6E" }
  ];

  const franchiseModels = [
    {
      title: "Master Franchise",
      description: "For all states of India. Complete rights to sub-franchise across the state.",
      features: ["State-wide rights", "Sub-franchise opportunity", "Higher earning potential", "Complete training support"],
      icon: Globe,
      color: "#E87A5D",
      investment: "15-20 Lakhs"
    },
    {
      title: "Unit Franchise",
      description: "For particular city area. Run your own abacus center with full support.",
      features: ["City/Area rights", "Low investment", "Complete training", "Marketing support"],
      icon: MapPin,
      color: "#2C7A6E",
      investment: "1-3 Lakhs"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Growth/Prosperity Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Creative Doodles - Wealth/Growth symbols */}
        <div className="absolute top-[10%] left-[4%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <AbacusBeadsDoodle />
        </div>

        <div className="absolute top-[20%] right-[3%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>

        <div className="absolute bottom-[15%] left-[5%] opacity-25 hover:scale-105 transition-transform duration-500">
          <MathFlowDoodle />
        </div>

        <div className="absolute bottom-[25%] right-[6%] opacity-20">
          <NeuralPathDoodle />
        </div>
        
        {/* Floating beads - representing opportunities */}
        <div className="absolute top-[30%] left-[2%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-30 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[95%] opacity-25 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[45%] left-[90%] opacity-20 animate-gentle-float delay-1500">
          <SingleBeadDoodle />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <Sparkles className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base font-body">Join India's Fastest Growing Abacus Network</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
            Start Your{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Abacus Franchise
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl leading-relaxed mb-6 font-body max-w-3xl mx-auto">
            I-Genius Abacus Academy offers an excellent and profitable business opportunity for educated women, dynamic housewives, tuition teachers who are willing to work for the betterment of their family and society.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-5 py-2">
            <Award className="w-4 h-4 text-[#E87A5D]" />
            <span className="text-[#C4D6C4] text-sm font-body">ISO 9001-2015 Certified | Govt. Authorised</span>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#E87A5D]/5 to-[#2C7A6E]/5">
        <div className="absolute top-0 left-0 opacity-10">
          <WaveSeparator />
        </div>
        
        {/* Floating celebration confetti */}
        <div className="absolute top-0 right-0 opacity-30">
          <StaticConfetti density="low" />
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
                  <div className="stat-label text-lg font-body font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== ABOUT FRANCHISE SECTION ========== */}
      <section className="section-container section-bg-cream">
        <div className="absolute top-20 right-10 opacity-15 hover:opacity-25 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-10 left-10">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-0 left-0 opacity-10 rotate-180">
          <WaveSeparator />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                About Franchise
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              A Profitable{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Business Opportunity
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-3xl mx-auto font-body leading-relaxed">
              I-Genius franchise concept involves a low monetary investment and provides extreme gains and benefits to the franchise owner. With over 18 years of experience, we are your first choice when looking to work with children.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-6 h-6 text-[#E87A5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Low Investment, High Returns</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">Minimal initial investment with potential to earn ₹25,000-50,000+ per month through our 4-dimensional earning opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#2C7A6E]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-[#2C7A6E]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Established Brand</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">Partner with a brand that has 750+ franchisees, 1.5 lakh+ students, and 18+ years of excellence in abacus education.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-[#E87A5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-[#1A2A3A] mb-2">Social Impact</h3>
                    <p className="text-[#1A2A3A] text-lg font-body leading-relaxed">Contribute to children's brain development while building a successful business that makes a difference in society.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="no-card bg-gradient-to-br from-[#F8F6F0] to-[#FEFCF5] rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Trophy className="w-12 h-12 text-[#E87A5D]" />
                  <div>
                    <div className="text-3xl font-heading font-bold text-[#1A2A3A]">Why I-Genius?</div>
                    <div className="text-[#1A2A3A] text-base font-body">The most trusted abacus franchise in India</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#E87A5D]" /><span className="text-[#1A2A3A] font-body">Complete training and support provided</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#E87A5D]" /><span className="text-[#1A2A3A] font-body">Online & offline class options</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#E87A5D]" /><span className="text-[#1A2A3A] font-body">ERP system for automated management</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#E87A5D]" /><span className="text-[#1A2A3A] font-body">National & international competitions</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#E87A5D]" /><span className="text-[#1A2A3A] font-body">Govt. authorised & ISO certified</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FRANCHISE MODELS SECTION ========== */}
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
                Franchise Models
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Choose Your{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Path
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Select the franchise model that suits your goals and investment capacity</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {franchiseModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <div key={idx} className="w-full sm:w-[350px] text-center group">
                  <div className="no-card bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E87A5D]/10 to-[#2C7A6E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-10 h-10" style={{ color: model.color }} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-2">{model.title}</h3>
                    <p className="text-[#E87A5D] text-lg font-body font-semibold mb-3">{model.investment}</p>
                    <p className="text-[#1A2A3A] text-base font-body mb-4">{model.description}</p>
                    <div className="space-y-2 text-left">
                      {model.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#E87A5D]" />
                          <span className="text-[#1A2A3A] text-base font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY BECOME FRANCHISEE SECTION ========== */}
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
                Why Join Us
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Why Become a{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Franchisee?
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Benefits that make I-Genius the most trusted abacus franchise in India</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#F8F6F0] rounded-full px-6 py-3.5 hover:bg-[#E87A5D]/5 transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-6 h-6 text-[#E87A5D] flex-shrink-0" />
                <span className="text-[#1A2A3A] text-base font-body">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FIND CENTERS SECTION ========== */}
      <section className="section-container section-bg-soft">
        <div className="absolute top-0 left-0 opacity-15">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-10 right-10 opacity-15 hover:opacity-25 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        <div className="absolute top-20 left-10 opacity-10">
          <MathFlowDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Find a Center
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Find I-Genius{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Near You
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Explore all I-Genius franchise centers across India on the map</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E87A5D] group-hover:scale-110 transition-transform" />
                Center Locations
              </h3>
              <FranchiseMap />
            </div>

            <div className="group">
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#E87A5D] group-hover:scale-110 transition-transform" />
                Search by Location
              </h3>
              <FranchiseSearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========== FRANCHISE TESTIMONIALS SECTION ========== */}
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
                Franchisee Stories
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              What Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Franchisees Say
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Hear from our successful franchise partners across India</p>
          </div>

          <FranchiseTestimonials />
        </div>
      </section>

      {/* ========== FRANCHISE VIDEOS SECTION ========== */}
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
                Watch Now
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Franchise in{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Action
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Watch success stories, training sessions, and student performances</p>
          </div>

          <FranchiseVideos />
        </div>
      </section>

      {/* ========== CTA SECTION - Celebration Finale ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        
        {/* Wave separators */}
        <div className="absolute top-0 left-0 right-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>
        
        {/* Dancing celebration elements */}
        <div className="absolute top-[10%] left-[5%] opacity-25 hover:scale-110 transition-transform duration-500 animate-gentle-float">
          <AbacusBeadsDoodle />
        </div>
        <div className="absolute bottom-[15%] right-[8%] opacity-30 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[40%] right-[3%] opacity-25 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti rain - celebration finale */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <StaticConfetti density="medium" />
        </div>
        
        {/* Constellation of success */}
        <div className="absolute bottom-[20%] left-[8%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        <div className="relative z-10 content-container text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Start Your Franchise Journey?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Join the I-Genius family and build a successful business while making a difference in children's lives
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+917770045402" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Call for Inquiry <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6 font-body">Limited franchise opportunities available. Apply today!</p>
        </div>
      </section>
    </main>
  );
}