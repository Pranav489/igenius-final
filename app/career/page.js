import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Users,
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  Heart,
  Mail,
  Phone,
  CheckCircle,
  ChevronRight
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

export const metadata = buildMetadata("career");

const openPositions = [
  {
    id: 1,
    title: "Abacus Trainer",
    department: "Academics",
    location: "Nashik",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹15,000 - ₹25,000/month",
    description: "We are looking for passionate trainers to teach abacus and brain development programs to children aged 5-14 years.",
    requirements: [
      "Graduate in any discipline",
      "Good communication skills",
      "Patience and love for teaching children",
      "No prior abacus knowledge required (training provided)"
    ]
  },
  {
    id: 2,
    title: "Senior Abacus Trainer",
    department: "Academics",
    location: "Nashik",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹25,000 - ₹35,000/month",
    description: "Experienced abacus trainer to lead training programs and mentor junior trainers.",
    requirements: [
      "Minimum 2 years of abacus teaching experience",
      "Leadership skills",
      "Excellent communication",
      "Ability to handle multiple batches"
    ]
  },
  {
    id: 3,
    title: "Franchise Support Executive",
    department: "Operations",
    location: "Nashik",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹20,000 - ₹30,000/month",
    description: "Support our franchise partners across India with operations, training coordination, and query resolution.",
    requirements: [
      "Graduate in any discipline",
      "Good communication and interpersonal skills",
      "Basic computer knowledge",
      "Problem-solving attitude"
    ]
  },
  {
    id: 4,
    title: "Marketing Executive",
    department: "Marketing",
    location: "Nashik",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹20,000 - ₹35,000/month",
    description: "Handle digital marketing, social media, and promotional activities for I-Genius brand.",
    requirements: [
      "Degree in Marketing/Communications",
      "Experience with social media management",
      "Content writing skills",
      "Basic graphic design knowledge preferred"
    ]
  },
  {
    id: 5,
    title: "Customer Support Executive",
    department: "Customer Support",
    location: "Nashik",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹12,000 - ₹20,000/month",
    description: "Handle parent inquiries, course information, and enrollment coordination.",
    requirements: [
      "Graduate in any discipline",
      "Excellent communication skills",
      "Patient and helpful attitude",
      "Basic computer knowledge"
    ]
  },
  {
    id: 6,
    title: "Business Development Executive",
    department: "Sales",
    location: "Nashik",
    type: "Full-time",
    experience: "1-4 years",
    salary: "₹20,000 - ₹40,000/month + Incentives",
    description: "Identify and onboard new franchise partners, expand I-Genius network.",
    requirements: [
      "Graduate in any discipline",
      "Sales experience preferred",
      "Excellent negotiation skills",
      "Willingness to travel"
    ]
  }
];

