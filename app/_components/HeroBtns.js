"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function HeroBtns() {
  const scrollToContact = () => {
    gsap.to(window, { duration: 0.6, scrollTo: "#contactForm" });
  };

  return (
    <div className="btns-div md:gap- flex w-full items-center justify-between gap-4 p-8 *:w-full *:cursor-pointer *:rounded-full *:py-4 *:text-center *:text-xl *:font-semibold *:transition-all *:duration-200 md:justify-between md:px-32 *:md:w-full *:md:text-2xl lg:justify-start lg:pr-28 lg:pl-20 *:lg:text-2xl">
      <button className="text-darkBlue bg-white hover:brightness-90">
        Download CV
      </button>
      <button
        className="w-full border-[1px] border-white bg-gray-400/20 text-white backdrop-blur-xs hover:brightness-[1.25]"
        onClick={scrollToContact}
      >
        Contact
      </button>
    </div>
  );
}

export default HeroBtns;
