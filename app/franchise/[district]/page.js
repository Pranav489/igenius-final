import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail, Star, Users, Award, ArrowRight, ChevronLeft } from "lucide-react";
import AreaFilter from "@/components/franchise/AreaFilter";
import { 
  AbacusBeadsDoodle, 
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
      { id: 1, name: "I-Genius Abacus - Canada Corner", address: "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner", area: "Canada Corner", phone: "+91 7770045402", email: "nashik@igenius.com", rating: 4.9, students: 500 },
      { id: 2, name: "I-Genius Abacus - College Road", address: "Shop No. 5, Sai Plaza, College Road", area: "College Road", phone: "+91 7770045403", email: "collegeroad@igenius.com", rating: 4.8, students: 350 },
      { id: 3, name: "I-Genius Abacus - Gangapur Road", address: "1st Floor, City Center Mall, Gangapur Road", area: "Gangapur Road", phone: "+91 7770045404", email: "gangapur@igenius.com", rating: 4.9, students: 420 }
    ]
  },
  "pune": {
    name: "Pune",
    centers: [
      { id: 4, name: "I-Genius Abacus - Kothrud", address: "Shop No. 10, Kubera Complex, Kothrud", area: "Kothrud", phone: "+91 7770045410", email: "kothrud@igenius.com", rating: 4.8, students: 380 },
      { id: 5, name: "I-Genius Abacus - Hinjewadi", address: "2nd Floor, Megapolis Mall, Hinjewadi", area: "Hinjewadi", phone: "+91 7770045411", email: "hinjewadi@igenius.com", rating: 4.7, students: 290 }
    ]
  },
  "mumbai": {
    name: "Mumbai",
    centers: [
      { id: 6, name: "I-Genius Abacus - Andheri", address: "Shop No. 20, Shoppers Stop Plaza, Andheri West", area: "Andheri West", phone: "+91 7770045420", email: "andheri@igenius.com", rating: 4.9, students: 600 },
      { id: 7, name: "I-Genius Abacus - Dadar", address: "1st Floor, Dadar Station Plaza, Dadar East", area: "Dadar East", phone: "+91 7770045421", email: "dadar@igenius.com", rating: 4.8, students: 450 }
    ]
  },
  "dhule": {
    name: "Dhule",
    centers: [
      { id: 8, name: "I-Genius Abacus - Dhule City Center", address: "Shop No. 15, City Center Mall, Dhule", area: "Dhule City", phone: "+91 7770045430", email: "dhule@igenius.com", rating: 4.7, students: 280 }
    ]
  },
  "malegaon": {
    name: "Malegaon",
    centers: [
      { id: 9, name: "I-Genius Abacus - Malegaon Main", address: "1st Floor, Shree Complex, Main Road, Malegaon", area: "Main Road", phone: "+91 7770045440", email: "malegaon@igenius.com", rating: 4.8, students: 320 }
    ]
  }
};

// Get all unique areas for the district
const getAreas = (districtSlug) => {
  const district = franchiseData[districtSlug];
  if (!district) return [];
  return [...new Set(district.centers.map(center => center.area))];
};

export async function generateStaticParams() {
  return Object.keys(franchiseData).map((district) => ({
    district: district,
  }));
}

// ✅ ADD THIS - Generate metadata dynamically based on district
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const district = resolvedParams.district;
  const districtInfo = franchiseData[district];
  
  if (!districtInfo) {
    return {
      title: "District Not Found | I-Genius Abacus Academy",
      description: "The requested district could not be found.",
    };
  }
  
  const districtName = districtInfo.name;
  
  return {
    title: `I-Genius Franchise Centers in ${districtName} | Abacus Classes Near You`,
    description: `Find I-Genius Abacus Academy franchise centers in ${districtName}, Maharashtra. Get contact details and enroll your child.`,
    alternates: {
      canonical: `/franchise/${district}`,
    },
    openGraph: {
      title: `I-Genius Abacus Centers in ${districtName}`,
      description: `Find the nearest I-Genius Abacus Academy franchise center in ${districtName}.`,
      url: `${siteSEO.baseUrl}/franchise/${district}`,
    },
  };
}

