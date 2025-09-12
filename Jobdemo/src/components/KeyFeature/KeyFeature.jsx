import React from "react";
import "./KeyFeature.css";

export default function KeyFeature() {
  return (
    <div className="parallax flex flex-col min-h-screen py-14 px-10">
      <div className="max-w-7xl mx-auto gap-10 space-y-7">
        {/* Header */}
        <div className="content flex flex-col space-y-4 max-w-5xl">
          <button className="w-[120px] h-[30px] bg-[#00BB77] text-black rounded-full text-sm">
            Whats the best
          </button>
          <h1 className="text-5xl md:text-7xl text-white font-medium">
            Key Features
          </h1>
          <p className="text-[#FFFFFF80]">
            We’re proud to announce the features{" "}
            <span className="sm:block">that empower creatives every day.</span>
          </p>
        </div>

        {/* Grid 1 */}
        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="w-[450px] h-[320px] rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Interview <br /> Deadline
          </div>
          <div></div>
          <div className="w-[450px] h-[320px] rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Explore more <br /> about us
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid grid-cols-3 gap-4 text-white">
          <div></div>
          <div className="w-[450px] h-[320px] text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Apply before other applicants
          </div>
          <div></div>
        </div>

        {/* Grid 3 */}
        <div className="grid grid-cols-3 gap-4 text-white relative">
          <div className="col-span-2 text-6xl place-content-center text-balance max-w-3xl">
            <h1>
              Creative people worldwide rely on this app to craft ideas into{" "}
              <span className="highlight text-[#00BB77]">digital magic.</span>
            </h1>
          </div>

          <div className="w-[450px] h-[320px] group relative text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end overflow-hidden  hover:border border-[#00BB77] transition-all duration-500">
  Our creativity <br /> in Design

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="absolute top-1/2 left-1/2 w-20 h-20 text-white group-hover:text-[#00BB77] transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-300 group-hover:translate-x-32 group-hover:-translate-y-36 group-hover:scale-100"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5v11.25"
    />
  </svg>
</div>
</div>

        {/* Grid 4 */}
        <div className="grid grid-cols-3 gap-6 text-white">
          <div className="w-[450px] h-[320px] text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Unique analytics of our growth
          </div>
          <div className="w-[450px] h-[320px] text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Smooth UI functioned websites
          </div>
        </div>
      </div>
    </div>
  );
}
