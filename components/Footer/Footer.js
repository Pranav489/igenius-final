"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronRight
} from "lucide-react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin 
} from "react-icons/fa";
import { 
  AbacusBeadsDoodle, 
  NeuralPathDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick Links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Courses", href: "/courses" },
    { name: "School Project", href: "/school-project" },
    { name: "Franchise", href: "/franchise" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  // Courses Links
  const courseLinks = [
    { name: "Abacus (Age 5-14)", href: "/courses/abacus" },
    { name: "Vedic Maths", href: "/courses/vedic-math" },
    { name: "Rubik's Cube", href: "/courses/rubik-cube" },
  ];

  // Media Links
  const mediaLinks = [
    { name: "Photo Gallery", href: "/media/gallery" },
    { name: "Video Gallery", href: "/media/videos" },
  ];

  // Social Links with react-icons
  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/igeniusabacus", color: "#1877F2" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/igeniusabacus", color: "#E4405F" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/igeniusabacus", color: "#1DA1F2" },
    { name: "Youtube", icon: FaYoutube, href: "https://youtube.com/igeniusabacus", color: "#FF0000" },
    { name: "Linkedin", icon: FaLinkedin, href: "https://linkedin.com/company/igeniusabacus", color: "#0A66C2" },
  ];

  return (
    <footer className="relative bg-[#1A2A3A] text-[#FEFCF5] overflow-hidden">
      
      {/* ========== DOODLES - Using React Components ========== */}
      
      {/* Doodle 1: Abacus Beads - Top Right */}
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none z-0">
        <AbacusBeadsDoodle />
      </div>

      {/* Doodle 2: Neural Pathway - Bottom Left */}
      <div className="absolute bottom-0 left-0 opacity-25 pointer-events-none z-0">
        <NeuralPathDoodle />
      </div>

      {/* Doodle 3: Math Symbols - Bottom Right */}
      <div className="absolute bottom-20 right-10 opacity-25 pointer-events-none z-0">
        <MathFlowDoodle />
      </div>

      {/* Doodle 4: Constellation - Left Middle */}
      <div className="absolute top-1/3 left-0 opacity-20 pointer-events-none z-0">
        <ConstellationDoodle />
      </div>

      {/* Doodle 5: Wave Separator at Top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 opacity-20">
        <WaveSeparator />
      </div>

      {/* Doodle 6: Scattered Single Beads */}
      <div className="absolute top-[15%] right-[25%] opacity-35 pointer-events-none z-0 animate-gentle-float">
        <SingleBeadDoodle />
      </div>

      <div className="absolute bottom-[25%] right-[15%] opacity-30 pointer-events-none z-0 animate-gentle-float delay-500">
        <div className="transform scale-75">
          <SingleBeadDoodle />
        </div>
      </div>

      <div className="absolute top-[40%] left-[15%] opacity-25 pointer-events-none z-0 animate-spin-slow">
        <div className="transform scale-50">
          <SingleBeadDoodle />
        </div>
      </div>

      <div className="absolute bottom-[35%] left-[20%] opacity-20 pointer-events-none z-0 animate-gentle-float delay-1000">
        <div className="transform scale-60">
          <SingleBeadDoodle />
        </div>
      </div>

      {/* Doodle 7: Static Confetti - Subtle celebration */}
      <div className="absolute top-[20%] right-[5%] w-[200px] h-[200px] opacity-15 pointer-events-none z-0">
        <StaticConfetti density="low" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 content-container py-12 sm:py-16 lg:py-20">
        
        {/* Top Section - Logo & About */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-auto h-14 sm:h-16">
                <Image
                  src="/images/igenius-logo.png"
                  alt="I-Genius Abacus Academy"
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain brightness-110"
                  priority
                />
              </div>
            </Link>
            <p className="text-[#C4D6C4] text-base sm:text-lg font-body leading-relaxed">
              Established in 2007, I-Genius has been a pioneer in providing high-quality Abacus Education to students across India and abroad.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-xs px-3 py-1.5 bg-[#2D4A6E]/50 rounded-full text-[#C4D6C4] font-body border border-[#2C7A6E]/30">
                ISO 9001-2015
              </span>
              <span className="text-xs px-3 py-1.5 bg-[#2D4A6E]/50 rounded-full text-[#C4D6C4] font-body border border-[#2C7A6E]/30">
                Govt. Authorised
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-[#E87A5D]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] transition-colors duration-200 text-base sm:text-lg font-body"
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses & Media Combined */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-[#E87A5D]">
              Courses
            </h3>
            <ul className="space-y-3 mb-8">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] transition-colors duration-200 text-base sm:text-lg font-body"
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-[#E87A5D]">
              Media
            </h3>
            <ul className="space-y-3">
              {mediaLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] transition-colors duration-200 text-base sm:text-lg font-body"
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-[#E87A5D]">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E87A5D] flex-shrink-0 mt-0.5" />
                <span className="text-[#C4D6C4] text-base sm:text-lg font-body leading-relaxed">
                  Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner, Sharanpur Road, Nashik
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E87A5D] flex-shrink-0" />
                <a href="tel:+917770045402" className="text-[#C4D6C4] hover:text-[#E87A5D] transition-colors text-base sm:text-lg font-body">
                  +91 77700 45402
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E87A5D] flex-shrink-0" />
                <a href="mailto:info.igeniusnsk@gmail.com" className="text-[#C4D6C4] hover:text-[#E87A5D] transition-colors text-base sm:text-lg font-body break-all">
                  info.igeniusnsk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E87A5D] flex-shrink-0 mt-0.5" />
                <span className="text-[#C4D6C4] text-base sm:text-lg font-body">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Stats Bar */}
        <div className="py-8 mb-8 border-t border-b border-[#2D4A6E]/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl lg:text-5xl mb-2">550+</div>
              <div className=" text-sm sm:text-base">Franchisees</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl lg:text-5xl mb-2">165+</div>
              <div className="text-sm sm:text-base">School Projects</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl lg:text-5xl mb-2">1.5L+</div>
              <div className="text-sm sm:text-base">Students Trained</div>
            </div>
            <div className="stat-item group">
              <div className="stat-number text-3xl sm:text-4xl lg:text-5xl mb-2">50+</div>
              <div className="text-sm sm:text-base">Qualified Trainers</div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2D4A6E]/50 flex items-center justify-center text-[#C4D6C4] hover:text-white transition-all duration-300 hover:scale-110"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2D4A6E/50";
                  }}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="text-center sm:text-right">
            <p className="text-[#C4D6C4] text-sm sm:text-base font-body">
              © {currentYear} I-Genius Abacus Academy India Pvt. Ltd.
            </p>
            <p className="text-[#8AA3A0] text-xs sm:text-sm font-body mt-1">
              All rights reserved. | Designed with ❤️ for young minds
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;