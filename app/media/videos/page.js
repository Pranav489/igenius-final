import Link from "next/link";
import { 
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Video,
  ArrowRight,
  Play
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

export const metadata = buildMetadata("mediaVideos");

// Video Events data
const videoEvents = [
  {
    id: 1,
    slug: "national-abacus-competition-2025",
    title: "National Abacus Competition 2025",
    description: "Watch highlights from the grand national competition where students showcased exceptional mental math skills.",
    date: "March 15, 2025",
    location: "Mumbai, Maharashtra",
    participants: 1200,
    thumbnail: "/images/video/events/national-competition-2025-thumb.jpg",
    videos: 8
  },
  {
    id: 2,
    slug: "student-mental-math-performances",
    title: "Student Mental Math Performances",
    description: "Incredible mental math calculations performed by our talented young students.",
    date: "February 20, 2025",
    location: "Multiple Centers",
    participants: 500,
    thumbnail: "/images/video/events/mental-math-performances-thumb.jpg",
    videos: 12
  },
  {
    id: 3,
    slug: "world-record-abacus-event",
    title: "World Record Abacus Event",
    description: "1000+ students created a world record by solving 200 arithmetic sums in 300 seconds.",
    date: "March 24, 2019",
    location: "Nashik, Maharashtra",
    participants: 1001,
    thumbnail: "/images/video/events/world-record-2019-thumb.jpg",
    videos: 6
  },
  {
    id: 4,
    slug: "franchise-training-session",
    title: "Franchise Training Session",
    description: "Comprehensive training sessions for our franchise partners and teachers.",
    date: "January 10, 2025",
    location: "Nashik, Maharashtra",
    participants: 200,
    thumbnail: "/images/video/events/franchise-training-thumb.jpg",
    videos: 5
  },
  {
    id: 5,
    slug: "competition-highlights-2024",
    title: "Competition Highlights 2024",
    description: "Best moments from state and national level abacus competitions.",
    date: "December 5, 2024",
    location: "Multiple Locations",
    participants: 2000,
    thumbnail: "/images/video/events/competition-highlights-thumb.jpg",
    videos: 10
  },
  {
    id: 6,
    slug: "parent-testimonials",
    title: "Parent Testimonials",
    description: "Hear from parents about their children's transformation journey with I-Genius.",
    date: "2024-2025",
    location: "Multiple Centers",
    participants: 50,
    thumbnail: "/images/video/events/parent-testimonials-thumb.jpg",
    videos: 7
  }
];

export default function VideoGalleryPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Watch & Inspire Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Floating video memories */}
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
        
        {/* Floating beads - like video frames */}
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
        
        {/* Confetti celebration */}
        <div className="absolute top-[10%] right-[2%] w-40 h-40 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <Video className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base font-body">Watch & Inspire</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
            Video{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Gallery
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl max-w-2xl mx-auto font-body">
            Witness the incredible journey of our students through videos
          </p>
        </div>
      </section>

      {/* ========== VIDEO EVENTS SECTION - Story in Motion Theme ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Background doodles - like film strips */}
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="bg-[#E87A5D]/10 text-[#E87A5D] text-base sm:text-lg font-body font-semibold px-5 py-2 rounded-full border border-[#E87A5D]/20 hover:scale-105 transition-transform duration-300">
                Video Collections
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-[#1A2A3A] mb-5">
              Explore Our{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Videos
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              Watch success stories, competitions, and student achievements
            </p>
          </div>

          {/* Video Events - Alternating Layout */}
          <div className="space-y-20 max-w-5xl mx-auto">
            {videoEvents.map((event, index) => (
              <Link 
                key={event.id} 
                href={`/media/videos/${event.slug}`}
                className={`group block transition-all duration-500 hover:translate-x-1`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 pb-16 border-b border-[#C4D6C4]/30 last:border-0`}>
                  
                  {/* Thumbnail Container with Play Button */}
                  <div className="w-full lg:w-2/5 relative overflow-hidden rounded-media bg-[#F8F6F0] shadow-md group-hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-video">
                      <img 
                        src={event.thumbnail} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#E87A5D] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      {/* Video Count Badge */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-body flex items-center gap-1">
                        <Video className="w-3 h-3" /> {event.videos} videos
                      </div>
                      {/* Hover overlay text */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-sm font-body">Click to watch all videos</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1 text-[#E87A5D] text-base font-body bg-[#E87A5D]/10 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1 text-[#2C7A6E] text-base font-body bg-[#2C7A6E]/10 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1 text-[#E87A5D] text-base font-body bg-[#E87A5D]/10 px-3 py-1 rounded-full">
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
                        Watch Collection <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION - Video Impact ========== */}
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
              <div className="stat-label text-lg font-medium">Video Collections</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">50+</div>
              <div className="stat-label text-lg font-medium">Videos</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">500K+</div>
              <div className="stat-label text-lg font-medium">Total Views</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-4xl sm:text-5xl">1,000+</div>
              <div className="stat-label text-lg font-medium">Student Features</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Be the Next Star ========== */}
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
        
        {/* Constellation of future stars */}
        <div className="absolute bottom-[15%] left-[8%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        <div className="relative z-10 content-container text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Want to See Your Child Shine?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Join I-Genius and watch your child become a star performer
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}