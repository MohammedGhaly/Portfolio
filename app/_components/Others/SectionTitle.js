"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SectionTitle({ title, cn }) {
  useGSAP(() => {
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
  }, []);

  return (
    <h1
      className={`section-title w-full bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-5xl tracking-[1.6rem] text-transparent uppercase opacity-0 md:text-8xl md:tracking-[3.2rem] lg:mb-0 lg:text-[10vw] lg:tracking-[6vw] ${cn}`}
    >
      {title.slice(0, title.length - 1)}
      <p className="inline-block bg-gradient-to-b from-white/5 to-white/0 bg-clip-text text-5xl tracking-normal text-transparent md:text-8xl lg:text-[10vw]">
        {title[title.length - 1]}
      </p>
    </h1>
  );
}

export default SectionTitle;
