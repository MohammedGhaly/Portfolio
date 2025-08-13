"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Services({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    if (isMobile) return;
    gsap.from(".services-container", {
      scrollTrigger: {
        trigger: ".services-container",
        start: "-240 bottom",
      },
      opacity: 0,
      y: 300,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isMobile]);
  return (
    <div className="services-container flex flex-col gap-18 md:flex-row md:justify-center md:gap-8">
      {children}
    </div>
  );
}

export default Services;
