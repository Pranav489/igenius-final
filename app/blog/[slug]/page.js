import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ChevronLeft, ArrowRight, BookOpen, Sparkles } from "lucide-react";
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
import { siteSEO } from "@/utils/seoConfig";

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} | I-Genius Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteSEO.baseUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.image || `/images/blog/${post.slug}.jpg` }]
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Function to add Tailwind classes to HTML content with updated colors
  const formatContent = (html) => {
    return html
      .replace(/<p>/g, '<p class="text-xl sm:text-2xl text-[#1A2A3A] font-body leading-relaxed mb-6">')
      .replace(/<h2>/g, '<h2 class="text-3xl sm:text-4xl font-heading font-bold text-[#1A2A3A] mt-8 sm:mt-10 mb-4">')
      .replace(/<h3>/g, '<h3 class="text-2xl sm:text-3xl font-heading font-semibold text-[#E87A5D] mt-6 mb-3">')
      .replace(/<ul>/g, '<ul class="text-xl sm:text-2xl text-[#1A2A3A] font-body space-y-2 mb-6 pl-6 list-disc">')
      .replace(/<ol>/g, '<ol class="text-xl sm:text-2xl text-[#1A2A3A] font-body space-y-2 mb-6 pl-6 list-decimal">')
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(/<strong>/g, '<strong class="text-[#E87A5D] font-semibold">')
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-[#E87A5D] pl-6 my-6 italic text-xl sm:text-2xl text-[#1A2A3A]">');
  };

  return (
    <main className="min-h-screen bg-[#FEFCF5] overflow-x-hidden">
      
      {/* ========== HERO SECTION - Deep Reading Theme ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2D4A6E] to-[#1A2A3A]">
        
        {/* Doodles as ambient reading atmosphere */}
        <div className="absolute top-[15%] left-[5%] opacity-25 hover:opacity-35 transition-opacity duration-700">
          <ConstellationDoodle />
        </div>
        
        <div className="absolute bottom-[20%] right-[4%] opacity-20 hover:opacity-30 transition-opacity duration-700">
          <MathFlowDoodle />
        </div>
        
        <div className="absolute top-[30%] right-[8%] opacity-30 hover:scale-105 transition-transform duration-500">
          <NeuralPathDoodle />
        </div>
        
        <div className="absolute bottom-[10%] left-[3%] opacity-25">
          <AbacusBeadsDoodle />
        </div>
        
        {/* Floating beads - like turning pages */}
        <div className="absolute top-[20%] left-[2%] opacity-35 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[35%] right-[2%] opacity-30 animate-gentle-float delay-500">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[50%] left-[94%] opacity-25 animate-gentle-float delay-1000">
          <SingleBeadDoodle />
        </div>
        
        {/* Wave separator transition */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#C4D6C4] hover:text-[#E87A5D] mb-6 transition-all duration-300 hover:gap-3 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-body">Back to Blog</span>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#E87A5D]/20 hover:bg-[#E87A5D]/30 transition-colors">
              <BookOpen className="w-3 h-3 text-[#E87A5D]" />
              <span className="text-[#E87A5D] text-sm font-body font-semibold">{post.category}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#C4D6C4] text-base font-body">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>{post.author}</span></div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{post.readTime}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOG CONTENT - Deep Dive Reading Theme ========== */}
      <section className="section-container section-bg-cream">
        
        {/* Wave separator as page entry */}
        <div className="absolute top-0 left-0 opacity-10 rotate-180">
          <WaveSeparator />
        </div>
        
        {/* Constellation - like connecting ideas while reading */}
        <div className="absolute top-[15%] right-[3%] opacity-15 hover:opacity-25 transition-opacity duration-700 pointer-events-none">
          <ConstellationDoodle />
        </div>
        
        {/* Neural pathways - thoughts forming */}
        <div className="absolute bottom-[25%] left-[2%] opacity-10 hover:opacity-20 transition-opacity duration-700 pointer-events-none">
          <NeuralPathDoodle />
        </div>
        
        {/* Math flow - knowledge flowing */}
        <div className="absolute top-[40%] left-[95%] opacity-15 pointer-events-none">
          <MathFlowDoodle />
        </div>
        
        {/* Scattered beads - key takeaways */}
        <div className="absolute top-[10%] left-[92%] opacity-20 pointer-events-none">
          <SingleBeadDoodle />
        </div>
        <div className="absolute bottom-[30%] right-[94%] opacity-15 pointer-events-none">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[60%] left-[89%] opacity-25 pointer-events-none">
          <SingleBeadDoodle />
        </div>
        
        {/* Static confetti - celebration of learning while reading */}
        <div className="absolute top-[5%] right-[2%] w-32 h-32 opacity-20 pointer-events-none">
          <StaticConfetti density="low" />
        </div>

        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            
            {/* Featured Image with subtle animation */}
            <div className="relative aspect-video rounded-media overflow-hidden bg-[#F8F6F0] mb-10 group/image">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity z-10"></div>
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" />
              
              {/* Spark effect on image hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Sparkles className="w-12 h-12 text-white drop-shadow-lg animate-pulse" />
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* Tags Section - Knowledge clusters */}
            <div className="mt-12 pt-8 border-t border-[#C4D6C4]/30">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-[#1A2A3A] text-lg font-body font-semibold mr-2">📚 Tags:</span>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="group/tag bg-[#F8F6F0] px-4 py-2 rounded-full text-[#1A2A3A] text-base font-body transition-all duration-300 hover:bg-[#E87A5D]/10 hover:scale-105 cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION - Inspiration to Act ========== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#E87A5D] to-[#D95D39]">
        
        {/* Wave separator transition */}
        <div className="absolute top-0 left-0 opacity-20 rotate-180">
          <WaveSeparator />
        </div>
        
        {/* Dancing beads celebration */}
        <div className="absolute top-[15%] left-[8%] opacity-25 hover:scale-110 transition-transform duration-500">
          <AbacusBeadsDoodle />
        </div>
        
        <div className="absolute bottom-[25%] right-[5%] opacity-30 animate-gentle-float">
          <SingleBeadDoodle />
        </div>
        <div className="absolute top-[30%] right-[10%] opacity-25 animate-gentle-float delay-400">
          <SingleBeadDoodle />
        </div>
        
        {/* Confetti celebration */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <StaticConfetti density="medium" />
        </div>
        
        {/* Constellation of future possibilities */}
        <div className="absolute bottom-[15%] left-[5%] opacity-20">
          <ConstellationDoodle />
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 opacity-15">
          <WaveSeparator />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="animate-gentle-float">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
              Ready to Transform Your Child's Future?
            </h2>
          </div>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 font-body">
            Join over 1.5 lakh students who have discovered their genius with I-Genius
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#E87A5D] font-heading font-semibold text-lg px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
            Enroll Now 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}