const perks = [
  { icon: Heart, title: "Supportive Environment", description: "Work with a team that values growth and collaboration" },
  { icon: GraduationCap, title: "Training Provided", description: "Complete training for all roles, no prior abacus knowledge needed" },
  { icon: Clock, title: "Work-Life Balance", description: "Flexible working hours and supportive management" },
  { icon: Users, title: "Growth Opportunities", description: "Fast career growth in expanding organization" }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">

      {/* ========== HERO SECTION ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">

        {/* Career-themed doodle placement */}
        <div className="absolute top-[10%] left-[8%] opacity-30 rotate-12 hover:rotate-0 transition-transform duration-1000">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-[20%] right-[5%] opacity-25 -rotate-6 hover:rotate-0 transition-transform duration-1000">
          <AbacusBeadsDoodle />
        </div>
        <div className="absolute top-[30%] right-[15%] opacity-20 animate-pulse">
          <MathFlowDoodle />
        </div>
        <div className="absolute bottom-[35%] left-[12%] opacity-15 hover:scale-110 transition-transform duration-700">
          <NeuralPathDoodle />
        </div>
        <div className="absolute top-[50%] left-[3%] opacity-40">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[65%] right-[8%] opacity-30">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[15%] left-[85%] opacity-25">
          <SingleBeadDoodle />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <Briefcase className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base font-body">Join Our Team</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
            Build Your{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Career
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl max-w-2xl mx-auto font-body">
            Join India's fastest-growing abacus education network and make a difference in children's lives
          </p>
        </div>
      </section>

      {/* ========== WHY WORK WITH US SECTION ========== */}
      <section className="section-container section-bg-cream">

        <div className="absolute top-0 left-0 opacity-15 rotate-180">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
          <WaveSeparator />
        </div>
        <div className="absolute top-[15%] right-[5%] opacity-20 hover:opacity-40 transition-opacity">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[20%] left-[8%] opacity-25 hover:opacity-45 transition-opacity">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[40%] left-[2%] opacity-15">
          <AbacusBeadsDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Why Join I-Genius
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              A Workplace That{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Cares
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              We believe in nurturing our employees just as we nurture young minds
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="text-center w-[220px] group">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E87A5D]/10 to-[#2C7A6E]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-all">
                    <Icon className="w-10 h-10 text-[#E87A5D]" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">{perk.title}</h3>
                  <p className="text-[#1A2A3A] text-base font-body">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== OPEN POSITIONS SECTION ========== */}
      <section className="section-container section-bg-soft">

        <div className="absolute top-[5%] right-[3%] opacity-20 hover:opacity-40 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-[10%] left-[2%] opacity-15 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        <div className="absolute top-[25%] left-[95%] opacity-30">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[40%] right-[90%] opacity-20">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[70%] left-[85%] opacity-25">
          <SingleBeadDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                Current Openings
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Join Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Team
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              6+ exciting opportunities waiting for you
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <div key={position.id} className="no-card bg-white rounded-2xl p-6 transition-all hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-[#1A2A3A] text-base font-body">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {position.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {position.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {position.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#E87A5D] text-xl font-heading font-bold">{position.salary}</div>
                    <div className="text-[#1A2A3A] text-sm font-body">Experience: {position.experience}</div>
                  </div>
                </div>

                <p className="text-[#1A2A3A] text-lg font-body mb-4">{position.description}</p>

                <div className="mb-4">
                  <h4 className="text-[#1A2A3A] font-heading font-semibold text-base mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#1A2A3A] text-base font-body">
                        <CheckCircle className="w-4 h-4 text-[#E87A5D]" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#E87A5D] font-body font-semibold text-base hover:gap-3 transition-all"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW TO APPLY SECTION ========== */}
      <section className="section-container section-bg-cream">

        <div className="absolute top-[5%] left-[10%] w-32 h-32">
          <StaticConfetti density="low" />
        </div>
        <div className="absolute top-0 left-0 opacity-10">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-[15%] right-[3%] opacity-20 rotate-12">
          <AbacusBeadsDoodle />
        </div>
        <div className="absolute top-[30%] right-[2%] opacity-15">
          <ConstellationDoodle />
        </div>
        <div className="absolute top-[20%] left-[95%] opacity-30">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[30%] left-[90%] opacity-20">
          <SingleBeadDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                How to Apply
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Ready to{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Join Us?
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              Follow these simple steps to start your journey with I-Genius
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="text-center w-[220px] group">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E87A5D] text-white flex items-center justify-center text-2xl font-heading font-bold mb-4 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Send Your Resume</h3>
              <p className="text-[#1A2A3A] text-base font-body">Email your CV to careers@igenius.com</p>
            </div>
            <div className="text-center w-[220px] group">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E87A5D] text-white flex items-center justify-center text-2xl font-heading font-bold mb-4 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Initial Screening</h3>
              <p className="text-[#1A2A3A] text-base font-body">Our team will review your application</p>
            </div>
            <div className="text-center w-[220px] group">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E87A5D] text-white flex items-center justify-center text-2xl font-heading font-bold mb-4 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Interview</h3>
              <p className="text-[#1A2A3A] text-base font-body">Personal or virtual interview round</p>
            </div>
            <div className="text-center w-[220px] group">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E87A5D] text-white flex items-center justify-center text-2xl font-heading font-bold mb-4 group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Onboarding</h3>
              <p className="text-[#1A2A3A] text-base font-body">Welcome to the I-Genius family!</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex flex-wrap justify-center gap-4">
              <a
                href="mailto:careers@igenius.com"
                className="bg-[#E87A5D] text-white font-heading font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#D95D39] transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                careers@igenius.com
              </a>
              <a
                href="tel:+917770045402"
                className="border-2 border-[#E87A5D] text-[#E87A5D] font-heading font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#E87A5D] hover:text-white transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +91 77700 45402
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">

        <div className="absolute top-0 left-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-0 right-0 opacity-15">
          <WaveSeparator />
        </div>
        <div className="absolute top-[15%] left-[5%] opacity-25 animate-bounce">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[25%] right-[8%] opacity-30 animate-bounce delay-150">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[30%] left-[10%] opacity-20 animate-bounce delay-300">
          <AbacusBeadsDoodle />
        </div>
        <div className="absolute bottom-[20%] right-[5%] opacity-25 hover:scale-110 transition-transform">
          <ConstellationDoodle />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-30">
          <StaticConfetti density="medium" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            We're always looking for talented individuals. Send us your resume and we'll reach out when a position matches your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="mailto:careers@igenius.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300"
            >
              Send Your Resume <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}