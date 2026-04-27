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

export default function FranchiseSearchForm() {
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
      router.push(`/franchise/${selectedDistrict.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="bg-[#F8F6F0] rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-[#E87A5D]" />
        <h3 className="text-2xl font-heading font-bold text-[#1A2A3A]">Search by Location</h3>
      </div>
      
      <form onSubmit={handleSearch} className="space-y-6">
        {/* State Dropdown */}
        <div>
          <label className="block text-[#1A2A3A] text-base font-body font-semibold mb-2">
            Select State
          </label>
          <div className="relative">
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full appearance-none bg-white text-[#1A2A3A] text-base font-body px-5 py-3 rounded-full border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D] transition-all cursor-pointer"
              required
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D4A6E] pointer-events-none" />
          </div>
        </div>

        {/* District Dropdown */}
        <div>
          <label className="block text-[#1A2A3A] text-base font-body font-semibold mb-2">
            Select District
          </label>
          <div className="relative">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full appearance-none bg-white text-[#1A2A3A] text-base font-body px-5 py-3 rounded-full border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedState}
              required
            >
              <option value="">-- Select District --</option>
              {availableDistricts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D4A6E] pointer-events-none" />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-base px-6 py-3 rounded-full hover:bg-[#D95D39] transition-all duration-300 hover:scale-105"
        >
          <Search className="w-5 h-5" />
          Find Centers
        </button>
      </form>

      {/* Quick Info */}
      <div className="mt-6 pt-6 border-t border-[#C4D6C4]/30">
        <div className="flex items-center gap-2 text-[#2D4A6E] text-sm">
          <MapPin className="w-4 h-4 text-[#E87A5D]" />
          <span>Currently serving: Maharashtra, Gujarat, MP, UP, Rajasthan, Karnataka, Tamil Nadu, Telangana, Delhi, Haryana, Punjab, West Bengal</span>
        </div>
      </div>
    </div>
  );
}