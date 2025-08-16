"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const defaultColor = "#FFFFFF40";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      const isInProject =
        e.target.closest(
          '[id^="project"] div, [id^="project"] p, [id^="project"] h4',
        ) !== null;

      if (isInProject) cursor.style.display = "none";
      else {
        cursor.style.display = "block";

        gsap.to(cursor, {
          x: e.clientX - 15, // offset so circle is centered
          y: e.clientY - 15,
          duration: 0.15,
          ease: "power2.out",
        });
      }
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
          backgroundColor: defaultColor,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousedown", handleMouseMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
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
        backgroundColor: defaultColor,
        borderRadius: "50%",
        pointerEvents: "none", // lets clicks pass through
        transform: "translate3d(0,0,0)", // prevent jitter
        zIndex: 9999,
      }}
    />
  );
}
