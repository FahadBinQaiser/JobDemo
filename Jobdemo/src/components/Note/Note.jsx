import React from "react";
export default function Note() {
  return (
    <section
    className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
    style={{
      backgroundImage: "url('/Section.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-black/90 bg-opacity-60"></div>

    <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
      {/* Main heading */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
        An extraordinary note
        <br />
        for <span className="text-green-400">makers, creators..</span>
      </h2>

      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-24 h-24 md:w-32 md:h-32">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="20" y="25" width="50" height="60" rx="4" />
            <rect x="25" y="20" width="50" height="60" rx="4" />
            <rect x="30" y="15" width="50" height="60" rx="4" />
            <line x1="40" y1="30" x2="65" y2="30" />
            <line x1="40" y1="40" x2="70" y2="40" />
            <line x1="40" y1="50" x2="60" y2="50" />
          </svg>
        </div>
      </div>

      {/* Bottom text */}
      <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
        Creators around the planet use this app
        <br />
        for creating <span className="text-green-400">magic</span>
      </p>
    </div>
  </section>

  );
}
