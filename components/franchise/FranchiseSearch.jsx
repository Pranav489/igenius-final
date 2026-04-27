"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ChevronDown } from "lucide-react";

const states = [
  "Maharashtra", "Gujarat", "Madhya Pradesh", "Uttar Pradesh", 
  "Rajasthan", "Karnataka", "Tamil Nadu", "Telangana", 
  "Delhi", "Haryana", "Punjab", "West Bengal"
];

const districts = {
  "Maharashtra": ["Nashik", "Pune", "Mumbai", "Nagpur", "Aurangabad", "Dhule", "Malegaon", "Jalgaon", "Ahmednagar", "Solapur"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj", "Meerut"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
  "Delhi": ["Central Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri"]
};

export default function FranchiseSearch() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [availableDistricts, setAvailableDistricts] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setAvailableDistricts(districts[state] || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedState && selectedDistrict) {
      router.push(`/franchise/${encodeURIComponent(selectedDistrict.toLowerCase().replace(/\s+/g, '-'))}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-6">
        {/* State Dropdown */}
        <div className="relative">
          <label className="block text-[#1A2A3A] text-lg font-body font-semibold mb-2">
            Select State
          </label>
          <div className="relative">
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full appearance-none bg-[#F8F6F0] text-[#1A2A3A] text-lg font-body px-6 py-4 rounded-full border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D] transition-all cursor-pointer"
              required
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D4A6E] pointer-events-none" />
          </div>
        </div>

        {/* District Dropdown */}
        <div className="relative">
          <label className="block text-[#1A2A3A] text-lg font-body font-semibold mb-2">
            Select District
          </label>
          <div className="relative">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full appearance-none bg-[#F8F6F0] text-[#1A2A3A] text-lg font-body px-6 py-4 rounded-full border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedState}
              required
            >
              <option value="">-- Select District --</option>
              {availableDistricts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D4A6E] pointer-events-none" />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-[#E87A5D] text-white font-heading font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#D95D39] transition-all duration-300 hover:scale-105"
        >
          <Search className="w-5 h-5" />
          Find Franchise Centers
        </button>
      </form>

      {/* Map Placeholder - Interactive Map */}
      <div className="mt-12 bg-[#F8F6F0] rounded-2xl overflow-hidden">
        <div className="p-6 text-center">
          <MapPin className="w-12 h-12 text-[#E87A5D] mx-auto mb-3" />
          <h3 className="text-xl font-heading font-semibold text-[#1A2A3A] mb-2">Interactive Map Coming Soon</h3>
          <p className="text-[#2D4A6E] text-base font-body">
            Select state and district above to find I-Genius franchise centers near you
          </p>
        </div>
        <div className="h-[400px] bg-gradient-to-br from-[#E87A5D]/10 to-[#2C7A6E]/10 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#E87A5D] mx-auto mb-4 opacity-50" />
            <p className="text-[#2D4A6E] font-body">Interactive Map Loading...</p>
            <p className="text-[#A8C3B8] text-sm mt-2">Select state and district to view centers on map</p>
          </div>
        </div>
      </div>
    </div>
  );
}