import React from "react";
import "./KeyFeature.css";

const boxes = [
  { text: "Interview\nDeadline", position: "left" },
  { text: "Explore more\nabout us", position: "right" },
  { text: "Apply before other applicants", position: "center" },
  { text: "Our creativity\nin Design", position: "right" },
  { text: "Unique analytics of our growth", position: "left" },
  { text: "Smooth UI functioned websites", position: "right" },
];

export default function KeyFeature() {
  const renderBox = (box) => {
    const baseClasses =
      "w-[450px] h-[320px] rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end text-white";
    const emptyBox = <div></div>;

    if (box.position === "center") return <div className="col-span-3 flex justify-center">{baseClasses && <div className={baseClasses}>{box.text}</div>}</div>;

    if (box.position === "left") return <div className={baseClasses}>{box.text}</div>;
    if (box.position === "right") return <div className={baseClasses}>{box.text}</div>;

    return emptyBox;
  };

  return (
    <div className="parallax flex flex-col min-h-screen py-14 px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="content flex flex-col space-y-4 max-w-5xl">
          <button className="w-[120px] text-black h-[30px] bg-[#00BB77] rounded-full text-sm">
            Whats the best
          </button>
          <h1 className="text-5xl md:text-7xl text-white font-medium">Key Features</h1>
          <p className="text-[#FFFFFF80]">
            We’re proud to announce the features{" "}
            <span className="sm:block">that empower creatives every day.</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">{renderBox(boxes[0])}</div>
          <div></div>
          <div className="col-span-1">{renderBox(boxes[1])}</div>
        </div>

        <div className="grid grid-cols-3 place-content-center place-items-center gap-6">
          <div></div>
          <div className="col-span-1">{renderBox(boxes[2])}</div>
          <div></div>
        </div>

        <div className="grid grid-cols-3 gap-6 items-center">
          <div className="col-span-2 text-white text-6xl max-w-3xl text-balance">
            Creative people worldwide rely on this app to craft ideas into{" "}
            <span className="highlight text-[#00BB77]">digital magic.</span>
          </div>
          <div className="col-span-1">{renderBox(boxes[3])}</div>
        </div>

        <div className="grid grid-cols-3 gap-24">
          <div className="col-span-1">{renderBox(boxes[4])}</div>
          <div className="col-span-1">{renderBox(boxes[5])}</div>
        </div>
      </div>
    </div>
  );
}
