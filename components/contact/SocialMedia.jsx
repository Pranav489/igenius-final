"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, name: "Facebook", href: "https://facebook.com/igeniusabacus", color: "#1877F2" },
  { icon: FaInstagram, name: "Instagram", href: "https://instagram.com/igeniusabacus", color: "#E4405F" },
  { icon: FaTwitter, name: "Twitter", href: "https://twitter.com/igeniusabacus", color: "#1DA1F2" },
  { icon: FaYoutube, name: "YouTube", href: "https://youtube.com/igeniusabacus", color: "#FF0000" },
  { icon: FaLinkedin, name: "LinkedIn", href: "https://linkedin.com/company/igeniusabacus", color: "#0A66C2" }
];

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {socialLinks.map((social, idx) => {
        const Icon = social.icon;
        return (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-16 h-16 rounded-full bg-[#F8F6F0] flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ 
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = social.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F8F6F0";
            }}
            aria-label={social.name}
          >
            <Icon className="w-8 h-8 text-[#2D4A6E] group-hover:text-white transition-colors" />
          </a>
        );
      })}
    </div>
  );
}