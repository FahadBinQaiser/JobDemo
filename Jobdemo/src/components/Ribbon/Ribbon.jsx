import React from "react"
import './Ribbon.css'

export default function Ribbon() {
  const bannerText = [
    "Get one year FREE",
    "Only for limited users",
    "Join the launch event",
    "Get one year FREE",
    "Only for limited users",
  ]

  return (
    <div className="space-y-2">
      <div className="relative overflow-hidden bg-[#166E4E] h-12 flex items-center">
        
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#166E4E] to-transparent z-10" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#166E4E] to-transparent z-10" />

        <div className="animate-scroll-left flex items-center whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {bannerText.map((text, index) => (
                <div key={`${i}-${index}`} className="flex items-center">
                  <span className="text-white font-medium px-6">{text}</span>
                  <div className="text-white mx-2">✦</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
