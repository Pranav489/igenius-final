import Link from "next/link";
import { 
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send
} from "lucide-react";
import SocialMedia from "@/components/contact/SocialMedia";
// Update the import section in your contact page
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

export const metadata = buildMetadata("contact");

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Office No. 7/8/9, 2nd Floor Silver Plaza,",
      "Opp. BSNL Office, Canada Corner,",
      "Sharanpur Road, Nashik - 422002",
      "Maharashtra, India"
    ],
    color: "#E87A5D"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 77700 45402", "+91 77700 45403"],
    color: "#2C7A6E",
    isLink: true
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info.igeniusnsk@gmail.com", "careers@igenius.com"],
    color: "#E87A5D",
    isLink: true
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed"
    ],
    color: "#2C7A6E"
  }
];

export default function ContactPage() {
  const officeLat = 20.0059;
  const officeLng = 73.7897;

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles */}
        <div className="absolute top-5 left-5 opacity-30">
          <ConstellationDoodle />
        </div>
        <div className="absolute top-10 right-5 opacity-20">
          <NeuralPathDoodle />
        </div>
        <div className="absolute bottom-20 left-5 opacity-20">
          <MathFlowDoodle />
        </div>
        <div className="absolute bottom-10 right-5 opacity-25">
          <AbacusBeadsDoodle />
        </div>
        
        {/* Decorative elements with animation classes */}
        <div className="absolute top-1/3 right-[10%] w-[30px] h-[30px] pointer-events-none z-0 animate-spin-slow opacity-30">
          <svg viewBox="0 0 30 30" fill="none">
            <path d="M15 2 L17 13 L28 15 L17 17 L15 28 L13 17 L2 15 L13 13 Z" fill="#E87A5D"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-[8%] w-[40px] h-[40px] pointer-events-none z-0 animate-gentle-float opacity-20">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="15" stroke="#A8C3B8" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <Mail className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base font-body">Get in Touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
            Contact{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Us
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl max-w-2xl mx-auto font-body">
            Have questions? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* ========== CONTACT INFO SECTION ========== */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-[#FEFCF5]">
        
        <div className="absolute top-20 right-10 opacity-15">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-10 left-10">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-0 left-0 opacity-10">
          <WaveSeparator />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E87A5D]/10 to-[#2C7A6E]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-all">
                    <Icon className="w-10 h-10" style={{ color: info.color }} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, dIdx) => (
                      info.isLink && dIdx === 0 ? (
                        <a key={dIdx} href={`tel:${detail.replace(/\s/g, '')}`} className="block text-[#1A2A3A] text-lg font-body hover:text-[#E87A5D] transition-colors">
                          {detail}
                        </a>
                      ) : info.isLink && dIdx === 1 ? (
                        <a key={dIdx} href={`mailto:${detail}`} className="block text-[#1A2A3A] text-lg font-body hover:text-[#E87A5D] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        <p key={dIdx} className="text-[#1A2A3A] text-lg font-body">{detail}</p>
                      )
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM & MAP SECTION ========== */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-[#F8F6F0]">
        
        <div className="absolute top-0 left-0 opacity-15">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10">
          <AbacusBeadsDoodle />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="no-card bg-white rounded-2xl p-8">
                <h2 className="text-3xl font-heading font-bold text-[#1A2A3A] mb-2">Send us a Message</h2>
                <p className="text-[#1A2A3A] text-lg font-body mb-6">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#1A2A3A] text-base font-body font-medium mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="w-full px-5 py-3 rounded-full border border-[#C4D6C4]/50 bg-[#FEFCF5] text-[#1A2A3A] text-base font-body focus:outline-none focus:border-[#E87A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A2A3A] text-base font-body font-medium mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-5 py-3 rounded-full border border-[#C4D6C4]/50 bg-[#FEFCF5] text-[#1A2A3A] text-base font-body focus:outline-none focus:border-[#E87A5D] transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#1A2A3A] text-base font-body font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number"
                        className="w-full px-5 py-3 rounded-full border border-[#C4D6C4]/50 bg-[#FEFCF5] text-[#1A2A3A] text-base font-body focus:outline-none focus:border-[#E87A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A2A3A] text-base font-body font-medium mb-2">Subject *</label>
                      <select className="w-full px-5 py-3 rounded-full border border-[#C4D6C4]/50 bg-[#FEFCF5] text-[#1A2A3A] text-base font-body focus:outline-none focus:border-[#E87A5D] transition-colors">
                        <option>Select Subject</option>
                        <option>Course Inquiry</option>
                        <option>Franchise Inquiry</option>
                        <option>School Project</option>
                        <option>Careers</option>
                        <option>General Query</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#1A2A3A] text-base font-body font-medium mb-2">Message *</label>
                    <textarea 
                      rows="5"
                      placeholder="Write your message here..."
                      className="w-full px-5 py-3 rounded-2xl border border-[#C4D6C4]/50 bg-[#FEFCF5] text-[#1A2A3A] text-base font-body focus:outline-none focus:border-[#E87A5D] transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 text-lg px-8 py-3"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="w-full lg:w-1/2">
              <div className="no-card bg-white rounded-2xl p-8 h-full">
                <h2 className="text-3xl font-heading font-bold text-[#1A2A3A] mb-2">Find Us Here</h2>
                <p className="text-[#1A2A3A] text-lg font-body mb-6">Visit our corporate office in Nashik</p>
                
                <div className="rounded-media bg-[#F8F6F0] h-[400px] w-full">
                  <iframe
                    title="I-Genius Abacus Academy Office Location"
                    className="w-full h-full"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps?q=${officeLat},${officeLng}&hl=en&z=16&output=embed`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-[#F8F6F0] rounded-xl">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#E87A5D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#1A2A3A] font-body font-medium text-base">Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner, Sharanpur Road, Nashik - 422002</p>
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${officeLat},${officeLng}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#E87A5D] text-sm font-body mt-2 hover:gap-2 transition-all"
                      >
                        Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOCIAL MEDIA SECTION ========== */}
      <section className="section-container section-bg-cream">
        
        <div className="absolute top-20 left-10 opacity-15">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-10 right-10">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-0 left-0 opacity-10 rotate-180">
          <WaveSeparator />
        </div>

        {/* Static Confetti for celebration feel */}
        <StaticConfetti density="low" />

        <div className="content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
              Connect With Us
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
            Follow Us on{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Social Media
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body mb-10">
            Stay updated with the latest news, events, and student achievements
          </p>

          <SocialMedia />
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="section-container section-bg-soft">
        
        <div className="absolute top-0 left-0 opacity-15">
          <WaveSeparator />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <ConstellationDoodle />
        </div>

        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20">
                FAQs
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Frequently Asked{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Questions
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">Find quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="no-card bg-white rounded-xl p-6">
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">What are the course fees?</h3>
              <p className="text-[#1A2A3A] text-lg font-body">Course fees vary by program. Please contact us for detailed pricing information based on your child's age and course selection.</p>
            </div>
            <div className="no-card bg-white rounded-xl p-6">
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Do you offer online classes?</h3>
              <p className="text-[#1A2A3A] text-lg font-body">Yes, we offer both online and offline classes. Students can choose based on their convenience and learning preference.</p>
            </div>
            <div className="no-card bg-white rounded-xl p-6">
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Is there a demo class available?</h3>
              <p className="text-[#1A2A3A] text-lg font-body">Yes, we offer free demo classes. Contact us to schedule a demo at your convenience.</p>
            </div>
            <div className="no-card bg-white rounded-xl p-6">
              <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">How can I become a franchise partner?</h3>
              <p className="text-[#1A2A3A] text-lg font-body">Please visit our Franchise page or contact us directly. Our team will guide you through the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        <div className="absolute top-0 left-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        <div className="absolute top-10 left-10 opacity-20">
          <AbacusBeadsDoodle />
        </div>
        <div className="absolute bottom-10 right-10">
          <SingleBeadDoodle />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Book a free demo class or inquiry about our programs today
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:+917770045402" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a href="mailto:info.igeniusnsk@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}