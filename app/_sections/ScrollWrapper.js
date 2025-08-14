"use client";

import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/all";
import Logo from "../_components/Others/Logo";
import gsap from "gsap";
import BackgroundGradient from "./BackgroundGradient";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function ScrollWrapper({ children }) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2.2,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <Logo />
      <BackgroundGradient />
      <div id="smooth-content">{children}</div>
    </div>
  );
}
