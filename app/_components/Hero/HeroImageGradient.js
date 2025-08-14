import Image from "next/image";
import HeroGradient from "./HeroGradient";
import myImage from "@/public/me.png";
import Link from "next/link";
import x from "@/public/x.svg";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";

function HeroImageGradient() {
  return (
    <div className="px-8 md:px-48 lg:w-1/2 lg:self-start lg:px-0">
      <div className="relative z-10 mt-20 aspect-square w-full overflow-hidden rounded-[2.4rem] bg-[url('/gradient-bg.png')] bg-cover bg-center md:mt-24 lg:mt-0 lg:h-[90%] lg:w-full lg:rounded-none lg:rounded-bl-[120px]">
        <HeroGradient />
        <Image
          src={myImage}
          alt="Mohamed Ghaly"
          className="absolute bottom-0 left-1/2 z-10 h-[83%] w-auto -translate-x-1/2 translate-y-2"
        />
        <p className="ghaly lg:text absolute top-3 right-1/2 w-fit translate-x-[55%] bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-7xl tracking-[1.8rem] text-transparent md:text-8xl md:tracking-[2.4rem] lg:top-10 lg:text-9xl lg:tracking-[3.4rem] 2xl:text-[10vw] 2xl:tracking-[3.4vw]">
          {"GHALY"}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="absolute right-4 bottom-12 flex w-fit flex-col gap-3 lg:bottom-8 2xl:right-[1.4vw] 2xl:bottom-[1.9vw] 2xl:gap-4">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={"https://x.com/XXXGhalytacion?t=595mPwo3_QSm0jGEP0CSSQ&s=09"}
      >
        <Image
          className="w-6 transition-all duration-300 ease-in-out lg:w-10 lg:opacity-60 lg:hover:opacity-100 2xl:w-[2.7vw]"
          src={x}
          alt="link to X account"
        />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={"https://github.com/MohammedGhaly"}
      >
        <Image
          className="w-6 transition-all duration-300 ease-in-out lg:w-10 lg:opacity-60 lg:hover:opacity-100 2xl:w-[2.7vw]"
          src={github}
          alt="link to Github account"
        />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://www.linkedin.com/in/mohammed-ghaly-16a401150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      >
        <Image
          className="w-6 transition-all duration-300 ease-in-out lg:w-10 lg:opacity-60 lg:hover:opacity-100 2xl:w-[2.7vw]"
          src={linkedin}
          alt="link to Linkedin account"
        />
      </Link>
    </div>
  );
}

export default HeroImageGradient;
