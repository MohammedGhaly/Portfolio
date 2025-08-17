import Image from "next/image";
import reactIcon from "@/public/react.svg";
import ts from "@/public/ts.svg";
// import three from "@/public/threejs.svg";
import tailwind from "@/public/tailwind-white.svg";
import gsapp from "@/public/gsap.svg";
import nextjs from "@/public/nextjs.svg";

function TechStack() {
  return (
    <div className="techs-div flex h-fit w-full items-center justify-around bg-gray-600/10 px-2 py-3 backdrop-blur-xs *:transition-all *:duration-300 *:ease-in-out md:justify-center md:gap-10 lg:justify-around lg:gap-0 lg:px-4 lg:py-2 lg:pr-[45%] *:lg:opacity-40 *:lg:hover:opacity-100 xl:-mt-[3vw] xl:py-[1.2vw]">
      <Image
        src={ts}
        alt="typescript"
        className="h-10 w-10 lg:h-11 lg:w-11 xl:h-[4vw] xl:w-[4vw]"
      />
      <Image
        src={reactIcon}
        alt="react"
        className="h-10 w-10 lg:h-11 lg:w-11 xl:h-[4vw] xl:w-[4vw]"
      />
      <Image
        src={nextjs}
        alt="next.js"
        className="h-10 w-10 lg:h-11 lg:w-11 xl:h-[4vw] xl:w-[4vw]"
      />
      <Image
        src={tailwind}
        alt="tailwind.css"
        className="h-12 w-12 lg:h-12 lg:w-12 xl:h-[4.4vw] xl:w-[4.4vw]"
      />
      <Image
        src={gsapp}
        alt="gsap"
        className="h-13 w-13 lg:h-11 lg:w-11 xl:h-[4.4vw] xl:w-[4.4vw]"
      />
    </div>
  );
}

export default TechStack;
