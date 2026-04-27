"use client";

import { useState } from "react";
import { Filter, X, ChevronDown } from "lucide-react";

const CoursesFilter = () => {
  const [selectedAge, setSelectedAge] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const ageOptions = ["all", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
  const levelOptions = ["all", "Basic", "Intermediate", "Advanced"];

  const clearFilters = () => {
    setSelectedAge("all");
    setSelectedLevel("all");
  };

  // Store filters in localStorage or context for access in CoursesGrid
  const applyFilters = () => {
    // Dispatch custom event for CoursesGrid to listen to
    window.dispatchEvent(new CustomEvent('filterChange', { 
      detail: { age: selectedAge, level: selectedLevel } 
    }));
  };

  const handleAgeChange = (value) => {
    setSelectedAge(value);
    setTimeout(() => applyFilters(), 0);
  };

  const handleLevelChange = (value) => {
    setSelectedLevel(value);
    setTimeout(() => applyFilters(), 0);
  };

  return (
    <div className="sticky top-16 sm:top-20 lg:top-24 z-30 bg-[#FEFCF5] border-b border-[#C4D6C4]/30 py-3">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 text-[#1A2A3A] font-body font-medium"
        >
          <Filter className="w-4 h-4" />
          Filter Courses
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </button>
        
        {/* Desktop Filters */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[#1A2A3A] text-sm font-body font-medium">Filter by:</span>
            
            {/* Age Filter */}
            <select
              value={selectedAge}
              onChange={(e) => handleAgeChange(e.target.value)}
              className="bg-[#F8F6F0] text-[#1A2A3A] text-sm font-body px-4 py-2 rounded-full border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D]"
            >
              <option value="all">All Ages</option>
              {ageOptions.filter(a => a !== "all").map(age => (
                <option key={age} value={age}>Age {age}+</option>
              ))}
            </select>
            
            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
              className="bg-[#F8F6F0] text-[#1A2A3A] text-sm font-body px-4 py-2 rounded-full border border-[#C4D6C4]/30 focus:outline-none focus:border-[#E87A5D]"
            >
              <option value="all">All Levels</option>
              {levelOptions.filter(l => l !== "all").map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          
          {(selectedAge !== "all" || selectedLevel !== "all") && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-[#E87A5D] text-sm font-body hover:text-[#D95D39] transition-colors"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>
        
        {/* Mobile Filters Dropdown */}
        {showFilters && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#C4D6C4]/30 space-y-4">
            <div>
              <label className="block text-[#1A2A3A] text-sm font-body font-medium mb-2">Age Group</label>
              <select
                value={selectedAge}
                onChange={(e) => handleAgeChange(e.target.value)}
                className="w-full bg-[#F8F6F0] text-[#1A2A3A] text-sm font-body px-4 py-2 rounded-full border border-[#C4D6C4]/30"
              >
                <option value="all">All Ages</option>
                {ageOptions.filter(a => a !== "all").map(age => (
                  <option key={age} value={age}>Age {age}+</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-[#1A2A3A] text-sm font-body font-medium mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="w-full bg-[#F8F6F0] text-[#1A2A3A] text-sm font-body px-4 py-2 rounded-full border border-[#C4D6C4]/30"
              >
                <option value="all">All Levels</option>
                {levelOptions.filter(l => l !== "all").map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            {(selectedAge !== "all" || selectedLevel !== "all") && (
              <button
                onClick={clearFilters}
                className="w-full flex items-center justify-center gap-1 bg-[#E87A5D]/10 text-[#E87A5D] text-sm font-body py-2 rounded-full"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesFilter;