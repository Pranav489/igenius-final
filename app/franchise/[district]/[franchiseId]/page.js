import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail, Award, ChevronLeft, ArrowRight, Navigation } from "lucide-react";
import { 
  AbacusBeadsDoodle, 
  NeuralPathDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";
import { siteSEO } from "@/utils/seoConfig";

// Mock franchise data - Replace with actual data from your database
const franchiseData = {
  "nashik": {
    name: "Nashik",
    centers: [
      { 
        id: 1, 
        fullName: "I-Genius Abacus Academy - Canada Corner",
        name: "Canada Corner", 
        address: "Office No. 7/8/9, 2nd Floor Silver Plaza", 
        landmark: "Opp. BSNL Office, Canada Corner",
        city: "Nashik",
        pincode: "422002",
        phone: "+91 7770045402", 
        email: "nashik@igenius.com",
        franchiseeName: "Rajesh Patil",
        coordinates: { lat: 20.0059, lng: 73.7897 }
      },
      { 
        id: 2, 
        fullName: "I-Genius Abacus Academy - College Road",
        name: "College Road", 
        address: "Shop No. 5, Sai Plaza", 
        landmark: "Near City Pride, College Road",
        city: "Nashik",
        pincode: "422005",
        phone: "+91 7770045403", 
        email: "collegeroad@igenius.com",
        franchiseeName: "Sunita Sharma",
        coordinates: { lat: 20.0100, lng: 73.7800 }
      },
      { 
        id: 3, 
        fullName: "I-Genius Abacus Academy - Gangapur Road",
        name: "Gangapur Road", 
        address: "1st Floor, City Center Mall", 
        landmark: "Near Gangapur Police Station",
        city: "Nashik",
        pincode: "422013",
        phone: "+91 7770045404", 
        email: "gangapur@igenius.com",
        franchiseeName: "Amol Joshi",
        coordinates: { lat: 19.9970, lng: 73.7820 }
      }
    ]
  },
  "pune": {
    name: "Pune",
    centers: [
      { 
        id: 4, 
        fullName: "I-Genius Abacus Academy - Kothrud",
        name: "Kothrud", 
        address: "Shop No. 10, Kubera Complex", 
        landmark: "Near Kothrud Bus Stand",
        city: "Pune",
        pincode: "411038",
        phone: "+91 7770045410", 
        email: "kothrud@igenius.com",
        franchiseeName: "Amit Deshmukh",
        coordinates: { lat: 18.5069, lng: 73.8220 }
      }
    ]
  },
  "mumbai": {
    name: "Mumbai",
    centers: [
      { 
        id: 6, 
        fullName: "I-Genius Abacus Academy - Andheri",
        name: "Andheri", 
        address: "Shop No. 20, Shoppers Stop Plaza", 
        landmark: "Near Andheri Station, Andheri West",
        city: "Mumbai",
        pincode: "400053",
        phone: "+91 7770045420", 
        email: "andheri@igenius.com",
        franchiseeName: "Sanjay Kulkarni",
        coordinates: { lat: 19.1196, lng: 72.8489 }
      }
    ]
  },
  "dhule": {
    name: "Dhule",
    centers: [
      { 
        id: 8, 
        fullName: "I-Genius Abacus Academy - Dhule City Center",
        name: "Dhule City Center", 
        address: "Shop No. 15, City Center Mall", 
        landmark: "Near Dhule Bus Stand",
        city: "Dhule",
        pincode: "424001",
        phone: "+91 7770045430", 
        email: "dhule@igenius.com",
        franchiseeName: "Pravin Mahajan",
        coordinates: { lat: 20.9042, lng: 74.7749 }
      }
    ]
  },
  "malegaon": {
    name: "Malegaon",
    centers: [
      { 
        id: 9, 
        fullName: "I-Genius Abacus Academy - Malegaon Main",
        name: "Malegaon Main", 
        address: "1st Floor, Shree Complex", 
        landmark: "Main Road, Near Gandhi Chowk",
        city: "Malegaon",
        pincode: "423203",
        phone: "+91 7770045440", 
        email: "malegaon@igenius.com",
        franchiseeName: "Rahul Patil",
        coordinates: { lat: 20.5565, lng: 74.5348 }
      }
    ]
  }
};

export async function generateStaticParams() {
  const params = [];
  for (const [district, data] of Object.entries(franchiseData)) {
    for (const center of data.centers) {
      params.push({
        district: district,
        franchiseId: center.id.toString(),
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { district, franchiseId } = resolvedParams;
  const districtInfo = franchiseData[district];
  
  if (!districtInfo) {
    return {
      title: "Franchise Center Not Found | I-Genius Abacus Academy",
      description: "The requested franchise center could not be found.",
    };
  }
  
  const center = districtInfo.centers.find(c => c.id === parseInt(franchiseId));
  
  if (!center) {
    return {
      title: "Franchise Center Not Found | I-Genius Abacus Academy",
      description: "The requested franchise center could not be found.",
    };
  }
  
  const districtName = districtInfo.name;
  
  return {
    title: `${center.fullName} | Abacus Classes in ${districtName} | I-Genius Academy`,
    description: `Visit ${center.fullName} at ${center.address}, ${center.landmark}. Contact ${center.phone} for abacus, vedic math, and rubik cube courses for kids. Authorised franchisee.`,
    keywords: `abacus classes in ${districtName}, abacus center near me ${districtName}, I-Genius ${districtName}, mental math ${districtName}, abacus franchise ${districtName}`,
    alternates: {
      canonical: `/franchise/${district}/${franchiseId}`,
    },
    openGraph: {
      title: `${center.fullName} | I-Genius Abacus Academy`,
      description: `Authorised franchisee at ${center.address}, ${center.landmark}. Call ${center.phone} to enroll your child today!`,
      url: `${siteSEO.baseUrl}/franchise/${district}/${franchiseId}`,
      images: [
        {
          url: `${siteSEO.baseUrl}/og-franchise-center.jpg`,
          width: 1200,
          height: 630,
          alt: center.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${center.fullName}`,
      description: `Abacus classes in ${districtName}. Call ${center.phone} for demo class.`,
      images: [`${siteSEO.baseUrl}/og-franchise-center.jpg`],
    },
  };
}

export default async function FranchiseDetailPage({ params }) {
  const resolvedParams = await params;
  const { district, franchiseId } = resolvedParams;
  const districtInfo = franchiseData[district];
  
  if (!districtInfo) notFound();
  
  const center = districtInfo.centers.find(c => c.id === parseInt(franchiseId));
  
  if (!center) notFound();

  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${center.coordinates.lat},${center.coordinates.lng}&zoom=15`;

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* Hero Section - Center Spotlight Theme */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Celebrating this specific center */}
        <div className="absolute top-[10%] left-[4%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[5%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[30%] right-[8%] opacity-20">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[15%] left-[8%] opacity-15">
          <NeuralPathDoodle />
        </div>
        
        {/* Floating beads - representing the center's unique identity */}
        <div className="absolute top-[25%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[30%] right-[3%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[60%] left-[93%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          <Link href={`/franchise/${district}`} className="inline-flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] mb-6 transition-all duration-300 hover:gap-3 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-body">Back to Centers</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                {center.fullName}
              </h1>
              <div className="inline-flex items-center gap-2 bg-[#E87A5D]/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-[#E87A5D]/30 transition-colors">
                <Award className="w-5 h-5 text-[#E87A5D]" />
                <span className="text-white font-body font-semibold">Authorised Franchisee</span>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-lg px-6 py-3 rounded-full hover:bg-[#D95D39] transition-all hover:scale-105 shadow-lg hover:shadow-xl group">
              Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Center Details - Location Pride Theme */}
      <section className="section-container section-bg-cream">
        
        {/* Background doodles */}
        <div className="absolute top-[15%] right-[3%] opacity-10 hover:opacity-20 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] left-[2%] opacity-10">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[40%] left-[95%] opacity-15">
          <SingleBeadDoodle />
        </div>
        
        {/* Celebration confetti for this center's achievements */}
        <div className="absolute top-[5%] right-[2%] w-32 h-32 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#1A2A3A] mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-[#E87A5D] rounded-full"></span>
                  Contact Information
                </h2>
                <div className="space-y-5">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E87A5D]/20 transition-all duration-300 group-hover:scale-110">
                      <MapPin className="w-5 h-5 text-[#E87A5D]" />
                    </div>
                    <div>
                      <p className="text-[#1A2A3A] text-lg font-body font-semibold mb-1">Address</p>
                      <p className="text-[#1A2A3A] text-base font-body">{center.address}</p>
                      <p className="text-[#1A2A3A] text-base font-body">{center.city} - {center.pincode}</p>
                    </div>
                  </div>
                  
                  {/* Landmark */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#2C7A6E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2C7A6E]/20 transition-all duration-300 group-hover:scale-110">
                      <Navigation className="w-5 h-5 text-[#2C7A6E]" />
                    </div>
                    <div>
                      <p className="text-[#1A2A3A] text-lg font-body font-semibold mb-1">Landmark</p>
                      <p className="text-[#1A2A3A] text-base font-body">{center.landmark}</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E87A5D]/20 transition-all duration-300 group-hover:scale-110">
                      <Phone className="w-5 h-5 text-[#E87A5D]" />
                    </div>
                    <div>
                      <p className="text-[#1A2A3A] text-lg font-body font-semibold mb-1">Phone Number</p>
                      <a href={`tel:${center.phone}`} className="text-[#1A2A3A] text-base font-body hover:text-[#E87A5D] transition-colors">
                        {center.phone}
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#E87A5D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E87A5D]/20 transition-all duration-300 group-hover:scale-110">
                      <Mail className="w-5 h-5 text-[#E87A5D]" />
                    </div>
                    <div>
                      <p className="text-[#1A2A3A] text-lg font-body font-semibold mb-1">Email Address</p>
                      <a href={`mailto:${center.email}`} className="text-[#1A2A3A] text-base font-body hover:text-[#E87A5D] transition-colors">
                        {center.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Franchisee Information */}
              <div className="pt-4 border-t border-[#C4D6C4]/30">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#2C7A6E]/10 flex items-center justify-center group-hover:bg-[#2C7A6E]/20 transition-all duration-300 group-hover:scale-110">
                    <Award className="w-5 h-5 text-[#2C7A6E]" />
                  </div>
                  <div>
                    <p className="text-[#1A2A3A] text-lg font-body font-semibold mb-1">Franchisee</p>
                    <p className="text-[#1A2A3A] text-base font-body">{center.franchiseeName}</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-4">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${center.coordinates.lat},${center.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-base px-6 py-3 rounded-full hover:bg-[#D95D39] transition-all hover:scale-105 shadow-md hover:shadow-lg group"
                >
                  <Navigation className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="group">
              <h2 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#E87A5D] rounded-full"></span>
                Location Map
              </h2>
              <div className="rounded-media bg-[#F8F6F0] h-[400px] w-full shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <iframe
                  title={`Google Map showing ${center.fullName} location at ${center.landmark}`}
                  className="w-full h-full"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={googleMapsEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-[#E87A5D] text-sm font-body font-medium animate-pulse">
                  📍 {center.landmark}
                </p>
                <p className="text-[#A8C3B8] text-xs font-body mt-1">
                  {center.address}, {center.city} - {center.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Center Celebration */}
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
        
        {/* Confetti celebration for this center */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <StaticConfetti density="medium" />
        </div>
        
        {/* Constellation of success for this center */}
        <div className="absolute bottom-[15%] left-[8%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        <div className="relative z-10 content-container text-center">
          <div className="animate-gentle-float">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 font-body">
            Join I-Genius Abacus Academy at {center.city} today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Contact Center <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${center.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Call Now <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}