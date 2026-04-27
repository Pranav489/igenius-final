"use client";

const franchiseVideos = [
  { id: 1, title: "Franchise Success Story", videoId: "0dKFAqHVoVY" },
  { id: 2, title: "Training & Support Overview", videoId: "oSV79dGR6xo" },
  { id: 3, title: "Student Performances", videoId: "LExNeDIT5us" },
  { id: 4, title: "Competition Highlights", videoId: "Sz0_0Rjrat0" },
  { id: 5, title: "Franchisee Testimonial", videoId: "khVVTl1qzJk" },
  { id: 6, title: "Success Stories", videoId: "yrZlMRTxSzU" }
];

export default function FranchiseVideos() {
  return (
    <>
      {/* Desktop View - Grid (3 videos then 3 videos) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {franchiseVideos.slice(0, 3).map((video) => (
          <div key={video.id} className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-lg group">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
      
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {franchiseVideos.slice(3, 6).map((video) => (
          <div key={video.id} className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-lg group">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* Mobile View - Simple scrollable row */}
      <div className="block md:hidden">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
          {franchiseVideos.map((video) => (
            <div key={video.id} className="w-80 flex-shrink-0 snap-start">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-[#1A2A3A] text-sm font-body font-medium mt-2 text-center truncate">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}