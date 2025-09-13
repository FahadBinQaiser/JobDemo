import React from "react";
import "./KeyFeature.css";

const boxClasses =
  "w-[360px] h-[320px] group relative text-balance rounded-2xl bg-[#1C1C1C] font-medium p-6 flex text-4xl px-8 pb-16 justify-start items-end overflow-hidden transition-all duration-500 hover:border border-[#00BB77]";

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="absolute top-1/2 left-1/2 w-20 h-20 text-white group-hover:text-[#00BB77] transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-300 group-hover:translate-x-20 group-hover:-translate-y-36 group-hover:scale-100"
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
      <span key={i}>
        {line}
        <br />
      </span>
    ))}
    <Arrow />
  </div>
);

const MobileCard = ({ text }) => (
  <div className="min-w-[280px] h-[240px] group relative text-balance rounded-2xl bg-[#1C1C1C] font-medium p-4 flex text-2xl px-6 pb-8 justify-start items-end overflow-hidden transition-all duration-500 hover:border border-[#00BB77] snap-start">
    <div className="text-white leading-tight">
      {text.split(" ").map((word, i) => (
        <span key={i}>{word} </span>
      ))}
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="absolute top-1/2 left-1/2 w-12 h-12 text-white group-hover:text-[#00BB77] transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-300 group-hover:translate-x-16 group-hover:-translate-y-16 group-hover:scale-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5v11.25"
      />
    </svg>
  </div>
);

export default function KeyFeature() {
  const gridData = [
    ["Interview Deadline", null, "Explore more about us"],
    [null, "Apply before other applicants", null],
    [
      {
        heading:
          "Creative people worldwide rely on this app to craft ideas into digital magic.",
        span: 2,
        custom: "text-6xl max-w-4xl",
      },
      "Our creativity in Design",
    ],
    ["Unique analytics of our growth", "Smooth UI functioned websites"],
  ];

  const mobileCards = [
    "Interview Deadline",
    "Explore more about us",
    "Apply before other applicants",
    "Our creativity in Design",
    "Unique analytics of our growth",
    "Smooth UI functioned websites",
  ];

  return (
    <>
      <div className="parallax hidden sm:flex flex-col min-h-screen py-14 px-10">
        <div className="max-w-5xl mx-auto space-y-7">
          <div className="content flex flex-col space-y-4 max-w-5xl">
            <button className="w-[120px] h-[30px] bg-[#00BB77] text-black rounded-full text-sm">
              Whats the best
            </button>
            <h1 className="text-5xl md:text-7xl text-white font-medium">
              Key Features
            </h1>
            <p className="text-[#FFFFFF80]">
              We're proud to announce the features{" "}
              <span className="sm:block">
                that empower creatives every day.
              </span>
            </p>
          </div>

          {gridData.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 gap-24 text-white ${
                i === 2 ? "relative" : ""
              }`}
            >
              {row.map((cell, j) => {
                if (!cell) return <div key={j}></div>;

                if (typeof cell === "object" && cell.heading) {
                  return (
                    <div
                      key={j}
                      className={`col-span-${cell.span} ${cell.custom} text-white flex justify-start items-center`}
                    >
                      <div className="text-5xl text-left leading-tight text-[#FFFFFF80]">
                        Creative people worldwide rely on this app to craft
                        ideas into{" "}
                        <span className="highlight text-[#00BB77]">
                          digital magic.
                        </span>
                      </div>
                    </div>
                  );
                }

                return <Box key={j} text={cell} />;
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex sm:hidden  flex-col min-h-screen py-8 px-4 bg-black">
        <div className="flex flex-col space-y-4 mb-8">
          <button className="w-[120px] h-[30px] bg-[#00BB77] text-black rounded-full text-sm">
            Whats the best
          </button>
          <h1 className="text-4xl text-white font-medium">Key Features</h1>
          <p className="text-[#FFFFFF80] text-sm">
            We're proud to announce the features that empower creatives every
            day.
          </p>
        </div>

        <div className="flex flex-row gap-4 overflow-x-scroll pb-4 snap-x snap-mandatory scrollbar-hide">
          {mobileCards.map((text, idx) => (
            <MobileCard key={idx} text={text} />
          ))}
        </div>

        <div className="w-4 flex-shrink-0"></div>
      </div>
    </>
  );
}
