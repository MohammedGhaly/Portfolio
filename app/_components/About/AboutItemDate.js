"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function AboutItemDate({ date }) {
  const [text, setText] = useState(
    date.endsWith("Now") ? "Now" : date.slice(date.length - 4),
  );
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    if (isHovered) {
      setText(date);
      gsap.to(ref.current, {
        width: isMobile ? "5rem" : "8rem",
        duration: 0.2,
        ease: "power2.inOut",
      });
    } else {
      setText(date.endsWith("Now") ? "Now" : date.slice(date.length - 4));
      gsap.to(ref.current, {
        width: isMobile
          ? date.endsWith("Now")
            ? "4rem"
            : "3rem"
          : date.endsWith("Now")
            ? "6vw"
            : "4.6vw",
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [isHovered]);

  return (
    <h2
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex h-6 items-center justify-center overflow-hidden rounded-full bg-gray-600/10 py-[5px] text-center text-xs leading-5 whitespace-nowrap normal-case backdrop-blur-xs transition-all duration-300 ease-in-out md:px-2 md:text-lg lg:h-[2.2vw] lg:px-[0.8vw] lg:text-[1.2vw]"
    >
      {text}
    </h2>
  );
}
