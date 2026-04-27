import Link from "next/link";
import { Calendar, Clock, User, BookOpen, ChevronRight, Sparkles, PenTool, Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { 
  AbacusBeadsDoodle, 
  NeuralPathDoodle, 
  WaveSeparator,
  ConstellationDoodle,
  MathFlowDoodle,
  SingleBeadDoodle,
  StaticConfetti
} from "@/components/Doodles/Doodles";
import { buildMetadata } from "@/utils/seoConfig";

export const metadata = buildMetadata("blog");


const categories = ["All", "Abacus", "Vedic Math", "Rubik Cube", "Franchise"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Knowledge Stream Theme ========== */}
      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles floating like knowledge particles */}
        <div className="absolute top-[15%] left-[8%] opacity-25 rotate-12 hover:rotate-6 transition-transform duration-700">
          <ConstellationDoodle />
        </div>
        <div className="absolute bottom-[25%] right-[6%] opacity-20 -rotate-6 hover:rotate-0 transition-transform duration-700">
          <MathFlowDoodle />
        </div>
        <div className="absolute top-[40%] right-[12%] opacity-30 hover:scale-105 transition-transform duration-500">
          <NeuralPathDoodle />
        </div>
        <div className="absolute bottom-[10%] left-[4%] opacity-25 hover:scale-110 transition-transform duration-500">
          <AbacusBeadsDoodle />
        </div>
        
        {/* Floating beads - like ideas being born */}
        <div className="absolute top-[25%] left-[3%] opacity-40 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[40%] right-[3%] opacity-35 animate-gentle-float delay-300">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[60%] left-[92%] opacity-30 animate-gentle-float delay-700">
          <SingleBeadDoodle />
        </div>
        
        {/* Wave at bottom like flowing knowledge */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 content-container text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <PenTool className="w-5 h-5 text-[#E87A5D]" />
            <span className="text-white text-base font-body">Insights & Updates</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-5">
            Our{" "}
            <span className="text-[#E87A5D] relative inline-block">
              Blog
              <svg className="absolute -bottom-4 left-0 w-full h-3" viewBox="0 0 200 10">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#E87A5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-[#C4D6C4] text-xl max-w-2xl mx-auto font-body">
            Expert insights on brain development, abacus training, and child education
          </p>
        </div>
      </section>

      {/* ========== BLOG POSTS SECTION - Reading Journey Theme ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Wave separator as page turn */}
        <div className="absolute top-0 left-0 opacity-10 rotate-180">
          <WaveSeparator />
        </div>
        
        {/* Constellation - like connecting ideas */}
        <div className="absolute top-[10%] right-[5%] opacity-15 hover:opacity-30 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        {/* Abacus beads counting posts */}
        <div className="absolute bottom-[15%] left-[3%] opacity-20">
          <AbacusBeadsDoodle />
        </div>
        
        {/* Math flow weaving through articles */}
        <div className="absolute top-[30%] left-[2%] opacity-10 hover:opacity-20 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        {/* Scattered beads - like footnotes or highlights */}
        <div className="absolute top-[20%] left-[93%] opacity-25">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[40%] right-[90%] opacity-20">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[70%] left-[88%] opacity-30">
          <SingleBeadDoodle />
        </div>
        
        {/* Static confetti - celebration of knowledge */}
        <div className="absolute top-[5%] left-[2%] w-40 h-40 opacity-30">
          <StaticConfetti density="low" />
        </div>

        <div className="content-container">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-5 py-2.5 rounded-full text-base font-body transition-all duration-300 hover:scale-105 hover:bg-[#E87A5D] hover:text-white ${idx === 0 ? 'bg-[#E87A5D] text-white' : 'bg-[#F8F6F0] text-[#1A2A3A]'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts - Knowledge journey */}
          <div className="space-y-16 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`group relative flex flex-col md:flex-row gap-8 pb-16 ${index !== blogPosts.length - 1 ? 'border-b border-[#C4D6C4]/30' : ''}`}>
                
                {/* Hover constellation effect on each article */}
                <div className="absolute -top-4 -left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <ConstellationDoodle />
                </div>
                
                <Link href={`/blog/${post.slug}`} className="md:w-2/5 relative group/image overflow-hidden rounded-media">
                  <div className="relative aspect-video bg-[#F8F6F0]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity z-10"></div>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105" />
                  </div>
                  {/* Spark doodle on image hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="relative">
                      <div className="absolute -inset-8 animate-ping rounded-full bg-[#E87A5D]/20"></div>
                      <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </Link>

                <div className="md:w-3/5 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[#E87A5D] text-sm font-body font-semibold">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C4D6C4]"></span>
                    <div className="flex items-center gap-1 text-[#1A2A3A] text-sm font-body">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-[#C4D6C4]"></span>
                    <div className="flex items-center gap-1 text-[#1A2A3A] text-sm font-body">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1A2A3A] group-hover:text-[#E87A5D] transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-[#1A2A3A] text-lg font-body leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-[#1A2A3A] text-sm font-body">
                      <User className="w-4 h-4" />
                      <span>{post.author.split(',')[0]}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-[#E87A5D] font-body font-medium hover:gap-2 transition-all group-hover:gap-2">
                      Read More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Celebration of Learning ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        
        {/* Wave separator as transition */}
        <div className="absolute top-0 left-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        
        {/* Dancing beads */}
        <div className="absolute top-[15%] left-[8%] opacity-25 hover:scale-110 transition-transform duration-500">
          <AbacusBeadsDoodle />
        </div>
        
        {/* Floating single beads */}
        <div className="absolute bottom-[20%] right-[10%] opacity-30 animate-bounce">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[30%] right-[5%] opacity-25 animate-bounce delay-300">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti rain celebration */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <StaticConfetti density="medium" />
        </div>
        
        {/* Constellation of hope */}
        <div className="absolute bottom-[15%] left-[5%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-body">
            Join thousands of happy parents who have witnessed their children's transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}