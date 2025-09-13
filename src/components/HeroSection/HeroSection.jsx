import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="herosection min-h-screen text-white">
      <div className="relative flex flex-col justify-between h-[80vh] md:hidden">
        <div className="mt-12 px-12 font-semibold">
          <h1 className="text-5xl sm:text-6xl">Note Taking</h1>
          <h1 className="text-5xl sm:text-6xl text-[#00BB77]">Redefined</h1>
        </div>
        <div className="flex justify-center items-center flex-grow">
          <img
            src="/octopusMobile.png"
            alt="CirriNote mascot"
            className="w-full h-96 absolute right-0 object-cover"
          />
        </div>
      </div>

      <div className="hidden md:flex justify-center items-end h-full">
        <img
          src="/Octopus.png"
          alt="CirriNote mascot"
          className="w-8/12 h-full object-cover"
        />
      </div>
    </div>
  );
}
