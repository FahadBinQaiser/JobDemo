import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="bg-black">
      <div className="herosection min-h-screen text-white">
        <header className="flex items-center justify-between px-3 sm:px-8 py-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-10 sm:h-10">
              <img src="/logo/Logomark.png" alt="CirriNote" />
            </div>
            <span className="text-white text-lg sm:text-xl font-semibold">
              CirriNote
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-white hover:text-[#00BB77] transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-white hover:text-[#00BB77] transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#00BB77] transition-colors"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#00BB77] transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex relative items-center cursor-pointer bg-white text-black rounded-full w-[167px] pr-6 gap-4 overflow-hidden group">
            <div className="absolute inset-y-1 left-1 h-10 w-10 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]"></div>

            <div className="relative z-10 flex items-center justify-center w-12 h-12">
              <img src="/cart.png" alt="cart" className="w-5 h-5" />
            </div>

            <button className="relative transition-colors cursor-pointer duration-500 group-hover:text-white">
              Try Now
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <div className="flex relative items-center cursor-pointer bg-white text-black rounded-full w-[130px] transition duration-150 hover:scale-120 pr-2 gap-4 overflow-hidden group">
              <div className="absolute inset-y-1 left-1 h-8 w-8 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]"></div>

              <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                <img src="/cart.png" alt="cart" className="w-4 h-4" />
              </div>

              <button className="relative transition-colors cursor-pointer duration-500 group-hover:text-white text-sm">
                Try Now
              </button>
            </div>
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

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
    </div>
  );
}
