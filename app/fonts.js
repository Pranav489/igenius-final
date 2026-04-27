import { Outfit, Quicksand, Figtree } from "next/font/google";

// Heading Font - Outfit (Geometric, modern, playful)
export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Body Font - Quicksand (Rounded, friendly, highly legible)
export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Statistics & Numbers Font - Figtree (Clean, sharp, modern)
export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Combine all fonts for the layout
export const fonts = `${outfit.variable} ${quicksand.variable} ${figtree.variable}`;