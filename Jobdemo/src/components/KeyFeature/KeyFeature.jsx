import React from "react";
import "./KeyFeature.css";

const boxClasses =
  "w-[450px] h-[320px] group relative text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end overflow-hidden transition-all duration-500 hover:border border-[#00BB77]";

const Arrow = () => (
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
);

const Box = ({ text }) => (
  <div className={boxClasses}>
    {text.split("\n").map((line, i) => (
      <span key={i}>{line}<br /></span>
    ))}
    <Arrow />
  </div>
);

export default function KeyFeature() {
  const gridData = [
    ["Interview\nDeadline", null, "Explore more\nabout us"],
    [null, "Apply before other applicants", null],
    [
      { heading: "Creative people worldwide rely on this app to craft ideas into digital magic.", span: 2, custom: "text-6xl max-w-3xl" },
      "Our creativity\nin Design"
    ],
    ["Unique analytics of our growth", "Smooth UI functioned websites"]
  ];

  return (
    <div className="parallax flex flex-col min-h-screen py-14 px-10">
      <div className="max-w-7xl mx-auto space-y-7">
        <div className="content flex flex-col space-y-4 max-w-5xl">
          <button className="w-[120px] h-[30px] bg-[#00BB77] text-black rounded-full text-sm">
            Whats the best
          </button>
          <h1 className="text-5xl md:text-7xl text-white font-medium">Key Features</h1>
          <p className="text-[#FFFFFF80]">
            We’re proud to announce the features{" "}
            <span className="sm:block">that empower creatives every day.</span>
          </p>
        </div>

        {gridData.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 gap-24 text-white ${i === 2 ? "relative" : ""}`}>
            {row.map((cell, j) => {
              if (!cell) return <div key={j}></div>;

              if (typeof cell === "object" && cell.heading) {
                return (
                  <div key={j} className={`col-span-${cell.span} ${cell.custom} text-white`}>
                    {cell.heading.split(" into ").map((part, idx) =>
                      idx === 1 ? (
                        <span key={idx}>
                          into <span className="highlight text-[#00BB77]">{part}</span>
                        </span>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                  </div>
                );
              }

              return <Box key={j} text={cell} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
