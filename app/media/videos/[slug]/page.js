import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Video,
  ChevronLeft,
  Play,
  Clock
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

// Video Events data with actual videos
const videoEvents = [
  {
    id: 1,
    slug: "national-abacus-competition-2025",
    title: "National Abacus Competition 2025",
    description: "Watch highlights from the grand national competition where students showcased exceptional mental math skills.",
    date: "March 15, 2025",
    location: "Mumbai, Maharashtra",
    participants: 1200,
    videos: [
      { id: 1, title: "Opening Ceremony Highlights", videoId: "dQw4w9WgXcQ", duration: "3:45" },
      { id: 2, title: "Jr. Category Winners", videoId: "jNQXAC9IVRw", duration: "4:20" },
      { id: 3, title: "Sr. Category Winners", videoId: "V_YyG2f8jUY", duration: "5:10" },
      { id: 4, title: "Best Performances", videoId: "yPYZpwSpPTA", duration: "6:30" },
      { id: 5, title: "Prize Distribution Ceremony", videoId: "b9Mh0C7wA7I", duration: "7:15" }
    ]
  },
  {
    id: 2,
    slug: "student-mental-math-performances",
    title: "Student Mental Math Performances",
    description: "Incredible mental math calculations performed by our talented young students.",
    date: "February 20, 2025",
    location: "Multiple Centers",
    participants: 500,
    videos: [
      { id: 1, title: "Addition Master - Aarav Sharma", videoId: "kXYiU_JCYtU", duration: "2:30" },
      { id: 2, title: "Multiplication Champion - Kiara Patel", videoId: "0dKFAqHVoVY", duration: "3:15" },
      { id: 3, title: "Division Speed Test", videoId: "oSV79dGR6xo", duration: "2:45" },
      { id: 4, title: "Mixed Operations Prodigy", videoId: "LExNeDIT5us", duration: "3:00" },
      { id: 5, title: "Square Root Wizard", videoId: "Sz0_0Rjrat0", duration: "2:50" }
    ]
  },
  {
    id: 3,
    slug: "world-record-abacus-event",
    title: "World Record Abacus Event",
    description: "1000+ students created a world record by solving 200 arithmetic sums in 300 seconds.",
    date: "March 24, 2019",
    location: "Nashik, Maharashtra",
    participants: 1001,
    videos: [
      { id: 1, title: "World Record Attempt", videoId: "khVVTl1qzJk", duration: "8:30" },
      { id: 2, title: "Record Certification Ceremony", videoId: "yrZlMRTxSzU", duration: "5:20" },
      { id: 3, title: "Student Interviews", videoId: "Pje1b6-rMUE", duration: "4:15" }
    ]
  },
  {
    id: 4,
    slug: "franchise-training-session",
    title: "Franchise Training Session",
    description: "Comprehensive training sessions for our franchise partners and teachers.",
    date: "January 10, 2025",
    location: "Nashik, Maharashtra",
    participants: 200,
    videos: [
      { id: 1, title: "Training Overview", videoId: "BI1-BEccV84", duration: "10:00" },
      { id: 2, title: "Teaching Techniques", videoId: "CQ-0xIn5W4k", duration: "8:30" }
    ]
  },
  {
    id: 5,
    slug: "competition-highlights-2024",
    title: "Competition Highlights 2024",
    description: "Best moments from state and national level abacus competitions.",
    date: "December 5, 2024",
    location: "Multiple Locations",
    participants: 2000,
    videos: [
      { id: 1, title: "State Level Competition", videoId: "5moN0k6Krj8", duration: "6:45" },
      { id: 2, title: "National Level Finals", videoId: "BvHQoUCrasU", duration: "7:30" },
      { id: 3, title: "Award Ceremony", videoId: "OHhKbrrGUz4", duration: "5:20" }
    ]
  },
  {
    id: 6,
    slug: "parent-testimonials",
    title: "Parent Testimonials",
    description: "Hear from parents about their children's transformation journey with I-Genius.",
    date: "2024-2025",
    location: "Multiple Centers",
    participants: 50,
    videos: [
      { id: 1, title: "Success Stories - Part 1", videoId: "A2svB8madeU", duration: "4:30" },
      { id: 2, title: "Success Stories - Part 2", videoId: "iXXSSO4Dz0U", duration: "5:15" },
      { id: 3, title: "Parent Reviews", videoId: "cttWMICOplQ", duration: "3:45" }
    ]
  }
];

export async function generateStaticParams() {
  return videoEvents.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const event = videoEvents.find(e => e.slug === resolvedParams.slug);
  if (!event) return { title: "Event Not Found" };
  return { 
    title: `${event.title} | Video Gallery | I-Genius Academy`,
    description: event.description,
  };
}

export default async function EventVideosPage({ params }) {
  const resolvedParams = await params;
  const event = videoEvents.find(e => e.slug === resolvedParams.slug);
  
  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Video Showcase Theme ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Celebrating this video collection */}
        <div className="absolute top-[15%] left-[5%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[4%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[30%] right-[8%] opacity-25">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[7%] opacity-15">
          <NeuralPathDoodle />
        </div>
        
        {/* Floating beads - like individual videos */}
        <div className="absolute top-[25%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[30%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[55%] left-[93%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti celebration for this collection */}
        <div className="absolute top-[10%] right-[2%] w-40 h-40 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container">
          <Link href="/media/videos" className="inline-flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] mb-6 transition-all duration-300 hover:gap-3 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-body">Back to Video Gallery</span>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-[#C4D6C4] text-base font-body">
                <Calendar className="w-4 h-4 text-[#E87A5D]" /> {event.date}
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-[#C4D6C4] text-base font-body">
                <MapPin className="w-4 h-4 text-[#E87A5D]" /> {event.location}
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-[#C4D6C4] text-base font-body">
                <Users className="w-4 h-4 text-[#E87A5D]" /> {event.participants}+ Participants
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-[#C4D6C4] text-base font-body">
                <Video className="w-4 h-4 text-[#E87A5D]" /> {event.videos.length} Videos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIDEOS GRID SECTION - Video Playlist Theme ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Background doodles - like cinema reels */}
        <div className="absolute top-[10%] right-[3%] opacity-10 hover:opacity-20 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[2%] opacity-10 hover:opacity-20 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[30%] left-[95%] opacity-15">
          <SingleBeadDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[88%] opacity-10">
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
                Watch Now
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#1A2A3A] mb-5">
              Video{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Playlist
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              Watch all videos from {event.title.split(' ').slice(0, 3).join(' ')}
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {event.videos.map((video, index) => (
              <div key={video.id} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative rounded-media overflow-hidden bg-black aspect-video shadow-md group-hover:shadow-xl transition-all duration-500">
                  {/* YouTube Iframe */}
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs font-body flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-heading font-semibold text-[#1A2A3A] group-hover:text-[#E87A5D] transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Video count summary */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E87A5D]/5">
              <Play className="w-4 h-4 text-[#E87A5D]" />
              <span className="text-[#1A2A3A] text-sm font-body">{event.videos.length} inspiring videos to watch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Inspired to Act ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
              Inspired by What You Saw?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 font-body">
            Join I-Genius and watch your child achieve similar success
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
            Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}