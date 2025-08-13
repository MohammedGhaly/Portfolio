import Image from "next/image";
import reactIcon from "@/public/react.svg";
import ts from "@/public/ts.svg";
import three from "@/public/threejs.svg";
import gsapp from "@/public/gsap.svg";
import nextjs from "@/public/nextjs.svg";

function TechStack() {
  return (
    <div className="techs-div flex h-fit w-full items-center justify-around bg-gray-600/10 px-2 py-3 backdrop-blur-xs *:transition-all *:duration-300 *:ease-in-out md:justify-center md:gap-10 lg:justify-around lg:gap-0 lg:pr-[50%] lg:pl-6 *:lg:opacity-40 *:lg:hover:opacity-100">
      <Image
        src={reactIcon}
        alt="react"
        className="h-10 w-10 lg:h-14 lg:w-14"
      />
      <Image src={nextjs} alt="nextjs" className="h-10 w-10 lg:h-14 lg:w-14" />
      <Image src={ts} alt="typescript" className="h-10 w-10 lg:h-14 lg:w-14" />
      <Image src={gsapp} alt="gsap" className="h-16 w-16 lg:h-14 lg:w-14" />
      <Image src={three} alt="three.js" className="h-15 w-15 lg:h-16 lg:w-16" />
    </div>
  );
}

export default TechStack;
