import React from "react";
export default function Note() {
  return (
    <section
      id="about"
      className="h-full flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div className="absolute inset-0 bg-black/90 bg-opacity-60"></div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
          An extraordinary note{" "}
          <span className="sm:block">
            for <span className="text-green-400">makers, creators..</span>
          </span>
        </h2>

        <div className="flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img src="/cards.png" alt="cards" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
          Creators around the planet use this app
          <span className="sm:block">
            for creating <span className="text-green-400">magic</span>
          </span>
        </p>
      </div>
    </section>
  );
}
