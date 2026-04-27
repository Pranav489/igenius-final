"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function AreaFilter({ areas, centers }) {
  const [selectedArea, setSelectedArea] = useState("all");

  useEffect(() => {
    const filteredCenters = document.querySelectorAll('.franchise-card');
    if (selectedArea === "all") {
      filteredCenters.forEach(card => card.style.display = 'block');
    } else {
      filteredCenters.forEach(card => {
        if (card.dataset.area === selectedArea) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }, [selectedArea]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-[#E87A5D]" />
        <span className="text-[#1A2A3A] text-lg font-body font-medium">Filter by Area:</span>
      </div>
      <select 
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
        className="px-6 py-3 rounded-full bg-white text-[#1A2A3A] text-base font-body border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D] cursor-pointer"
      >
        <option value="all">All Areas</option>
        {areas.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
}