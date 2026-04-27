import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Sparkles,
  Camera,
  ChevronLeft,
  Download
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

// Events data with photos
const events = [
  {
    id: 1,
    slug: "national-abacus-competition-2025",
    title: "National Abacus Competition 2025",
    description: "Students from across India participated in this mega competition showcasing exceptional mental math skills.",
    date: "March 15, 2025",
    location: "Mumbai, Maharashtra",
    participants: 1200,
    coverImage: "/images/gallery/events/national-competition-2025-cover.jpg",
    photos: [
      { id: 1, src: "/images/gallery/national-2025/photo1.jpg", title: "Inauguration Ceremony" },
      { id: 2, src: "/images/gallery/national-2025/photo2.jpg", title: "Students in Action" },
      { id: 3, src: "/images/gallery/national-2025/photo3.jpg", title: "Prize Distribution" },
      { id: 4, src: "/images/gallery/national-2025/photo4.jpg", title: "Winners with Trophies" },
      { id: 5, src: "/images/gallery/national-2025/photo5.jpg", title: "Group Photo" },
      { id: 6, src: "/images/gallery/national-2025/photo6.jpg", title: "Judges Panel" }
    ]
  },
  {
    id: 2,
    slug: "franchise-partners-meet-2025",
    title: "Franchise Partners Meet 2025",
    description: "Annual gathering of I-Genius franchise partners from across the country for strategy and growth discussions.",
    date: "February 10, 2025",
    location: "Nashik, Maharashtra",
    participants: 350,
    coverImage: "/images/gallery/events/franchise-meet-2025-cover.jpg",
    photos: [
      { id: 1, src: "/images/gallery/franchise-meet/photo1.jpg", title: "Inauguration" },
      { id: 2, src: "/images/gallery/franchise-meet/photo2.jpg", title: "Award Ceremony" },
      { id: 3, src: "/images/gallery/franchise-meet/photo3.jpg", title: "Group Discussion" },
      { id: 4, src: "/images/gallery/franchise-meet/photo4.jpg", title: "Franchisees with Awards" }
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
    coverImage: "/images/gallery/events/world-record-2019-cover.jpg",
    photos: [
      { id: 1, src: "/images/gallery/world-record/photo1.jpg", title: "Mass Participation" },
      { id: 2, src: "/images/gallery/world-record/photo2.jpg", title: "Record Certificate" },
      { id: 3, src: "/images/gallery/world-record/photo3.jpg", title: "Celebration" },
      { id: 4, src: "/images/gallery/world-record/photo4.jpg", title: "Media Coverage" }
    ]
  },
  {
    id: 4,
    slug: "teachers-training-workshop",
    title: "Teachers Training Workshop",
    description: "Comprehensive training program for abacus teachers to enhance teaching methodologies.",
    date: "January 5, 2025",
    location: "Pune, Maharashtra",
    participants: 150,
    coverImage: "/images/gallery/events/teacher-training-2025-cover.jpg",
    photos: [
      { id: 1, src: "/images/gallery/teacher-training/photo1.jpg", title: "Training Session" },
      { id: 2, src: "/images/gallery/teacher-training/photo2.jpg", title: "Group Activity" },
      { id: 3, src: "/images/gallery/teacher-training/photo3.jpg", title: "Certificate Distribution" }
    ]
  },
  {
    id: 5,
    slug: "state-level-competition-2024",
    title: "State Level Competition 2024",
    description: "Maharashtra state abacus competition with students from all districts participating.",
    date: "December 10, 2024",
    location: "Nagpur, Maharashtra",
    participants: 850,
    coverImage: "/images/gallery/events/state-competition-2024-cover.jpg",
    photos: [
      { id: 1, src: "/images/gallery/state-competition/photo1.jpg", title: "Competition Venue" },
      { id: 2, src: "/images/gallery/state-competition/photo2.jpg", title: "Students Solving" },
      { id: 3, src: "/images/gallery/state-competition/photo3.jpg", title: "Winners" }
    ]
  },
  {
    id: 6,
    slug: "annual-day-celebration",
    title: "Annual Day Celebration 2024",
    description: "Celebrating student achievements and cultural performances across all centers.",
    date: "November 20, 2024",
    location: "Nashik, Maharashtra",
    participants: 2000,
    coverImage: "/images/gallery/events/annual-day-2024-cover.jpg",
    photos: [
      { id: 1, src: "/images/gallery/annual-day/photo1.jpg", title: "Cultural Performance" },
      { id: 2, src: "/images/gallery/annual-day/photo2.jpg", title: "Award Ceremony" },
      { id: 3, src: "/images/gallery/annual-day/photo3.jpg", title: "Student Performances" },
      { id: 4, src: "/images/gallery/annual-day/photo4.jpg", title: "Grand Finale" }
    ]
  }
];

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const event = events.find(e => e.slug === resolvedParams.slug);
  if (!event) return { title: "Event Not Found" };
  return { 
    title: `${event.title} | Photo Gallery | I-Genius Academy`,
    description: event.description,
  };
}

export default async function EventPhotosPage({ params }) {
  const resolvedParams = await params;
  const event = events.find(e => e.slug === resolvedParams.slug);
  
  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Event Spotlight Theme ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Celebrating this specific event */}
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
        
        {/* Floating beads - representing individual photos */}
        <div className="absolute top-[25%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[30%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[55%] left-[93%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti celebration for this event's memories */}
        <div className="absolute top-[10%] right-[2%] w-40 h-40 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container">
          <Link href="/media/gallery" className="inline-flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] mb-6 transition-all duration-300 hover:gap-3 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-body">Back to Gallery</span>
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
                <Camera className="w-4 h-4 text-[#E87A5D]" /> {event.photos.length} Photos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PHOTOS GRID SECTION - Memory Book Theme ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Background doodles - like flipping through a photo album */}
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
                Photo Gallery
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[#1A2A3A] mb-5">
              Capturing the{" "}
              <span className="text-[#E87A5D] relative inline-block">
                Moments
                <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-[#1A2A3A] text-xl max-w-2xl mx-auto font-body">
              Relive the memorable moments from {event.title.split(' ').slice(0, 3).join(' ')}
            </p>
          </div>

          {/* Photos Masonry Grid */}
          <div className="masonry">
            {event.photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="masonry-item group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative rounded-media overflow-hidden bg-[#F8F6F0] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
                    <span className="text-white text-sm font-body bg-black/40 px-3 py-1.5 rounded-full">
                      {photo.title}
                    </span>
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all hover:scale-110">
                      <Download className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-[#E87A5D]/0 group-hover:bg-[#E87A5D]/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Photo count summary */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E87A5D]/5">
              <Sparkles className="w-4 h-4 text-[#E87A5D]" />
              <span className="text-[#1A2A3A] text-sm font-body">{event.photos.length} precious moments captured</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Future Memories ========== */}
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
        
        {/* Confetti celebration - future memories waiting to be made */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <StaticConfetti density="medium" />
        </div>
        
        {/* Constellation of future events */}
        <div className="absolute bottom-[15%] left-[8%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        <div className="relative z-10 content-container text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
              Be Part of Our Next Event
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 font-body">
            Join I-Genius and create memories that last a lifetime
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
            Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}