import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileOpen]);

  return (
    <header
      className={`flex items-center justify-between px-3 sm:px-8 py-6 transition-all duration-300 ${
        scrolled
          ? "sticky top-0 bg-[#1c1c1c] bg-opacity-90 z-50 backdrop-blur-md"
          : "sticky top-0 bg-black z-50 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center gap-2 z-50 relative">
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
          href="#faq"
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

      <div className="flex items-center gap-4 md:hidden relative z-50">
        <div className="flex relative items-center cursor-pointer bg-white text-black rounded-full w-[130px] transition duration-150 hover:scale-110 pr-2 gap-4 overflow-hidden group">
          <div className="absolute inset-y-1 left-1 h-8 w-8 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]"></div>
          <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
            <img src="/cart.png" alt="cart" className="w-4 h-4" />
          </div>
          <button className="relative transition-colors cursor-pointer duration-500 group-hover:text-white text-sm">
            Try Now
          </button>
        </div>

        <button
          className="text-white focus:outline-none z-50 relative"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-screen h-screen z-40 bg-black/90 backdrop-blur-lg flex flex-col items-start pt-24 pl-8 gap-8 md:hidden transition-transform duration-500 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#about"
          className="text-white text-3xl"
          onClick={() => setMobileOpen(false)}
        >
          About
        </a>
        <a
          href="#features"
          className="text-white text-3xl"
          onClick={() => setMobileOpen(false)}
        >
          Features
        </a>
        <a
          href="#faq"
          className="text-white text-3xl"
          onClick={() => setMobileOpen(false)}
        >
          FAQs
        </a>
        <a
          href="#contact"
          className="text-white text-3xl"
          onClick={() => setMobileOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
