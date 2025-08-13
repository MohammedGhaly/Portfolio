"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function AboutTitles({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    gsap.from(".about-item", {
      scrollTrigger: {
        trigger: ".about-item",
        start: isMobile ? "top bottom" : "top 85%",
        end: "top 75%",
        // markers: true,
      },
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, [isMobile]);

  return <>{children}</>;
}

export default AboutTitles;
