import React, { useRef, useState, useEffect } from "react";

export default function CustomerTestimonials() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const element = scrollRef.current;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const progress = (element.scrollLeft / maxScroll) * 100;
    setScrollProgress(progress || 0);
  };

  const handleSliderChange = (e) => {
    const element = scrollRef.current;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const newScrollLeft = (e.target.value / 100) * maxScroll;
    element.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    const element = scrollRef.current;
    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    { id: 1, title: "Video Coming Soon", image: "/video-placeholder.png" },
    { id: 2, title: "Video Coming Soon", image: "/video-placeholder.png" },
    { id: 3, title: "Video Coming Soon", image: "/video-placeholder.png" },
    { id: 4, title: "Video Coming Soon", image: "/video-placeholder.png" },
  ];

  return (
    <div className="bg-[#5E7464] rounded-2xl px-4 py-6 text-white text-center w-full max-w-6xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-6">LISTEN TO OUR CUSTOMERS</h2>

      {/* Horizontally scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-1 pb-4 scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="shrink-0 w-56 h-72 bg-[#ECECEC] flex items-center justify-center rounded-lg scroll-snap-align-start"
          >
            <div className="text-gray-500 text-sm text-center">
              <img src={t.image} alt={t.title} className="w-10 h-10 mx-auto mb-2" />
              {t.title}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll slider */}
      <div className="px-6 my-2">
        <input
          type="range"
          min="0"
          max="100"
          value={scrollProgress}
          onChange={handleSliderChange}
          className="w-full accent-[#B5D3BC] h-2 rounded-lg overflow-hidden cursor-pointer"
        />
      </div>

      {/* Caption */}
      <p className="text-sm mt-4">
        We're so proud to be a small part of your big journey.
      </p>
    </div>
  );
}
