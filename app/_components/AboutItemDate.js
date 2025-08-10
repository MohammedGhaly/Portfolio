"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function AboutItemDate({ date }) {
  const [text, setText] = useState(
    date.endsWith("Present") ? "Present" : date.slice(date.length - 2),
  );
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  useGSAP(() => {
    if (isHovered) {
      setText(date);
      gsap.to(ref.current, {
        width: "8rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      setText(
        date.endsWith("Present") ? "Present" : date.slice(date.length - 2),
      );
      gsap.to(ref.current, {
        width: date.endsWith("Present") ? "5rem" : "2rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isHovered]);

  return (
    <h2
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block h-8 cursor-default overflow-hidden rounded-full bg-gray-600/10 text-center align-text-top text-lg leading-5 whitespace-nowrap normal-case backdrop-blur-xs transition-all duration-300 ease-in-out md:px-2 md:py-1 md:text-2xl lg:text-lg"
    >
      {text}
    </h2>
  );
}
