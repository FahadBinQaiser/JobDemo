import React from "react";
import "./KeyFeature.css";

export default function KeyFeature() {
  return (
    <div className="parallax flex flex-col min-h-screen py-14 px-10">
      <div className="max-w-7xl mx-auto gap-10 space-y-7">
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

        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="w-[450px] h-[320px] rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Interview <br /> Deadline
          </div>
          <div></div>
          <div className="w-[450px] h-[320px] rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Explore more <br /> about us
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-white">
          <div></div>
          <div className="w-[450px] h-[320px] text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Apply before other applicants
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="col-span-2 text-6xl place-content-center text-balance max-w-3xl">
            <h1>
              Creative people worldwide rely on this app to craft ideas into{" "}
              <span className="highlight text-[#00BB77]">digital magic.</span>
            </h1>
          </div>
          <div className="w-[450px] h-[320px] text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end">
            Our creativity <br /> in Design
          </div>
        </div>

        <div className="grid grid-cols-3 gap-30 text-white">
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
