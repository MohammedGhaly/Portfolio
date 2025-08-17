"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function SectionTitle({ title, cn }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    gsap.utils.toArray(".section-title").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "-10rem bottom",
          },
        },
      );
    });

    return () => {
      gsap.killTweensOf(".section-title");
      gsap.utils.toArray(".section-title").forEach((el) => {
        el.style = "";
      });
    };
  }, [isDesktop]);

  return (
    <h1
      className={`section-title w-full bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-[2.6rem] tracking-[1.6rem] text-transparent uppercase opacity-0 md:text-8xl md:tracking-[3.2rem] lg:mb-0 lg:text-[10vw] lg:tracking-[6vw] ${cn}`}
    >
      {title.slice(0, title.length - 1)}
      <p className="inline-block bg-gradient-to-b from-white/5 to-white/0 bg-clip-text text-[2.6rem] tracking-normal text-transparent md:text-8xl lg:text-[10vw]">
        {title[title.length - 1]}
      </p>
    </h1>
  );
}

export default SectionTitle;
