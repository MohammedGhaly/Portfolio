"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function HeroWrapper({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    console.log("isDesktop", isDesktop);

    if (isDesktop) {
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();
      gsap.to(".hero-wrapper", {
        scrollTrigger: {
          trigger: ".hero-wrapper",
          start: "top +=80",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
      });
      gsap.to(".ghaly", {
        scrollTrigger: {
          trigger: ".hero-wrapper",
          start: "top +=90",
          end: "bottom top",
          scrub: true,
        },
        letterSpacing: "4.5rem",
      });
    }
    return () => {
      console.log("Cleaning up GSAP animations");
      gsap.killTweensOf(".hero-wrapper");

      gsap.killTweensOf(".ghaly");
      gsap.utils.toArray(".ghaly").forEach((el) => {
        el.style = "";
      });
    };
  }, [isDesktop]);
  return (
    <div className="hero-wrapper flex w-full lg:absolute lg:top-20 xl:top-[7.6vw]">
      {children}
    </div>
  );
}

export default HeroWrapper;
