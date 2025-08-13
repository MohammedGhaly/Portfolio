"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function AnimationIcon() {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);

  useEffect(() => {
    const circle1 = circle1Ref.current;
    const circle2 = circle2Ref.current;
    const circle3 = circle3Ref.current;

    gsap.set(circle1, { x: 30, y: 0 });
    gsap.set(circle2, { x: 0, y: 60 });
    gsap.set(circle3, { x: 60, y: 60 });

    const tl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 1 });

    tl.to(circle1, {
      x: 0,
      y: 60,
      duration: 1,
      ease: "power1.inOut",
    })
      .to(
        circle2,
        {
          x: 60,
          y: 60,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        circle3,
        {
          x: 30,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  }, []);

  return (
    <div className="circlesContainer relative mb-4 h-24 w-24 md:mb-9">
      <div
        ref={circle1Ref}
        className="absolute h-8 w-8 rounded-full bg-white"
      ></div>
      <div
        ref={circle2Ref}
        className="absolute h-8 w-8 rounded-full bg-white"
      ></div>
      <div
        ref={circle3Ref}
        className="absolute h-8 w-8 rounded-full bg-white"
      ></div>
    </div>
  );
}

export default AnimationIcon;
