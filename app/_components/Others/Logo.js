"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Logo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollY / height);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const strokeDashoffset = 1 - progress;

  return (
    <div className="fixed top-2 left-2 z-20 flex min-h-16 min-w-16 cursor-pointer items-center justify-center rounded-full shadow-lg 2xl:h-[4.8vw] 2xl:w-[4.8vw]">
      <svg
        className={`h-16 w-16 2xl:h-[4.8vw] 2xl:w-[4.8vw] ${strokeDashoffset === 1 ? "hidden" : ""}`}
        viewBox="0 0 100 100"
        key={"svg1"}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#45495c"
          strokeWidth="5"
          strokeDasharray="1"
          strokeDashoffset={strokeDashoffset}
          pathLength="1"
          strokeLinecap="round"
        />
      </svg>
      <div
        key={"svg2"}
        className="absolute pt-[4px] 2xl:pt-[0.5vw]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image
          height={48}
          width={48}
          className="2xl:h-[4vw] 2xl:w-[4vw]"
          src="/logo.svg"
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Logo;
