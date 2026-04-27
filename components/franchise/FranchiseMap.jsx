"use client";

import { useEffect, useRef, useState } from "react";

// Franchise centers data with coordinates
const franchiseCenters = [
  { id: 1, name: "I-Genius Abacus - Canada Corner", address: "Office No. 7/8/9, 2nd Floor Silver Plaza, Canada Corner", city: "Nashik", lat: 20.0059, lng: 73.7897, phone: "+91 7770045402" },
  { id: 2, name: "I-Genius Abacus - College Road", address: "Shop No. 5, Sai Plaza, College Road", city: "Nashik", lat: 20.0100, lng: 73.7800, phone: "+91 7770045403" },
  { id: 3, name: "I-Genius Abacus - Gangapur Road", address: "1st Floor, City Center Mall, Gangapur Road", city: "Nashik", lat: 19.9970, lng: 73.7820, phone: "+91 7770045404" },
  { id: 4, name: "I-Genius Abacus - Kothrud", address: "Shop No. 10, Kubera Complex, Kothrud", city: "Pune", lat: 18.5069, lng: 73.8220, phone: "+91 7770045410" },
  { id: 5, name: "I-Genius Abacus - Hinjewadi", address: "2nd Floor, Megapolis Mall, Hinjewadi", city: "Pune", lat: 18.5912, lng: 73.7382, phone: "+91 7770045411" },
  { id: 6, name: "I-Genius Abacus - Andheri", address: "Shop No. 20, Shoppers Stop Plaza, Andheri West", city: "Mumbai", lat: 19.1196, lng: 72.8489, phone: "+91 7770045420" },
  { id: 7, name: "I-Genius Abacus - Dadar", address: "1st Floor, Dadar Station Plaza, Dadar East", city: "Mumbai", lat: 19.0176, lng: 72.8471, phone: "+91 7770045421" },
  { id: 8, name: "I-Genius Abacus - Dhule City Center", address: "Shop No. 15, City Center Mall", city: "Dhule", lat: 20.9042, lng: 74.7749, phone: "+91 7770045430" },
  { id: 9, name: "I-Genius Abacus - Malegaon Main", address: "1st Floor, Shree Complex, Main Road", city: "Malegaon", lat: 20.5565, lng: 74.5348, phone: "+91 7770045440" },
];

export default function FranchiseMap() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  // Load Leaflet CSS and initialize map
  useEffect(() => {
    // Import Leaflet CSS
    import("leaflet/dist/leaflet.css");
    
    // Fix for default marker icons in Leaflet with Next.js
    const L = require("leaflet");
    
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });

    // Initialize map centered on Maharashtra
    const mapInstance = L.map(mapRef.current).setView([19.5, 75.5], 6.5);
    setMap(mapInstance);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: "abcd",
      maxZoom: 19,
      minZoom: 3
    }).addTo(mapInstance);

    // Add markers for all franchise centers
    franchiseCenters.forEach((center) => {
      const popupContent = `
        <div class="franchise-popup" style="min-width: 200px;">
          <h4 style="margin: 0 0 5px 0; color: #E87A5D; font-family: Outfit, sans-serif; font-weight: 600;">${center.name}</h4>
          <p style="margin: 0 0 5px 0; font-size: 12px; color: #2D4A6E;">${center.address}</p>
          <p style="margin: 0 0 5px 0; font-size: 11px; color: #2C7A6E;">${center.city}</p>
          <a href="/franchise/${center.city.toLowerCase().replace(/\s+/g, '-')}/${center.id}" style="display: inline-block; margin-top: 5px; padding: 4px 12px; background-color: #E87A5D; color: white; text-decoration: none; border-radius: 20px; font-size: 12px; font-family: Outfit, sans-serif;">View Details</a>
        </div>
      `;
      
      L.marker([center.lat, center.lng])
        .bindPopup(popupContent)
        .addTo(mapInstance);
    });

    // Cleanup
    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" style={{ backgroundColor: "#F8F6F0" }} />
    </div>
  );
}