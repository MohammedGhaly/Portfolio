"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 15, // offset so circle is centered
        y: e.clientY - 15,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, [role='button'], input, textarea, select")
      ) {
        setIsHovering(true);
        // Animate cursor to larger size and change appearance
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, [role='button'], input, textarea, select")
      ) {
        setIsHovering(false);
        // Animate cursor back to normal size and appearance
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isDesktop) {
    return null; // Don't render cursor on mobile devices
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 30,
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "50%",
        pointerEvents: "none", // lets clicks pass through
        transform: "translate3d(0,0,0)", // prevent jitter
        zIndex: 9999,
      }}
    />
  );
}
