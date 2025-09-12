import React from "react"
import './HeroSection.css'
export default function HeroSection() {
  return (
    <div className="bg-black">
        <div className="herosection min-h-screen text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src="/logo/Logomark.png" alt="CirriNote" />
          </div>
          <span className="text-white text-xl font-semibold">CirriNote</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-green-400 transition-colors">About</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">Features</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">FAQs</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">Contact</a>
        </nav>
                <div className="relative flex items-center bg-white text-black rounded-full w-[167px] pr-6 gap-4 overflow-hidden group">
        <div className="absolute inset-y-1 left-1 h-10 w-10 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-[calc(100%-0.5rem)]"></div>

        <div className="relative z-10 flex items-center justify-center w-12 h-12">
            <img src="/cart.png" alt="cart" className="w-5 h-5" />
        </div>

        <button className="relative z-10 transition-colors duration-500 group-hover:text-white">
            Try Now
        </button>
        </div>


      </header>

      <div className="flex justify-center">
        <img
          src="/Octopus.png"
          alt="CirriNote mascot - friendly octopus with glasses holding a notebook"
          className="w-8/12 h-full object-cover"
        />
      </div>
    </div>
    </div>
  )
}
