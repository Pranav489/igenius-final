import AboutSection from "@/components/home/AboutSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import ClassModeSection from "@/components/home/ClassModeSection";
import CoursesSection from "@/components/home/CoursesSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideoSlider from "@/components/home/VideoSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { buildMetadata } from "@/utils/seoConfig";
import Image from "next/image";

export const metadata = buildMetadata("home");


export default function Home() {
  return (
    <>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <CoursesSection />
    <WhyChooseUs />
    <ClassModeSection />
    <AchievementsSection />
    <VideoSlider />
    <TestimonialsSection />
    <CTASection />
    </>
  );
}
