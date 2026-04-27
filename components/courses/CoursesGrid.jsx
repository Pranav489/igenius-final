"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Brain, 
  Puzzle, 
  Clock, 
  Users, 
  Star, 
  ChevronRight,
  CheckCircle
} from "lucide-react";

const iconMap = {
  Calculator: Calculator,
  Brain: Brain,
  Puzzle: Puzzle
};

const CoursesGrid = ({ courses: initialCourses }) => {
  const [courses, setCourses] = useState(initialCourses);
  const [filters, setFilters] = useState({ age: "all", level: "all" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Listen for filter changes
    const handleFilterChange = (event) => {
      setFilters(event.detail);
    };

    window.addEventListener('filterChange', handleFilterChange);
    return () => window.removeEventListener('filterChange', handleFilterChange);
  }, []);

  // Filter courses based on current filters
  const filteredCourses = courses.filter(course => {
    if (filters.age !== "all") {
      const ageNum = parseInt(filters.age);
      if (ageNum < course.ageRange.min || ageNum > course.ageRange.max) return false;
    }
    if (filters.level !== "all") {
      if (course.level !== filters.level) return false;
    }
    return true;
  });

  return (
    <>
      {/* Results Count */}
      <div className="mb-6 text-right">
        <span className="text-[#2D4A6E] text-sm font-body">
          Showing {filteredCourses.length} of {courses.length} courses
        </span>
      </div>
      
      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {filteredCourses.map((course, index) => {
            const Icon = iconMap[course.icon];
            return (
              <div
                key={course.id}
                className={`group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#F8F6F0] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  {/* Popular/New Badge */}
                  <div className="relative">
                    {course.isPopular && (
                      <div className="absolute top-4 left-4 z-10 bg-[#E87A5D] text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    {course.isNew && (
                      <div className="absolute top-4 left-4 z-10 bg-[#2C7A6E] text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                        New
                      </div>
                    )}
                  </div>
                  
                  {/* Course Header */}
                  <div className="p-6 sm:p-8 border-b border-[#C4D6C4]/20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: course.bgColor }}>
                      <Icon className="w-8 h-8" style={{ color: course.color }} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#1A2A3A] mb-1">
                      {course.title}
                    </h3>
                    <p className="text-[#E87A5D] text-sm font-body font-medium">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Course Body */}
                  <div className="p-6 sm:p-8 space-y-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-[#E87A5D] text-[#E87A5D]" : "text-[#C4D6C4]"}`} />
                        ))}
                      </div>
                      <span className="text-[#1A2A3A] text-sm font-body ml-1">{course.rating}</span>
                      <span className="text-[#2D4A6E] text-sm font-body">({course.studentsCount})</span>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#2C7A6E]" />
                        <span className="text-[#1A2A3A] text-sm font-body">Age: {course.ageGroup}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#2C7A6E]" />
                        <span className="text-[#1A2A3A] text-sm font-body">Duration: {course.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#2D4A6E] text-sm font-body leading-relaxed">
                      {course.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <div>
                      <h4 className="text-[#1A2A3A] text-sm font-heading font-semibold mb-2">
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {course.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#E87A5D]" />
                            <span className="text-[#2D4A6E] text-xs font-body">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={course.link}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E87A5D] text-white font-heading font-semibold text-sm py-3 rounded-xl hover:bg-[#D95D39] transition-all duration-300 group-hover:scale-105 mt-4"
                    >
                      View Course Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[#2D4A6E] text-lg font-body">No courses match your filters.</p>
          <button
            onClick={() => {
              setFilters({ age: "all", level: "all" });
              window.dispatchEvent(new CustomEvent('filterChange', { 
                detail: { age: "all", level: "all" } 
              }));
            }}
            className="mt-4 text-[#E87A5D] font-body font-semibold hover:text-[#D95D39]"
          >
            Clear all filters
          </button>
        </div>
      )}
    </>
  );
};

export default CoursesGrid;