export default function Hero() {
    return (
      <div>
        <section className="relative text-center p-6 overflow-hidden">
          {/* Background layer */}
          <div className="absolute inset-0">
            <div className="h-1/2 bg-[#69776A]"></div>
            <div className="h-1/2 bg-[#FAEFE5]"></div> 
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white">High Protein Atta</h2>
            <br />
            <h1 className="text-2xl text-white">1 Roti = 7gm High-Quality Protein</h1>
            <img src="/amrit_aahar_product.png" alt="Amrit Aahaar" className="mx-auto my-4 w-1/2" />
            <button className="bg-[#5E412E] text-xl text-white px-10 py-2 rounded-full">SHOP NOW</button>
          </div>
          
        </section>
        <div className="bg-[#69776A] py-3 marquee-wrapper">
          <div className="marquee-content text-2xl font-semibold text-[#FAEFE5]">
            <span className="mx-4">Highly Digestible |</span>
            <span className="mx-4">FSSAI Approved |</span>
            <span className="mx-4">All Ingredients Openly Labeled |</span>
            <span className="mx-4">100% Vegetarian |</span>
            <span className="mx-4">Tastes better than regular Rotis |</span>
            <span className="mx-4">Highly Digestible |</span> {/* repeated for seamless scroll */}
            <span className="mx-4">FSSAI Approved |</span>
            <span className="mx-4">All Ingredients Openly Labeled |</span>
            <span className="mx-4">100% Vegetarian |</span>
            <span className="mx-4">Tastes better than regular Rotis |</span>
          </div>
        </div>

        </div>
    );
  }
  