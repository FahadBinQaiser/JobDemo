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

        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
            />
          </svg>
          Try Now
        </button>
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
