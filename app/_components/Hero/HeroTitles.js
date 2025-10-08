"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function HeroTitles() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(".closingBracket", {
      delay: 1,
      duration: 0.4,
      x: "9.6vw",
      ease: "back.inOut",
    })
      .to(
        ".fh",
        {
          duration: 1,
          y: "-110%",
          stagger: 0.2,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        ".sh",
        {
          duration: 1,
          y: "-100%",
          stagger: 0.2,
          ease: "power2.out",
        },
        "<",
      )
      .set(".fh", {
        y: 100,
      })
      .to(".sh", {
        delay: 3,
        duration: 1,
        y: "-210%",
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        ".fh",
        {
          duration: 1,
          y: 0,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        ".closingBracket",
        {
          x: 0,
          duration: 0.4,
          ease: "back.inOut",
        },
        "-=0.8",
      )
      .set(".sh", { y: 0 });

    return () => {
      tl.kill();
      gsap.utils.toArray(".fh, .sh, .closingBracket").forEach((el) => {
        el.style = "";
      });
    };
  }, [isMobile]);

  return (
    <div className="h-fit w-full lg:flex lg:w-[50vw] lg:justify-center">
      <div className="mb-6 flex h-fit flex-1 justify-center gap-8 py-1 text-white lg:mb-18 lg:justify-center">
        <div className="flex flex-col bg-transparent *:flex *:items-center *:justify-center *:text-5xl *:tracking-[0.2rem] *:md:text-7xl lg:-ml-[6vw] *:lg:text-6xl *:xl:text-[5.2vw]">
          <div className="hidden gap-4 lg:flex">
            <p className="text-yellow hidden self-start align-top text-5xl font-bold lg:block lg:-translate-x-2 lg:text-5xl xl:text-[4.2vw] 2xl:-translate-x-[1vw]">
              {"{"}
            </p>{" "}
            <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-0 *:lg:h-16 *:xl:h-[5.4vw] *:*:2xl:border-b-3">
              <div className="flex h-13 w-full flex-col items-center overflow-hidden md:h-20 lg:items-start">
                <h2 className="border-orange fh w-fit border-b uppercase">I</h2>
                <h2 className="border-orange sh w-fit border-b uppercase">
                  Software
                </h2>
              </div>
              <div className="flex h-13 w-full flex-col items-center overflow-hidden md:h-20 lg:h-19 lg:items-start">
                <h2 className="border-purple fh w-fit border-b uppercase">
                  Am
                </h2>
                <h2 className="border-purple sh w-fit border-b uppercase">
                  Builder &
                </h2>
              </div>
              <div className="flex h-13 w-full flex-col items-center overflow-hidden md:h-20 lg:h-19 lg:items-start">
                <h2 className="border-cyan fh w-fit border-b uppercase">
                  Mohamed
                </h2>
                <h2 className="border-cyan sh w-fit border-b uppercase">
                  Frontend
                </h2>
              </div>
              <div className="relative flex h-13 w-full flex-col items-center overflow-hidden md:h-20 lg:h-19 lg:items-start">
                <h2 className="border-fuschia fh w-fit border-b uppercase">
                  Ghaly{" "}
                </h2>
                <h2 className="border-fuschia sh w-fit border-b uppercase">
                  developer
                </h2>
              </div>
            </div>
            <p className="text-yellow closingBracket hidden translate-y-2 self-start align-top text-5xl font-bold lg:mb-2 lg:-ml-[9vw] lg:block lg:-translate-y-1 lg:self-end lg:text-5xl xl:text-[4.2vw] 2xl:-translate-y-[0.4vw]">
              {"}"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTitles;
