"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navItems } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "auto";
    };
  }, [isOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>  
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-[#FEFCF5]/95 backdrop-blur-md shadow-sm" : "bg-[#FEFCF5]"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex-shrink-0 -mt-0 sm:-mt-1 lg:-mt-2">
              <div className="relative w-auto h-12 sm:h-14 md:h-16 lg:h-20">
                <Image
                  src="/images/igenius-logo.png"
                  alt="I-Genius Abacus Academy"
                  width={200}
                  height={80}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 ml-auto mr-6">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-[#1A2A3A] font-body font-medium text-base xl:text-lg hover:text-[#E87A5D] transition-colors duration-200 whitespace-nowrap ${
                          openDropdown === index ? "text-[#E87A5D]" : ""
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : "group-hover:rotate-180"
                          }`}
                        />
                      </button>
                      
                      {/* Dropdown Menu - Increased font size */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-[#FEFCF5] rounded-xl overflow-hidden transition-all duration-200 transform origin-top-left ${
                          openDropdown === index
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible"
                        }`}
                        style={{
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
                          border: "1px solid rgba(196, 214, 196, 0.4)",
                        }}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropItem.href}
                              className="block px-4 py-3 text-[#1A2A3A] font-body text-base hover:bg-[#F8F4EA] hover:text-[#E87A5D] transition-colors duration-150"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#1A2A3A] font-body font-medium text-base xl:text-lg hover:text-[#E87A5D] transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Contact & CTA - Desktop */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              <a
                href="tel:+917770045402"
                className="flex items-center gap-2 text-[#2C7A6E] font-body font-semibold text-sm xl:text-base hover:text-[#E87A5D] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                +91 77700 45402
              </a>
              <Link
                href="/contact"
                className="bg-[#E87A5D] text-[#FEFCF5] font-heading font-semibold text-sm xl:text-base px-5 xl:px-6 py-2.5 rounded-full hover:bg-[#D95D39] transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2 text-[#1A2A3A] hover:text-[#E87A5D] transition-colors -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#FEFCF5] z-50 transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with logo and close button */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-[#C4D6C4]/30 bg-[#FEFCF5]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="relative w-auto h-10">
              <Image
                src="/images/igenius-logo.png"
                alt="I-Genius Abacus Academy"
                width={150}
                height={60}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#1A2A3A] hover:text-[#E87A5D] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-5 py-6">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="flex items-center justify-between w-full text-left text-[#1A2A3A] font-body font-medium text-lg py-4 border-b border-[#C4D6C4]/20"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Mobile Dropdown with Slide Animation */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openDropdown === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="mt-2 ml-3 space-y-1 pb-2">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            href={dropItem.href}
                            className="block py-3 text-[#2D4A6E] font-body text-base hover:text-[#E87A5D] transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-[#1A2A3A] font-body font-medium text-lg py-4 border-b border-[#C4D6C4]/20"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact Section */}
          <div className="px-5 py-6 border-t border-[#C4D6C4]/30 bg-[#F8F4EA]/30">
            <a
              href="tel:+917770045402"
              className="flex items-center justify-center gap-3 w-full bg-white text-[#2C7A6E] font-body font-semibold text-base py-3.5 rounded-xl mb-3 hover:bg-[#2C7A6E] hover:text-white transition-all duration-200 border border-[#2C7A6E]/20"
            >
              <Phone className="w-5 h-5" />
              Call +91 77700 45402
            </a>
            <Link
              href="/contact"
              className="block w-full bg-[#E87A5D] text-white font-heading font-semibold text-center text-base py-3.5 rounded-xl hover:bg-[#D95D39] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 sm:h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;