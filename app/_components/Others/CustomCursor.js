"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
