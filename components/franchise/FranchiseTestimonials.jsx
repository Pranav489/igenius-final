"use client";

import { Star, Quote } from "lucide-react";

const franchiseTestimonials = [
  {
    name: "Mrs. Suvarna Shewale",
    city: "Nashik",
    text: "Joining I-Genius as a franchise partner has been the best business decision of my life. The support from HQ is excellent and students love the program.",
    image: "https://igeniusindia.in/admin/assets/images/franchise/12723.jpg",
    rating: 5
  },
  {
    name: "Mrs. Bharti Sonawane",
    city: "Pune",
    text: "I started as a unit franchise 3 years ago with 20 students. Today I have 120+ students. I-Genius brand name does the selling for you!",
    image: "https://igeniusindia.in/admin/assets/images/franchise/814494.png",
    rating: 5
  },
  {
    name: "Mrs. Harshada Patil",
    city: "Aurangabad",
    text: "The training and curriculum support is exceptional. My students consistently win at national competitions which builds great trust with parents.",
    image: "https://igeniusindia.in/admin/assets/images/franchise/939556.png",
    rating: 5
  },
  {
    name: "Mrs. Rupali Deore",
    city: "Nashik",
    text: "Running an I-Genius franchise is truly fulfilling — I am impacting children's lives while building a profitable business. Highly recommended!",
    image: "https://igeniusindia.in/admin/assets/images/franchise/621763.jpg",
    rating: 5
  },
  {
    name: "Mrs. Pratibha Shelar",
    city: "Mumbai",
    text: "The marketing support and competition events from I-Genius HQ help me attract new students easily. My centre is growing month after month.",
    image: "https://igeniusindia.in/admin/assets/images/franchise/921043.jpg",
    rating: 5
  },
  {
    name: "Mrs. Ujjwala Bachhav",
    city: "Jalgaon",
    text: "What I love most is the sense of community among all franchisees. We share ideas, learn from each other, and grow together under I-Genius.",
    image: "https://igeniusindia.in/admin/assets/images/franchise/648482.JPG",
    rating: 5
  },
  {
    name: "Mrs. Mrunal Sonawane",
    city: "Dhule",
    text: "As a first-time entrepreneur, I was nervous. But I-Genius's step-by-step onboarding made everything smooth. Best investment I have ever made.",
    image: "https://igeniusindia.in/admin/assets/images/franchise/960918.png",
    rating: 5
  }
];

export default function FranchiseTestimonials() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {franchiseTestimonials.map((testimonial, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-[#C4D6C4]/30 last:border-0">
          {/* Image - Circular, borderless */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#E87A5D]/20 to-[#2C7A6E]/20 flex items-center justify-center">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content - Flowing text, no boxes */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-heading font-bold text-[#1A2A3A]">{testimonial.name}</h3>
                <p className="text-[#E87A5D] text-base font-body font-medium">{testimonial.city}</p>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E87A5D] text-[#E87A5D]" />
                ))}
              </div>
            </div>
            <div className="relative">
              <Quote className="absolute -top-1 -left-2 w-6 h-6 text-[#E87A5D]/20" />
              <p className="text-[#2D4A6E] text-lg font-body leading-relaxed pl-6">{testimonial.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}