import React from "react";

const cards = [
  {
    icon: "/icons/molecule.png", // replace with your actual icon path
    text: "100% Pure Ingredients, Clinically Proven to provide High-Quality Protein",
    button: "VIEW LAB REPORT",
  },
  {
    icon: "/icons/plate.png",
    text: "42gm Protein Daily, Effortlessly, Just from 6 Rotis",
  },
  {
    icon: "/icons/calendar.png",
    text: "Tailored for your lifestyle. For real-life sustainable results",
  },
  {
    icon: "/icons/wallet.png",
    text: "Incredible Value for Money, Economical source of Good Quality Protein",
  },
];

export default function TestedForRealLife() {
  return (
    <div className="bg-[#FAEFE5] py-10 px-4">
      <div className="max-w-4xl mx-auto rounded-2xl bg-[#5E412E] p-6">
        <h2 className="text-center text-white text-xl font-semibold mb-6">
          TESTED FOR REAL LIFE
        </h2>

        <div className="space-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex justify-between items-center rounded-lg p-4"
            >
              {/* Left - Icon + Text */}
              <div className="flex items-center gap-4 justify-between bg-white px-4 py-2 rounded-2xl">
                <img
                  src={card.icon}
                  alt="Icon"
                  className="w-10 h-10 object-contain mt-1"
                />
                <p className="text-[#5E412E] text-sm max-w-sm">{card.text}</p>
              </div>

              {/* Right - Video Placeholder or Button */}
              <div className="flex flex-col px-4 items-center gap-2">
                <div className="bg-white/20 w-28 h-16 flex flex-col items-center justify-center rounded">
                  <img
                    src="/icons/play.png" // Replace with your icon
                    alt="Video"
                    className="w-6 h-6 mb-1 opacity-70"
                  />
                  <span className="text-xs text-white opacity-70">Video Coming Soon</span>
                </div>
                {card.button && (
                  <button className="text-xs text-white border border-white rounded px-2 py-1 hover:bg-white hover:text-[#5E412E] transition">
                    {card.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>
      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#3D2A1E] text-white px-6 py-2 rounded-full hover:bg-[#beab95] transition">
            Learn More
            </button>
            <button className="bg-[#3D2A1E] text-white px-6 py-2 rounded-full hover:bg-[#beab95] transition">
            SHOP NOW
            </button>
        </div>
    </div>
  );
}