export default async function DistrictPage({ params }) {
  const resolvedParams = await params;
  const district = resolvedParams.district;
  const districtInfo = franchiseData[district];
  
  if (!districtInfo) {
    notFound();
  }

  const areas = getAreas(district);
  const districtName = districtInfo.name;

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* Hero Section - District Pride Theme */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles - Celebrating local presence */}
        <div className="absolute top-[15%] left-[5%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[4%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[25%] right-[8%] opacity-30">
          <AbacusBeadsDoodle />
        </div>
        
        {/* Floating beads - representing centers */}
        <div className="absolute top-[30%] left-[3%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-25 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[94%] opacity-20 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <Link href="/franchise" className="inline-flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] mb-6 transition-all duration-300 hover:gap-3 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-body">Back to Franchise</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            I-Genius Franchise Centers in{" "}
            <span className="text-[#E87A5D] relative inline-block">
              {districtName}
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-lg max-w-2xl mx-auto font-body">
            Find the nearest I-Genius Abacus Academy center in your area
          </p>
        </div>
      </section>

      {/* Areas Filter Dropdown */}
      <section className="relative py-8 bg-[#F8F6F0] border-b border-[#C4D6C4]/30">
        <div className="absolute top-0 left-0 right-0 opacity-15 rotate-180">
          <WaveSeparator />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          <AreaFilter areas={areas} />
        </div>
      </section>

      {/* Centers List - Local Discovery Theme */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#FEFCF5]">
        
        {/* Background doodles - map exploration feel */}
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
        
        {/* Celebration confetti for center achievements */}
        <div className="absolute top-[5%] left-[2%] w-32 h-32 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Centers count badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E87A5D]/10">
              <MapPin className="w-4 h-4 text-[#E87A5D]" />
              <span className="text-[#E87A5D] text-base font-body font-semibold">
                {districtInfo.centers.length} Centers in {districtName}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {districtInfo.centers.map((center, index) => (
              <Link
                key={center.id}
                href={`/franchise/${district}/${center.id}`}
                className="no-card block bg-[#F8F6F0] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
                data-area={center.area}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#E87A5D]/10 flex items-center justify-center group-hover:bg-[#E87A5D]/20 transition-all duration-300 group-hover:scale-110">
                      <MapPin className="w-8 h-8 text-[#E87A5D]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-2 group-hover:text-[#E87A5D] transition-colors duration-300">
                      {center.name}
                    </h3>
                    <p className="text-[#1A2A3A] text-base font-body mb-3">{center.address}</p>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#E87A5D] text-[#E87A5D]" />
                        <span className="text-[#1A2A3A] font-body">{center.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-[#2C7A6E]" />
                        <span className="text-[#1A2A3A] font-body">{center.students}+ Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-[#E87A5D]" />
                        <span className="text-[#1A2A3A] font-body">ISO Certified</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-[#1A2A3A] text-sm font-body">
                      <div className="flex items-center gap-2 group/phone">
                        <Phone className="w-4 h-4 text-[#E87A5D] group-hover/phone:scale-110 transition-transform" />
                        <span>{center.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 group/mail">
                        <Mail className="w-4 h-4 text-[#E87A5D] group-hover/mail:scale-110 transition-transform" />
                        <span>{center.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <div className="w-10 h-10 rounded-full bg-[#E87A5D]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 text-[#E87A5D] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* No results message */}
          <div id="no-results-message" className="hidden text-center py-12">
            <div className="inline-flex items-center gap-3 bg-[#F8F6F0] rounded-2xl px-8 py-6">
              <MapPin className="w-8 h-8 text-[#E87A5D] opacity-50" />
              <p className="text-[#1A2A3A] text-lg font-body">No centers found in this area. Please try another location.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}