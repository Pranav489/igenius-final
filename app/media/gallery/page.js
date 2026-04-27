import Link from "next/link";
import Image from "next/image";
import { 
  Calendar,
  MapPin,
  Users,
  Trophy,
  Sparkles,
  Camera,
  ChevronRight,
  ArrowRight
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

export const metadata = buildMetadata("mediaGallery");

// Events data
const events = [
  {
    id: 1,
    slug: "national-abacus-competition-2025",
    title: "National Abacus Competition 2025",
    description: "Students from across India participated in this mega competition showcasing exceptional mental math skills.",
    date: "March 15, 2025",
    location: "Mumbai, Maharashtra",
    participants: 1200,
    image: "/images/gallery/events/national-competition-2025.jpg",
    coverImage: "/images/gallery/events/national-competition-2025-cover.jpg",
    photos: 156
  },
  {
    id: 2,
    slug: "franchise-partners-meet-2025",
    title: "Franchise Partners Meet 2025",
    description: "Annual gathering of I-Genius franchise partners from across the country for strategy and growth discussions.",
    date: "February 10, 2025",
    location: "Nashik, Maharashtra",
    participants: 350,
    image: "/images/gallery/events/franchise-meet-2025.jpg",
    coverImage: "/images/gallery/events/franchise-meet-2025-cover.jpg",
    photos: 89
  },
  {
    id: 3,
    slug: "world-record-abacus-event",
    title: "World Record Abacus Event",
    description: "1000+ students created a world record by solving 200 arithmetic sums in 300 seconds.",
    date: "March 24, 2019",
    location: "Nashik, Maharashtra",
    participants: 1001,
    image: "/images/gallery/events/world-record-2019.jpg",
    coverImage: "/images/gallery/events/world-record-2019-cover.jpg",
    photos: 234
  },
  {
    id: 4,
    slug: "teachers-training-workshop",
    title: "Teachers Training Workshop",
    description: "Comprehensive training program for abacus teachers to enhance teaching methodologies.",
    date: "January 5, 2025",
    location: "Pune, Maharashtra",
    participants: 150,
    image: "/images/gallery/events/teacher-training-2025.jpg",
    coverImage: "/images/gallery/events/teacher-training-2025-cover.jpg",
    photos: 67
  },
  {
    id: 5,
    slug: "state-level-competition-2024",
    title: "State Level Competition 2024",
    description: "Maharashtra state abacus competition with students from all districts participating.",
    date: "December 10, 2024",
    location: "Nagpur, Maharashtra",
    participants: 850,
    image: "/images/gallery/events/state-competition-2024.jpg",
    coverImage: "/images/gallery/events/state-competition-2024-cover.jpg",
    photos: 112
  },
  {
    id: 6,
    slug: "annual-day-celebration",
    title: "Annual Day Celebration 2024",
    description: "Celebrating student achievements and cultural performances across all centers.",
    date: "November 20, 2024",
    location: "Nashik, Maharashtra",
    participants: 2000,
    image: "/images/gallery/events/annual-day-2024.jpg",
    coverImage: "/images/gallery/events/annual-day-2024-cover.jpg",
    photos: 198
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Memory Lane Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Floating memories */}
        <div className="absolute top-[15%] left-[5%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[4%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[25%] right-[8%] opacity-30 hover:scale-105 transition-transform duration-500">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[7%] opacity-20">
          <NeuralPathDoodle />
        </div>
        
        {/* Floating beads - like individual photos */}
        <div className="absolute top-[30%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[94%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[70%] left-[88%] opacity-15 animate-gentle-float delay-1500">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti - celebration of memories */}
        <div className="absolute top-[10%] right-[2%] w-40 h-40 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <Camera className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base font-body">Memories & Moments</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
            Photo{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Gallery
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl max-w-2xl mx-auto font-body">
            Capturing moments of excellence, celebration, and achievement
          </p>
        </div>
      </section>

      {/* ========== EVENTS GALLERY SECTION - Storybook Theme ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Background doodles - like turning pages of a photo album */}
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
        
        {/* Celebration confetti for event memories */}
        <div className="absolute top-[5%] left-[2%] w-32 h-32 opacity-15 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        <div className="content-container">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20 hover:scale-105 transition-transform duration-300">
                Events & Celebrations
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Explore Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Events
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              Browse through our memorable moments and success stories
            </p>
          </div>

          {/* Events Grid - Storybook alternating layout */}
          <div className="space-y-20 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <Link 
                key={event.id} 
                href={`/media/gallery/${event.slug}`}
                className={`group block ${index % 2 === 0 ? '' : ''}`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 pb-16 border-b border-[#C4D6C4]/30 last:border-0 transition-all duration-500 hover:translate-x-1`}>
                  
                  {/* Image Container with photo count badge */}
                  <div className="w-full lg:w-2/5 relative overflow-hidden rounded-2xl bg-[#F8F6F0] shadow-md group-hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-square">
                      <img 
                        src={event.coverImage || event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <span className="text-white text-sm font-body flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full">
                          <Camera className="w-4 h-4" /> {event.photos} photos
                        </span>
                        <span className="text-white text-sm font-body flex items-center gap-1 bg-[#E87A5D]/80 px-3 py-1.5 rounded-full">
                          <Sparkles className="w-4 h-4" /> View Gallery
                        </span>
                      </div>
                      {/* Photo count badge on corner */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs font-body flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-3 h-3" /> {event.photos}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1 bg-[#E87A5D]/10 px-3 py-1 rounded-full text-[#E87A5D] text-base font-body">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1 bg-[#2C7A6E]/10 px-3 py-1 rounded-full text-[#2C7A6E] text-base font-body">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1 bg-[#E87A5D]/10 px-3 py-1 rounded-full text-[#E87A5D] text-base font-body">
                        <Users className="w-4 h-4" /> {event.participants}+ Participants
                      </span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-heading font-bold text-[#1A2A3A] group-hover:text-[#E87A5D] transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-[#1A2A3A] text-xl font-body leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="pt-3">
                      <span className="inline-flex items-center gap-2 text-[#E87A5D] font-body font-medium group-hover:gap-3 transition-all duration-300 group-hover:translate-x-1">
                        View Gallery <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION - Celebration of Numbers ========== */}
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
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">6+</div>
              <div className="stat-label text-lg font-medium">Major Events</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">1,000+</div>
              <div className="stat-label text-lg font-medium">Photos Captured</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">5,000+</div>
              <div className="stat-label text-lg font-medium">Participants</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">2</div>
              <div className="stat-label text-lg font-medium">World Records</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Future Memories ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        
        {/* Wave separators */}
        <div className="absolute top-0 left-0 right-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        
        {/* Dancing celebration elements */}
        <div className="absolute top-[10%] left-[5%] opacity-25 hover:scale-110 transition-transform duration-500 animate-gentle-float">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[8%] opacity-30 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        
        <div className="absolute top-[40%] right-[3%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti celebration - future memories waiting to be made */}
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
              Want to Be Part of Our Story?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Join I-Genius and be part of our future events and achievements
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}